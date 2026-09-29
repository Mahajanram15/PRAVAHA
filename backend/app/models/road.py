from pydantic import BaseModel
from typing import List, Optional

class RoadSegment(BaseModel):
    id: str
    name: str
    status: str  # NORMAL, CAUTION, CONGESTED, BLOCKED
    capacity_vph: int
    current_load_vph: int
    hazard_exposure: float  # 0.0 to 1.0
    is_blocked: bool = False
    closure_reason: Optional[str] = None
    coordinates: List[List[float]]  # [[lng, lat], ...]
    length_km: float
