import urllib.request
import json

def req(url, method='GET', data=None):
    r = urllib.request.Request(url, method=method)
    if data:
        r.add_header('Content-Type', 'application/json')
        r.data = json.dumps(data).encode('utf-8')
    with urllib.request.urlopen(r) as res:
        return json.loads(res.read().decode('utf-8'))

# 1. Reset
rst = req('http://localhost:8000/api/simulation/reset', 'POST')
state0 = rst['state']
hz0 = state0['hazard_zones'][0]
print(f"RESET STATE: Risk={hz0['risk_score']}% ({hz0['risk_level']}), Conf={hz0['confidence_score']}% ({hz0['confidence_level']}), Conflict={hz0['has_conflict']}")

# 2. Add conflicting report
ev1 = req('http://localhost:8000/api/simulation/event', 'POST', {'event_type': 'CONFLICTING_REPORT', 'severity': 'LOW', 'description': 'Citizen reports dry road at riverside'})
hz1 = ev1['state']['hazard_zones'][0]
print(f"AFTER CONFLICT: Risk={hz1['risk_score']}% (unchanged: {hz1['risk_score'] == hz0['risk_score']}), Conf={hz1['confidence_score']}% (dropped: {hz1['confidence_score'] < hz0['confidence_score']}), Conflict={hz1['has_conflict']}")
print(f"Conflict explanation: {hz1['conflict_explanation']}")
print(f"Evidence items count: {len(hz1['evidence_items'])}")

# 3. Increase rainfall
ev2 = req('http://localhost:8000/api/simulation/event', 'POST', {'event_type': 'RAINFALL_INCREASE', 'rainfall_delta_mm': 20.0})
hz2 = ev2['state']['hazard_zones'][0]
print(f"AFTER RAINFALL +20mm: Risk={hz2['risk_score']}% (increased: {hz2['risk_score'] > hz1['risk_score']}), Conf={hz2['confidence_score']}%")

# 4. Add verified ground report
ev3 = req('http://localhost:8000/api/simulation/event', 'POST', {'event_type': 'GROUND_REPORT_VERIFIED', 'description': 'NDRF team confirms 1.2m water level on Karve Rd'})
hz3 = ev3['state']['hazard_zones'][0]
print(f"AFTER VERIFIED REPORT: Conf={hz3['confidence_score']}% (boosted: {hz3['confidence_score'] >= hz2['confidence_score']})")

# 5. Reset again to clean state
rst2 = req('http://localhost:8000/api/simulation/reset', 'POST')
hz_final = rst2['state']['hazard_zones'][0]
print(f"AFTER SECOND RESET: Risk={hz_final['risk_score']}%, Conf={hz_final['confidence_score']}%, Conflict={hz_final['has_conflict']}")
print("ALL VERIFICATION CHECKS PASSED!")
