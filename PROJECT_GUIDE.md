# PRAVAHA — Disaster Evacuation Intelligence Guide

This guide explains **PRAVAHA** directly against the running application so that anyone — including hackathon judges — can understand what the system does, how the UI works, and how it makes smart evacuation decisions during a flood crisis.

---

## 1. WHAT IS PRAVAHA?

### Simple Explanation
PRAVAHA is a **smart flood monitoring and evacuation routing platform**. It acts as a central command dashboard for emergency responders during urban flood disasters.

### The Main Problem It Solves
During severe urban flooding (such as Pune's Mutha River inundation), traditional navigation apps (like Google Maps) recommend the **shortest road**, which often leads people directly into submerged rivers, blocked bridges, or massive traffic jams. 

Furthermore, emergency managers often lack clear visibility into whether field reports are reliable or if shelters have enough space to handle sudden influxes of evacuees.

PRAVAHA solves this by calculating **safety-aware evacuation routes** that balance flood risk, road traffic congestion, and shelter capacity in real time — while explaining *why* every decision was made.

### Overall Flow
```
Weather & River Telemetry ──► Risk & Confidence Engines ──► Safety-Aware Routing ──► Crowd & Congestion Balancing ──► Real-Time Command UI
```

---

## 2. UNDERSTANDING THE FIRST SCREEN

When you open PRAVAHA, you are looking at an operational command dashboard divided into four primary areas:

```
+-----------------------------------------------------------------------------------+
|  TOP STATUS BAR (Logo, Incident Context, Telemetry, Demo Button, Reset Button)    |
+---------------------------------------------------+-------------------------------+
|                                                   | RIGHT INTELLIGENCE PANEL      |
|  DOMINANT MAP VIEW                                | - Hazard Risk & Confidence    |
|  - Pune Mutha River Inundation Area               | - Explanatory Risk Factors    |
|  - Population Clusters                            | - Tabbed Navigation          |
|  - Road Network & Evacuation Routes               | - Evidence Audit Trail        |
|  - Relief Shelters & Status                       |                               |
+---------------------------------------------------+-------------------------------+
|  BOTTOM TIMELINE (Milestone Steps, Play/Pause Demo Controls, Timecode)           |
+-----------------------------------------------------------------------------------+
```

### Top Status Bar
- **What is this?** The top navigation header displaying core incident branding, live telemetry counters, and control triggers.
- **What does it mean?**
  - **`PRAVAHA OPS-GIS · PUNE`**: Identifies the system and current geographic location (Pune, Maharashtra).
  - **`DEMO MODE · SIMULATED DATA`**: Indicates that the dashboard is currently running in demonstration mode with simulated telemetry datasets.
  - **Environmental Telemetry**:
    - **24h Rain**: Total 24-hour rainfall in millimeters (e.g., `184.5 mm`).
    - **Outflow**: Discharge rate from Khadakwasla Dam measured in cubic feet per second (`45,200 cfs`).
    - **Dam Spillway**: Current reservoir capacity percentage (`95.5%`).
  - **`RUN DEMO SCENARIO` Button**: Launches an automated, 2-to-3 minute interactive step-by-step flood event simulation.
  - **`RESET` Button**: Instantly restores the system to its initial baseline state (`T+00`).
- **Why does the system need it?** Provides immediate, high-level environmental metrics so commanders can gauge disaster severity at a single glance.

### The Interactive Map (Center Screen)
- **What is this?** A high-resolution GIS map of Pune centering on the Mutha River corridor.
- **What does it mean?**
  - **Flood Area (Red Polygon)**: Represents the active inundated flood zone along the riverbanks (Ekta Nagar, Pulachi Wadi, Sangamwadi).
  - **Population Clusters (Colored Markers)**: Residential areas with trapped or vulnerable populations (e.g., Ekta Nagar with 3,500 residents).
  - **Road Network (Lines)**: Corridors color-coded by status:
    - **Green/Blue**: Open and safe.
    - **Yellow/Orange**: Heavy traffic / caution.
    - **Red / ⛔ Icon**: Blocked or breached road segment.
  - **Shelters (Building Markers)**: Relief centers (e.g., MIT Paud Campus, Kothrud Relief Center) showing available vs. used bed capacity.
  - **Evacuation Routes (Polyline Paths)**: Animated, safety-calculated paths directing crowd groups from high-risk zones to designated shelters.
- **Why does the system need it?** Visualizes spatial relationships between hazards, evacuees, road conditions, and safe destinations.

### Right Intelligence Panel
- **What is this?** A multi-tabbed operational panel that displays deep analytical breakdowns.
- **What does it mean?**
  - **Estimated Risk Score**: A percentage (e.g., `86.4% CRITICAL`) showing the danger level of the primary hazard zone.
  - **Data Confidence Score**: A percentage (e.g., `95.2% HIGH`) showing how trustworthy the underlying telemetry data is.
  - **Risk Factors / Evidence**: Exact breakdown showing *why* risk is high (rainfall weight, river discharge, dam level) and *why* confidence is high or low (sensor freshness, source agreement).
  - **Tabs**:
    1. **Risk & Evidence**: Risk breakdown, confidence metrics, evidence audit trail, affected populations.
    2. **Evac Routes**: List of all computed multi-path evacuation routes and assigned crowd groups.
    3. **Shelters**: Real-time bed capacity and occupancy tracking across all 4 relief centers.
    4. **Reports**: Live stream of verified sensor reports, field team reconnaissance, and citizen posts.
    5. **Demo & Controls**: Step-by-step scenario navigation and manual event triggers.
- **Why does the system need it?** Eliminates "black-box AI" by giving commanders full explainability behind every score and recommendation.

### Bottom Timeline
- **What is this?** An interactive scenario playback bar at the bottom of the screen.
- **What does it mean?** Shows 8 distinct timeline milestones from `T+00 Baseline` to `T+70 Equilibrium`. Users can click any milestone step to jump directly to that point in the simulation.
- **Why does the system need it?** Allows judges and operators to review how the disaster unfolds over time and test how the system reacts to dynamic changes.

### Reset Button
- **What is this?** A button located in both the top bar and bottom timeline.
- **What does it mean?** Clears all active simulation overrides, resets crowd movements, re-opens blocked roads, and returns the application to the deterministic `T+00` initial state.
- **Why does the system need it?** Ensures a reliable, reproducible demo experience without needing a page refresh.

---

## 3. NOW RUN THE DEMO

To see PRAVAHA in action, click **`RUN DEMO SCENARIO`** (located at the top right or bottom left).

Here is the exact step-by-step sequence that executes in the system:

```
[T+00 Baseline] ──► [T+10 Rain Surge] ──► [T+20 Evac Orders] ──► [T+30 Crowd Surge]
                                                                        │
[T+70 Equilibrium] ◄── [T+60 Report Conflict] ◄── [T+50 Field Verified] ◄── [T+40 Road Breach]
```

### 1. Step 0: Baseline Reset (`T+00:00`)
- **What happens**: System initializes the Pune operational baseline.
- **What changes**: Catchment rainfall is at `184.5 mm`, Khadakwasla outflow at `45,200 cfs`. Risk is assessed at `86.4%` (CRITICAL) due to high water volume, while Data Confidence is `95.2%` (HIGH).
- **What appears**: 26 initial safety-aware routes are calculated across 4 relief shelters. All major corridors remain open.

### 2. Step 1: Rainfall Surge (`T+10:00`)
- **What happens**: Upstream Khadakwasla catchment precipitation spikes by `+25.0 mm`.
- **What changes**: 24h rainfall rises to `209.5 mm`, river discharge increases to `49,700 cfs`, and dam reservoir pressure reaches `99.2%`.
- **Why it changes**: The Risk Engine automatically recalculates riverbank risk weights based on increased outflow.
- **What appears**: Top bar telemetry counters update in real time to reflect rising water levels.

### 3. Step 2: Evacuation Dispatched (`T+20:00`)
- **What happens**: Central Command issues an active evacuation order.
- **What changes**: Status changes to `EVACUATION ACTIVE`.
- **What the system calculates**: The Crowd Engine identifies `9,750` affected residents across high-vulnerability sectors (Ekta Nagar, Pulachi Wadi, Sangamwadi) and partitions them into 21 discrete evacuee groups.
- **What appears**: Animated evacuation route polylines light up on the map, linking population zones to MIT Paud Campus, Kothrud Relief Center, and other safe shelters.

### 4. Step 3: Crowd Surge & Congestion (`T+30:00`)
- **What happens**: Evacuee headcount surges by 50% (`x1.5 multiplier`), reaching `14,625` people.
- **What changes**: Traffic volume on the Karve-Paud elevated corridor rises to `1,980 vph` (`70.7%` load ratio).
- **What the system calculates**: The 5-minute predictive Congestion Engine projects traffic load reaching `81.3%` (`2,277 vph`), triggering a `CAUTION` warning.
- **What appears**: Karve Road line styling turns yellow/orange on the map. The Routing Engine increases the travel penalty cost for this route to prevent gridlock.

### 5. Step 4: Critical Road Breach (`T+40:00`)
- **What happens**: Sudden flash flooding and tree fall breach the Karve-Paud elevated corridor (`rd-karve-paud`).
- **What changes**: Karve-Paud road segment status transitions to `BLOCKED`.
- **What the system calculates**: The Routing Engine immediately sets the segment traversal cost to infinity, rendering it unusable.
- **What appears**: A **⛔ red blocked badge** appears on Karve Road. Active routes on this segment instantly disappear. A **DYNAMIC REROUTE NOTIFICATION** banner pops up in the Intelligence Panel.

### 6. Step 5: Dynamic Reroute & Reallocation (`T+50:00`)
- **What happens**: NDRF Field Reconnaissance Unit 2 verifies that the JM/FC Road northern spine and Vitthalwadi bypass are clear and open.
- **What the system calculates**: PRAVAHA automatically re-executes Dijkstra routing for all affected evacuees.
- **What appears**: Evacuee groups previously assigned to Karve Road are seamlessly redirected via the open JM/FC spine and Tilak Road corridors. Shelter intake updates smoothly without overloading any single facility.

### 7. Step 6: Conflicting Citizen Report (`T+60:00`)
- **What happens**: An unverified citizen social media post claims that roads near Vitthalwadi are dry and safe, directly contradicting live telemetry sensors.
- **What changes**: Data Confidence drops from `95.2%` to `76.2%` (`MODERATE`).
- **What the system calculates**: The Confidence Engine detects an agreement discrepancy between sensor feeds and crowd posts.
- **What appears**: An **`EVIDENCE CONFLICT DETECTED`** warning banner highlights in amber on the Intelligence Panel, penalizing confidence while maintaining safe routing based on verified physical telemetry.

### 8. Step 7: Operational Equilibrium (`T+70:00`)
- **What happens**: All 4 population sectors are fully routed and accounted for.
- **What changes**: Risk, Confidence, Routing costs, and Shelter capacities achieve complete operational balance.
- **What appears**: The UI displays full explainability across all panels. Evacuee flows safely stabilize within shelter capacity limits.

---

## 4. THE IMPORTANT PART — EVACUATION

Understanding how PRAVAHA moves people during a crisis is the core technical highlight of the project.

```
Population Clusters ──► Safety Cost Calculation ──► K-Shortest Paths ──► Crowd Balancing ──► Shelter Capacity Check
 (Ekta Nagar, etc.)     (Dist + Flood + Traffic)     (Multi-Route)       (Group Split)         (Occupancy Limits)
```

1. **How Affected People Are Identified**:
   - Population zones are mapped as spatial clusters with estimated resident headcounts and elevation profiles.
   - Zones overlapping inundated flood contours are flagged with evacuation urgency levels (`CRITICAL`, `HIGH`, `MODERATE`).

2. **How Routes Are Calculated**:
   - The road network is represented as a directed graph where each road edge has a **Safety Cost**:
     $$\text{Safety Cost} = \text{Distance} + \text{Hazard Risk Penalty} + \text{Congestion Penalty}$$
   - Routes are calculated using a **Safety-Aware Dijkstra Algorithm**.

3. **Why the Shortest Route Is Not Always Selected**:
   - A standard GPS app chooses the shortest physical path. In a flood, that shortest path might cross a bridge submerged under 1 font of water or end up stuck in gridlocked traffic. PRAVAHA avoids high-hazard and high-congestion edges even if they are geographically shorter.

4. **How Multiple Routes Are Used**:
   - Rather than funneling all evacuees down a single "best" road, the Routing Engine calculates the **Top-K safe alternative paths** for each population sector.

5. **How People/Groups Are Distributed**:
   - The Crowd Engine splits large populations into smaller operational groups (e.g., 500 residents per group) and distributes them across multiple paths.

6. **How Congestion Is Considered**:
   - As more crowd groups are assigned to a road, its current volume (`vph`) increases relative to its rated capacity. When volume exceeds 70%, the Congestion Engine exponentially increases that road's cost penalty, steering remaining groups toward alternate open corridors.

7. **How Shelter Capacity Is Considered**:
   - Shelters track real-time occupancy vs. total bed capacity (e.g., MIT Paud Campus: 2,500 beds). Once a shelter approaches capacity, the system routes remaining evacuees to secondary facilities (such as Kothrud Center or SP College).

8. **What Happens When a Road Is Blocked & How Rerouting Works**:
   - When a segment is closed (`is_blocked = true`), its cost becomes infinite. The system immediately triggers an automated recalculation, clearing compromised routes and redirecting in-transit groups onto safe alternative spines.

---

## 5. RISK VS CONFIDENCE

PRAVAHA maintains a strict separation between **Risk** and **Confidence**.

| Metric | What It Measures | Example Value | Why It Matters |
| :--- | :--- | :--- | :--- |
| **Risk Score** | *How dangerous is the flood?* | `86.4%` (CRITICAL) | Based on physical data: rainfall volume, river discharge, dam level, elevation, and water depth. |
| **Confidence Score** | *How reliable is our data?* | `95.2%` (HIGH) $\rightarrow$ `76.2%` (MODERATE) | Based on data freshness, telemetry sensor count, and source agreement. |

### Why They Are Kept Separate
- High Risk + High Confidence = **Definite Danger** $\rightarrow$ Act immediately.
- High Risk + Low Confidence = **Unverified Danger** $\rightarrow$ Dispatch NDRF reconnaissance team to verify ground reality before changing major evacuation plans.

### Actual Demo Behavior (T+60 Scenario Step)
When an unverified citizen social post claims a road is clear while river sensors report rising water:
- **Risk Score** remains high at **`86.4%`** because physical telemetry sensors indicate severe water volume.
- **Confidence Score** drops from **`95.2%` to `76.2%`** because the citizen report conflicts with sensor feeds.
- **System Action**: PRAVAHA flags an **`EVIDENCE CONFLICT DETECTED`** banner and retains safe routing around the river, avoiding hasty decisions based on unverified social posts.

---

## 6. WHAT IS SIMULATED VS. WHAT WOULD BE REAL IN PRODUCTION

| Component | Current Hackathon Prototype (Simulated / Replayed) | Production System (Connected to Real Data) |
| :--- | :--- | :--- |
| **Weather & River Telemetry** | Pre-scripted scenario steps simulating rain intensity and dam outflow. | Live IoT rain gauge API feeds (Central Water Commission / Irrigation Department). |
| **Traffic Conditions** | Simulated volume per hour (vph) load ratios on road network segments. | Live city traffic APIs (Google Maps Platform, TomTom, urban CCTV video analytics). |
| **Field & Citizen Reports** | Replayed evidence items (sensor logs, NDRF notes, citizen posts). | Automated WhatsApp/SMS gateway pipeline & NLP crowd-report verification engine. |
| **Routing & Optimization Engines** | **Full, live backend implementation** (Python FastAPI + NetworkX Graph Algorithms). | Identical production algorithms scaled on cloud microservices. |
| **Command Dashboard UI** | **Full, live frontend implementation** (Next.js 15 + Leaflet GIS + TailwindCSS). | Deployed on operational emergency center video walls and field tablet devices. |

---

## 7. HOW THE SYSTEM WORKS INTERNALLY

Here is the simple, step-by-step pipeline of how data flows through PRAVAHA's backend logic:

```
[1. Risk Engine] ──► [2. Confidence Engine] ──► [3. Routing Engine] ──► [4. Crowd Engine]
                                                                                │
[7. Command UI]  ◄── [6. Rerouting Engine]  ◄── [5. Congestion Engine] ◄────────┘
```

1. **Risk Engine**: Reads weather telemetry, river outflow rates, and map terrain elevation to calculate a weighted hazard risk score for each zone.
2. **Confidence Engine**: Analyzes sensor timestamp freshness, feed completeness, and cross-source agreement to assign a reliability percentage and flag conflicting reports.
3. **Routing Engine**: Converts the road map into a mathematical graph network and runs Safety-Aware Dijkstra to find low-cost, flood-safe paths.
4. **Crowd Engine**: Divides evacuee populations into manageable groups and maps them across primary and secondary safe corridors.
5. **Congestion Engine**: Monitors simulated traffic volume on each road, penalizing overcrowded routes to prevent bottleneck gridlock.
6. **Rerouting Engine**: Constantly watches for road closures or hazard shifts; instantly re-runs routing and crowd allocation when a breach occurs.
7. **Command UI**: Renders map layers, telemetry counters, explainability gauges, and timeline milestones on the central screen for emergency responders.

---

## 8. 2-MINUTE UNDERSTANDING CHECK

If you understand these **8 core points**, you fully understand PRAVAHA:

1. **PRAVAHA is a Safety-Aware Evacuation Platform**: It guides flooded populations to safe shelters while avoiding floodwaters and traffic jams.
2. **Shortest Distance $\neq$ Safest Path**: PRAVAHA minimizes overall *hazard risk and congestion cost*, not raw physical kilometers.
3. **Risk vs. Confidence are Separate**: Risk tells commanders *how severe the danger is*; Confidence tells them *how much to trust the data*.
4. **Explainable Intelligence**: Every score breaks down into exact contributing factors (rainfall weight, sensor freshness, agreement ratios).
5. **Multi-Route Crowd Distribution**: Evacuees are split into smaller groups across multiple corridors to prevent single-point road bottlenecks.
6. **Dynamic Rerouting**: When a road gets flooded or blocked (like Step 4 in the demo), the system immediately recalculates safe alternative paths.
7. **Shelter Capacity Balancing**: Evacuees are directed only to shelters with available space and safe elevation above flood levels.
8. **Interactive Scenario Demo**: The `RUN DEMO SCENARIO` button executes a complete 7-stage simulated flood emergency in 2 to 3 minutes.
