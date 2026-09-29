import os
from pydantic import BaseModel

class Settings(BaseModel):
    APP_NAME: str = "PRAVAHA"
    APP_VERSION: str = "0.1.0-alpha"
    ENVIRONMENT: str = "demo"
    IS_DEMO_MODE: bool = True
    SCENARIO_NAME: str = "Pune Monsoon Urban Flood Simulation"
    PUNE_CENTER_LAT: float = 18.5204
    PUNE_CENTER_LNG: float = 73.8567
    DEFAULT_ZOOM: int = 13

settings = Settings()
