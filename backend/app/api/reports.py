from fastapi import APIRouter
from typing import List, Dict, Any
from backend.app.simulation.simulator import simulator

router = APIRouter(prefix="/reports", tags=["reports"])

@router.get("/", response_model=List[Dict[str, Any]])
def get_reports():
    """Retrieve citizen ground reports."""
    return simulator.get_state().get("ground_reports", [])
