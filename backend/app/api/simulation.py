from fastapi import APIRouter, HTTPException
from backend.app.simulation.simulator import simulator
from backend.app.simulation.events import SimulationEvent

router = APIRouter(prefix="/simulation", tags=["simulation"])

@router.get("/state")
def get_simulation_state():
    """Retrieve the complete current simulation state."""
    return simulator.get_state()

@router.post("/event")
def apply_event(event: SimulationEvent):
    """
    Apply a simulation event (Phase 2 & Phase 3 demo controls).

    event_type options:
      CONFLICTING_REPORT       – add a low-severity conflicting observation
      RAINFALL_INCREASE        – increase rainfall
      GROUND_REPORT_VERIFIED   – add a supporting verified report
      START_EVACUATION         – initiate evacuation dispatch
      INCREASE_CROWD           – increase crowd volume multiplier
      BLOCK_ROAD               – dynamically block a road segment
      UNBLOCK_ROAD             – clear and reopen a road segment
    """
    kwargs = {}
    if event.event_type == "CONFLICTING_REPORT":
        if event.severity:
            kwargs["severity"] = event.severity
        if event.description:
            kwargs["description"] = event.description

    elif event.event_type == "RAINFALL_INCREASE":
        if event.rainfall_delta_mm is not None:
            kwargs["rainfall_delta_mm"] = event.rainfall_delta_mm

    elif event.event_type == "GROUND_REPORT_VERIFIED":
        if event.description:
            kwargs["description"] = event.description

    elif event.event_type == "START_EVACUATION":
        pass

    elif event.event_type == "INCREASE_CROWD":
        if event.crowd_multiplier is not None:
            kwargs["crowd_multiplier"] = event.crowd_multiplier

    elif event.event_type == "BLOCK_ROAD":
        if event.road_id:
            kwargs["road_id"] = event.road_id
        if event.closure_reason:
            kwargs["closure_reason"] = event.closure_reason

    elif event.event_type == "UNBLOCK_ROAD":
        if event.road_id:
            kwargs["road_id"] = event.road_id

    elif event.event_type == "SET_STEP":
        if event.step is not None:
            kwargs["step"] = event.step

    elif event.event_type == "RESET":
        new_state = simulator.reset()
        return {"message": "Simulation reset successfully", "state": new_state}

    else:
        raise HTTPException(status_code=400, detail=f"Unknown event_type: {event.event_type}")

    new_state = simulator.apply_event(event.event_type, **kwargs)
    return {"message": f"Event {event.event_type} applied", "state": new_state}

@router.post("/reset")
def reset_simulation():
    """Reset the simulation back to the deterministic initial state."""
    new_state = simulator.reset()
    return {"message": "Simulation reset successfully", "state": new_state}
