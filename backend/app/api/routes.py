from fastapi import APIRouter
from typing import List, Dict, Any
from backend.app.simulation.simulator import simulator

router = APIRouter(prefix="/routes", tags=["routes"])

@router.get("/roads", response_model=List[Dict[str, Any]])
def get_roads():
    """Retrieve all road segments with status and blockage details."""
    return simulator.get_state().get("roads", [])
