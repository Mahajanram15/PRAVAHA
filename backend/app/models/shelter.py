from pydantic import BaseModel
from typing import List

class Shelter(BaseModel):
    id: str
    name: str
    latitude: float
    longitude: float
    total_capacity: int
    current_occupancy: int
    status: str  # AVAILABLE, LIMITED, NEAR_CAPACITY, FULL
    elevation_m: float
    amenities: List[str] = []
    contact_number: str
