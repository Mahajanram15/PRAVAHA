from pydantic import BaseModel
from typing import List, Optional

class PopulationZone(BaseModel):
    id: str
    name: str
    latitude: float
    longitude: float
    estimated_population: int
    vulnerability_level: str  # HIGH, MEDIUM, LOW
    evacuation_urgency: str   # IMMEDIATE, PREPARE, STANDBY
    assigned_shelter_id: Optional[str] = None
    assigned_route_id: Optional[str] = None
