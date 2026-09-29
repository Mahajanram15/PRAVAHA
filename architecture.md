# ARCHITECTURE â€” Disaster Response & Dynamic Evacuation Platform

## 1. Architecture Objective

Build a modular, locally runnable prototype for an explainable disaster intelligence and dynamic evacuation coordination platform.

The architecture must support:

* Flood-risk assessment
* Evidence aggregation
* Confidence/uncertainty calculation
* Interactive GIS visualization
* Dynamic evacuation routing
* Crowd-aware route allocation
* Shelter capacity
* Citizen ground reports
* Predictive congestion
* Dynamic re-routing
* LLM-powered explanation
* Controlled disaster simulation

The architecture must remain simple enough to implement rapidly for a Round-1 hackathon prototype.

---

# 2. Core Architecture Principle

Use a **hybrid intelligence architecture**.

Do NOT make the LLM responsible for safety-critical calculations.

The architecture should be:

```text
                DATA SOURCES
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
 Environmental   Road Data    Ground Reports
    Data                         / Users
       │             │             │
       └─────────────┼─────────────┘
                     ↓
             DATA NORMALIZATION
                     │
                     ↓
            ┌─────────────────┐
            │  HAZARD ENGINE  │
            │                 │
            │ Risk Score      │
            │ Confidence      │
            │ Evidence        │
            └────────┬────────┘
                     │
                     ↓
            ┌─────────────────┐
            │   ROAD GRAPH    │
            │                 │
            │ Roads           │
            │ Conditions      │
            │ Capacity        │
            │ Hazard          │
            └────────┬────────┘
                     │
                     ↓
            ┌─────────────────┐
            │ ROUTING ENGINE  │
            │                 │
            │ A* / Dijkstra   │
            │ Risk weighting  │
            └────────┬────────┘
                     │
                     ↓
           ┌────────────────────┐
           │ CROWD ALLOCATION   │
           │                    │
           │ Capacity           │
           │ Congestion         │
           │ Group assignment   │
           └─────────┬──────────┘
                     │
                     ↓
           ┌────────────────────┐
           │ DYNAMIC SIMULATOR  │
           │                    │
           │ Time progression   │
           │ Road changes       │
           │ Crowd changes      │
           │ Shelter changes    │
           └─────────┬──────────┘
                     │
                     ↓
                FRONTEND
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
        MAP       ALERTS     CONTROL
```

LLM services sit beside the core engine and are used for interpretation and explanation.

---

# 3. Recommended Technology Stack

## Frontend

### Framework

**Next.js + React + TypeScript**

Use TypeScript throughout the frontend.

### Styling

**Tailwind CSS**

Use a custom design system defined in `design.md`.

Do not rely blindly on default Tailwind/shadcn styling.

### Mapping

Preferred:

**MapLibre GL JS**

Alternative if implementation becomes significantly easier:

**Leaflet**

The map must support:

* Roads
* Polygons
* Markers
* Routes
* Heatmaps
* Hazard overlays
* Shelter markers
* Ground reports
* Crowd visualization

---

# 4. Backend

## Framework

**Python + FastAPI**

Python is preferred because the project uses:

* Graph algorithms
* Geographic calculations
* Simulation
* Data processing
* Potential future ML

FastAPI exposes the required APIs to the frontend.

---

# 5. Core Python Libraries

Recommended:

```text
fastapi
uvicorn
pydantic
networkx
numpy
pandas
geopandas
shapely
```

Optional:

```text
scikit-learn
```

Only use scikit-learn if a simple statistical/ML component becomes genuinely useful.

Do NOT add ML merely for the sake of saying the project uses ML.

---

# 6. Frontend Libraries

Recommended:

```text
next
react
typescript
tailwindcss
maplibre-gl
lucide-react
```

Optional:

```text
recharts
framer-motion
```

Charts should be used only where they improve situational awareness.

Animations should be functional, not decorative.

---

# 7. Database

For Round 1:

### Preferred

**PostgreSQL**

