// ──────────────────────────────────────────────────────────────────
// Core simulation types — Phase 2 (risk + confidence intelligence)
// ──────────────────────────────────────────────────────────────────

export interface RiskFactor {
  name: string;
  value: string;
  raw_score: number;
  contribution: number;            // factor weight (0–1)
  weighted_contribution: number;   // points contributed to risk score (0–100)
  description: string;
  status: "CRITICAL" | "WARNING" | "CAUTION" | "SAFE";
}

export interface EvidenceItem {
  source: string;
  type: "SENSOR" | "OFFICIAL" | "CITIZEN" | "INFERRED";
  value: string;
  timestamp: string;
  relevance: number;               // 0–1
  role: "SUPPORTING" | "CONFLICTING" | "NEUTRAL";
  freshness: string;
  location?: string;
}

export interface ConfidenceComponents {
  freshness: number;
  agreement: number;
  quantity: number;
  completeness: number;
}

export interface HazardZone {
  id: string;
  name: string;
  // Phase 2 — live computed fields
  severity: "CRITICAL" | "WARNING" | "CAUTION" | "SAFE";
  risk_level: "CRITICAL" | "WARNING" | "CAUTION" | "SAFE";
  risk_score: number;
  confidence_score: number;
  confidence_level: "HIGH" | "MODERATE" | "LOW" | "VERY_LOW";
  has_conflict: boolean;
  conflict_explanation: string | null;
  contributing_factors: RiskFactor[];
  evidence_items: EvidenceItem[];
  confidence_reasons: string[];
  confidence_components: ConfidenceComponents;
  risk_inputs: {
    rainfall_24h_mm: number;
    river_discharge_cusecs: number;
    dam_level_pct: number;
    elevation_m: number;
    water_level_m: number;
    ground_report_count: number;
  };
  // Static properties
  water_level_m: number;
  flow_velocity_mps: number;
  polygon_coordinates: [number, number][];
  status: string;
  updated_at: string;
}

export interface RoadSegment {
  id: string;
  name: string;
  status: "NORMAL" | "CAUTION" | "CONGESTED" | "BLOCKED";
  capacity_vph: number;
  current_load_vph: number;
  hazard_exposure: number;
  is_blocked: boolean;
  closure_reason?: string | null;
  coordinates: [number, number][];
  length_km: number;
}

export interface Shelter {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  total_capacity: number;
  current_occupancy: number;
  status: "AVAILABLE" | "LIMITED" | "NEAR_CAPACITY" | "FULL";
  elevation_m: number;
  amenities: string[];
  contact_number: string;
}

export interface PopulationZone {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  estimated_population: number;
  vulnerability_level: "HIGH" | "MEDIUM" | "LOW";
  evacuation_urgency: "IMMEDIATE" | "PREPARE" | "STANDBY";
  assigned_shelter_id?: string;
  assigned_route_id?: string;
}

export interface CitizenReport {
  id: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  report_type: "WATERLOGGING" | "ROAD_BLOCKED" | "STRANDED_PEOPLE" | "INFRASTRUCTURE_DAMAGE";
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  description: string;
  verified: boolean;
  confidence_impact: number;
}

export interface WeatherSummary {
  rainfall_24h_mm: number;
  river_discharge_cusecs: number;
  dam_level_pct: number;
  trend: string;
}

export interface EvacuationRoute {
  route_id: string;
  name: string;
  origin_cluster_id: string;
  destination_shelter_id: string;
  destination_shelter_name: string;
  total_distance_m: number;
  eta_minutes: number;
  total_cost: number;
  risk_level: "SAFE" | "LOW" | "MODERATE" | "HIGH";
  hazard_score: number;
  congestion_status: "NORMAL" | "CAUTION" | "CONGESTED";
  max_congestion_ratio: number;
  is_recommended: boolean;
  is_viable: boolean;
  route_type?: "PRIMARY_RECOMMENDED" | "ALTERNATIVE";
  path_nodes: string[];
  road_ids: string[];
  coordinates: [number, number][];
  reasons: string[];
}

export interface GroupAssignment {
  group_id: string;
  cluster_id: string;
  cluster_name: string;
  headcount: number;
  assigned_route_id: string;
  assigned_route_name: string;
  destination_shelter_id: string;
  destination_shelter_name: string;
  eta_minutes: number;
  risk_level: string;
  status: string;
  dispatch_priority: string;
}

export interface ClusterSummary {
  cluster_id: string;
  cluster_name: string;
  total_evacuees: number;
  status: "ROUTED_OPTIMAL" | "NO_RELIABLE_ROUTE";
  error_message: string | null;
  assigned_groups_count: number;
  allocated_routes: string[];
}

export interface SystemState {
  status: string;
  step: number;
  sim_time: string;
  sim_time_label?: string;
  last_reset: string;
  weather: WeatherSummary;
  conflicting_report_count: number;
  evacuation_active?: boolean;
  crowd_multiplier?: number;
  latest_reroute_reason?: string | null;
}

export interface SimulationState {
  scenario: {
    id: string;
    name: string;
    district: string;
    description: string;
    is_simulated: boolean;
    banner: string;
  };
  system_state: SystemState;
  hazard_zones: HazardZone[];
  roads: RoadSegment[];
  shelters: Shelter[];
  population_zones: PopulationZone[];
  ground_reports: CitizenReport[];
  routes?: EvacuationRoute[];
  group_assignments?: GroupAssignment[];
  cluster_summaries?: ClusterSummary[];
  no_reliable_route_clusters?: string[];
}

// Event types supported by Phase 2 & Phase 3
export type SimEventType =
  | "CONFLICTING_REPORT"
  | "RAINFALL_INCREASE"
  | "GROUND_REPORT_VERIFIED"
  | "START_EVACUATION"
  | "INCREASE_CROWD"
  | "BLOCK_ROAD"
  | "UNBLOCK_ROAD"
  | "RESET";
