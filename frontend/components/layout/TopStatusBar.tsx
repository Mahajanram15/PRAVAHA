"use client";

import React from "react";
import {
  AlertTriangle,
  RotateCcw,
  Shield,
  Activity,
  CloudRain,
  Droplets,
  Play,
  Pause,
  Layers,
  Sparkles
} from "lucide-react";
import { SimulationState } from "@/types/simulation";
import { DEMO_SCENARIO_STEPS } from "@/lib/demoScenario";

interface TopStatusBarProps {
  state: SimulationState;
  onReset: () => void;
  isResetting: boolean;
  demoStep: number;
  isDemoPlaying: boolean;
  onToggleDemo: () => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({
  state,
  onReset,
  isResetting,
  demoStep,
  isDemoPlaying,
  onToggleDemo,
}) => {
  const { weather } = state.system_state;
  const currentStep = DEMO_SCENARIO_STEPS[Math.max(0, Math.min(demoStep, DEMO_SCENARIO_STEPS.length - 1))];

  return (
    <header className="h-14 bg-slate-950 border-b border-slate-800 px-3 md:px-4 flex items-center justify-between select-none z-30 shrink-0">
      {/* Brand & Incident Context */}
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 font-bold shadow-sm">
            <Shield className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold tracking-wider text-slate-100 uppercase font-mono">
                PRAVAHA
              </span>
              <span className="text-[10px] bg-slate-800 text-sky-400 px-1.5 py-0.5 rounded font-mono border border-slate-700 font-semibold">
                OPS-GIS · PUNE
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center space-x-1.5 font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{state.scenario.district.toUpperCase()}</span>
              <span>·</span>
              <span className="text-slate-300 truncate max-w-[160px] md:max-w-xs">{state.scenario.name}</span>
            </div>
          </div>
        </div>

        {/* DEMO MODE · SIMULATED DATA MANDATORY NOTICE */}
        <div className="hidden xl:flex items-center space-x-2 bg-amber-500/10 border border-amber-500/40 text-amber-300 px-2.5 py-1 rounded text-xs font-mono font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="tracking-wide text-[10.5px]">DEMO MODE · SIMULATED DATA</span>
        </div>
      </div>

      {/* Center: Real-time Environmental Telemetry */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-xs font-mono">
        <div className="flex items-center space-x-1.5 text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-slate-800/80">
          <CloudRain className="w-3.5 h-3.5 text-sky-400" />
          <span>24h Rain:</span>
          <span className="text-slate-100 font-bold">{weather.rainfall_24h_mm.toFixed(1)} mm</span>
        </div>

        <div className="flex items-center space-x-1.5 text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-slate-800/80">
          <Droplets className="w-3.5 h-3.5 text-blue-400" />
          <span>Outflow:</span>
          <span className="text-slate-100 font-bold">{weather.river_discharge_cusecs.toLocaleString()} cfs</span>
        </div>

        <div className="flex items-center space-x-1.5 text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-slate-800/80">
          <Activity className="w-3.5 h-3.5 text-rose-400" />
          <span>Dam Spillway:</span>
          <span className="text-rose-300 font-bold">{weather.dam_level_pct.toFixed(1)}%</span>
        </div>
      </div>

      {/* Right Controls: One-Click Demo Button & Reset */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* ONE-CLICK DEMO SCENARIO BUTTON */}
        <button
          onClick={onToggleDemo}
          disabled={isResetting}
          id="btn-topbar-run-demo"
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono font-bold transition-all shadow-sm ${
            isDemoPlaying
              ? "bg-amber-500 text-slate-950 hover:bg-amber-400 ring-2 ring-amber-400/50"
              : "bg-sky-600 hover:bg-sky-500 text-white"
          }`}
          title="Start automated 2-3 minute demo scenario sequence"
        >
          {isDemoPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>PAUSE DEMO</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>RUN DEMO SCENARIO</span>
            </>
          )}
        </button>

        {/* Working RESET SIMULATION Control */}
        <button
          onClick={onReset}
          disabled={isResetting}
          id="btn-reset-simulation"
          className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded text-xs font-mono transition-colors shadow-sm disabled:opacity-50"
          title="Reset simulation to initial deterministic state"
        >
          <RotateCcw className={`w-3.5 h-3.5 text-sky-400 ${isResetting ? "animate-spin" : ""}`} />
          <span className="font-semibold hidden sm:inline">RESET</span>
        </button>
      </div>
    </header>
  );
};
