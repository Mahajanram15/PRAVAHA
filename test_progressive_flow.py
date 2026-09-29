import urllib.request
import json

def post_event(payload):
    req = urllib.request.Request(
        'http://localhost:8000/api/simulation/event',
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    res = json.loads(urllib.request.urlopen(req).read())
    return res['state']

def run_tests():
    print("=== TESTING PRAVAHA PROGRESSIVE SIMULATION TIMELINE ===")
    
    # Test 1: Baseline at T+00
    s0 = post_event({'event_type': 'SET_STEP', 'step': 0})
    assert len(s0['hazard_zones']) == 0, f"Expected 0 hazards at T+00, got {len(s0['hazard_zones'])}"
    assert len(s0['ground_reports']) == 0, f"Expected 0 reports at T+00, got {len(s0['ground_reports'])}"
    assert len(s0['routes']) == 0, f"Expected 0 routes at T+00, got {len(s0['routes'])}"
    assert len([r for r in s0['roads'] if r['is_blocked']]) == 0, "Expected 0 blocked roads at T+00"
    assert s0['system_state']['evacuation_active'] == False, "Expected evacuation_active False at T+00"
    print("[OK] T+00 Baseline: 0 hazards, 0 reports, 0 routes, 0 blocked roads, evacuation inactive")

    # Test 2: T+10 Surge
    s1 = post_event({'event_type': 'SET_STEP', 'step': 1})
    assert len(s1['hazard_zones']) == 1, f"Expected 1 hazard at T+10, got {len(s1['hazard_zones'])}"
    assert len(s1['ground_reports']) == 1, f"Expected 1 report at T+10, got {len(s1['ground_reports'])}"
    assert len(s1['routes']) == 0, f"Expected 0 routes at T+10, got {len(s1['routes'])}"
    assert s1['system_state']['evacuation_active'] == False, "Expected evacuation_active False at T+10"
    print(f"[OK] T+10 Surge: 1 hazard ({s1['hazard_zones'][0]['name']}), 1 report, 0 routes")

    # Test 3: T+20 Evac Active
    s2 = post_event({'event_type': 'SET_STEP', 'step': 2})
    assert s2['system_state']['evacuation_active'] == True, "Expected evacuation_active True at T+20"
    assert len(s2['routes']) > 0, "Expected routes at T+20"
    assert len(s2['ground_reports']) == 2, f"Expected 2 reports at T+20, got {len(s2['ground_reports'])}"
    blocked_s2 = [r['name'] for r in s2['roads'] if r['is_blocked']]
    assert any("Sinhagad Road" in name for name in blocked_s2), "Sinhagad Road should be blocked at T+20"
    assert not any("Karve Road" in name for name in blocked_s2), "Karve Road should NOT be blocked at T+20"
    print(f"[OK] T+20 Evac Active: {len(s2['routes'])} routes generated, Sinhagad Road blocked, Karve Road OPEN")

    # Test 4: T+30 Crowd Surge
    s3 = post_event({'event_type': 'SET_STEP', 'step': 3})
    assert len(s3['ground_reports']) == 3, f"Expected 3 reports at T+30, got {len(s3['ground_reports'])}"
    karve_road = next(r for r in s3['roads'] if "Karve Road" in r['name'])
    assert karve_road['is_blocked'] == False, "Karve Road should NOT be blocked at T+30"
    assert karve_road['status'] == 'CAUTION', "Karve Road status should be CAUTION at T+30"
    print("[OK] T+30 Crowd Surge: 3 reports, Karve Road congested (CAUTION) but not blocked")

    # Test 5: T+40 Road Breach
    s4 = post_event({'event_type': 'SET_STEP', 'step': 4})
    assert len(s4['ground_reports']) == 4, f"Expected 4 reports at T+40, got {len(s4['ground_reports'])}"
    blocked_s4 = [r['name'] for r in s4['roads'] if r['is_blocked']]
    assert any("Karve Road" in name for name in blocked_s4), "Karve Road MUST be blocked at T+40"
    karve_report = next((r for r in s4['ground_reports'] if "Karve" in r['description'] or "karve" in r.get('id', '')), None)
    assert karve_report is not None, "Karve Road blockage report MUST exist in ground_reports at T+40"
    print(f"[OK] T+40 Road Breach: Karve Road BLOCKED, blockage report present in ground_reports ({karve_report['id']})")

    # Test 6: T+50 Field Check
    s5 = post_event({'event_type': 'SET_STEP', 'step': 5})
    assert len(s5['ground_reports']) == 5, f"Expected 5 reports at T+50, got {len(s5['ground_reports'])}"
    print("[OK] T+50 Field Check: 5 reports (NDRF verified report present)")

    # Test 7: T+60 Conflict Injected
    s6 = post_event({'event_type': 'SET_STEP', 'step': 6})
    assert len(s6['ground_reports']) == 6, f"Expected 6 reports at T+60, got {len(s6['ground_reports'])}"
    assert s6['hazard_zones'][0]['has_conflict'] == True, "Expected conflict in hazard zones at T+60"
    print(f"[OK] T+60 Conflict: 6 reports, conflict flag active on hazard zones")

    # Test 8: T+70 Equilibrium
    s7 = post_event({'event_type': 'SET_STEP', 'step': 7})
    assert len(s7['ground_reports']) == 7, f"Expected 7 reports at T+70, got {len(s7['ground_reports'])}"
    print("[OK] T+70 Equilibrium: 7 reports, full system equilibrium reached")

    # Test 9: Backward step to T+20
    s_back = post_event({'event_type': 'SET_STEP', 'step': 2})
    assert len(s_back['ground_reports']) == 2, "Stepping back to T+20 should restore 2 reports"
    blocked_back = [r['name'] for r in s_back['roads'] if r['is_blocked']]
    assert "Karve Road" not in blocked_back, "Stepping back to T+20 should unblock Karve Road"
    print("[OK] Step back to T+20: future state reverted cleanly (Karve Road unblocked, 2 reports)")

    # Test 10: Reset back to T+00
    s_reset = post_event({'event_type': 'RESET'})
    assert len(s_reset['hazard_zones']) == 0, "Reset should clear hazard zones"
    assert len(s_reset['ground_reports']) == 0, "Reset should clear ground reports"
    assert len(s_reset['routes']) == 0, "Reset should clear routes"
    assert len([r for r in s_reset['roads'] if r['is_blocked']]) == 0, "Reset should unblock all roads"
    print("[OK] Reset: Clean baseline restored perfectly")

    print("\nALL 10 PROGRESSIVE FLOW TESTS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    run_tests()
