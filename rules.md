# RULES.md — PRAVAHA

These rules apply to the entire project.

---

## 1. Scope

Build only the **Round-1 prototype**.

Prioritize a polished, reliable 2–3 minute demo over production completeness.

Do not add features simply because they are technically possible.

---

## 2. Primary Goal

The core experience must demonstrate:

> **Detect → Explain → Predict → Distribute → Re-route**

Every major implementation decision should support this flow.

---

## 3. Disaster Scope

Round 1 supports:

> **Flooding only**

Do not implement multiple disaster types unless explicitly requested later.

---

## 4. Geographic Scope

Use one district/urban demonstration area.

Pune can be used as the prototype geography.

Do not attempt nationwide coverage.

---

## 5. Simulated Data

Synthetic/replayed data is allowed and expected.

However:

### NEVER present simulated data as live data.

Clearly display:

> **DEMO MODE · SIMULATED DATA**

Historical/replayed events must also be clearly labeled.

---

## 6. No Fake Live Data

Do not create fake API integrations and label them as real-time.

If real-time data is unavailable:

> Use simulated data and clearly label it.

---

## 7. Safety-Critical Logic

Do NOT let an LLM independently decide:

* Whether a road is safe
* Whether a route is safe
* Whether an area is dangerous
* Whether a shelter is suitable
* Whether an evacuation should happen

These decisions must come from structured data and deterministic/algorithmic logic.

---

## 8. LLM Responsibilities

The LLM may be used for:

* Citizen-report interpretation
* Natural-language explanations
* Command-center Q&A
* Summarization

The LLM must explain structured system decisions rather than invent them.

---

## 9. Risk Score

Risk must be explainable.

Never display only:

> Risk = 92%

Always provide the major contributing factors.

Example:

* Rainfall
* Elevation
* River proximity
* Ground reports
* Road disruption

---

## 10. Confidence

Risk and confidence are different values.

Never calculate:

> confidence = risk

Confidence should depend on evidence quality, freshness, agreement and missing/conflicting information.

---

## 11. Uncertainty

When evidence conflicts:

### Lower confidence.

Do not hide conflicting evidence.

Do not manufacture certainty.

Example:

> High Risk — 82%
> Confidence — 54%

---

## 12. Routing

Do NOT use simple shortest-distance routing.

Route evaluation should consider:

* Travel time
* Hazard
* Traffic
* Crowd density
* Road condition
* Capacity

The system should prefer the **safest practical route**, not necessarily the shortest route.

---

## 13. Blocked Roads

A blocked road must never be recommended as an evacuation route.

When a road becomes blocked:

1. Update road state.
2. Recalculate affected routes.
3. Recalculate crowd allocation.
4. Update the UI.
5. Explain why routes changed.

---

## 14. Crowd Distribution

Do not send everyone through the same route when multiple viable routes exist.

Consider:

* Route capacity
* Current crowd
* Predicted crowd
* Hazard
* Location

Avoid route overload.

---

## 15. Predictive Congestion

If the simulation predicts that a route will exceed capacity:

> Flag it before capacity is exceeded.

Use the prediction to influence new route assignments.

---

## 16. Shelter Capacity

Never assign people to a shelter beyond its available capacity unless the UI explicitly marks it as an exceptional/overflow condition.

Prefer another viable shelter when appropriate.

---

## 17. No Safe Route

If no reliable route exists:

> **No reliable evacuation route found from current evidence. Manual intervention required.**

Never fabricate a route.

---

## 18. Evidence

Important system decisions should expose evidence.

At minimum:

* What happened
* Why the system believes it
* Timestamp
* Confidence

---

## 19. Citizen Reports

Citizen reports are evidence, not absolute truth.

Consider:

* Location
* Timestamp
* Severity
* Number of similar reports
* Agreement with other data

Conflicting reports should reduce confidence where appropriate.

---

## 20. Explainability

Every major automated change should have a reason.

Examples:

> Route changed because Road A was reported blocked.

