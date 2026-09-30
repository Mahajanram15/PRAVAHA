import os, sys
sys.path.insert(0, os.getcwd())
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

from backend.app.simulation.simulator import simulator

def test_progressive_scenarios():
    print("Testing all 8 progressive simulation steps directly...")

    # Step 0: Baseline
    s0 = simulator._build_state_for_step(0)
    assert not s0["system_state"]["evacuation_active"], "Step 0 should NOT have active evacuation"
    assert len(s0["routes"]) == 0, "Step 0 should have 0 routes"
    assert len([r for r in s0["roads"] if r["is_blocked"]]) == 0, "Step 0 should have 0 blocked roads"
    assert len(s0["ground_reports"]) == 0, "Step 0 should have 0 reports"
    print("✓ Step 0 (Baseline) verified: No future disaster state.")

    # Step 1: Surge
    s1 = simulator._build_state_for_step(1)
    assert s1["system_state"]["weather"]["rainfall_24h_mm"] > 200, "Step 1 rainfall should spike"
    assert len(s1["ground_reports"]) == 1, "Step 1 should have 1 report"
    print("✓ Step 1 (Rainfall Surge) verified.")

    # Step 2: Evacuation Active
    s2 = simulator._build_state_for_step(2)
    assert s2["system_state"]["evacuation_active"], "Step 2 must have evacuation_active = True"
    assert len(s2["routes"]) > 0, "Step 2 must display evacuation routes"
    blocked_roads_s2 = [r["id"] for r in s2["roads"] if r["is_blocked"]]
    assert "rd-sinhagad-low" in blocked_roads_s2, "Step 2: Sinhagad Road must be blocked"
    assert "rd-karve-paud" not in blocked_roads_s2, "Step 2: Karve Road must NOT be blocked yet"
    print(f"✓ Step 2 (Evac Active) verified: {len(s2['routes'])} routes active, Sinhagad Road blocked.")

    # Step 3: Crowd Surge
    s3 = simulator._build_state_for_step(3)
    assert s3["system_state"]["crowd_multiplier"] == 1.5, "Step 3 crowd multiplier should be 1.5"
    assert len(s3["hazard_zones"]) == 3, "Step 3 should activate 3 hazard zones"
    print("✓ Step 3 (Crowd Surge) verified: 3 hazard zones active.")

    # Step 4: Road Breach (Karve Road)
    s4 = simulator._build_state_for_step(4)
    blocked_roads_s4 = [r["id"] for r in s4["roads"] if r["is_blocked"]]
    assert "rd-karve-paud" in blocked_roads_s4, "Step 4: Karve Road must be blocked"
    assert "rd-sinhagad-low" in blocked_roads_s4, "Step 4: Sinhagad Road must remain blocked"
    assert s4["system_state"]["latest_reroute_reason"] is not None, "Step 4 must have dynamic reroute reason"
    karve_routes = [rte for rte in s4["routes"] if "rd-karve-paud" in rte.get("road_ids", [])]
    assert len(karve_routes) == 0, "Step 4: 0 routes should use the blocked Karve Road"
    breach_report = [r for r in s4["ground_reports"] if r.get("report_type") == "ROAD_BLOCKED" and "Karve" in r.get("description", "")]
    assert len(breach_report) > 0, "Step 4: Karve Road breach report must be present"
    print(f"✓ Step 4 (Road Breach) verified: Karve Road blocked, rerouted routes = {len(s4['routes'])}, breach report present.")

    # Step 5: Field Check
    s5 = simulator._build_state_for_step(5)
    assert any("NDRF" in r.get("description", "") for r in s5["ground_reports"]), "Step 5 must have NDRF report"
    print("✓ Step 5 (Field Check) verified.")

    # Step 6: Conflict Injected
    s6 = simulator._build_state_for_step(6)
    assert s6["system_state"]["conflicting_report_count"] == 1, "Step 6 must have conflicting report"
    mutha_hz = next(h for h in s6["hazard_zones"] if h["id"] == "hz-mutha-riverbank")
    assert mutha_hz["has_conflict"], "Step 6: Mutha Riverbank hazard must have has_conflict=True"
    print("✓ Step 6 (Conflict Injected) verified: Evidence conflict flagged.")

    # Step 7: Final Equilibrium
    s7 = simulator._build_state_for_step(7)
    assert s7["system_state"]["status"] == "OPERATIONAL_EQUILIBRIUM", "Step 7 status must be equilibrium"
    print("✓ Step 7 (Equilibrium) verified.")

    print("\nALL 8 PROGRESSIVE SIMULATION STATES VERIFIED SUCCESSFULLY! 100% SPEC COMPLIANT.")

if __name__ == "__main__":
    test_progressive_scenarios()
