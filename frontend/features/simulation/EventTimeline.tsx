"use client";

import React from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Activity
} from "lucide-react";
import { SimulationState } from "@/types/simulation";
import { DEMO_SCENARIO_STEPS } from "@/lib/demoScenario";

interface EventTimelineProps {
  state: SimulationState;
  onReset: () => void;
  isResetting: boolean;
  demoStep: number;
  isDemoPlaying: boolean;
  onToggleDemo: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onJumpToStep: (stepId: number) => void;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({
  state,
  onReset,
  isResetting,
  demoStep,
  isDemoPlaying,
  onToggleDemo,
  onNextStep,
  onPrevStep,
  onJumpToStep,
}) => {
  const currentStep = DEMO_SCENARIO_STEPS[Math.max(0, Math.min(demoStep, DEMO_SCENARIO_STEPS.length - 1))];

  return (
    <footer className="h-14 bg-slate-950/95 border-t border-slate-800/80 px-3 md:px-5 flex items-center justify-between z-20 shrink-0 select-none backdrop-blur-md">
      {/* Left: Demo Playback Controls */}
      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={onToggleDemo}
          disabled={isResetting}
          id="btn-timeline-play-demo"
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all shadow-md active:scale-95 ${
            isDemoPlaying
              ? "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-amber-500/20 animate-pulse"
              : "bg-sky-600 hover:bg-sky-500 text-white shadow-sky-600/30"
          }`}
          title={isDemoPlaying ? "Pause Demo Scenario" : "Auto-Run Continuous Demo Scenario"}
        >
          {isDemoPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>PAUSE</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>RUN DEMO</span>
            </>
          )}
        </button>

        <div className="flex items-center space-x-1">
          <button
            onClick={onPrevStep}
            disabled={demoStep <= 0 || isResetting}
            id="btn-timeline-prev"
            className="p-1.5 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 disabled:opacity-30 transition-all active:scale-95"
            title="Previous Step"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onNextStep}
            disabled={demoStep >= DEMO_SCENARIO_STEPS.length - 1 || isResetting}
            id="btn-timeline-next"
            className="p-1.5 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 disabled:opacity-30 transition-all active:scale-95"
            title="Next Step"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900/70 border border-slate-800/80 text-[11px] font-mono">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-emerald-400 font-bold">{state.system_state.sim_time}</span>
        </div>
      </div>

      {/* Center: Interactive Milestones (Uncapped width so T+60 is never cut off) */}
      <div className="flex-1 flex items-center justify-center space-x-1.5 text-[11px] font-mono overflow-x-auto py-1 px-2 mx-2">
        {DEMO_SCENARIO_STEPS.map((step) => {
          const isCurrent = demoStep === step.id;
          const isCompleted = demoStep > step.id;

          return (
            <button
              key={step.id}
              onClick={() => onJumpToStep(step.id)}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md transition-all shrink-0 border text-xs ${
                isCurrent
                  ? "bg-sky-500/15 border-sky-400 text-sky-200 font-bold shadow-sm shadow-sky-500/20 ring-1 ring-sky-400/50 scale-[1.02]"
                  : isCompleted
                  ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300 hover:bg-emerald-950/50"
                  : "bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
              title={`${step.timeCode}: ${step.actionTitle}\n${step.description}`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              ) : isCurrent ? (
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
              )}
              <span>{step.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Reset Action */}
      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={onReset}
          disabled={isResetting}
          id="btn-timeline-reset"
          className="flex items-center space-x-1.5 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all active:scale-95 disabled:opacity-40"
          title="Reset simulation to baseline"
        >
          <RotateCcw className={`w-3.5 h-3.5 text-sky-400 ${isResetting ? "animate-spin" : ""}`} />
          <span>RESET</span>
        </button>
      </div>
    </footer>
  );
};
