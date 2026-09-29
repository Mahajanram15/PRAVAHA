"""
Graph representations and graph-building utilities for the Pune road network.
"""
from typing import Dict, Any, List, Optional
import networkx as nx

# Define intersection/key nodes on Pune road network
INTERSECTION_NODES = {
    "node_vitthalwadi": {
        "id": "node_vitthalwadi",
        "name": "Vitthalwadi / Ekta Nagar Access",
        "latitude": 18.4810,
        "longitude": 73.8245,
        "elevation_m": 550.0,
    },
    "node_rajaram_brg": {
        "id": "node_rajaram_brg",
        "name": "Rajaram Bridge Junction",
        "latitude": 18.4920,
        "longitude": 73.8320,
        "elevation_m": 552.0,
    },
    "node_dandekar_brg": {
        "id": "node_dandekar_brg",
        "name": "Dandekar Bridge / Shastri Rd Jnc",
        "latitude": 18.5020,
        "longitude": 73.8380,
        "elevation_m": 554.0,
    },
    "node_alka_talkies": {
        "id": "node_alka_talkies",
        "name": "Alka Talkies / Deccan Riverside",
        "latitude": 18.5100,
        "longitude": 73.8435,
        "elevation_m": 556.0,
    },
    "node_karve_putala": {
        "id": "node_karve_putala",
        "name": "Karve Statue / Kothrud Gateway",
        "latitude": 18.5080,
        "longitude": 73.8200,
        "elevation_m": 570.0,
    },
    "node_paud_phata": {
        "id": "node_paud_phata",
        "name": "Paud Phata / MIT Elevated Access",
        "latitude": 18.5110,
        "longitude": 73.8310,
        "elevation_m": 568.0,
    },
    "node_kothrud_depot": {
        "id": "node_kothrud_depot",
        "name": "Kothrud Depot / Natyagruha Hub",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "elevation_m": 582.0,
    },
    "node_mit_campus": {
        "id": "node_mit_campus",
        "name": "MIT Paud Road Campus",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "elevation_m": 579.5,
    },
    "node_deccan_gym": {
        "id": "node_deccan_gym",
        "name": "Deccan Gymkhana / JM Rd Entry",
        "latitude": 18.5170,
        "longitude": 73.8435,
        "elevation_m": 558.0,
    },
    "node_shivajinagar": {
        "id": "node_shivajinagar",
        "name": "Shivajinagar / COEP Junction",
        "latitude": 18.5320,
        "longitude": 73.8510,
        "elevation_m": 560.0,
    },
    "node_sangamwadi_jnc": {
        "id": "node_sangamwadi_jnc",
        "name": "Sangamwadi Confluence Point",
        "latitude": 18.5310,
        "longitude": 73.8655,
        "elevation_m": 551.0,
    },
    "node_sadashiv_peth": {
        "id": "node_sadashiv_peth",
        "name": "Sadashiv Peth / SP College",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "elevation_m": 564.2,
    },
    "node_sarasbaug_jnc": {
        "id": "node_sarasbaug_jnc",
        "name": "Saras Baug / Swargate Node",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "elevation_m": 566.0,
    },
    "node_satara_rd_entry": {
        "id": "node_satara_rd_entry",
        "name": "Pune-Satara Highway Access",
        "latitude": 18.4720,
        "longitude": 73.8540,
        "elevation_m": 572.0,
    }
}

# Complete road segments connecting all nodes
ROAD_GRAPH_EDGES = [
    {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": True,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
            [73.8245, 18.4810],
            [73.8320, 18.4920],
            [73.8380, 18.5020],
            [73.8435, 18.5100]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
    },
    {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8245, 18.4810],
            [73.8190, 18.4910],
            [73.8180, 18.5010],
            [73.8200, 18.5080]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
    },
    {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8435, 18.5100],
            [73.8310, 18.5110]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
    },
    {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8200, 18.5080],
            [73.8075, 18.5025]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
    },
    {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8310, 18.5110],
            [73.8200, 18.5080]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
    },
    {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8310, 18.5110],
            [73.8240, 18.5140],
            [73.8152, 18.5178]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
    },
    {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8075, 18.5025],
            [73.8110, 18.5110],
            [73.8152, 18.5178]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
    },
    {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8435, 18.5100],
            [73.8470, 18.5250],
            [73.8510, 18.5320]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "CAUTION"
    },
    {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8655, 18.5310],
            [73.8580, 18.5315],
            [73.8510, 18.5320]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "CAUTION"
    },
    {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8435, 18.5100],
            [73.8498, 18.5085]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
    },
    {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.10,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8498, 18.5085],
            [73.8558, 18.5012]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
    },
    {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8380, 18.5020],
            [73.8440, 18.5090],
            [73.8490, 18.5060],
            [73.8558, 18.5012]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "CONGESTED"
    },
    {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": False,
        "closure_reason": None,
        "coordinates": [
            [73.8558, 18.5012],
            [73.8560, 18.4880],
            [73.8540, 18.4720]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
    }
]

def build_road_graph(roads_override: Optional[List[Dict[str, Any]]] = None) -> nx.DiGraph:
    """
    Builds a NetworkX directed graph from road segments.
    Edges are bi-directional for urban corridors.
    """
    G = nx.DiGraph()

    # Add nodes
    for nid, ndata in INTERSECTION_NODES.items():
        G.add_node(nid, **ndata)

    # Road edges lookup
    edges_to_use = ROAD_GRAPH_EDGES
    if roads_override:
        override_map = {r["id"]: r for r in roads_override}
        merged_edges = []
        for base_edge in ROAD_GRAPH_EDGES:
            e = dict(base_edge)
            if base_edge["id"] in override_map:
                dyn = override_map[base_edge["id"]]
                e["is_blocked"] = dyn.get("is_blocked", e["is_blocked"])
                e["status"] = dyn.get("status", e["status"])
                e["current_load_vph"] = dyn.get("current_load_vph", e["current_load_vph"])
                e["closure_reason"] = dyn.get("closure_reason", e["closure_reason"])
                e["hazard_exposure"] = dyn.get("hazard_exposure", e["hazard_exposure"])
            merged_edges.append(e)
        edges_to_use = merged_edges

    for edge in edges_to_use:
        u = edge["start_node"]
        v = edge["end_node"]
        
        G.add_edge(
            u, v,
            road_id=edge["id"],
            name=edge["name"],
            distance_m=edge["distance_m"],
            base_travel_time_min=edge["base_travel_time_min"],
            capacity_vph=edge["capacity_vph"],
            current_load_vph=edge["current_load_vph"],
            hazard_exposure=edge["hazard_exposure"],
            is_blocked=edge["is_blocked"],
            closure_reason=edge.get("closure_reason"),
            condition=edge.get("condition", "OPERATIONAL"),
            coordinates=edge["coordinates"]
        )
        
        G.add_edge(
            v, u,
            road_id=edge["id"],
            name=edge["name"] + " (Rev)",
            distance_m=edge["distance_m"],
            base_travel_time_min=edge["base_travel_time_min"],
            capacity_vph=edge["capacity_vph"],
            current_load_vph=edge["current_load_vph"],
            hazard_exposure=edge["hazard_exposure"],
            is_blocked=edge["is_blocked"],
            closure_reason=edge.get("closure_reason"),
            condition=edge.get("condition", "OPERATIONAL"),
            coordinates=list(reversed(edge["coordinates"]))
        )

    return G
