import { SimulationState, SimEventType } from "@/types/simulation";
import { PROGRESSIVE_SCENARIO_STEPS } from "./scenarioSteps";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// ─────────────────────────────────────────────────────────────────
// Deterministic Progressive Simulation States (0 to 7)
// Authoritative single-source-of-truth ensuring 100% full-fidelity
// reactivity for all demo milestones and auto-play controls.
// ─────────────────────────────────────────────────────────────────
export { PROGRESSIVE_SCENARIO_STEPS };
export const fallbackPuneState: SimulationState = PROGRESSIVE_SCENARIO_STEPS[0];

export function getScenarioStateForStep(step: number): SimulationState {
  const index = Math.max(0, Math.min(step, PROGRESSIVE_SCENARIO_STEPS.length - 1));
  return PROGRESSIVE_SCENARIO_STEPS[index];
}

// ─────────────────────────────────────────────────────────────────
// Optional backend synchronization
// ─────────────────────────────────────────────────────────────────

async function apiPost<T>(path: string, body?: unknown): Promise<T | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`${API_BASE_URL}${path}`, {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

export async function fetchSimulationState(): Promise<SimulationState> {
  const data = await apiGet<SimulationState>("/simulation/state");
  return data ?? PROGRESSIVE_SCENARIO_STEPS[0];
}

export async function resetSimulationState(): Promise<SimulationState> {
  const data = await apiPost<{ state: SimulationState }>("/simulation/reset");
  if (data?.state) return data.state;
  return PROGRESSIVE_SCENARIO_STEPS[0];
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
