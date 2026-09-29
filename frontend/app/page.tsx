"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { TopStatusBar } from "@/components/layout/TopStatusBar";
import { IntelligencePanel } from "@/features/alerts/IntelligencePanel";
import { EventTimeline } from "@/features/simulation/EventTimeline";
import {
  fetchSimulationState,
  resetSimulationState,
  applySimulationEvent,
  fallbackPuneState
} from "@/lib/api";
import { SimulationState, SimEventType } from "@/types/simulation";
import { DEMO_SCENARIO_STEPS, DemoStep } from "@/lib/demoScenario";

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
  const [state, setState] = useState<SimulationState>(fallbackPuneState);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isApplyingEvent, setIsApplyingEvent] = useState<boolean>(false);
  const [demoStep, setDemoStep] = useState<number>(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState<boolean>(false);
  const demoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedEntity, setSelectedEntity] = useState<{
    type: "hazard" | "road" | "shelter" | "population" | "route" | null;
    id: string | null;
  }>({
    type: null,
    id: null
  });

  const loadData = useCallback(async () => {
    const data = await fetchSimulationState();
    if (data) {
      setState(data);
    }
  }, []);

  useEffect(() => {
    loadData();
    // Poll backend every 4 seconds to sync simulation state
    const timer = setInterval(() => {
      loadData();
    }, 4000);
    return () => clearInterval(timer);
  }, [loadData]);

  // Execute a specific demo step with deterministic progressive cumulative state
  const executeDemoStep = useCallback(async (stepIndex: number) => {
    const targetStep = DEMO_SCENARIO_STEPS[stepIndex];
    if (!targetStep) return;

    setIsApplyingEvent(true);
    try {
      if (stepIndex === 0 || targetStep.eventType === "RESET") {
        const resetData = await resetSimulationState();
        if (resetData) setState(resetData);
        setDemoStep(0);
        setSelectedEntity({ type: null, id: null });
        return;
      }

      // To guarantee true progressive disclosure with zero future-state leakage:
      // Reset to baseline and apply all events sequentially from 1 to stepIndex
      let cumulativeState = await resetSimulationState();
      for (let i = 1; i <= stepIndex; i++) {
        const step = DEMO_SCENARIO_STEPS[i];
        if (step && step.eventType !== "RESET") {
          const res = await applySimulationEvent(
            step.eventType,
            step.payload
          );
          if (res) cumulativeState = res;
        }
      }
      if (cumulativeState) setState(cumulativeState);
      setDemoStep(stepIndex);
    } finally {
      setIsApplyingEvent(false);
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
      // If at end, start from 0, otherwise resume
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

  const handleResetSimulation = async () => {
    setIsDemoPlaying(false);
    setIsResetting(true);
    try {
      const resetData = await resetSimulationState();
      if (resetData) {
        setState(resetData);
      }
      setDemoStep(0);
      setSelectedEntity({ type: null, id: null });
    } finally {
      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  const handleApplyEvent = async (
    eventType: string,
    payload?: Record<string, unknown>
  ) => {
    setIsApplyingEvent(true);
    try {
      const updatedState = await applySimulationEvent(
        eventType as SimEventType,
        payload as {
          severity?: string;
          description?: string;
          rainfall_delta_mm?: number;
          road_id?: string;
          closure_reason?: string;
          crowd_multiplier?: number;
        }
      );
      if (updatedState) {
        setState(updatedState);
      }
    } finally {
      setIsApplyingEvent(false);
    }
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
