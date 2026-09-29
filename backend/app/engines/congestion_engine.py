"""
Route Congestion and Load Prediction Engine.
Tracks corridor capacity utilization and projects near-term saturation.
"""
from typing import Dict, Any, List


class CongestionEngine:
    def evaluate_routes_and_roads(
        self,
        roads: List[Dict[str, Any]],
        routes: List[Dict[str, Any]],
        evacuation_flow_modifier: float = 1.0
    ) -> Dict[str, Any]:
        """
        Evaluates road segment utilization and predicts 5-minute surge load.
        """
        updated_roads = []
        for r in roads:
            road = dict(r)
            cap = max(road.get("capacity_vph", 2000), 1)
            base_load = road.get("current_load_vph", 1000)
            
            # Apply evacuation modifier if evacuation is active
            active_load = int(base_load * evacuation_flow_modifier)
            load_ratio = active_load / cap

            # 5-minute prediction (linear surge estimation if evacuation active)
            predicted_5m_load = int(active_load * (1.15 if evacuation_flow_modifier > 1.0 else 1.02))
            pred_ratio = predicted_5m_load / cap

            if road.get("is_blocked", False):
                status = "BLOCKED"
                prediction = "Corridor impassable due to flood inundation"
            elif pred_ratio >= 1.0 or load_ratio >= 0.95:
                status = "CONGESTED"
                prediction = f"Corridor overload expected ({int(pred_ratio*100)}% capacity within 5m)"
            elif load_ratio >= 0.70:
                status = "CAUTION"
                prediction = f"Moderate volume; approaching capacity ({int(pred_ratio*100)}% projected)"
            else:
                status = "NORMAL"
                prediction = "Flow within nominal operational thresholds"

            road["current_load_vph"] = active_load
            road["load_percentage"] = round(load_ratio * 100, 1)
            road["predicted_load_5m"] = predicted_5m_load
            road["predicted_load_pct_5m"] = round(pred_ratio * 100, 1)
            road["congestion_prediction"] = prediction
            if not road.get("is_blocked", False):
                road["status"] = status

            updated_roads.append(road)

        return {"roads": updated_roads}


congestion_engine = CongestionEngine()
