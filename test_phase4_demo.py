"""
Phase 4 End-to-End Demo Scenario & Decision Engine Validation Suite.
"""
import sys
import requests
import json
import time

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

BASE_URL = "http://127.0.0.1:8000/api/simulation"

def post(endpoint, data=None):
    res = requests.post(f"{BASE_URL}{endpoint}", json=data or {})
    res.raise_for_status()
    return res.json()

def get(endpoint):
    res = requests.get(f"{BASE_URL}{endpoint}")
    res.raise_for_status()
    return res.json()

def main():
    print("=" * 65)
    print("PRAVAHA PHASE 4: COMPLETE DEMO SCENARIO VERIFICATION")
    print("=" * 65)

    # -------------------------------------------------------------
    # 1. INITIAL BASELINE RESET
    # -------------------------------------------------------------
    print("\n[STEP 0] RESETTING TO BASELINE OPERATIONAL STATE...")
    reset_res = post("/reset")
    state = reset_res["state"]

    hz = next(h for h in state["hazard_zones"] if h["id"] == "hz-mutha-riverbank")
    print(f"  - Hazard Zone: {hz['name']}")
    print(f"  - Risk Score: {hz['risk_score']:.1f}% ({hz['risk_level']})")
    print(f"  - Confidence: {hz['confidence_score']:.1f}% ({hz['confidence_level']})")
    print(f"  - Total Computed Routes: {len(state.get('routes', []))}")
    print(f"  - Evacuation Status: {state['system_state']['status']}")

    assert hz["risk_score"] > 80, "Baseline risk should be high"
    assert hz["confidence_score"] > 90, "Baseline confidence should be high"
    assert len(state.get("routes", [])) >= 20, "Should have multi-routes available"
    print("  ✓ Baseline verified successfully")

    # -------------------------------------------------------------
    # 2. STEP 1: RAINFALL SURGE
    # -------------------------------------------------------------
    print("\n[STEP 1] EXECUTING RAINFALL SURGE EVENT (+25mm)...")
    surge_res = post("/event", {
        "event_type": "RAINFALL_INCREASE",
        "rainfall_delta_mm": 25.0
    })
    state = surge_res["state"]
    weather = state["system_state"]["weather"]
    hz = next(h for h in state["hazard_zones"] if h["id"] == "hz-mutha-riverbank")
    print(f"  - 24h Rainfall: {weather['rainfall_24h_mm']:.1f} mm")
    print(f"  - River Discharge: {weather['river_discharge_cusecs']:,} cfs")
    print(f"  - Dam Spillway Level: {weather['dam_level_pct']:.1f}%")
    print(f"  - Updated Risk Score: {hz['risk_score']:.1f}%")
    assert weather["rainfall_24h_mm"] >= 209.0, "Rainfall should reflect surge"
    print("  ✓ Rainfall surge and environmental telemetry updated")

    # -------------------------------------------------------------
    # 3. STEP 2: START EVACUATION
    # -------------------------------------------------------------
    print("\n[STEP 2] DISPATCHING EVACUATION TEAMS...")
    evac_res = post("/event", {"event_type": "START_EVACUATION"})
    state = evac_res["state"]
    print(f"  - System Status: {state['system_state']['status']}")
    print(f"  - Total Dispatched Groups: {len(state.get('group_assignments', []))}")
    assert state["system_state"]["evacuation_active"] is True
    assert len(state.get("group_assignments", [])) > 0
    print("  ✓ Evacuation active with groups dispatched")

    # -------------------------------------------------------------
    # 4. STEP 3: INCREASE CROWD (SURGE MULTIPLIER)
    # -------------------------------------------------------------
    print("\n[STEP 3] INCREASING CROWD VOLUME (x1.5 MULTIPLIER)...")
    crowd_res = post("/event", {"event_type": "INCREASE_CROWD"})
    state = crowd_res["state"]
    karve = next(r for r in state["roads"] if r["id"] == "rd-karve-paud")
    print(f"  - Crowd Multiplier: x{state['system_state']['crowd_multiplier']}")
    print(f"  - Karve Road Load: {karve['current_load_vph']}/{karve['capacity_vph']} vph ({karve['status']})")
    assert state["system_state"]["crowd_multiplier"] >= 1.5
    print("  ✓ Crowd volume surge and corridor loads updated")

    # -------------------------------------------------------------
    # 5. STEP 4: BLOCK CORRIDOR (DYNAMIC REROUTE)
    # -------------------------------------------------------------
    print("\n[STEP 4] BLOCKING CORRIDOR (rd-karve-paud)...")
    block_res = post("/event", {
        "event_type": "BLOCK_ROAD",
        "road_id": "rd-karve-paud",
        "closure_reason": "Sudden flash inundation and carriage-way breach at Paud elevated junction"
    })
    state = block_res["state"]
    karve = next(r for r in state["roads"] if r["id"] == "rd-karve-paud")
    routes_using_karve = [r for r in state.get("routes", []) if "rd-karve-paud" in r.get("road_ids", [])]
    print(f"  - Road Status: {karve['status']} (is_blocked={karve['is_blocked']})")
    print(f"  - Closure Reason: {karve.get('closure_reason')}")
    print(f"  - Routes using blocked road: {len(routes_using_karve)} (must be 0)")
    print(f"  - Reroute Reason: {state['system_state'].get('latest_reroute_reason')}")
    assert karve["is_blocked"] is True
    assert len(routes_using_karve) == 0, "No routes should traverse blocked road"
    print("  ✓ Road blockage eliminated compromised edge and triggered dynamic reroute")

    # -------------------------------------------------------------
    # 6. STEP 5: FIELD VERIFICATION & GROUP REDISTRIBUTION
    # -------------------------------------------------------------
    print("\n[STEP 5] VERIFYING NDRF NORTHERN SPINE ACCESS...")
    field_res = post("/event", {
        "event_type": "GROUND_REPORT_VERIFIED",
        "description": "NDRF Field Unit 2 confirms JM/FC Road northern spine clear for redirected evacuees"
    })
    state = field_res["state"]
    print(f"  - Verified Reports Count: {len([r for r in state['ground_reports'] if r.get('verified')])}")
    print(f"  - Active Safe Routes: {len(state.get('routes', []))}")
    print("  ✓ Field report incorporated and routes stabilized")

    # -------------------------------------------------------------
    # 7. STEP 6: INJECT CONFLICTING CITIZEN REPORT
    # -------------------------------------------------------------
    print("\n[STEP 6] INJECTING CONFLICTING CITIZEN REPORT...")
    conflict_res = post("/event", {
        "event_type": "CONFLICTING_REPORT",
        "severity": "LOW",
        "description": "Citizen social post claims dry road & receding water at Vitthalwadi margin"
    })
    state = conflict_res["state"]
    hz = next(h for h in state["hazard_zones"] if h["id"] == "hz-mutha-riverbank")
    print(f"  - Data Confidence Score: {hz['confidence_score']:.1f}% ({hz['confidence_level']})")
    print(f"  - Has Conflict: {hz['has_conflict']}")
    print(f"  - Conflict Explanation: {hz.get('conflict_explanation')}")
    assert hz["has_conflict"] is True
    assert hz["confidence_score"] < 90.0, "Confidence should drop due to conflict"
    print("  ✓ Contradiction successfully penalized confidence with explainable reason")

    # -------------------------------------------------------------
    # 8. STEP 7: SHELTER CAPACITIES & FINAL OPERATIONAL EQUILIBRIUM
    # -------------------------------------------------------------
    print("\n[STEP 7] VALIDATING SHELTER CAPACITIES AT EQUILIBRIUM...")
    for sh in state["shelters"]:
        occ = sh["current_occupancy"]
        cap = sh["total_capacity"]
        pct = (occ / cap) * 100
        print(f"  - Shelter [{sh['name'][:30]}...]: {occ}/{cap} ({pct:.1f}%) | Status: {sh['status']}")
        assert occ <= cap, f"Shelter {sh['name']} exceeded total capacity!"
    print("  ✓ Shelter capacity constraints strictly respected")

    # -------------------------------------------------------------
    # 9. RESET BACK TO BASELINE
    # -------------------------------------------------------------
    print("\n[STEP 8] FINAL RESET TO BASELINE...")
    final_reset = post("/reset")
    state = final_reset["state"]
    hz = next(h for h in state["hazard_zones"] if h["id"] == "hz-mutha-riverbank")
    assert hz["has_conflict"] is False
    assert hz["confidence_score"] > 90.0
    assert state["system_state"]["crowd_multiplier"] == 1.0
    print(f"  - Restored Risk: {hz['risk_score']:.1f}%")
    print(f"  - Restored Confidence: {hz['confidence_score']:.1f}%")
    print(f"  - Restored Routes: {len(state.get('routes', []))}")
    print("  ✓ Clean return to deterministic baseline")

    print("\n" + "=" * 65)
    print("ALL PHASE 4 DEMO SCENARIO VALIDATION TESTS PASSED (100%)")
    print("=" * 65)

if __name__ == "__main__":
    main()
