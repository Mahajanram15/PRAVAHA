# PRD — Disaster Response & Dynamic Evacuation Platform

## 1. Product Overview

### Working Name

**PRAVAHA**

> Working name only. The final product name can be changed later.

### One-Line Product Definition

A real-time disaster intelligence and evacuation coordination platform that transforms hazard warnings into **explainable, uncertainty-aware, crowd-aware evacuation decisions**.

### Core Product Idea

Most disaster warning systems answer:

> **"Is there danger?"**

PRAVAHA aims to answer the more important operational questions:

> **"Who is affected?"**
> **"Why is this area considered dangerous?"**
> **"How confident are we?"**
> **"Where should people go?"**
> **"Which route should each group take?"**
> **"Will that route become congested?"**
> **"What should change when conditions change?"**

The system combines environmental observations, road conditions, citizen reports, population/location data and shelter capacity to produce explainable evacuation recommendations.

---

# 2. Hackathon Context

This is a **Round-1 prototype** for a hackathon.

The prototype does NOT need to be production-ready.

The target is approximately **50–70% functional completeness**, with a polished and convincing **2–3 minute demonstration**.

The system should prioritize:

1. A strong visual experience
2. A believable disaster scenario
3. Explainable risk assessment
4. Dynamic evacuation routing
5. Crowd-aware route distribution
6. Dynamic rerouting
7. Uncertainty/confidence
8. A clear demonstration of the core USP

Do NOT attempt to build a nationwide disaster-management platform in Round 1.

---

# 3. Primary Disaster Type

## Flood

The Round-1 prototype focuses on **one primary hazard: flooding**.

The system should use a single district/urban area for the demonstration.

The geographic scope can initially use **Pune district / Pune urban area** as the demonstration environment.

All simulated or replayed information must be clearly labeled.

Example:

> DEMO MODE — SIMULATED FLOOD EVENT

Never present synthetic or replayed information as live emergency information.

---

# 4. Target Users

## Primary User — Emergency Response Operator

A person monitoring a disaster event from a command center.

Their questions are:

* Which areas are currently at risk?
* How severe is the risk?
* Why does the system believe this?
* How confident is the prediction?
* Which roads are usable?
* Which roads are becoming dangerous?
* Where are people concentrated?
* Which shelters still have capacity?
* Where should people be evacuated?
* Will evacuation routes become congested?
* Why was a particular route selected?
* What changed since the previous state?

---

## Secondary User — Person in the Affected Area

A person who receives an emergency warning and needs:

* Clear danger information
* Their current/assigned evacuation zone
* A safe destination
* A recommended evacuation route
* Route status
* Shelter information
* Updated routing when conditions change

For Round 1, this experience can be represented through a simulated mobile/user panel rather than requiring actual mobile-device emergency broadcasting.

---

## Tertiary User — Ground Reporter

A person who can report conditions from the ground:

* Flooding
* Blocked roads
* Heavy traffic
* Debris
* Building damage
* People requiring assistance

Reports should be location- and time-aware.

---

# 5. Problem Statement

Communities may receive a flood warning without knowing:

* Which roads are actually usable
* Which areas are becoming dangerous
* Where people are concentrated
* Which evacuation routes will become congested
* Which shelters still have capacity
* Why an AI system considers an area dangerous
* How reliable the available evidence is

PRAVAHA connects hazard intelligence with evacuation coordination.

It should move beyond:

> WARNING → STATIC MAP

toward:

> DETECT → EXPLAIN → ASSESS → ROUTE → DISTRIBUTE → MONITOR → RE-ROUTE

---

# 6. Core Product Principles

## 6.1 Explainability First

Every important risk or route decision should have an understandable explanation.

Never show only:

> Risk = 92%

Instead show:

> HIGH RISK — 92%

With supporting evidence such as:

* Rainfall
* Elevation
* River proximity
* Ground reports
* Road disruption
* Historical/replayed evidence

---

## 6.2 Uncertainty Awareness

The system must distinguish:

### Risk

How dangerous the current situation is estimated to be.

### Confidence

How reliable the available evidence is for that estimate.

Example:

> HIGH RISK — 92%
> Confidence — 89%

