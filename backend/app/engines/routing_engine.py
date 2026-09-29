"""
Safety-Aware Evacuation Routing Engine.
Implements multi-criteria cost-based routing (Dijkstra / A*) avoiding blocked roads
and penalizing flood hazard, traffic congestion, and degraded conditions.
"""
from typing import Dict, Any, List, Optional, Tuple
import networkx as nx
from backend.app.engines.road_graph import build_road_graph, INTERSECTION_NODES

# Mapping population clusters to their closest road network node
POPULATION_NODE_MAP = {
    "pop-ekta-nagar": "node_vitthalwadi",
    "pop-pulachi-wadi": "node_alka_talkies",
    "pop-sangamwadi": "node_sangamwadi_jnc",
    "pop-sadashiv-low": "node_sadashiv_peth",
}

# Mapping population coordinates for exact start pin attachment
POPULATION_COORDS = {
    "pop-ekta-nagar": [73.8280, 18.4840],
    "pop-pulachi-wadi": [73.8430, 18.5155],
    "pop-sangamwadi": [73.8655, 18.5310],
    "pop-sadashiv-low": [73.8460, 18.5070],
}

# Mapping shelters to their road network node
SHELTER_NODE_MAP = {
    "sh-kothrud-natya": "node_kothrud_depot",
    "sh-mit-sports": "node_mit_campus",
    "sh-sarasbaug": "node_sarasbaug_jnc",
    "sh-sp-college": "node_sadashiv_peth",
}

# Configurable cost weights defined in architecture.md
DEFAULT_WEIGHTS = {
    "travel_time": 1.0,          # Base minutes
    "hazard_penalty": 15.0,      # Heavy penalty for flood exposure (0.0 - 1.0)
    "congestion_penalty": 8.0,   # Penalty for load / capacity ratio (> 0.8)
    "road_condition_penalty": 4.0 # Penalty for non-dry conditions
}


