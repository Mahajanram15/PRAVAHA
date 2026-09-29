from pydantic import BaseModel, Field
from typing import List, Optional

class HazardFactor(BaseModel):
    name: str
    value: str
    contribution: float = Field(..., ge=0.0, le=1.0)
    description: Optional[str] = None

class HazardZone(BaseModel):
    id: str
    name: str
    severity: str  # CRITICAL, WARNING, CAUTION
    water_level_m: float
    flow_velocity_mps: float
    risk_score: float = Field(..., ge=0, le=100)
    confidence_score: float = Field(..., ge=0, le=100)
    polygon_coordinates: List[List[float]]  # [[lng, lat], ...]
    contributing_factors: List[HazardFactor] = []
    status: str = "ACTIVE"
    updated_at: str