If evidence conflicts:

> HIGH RISK — 82%
> Confidence — 54%

Explanation:

> Rainfall indicates elevated flood risk, but recent ground observations do not confirm flooding.

The system must never pretend that uncertain information is certain.

---

## 6.3 Safety Over Shortest Distance

The platform should NOT simply calculate the shortest path.

Route selection should consider:

* Travel time
* Hazard exposure
* Road condition
* Crowd density
* Traffic
* Road capacity
* Road closures
* Destination/shelter capacity

The objective is:

> **Safest practical evacuation route**

rather than:

> **Shortest route**

---

## 6.4 Crowd Distribution

The system should avoid sending everyone through one route.

If several viable evacuation routes exist, people should be distributed based on:

* Current location
* Route risk
* Route capacity
* Current congestion
* Predicted congestion
* Shelter capacity

Two people in different locations may receive different routes.

This is one of the core product differentiators.

---

## 6.5 Dynamic Re-Routing

Evacuation recommendations must change when the environment changes.

Example:

1. Route A is safe.
2. A road blockage is reported.
3. Route A becomes unavailable.
4. System recalculates affected routes.
5. People are redistributed to Routes B/C.
6. Dashboard explains the change.

---

# 7. Core USPs

## USP 1 — Explainable + Uncertainty-Aware Disaster Alerts

Instead of:

> 🚨 Flood Risk = 92%

Show:

> 🚨 HIGH RISK — 92%

### Why?

* 🌧️ Rainfall: Very High
* 🏔️ Elevation: Low
* 🌊 River proximity: High
* 📱 Ground reports: 7
* 🚧 Road disruption: Detected

### Confidence: 89%

If evidence conflicts:

> ⚠️ LOW CONFIDENCE — 54%

> Rainfall indicates high risk, but ground observations do not confirm flooding.

The system exposes both the prediction and the reliability of the evidence.

---

## USP 2 — Dynamic Crowd-Aware Evacuation

Do not send every person through the same route.

The system considers:

* Current location
* Route safety
* Route capacity
* Crowd density
* Traffic
* Hazard exposure

and distributes people across available evacuation corridors.

---

## USP 3 — Predictive Congestion

The system should not wait for a route to become overcrowded.

It should estimate whether a route is likely to become congested based on:

* Current population
* Incoming evacuees
* Route capacity
* Current movement
* Expected travel time

Example:

> ⚠️ ROUTE B
> Predicted critical congestion in approximately 6 minutes.

New evacuees can then be directed elsewhere.

---

## USP 4 — Shelter-Capacity-Aware Evacuation

The nearest shelter is not always the best destination.

Destination selection should consider:

* Distance
* Route safety
* Route congestion
* Shelter capacity
* Current shelter occupancy

Example:

> Shelter A is closer but approaching capacity.
> Shelter B has sufficient capacity and a lower-risk route.

---

## USP 5 — Ground-Truth Citizen Reports

People can submit reports such as:

* Flood detected
* Road blocked
* Heavy traffic
* Debris
* Building damage
* Person trapped
* Assistance required

Reports are associated with:

* Location
* Timestamp
* Type
* Severity
* Confidence/evidence

Multiple reports can strengthen evidence.

Conflicting reports should reduce confidence rather than being silently ignored.

---

## USP 6 — Continuous Disaster Situation Model

The platform continuously represents:

* Hazard state
* Road state
* Crowd state
* Shelter state
* Risk state
* Evacuation state

When one changes, dependent recommendations can change.

---

# 8. Core Features for Round 1

## P0 — Must Have

### 8.1 Interactive Disaster Map

Display:

* Hazard zones
* Roads
* Blocked roads
* Evacuation routes
* Shelters
* Population/crowd areas
* Ground reports

The map should be the primary visual element.

---

### 8.2 Flood Risk Engine

Calculate a flood-risk score using structured environmental inputs.

Example inputs:

* Rainfall
* Elevation
* River proximity
* Ground reports
* Road disruption

The Round-1 implementation may use a transparent weighted scoring system rather than a trained ML model.

---

### 8.3 Confidence Engine

Calculate confidence based on:

