import { SimulationState, SimEventType } from "@/types/simulation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// ─────────────────────────────────────────────────────────────────
// Deterministic fallback state (used when backend is unreachable)
// Contains the Phase-2 initial values so the UI is never blank.
// ─────────────────────────────────────────────────────────────────
export const fallbackPuneState: SimulationState = {
  scenario: {
    id: "pune-monsoon-flood-2026",
    name: "Pune Monsoon Mutha River Inundation",
    district: "Pune Urban",
    description: "Operational GIS command system for Pune Urban flood disaster monitoring and dynamic evacuation management.",
    is_simulated: true,
    banner: "DEMO MODE · SIMULATED DATA"
  },
  system_state: {
    status: "ACTIVE_MONITORING",
    step: 0,
    sim_time: "T+00:00",
    sim_time_label: "Baseline GIS & Routine Monitoring",
    last_reset: new Date().toISOString(),
    weather: { rainfall_24h_mm: 184.5, river_discharge_cusecs: 45200, dam_level_pct: 95.5, trend: "STABLE" },
    conflicting_report_count: 0,
    evacuation_active: false,
    crowd_multiplier: 1.0,
    latest_reroute_reason: null,
  },
  hazard_zones: [],
  roads: [
    { id:"rd-sinhagad-low", name:"Sinhagad Road (Rajaram to Dandekar Brg)", status:"NORMAL", capacity_vph:2400, current_load_vph:850,  hazard_exposure:0.10, is_blocked:false, closure_reason:null, coordinates:[[73.8245,18.4810],[73.8320,18.4920],[73.8380,18.5020],[73.8435,18.5100]], length_km:3.8 },
    { id:"rd-karve-paud",   name:"Karve Road - Paud Elevated Corridor",     status:"NORMAL", capacity_vph:2800, current_load_vph:1120, hazard_exposure:0.05, is_blocked:false, closure_reason:null, coordinates:[[73.8420,18.5150],[73.8310,18.5110],[73.8200,18.5080],[73.8090,18.5030]], length_km:4.1 },
    { id:"rd-jm-fc-spine",  name:"JM Road / FC Road Shivajinagar Spine",    status:"NORMAL", capacity_vph:2400, current_load_vph:1200, hazard_exposure:0.10, is_blocked:false, closure_reason:null, coordinates:[[73.8435,18.5170],[73.8470,18.5250],[73.8510,18.5320]], length_km:2.1 },
    { id:"rd-pune-satara",  name:"Pune-Satara Highway Connector",            status:"NORMAL", capacity_vph:3200, current_load_vph:1420, hazard_exposure:0.05, is_blocked:false, closure_reason:null, coordinates:[[73.8570,18.5010],[73.8560,18.4880],[73.8540,18.4720]], length_km:3.4 },
    { id:"rd-tilak-shastri",name:"Tilak Road - Shastri Corridor",           status:"NORMAL", capacity_vph:1800, current_load_vph:950,  hazard_exposure:0.15, is_blocked:false, closure_reason:null, coordinates:[[73.8440,18.5090],[73.8490,18.5060],[73.8550,18.5020]], length_km:1.9 },
  ],
  shelters: [
    { id:"sh-kothrud-natya", name:"Kothrud Disaster Relief Center",         latitude:18.5025, longitude:73.8075, total_capacity:2500, current_occupancy:120, status:"AVAILABLE", elevation_m:582.0, amenities:["Medical Bay","Emergency Generator"], contact_number:"+91-20-2544-0101" },
    { id:"sh-mit-sports",    name:"MIT Paud Road Evacuation Complex",        latitude:18.5178, longitude:73.8152, total_capacity:1800, current_occupancy:80,  status:"AVAILABLE", elevation_m:579.5, amenities:["Indoor Arena","First Aid"],            contact_number:"+91-20-2544-0202" },
    { id:"sh-sarasbaug",     name:"Saras Baug Emergency Coordination Ground",latitude:18.5012, longitude:73.8558, total_capacity:3000, current_occupancy:300, status:"AVAILABLE", elevation_m:566.0, amenities:["Field Kitchen","Ambulance Station"],  contact_number:"+91-20-2444-0303" },
    { id:"sh-sp-college",    name:"SP College Pavilion & Relief Shelter",    latitude:18.5085, longitude:73.8498, total_capacity:1200, current_occupancy:150, status:"AVAILABLE", elevation_m:564.2, amenities:["Basic First Aid","Dry Rations"],       contact_number:"+91-20-2444-0404" },
  ],
  population_zones: [
    { id:"pop-ekta-nagar",    name:"Ekta Nagari / Vitthalwadi Riverbank",        latitude:18.4840, longitude:73.8280, estimated_population:4200, vulnerability_level:"LOW", evacuation_urgency:"STANDBY" },
    { id:"pop-pulachi-wadi",  name:"Pulachi Wadi / Z-Bridge Lowlands",           latitude:18.5155, longitude:73.8430, estimated_population:1850, vulnerability_level:"LOW", evacuation_urgency:"STANDBY" },
    { id:"pop-sangamwadi",    name:"Sangamwadi Confluence Settlement",            latitude:18.5310, longitude:73.8655, estimated_population:2300, vulnerability_level:"LOW", evacuation_urgency:"STANDBY" },
    { id:"pop-sadashiv-low",  name:"Sadashiv Peth / Shastri Rd Fringe",          latitude:18.5070, longitude:73.8460, estimated_population:1400, vulnerability_level:"LOW", evacuation_urgency:"STANDBY" },
  ],
  ground_reports: [],
  routes: [],
  group_assignments: [],
  cluster_summaries: [],
  no_reliable_route_clusters: []
};

// ─────────────────────────────────────────────────────────────────
// API functions
// ─────────────────────────────────────────────────────────────────

async function apiPost<T>(path: string, body?: unknown): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

export async function fetchSimulationState(): Promise<SimulationState> {
  const data = await apiGet<SimulationState>("/simulation/state");
  return data ?? fallbackPuneState;
}

export async function resetSimulationState(): Promise<SimulationState> {
  const data = await apiPost<{ state: SimulationState }>("/simulation/reset");
  if (data?.state) return data.state;
  return { ...fallbackPuneState, system_state: { ...fallbackPuneState.system_state, last_reset: new Date().toISOString(), step: 0, conflicting_report_count: 0 } };
}

export async function applySimulationEvent(
  eventType: SimEventType,
  options?: {
    severity?: string;
    description?: string;
    rainfall_delta_mm?: number;
    road_id?: string;
    closure_reason?: string;
    crowd_multiplier?: number;
  }
): Promise<SimulationState | null> {
  const data = await apiPost<{ state: SimulationState }>("/simulation/event", {
    event_type: eventType,
    ...options,
  });
  return data?.state ?? null;
}
