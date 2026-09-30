"use client";

import React, { useState } from "react";
import {
  AlertOctagon,
  ShieldCheck,
  AlertTriangle,
  ChevronRight,
  Info,
  CheckCircle,
  XCircle,
  Clock,
  Activity,
  Users,
  Building2,
  FileText,
  HelpCircle,
  Eye,
  CloudRain,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Navigation,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  SimulationState,
  HazardZone,
  RoadSegment,
  Shelter,
  PopulationZone,
  RiskFactor,
  EvidenceItem,
  EvacuationRoute,
  GroupAssignment,
} from "@/types/simulation";
import { DEMO_SCENARIO_STEPS, DemoStep } from "@/lib/demoScenario";

// ─────────────────────────────────────────────────────────────────
// Helper components
// ─────────────────────────────────────────────────────────────────

function RiskLevelBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    CRITICAL: "bg-rose-950 text-rose-300 border-rose-800",
    WARNING:  "bg-amber-950 text-amber-300 border-amber-800",
    CAUTION:  "bg-yellow-950 text-yellow-300 border-yellow-800",
    SAFE:     "bg-emerald-950 text-emerald-300 border-emerald-800",
    LOW:      "bg-emerald-950 text-emerald-300 border-emerald-800",
    MODERATE: "bg-amber-950 text-amber-300 border-amber-800",
    HIGH:     "bg-rose-950 text-rose-300 border-rose-800",
  };
  return (
    <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border ${styles[level] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}>
      {level}
    </span>
  );
}

function ConfidenceLevelBadge({ level, hasConflict }: { level: string; hasConflict: boolean }) {
  const styles: Record<string, string> = {
    HIGH:     "bg-sky-950 text-sky-300 border-sky-800",
    MODERATE: "bg-blue-950 text-blue-300 border-blue-800",
    LOW:      "bg-amber-950 text-amber-300 border-amber-800",
    VERY_LOW: "bg-rose-950 text-rose-300 border-rose-800",
  };
  return (
    <span className={`text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border flex items-center gap-1 ${styles[level] ?? "bg-slate-800 text-slate-300 border-slate-700"}`}>
      {hasConflict && <AlertTriangle className="w-2.5 h-2.5" />}
      {level}
    </span>
  );
}