Optionally use:

**Supabase**

if it simplifies setup.

The database should store:

* Roads
* Road conditions
* Hazards
* Risk zones
* Shelters
* Shelter capacity
* People/groups
* Ground reports
* Simulation events
* Route assignments

For a pure local prototype, SQLite is acceptable initially.

Do not allow database complexity to delay the working prototype.

---

# 8. Project Folder Structure

Use a clear separation between frontend, backend, data, simulation and documentation.

Recommended structure:

```text
project-root/
│
├── prd.md
├── architecture.md
├── rules.md
├── design.md
│
├── README.md
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── features/
│   │   ├── map/
│   │   ├── alerts/
│   │   ├── routing/
│   │   ├── shelters/
│   │   ├── reports/
│   │   └── simulation/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   ├── public/
│   └── styles/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   │
│   │   ├── api/
│   │   │   ├── hazards.py
│   │   │   ├── routes.py
│   │   │   ├── shelters.py
│   │   │   ├── reports.py
│   │   │   ├── simulation.py
│   │   │   └── explanations.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── constants.py
│   │   │
│   │   ├── models/
│   │   │   ├── hazard.py
│   │   │   ├── road.py
│   │   │   ├── shelter.py
│   │   │   ├── person.py
│   │   │   └── report.py
│   │   │
│   │   ├── engines/
│   │   │   ├── risk_engine.py
│   │   │   ├── confidence_engine.py
│   │   │   ├── routing_engine.py
│   │   │   ├── crowd_engine.py
│   │   │   ├── shelter_engine.py
│   │   │   └── congestion_engine.py
│   │   │
│   │   ├── simulation/
│   │   │   ├── scenario.py
│   │   │   ├── events.py
│   │   │   └── simulator.py
│   │   │
│   │   └── services/
│   │       ├── llm_service.py
│   │       └── report_parser.py
│   │
│   └── requirements.txt
│
├── data/
│   ├── roads/
│   ├── terrain/
│   ├── rainfall/
│   ├── shelters/
│   ├── population/
│   ├── reports/
│   └── scenarios/
│
├── scripts/
│   ├── generate_demo_data.py
│   ├── build_road_graph.py
│   └── seed_database.py
│
└── tests/
    ├── test_risk.py
    ├── test_confidence.py
    ├── test_routing.py
    ├── test_crowd.py
    └── test_simulation.py
```

The exact structure may be simplified if necessary, but maintain separation of responsibilities.

---

# 9. Frontend Architecture

Use a feature-oriented component architecture.

Avoid putting the entire application into one large page component.

Recommended high-level layout:

```text
App
│
├── Top Status Bar
│
├── Main Map
│   ├── Hazard Layers
│   ├── Road Layers
│   ├── Route Layers
│   ├── Crowd Layers
│   ├── Shelter Markers
│   └── Ground Reports
│
├── Intelligence Panel
│   ├── Current Alert
│   ├── Risk
│   ├── Confidence
│   ├── Evidence
│   └── Explanation
│
├── Evacuation Panel
│   ├── Affected Population
│   ├── Route Distribution
│   ├── Route Status
│   └── Shelter Status
│
└── Simulation / Event Timeline
    ├── Start Event
    ├── Road Closure
    ├── Crowd Increase
    ├── Ground Report
    └── Conflicting Evidence
```

---

# 10. Backend Architecture

The backend should be divided into independent engines.

## 10.1 Risk Engine

File:

```text
backend/app/engines/risk_engine.py
```

Responsibilities:

* Normalize hazard inputs
* Calculate risk
* Produce risk category
* Produce contributing factors
* Return structured evidence

Example output:

```json
{
  "risk_score": 92,
  "risk_level": "HIGH",
  "factors": [
    {
      "name": "Rainfall",
      "value": "Very High",
      "contribution": 0.30
    },
    {
      "name": "Elevation",
      "value": "Low",
      "contribution": 0.20
    }
  ]
}
```

---

# 11. Confidence Engine

