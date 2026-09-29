from pydantic import BaseModel
from typing import Optional

class CitizenReport(BaseModel):
    id: str
    timestamp: str
    latitude: float
    longitude: float
    report_type: str  # WATERLOGGING, ROAD_BLOCKED, STRANDED_PEOPLE, INFRASTRUCTURE_DAMAGE
    severity: str     # HIGH, MEDIUM, LOW
    description: str
    verified: bool = False
    confidence_impact: float = 0.0
