import { SimEventType } from "@/types/simulation";

export interface DemoStep {
  id: number;
  label: string;
  shortLabel: string;
  timeCode: string;
  actionTitle: string;
  description: string;
  eventType: SimEventType;
  payload?: {
    severity?: string;
    description?: string;
    rainfall_delta_mm?: number;
    road_id?: string;
    closure_reason?: string;
    crowd_multiplier?: number;
  };
  keyChanges: string[];
  explanation: {
    risk: string;
    confidence: string;
    routing: string;
    shelters: string;
  };
}

export const DEMO_SCENARIO_STEPS: DemoStep[] = [
  {
    id: 0,
    label: "Baseline Reset",
    shortLabel: "T+00 Baseline",
    timeCode: "T+00:00",
    actionTitle: "INITIAL OPERATIONAL BASELINE",
    description: "Initialize Pune flood operational assessment & safety-aware road network",
    eventType: "RESET",
    keyChanges: [
      "Mutha Riverbank risk assessed at 86.4% (CRITICAL)",
      "Data confidence high at 95.2% across 5 telemetry feeds",
      "26 safety-aware routes computed across 4 relief shelters",
      "All major corridors open; evacuation in monitoring mode"
    ],
    explanation: {
      risk: "Catchment rainfall (184.5mm) and 45,200 cfs Khadakwasla discharge elevate riverbank risk to 86.4%.",
      confidence: "High 95.2% due to sensor freshness (<5m) and zero conflicting reports.",
      routing: "Multi-route Dijkstra calculates viable corridors avoiding submerged Sinhagad Road.",
      shelters: "4 relief shelters available with 8,500 total capacity (54.8% baseline utilization)."
    }
  },
  {
    id: 1,
    label: "Rainfall Surge",
    shortLabel: "T+10 Surge",
    timeCode: "T+10:00",
    actionTitle: "RAINFALL SURGE (+25mm)",
    description: "Upstream Khadakwasla catchment precipitation spikes (+25mm), increasing river discharge and dam fill",
    eventType: "RAINFALL_INCREASE",
    payload: { rainfall_delta_mm: 25.0 },
    keyChanges: [
      "Rainfall reaches 209.5mm (+25mm surge)",
      "Khadakwasla spillway discharge reaches 49,700 cfs",
      "Dam reservoir pressure rises to 99.2%",
      "Mutha Corridor risk score updates dynamically"
    ],
    explanation: {
      risk: "Surge in rainfall weight (+25mm) and dam outflow drives risk score upwards across low-lying floodplains.",
      confidence: "Maintains 95.2% high confidence as telemetry sensors corroborate the surge.",
      routing: "Corridor safety costs recalculate to anticipate expanding flood margins.",
      shelters: "Shelter intake status prepared for incoming evacuee volume."
    }
  },
  {
    id: 2,
    label: "Evacuation Dispatched",
    shortLabel: "T+20 Evac Active",
    timeCode: "T+20:00",
    actionTitle: "DISPATCH EVACUATION TEAMS",
    description: "Active evacuation order issued; population groups assigned across multi-route corridors",
    eventType: "START_EVACUATION",
    keyChanges: [
      "Evacuation status changed to ACTIVE",
      "9,750 affected residents partitioned into 21 discrete groups",
      "Groups distributed across primary & alternative corridors to prevent bottlenecks",
      "Shelter occupancy tracking activates live"
    ],
    explanation: {
      risk: "High vulnerability zones (Ekta Nagar, Pulachi Wadi, Sangamwadi) prioritized for immediate movement.",
      confidence: "Field telemetry remains stable at 95.2%.",
      routing: "Crowd distribution engine allocates groups across multiple paths to avoid single-point congestion.",
      shelters: "Kothrud Relief Center and MIT Paud Campus receive prioritized inbound groups."
    }
  },
  {
    id: 3,
    label: "Crowd Surge & Congestion",
    shortLabel: "T+30 Crowd Surge",
    timeCode: "T+30:00",
    actionTitle: "CROWD SURGE (x1.5 MULTIPLIER)",
    description: "Evacuation volume increases 50%; corridor traffic rises and 5-minute congestion projections escalate",
    eventType: "INCREASE_CROWD",
    keyChanges: [
      "Evacuee headcount surges to 14,625 (x1.5 multiplier)",
      "Karve-Paud elevated corridor load reaches 1,980 vph (70.7% load ratio)",
      "5-minute predictive congestion engine projects 2,277 vph (81.3%)",
      "Corridor status transitions from NORMAL to CAUTION"
    ],
    explanation: {
      risk: "Crowd density in transit zones increases overall operational urgency.",
      confidence: "Confidence steady at 95.2%.",
      routing: "Congestion penalty added to Karve Road cost function, making alternate corridors more attractive.",
      shelters: "Shelter occupancies rise; SP College and Saras Baug approach LIMITED / NEAR_CAPACITY."
    }
  },
  {
    id: 4,
    label: "Critical Road Breach",
    shortLabel: "T+40 Road Breach",
    timeCode: "T+40:00",
    actionTitle: "BLOCK CORRIDOR (Karve-Paud Elevated Ramp)",
    description: "Flash inundation and tree fall completely breaches Karve-Paud elevated corridor",
    eventType: "BLOCK_ROAD",
    payload: {
      road_id: "rd-karve-paud",
      closure_reason: "Sudden flash inundation and carriage-way breach at Paud elevated junction"
    },
    keyChanges: [
      "Karve-Paud corridor marked BLOCKED (⛔) with zero permitted traversal",
      "Dynamic reroute alert generated instantly",
      "0 active routes utilize the compromised segment",
      "Alternative corridors automatically recomputed"
    ],
    explanation: {
      risk: "Critical transit bottleneck blocked by floodwaters.",
      confidence: "Maintains 95.2% telemetry verification.",
      routing: "Safety-aware Dijkstra instantly eliminates Karve-Paud edges; routes divert via JM-FC northern spine and Vitthalwadi bypass.",
      shelters: "Evacuee flows redirected to reachable relief centers."
    }
  },
  {
    id: 5,
    label: "Dynamic Reroute & Reallocation",
    shortLabel: "T+50 Field Check",
    timeCode: "T+50:00",
    actionTitle: "NDRF FIELD ACCESS VERIFICATION",
    description: "NDRF field reconnaissance confirms JM/FC Road northern spine clear for redirected evacuees",
    eventType: "GROUND_REPORT_VERIFIED",
    payload: {
      description: "NDRF Field Unit 2 confirms JM/FC Road northern spine clear for redirected evacuees"
    },
    keyChanges: [
      "NDRF verified report added to operational timeline",
      "Ekta Nagar & Pulachi Wadi groups smoothly reallocated to open alternative routes",
      "Shelter capacity balancing prevents overload at any single facility",
      "No reliable route status averted through redundant multi-path topology"
    ],
    explanation: {
      risk: "Field confirmation of safe northern corridor reduces transit uncertainty.",
      confidence: "Ground verification provides positive evidentiary corroboration.",
      routing: "All groups successfully assigned to active safe corridors (JM-FC spine & Tilak Road).",
      shelters: "Relief centers report balanced intake within rated capacities."
    }
  },
  {
    id: 6,
    label: "Conflicting Citizen Report",
    shortLabel: "T+60 Conflict Injected",
    timeCode: "T+60:00",
    actionTitle: "INJECT CONFLICTING EVIDENCE",
    description: "Unverified citizen social media report claims dry road at riverside margin, contradicting sensor telemetry",
    eventType: "CONFLICTING_REPORT",
    payload: {
      severity: "LOW",
      description: "Citizen social post claims dry road & receding water at Vitthalwadi margin"
    },
    keyChanges: [
      "Citizen contradiction injected into evidence stream",
      "Data confidence score drops from 95.2% to 76.2% (MODERATE)",
      "EVIDENCE CONFLICT DETECTED banner activates in Intelligence Panel",
      "Conflict breakdown explains 1 conflicting report vs 4 supporting sensors"
    ],
    explanation: {
      risk: "Risk remains high (86.4%) based on primary sensor telemetry.",
      confidence: "Confidence penalized by -19.0% due to contradictory citizen report pending physical verification.",
      routing: "Routing decisions rely on verified sensor bounds to guarantee evacuee safety.",
      shelters: "Shelter logistics continue operating on cautious planning thresholds."
    }
  },
  {
    id: 7,
    label: "Operational Equilibrium",
    shortLabel: "T+70 Equilibrium",
    timeCode: "T+70:00",
    actionTitle: "FINAL OPERATIONAL EQUILIBRIUM",
    description: "Central Disaster Command achieves complete explainability: Risk weights, Agreement metrics, Multi-Route safety costs, and Shelter balance",
    eventType: "GROUND_REPORT_VERIFIED",
    payload: {
      description: "Central Command confirms complete evacuation equilibrium and verified operational posture"
    },
    keyChanges: [
      "All 4 Pune population sectors successfully routed with transparent safety costs",
      "Explainable risk factors with exact weight contributions displayed",
      "Shelter occupancies distributed safely within limits",
      "Complete 2-3 minute operational demo workflow accomplished"
    ],
    explanation: {
      risk: "Fully explainable weighted sum: Catchment (28%), Discharge (22%), Dam (18%), Elevation (14%), Water Level (10%), Reports (8%).",
      confidence: "Transparent breakdown: Freshness, Agreement, Quantity, Completeness.",
      routing: "Multi-path safety cost optimization: avoids hazards, respects capacities, dynamically reroutes around closures.",
      shelters: "Balanced load across all 4 relief complexes."
    }
  }
];