function MiniBar({ value, max = 100, color }: { value: number; max?: number; color: string }) {
  return (
    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-0.5">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min(Math.max((value / max) * 100, 0), 100)}%` }} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Tab 1: Risk & Evidence Panel
// ─────────────────────────────────────────────────────────────────

function RiskConfidenceTab({ hz, weatherSummary }: { hz: HazardZone; weatherSummary?: any }) {
  const [showEvidence, setShowEvidence] = useState(false);

  const riskColor  = hz.risk_level === "CRITICAL" ? "bg-rose-500" : hz.risk_level === "WARNING" ? "bg-amber-500" : "bg-yellow-500";
  const confColor  = hz.confidence_level === "HIGH" ? "bg-sky-500" : hz.confidence_level === "MODERATE" ? "bg-blue-500" : "bg-amber-400";

  return (
    <div className="space-y-3">
      {/* ── Dual Metric: Risk vs Confidence ─────────────────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded p-3 space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="font-semibold tracking-wider">HAZARD ASSESSMENT · {hz.name.toUpperCase().slice(0, 30)}…</span>
          <span className="text-slate-500">{hz.status}</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Risk */}
          <div className="bg-slate-950 border border-rose-900/40 rounded p-2.5">
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 mb-0.5">
              <AlertOctagon className="w-3 h-3 text-rose-400" />
              ESTIMATED RISK
            </div>
            <div className="text-3xl font-bold font-mono text-rose-300">{hz.risk_score.toFixed(1)}%</div>
            <MiniBar value={hz.risk_score} color={riskColor} />
            <div className="mt-1">
              <RiskLevelBadge level={hz.risk_level} />
            </div>
          </div>

          {/* Confidence */}
          <div className={`bg-slate-950 rounded p-2.5 border ${hz.has_conflict ? "border-amber-800/60 ring-1 ring-amber-500/30" : "border-sky-900/40"}`}>
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 mb-0.5">
              <ShieldCheck className="w-3 h-3 text-sky-400" />
              DATA CONFIDENCE
            </div>
            <div className={`text-3xl font-bold font-mono ${hz.has_conflict ? "text-amber-300" : "text-sky-300"}`}>{hz.confidence_score.toFixed(1)}%</div>
            <MiniBar value={hz.confidence_score} color={confColor} />
            <div className="mt-1">
              <ConfidenceLevelBadge level={hz.confidence_level} hasConflict={hz.has_conflict} />
            </div>
          </div>
        </div>

        {/* Conflict banner */}
        {hz.has_conflict && (
          <div className="bg-amber-950/50 border border-amber-600/70 rounded p-2.5 text-[11px] text-amber-200 flex items-start gap-2 shadow-sm animate-pulse">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold font-mono text-[10.5px] tracking-wider text-amber-300">
                EVIDENCE CONFLICT DETECTED · CONFIDENCE DEGRADED
              </span>
              <p className="mt-0.5 text-amber-200/90 leading-relaxed font-sans text-xs">{hz.conflict_explanation}</p>
              <div className="mt-1 text-[9px] font-mono text-amber-400/80">
                Data confidence reduced from ~95% to {hz.confidence_score.toFixed(1)}% pending NDRF ground verification.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Contributing Risk Factors (WHY RISK CHANGED) ──────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded p-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
          <span className="font-semibold tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            WHY IS RISK {hz.risk_level}? (EXPLAINABLE FACTORS)
          </span>
          <span className="text-slate-500">CONTRIBUTION</span>
        </div>

        <div className="space-y-1.5">
          {hz.contributing_factors.map((f: RiskFactor, i: number) => (
            <div key={i} className="bg-slate-950 border border-slate-800/70 rounded p-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-200">{f.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-slate-300 text-[11px] font-semibold">{f.value}</span>
                  <RiskLevelBadge level={f.status} />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">{f.description}</p>
              <div className="flex items-center justify-between mt-1.5">
                <div className="flex-1 mr-2">
                  <MiniBar value={f.raw_score * 100} color={f.status === "CRITICAL" ? "bg-rose-500/80" : "bg-amber-500/80"} />
                </div>
                <span className="text-[10px] font-mono text-slate-400 shrink-0">
                  Weight: {Math.round(f.contribution * 100)}% → <strong className="text-slate-200">{f.weighted_contribution.toFixed(1)} pts</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Confidence Breakdown (WHY CONFIDENCE CHANGED) ─────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded p-3 space-y-2">
        <div className="text-[10px] font-mono text-slate-300 font-semibold tracking-wider flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-sky-400" />
          WHY IS CONFIDENCE {hz.confidence_level}? (AGREEMENT METRICS)
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {Object.entries(hz.confidence_components).map(([k, v]) => (
            <div key={k} className="bg-slate-950 border border-slate-800 rounded p-1.5 text-[10px] font-mono">
              <div className="flex justify-between text-slate-400 capitalize">
                <span>{k}</span>
                <span className="text-slate-200 font-bold">{v}%</span>
              </div>
              <MiniBar value={v} color={v < 80 ? "bg-amber-500/80" : "bg-sky-500/80"} />
            </div>
          ))}
        </div>

        {/* Confidence reasons */}
        <div className="space-y-1 pt-1">
          {hz.confidence_reasons.map((r: string, i: number) => (
            <div key={i} className="text-[10px] text-slate-400 flex items-start gap-1.5 font-mono">
              <span className="text-sky-400 shrink-0">›</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Evidence Panel Toggle ───────────────────────────────── */}
      <div className="bg-slate-900 border border-slate-800 rounded overflow-hidden">
        <button
          onClick={() => setShowEvidence(!showEvidence)}
          className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-mono text-slate-300 hover:bg-slate-800/60 transition-colors"
        >
          <span className="flex items-center gap-1.5 font-semibold tracking-wider">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            EVIDENCE AUDIT TRAIL ({hz.evidence_items?.length ?? 0} items)
          </span>
          <ChevronRight className={`w-3.5 h-3.5 text-slate-500 transition-transform ${showEvidence ? "rotate-90" : ""}`} />
        </button>

        {showEvidence && (
          <div className="px-3 pb-3 space-y-1.5 border-t border-slate-800">
            <div className="pt-2 text-[9px] font-mono text-slate-500 pb-1">
              SOURCE · TYPE · ROLE · RELEVANCE
            </div>
            {(hz.evidence_items ?? []).map((item: EvidenceItem, i: number) => (
              <div
                key={i}
                className={`border rounded p-2 text-[10px] space-y-0.5 ${
                  item.role === "SUPPORTING"
                    ? "border-emerald-900/50 bg-emerald-950/20"
                    : item.role === "CONFLICTING"
                    ? "border-rose-900/50 bg-rose-950/20"
                    : "border-slate-800 bg-slate-950"
                }`}
              >
                <div className="flex items-center justify-between font-mono">
                  <div className="flex items-center gap-1.5">
                    {item.role === "SUPPORTING" ? (
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    ) : item.role === "CONFLICTING" ? (
                      <XCircle className="w-3 h-3 text-rose-400" />
                    ) : (
                      <Info className="w-3 h-3 text-slate-400" />
                    )}
                    <span className="text-slate-200 font-semibold">{item.source}</span>
                  </div>
                  <span className={`text-[9px] px-1 rounded font-bold ${
                    item.role === "SUPPORTING" ? "text-emerald-400 bg-emerald-950" : item.role === "CONFLICTING" ? "text-rose-400 bg-rose-950" : "text-slate-400"
                  }`}>{item.role}</span>
                </div>
                <p className="text-slate-300 leading-relaxed pl-4 text-[10px]">{item.value}</p>
                {item.location && (
                  <p className="text-slate-400 pl-4 text-[9px]">📍 {item.location}</p>
                )}
                <div className="flex items-center gap-2 pl-4 text-[9px] text-slate-500 font-mono">
                  <Clock className="w-2.5 h-2.5" />
                  <span>{new Date(item.timestamp).toLocaleTimeString()}</span>
                  <span>·</span>
                  <span>Relevance: {Math.round(item.relevance * 100)}%</span>
                  <span>·</span>
                  <span>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────

interface IntelligencePanelProps {
  state: SimulationState;
  selectedEntity: {
    type: "hazard" | "road" | "shelter" | "population" | "route" | null;
    id: string | null;
  };
  onSelectEntity: (type: any, id: string | null) => void;
  onApplyEvent?: (eventType: string, opts?: Record<string, unknown>) => void;
  isApplyingEvent?: boolean;
  demoStep?: number;
  isDemoPlaying?: boolean;
  onToggleDemo?: () => void;
  onNextStep?: () => void;
  onPrevStep?: () => void;
  onJumpToStep?: (stepId: number) => void;
  onReset?: () => void;
  isResetting?: boolean;
}

// ─────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────

export const IntelligencePanel: React.FC<IntelligencePanelProps> = ({
  state,
  selectedEntity,
  onSelectEntity,
  onApplyEvent,
  isApplyingEvent = false,
  demoStep = 0,
  isDemoPlaying = false,
  onToggleDemo,
  onNextStep,
  onPrevStep,
  onJumpToStep,
  onReset,
  isResetting = false,
}) => {
  type Tab = "intelligence" | "evacuation" | "shelters" | "reports" | "controls";
  const [activeTab, setActiveTab] = useState<Tab>("intelligence");

  const primaryHazard: HazardZone | undefined =
    state.hazard_zones.find((h) => h.risk_level === "CRITICAL") ??
    state.hazard_zones[0];

  const totalShelterCap = state.shelters.reduce((a, s) => a + s.total_capacity, 0);
  const totalShelterOcc = state.shelters.reduce((a, s) => a + s.current_occupancy, 0);
  const shelterUtilPct  = totalShelterCap > 0 ? Math.round((totalShelterOcc / totalShelterCap) * 100) : 0;
  const totalAffectedPop = state.population_zones.reduce((a, p) => a + p.estimated_population, 0);

  const selectedRoad    = selectedEntity.type === "road"       ? state.roads.find((r) => r.id === selectedEntity.id) : undefined;
  const selectedShelter = selectedEntity.type === "shelter"    ? state.shelters.find((s) => s.id === selectedEntity.id) : undefined;
  const selectedHazard  = selectedEntity.type === "hazard"     ? state.hazard_zones.find((h) => h.id === selectedEntity.id) : undefined;
  const selectedPop     = selectedEntity.type === "population" ? state.population_zones.find((p) => p.id === selectedEntity.id) : undefined;
  const selectedRoute   = selectedEntity.type === "route"      ? state.routes?.find((r) => r.route_id === selectedEntity.id) : undefined;

  const isEvacActive = state.system_state.evacuation_active ?? false;
  const crowdMultiplier = state.system_state.crowd_multiplier ?? 1.0;
  const totalRoutesCount = state.routes?.length ?? 0;
  const noRouteCount = state.no_reliable_route_clusters?.length ?? 0;

  const currentDemoStepObj = DEMO_SCENARIO_STEPS[Math.max(0, Math.min(demoStep, DEMO_SCENARIO_STEPS.length - 1))];

  const tabs: { id: Tab; label: string }[] = [
    { id: "intelligence", label: "Risk & AI" },
    { id: "evacuation",   label: `Routes (${totalRoutesCount})` },
    { id: "shelters",     label: `Shelters (${state.shelters.length})` },
    { id: "reports",      label: `Reports (${state.ground_reports.length})` },
    { id: "controls",     label: "Demo Steps" },
  ];

  return (
    <aside className="w-[28rem] bg-slate-950/95 border-l border-slate-800 flex flex-col h-full overflow-hidden text-slate-200 select-none shrink-0 z-20">
      {/* ── Panel Header ───────────────────────────────────────── */}
      <div className="border-b border-slate-800 bg-slate-900/60 px-3 pt-3 pb-2.5 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono tracking-wider text-slate-400 font-semibold uppercase flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            OPERATIONAL INTELLIGENCE CORE
          </span>
          {isEvacActive ? (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border font-semibold bg-emerald-950/80 text-emerald-300 border-emerald-700 animate-pulse">
              EVACUATION ACTIVE
            </span>
          ) : primaryHazard ? (
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold ${
              primaryHazard.risk_level === "CRITICAL"
                ? "bg-rose-950/80 text-rose-300 border-rose-800/60"
                : "bg-amber-950/80 text-amber-300 border-amber-800/60"
            }`}>
              {primaryHazard.risk_level === "CRITICAL" ? "LEVEL 3 RED ALERT" : "LEVEL 2 AMBER ALERT"}
            </span>
          ) : null}
        </div>

        {/* Dynamic Reroute Alert Notification Banner (WHY ROUTE CHANGED) */}
        {state.system_state.latest_reroute_reason && (
          <div className="mb-2 bg-amber-950/40 border border-amber-600/70 rounded p-2 text-[10px] font-mono text-amber-300 flex items-start gap-1.5 shadow-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-amber-200">DYNAMIC REROUTE NOTIFICATION</div>
              <div className="text-[9.5px] text-amber-300/90 leading-tight mt-0.5 font-sans">
                {state.system_state.latest_reroute_reason}
              </div>
            </div>
          </div>
        )}

        {/* Tab Selectors */}
        <div className="grid grid-cols-5 gap-1 bg-slate-950 rounded border border-slate-800 p-0.5 text-[10px] font-mono">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`py-1.5 px-0.5 rounded text-center transition-all truncate text-[10px] font-medium ${
                activeTab === t.id
                  ? "bg-sky-500/20 border border-sky-500/40 text-sky-300 font-bold shadow-sm"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Map selection inspector ─────────────────────────────── */}
      {(selectedRoad || selectedShelter || selectedHazard || selectedPop || selectedRoute) && (
        <div className="mx-3 mt-2.5 bg-sky-950/30 border border-sky-700/40 rounded p-2.5 text-xs shrink-0">
          <div className="flex items-center justify-between text-sky-400 font-mono text-[10px] mb-1.5">
            <span className="font-semibold flex items-center gap-1">
              <Info className="w-3 h-3" /> MAP SELECTION
            </span>
            <button onClick={() => onSelectEntity(null, null)} className="text-slate-400 hover:text-slate-200 underline text-[10px]">
              Clear
            </button>
          </div>
          {selectedRoute && (
            <div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sky-200">{selectedRoute.name}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                  selectedRoute.is_recommended ? "bg-emerald-950 text-emerald-300 border border-emerald-800" : "bg-sky-950 text-sky-300 border border-sky-800"
                }`}>
                  {selectedRoute.is_recommended ? "★ RECOMMENDED" : "ALTERNATIVE"}
                </span>
              </div>
              <div className="mt-1 flex gap-2 items-center font-mono text-[10px]">
                <span className="text-slate-300">ETA: <strong className="text-white">{selectedRoute.eta_minutes.toFixed(1)} min</strong></span>
                <span>·</span>
                <span className="text-slate-300">Dist: {((selectedRoute.total_distance_m || 0) / 1000).toFixed(1)} km</span>
                <span>·</span>
                <span className="text-sky-300">Dest: {selectedRoute.destination_shelter_name}</span>
              </div>
              {selectedRoute.reasons && selectedRoute.reasons.length > 0 && (
                <div className="mt-1.5 text-[9.5px] text-slate-300 bg-slate-900/80 p-1.5 rounded border border-slate-800">
                  ✓ {selectedRoute.reasons[0]}
                </div>
              )}
            </div>
          )}
          {selectedRoad && (
            <div>
              <div className="font-semibold text-slate-100">{selectedRoad.name}</div>
              <div className="mt-1 flex gap-2 items-center font-mono text-[10px]">
                <span className={`px-1.5 py-0.5 rounded font-semibold ${selectedRoad.is_blocked ? "bg-rose-950 text-rose-300 border border-rose-800" : "bg-emerald-950 text-emerald-300 border border-emerald-800"}`}>
                  {selectedRoad.status}
                </span>
                <span className="text-slate-400">{selectedRoad.length_km} km · {selectedRoad.current_load_vph}/{selectedRoad.capacity_vph} vph</span>
              </div>
              {selectedRoad.closure_reason && <p className="mt-1.5 text-rose-300 text-[10px] bg-rose-950/40 border border-rose-900/60 p-1.5 rounded">{selectedRoad.closure_reason}</p>}
            </div>
          )}
          {selectedShelter && (
            <div>
              <div className="font-semibold text-slate-100">{selectedShelter.name}</div>
              <div className="mt-1 font-mono text-[10px] text-slate-300">Occ: {selectedShelter.current_occupancy}/{selectedShelter.total_capacity} · Elev: {selectedShelter.elevation_m}m MSL</div>
            </div>
          )}
          {selectedHazard && (
            <div>
              <div className="font-semibold text-rose-300">{selectedHazard.name}</div>
              <div className="mt-1 font-mono text-[10px] text-slate-300">Risk: {selectedHazard.risk_score.toFixed(1)}% · Confidence: {selectedHazard.confidence_score.toFixed(1)}% · Depth: {selectedHazard.water_level_m}m</div>
            </div>
          )}
          {selectedPop && (
            <div>
              <div className="font-semibold text-slate-100">{selectedPop.name}</div>
              <div className="mt-1 font-mono text-[10px] text-slate-300">Pop: {selectedPop.estimated_population.toLocaleString()} · Urgency: <span className="text-rose-400 font-semibold">{selectedPop.evacuation_urgency}</span></div>
            </div>
          )}
        </div>
      )}

      {/* ── Scrollable Tab Content ──────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">

        {/* TAB 1: Risk & Evidence */}
        {activeTab === "intelligence" && (
          primaryHazard ? (
            <>
              <RiskConfidenceTab hz={primaryHazard} weatherSummary={state.system_state.weather} />
              <div className="bg-slate-900 border border-slate-800 rounded p-3">
                <div className="flex justify-between text-[10px] font-mono text-slate-300 mb-2">
                  <span className="font-semibold flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-slate-400" /> AFFECTED POPULATIONS</span>
                  <span className="text-rose-400 font-bold">{totalAffectedPop.toLocaleString()} total</span>
                </div>
                <div className="space-y-1">
                  {state.population_zones.map((z) => (
                    <div
                      key={z.id}
                      onClick={() => onSelectEntity("population", z.id)}
                      className="flex items-center justify-between p-1.5 rounded bg-slate-950 border border-slate-800/70 hover:border-slate-600 cursor-pointer text-[10px] font-mono"
                    >
                      <div>
                        <div className="text-slate-200 font-medium">{z.name}</div>
                        <div className="text-slate-500">{z.estimated_population.toLocaleString()} · <span className="text-rose-400 font-semibold">{z.evacuation_urgency}</span></div>
                      </div>
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 space-y-3 font-mono">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold border-b border-slate-800 pb-2">
                  <span>BASELINE MONITORING OVERVIEW</span>
                  <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800">SYSTEM NORMAL</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  Active monitoring mode across Pune Urban Mutha River basin. Select any milestone below or click <strong className="text-sky-400">RUN DEMO</strong> to initiate operational surge progression.
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-950 p-2 rounded border border-slate-800">
                    <div className="text-slate-500">24H RAINFALL</div>
                    <div className="text-slate-200 font-bold text-sm">{state.system_state.weather?.rainfall_24h_mm || 184.5} mm</div>
                  </div>
                  <div className="bg-slate-950 p-2 rounded border border-slate-800">
                    <div className="text-slate-500">DISCHARGE</div>
                    <div className="text-slate-200 font-bold text-sm">{(state.system_state.weather?.river_discharge_cusecs || 45200).toLocaleString()} cfs</div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* TAB 2: Dynamic Evacuation Routes & Crowd Allocation (Phase 3) */}
        {activeTab === "evacuation" && (
          <div className="space-y-3">
            {/* Evacuation overview metrics */}
            <div className="bg-slate-900 border border-slate-800 rounded p-2.5 font-mono text-[10px] space-y-2">
              <div className="flex justify-between items-center text-slate-400">
                <span className="font-semibold text-slate-200">EVACUATION INTELLIGENCE OVERVIEW</span>
                <span className={`px-1.5 py-0.5 rounded font-bold ${isEvacActive ? "bg-emerald-950 text-emerald-300 border border-emerald-800" : "bg-slate-800 text-slate-400"}`}>
                  {isEvacActive ? "ACTIVE" : "STANDBY"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
                  <div className="text-slate-500 text-[9px]">TOTAL EVACUEES</div>
                  <div className="text-base font-bold text-slate-100 mt-0.5">
                    {Math.round(totalAffectedPop * crowdMultiplier).toLocaleString()}
                  </div>
                  <div className="text-[9px] text-sky-400">Surge Volume x{crowdMultiplier.toFixed(1)}</div>
                </div>

                <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
                  <div className="text-slate-500 text-[9px]">ACTIVE GROUPS</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">
                    {state.group_assignments?.length ?? 0} Dispatched
                  </div>
                  <div className="text-[9px] text-slate-400">{totalRoutesCount} Safe Corridors</div>
                </div>
              </div>
            </div>

            {/* Explanatory Callout: Why groups redistributed */}
            <div className="bg-slate-900/80 border border-slate-800 rounded p-2 text-[10px] font-mono text-slate-300 space-y-1">
              <div className="text-sky-400 font-semibold flex items-center gap-1">
                <Navigation className="w-3 h-3" /> WHY ARE GROUPS REDISTRIBUTED?
              </div>
              <p className="text-slate-400 font-sans text-[11px] leading-tight">
                Crowd engine dynamically shards population clusters into 500-pax groups across multiple viable paths. When a corridor closes or reaches capacity, groups automatically reroute to available alternate relief shelters.
              </p>
            </div>

            {/* Clusters with NO RELIABLE ROUTE state */}
            {noRouteCount > 0 && (
              <div className="bg-rose-950/60 border border-rose-600 rounded p-2.5 text-[11px] font-mono text-rose-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-rose-300">
                  <AlertOctagon className="w-4 h-4 text-rose-400" />
                  NO RELIABLE ROUTE WARNING
                </div>
                <div className="text-[10px] text-rose-300 font-bold">
                  &quot;No reliable evacuation route found. Manual intervention required.&quot;
                </div>
                <div className="text-[9px] text-rose-400/80">
                  Affected clusters: {state.no_reliable_route_clusters?.join(", ")}
                </div>
              </div>
            )}

            {/* Population Clusters & Assigned Evacuation Routes */}
            <div className="space-y-2.5">
              <div className="text-[9px] text-slate-500 font-mono uppercase tracking-wider">
                Corridor Assignments & Safety Decisions
              </div>

              {state.population_zones.map((pop) => {
                const clusterRoutes = (state.routes ?? []).filter((r) => r.origin_cluster_id === pop.id);
                const clusterGroups = (state.group_assignments ?? []).filter((g) => g.cluster_id === pop.id);
                const isNoRoute = (state.no_reliable_route_clusters ?? []).includes(pop.id);

                return (
                  <div key={pop.id} className="bg-slate-900 border border-slate-800 rounded p-2.5 text-xs space-y-2">
                    <div className="flex justify-between items-center font-mono">
                      <div>
                        <div className="font-semibold text-slate-100 text-[11px]">{pop.name}</div>
                        <div className="text-slate-400 text-[9px]">
                          Pop: {Math.round(pop.estimated_population * crowdMultiplier).toLocaleString()} · Urgency: <span className="text-rose-400 font-semibold">{pop.evacuation_urgency}</span>
                        </div>
                      </div>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border font-semibold ${
                        isNoRoute
                          ? "bg-rose-950 text-rose-300 border-rose-800"
                          : "bg-emerald-950 text-emerald-300 border-emerald-800"
                      }`}>
                        {isNoRoute ? "ISOLATED" : `${clusterRoutes.length} ROUTES`}
                      </span>
                    </div>

                    {/* Route List for this cluster */}
                    {clusterRoutes.length > 0 && (
                      <div className="space-y-1.5">
                        {clusterRoutes.map((rte) => {
                          const isRec = rte.is_recommended;
                          const isSelected = selectedEntity.type === "route" && selectedEntity.id === rte.route_id;
                          return (
                            <div
                              key={rte.route_id}
                              onClick={() => onSelectEntity("route", rte.route_id)}
                              className={`p-2 rounded font-mono text-[10px] border cursor-pointer transition-all ${
                                isSelected
                                  ? "bg-sky-950/80 border-sky-400 text-sky-100 ring-1 ring-sky-400 shadow-md scale-[1.01]"
                                  : isRec
                                  ? "bg-emerald-950/30 border-emerald-700/60 text-emerald-200 hover:border-emerald-500"
                                  : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-slate-200"
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-semibold flex items-center gap-1 text-[10px]">
                                  {isRec ? "★ RECOMMENDED" : "ALTERNATIVE"}
                                  {isSelected && (
                                    <span className="ml-1 text-[8.5px] text-sky-300 font-bold bg-sky-900/80 px-1 rounded border border-sky-600">
                                      MAP SELECTED
                                    </span>
                                  )}
                                </span>
                                <span className={`text-[9px] px-1 py-0.2 rounded border ${
                                  rte.risk_level === "SAFE" || rte.risk_level === "LOW"
                                    ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                                    : "bg-amber-950 text-amber-300 border-amber-800"
                                }`}>
                                  RISK: {rte.risk_level}
                                </span>
                              </div>

                              <div className="mt-1 text-[10px] text-slate-200 font-medium">{rte.name}</div>

                              <div className="mt-1 flex justify-between text-[9px] text-slate-400">
                                <span>ETA: <strong className="text-slate-200">{rte.eta_minutes.toFixed(1)} min</strong></span>
                                <span>Dist: {(rte.total_distance_m / 1000).toFixed(1)} km</span>
                                <span>To: <strong className="text-sky-300">{rte.destination_shelter_name.slice(0, 16)}…</strong></span>
                              </div>

                              {rte.reasons && rte.reasons.length > 0 && (
                                <div className="mt-1 text-[9px] text-slate-400 border-t border-slate-800/80 pt-1">
                                  ✓ {rte.reasons[0]}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Group distribution preview */}
                    {clusterGroups.length > 0 && (
                      <div className="bg-slate-950/80 rounded p-1.5 border border-slate-800/60 text-[9px] font-mono text-slate-400">
                        <div className="text-slate-500 font-semibold mb-1">CROWD DISPATCH GROUPS ({clusterGroups.length}):</div>
                        <div className="grid grid-cols-2 gap-1">
                          {clusterGroups.slice(0, 4).map((g) => (
                            <div key={g.group_id} className="flex justify-between bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800 text-[8.5px]">
                              <span className="text-slate-300">{g.group_id}</span>
                              <span className="text-emerald-400 font-semibold">{g.headcount} pax</span>
                            </div>
                          ))}
                        </div>
                        {clusterGroups.length > 4 && (
                          <div className="text-[8.5px] text-slate-500 text-center mt-1">
                            + {clusterGroups.length - 4} additional distributed groups
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Shelters */}
        {activeTab === "shelters" && (
          <div className="space-y-2.5">
            <div className="bg-slate-900 border border-slate-800 rounded p-2.5 font-mono text-[10px]">
              <div className="flex justify-between text-slate-400 mb-1">
                <span>TOTAL RELIEF CAPACITY</span>
                <span className="text-slate-200 font-semibold">{shelterUtilPct}% utilized</span>
              </div>
              <MiniBar value={shelterUtilPct} color={shelterUtilPct > 80 ? "bg-amber-500" : "bg-emerald-500"} />
              <div className="flex justify-between text-[9px] mt-1 text-slate-500">
                <span>Occupied: {totalShelterOcc.toLocaleString()}</span>
                <span>Available: {(totalShelterCap - totalShelterOcc).toLocaleString()}</span>
              </div>
            </div>
            {state.shelters.map((sh) => {
              const pct = Math.round((sh.current_occupancy / sh.total_capacity) * 100);
              return (
                <div
                  key={sh.id}
                  onClick={() => onSelectEntity("shelter", sh.id)}
                  className="p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 cursor-pointer text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200 text-[11px] line-clamp-1">{sh.name}</span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold border ${
                      sh.status === "AVAILABLE" ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                      : sh.status === "LIMITED" ? "bg-yellow-950 text-yellow-300 border-yellow-800"
                      : "bg-amber-950 text-amber-300 border-amber-800"
                    }`}>{sh.status}</span>
                  </div>
                  <MiniBar value={pct} color={pct > 85 ? "bg-amber-500" : "bg-sky-500"} />
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>{sh.current_occupancy}/{sh.total_capacity} ({pct}%)</span>
                    <span>Elev: {sh.elevation_m}m MSL</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 4: Ground Reports */}
        {activeTab === "reports" && (
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-slate-400 font-semibold px-1 flex justify-between">
              <span>LIVE INCIDENT & FIELD STREAM</span>
              <span className="text-sky-400">{state.ground_reports.length} Reports</span>
            </div>
            {state.ground_reports.map((r) => {
              const isConflict = r.id.includes("conflict") || (r.severity === "LOW" && !r.verified);
              const isCriticalBlock = r.report_type === "ROAD_BLOCKED" || r.severity === "CRITICAL";
              return (
                <div
                  key={r.id}
                  className={`p-2.5 rounded text-xs space-y-1.5 border transition-all ${
                    isCriticalBlock
                      ? "bg-rose-950/40 border-rose-700 text-rose-100 ring-1 ring-rose-500/40 shadow-sm"
                      : isConflict
                      ? "bg-amber-950/20 border-amber-800/60 text-amber-200"
                      : "bg-slate-900 border-slate-800 text-slate-200"
                  }`}
                >
                  <div className="flex justify-between font-mono text-[9.5px] items-center">
                    <span className={`font-bold flex items-center gap-1 ${
                      isCriticalBlock ? "text-rose-400" : isConflict ? "text-amber-400" : "text-sky-400"
                    }`}>
                      {isCriticalBlock ? "⛔ " : isConflict ? "⚠ " : "📡 "}
                      {r.report_type}
                    </span>
                    <span className="text-slate-500">{new Date(r.timestamp).toLocaleTimeString()}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">{r.description}</p>
                  <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-0.5 border-t border-slate-800/60">
                    <span className={r.verified ? "text-emerald-400 font-semibold" : "text-amber-400/80"}>
                      {r.verified ? "✓ Verified Field Report" : "Unverified Citizen Post"}
                    </span>
                    <span className={isCriticalBlock ? "text-rose-400 font-bold" : "text-slate-400"}>
                      Severity: {r.severity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 5: Demo Scenario & Simulation Controls */}
        {activeTab === "controls" && (
          <div className="space-y-3">
            {/* ONE-CLICK DEMO SCENARIO CARD */}
            <div className="bg-slate-900 border border-sky-900/60 rounded p-3 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10.5px] font-bold text-sky-400 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  ONE-CLICK DEMO SCENARIO
                </span>
                <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-bold">
                  STEP {demoStep + 1} OF {DEMO_SCENARIO_STEPS.length}
                </span>
              </div>

              {/* Current Step Overview */}
              {currentDemoStepObj && (
                <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-1.5 font-mono text-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">{currentDemoStepObj.timeCode}</span>
                    <span className="text-slate-300 font-semibold">{currentDemoStepObj.actionTitle}</span>
                  </div>
                  <p className="text-slate-400 font-sans text-xs leading-relaxed">{currentDemoStepObj.description}</p>

                  <div className="border-t border-slate-800/80 pt-1.5 space-y-1 text-[9.5px]">
                    <div className="text-slate-500 font-semibold uppercase">Operational Effects:</div>
                    {currentDemoStepObj.keyChanges.map((kc, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                        <span className="text-sky-400 shrink-0">✓</span>
                        <span>{kc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Playback control buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={onToggleDemo}
                  disabled={isResetting}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs font-mono font-bold transition-all shadow-sm ${
                    isDemoPlaying
                      ? "bg-amber-500 text-slate-950 hover:bg-amber-400 animate-pulse"
                      : "bg-sky-600 hover:bg-sky-500 text-white"
                  }`}
                >
                  {isDemoPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>PAUSE DEMO</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{demoStep === 0 ? "RUN DEMO SCENARIO" : "RESUME DEMO"}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onPrevStep}
                  disabled={demoStep <= 0 || isResetting}
                  className="px-2.5 py-2 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono disabled:opacity-40"
                  title="Previous Step"
                >
                  ◀
                </button>

                <button
                  onClick={onNextStep}
                  disabled={demoStep >= DEMO_SCENARIO_STEPS.length - 1 || isResetting}
                  className="px-2.5 py-2 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono disabled:opacity-40"
                  title="Next Step"
                >
                  ▶
                </button>

                <button
                  onClick={onReset}
                  disabled={isResetting}
                  className="px-2.5 py-2 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono disabled:opacity-40"
                  title="Reset Demo to Baseline"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isResetting ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>

            {/* Phase 3 Discrete Action Buttons */}
            <div className="space-y-2 pt-1">
              <div className="text-[9px] text-slate-500 font-mono tracking-wider uppercase">Individual Scenario Events</div>

              <button
                disabled={isApplyingEvent}
                onClick={() => onApplyEvent?.("START_EVACUATION")}
                className="w-full flex items-center gap-2 bg-slate-900 hover:bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-600 text-emerald-300 px-3 py-2 rounded text-[11px] font-mono transition-colors disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">▶ START EVACUATION</div>
                  <div className="text-emerald-400/70 text-[9px]">Activate routing and crowd group dispatch</div>
                </div>
              </button>

              <button
                disabled={isApplyingEvent}
                onClick={() => onApplyEvent?.("INCREASE_CROWD")}
                className="w-full flex items-center gap-2 bg-slate-900 hover:bg-amber-950/40 border border-amber-800/60 hover:border-amber-600 text-amber-300 px-3 py-2 rounded text-[11px] font-mono transition-colors disabled:opacity-50"
              >
                <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">↑ INCREASE CROWD (+50%)</div>
                  <div className="text-amber-400/70 text-[9px]">Test capacity constraints & congestion surges</div>
                </div>
              </button>

              <button
                disabled={isApplyingEvent}
                onClick={() => onApplyEvent?.("BLOCK_ROAD", {
                  road_id: "rd-karve-paud",
                  closure_reason: "Sudden flash inundation and road breach at Paud elevated junction."
                })}
                className="w-full flex items-center gap-2 bg-slate-900 hover:bg-rose-950/40 border border-rose-800/60 hover:border-rose-600 text-rose-300 px-3 py-2 rounded text-[11px] font-mono transition-colors disabled:opacity-50"
              >
                <AlertOctagon className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">⛔ BLOCK ROAD (Karve-Paud Corridor)</div>
                  <div className="text-rose-400/70 text-[9px]">Triggers dynamic rerouting and corridor recalculation</div>
                </div>
              </button>

              <button
                disabled={isApplyingEvent}
                onClick={() => onApplyEvent?.("CONFLICTING_REPORT", {
                  severity: "LOW",
                  description: "Citizen social post claims dry road & receding water at Vitthalwadi margin"
                })}
                className="w-full flex items-center gap-2 bg-slate-900 hover:bg-amber-950/40 border border-amber-800/60 hover:border-amber-600 text-amber-300 px-3 py-2 rounded text-[11px] font-mono transition-colors disabled:opacity-50"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">⚠ INJECT CONFLICTING REPORT</div>
                  <div className="text-amber-400/70 text-[9px]">Reduces confidence score & tests explainable evidence</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <div className="border-t border-slate-800 p-2 bg-slate-950 text-[9px] font-mono text-slate-500 flex justify-between items-center shrink-0">
        <span>PRAVAHA GIS ENGINE · DEMO MODE</span>
        <span>18.5204° N · 73.8567° E</span>
      </div>
    </aside>
  );
};