> Route B was avoided because predicted crowd density exceeded capacity.

> Confidence decreased because environmental data and ground reports conflict.

---

## 21. Visual Design

Follow `design.md`.

The application must NOT look like a generic AI/vibe-coded website.

Avoid:

* Excessive gradients
* Excessive glassmorphism
* Excessive rounded cards
* Generic SaaS layouts
* Decorative animations
* Purple AI-dashboard aesthetics
* Excessive shadows
* Unnecessary visual effects

The product should feel like professional emergency/GIS software.

---

## 22. Map First

The map is the primary interface.

Do not allow cards, charts or decorative UI to overpower the map.

---

## 23. Color Semantics

Colors have meaning.

Use consistently:

* Red → Critical / danger
* Orange/amber → Warning
* Yellow → Caution
* Green → Safe
* Blue → Information
* Gray → Neutral

Do not use these colors decoratively.

---

## 24. Animation

Animations must communicate state.

Good:

* Route recalculation
* Crowd redistribution
* Alert transitions
* Timeline progression

Avoid:

* Constant pulsing
* Decorative floating objects
* Excessive motion
* Unnecessary transitions

---

## 25. No Overengineering

Prefer:

> Simple + reliable + explainable

over:

> Complex + impressive on paper + unreliable

Do not introduce technologies that do not materially improve the prototype.

---

## 26. No Unnecessary ML

Do not train a custom ML model just to claim that the project uses machine learning.

For Round 1:

* Weighted risk scoring is acceptable.
* Rule-based confidence is acceptable.
* A*/Dijkstra routing is acceptable.
* Optimization/heuristics are acceptable.
* LLMs can provide natural-language intelligence.

Add ML only when it provides a meaningful improvement.

---

## 27. Code Quality

Keep responsibilities separated.

Avoid:

* One giant component
* One giant backend file
* Duplicated logic
* Hardcoded logic scattered throughout the UI

Keep:

* Risk logic in risk engine
* Routing logic in routing engine
* Crowd logic in crowd engine
* Simulation logic in simulation engine
* UI logic in frontend components

---

## 28. Demo Reliability

The application must have a deterministic demo state.

Provide:

> **RESET SIMULATION**

The same demo sequence should produce the same core results.

Avoid random behavior that could break the presentation.

---

## 29. Demo Controls

The prototype should support controlled events such as:

* Start flood
* Block road
* Increase crowd
* Add ground report
* Add conflicting report
* Change shelter capacity
* Reset simulation

These controls exist to demonstrate the intelligence of the system.

---

## 30. Error Handling

Never silently fail.

If something cannot be calculated, show a meaningful state.

Example:

> Insufficient information

or:

> Manual verification required

Never display fabricated results.

---

## 31. Data Integrity

Never invent:

* Government statistics
* Live emergency data
* Sensor readings
* GPS positions
* Road closures
* Disaster events

unless they are explicitly identified as simulated/demo data.

---

## 32. Product Claims

Do not claim that the prototype:

* Guarantees safety
* Guarantees evacuation success
* Replaces emergency authorities
* Has nationwide emergency broadcasting
* Has direct access to every phone
* Provides certified emergency decisions

Position it as:

> **An explainable disaster intelligence and evacuation decision-support prototype.**

---

## 33. Build Priority

When time is limited, prioritize in this order:

1. Working map
2. Risk + confidence
3. Evidence explanation
4. Safe routing
5. Crowd distribution
6. Dynamic rerouting
7. Shelter capacity
8. Citizen reports
9. Predictive congestion
10. Visual polish

---

## 34. Feature Freeze

Do not introduce new major features during the final polish phase.

Fix:

* Bugs
* UX problems
* Visual inconsistencies
* Demo reliability issues

before adding new functionality.

---

## 35. Final Rule

When uncertain about an implementation decision, ask:

> **Does this make the 2–3 minute disaster-response story clearer, more believable, or more reliable?**

If not:

> **Do not build it.**
