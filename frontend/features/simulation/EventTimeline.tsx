"use client";

import React from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Clock,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";
import { SimulationState } from "@/types/simulation";
import { DEMO_SCENARIO_STEPS, DemoStep } from "@/lib/demoScenario";

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
    <footer className="h-16 bg-slate-950 border-t border-slate-800 px-3 md:px-4 flex items-center justify-between z-20 shrink-0 select-none">
      {/* Left: Demo Playback Controls */}
      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={onToggleDemo}
          disabled={isResetting}
          id="btn-timeline-play-demo"
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono font-bold transition-all shadow-sm ${
            isDemoPlaying
              ? "bg-amber-500 text-slate-950 hover:bg-amber-400 animate-pulse"
              : "bg-sky-600 hover:bg-sky-500 text-white"
          }`}
          title={isDemoPlaying ? "Pause Demo Scenario" : "Run One-Click Demo Scenario (2-3 min)"}
        >
          {isDemoPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>PAUSE DEMO</span>
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
            className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 disabled:opacity-40 transition-colors"
            title="Previous Demo Step"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onNextStep}
            disabled={demoStep >= DEMO_SCENARIO_STEPS.length - 1 || isResetting}
            id="btn-timeline-next"
            className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 disabled:opacity-40 transition-colors"
            title="Next Demo Step"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="hidden xl:flex items-center space-x-1.5 pl-2 border-l border-slate-800 text-[11px] font-mono text-slate-400">
          <Clock className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-emerald-400 font-bold">{state.system_state.sim_time}</span>
          {currentStep && (
            <span className="text-slate-300 truncate max-w-[200px] hidden 2xl:inline">
              · {currentStep.shortLabel}
            </span>
          )}
        </div>
      </div>

      {/* Center: Interactive Demo Scenario Milestones */}
      <div className="hidden lg:flex items-center space-x-1 text-[10.5px] font-mono overflow-x-auto py-1 max-w-[50vw]">
        {DEMO_SCENARIO_STEPS.map((step) => {
          const isCurrent = demoStep === step.id;
          const isCompleted = demoStep > step.id;

          return (
            <button
              key={step.id}
              onClick={() => onJumpToStep(step.id)}
              className={`flex items-center space-x-1 px-2 py-1 rounded transition-all shrink-0 border ${
                isCurrent
                  ? "bg-sky-950/90 border-sky-500 text-sky-200 font-bold shadow-sm ring-1 ring-sky-500/50"
                  : isCompleted
                  ? "bg-emerald-950/40 border-emerald-800/80 text-emerald-300 hover:bg-emerald-950/60"
                  : "bg-slate-900/60 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700"
              }`}
              title={`${step.timeCode}: ${step.actionTitle}\n${step.description}`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              ) : isCurrent ? (
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping shrink-0" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
              )}
              <span className="truncate">{step.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Demo Notice & Reset Button */}
      <div className="flex items-center space-x-3 shrink-0">
        <div className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-semibold tracking-wider text-[10px]">DEMO MODE · SIMULATED DATA</span>
        </div>

        <button
          onClick={onReset}
          disabled={isResetting}
          id="btn-timeline-reset"
          className="flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded text-xs font-mono transition-colors disabled:opacity-50"
          title="Reset simulation to deterministic baseline"
        >
          <RotateCcw className={`w-3.5 h-3.5 text-sky-400 ${isResetting ? "animate-spin" : ""}`} />
          <span className="font-semibold">RESET</span>
        </button>
      </div>
    </footer>
  );
};