* Evidence availability
* Number of reports
* Recency
* Agreement/disagreement between sources
* Missing information

Confidence must be displayed separately from risk.

---

### 8.4 Evidence Panel

Every major alert must show:

* Risk
* Confidence
* Contributing factors
* Evidence sources
* Timestamp

---

### 8.5 Affected Population

Identify simulated users/population groups inside affected areas.

Display:

> 87 people currently affected.

---

### 8.6 Safe Route Calculation

Calculate evacuation routes using a weighted road graph.

Route cost should consider:

* Distance/travel time
* Hazard
* Congestion
* Road condition
* Capacity

---

### 8.7 Crowd-Aware Route Allocation

Assign groups of people to different routes.

Avoid overloading one route.

---

### 8.8 Dynamic Re-Routing

When a road is blocked or congestion changes:

* Recalculate routes
* Redistribute affected people
* Update map
* Explain the reason for change

---

## P1 — Should Have

### 8.9 Shelter Capacity

Display:

* Shelter capacity
* Current occupancy
* Remaining capacity
* Status

---

### 8.10 Citizen Reports

Allow simulated reports to modify the environment.

---

### 8.11 Predictive Congestion

Show predicted route overload.

---

### 8.12 LLM Explanation

Use an LLM to transform structured system results into clear human-readable explanations.

The LLM must not independently make safety-critical routing decisions.

---

## P2 — Optional

These should only be implemented if time permits:

* More detailed historical replay
* More advanced population simulation
* Advanced route animations
* Mobile-style evacuation view
* Voice interaction
* Additional hazard types

---

# 9. AI/ML Strategy

## Do NOT train a custom ML model for Round 1 unless there is a strong reason.

The prototype can combine:

### Deterministic algorithms

For:

* Risk scoring
* Confidence scoring
* Route calculation
* Capacity calculation
* Crowd allocation

### Optimization/pathfinding

For:

* Dijkstra
* A*
* Weighted graph routing
* Capacity-aware assignment

### LLM

For:

* Citizen report interpretation
* Natural-language explanations
* Command-center questions
* Summarizing evidence

This hybrid architecture is preferred because disaster-response decisions should be explainable and reproducible.

---

# 10. Data Strategy

The prototype may use:

### Real/public data

Where practical:

* OpenStreetMap road data
* Terrain/elevation data
* Public environmental datasets
* Historical/replayed disaster information

### Synthetic data

For:

* Population locations
* Citizen reports
* Road blockages
* Crowd movement
* Shelter occupancy
* Simulated disaster progression

Synthetic data must be clearly labeled.

Example:

> DEMO — SIMULATED EVENT

Never claim simulated information is live.

---

# 11. Demo Scenario

The entire Round-1 product should be designed around one compelling scenario.

## Scenario: Pune Flood Event

### Step 1 — Disaster Detection

A simulated flood event begins.

Dashboard displays:

> 🚨 HIGH FLOOD RISK

Risk:

> 92%

Confidence:

> 89%

Evidence:

* High rainfall
* Low elevation
* River proximity
* Ground reports
* Road disruption

---

### Step 2 — Affected Area

The system identifies:

> 87 people in the affected zone.

The map highlights them.

---

### Step 3 — Evacuation Planning

The system evaluates multiple routes.

Example:

```text
Route A
ETA: 7 min
Risk: Low
Capacity: 40

Route B
ETA: 8 min
Risk: Low
Capacity: 50

Route C
ETA: 10 min
Risk: Medium
Capacity: 30
```

The system distributes evacuees instead of sending everyone to Route A.

---

### Step 4 — Road Blockage

A simulated citizen report arrives:

> 🚧 Road A blocked.

The platform updates the road.

Affected evacuees are automatically re-routed.

---

### Step 5 — Predicted Congestion

Route B becomes crowded.

The system displays:

> ⚠️ Predicted critical congestion in 6 minutes.

New evacuees are redirected to Route C.

---

### Step 6 — Conflicting Evidence

A new ground report contradicts environmental evidence.

The system changes:

> Confidence: 54%

and explains:

> Rainfall indicates high risk, but recent ground observations do not confirm flooding.

