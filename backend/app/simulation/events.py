"""
Simulation event definitions — Phase 2 & Phase 3.
"""
from pydantic import BaseModel
from typing import Optional, Literal, Dict, Any

class SimulationEvent(BaseModel):
    event_type: Literal[
        "CONFLICTING_REPORT",
        "RAINFALL_INCREASE",
        "GROUND_REPORT_VERIFIED",
        "START_EVACUATION",
        "INCREASE_CROWD",
        "BLOCK_ROAD",
        "UNBLOCK_ROAD",
        "RESET",
        "SET_STEP"
    ]
    step: Optional[int] = None                  # for SET_STEP
    severity: Optional[str] = "LOW"             # for CONFLICTING_REPORT
    description: Optional[str] = None
    rainfall_delta_mm: Optional[float] = None     # for RAINFALL_INCREASE
    road_id: Optional[str] = None               # for BLOCK_ROAD / UNBLOCK_ROAD
    closure_reason: Optional[str] = None        # reason for road block
    crowd_multiplier: Optional[float] = None    # for INCREASE_CROWD
