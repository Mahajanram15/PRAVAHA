import copy
from typing import Dict, Any, List, Optional
from datetime import datetime, timezone
from backend.app.simulation.scenario import load_default_pune_scenario
from backend.app.engines.risk_engine import risk_engine
from backend.app.engines.confidence_engine import confidence_engine
from backend.app.engines.road_graph import ROAD_GRAPH_EDGES
from backend.app.engines.routing_engine import routing_engine
from backend.app.engines.crowd_engine import crowd_engine
from backend.app.engines.congestion_engine import congestion_engine
from backend.app.engines.shelter_engine import shelter_engine

ZONE_TOPO = {
    "hz-mutha-riverbank": {"elevation_m": 548.0, "water_level_m": 2.8},
    "hz-sangam-confluence": {"elevation_m": 551.0, "water_level_m": 3.1},
    "hz-bavdhan-runoff": {"elevation_m": 580.0, "water_level_m": 0.4},
}

def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


class SimulationEngine:
    def __init__(self):
        self._scenario: Dict[str, Any] = load_default_pune_scenario()
        self.step_count: int = 0
        self.last_reset_time: str = _now_iso()
        self.current_state: Dict[str, Any] = self._build_state_for_step(0)

    # ------------------------------------------------------------------
    # Step-Based Progressive State Builder
    # ------------------------------------------------------------------

    def _build_state_for_step(self, step: int) -> Dict[str, Any]:
        """
        Builds the exact authoritative progressive simulation state for step N (0 to 7).
        Guarantees that no future events, danger zones, road closures, or reports are visible early.
        """
        step = max(0, min(step, 7))

        # 1. Environmental Telemetry & System Status
        env_configs = {
            0: {"rain": 184.5, "cfs": 45200, "dam": 95.5, "status": "ACTIVE_MONITORING", "time": "T+00:00", "label": "Baseline GIS & Routine Monitoring"},
            1: {"rain": 209.5, "cfs": 49700, "dam": 99.2, "status": "FLOOD_SURGE_DETECTED", "time": "T+10:00", "label": "Rainfall Surge (+25mm)"},
            2: {"rain": 215.0, "cfs": 52000, "dam": 99.5, "status": "EVACUATION_ACTIVE", "time": "T+20:00", "label": "Evacuation Dispatched — Group Assignment Active"},
            3: {"rain": 218.0, "cfs": 54500, "dam": 99.7, "status": "EVACUATION_ACTIVE", "time": "T+30:00", "label": "Surge Crowd Volume (Multiplier x1.5)"},
            4: {"rain": 220.0, "cfs": 55000, "dam": 99.8, "status": "EVACUATION_ACTIVE", "time": "T+40:00", "label": "Corridor Blocked (rd-karve-paud) — Dynamic Reroute"},
            5: {"rain": 210.0, "cfs": 53000, "dam": 99.0, "status": "EVACUATION_ACTIVE", "time": "T+50:00", "label": "NDRF Field Access Verification Received"},
            6: {"rain": 205.0, "cfs": 50000, "dam": 98.5, "status": "EVACUATION_ACTIVE", "time": "T+60:00", "label": "Conflicting Observation Injected"},
            7: {"rain": 195.0, "cfs": 46000, "dam": 97.8, "status": "OPERATIONAL_EQUILIBRIUM", "time": "T+70:00", "label": "Final Operational Equilibrium"},
        }
        cfg = env_configs[step]

        evacuation_active = step >= 2
        crowd_multiplier = 1.5 if step >= 3 else 1.0
        latest_reroute_reason = (
            "Road rd-karve-paud blocked: Sudden flash inundation and carriage-way breach at Paud elevated junction. Recalculating alternative corridors."
            if step >= 4 else None
        )

        # 2. Roads Progressive State
        roads = copy.deepcopy(ROAD_GRAPH_EDGES)
        for r in roads:
            # Baseline normal state
            r["is_blocked"] = False
            r["status"] = "NORMAL"
            r["closure_reason"] = None

            # Step 2+: Sinhagad Road becomes submerged
            if step >= 2 and r["id"] == "rd-sinhagad-low":
                r["is_blocked"] = True
                r["status"] = "BLOCKED"
                r["closure_reason"] = "1.2m standing flood water across 800m carriage-way. Traffic halted."

            # Step 3: Traffic congestion on Karve & Tilak & JM/FC
            if step == 3:
                if r["id"] == "rd-karve-paud":
                    r["current_load_vph"] = 1980
                    r["status"] = "CAUTION"
                elif r["id"] == "rd-tilak-shastri":
                    r["current_load_vph"] = 1690
                    r["status"] = "CONGESTED"
                elif r["id"] == "rd-jm-fc-spine":
                    r["current_load_vph"] = 1850
                    r["status"] = "CAUTION"

            # Step 4+: Karve Road becomes breached & blocked
            if step >= 4 and r["id"] == "rd-karve-paud":
                r["is_blocked"] = True
                r["status"] = "BLOCKED"
                r["closure_reason"] = "Sudden flash inundation and carriage-way breach at Paud elevated junction"

            # Step 5+: JM/FC spine carries rerouted traffic
            if step >= 5 and r["id"] == "rd-jm-fc-spine":
                r["current_load_vph"] = 2100
                r["status"] = "NORMAL"

        # 3. Progressive Reports
        reports: List[Dict[str, Any]] = []
        if step >= 1:
            reports.append({
                "id": "rep-001",
                "timestamp": _now_iso(),
                "latitude": 18.4835,
                "longitude": 73.8275,
                "report_type": "WATERLOGGING",
                "severity": "HIGH",
                "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
                "verified": True,
                "confidence_impact": 0.15,
            })
        if step >= 2:
            reports.append({
                "id": "rep-002",
                "timestamp": _now_iso(),
                "latitude": 18.5020,
                "longitude": 73.8380,
                "report_type": "ROAD_BLOCKED",
                "severity": "HIGH",
                "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
                "verified": True,
                "confidence_impact": 0.20,
            })
        if step >= 3:
            reports.append({
                "id": "rep-003",
                "timestamp": _now_iso(),
                "latitude": 18.5305,
                "longitude": 73.8650,
                "report_type": "STRANDED_PEOPLE",
                "severity": "HIGH",
                "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
                "verified": True,
                "confidence_impact": 0.18,
            })
        if step >= 4:
            reports.append({
                "id": "rep-block-rd-karve-paud",
                "timestamp": _now_iso(),
                "latitude": 18.5110,
                "longitude": 73.8310,
                "report_type": "ROAD_BLOCKED",
                "severity": "CRITICAL",
                "description": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
                "verified": True,
                "confidence_impact": 0.20,
            })
        if step >= 5:
            reports.append({
                "id": "rep-verified-005",
                "timestamp": _now_iso(),
                "latitude": 18.4980,
                "longitude": 73.8310,
                "report_type": "WATERLOGGING",
                "severity": "HIGH",
                "description": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
                "verified": True,
                "confidence_impact": 0.15,
            })
        if step >= 6:
            reports.append({
                "id": "rep-conflict-006",
                "timestamp": _now_iso(),
                "latitude": 18.5080,
                "longitude": 73.8340,
                "report_type": "WATERLOGGING",
                "severity": "LOW",
                "description": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
                "verified": False,
                "confidence_impact": -0.20,
            })
        if step >= 7:
            reports.append({
                "id": "rep-verified-007",
                "timestamp": _now_iso(),
                "latitude": 18.5140,
                "longitude": 73.8380,
                "report_type": "INFRASTRUCTURE_DAMAGE",
                "severity": "HIGH",
                "description": "Central Disaster Command confirms complete evacuation equilibrium and verified operational posture across all sectors.",
                "verified": True,
                "confidence_impact": 0.10,
            })

        # 4. Progressive Population Clusters
        base_pops = copy.deepcopy(self._scenario.get("population_zones", []))
        for p in base_pops:
            if step < 2:
                p["evacuation_urgency"] = "STANDBY"
                p["vulnerability_level"] = "LOW"
            else:
                p["evacuation_urgency"] = "IMMEDIATE" if p["id"] != "pop-sadashiv-low" else "PREPARE"
                p["vulnerability_level"] = "HIGH" if p["id"] != "pop-sadashiv-low" else "MEDIUM"

        # 5. Progressive Shelters
        base_shelters = copy.deepcopy(self._scenario.get("shelters", []))
        for sh in base_shelters:
            if step == 0 or step == 1:
                sh["status"] = "AVAILABLE"
                if sh["id"] == "sh-kothrud-natya": sh["current_occupancy"] = 120
                elif sh["id"] == "sh-mit-sports": sh["current_occupancy"] = 80
                elif sh["id"] == "sh-sarasbaug": sh["current_occupancy"] = 300
                elif sh["id"] == "sh-sp-college": sh["current_occupancy"] = 150
            elif step == 2:
                sh["status"] = "AVAILABLE"
                if sh["id"] == "sh-kothrud-natya": sh["current_occupancy"] = 640
                elif sh["id"] == "sh-mit-sports": sh["current_occupancy"] = 410
                elif sh["id"] == "sh-sarasbaug": sh["current_occupancy"] = 1200
                elif sh["id"] == "sh-sp-college": sh["current_occupancy"] = 600
            elif step >= 3:
                if sh["id"] == "sh-kothrud-natya":
                    sh["current_occupancy"] = 1450 if step >= 4 else 1250
                    sh["status"] = "AVAILABLE"
                elif sh["id"] == "sh-mit-sports":
                    sh["current_occupancy"] = 1100 if step >= 4 else 980
                    sh["status"] = "AVAILABLE"
                elif sh["id"] == "sh-sarasbaug":
                    sh["current_occupancy"] = 2480
                    sh["status"] = "LIMITED"
                elif sh["id"] == "sh-sp-college":
                    sh["current_occupancy"] = 1130
                    sh["status"] = "NEAR_CAPACITY"

        # 6. Progressive Hazard Zones
        hazard_zones: List[Dict[str, Any]] = []
        if step >= 1:
            all_hazard_defs = self._scenario.get("hazard_zones", [])
            active_defs = all_hazard_defs if step >= 3 else [all_hazard_defs[0]]
            has_conflict = (step == 6)
            verified_count = sum(1 for r in reports if r.get("verified", False))
            conflicting_count = 1 if has_conflict else 0

            for zone in active_defs:
                zone_id = zone["id"]
                topo = ZONE_TOPO.get(zone_id, {"elevation_m": 560.0, "water_level_m": 1.0})

                risk = risk_engine.assess_zone(
                    rainfall_24h_mm=cfg["rain"],
                    river_discharge_cusecs=cfg["cfs"],
                    dam_level_pct=cfg["dam"],
                    elevation_m=topo["elevation_m"],
                    water_level_m=topo["water_level_m"],
                    ground_report_count=verified_count,
                )

                confidence = confidence_engine.assess_confidence(
                    risk_level=risk["risk_level"],
                    last_updated_iso=_now_iso(),
                    ground_reports=reports,
                    conflicting_report_count=conflicting_count,
                    sensor_coverage=0.85,
                )

                hz = dict(zone)
                hz["risk_score"] = risk["risk_score"]
                hz["risk_level"] = risk["risk_level"]
                hz["severity"] = risk["risk_level"]
                hz["contributing_factors"] = risk["factors"]
                hz["risk_inputs"] = risk["inputs"]
                hz["confidence_score"] = confidence["confidence_score"]
                hz["confidence_level"] = confidence["confidence_level"]
                hz["has_conflict"] = confidence["has_conflict"]
                hz["conflict_explanation"] = confidence.get("conflict_explanation")
                hz["evidence_items"] = confidence["evidence_items"]
                hz["confidence_components"] = confidence["component_scores"]
                hz["confidence_reasons"] = confidence["reasons"]
                hazard_zones.append(hz)

        # 7. Progressive Evacuation Routes & Crowd Partitioning
        routes: List[Dict[str, Any]] = []
        group_assignments: List[Dict[str, Any]] = []
        cluster_summaries: List[Dict[str, Any]] = []
        no_reliable_route_clusters: List[Dict[str, Any]] = []

        if evacuation_active:
            routes_by_cluster: Dict[str, List[Dict[str, Any]]] = {}
            for pop in base_pops:
                cluster_id = pop["id"]
                c_routes = routing_engine.find_routes_for_cluster(
                    cluster_id=cluster_id,
                    target_shelters=base_shelters,
                    roads_override=roads
                )
                routes_by_cluster[cluster_id] = c_routes
                routes.extend(c_routes)

            allocation_result = crowd_engine.allocate_evacuation(
                population_zones=base_pops,
                shelters=base_shelters,
                routes_by_cluster=routes_by_cluster,
                crowd_multiplier=crowd_multiplier
            )
            group_assignments = allocation_result["group_assignments"]
            cluster_summaries = allocation_result["cluster_summaries"]
            no_reliable_route_clusters = allocation_result["no_reliable_route_clusters"]

        return {
            "scenario": {
                "id": self._scenario["scenario_id"],
                "name": self._scenario["name"],
                "district": self._scenario["district"],
                "description": self._scenario["description"],
                "is_simulated": True,
                "banner": "DEMO MODE · SIMULATED DATA",
            },
            "system_state": {
                "status": cfg["status"],
                "step": step,
                "sim_time": cfg["time"],
                "sim_time_label": cfg["label"],
                "last_reset": self.last_reset_time,
                "conflicting_report_count": 1 if step == 6 else 0,
                "evacuation_active": evacuation_active,
                "crowd_multiplier": crowd_multiplier,
                "latest_reroute_reason": latest_reroute_reason,
                "weather": {
                    "rainfall_24h_mm": cfg["rain"],
                    "river_discharge_cusecs": cfg["cfs"],
                    "dam_level_pct": cfg["dam"],
                    "trend": "RISING" if cfg["rain"] > 200 else "STABLE",
                },
            },
            "hazard_zones": hazard_zones,
            "roads": roads,
            "shelters": base_shelters,
            "population_zones": base_pops,
            "ground_reports": reports,
            "routes": routes,
            "group_assignments": group_assignments,
            "cluster_summaries": cluster_summaries,
            "no_reliable_route_clusters": no_reliable_route_clusters
        }

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def get_state(self) -> Dict[str, Any]:
        """Returns the current step snapshot."""
        return self.current_state

    def set_step(self, step: int) -> Dict[str, Any]:
        """Jumps directly to any step (0-7) with deterministic progressive state."""
        self.step_count = max(0, min(step, 7))
        self.current_state = self._build_state_for_step(self.step_count)
        return self.current_state

    def apply_event(self, event_type: str, **kwargs) -> Dict[str, Any]:
        """Applies an event by mapping to its corresponding step."""
        event_step_map = {
            "RESET": 0,
            "RAINFALL_INCREASE": 1,
            "START_EVACUATION": 2,
            "INCREASE_CROWD": 3,
            "BLOCK_ROAD": 4,
            "GROUND_REPORT_VERIFIED": 5,
            "CONFLICTING_REPORT": 6,
            "SET_STEP": kwargs.get("step", self.step_count + 1),
        }
        
        target_step = event_step_map.get(event_type, self.step_count + 1)
        if event_type == "GROUND_REPORT_VERIFIED" and self.step_count >= 5:
            target_step = 7

        return self.set_step(target_step)

    def reset(self) -> Dict[str, Any]:
        """Restores the exact clean baseline state (Step 0)."""
        self.step_count = 0
        self.last_reset_time = _now_iso()
        self.current_state = self._build_state_for_step(0)
        return self.current_state


# Global simulation engine singleton
simulator = SimulationEngine()