---

### Step 7 — Final State

The command center sees:

* Current hazard
* Confidence
* Affected people
* Route allocation
* Blocked roads
* Predicted congestion
* Shelter capacity
* Current evacuation status

This should be the final impressive dashboard state.

---

# 12. Demo Controls

The interface should include controlled simulation actions.

Examples:

### `START FLOOD EVENT`

Starts the scenario.

### `ADD ROAD BLOCKAGE`

Simulates a blocked road.

### `INCREASE CROWD`

Simulates evacuation congestion.

### `ADD GROUND REPORT`

Adds citizen evidence.

### `ADD CONFLICTING REPORT`

Demonstrates uncertainty handling.

### `UPDATE SHELTER CAPACITY`

Changes destination availability.

These controls allow the team to reliably demonstrate the system during the 2–3 minute presentation.

---

# 13. Success Criteria

The Round-1 prototype is successful if a judge can understand the following within approximately 2 minutes:

1. A flood risk has been detected.
2. The system explains why.
3. The system communicates confidence.
4. The affected population is identified.
5. Multiple evacuation routes are evaluated.
6. People are distributed across routes.
7. A road disruption changes the evacuation plan.
8. Predicted congestion affects route allocation.
9. Conflicting evidence lowers confidence.
10. The system explains its decisions.

---

# 14. Non-Goals for Round 1

Do NOT attempt to build:

* Nationwide coverage
* Actual nationwide emergency broadcasting
* Direct access to every user's phone
* Telecom-level emergency infrastructure
* Production-grade emergency services
* Fully autonomous emergency decisions
* Multiple disaster types
* A custom deep-learning flood prediction model
* A complete government emergency-response platform
* Medical triage
* Real-world emergency dispatch
* Guaranteed safety
* Guaranteed route availability

The product is a **prototype decision-support and evacuation-coordination system**, not a certified emergency-management system.

---

# 15. Safety and Trust Principles

The system must never imply:

> "This route is guaranteed safe."

Use:

> "Recommended based on currently available evidence."

Every important decision should have:

* Evidence
* Timestamp
* Confidence
* Reason

If information is insufficient:

> **Insufficient information — manual verification recommended.**

The system must prefer uncertainty over fabricated certainty.

---

# 16. Product Positioning

Do not position the product as:

> "Another AI disaster chatbot."

Position it as:

> **An explainable disaster intelligence and dynamic evacuation coordination platform.**

The central product promise is:

# Detect → Explain → Predict → Distribute → Re-route

The system should help emergency responders move from:

> **"There is a disaster."**

to:

> **"Here is what is happening, why we believe it, who is affected, where they should go, why those routes were selected, and how the plan changes as the situation evolves."**

---

# 17. Visual Product Identity

The application should feel like a **professional emergency operations / GIS command platform**, not a generic AI SaaS dashboard.

The map and operational information should be the center of the experience.

The interface must prioritize:

* Information hierarchy
* Situational awareness
* Evidence
* Clarity
* Fast comprehension
* Operational usefulness

Avoid unnecessary decorative UI.

Detailed visual rules are defined separately in `design.md`.

---

# 18. Round-1 Definition of Done

The prototype is considered complete when:

### Technical

* Application runs locally.
* Map loads.
* Simulated disaster data loads.
* Risk calculation works.
* Confidence calculation works.
* Evidence panel works.
* Routes can be calculated.
* People can be distributed across routes.
* Road closures trigger route recalculation.
* Crowd conditions can affect routing.
* Shelter capacity can affect destination selection.
* Simulation controls work.

### Product

A judge can understand the complete story without developer explanation.

### Demo

The team can execute the full scenario reliably in approximately:

> **2–3 minutes**

### Trust

The interface clearly distinguishes:

* Live data
* Simulated data
* Historical/replayed data
* Predictions
* Confidence
* Recommendations

---

# 19. Final Product Principle

## Do not build the biggest disaster platform.

## Build the clearest demonstration of intelligent evacuation.

The prototype should make the judge think:

> **"This doesn't just warn people about a disaster. It continuously figures out how people should move through a changing disaster environment — and explains why."**