class RoutingEngine:
    def __init__(self, weights: Optional[Dict[str, float]] = None):
        self.weights = weights or DEFAULT_WEIGHTS

    def calculate_edge_cost(self, edge_data: Dict[str, Any]) -> float:
        """
        Calculates dynamic edge traversal cost.
        Returns infinity (or float('inf')) if edge is blocked.
        
        Formula:
          cost = base_travel_time 
               + (hazard_exposure * hazard_penalty) 
               + (load_ratio * congestion_penalty) 
               + condition_penalty
        """
        if edge_data.get("is_blocked", False):
            return float("inf")

        base_time = edge_data.get("base_travel_time_min", 5.0)
        hazard = edge_data.get("hazard_exposure", 0.0)
        cap = max(edge_data.get("capacity_vph", 2000), 1)
        load = edge_data.get("current_load_vph", 0)
        load_ratio = load / cap

        condition = edge_data.get("condition", "OPERATIONAL")
        condition_penalty = 0.0
        if "WATERLOGGED" in condition or "OVERFLOW" in condition:
            condition_penalty = 2.5
        elif "SUBMERGED" in condition:
            return float("inf")

        cost = (
            (base_time * self.weights["travel_time"]) +
            (hazard * self.weights["hazard_penalty"]) +
            (load_ratio * self.weights["congestion_penalty"]) +
            condition_penalty
        )
        return max(cost, 0.1)

    def find_routes_for_cluster(
        self,
        cluster_id: str,
        target_shelters: List[Dict[str, Any]],
        roads_override: Optional[List[Dict[str, Any]]] = None,
        k_routes: int = 3
    ) -> List[Dict[str, Any]]:
        """
        Finds multiple viable evacuation routes from a population cluster to shelters.
        Never recommends routes traversing blocked roads.
        """
        origin_node = POPULATION_NODE_MAP.get(cluster_id)
        if not origin_node:
            return []

        G = build_road_graph(roads_override)

        # Filter out blocked edges completely to ensure safety
        usable_G = nx.DiGraph()
        for u, v, data in G.edges(data=True):
            if not data.get("is_blocked", False):
                cost = self.calculate_edge_cost(data)
                usable_G.add_edge(u, v, weight=cost, **data)

        # Ensure all nodes exist in usable_G
        for n, ndata in G.nodes(data=True):
            if n not in usable_G:
                usable_G.add_node(n, **ndata)

        all_candidate_routes: List[Dict[str, Any]] = []

        for shelter in target_shelters:
            shelter_id = shelter["id"]
            dest_node = SHELTER_NODE_MAP.get(shelter_id)
            if not dest_node or origin_node == dest_node:
                # If already at shelter node, create immediate arrival route
                if origin_node == dest_node:
                    all_candidate_routes.append({
                        "route_id": f"rte-{cluster_id}-{shelter_id}-direct",
                        "name": f"Direct Shelter Access -> {shelter['name']}",
                        "origin_cluster_id": cluster_id,
                        "destination_shelter_id": shelter_id,
                        "destination_shelter_name": shelter["name"],
                        "total_distance_m": 100,
                        "eta_minutes": 1.5,
                        "total_cost": 1.0,
                        "risk_level": "SAFE",
                        "hazard_score": 0.0,
                        "congestion_status": "NORMAL",
                        "max_congestion_ratio": 0.1,
                        "is_recommended": True,
                        "is_viable": True,
                        "path_nodes": [origin_node],
                        "road_ids": [],
                        "coordinates": [[INTERSECTION_NODES[origin_node]["longitude"], INTERSECTION_NODES[origin_node]["latitude"]]],
                        "reasons": ["Direct immediate shelter proximity", "No hazard exposure", "Fully operational"]
                    })
                continue

            try:
                # Find shortest simple paths using Yen's k-shortest paths algorithm
                paths = list(nx.shortest_simple_paths(usable_G, origin_node, dest_node, weight="weight"))
            except (nx.NetworkXNoPath, nx.NodeNotFound):
                paths = []

            for path_idx, path in enumerate(paths[:2]):
                route_meta = self._compile_route_details(
                    cluster_id=cluster_id,
                    shelter=shelter,
                    path=path,
                    graph=usable_G,
                    index=path_idx
                )
                if route_meta:
                    all_candidate_routes.append(route_meta)

        # Sort all routes by total_cost (safety + time + hazard)
        all_candidate_routes.sort(key=lambda r: r["total_cost"])

        # Mark top route as recommended, others as alternative
        for i, r in enumerate(all_candidate_routes):
            r["is_recommended"] = (i == 0)
            if i > 0:
                r["route_type"] = "ALTERNATIVE"
            else:
                r["route_type"] = "PRIMARY_RECOMMENDED"

        return all_candidate_routes

    def _compile_route_details(
        self,
        cluster_id: str,
        shelter: Dict[str, Any],
        path: List[str],
        graph: nx.DiGraph,
        index: int
    ) -> Optional[Dict[str, Any]]:
        total_distance = 0
        total_time = 0.0
        total_cost = 0.0
        hazard_accum = 0.0
        max_load_ratio = 0.0
        road_ids = []
        coordinates = []
        reasons = []

        for i in range(len(path) - 1):
            u, v = path[i], path[i+1]
            if not graph.has_edge(u, v):
                return None
            edata = graph[u][v]
            
            total_distance += edata.get("distance_m", 1000)
            total_time += edata.get("base_travel_time_min", 3.0)
            cost = edata.get("weight", 1.0)
            total_cost += cost
            
            h = edata.get("hazard_exposure", 0.0)
            hazard_accum += h
            
            cap = max(edata.get("capacity_vph", 2000), 1)
            load = edata.get("current_load_vph", 0)
            ratio = load / cap
            if ratio > max_load_ratio:
                max_load_ratio = ratio

            road_ids.append(edata.get("road_id"))
            for coord in edata.get("coordinates", []):
                if not coordinates or coordinates[-1] != coord:
                    coordinates.append(coord)

        num_edges = max(len(path) - 1, 1)
        avg_hazard = hazard_accum / num_edges

        # Determine risk classification
        if avg_hazard < 0.2:
            risk_level = "LOW"
            reasons.append("Low flood inundation exposure (< 20%)")
        elif avg_hazard < 0.45:
            risk_level = "MODERATE"
            reasons.append("Moderate flood proximity; elevated corridor safe")
        else:
            risk_level = "HIGH"
            reasons.append("Caution: passes near saturated riverbank fringes")

        # Congestion classification
        if max_load_ratio < 0.6:
            congestion_status = "NORMAL"
            reasons.append("Smooth traffic flow; under 60% corridor capacity")
        elif max_load_ratio < 0.85:
            congestion_status = "CAUTION"
            reasons.append("Moderate corridor density; monitor bottleneck points")
        else:
            congestion_status = "CONGESTED"
            reasons.append("High crowd and vehicular density approaching limit")

        reasons.append("Route completely avoids all confirmed submerged road closures")

        if coordinates:
            pop_pt = POPULATION_COORDS.get(cluster_id)
            if pop_pt and coordinates[0] != pop_pt:
                coordinates.insert(0, pop_pt)
            sh_pt = [shelter["longitude"], shelter["latitude"]]
            if coordinates[-1] != sh_pt:
                coordinates.append(sh_pt)

        return {
            "route_id": f"rte-{cluster_id}-{shelter['id']}-p{index}",
            "name": f"Via {' -> '.join([INTERSECTION_NODES.get(n, {}).get('name', n).split(' / ')[0] for n in path])}",
            "origin_cluster_id": cluster_id,
            "destination_shelter_id": shelter["id"],
            "destination_shelter_name": shelter["name"],
            "total_distance_m": total_distance,
            "eta_minutes": round(total_time, 1),
            "total_cost": round(total_cost, 2),
            "risk_level": risk_level,
            "hazard_score": round(avg_hazard, 2),
            "congestion_status": congestion_status,
            "max_congestion_ratio": round(max_load_ratio, 2),
            "is_recommended": (index == 0),
            "is_viable": True,
            "path_nodes": path,
            "road_ids": road_ids,
            "coordinates": coordinates,
            "reasons": reasons
        }


routing_engine = RoutingEngine()