File:

```text
backend/app/engines/confidence_engine.py
```

Responsibilities:

* Evaluate evidence quality
* Evaluate source agreement
* Evaluate freshness
* Detect missing data
* Detect conflicting observations
* Produce confidence score

Example:

```json
{
  "confidence": 89,
  "level": "HIGH",
  "reasons": [
    "Multiple independent ground reports",
    "Recent rainfall data",
    "Environmental indicators agree"
  ]
}
```

If evidence conflicts:

```json
{
  "confidence": 54,
  "level": "LOW",
  "reasons": [
    "Rainfall indicates high risk",
    "Recent ground reports do not confirm flooding"
  ]
}
```

Confidence must NOT simply equal risk.

---

# 12. Road Graph

Represent the road network as a graph.

```text
Node = intersection/location

Edge = road segment
```

Each edge should contain:

```text
id
start_node
end_node
distance
travel_time
hazard_score
traffic_score
crowd_score
capacity
road_condition
blocked
```

Example:

```json
{
  "road_id": "R-104",
  "distance": 1200,
  "travel_time": 240,
  "hazard_score": 0.2,
  "traffic_score": 0.4,
  "crowd_score": 0.3,
  "capacity": 60,
  "blocked": false
}
```

---

# 13. Routing Engine

File:

```text
backend/app/engines/routing_engine.py
```

Use:

* A*
  or
* Dijkstra

Do not use simple shortest distance.

Calculate a dynamic edge cost.

Conceptually:

```text
route_cost =
    travel_time
  + hazard_penalty
  + traffic_penalty
  + crowd_penalty
  + road_damage_penalty
```

Weights should be configurable.

The engine should return:

```json
{
  "route_id": "R-12",
  "distance": 1800,
  "eta_minutes": 8,
  "risk": "LOW",
  "capacity_remaining": 45,
  "reason": [
    "Low flood exposure",
    "Low current congestion",
    "Road is operational"
  ]
}
```

---

# 14. Crowd Allocation Engine

File:

```text
backend/app/engines/crowd_engine.py
```

Responsibilities:

* Divide affected people into groups
* Evaluate route capacity
* Prevent excessive route concentration
* Assign groups to routes
* Rebalance when route conditions change

Example:

```text
Population: 100

Route A capacity: 40
Route B capacity: 50
Route C capacity: 30

Allocation:

Route A → 35
Route B → 45
Route C → 20
```

The algorithm should attempt to minimize:

```text
Total evacuation time
+
Hazard exposure
+
Congestion
+
Capacity violations
```

A simple heuristic/optimization approach is acceptable for Round 1.

---

# 15. Congestion Engine

File:

```text
backend/app/engines/congestion_engine.py
```

Estimate future route congestion.

Inputs:

* Current people on route
* Incoming people
* Route capacity
* Estimated travel time
* Current movement rate

Output:

```json
{
  "route_id": "R-B",
  "current_load": 72,
  "capacity": 100,
  "predicted_load_5_min": 105,
  "status": "CRITICAL",
  "prediction": "Capacity likely exceeded in approximately 5 minutes"
}
```

The prototype does not need sophisticated traffic forecasting.

A transparent simulation model is acceptable.

---

# 16. Shelter Engine

File:

```text
backend/app/engines/shelter_engine.py
```

Track:

```text
shelter_id
name
location
capacity
current_occupancy
remaining_capacity
status
```

Statuses:

```text
AVAILABLE
LIMITED
NEAR_CAPACITY
FULL
```

Shelter availability should influence destination selection.

---

# 17. Simulation Engine

The simulation engine is central to the demo.

Files:

```text
backend/app/simulation/scenario.py
backend/app/simulation/events.py
backend/app/simulation/simulator.py
```

The simulation should support controlled events.

### Event types

```text
FLOOD_START
ROAD_BLOCKED
CROWD_INCREASE
GROUND_REPORT
CONFLICTING_REPORT
SHELTER_CAPACITY_CHANGE
RAINFALL_INCREASE
```

