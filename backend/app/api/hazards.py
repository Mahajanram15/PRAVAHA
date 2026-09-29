from fastapi import APIRouter
from typing import List, Dict, Any
from backend.app.simulation.simulator import simulator

router = APIRouter(prefix="/hazards", tags=["hazards"])

@router.get("/", response_model=List[Dict[str, Any]])
def get_hazards():
    """Retrieve all active hazard zones."""
    return simulator.get_state().get("hazard_zones", [])

@router.get("/summary")
def get_hazard_summary():
    """Get high-level summary of active hazards."""
    state = simulator.get_state()
    zones = state.get("hazard_zones", [])
    critical_count = sum(1 for z in zones if z.get("severity") == "CRITICAL")
    max_risk = max([z.get("risk_score", 0) for z in zones], default=0)
    avg_confidence = (
        sum(z.get("confidence_score", 0) for z in zones) / len(zones)
        if zones else 0
    )
    return {
        "active_hazard_count": len(zones),
        "critical_zones": critical_count,
        "max_risk_score": max_risk,
        "average_confidence": round(avg_confidence, 1),
        "primary_hazard_type": "FLOOD"
    }
