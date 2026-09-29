import json
import os
from typing import Dict, Any

def load_default_pune_scenario() -> Dict[str, Any]:
    """Loads the base simulated Pune flood scenario from data repository."""
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    scenario_path = os.path.join(base_dir, "..", "data", "scenarios", "pune_flood.json")
    
    # Try direct or relative path
    if not os.path.exists(scenario_path):
        scenario_path = os.path.join(os.getcwd(), "data", "scenarios", "pune_flood.json")
        
    with open(scenario_path, "r", encoding="utf-8") as f:
        return json.load(f)
