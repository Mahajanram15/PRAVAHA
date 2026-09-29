"""
Shelter Capacity Management and Tracking Engine.
Ensures shelters are not overloaded and determines availability statuses.
"""
from typing import Dict, Any, List


class ShelterEngine:
    def evaluate_shelters(
        self,
        shelters: List[Dict[str, Any]],
        assignments: List[Dict[str, Any]] = None
    ) -> List[Dict[str, Any]]:
        """
        Calculates occupancy, remaining capacity, and availability tier for all shelters.
        """
        additional_assigned: Dict[str, int] = {}
        if assignments:
            for asgn in assignments:
                sid = asgn.get("shelter_id")
                count = asgn.get("allocated_count", 0)
                additional_assigned[sid] = additional_assigned.get(sid, 0) + count

        updated_shelters = []
        for sh in shelters:
            s = dict(sh)
            base_occ = s.get("current_occupancy", 0)
            added = additional_assigned.get(s["id"], 0)
            total_occ = base_occ + added
            cap = s.get("total_capacity", 1000)
            rem = max(cap - total_occ, 0)
            occ_pct = (total_occ / cap) * 100 if cap > 0 else 100.0

            if occ_pct >= 98.0:
                status = "FULL"
            elif occ_pct >= 85.0:
                status = "NEAR_CAPACITY"
            elif occ_pct >= 65.0:
                status = "LIMITED"
            else:
                status = "AVAILABLE"

            s["current_occupancy"] = total_occ
            s["remaining_capacity"] = rem
            s["occupancy_percentage"] = round(occ_pct, 1)
            s["status"] = status
            updated_shelters.append(s)

        return updated_shelters


shelter_engine = ShelterEngine()
