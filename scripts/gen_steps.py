import os, sys
sys.path.insert(0, os.getcwd())
from backend.app.simulation.simulator import simulator
import json

steps = [simulator._build_state_for_step(j) for j in range(8)]
for i, s in enumerate(steps):
    sys_st = s["system_state"]
    blocked = [r["id"] for r in s["roads"] if r["is_blocked"]]
    print(f"Step {i}: time={sys_st['sim_time']}, evac={sys_st['evacuation_active']}, hazards={len(s['hazard_zones'])}, routes={len(s['routes'])}, blocked={blocked}, reports={len(s['ground_reports'])}")

# Write to frontend/lib/scenarioSteps.ts as an exported TypeScript object
with open("frontend/lib/scenarioSteps.ts", "w", encoding="utf-8") as f:
    f.write('import { SimulationState } from "@/types/simulation";\n\n')
    f.write('export const PROGRESSIVE_SCENARIO_STEPS: SimulationState[] = ')
    f.write(json.dumps(steps, indent=2))
    f.write(" as SimulationState[];\n")

print("Wrote frontend/lib/scenarioSteps.ts successfully!")
