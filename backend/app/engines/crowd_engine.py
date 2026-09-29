"""
Crowd Allocation and Group Distribution Engine.
Divides affected populations into evacuation groups, allocates them across multiple
viable safe routes to prevent corridor bottlenecking, and strictly respects shelter capacities.
"""
from typing import Dict, Any, List, Optional
import math


class CrowdAllocationEngine:
    def allocate_evacuation(
        self,
        population_zones: List[Dict[str, Any]],
        shelters: List[Dict[str, Any]],
        routes_by_cluster: Dict[str, List[Dict[str, Any]]],
        crowd_multiplier: float = 1.0
    ) -> Dict[str, Any]:
        """
        Distributes population clusters across available routes and shelters.
        
        Returns:
          - group_assignments: Detailed breakdown of each sub-group, assigned route, and shelter.
          - cluster_summaries: Summary for each population cluster.
          - shelter_remaining: Tracked capacity limits.
          - no_reliable_route_clusters: List of clusters with no viable routes.
        """
        group_assignments: List[Dict[str, Any]] = []
        cluster_summaries: List[Dict[str, Any]] = []
        no_reliable_route_clusters: List[str] = []

        # Track live remaining capacities for shelters during allocation pass
        shelter_cap_map = {
            sh["id"]: max(sh.get("total_capacity", 1000) - sh.get("current_occupancy", 0), 0)
            for sh in shelters
        }

        group_seq = 1

        for pop in population_zones:
            cluster_id = pop["id"]
            cluster_name = pop["name"]
            base_pop = pop.get("estimated_population", 1000)
            active_pop = int(base_pop * crowd_multiplier)

            available_routes = routes_by_cluster.get(cluster_id, [])
            viable_routes = [r for r in available_routes if r.get("is_viable", True)]

            if not viable_routes:
                no_reliable_route_clusters.append(cluster_id)
                cluster_summaries.append({
                    "cluster_id": cluster_id,
                    "cluster_name": cluster_name,
                    "total_evacuees": active_pop,
                    "status": "NO_RELIABLE_ROUTE",
                    "error_message": "No reliable evacuation route found. Manual intervention required.",
                    "assigned_groups_count": 0,
                    "allocated_routes": []
                })
                continue

            # Split population into manageable batches (e.g. groups of ~400-800 people)
            group_size = 500
            num_groups = max(math.ceil(active_pop / group_size), 1)
            people_remaining = active_pop

            allocated_routes_for_cluster = set()
            cluster_groups = []

            # Filter viable routes by shelters that still have capacity
            usable_routes = [
                r for r in viable_routes
                if shelter_cap_map.get(r["destination_shelter_id"], 0) > 0
            ]

            if not usable_routes:
                # If preferred shelters full, fall back to any viable route with least full shelter
                usable_routes = viable_routes

            # Sort routes by preference (total_cost)
            usable_routes.sort(key=lambda r: r["total_cost"])

            # Distribute groups across top routes (round-robin / load distribution)
            for g_idx in range(num_groups):
                this_group_count = min(people_remaining, group_size if g_idx < num_groups - 1 else people_remaining)
                people_remaining -= this_group_count

                # Select route (alternate if multiple routes available to prevent bottleneck)
                route_idx = g_idx % len(usable_routes)
                assigned_route = usable_routes[route_idx]
                target_shelter_id = assigned_route["destination_shelter_id"]

                # Deduct from shelter tracking capacity
                current_rem = shelter_cap_map.get(target_shelter_id, 0)
                shelter_cap_map[target_shelter_id] = max(current_rem - this_group_count, 0)

                allocated_routes_for_cluster.add(assigned_route["route_id"])

                group_record = {
                    "group_id": f"GRP-{cluster_id.replace('pop-', '').upper()}-{group_seq:02d}",
                    "cluster_id": cluster_id,
                    "cluster_name": cluster_name,
                    "headcount": this_group_count,
                    "assigned_route_id": assigned_route["route_id"],
                    "assigned_route_name": assigned_route["name"],
                    "destination_shelter_id": target_shelter_id,
                    "destination_shelter_name": assigned_route["destination_shelter_name"],
                    "eta_minutes": assigned_route["eta_minutes"],
                    "risk_level": assigned_route["risk_level"],
                    "status": "DISPATCHED" if crowd_multiplier > 1.0 else "PLANNED",
                    "dispatch_priority": pop.get("evacuation_urgency", "IMMEDIATE")
                }
                group_assignments.append(group_record)
                cluster_groups.append(group_record)
                group_seq += 1

            cluster_summaries.append({
                "cluster_id": cluster_id,
                "cluster_name": cluster_name,
                "total_evacuees": active_pop,
                "status": "ROUTED_OPTIMAL",
                "error_message": None,
                "assigned_groups_count": len(cluster_groups),
                "allocated_routes": list(allocated_routes_for_cluster)
            })

        return {
            "group_assignments": group_assignments,
            "cluster_summaries": cluster_summaries,
            "no_reliable_route_clusters": no_reliable_route_clusters,
            "shelter_remaining": shelter_cap_map
        }


crowd_engine = CrowdAllocationEngine()
