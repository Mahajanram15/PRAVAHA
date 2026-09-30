<div align="center">

# 🌊 PRAVAHA (प्रवाह)
### Next-Gen Disaster Evacuation Intelligence & Dynamic Multi-Path Coordination Platform

[![Next.js 15](https://img.shields.io/badge/Frontend-Next.js%2015%20%2F%20React%2019-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI%20%2F%20Python%203.11-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Leaflet GIS](https://img.shields.io/badge/GIS-Leaflet%20%2B%20CartoDB-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![Graph Algorithms](https://img.shields.io/badge/Algorithms-NetworkX%20%2F%20Dijkstra%20K--Paths-orange?style=for-the-badge)](https://networkx.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%20%2B%20TailwindCSS-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

<p align="center">
  <b>Transforming raw hazard telemetry into explainable, uncertainty-aware, and crowd-balanced evacuation lifelines in real time.</b>
</p>

[Key Features](#-key-features) • [Why PRAVAHA?](#-the-problem-vs-the-pravaha-solution) • [System Architecture](#-system-architecture) • [Demo Walkthrough](#-interactive-demo-scenario-timeline) • [Quick Start](#-quick-start-guide) • [Algorithm Formulations](#-core-algorithmic-formulations)

---

</div>

## 📌 Executive Summary

During severe urban floods (e.g., Pune's Mutha River inundation crisis), conventional navigation systems fail citizens because they calculate the **shortest physical distance**, unknowingly routing evacuees directly into submerged riverbanks, breached bridges, and gridlocked bottlenecks.

**PRAVAHA** (Sanskrit for *Continuous Stream / Flow*) is a command-and-control emergency operations platform engineered for disaster response authorities (NDRF, Municipal Corporations, Incident Commanders). It synthesizes real-time river telemetry, IoT rainfall gauges, elevation contours, road network graph weights, and shelter capacity limits to compute **safety-optimized, multi-path evacuation corridors with 100% transparent decision explainability.**

---

## ⚡ The Problem vs. The PRAVAHA Solution

| Traditional Navigation & Disaster Dashboards | 🌊 PRAVAHA Disaster Intelligence Engine |
| :--- | :--- |
| **Shortest Physical Path**: Funnels all traffic down the same shortest road, triggering severe bottlenecks or directing cars into deep floodwaters. | **Safety-Aware Multi-Path Dijkstra**: Balances raw distance against live flood depth, road breach status, and predictive congestion penalties. |
| **Single-Point Bottlenecks**: Evacuates entire populations down one single artery until complete gridlock ensues. | **Group-Partitioned Crowd Balancing**: Divides large vulnerable populations into operational groups assigned dynamically across Top-$K$ alternative safe paths. |
| **Black-Box AI / Static Heatmaps**: Visualizes danger zones without explaining *why* an area is red or *how trustworthy* the data is. | **Risk vs. Confidence Separation**: Distinct 0–100% risk vs. confidence scores backed by a full evidence audit trail and conflict detection engine. |
| **Static Shelter Assignment**: Sends all citizens to the nearest shelter, quickly exceeding capacity while distant safe shelters sit empty. | **Constraint-Aware Capacity Balancing**: Tracks real-time shelter bed utilization and safe elevation thresholds, routing excess evacuees to secondary facilities. |
| **Manual Re-planning**: When a bridge collapses, commanders must manually broadcast detours over radio with hours of lag. | **Autonomous Real-Time Dynamic Rerouting**: Instantly invalidates compromised road graph edges and recalculates safe bypass corridors within milliseconds. |

---

## 🚀 Key Features

### 1. 🗺️ High-Resolution Tactical GIS Operations Dashboard
- Interactive dark-mode GIS powered by Leaflet and CartoDB Dark Matter tiles.
- Vector polygons for river inundation corridors, color-coded road network edges, population vulnerability clusters, and relief shelters.
- Animated dynamic directional flow lines displaying live evacuee movement paths.

### 2. 🧮 Explainable Risk & Confidence Engine
- **Risk Score ($R$)**: Quantifies physical danger based on 24h precipitation, Khadakwasla dam discharge rate, water depth, and elevation profile.
- **Confidence Score ($C$)**: Evaluates data reliability based on sensor timestamp freshness, telemetry feed completeness, and cross-source consensus.
- **Conflict Detection Engine**: Detects discrepancies between unverified citizen reports and verified sensor telemetry, preventing premature operational shifts.

### 3. 🚦 5-Minute Predictive Congestion Engine
- Models hourly vehicle throughput (`vph`) vs. road capacity.
- Applies exponential cost penalties when road saturation exceeds 70%, actively steering subsequent evacuation waves to open northern bypass corridors.

### 4. 🔄 Autonomous Dynamic Rerouting
- Instantly detects road breach events (e.g., flash flood or tree collapse on Karve Road).
- Sets breached graph segment edge weights to $\infty$, clears active routes, and recalculates safe alternatives (e.g., JM/FC Road northern spine) without dropping evacuee tracking.

### 5. 🏥 Shelter Capacity & Elevation Optimization
- Monitors live intake vs. max capacity across relief centers (e.g., MIT Paud Campus, Kothrud Relief Center, SP College, COEP Ground).
- Guarantees shelters reside strictly above flood inundation contours and redistributes crowd overflow smoothly.

---

## 🏗️ System Architecture

```
                                  LIVE TELEMETRY FEEDS
                  (Rain Gauges · Dam Outflow · IoT Water Sensors · NDRF Recon)
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                PRAVAHA BACKEND CORE ENGINE                              │
│                                                                                         │
│  ┌───────────────────────┐   ┌──────────────────────────┐   ┌────────────────────────┐  │
│  │   Hazard Risk Engine  │   │ Data Confidence Engine   │   │ Predictive Congestion  │  │
│  │  (Hydrology + Depth)  │   │   (Conflict Detection)   │   │  (5-Min Traffic Load)  │  │
│  └───────────┬───────────┘   └────────────┬─────────────┘   └───────────┬────────────┘  │
│              │                            │                             │               │
│              └────────────────────────────┼─────────────────────────────┘               │
│                                           ▼                                             │
│                       ┌──────────────────────────────────────┐                          │
│                       │   Safety-Aware Graph Routing Engine  │                          │
│                       │ (NetworkX Multi-Path Top-K Dijkstra) │                          │
│                       └──────────────────┬───────────────────┘                          │
│                                          │                                              │
│                       ┌──────────────────▼───────────────────┐                          │
│                       │  Crowd Partition & Shelter Allocator │                          │
│                       │  (Group Splitting & Capacity Limits) │                          │
│                       └──────────────────┬───────────────────┘                          │
└──────────────────────────────────────────┼──────────────────────────────────────────────┘
                                           │  REST APIs / WebSocket Events
                                           ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                        PRAVAHA COMMAND-AND-CONTROL FRONTEND                             │
│                  (Next.js 15 · Leaflet Tactical GIS · Tailwind CSS)                     │
│                                                                                         │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │ Top Telemetry Bar       │  │ Interactive Map View    │  │ Right Intelligence     │  │
│  │ (Rain, Dam, Outflow)    │  │ (Corridors, Evac Flow)  │  │ Panel (Evidence Audit)  │  │
│  └─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────────────────────┐  │
│  │ Interactive Milestone Timeline (T+00 Baseline ──► T+70 Equilibrium Demo Player)   │  │
│  └───────────────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔬 Core Algorithmic Formulations

### 1. Safety-Aware Edge Traversal Cost
For each road segment $e = (u, v)$ in the road graph $G = (V, E)$:

$$\text{Cost}(e) = \text{Length}(e) \times \Big( 1.0 + w_r \cdot \text{Risk}(e) + w_c \cdot \text{Congestion}(e) \Big) + \text{Penalty}_{\text{Breach}}$$

$$\text{Where } \text{Penalty}_{\text{Breach}} = \begin{cases} \infty & \text{if } \text{is\_blocked} = \text{True} \\ 0 & \text{otherwise} \end{cases}$$

### 2. Multi-Factor Hazard Risk Score
$$\text{Risk}_{\text{zone}} = w_1 \cdot \left(\frac{\text{Rainfall}_{24\text{h}}}{300}\right) + w_2 \cdot \left(\frac{\text{Dam Outflow}}{60000}\right) + w_3 \cdot \left(\frac{\text{Water Depth}}{3.0}\right) + w_4 \cdot (1 - \text{Norm Elevation})$$

### 3. Evidentiary Confidence & Conflict Penalty
$$\text{Confidence} = \Big( \alpha \cdot \text{Freshness} + \beta \cdot \text{Sensor Density} + \gamma \cdot \text{Source Agreement} \Big) \times (1 - \text{Conflict Penalty})$$

---

## 🎬 Interactive Demo Scenario Timeline

PRAVAHA includes a deterministic, step-by-step Pune Monsoon Flood Simulation:

```
[T+00 Baseline] ──► [T+10 Rain Surge] ──► [T+20 Evac Orders] ──► [T+30 Crowd Surge]
                                                                        │
[T+70 Equilibrium] ◄── [T+60 Evidence Conflict] ◄── [T+50 Field Verified] ◄── [T+40 Road Breach]
```

- **`T+00:00` Baseline State**: Pune operations baseline initialized; 184.5 mm rain, 45,200 cfs Khadakwasla outflow. 26 initial safety routes calculated across 4 relief shelters.
- **`T+10:00` Rainfall Surge**: Upstream precipitation spikes by +25.0 mm; reservoir reaches 99.2%. Risk Engine elevates riverbank danger to 86.4% Critical.
- **`T+20:00` Evacuation Dispatched**: Command issues evacuation order; 9,750 residents partitioned into 21 operational groups with animated flow paths.
- **`T+30:00` Crowd Surge & Congestion**: Headcount jumps by 1.5x (14,625 people); Karve Road traffic load reaches 70.7% with caution warnings.
- **`T+40:00` Critical Road Breach**: Karve Road is breached by flash flooding (⛔); segment cost goes to $\infty$, triggering immediate dynamic reroute alerts.
- **`T+50:00` Dynamic Reroute & Reallocation**: Evacuees are smoothly redirected to northern JM/FC and Tilak Road corridors; shelter capacities re-balanced.
- **`T+60:00` Conflicting Citizen Report**: Unverified social post claims road is dry; system drops Confidence to 76.2% and flags `EVIDENCE CONFLICT DETECTED` without compromising safety.
- **`T+70:00` Operational Equilibrium**: All 4 population sectors fully safe and accounted for; full system explainability achieved.

---

## 💻 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons, Leaflet GIS, CartoDB Dark Matter Tiles.
- **Backend**: FastAPI (Python 3.11), Uvicorn, Pydantic v2, NetworkX (Graph Modeling & Pathfinding).
- **Architecture**: Modular Service-Engine pattern (Risk, Confidence, Routing, Crowd, Congestion, Explanations).

---

## ⚡ Quick Start Guide

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **Python**: `3.10` or higher
- **npm** or **pnpm** / **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/Mahajanram15/PRAVAHA.git
cd PRAVAHA
```

### 2. Backend Setup
```bash
# Create and activate virtual environment
python -m venv .venv

# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
# source .venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt

# Start FastAPI server
uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --reload
```
*API Swagger documentation will be available at:* `http://127.0.0.1:8000/docs`

### 3. Frontend Setup
```bash
# In a new terminal window:
cd frontend

# Install dependencies
npm install

# Start Next.js development server
npm run dev
```
*Open your browser and navigate to:* `http://localhost:3000`

---

## 🧪 Verification & Test Suite   

Run the full end-to-end verification suites to test the algorithmic integrity:

```bash
# Test 10-point progressive simulation timeline
python test_progressive_flow.py

# Test comprehensive Phase 3 engine APIs
python test_phase3_full.py

# Test Phase 4 complete demo scenario verification
python test_phase4_demo.py
```

---

## 👥 Contributors & Hackathon Team

Developed with ❤️ for the Hackathon by Team PRAVAHA.

- **Repository**: [https://github.com/Mahajanram15/PRAVAHA](https://github.com/Mahajanram15/PRAVAHA)
- **License**: MIT License

---

<div align="center">
  <sub>Built for precision, resilience, and saving lives during urban disaster emergencies.</sub>
</div>
