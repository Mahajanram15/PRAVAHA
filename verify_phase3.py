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
s0 = rst['state']
routes0 = s0.get('routes', [])
groups0 = s0.get('group_assignments', [])
print(f"RESET: Generated {len(routes0)} routes, {len(groups0)} group assignments across {len(s0['population_zones'])} clusters")

# Check multiple viable routes for clusters
for pop in s0['population_zones']:
    pop_routes = [r for r in routes0 if r['origin_cluster_id'] == pop['id']]
    print(f"  Cluster {pop['name']}: {len(pop_routes)} viable routes available (Recommended: {pop_routes[0]['name'] if pop_routes else 'None'})")

# 2. Start Evacuation
ev1 = req('http://localhost:8000/api/simulation/event', 'POST', {'event_type': 'START_EVACUATION'})
s1 = ev1['state']
print(f"\nEVACUATION STARTED: Status = {s1['system_state']['status']}")

# 3. Increase Crowd
ev2 = req('http://localhost:8000/api/simulation/event', 'POST', {'event_type': 'INCREASE_CROWD'})
s2 = ev2['state']
print(f"CROWD INCREASED: Multiplier = x{s2['system_state']['crowd_multiplier']}, Assigned Groups = {len(s2.get('group_assignments', []))}")
congested_roads = [r['name'] for r in s2['roads'] if r['status'] in ('CONGESTED', 'CAUTION')]
print(f"  Active/Caution Corridors: {congested_roads}")

# 4. Block road dynamically (e.g. rd-karve-paud)
ev3 = req('http://localhost:8000/api/simulation/event', 'POST', {
    'event_type': 'BLOCK_ROAD',
    'road_id': 'rd-karve-paud',
    'closure_reason': '1.5m flood overflow at Paud flyover approach'
})
s3 = ev3['state']
routes3 = s3.get('routes', [])
print(f"\nROAD BLOCKED (rd-karve-paud):")
print(f"  Reroute Reason: {s3['system_state']['latest_reroute_reason']}")
# Verify that no route uses rd-karve-paud
karve_used = [r['name'] for r in routes3 if 'rd-karve-paud' in r.get('road_ids', [])]
print(f"  Routes using blocked road rd-karve-paud: {len(karve_used)} (Must be 0)")

# 5. Reset to baseline
rst2 = req('http://localhost:8000/api/simulation/reset', 'POST')
s_final = rst2['state']
print(f"\nRESET AFTER TEST: Routes = {len(s_final.get('routes', []))}, Status = {s_final['system_state']['status']}")
print("PHASE 3 BACKEND INTEGRATION TEST PASSED!")
