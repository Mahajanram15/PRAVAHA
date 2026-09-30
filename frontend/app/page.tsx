"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { TopStatusBar } from "@/components/layout/TopStatusBar";
import { IntelligencePanel } from "@/features/alerts/IntelligencePanel";
import { EventTimeline } from "@/features/simulation/EventTimeline";
import {
  getScenarioStateForStep,
  applySimulationEvent,
  resetSimulationState
} from "@/lib/api";
import { SimulationState, SimEventType } from "@/types/simulation";
import { DEMO_SCENARIO_STEPS } from "@/lib/demoScenario";

// Dynamically load Leaflet InteractiveMap to avoid SSR issues
const InteractiveMap = dynamic(
  () => import("@/features/map/InteractiveMap").then((mod) => mod.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-slate-500 font-mono text-xs space-y-2">
        <div className="w-6 h-6 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        <span>INITIALIZING OPERATIONAL GIS CORE (PUNE GEOMETRY)...</span>
      </div>
    )
  }
);

export default function DashboardPage() {
  const [demoStep, setDemoStep] = useState<number>(0);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isApplyingEvent, setIsApplyingEvent] = useState<boolean>(false);
  const [isDemoPlaying, setIsDemoPlaying] = useState<boolean>(false);
  const demoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedEntity, setSelectedEntity] = useState<{
    type: "hazard" | "road" | "shelter" | "population" | "route" | null;
    id: string | null;
  }>({
    type: null,
    id: null
  });

  // ─────────────────────────────────────────────────────────────────
  // SINGLE UNIFIED SOURCE OF TRUTH:
  // Derived state directly from current demoStep (0 to 7)
  // Guarantees 100% synchronization:
  // DEMO BUTTON / TIMELINE CLICK -> CURRENT STEP -> SCENARIO STATE -> MAP + PANEL
  // ─────────────────────────────────────────────────────────────────
  const state: SimulationState = useMemo(() => {
    return getScenarioStateForStep(demoStep);
  }, [demoStep]);

  // Execute a specific demo step and sync
  const executeDemoStep = useCallback((stepIndex: number) => {
    const validStep = Math.max(0, Math.min(stepIndex, DEMO_SCENARIO_STEPS.length - 1));
    setDemoStep(validStep);

    // Asynchronously notify backend if active without blocking UI
    const targetStep = DEMO_SCENARIO_STEPS[validStep];
    if (targetStep) {
      if (validStep === 0 || targetStep.eventType === "RESET") {
        resetSimulationState().catch(() => {});
      } else {
        applySimulationEvent(targetStep.eventType, targetStep.payload).catch(() => {});
      }
    }
  }, []);

  // One-Click Demo Auto-Play Timer
  useEffect(() => {
    if (!isDemoPlaying) {
      if (demoIntervalRef.current) {
        clearInterval(demoIntervalRef.current);
        demoIntervalRef.current = null;
      }
      return;
    }

    demoIntervalRef.current = setInterval(() => {
      setDemoStep((prevStep) => {
        const nextStep = prevStep + 1;
        if (nextStep >= DEMO_SCENARIO_STEPS.length) {
          setIsDemoPlaying(false);
          return prevStep;
        }
        executeDemoStep(nextStep);
        return nextStep;
      });
    }, 4000);

    return () => {
      if (demoIntervalRef.current) {
        clearInterval(demoIntervalRef.current);
        demoIntervalRef.current = null;
      }
    };
  }, [isDemoPlaying, executeDemoStep]);

  const handleToggleDemo = () => {
    if (isDemoPlaying) {
      setIsDemoPlaying(false);
    } else {
      // If at end, start from 0, otherwise continue
      if (demoStep >= DEMO_SCENARIO_STEPS.length - 1) {
        executeDemoStep(0);
      }
      setIsDemoPlaying(true);
    }
  };

  const handleNextDemoStep = () => {
    if (demoStep < DEMO_SCENARIO_STEPS.length - 1) {
      setIsDemoPlaying(false);
      executeDemoStep(demoStep + 1);
    }
  };

  const handlePrevDemoStep = () => {
    if (demoStep > 0) {
      setIsDemoPlaying(false);
      executeDemoStep(demoStep - 1);
    }
  };

  const handleJumpToDemoStep = (stepId: number) => {
    setIsDemoPlaying(false);
    executeDemoStep(stepId);
  };

  const handleResetSimulation = () => {
    setIsDemoPlaying(false);
    setIsResetting(true);
    executeDemoStep(0);
    setSelectedEntity({ type: null, id: null });
    setTimeout(() => {
      setIsResetting(false);
    }, 250);
  };

  const handleApplyEvent = (eventType: string) => {
    setIsApplyingEvent(true);
    if (eventType === "START_EVACUATION") {
      executeDemoStep(2);
    } else if (eventType === "INCREASE_CROWD") {
      executeDemoStep(3);
    } else if (eventType === "BLOCK_ROAD") {
      executeDemoStep(4);
    } else if (eventType === "GROUND_REPORT_VERIFIED") {
      executeDemoStep(5);
    } else if (eventType === "CONFLICTING_REPORT") {
      executeDemoStep(6);
    } else if (eventType === "RESET") {
      handleResetSimulation();
    }
    setTimeout(() => {
      setIsApplyingEvent(false);
    }, 150);
  };

  const handleSelectEntity = (
    type: "hazard" | "road" | "shelter" | "population" | "route" | null,
    id: string | null
  ) => {
    setSelectedEntity({ type, id });
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 select-none">
      {/* 1. Top System/Status Bar */}
      <TopStatusBar
        state={state}
        onReset={handleResetSimulation}
        isResetting={isResetting}
        demoStep={demoStep}
        isDemoPlaying={isDemoPlaying}
        onToggleDemo={handleToggleDemo}
      />

      {/* 2. Main Center Body: Dominant Map + Right Intelligence Panel */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Dominant Map (takes remaining width) */}
        <main className="flex-1 h-full relative overflow-hidden bg-slate-950">
          <InteractiveMap
            state={state}
            selectedEntity={selectedEntity}
            onSelectEntity={handleSelectEntity}
          />
        </main>

        {/* Right-Side Intelligence Panel */}
        <IntelligencePanel
          state={state}
          selectedEntity={selectedEntity}
          onSelectEntity={handleSelectEntity}
          onApplyEvent={handleApplyEvent}
          isApplyingEvent={isApplyingEvent}
          demoStep={demoStep}
          isDemoPlaying={isDemoPlaying}
          onToggleDemo={handleToggleDemo}
          onNextStep={handleNextDemoStep}
          onPrevStep={handlePrevDemoStep}
          onJumpToStep={handleJumpToDemoStep}
          onReset={handleResetSimulation}
          isResetting={isResetting}
        />
      </div>

      {/* 3. Bottom Simulation / Event Timeline */}
      <EventTimeline
        state={state}
        onReset={handleResetSimulation}
        isResetting={isResetting}
        demoStep={demoStep}
        isDemoPlaying={isDemoPlaying}
        onToggleDemo={handleToggleDemo}
        onNextStep={handleNextDemoStep}
        onPrevStep={handlePrevDemoStep}
        onJumpToStep={handleJumpToDemoStep}
      />
    </div>
  );
}