Example:

```json
{
  "event": "ROAD_BLOCKED",
  "road_id": "R-104",
  "timestamp": "T+04:00"
}
```

When an event occurs:

1. Update environment
2. Recalculate risk if necessary
3. Recalculate affected routes
4. Recalculate crowd allocation
5. Recalculate shelter allocation
6. Update frontend
7. Generate explanation

---

# 18. Data Flow

## Initial Disaster

```text
Simulation Event
      ↓
Environmental Data
      ↓
Risk Engine
      ↓
Confidence Engine
      ↓
Affected Zone
      ↓
Affected Population
      ↓
Road Graph
      ↓
Routing Engine
      ↓
Crowd Allocation
      ↓
Shelter Assignment
      ↓
Frontend
```

---

## Road Closure

```text
Citizen Report / Simulation
          ↓
      Road Status
          ↓
      Road Graph
          ↓
   Remove / Penalize Edge
          ↓
      Recalculate
          ↓
       Routing
          ↓
   Crowd Redistribution
          ↓
      Frontend Update
```

---

## Conflicting Evidence

```text
New Ground Report
       ↓
Evidence Aggregator
       ↓
Evidence Conflict Detection
       ↓
Confidence Engine
       ↓
Confidence decreases
       ↓
Alert UI updates
       ↓
Explanation generated
```

---

# 19. LLM Architecture

The LLM should be a supporting intelligence layer.

It must NOT control:

* Route safety
* Road closure decisions
* Risk calculations
* Shelter capacity
* Emergency severity

The LLM can perform:

### Citizen Report Parsing

Input:

> "Water is almost up to the car doors near the bridge."

Output:

```json
{
  "hazard": "flooding",
  "severity": "high",
  "road_condition": "potentially_blocked",
  "confidence": 0.75
}
```

---

### Explanation Generation

Structured engine output:

```json
{
  "risk": 92,
  "confidence": 89,
  "factors": [...]
}
```

LLM converts this into a concise explanation.

---

### Command Center Questions

Example:

> "Why was Route B removed?"

The LLM should retrieve structured evidence and answer:

> Route B was removed because its associated road segment was reported blocked and its predicted crowd load exceeded the configured capacity.

Do not allow the LLM to invent evidence.

---

# 20. API Design

Use REST APIs initially.

## Hazard

```text
GET /api/hazards
GET /api/hazards/{id}
POST /api/hazards/simulate
```

## Routes

```text
GET /api/routes
POST /api/routes/calculate
POST /api/routes/recalculate
```

## Shelters

```text
GET /api/shelters
PATCH /api/shelters/{id}
```

## Reports

```text
GET /api/reports
POST /api/reports
```

## Simulation

```text
GET /api/simulation/state
POST /api/simulation/start
POST /api/simulation/event
POST /api/simulation/reset
```

## Explanation

```text
POST /api/explanations
POST /api/reports/parse
```

---

# 21. Frontend State

Maintain a central application state containing:

```text
simulationState
hazards
risk
confidence
roads
routes
people
crowds
shelters
reports
timeline
```

When simulation state changes, dependent UI components should update.

Avoid duplicating the same data in multiple components.

---

# 22. Real-Time Updates

For Round 1:

### Preferred

WebSocket or Server-Sent Events.

However, if real-time infrastructure creates unnecessary complexity, use short polling.

The important requirement is:

> When the simulation changes, the map and panels visibly update.

Do not sacrifice demo reliability for sophisticated networking.

---

# 23. Geographic Data

Use geographic coordinates consistently.

Preferred format:

```text
latitude
longitude
```

Road geometry should use GeoJSON where appropriate.

Example:

```json
{
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": []
  }
}
```

Hazard zones should use polygons.

---

# 24. Simulation Data Model

At minimum create:

## Person

```text
id
latitude
longitude
group_id
status
assigned_route
assigned_shelter
```

## Road

```text
id
geometry
capacity
hazard
traffic
blocked
```

