from fastapi import APIRouter
from typing import List, Dict, Any
from backend.app.simulation.simulator import simulator

router = APIRouter(prefix="/shelters", tags=["shelters"])

@router.get("/", response_model=List[Dict[str, Any]])
def get_shelters():
    """Retrieve all emergency evacuation shelters."""
    return simulator.get_state().get("shelters", [])

@router.get("/summary")
def get_shelter_summary():
    """Summary of shelter capacities."""
    shelters = simulator.get_state().get("shelters", [])
    total_cap = sum(s.get("total_capacity", 0) for s in shelters)
    total_occ = sum(s.get("current_occupancy", 0) for s in shelters)
    return {
        "total_shelters": len(shelters),
        "total_capacity": total_cap,
        "current_occupancy": total_occ,
        "available_capacity": max(0, total_cap - total_occ),
        "utilization_pct": round((total_occ / total_cap * 100) if total_cap > 0 else 0, 1)
    }