## Shelter

```text
id
name
latitude
longitude
capacity
occupancy
```

## Report

```text
id
type
latitude
longitude
severity
timestamp
source
confidence
description
```

## Hazard

```text
id
type
severity
risk_score
confidence
affected_area
evidence
timestamp
```

---

# 25. Demo Mode

The application must have a clearly visible:

> **DEMO MODE — SIMULATED DATA**

indicator.

The system should be able to reset to a known state.

Provide:

> RESET SIMULATION

This is essential for reliable presentations.

---

# 26. Simulation Timeline

The frontend should expose a timeline:

```text
T+00  Flood detected
T+01  Risk assessed
T+02  Evacuation initiated
T+04  Road blocked
T+05  Routes recalculated
T+06  Crowd congestion predicted
T+07  People redistributed
T+08  Conflicting report received
T+09  Confidence reduced
```

This gives the judge a clear story.

---

# 27. Error Handling

The system must gracefully handle:

* Missing data
* Invalid coordinates
* Missing routes
* Full shelters
* No safe route
* Conflicting reports
* API failures

If there is no reliable route:

> ⚠️ No reliable evacuation route found from current evidence. Manual intervention required.

Never fabricate a route.

---

# 28. Testing Strategy

Focus testing on the decision engines.

## Risk Tests

Verify:

* Higher rainfall increases risk
* Higher flood exposure increases risk
* Missing evidence affects confidence

## Confidence Tests

Verify:

* Multiple agreeing reports increase confidence
* Conflicting reports reduce confidence
* Stale evidence reduces confidence

## Routing Tests

Verify:

* Blocked roads are avoided
* High-risk roads receive higher cost
* Shortest route is not always selected
* Route changes after road closure

## Crowd Tests

Verify:

* Route capacity isn't exceeded
* People can be redistributed
* Congested routes receive fewer new assignments

## Simulation Tests

Verify:

* Events update state
* Reset restores initial state
* Events trigger dependent recalculation

---

# 29. Performance Requirements

Round-1 performance target:

* Initial page load should feel fast.
* Map interaction should remain smooth.
* Route recalculation should happen within a few seconds.
* Simulation events should visibly update without requiring page refresh.
* Avoid unnecessary API calls.
* Avoid rendering thousands of individual DOM markers.

For large simulated populations, use aggregation/heatmaps rather than individual markers where appropriate.

---

# 30. Deployment

The project should be runnable locally with minimal setup.

Preferred development commands:

```bash
npm install
npm run dev
```

and:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

If possible, provide one root-level command to start the complete development environment.

Example:

```bash
npm run dev
```

with backend orchestration if practical.

---

# 31. Architecture Priorities

When forced to choose between:

### Complexity

and

### Demo reliability

Always choose:

> **Demo reliability.**

When forced to choose between:

### Sophisticated ML

and

### Explainable deterministic logic

For Round 1 choose:

> **Explainable deterministic logic.**

When forced to choose between:

### More features

and

### Better core experience

Choose:

> **Better core experience.**

---

# 32. Future Architecture

The architecture should allow future additions without requiring a rewrite.

Possible future modules:

```text
ML flood prediction
Satellite imagery
IoT sensors
Weather APIs
Real-time traffic
Advanced multi-agent optimization
Mobile application
Push notifications
Government emergency APIs
Multi-hazard support
```

These are future extensions, not Round-1 requirements.

---

# 33. Final Architecture Principle

The system should follow:

```text
REAL / SIMULATED DATA
        ↓
STRUCTURED EVIDENCE
        ↓
DETERMINISTIC INTELLIGENCE
        ↓
RISK + CONFIDENCE
        ↓
ROUTING + OPTIMIZATION
        ↓
DYNAMIC RESPONSE
        ↓
EXPLAINABLE UI
        ↓
LLM-ASSISTED COMMUNICATION
```

The LLM explains the system.

The LLM does not replace the system.

The architecture must remain understandable enough that a developer can explain every major decision to a judge.
