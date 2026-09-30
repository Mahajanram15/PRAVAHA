"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { SimulationState } from "@/types/simulation";
import { Layers, Eye, EyeOff, Shield, AlertTriangle, Users, Navigation } from "lucide-react";

interface InteractiveMapProps {
  state: SimulationState;
  selectedEntity: {
    type: "hazard" | "road" | "shelter" | "population" | "route" | null;
    id: string | null;
  };
  onSelectEntity: (type: any, id: string | null) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  state,
  selectedEntity,
  onSelectEntity
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);
  const layerGroupsRef = useRef<{
    hazards?: any;
    roads?: any;
    routes?: any;
    shelters?: any;
    population?: any;
  }>({});

  // Keep latest state & selectedEntity in refs so renderLayers always reads current values
  const stateRef = useRef(state);
  const selectedEntityRef = useRef(selectedEntity);
  const onSelectEntityRef = useRef(onSelectEntity);
  stateRef.current = state;
  selectedEntityRef.current = selectedEntity;
  onSelectEntityRef.current = onSelectEntity;

  const [visibleLayers, setVisibleLayers] = useState({
    hazards: true,
    roads: true,
    routes: true,
    shelters: true,
    population: true
  });

  const toggleLayer = (layerKey: keyof typeof visibleLayers) => {
    setVisibleLayers((prev) => {
      const next = { ...prev, [layerKey]: !prev[layerKey] };
      const group = layerGroupsRef.current[layerKey];
      if (group && mapInstanceRef.current) {
        if (next[layerKey]) {
          mapInstanceRef.current.addLayer(group);
        } else {
          mapInstanceRef.current.removeLayer(group);
        }
      }
      return next;
    });
  };

  // Stable renderLayers that always reads from refs — never stale
  const renderLayers = useCallback(() => {
    const L = leafletRef.current;
    if (!L) return;

    const { hazards, roads, routes, shelters, population } = layerGroupsRef.current;
    if (!hazards || !roads || !routes || !shelters || !population) return;

    const currentState = stateRef.current;
    const currentSelected = selectedEntityRef.current;
    const selectEntity = onSelectEntityRef.current;

    hazards.clearLayers();
    roads.clearLayers();
    routes.clearLayers();
    shelters.clearLayers();
    population.clearLayers();

    // 1. RENDER HAZARD ZONES (Polygons)
    currentState.hazard_zones.forEach((zone) => {
      const latLngs = zone.polygon_coordinates.map(([lng, lat]) => [lat, lng]);
      const isCritical = zone.severity === "CRITICAL";
      const isSelected = currentSelected.type === "hazard" && currentSelected.id === zone.id;

      const polygon = L.polygon(latLngs, {
        color: isSelected ? "#ffffff" : isCritical ? "#ef4444" : "#eab308",
        weight: isSelected ? 3 : isCritical ? 2 : 1.5,
        dashArray: isCritical ? "4, 4" : undefined,
        fillColor: isCritical ? "#dc2626" : "#ca8a04",
        fillOpacity: isSelected ? 0.5 : isCritical ? 0.35 : 0.22
      });

      polygon.bindTooltip(
        `<div style="font-family: monospace; font-size: 11px;">
          <div style="font-weight: bold; color: ${isCritical ? "#f87171" : "#facc15"};">
            ⚠ ${zone.name}
          </div>
          <div>Risk: ${zone.risk_score}% | Water Depth: ${zone.water_level_m}m</div>
          <div style="color: #94a3b8; font-size: 10px;">Click to inspect contributing factors</div>
        </div>`,
        { sticky: true, opacity: 0.95 }
      );

      polygon.on("click", () => {
        selectEntity("hazard", zone.id);
      });

      hazards.addLayer(polygon);
    });

    // 2. RENDER ROADS (Base Network)
    currentState.roads.forEach((road) => {
      const latLngs = road.coordinates.map(([lng, lat]) => [lat, lng]);
      const isSelected = currentSelected.type === "road" && currentSelected.id === road.id;

      let roadColor = "#334155";
      let roadWeight = 3;
      let dashArray: string | undefined = undefined;

      if (road.is_blocked) {
        roadColor = "#ef4444";
        roadWeight = 5;
        dashArray = "6, 6";
      } else if (road.status === "CONGESTED") {
        roadColor = "#fb923c";
        roadWeight = 4;
      } else if (road.status === "CAUTION") {
        roadColor = "#facc15";
        roadWeight = 3.5;
      }

      if (isSelected) {
        roadWeight += 3;
      }

      const polyline = L.polyline(latLngs, {
        color: roadColor,
        weight: roadWeight,
        dashArray,
        opacity: isSelected ? 1 : 0.75
      });

      polyline.bindTooltip(
        `<div style="font-family: monospace; font-size: 11px;">
          <div style="font-weight: bold; color: ${roadColor};">${road.name}</div>
          <div>Status: <strong>${road.status}</strong> (${road.current_load_vph}/${road.capacity_vph} vph)</div>
          ${road.closure_reason ? `<div style="color: #f87171; font-size: 10px; margin-top: 2px;">⚠ ${road.closure_reason}</div>` : ""}
        </div>`,
        { sticky: true, opacity: 0.95 }
      );

      polyline.on("click", () => {
        selectEntity("road", road.id);
      });

      roads.addLayer(polyline);

      // Blocked barrier marker
      if (road.is_blocked && latLngs.length >= 2) {
        const midIdx = Math.floor(latLngs.length / 2);
        const midPoint = latLngs[midIdx];

        const barrierIcon = L.divIcon({
          className: "custom-barrier-icon",
          html: `
            <div style="
              background: #991b1b;
              border: 1.5px solid #ef4444;
              color: white;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: monospace;
              font-size: 10px;
              font-weight: bold;
              white-space: nowrap;
              box-shadow: 0 2px 6px rgba(0,0,0,0.6);
            ">
              ⛔ BLOCKED
            </div>
          `,
          iconSize: [60, 20],
          iconAnchor: [30, 10]
        });

        const barrierMarker = L.marker(midPoint, { icon: barrierIcon });
        barrierMarker.on("click", () => selectEntity("road", road.id));
        roads.addLayer(barrierMarker);
      }
    });

    // 3. RENDER EVACUATION ROUTES (Progressive: Active on Evacuation Dispatch)
    const isEvacuationActive = currentState.system_state.evacuation_active ?? false;
    const hasSelectedRoute = currentSelected.type === "route" && currentSelected.id !== null;
    const hasSelectedPopulation = currentSelected.type === "population" && currentSelected.id !== null;

    if (isEvacuationActive && currentState.routes && currentState.routes.length > 0) {
      currentState.routes.forEach((route) => {
        if (!route.coordinates || route.coordinates.length < 2) return;
        const latLngs = route.coordinates.map(([lng, lat]) => [lat, lng]);
        const isRec = route.is_recommended;
        const isSelected = currentSelected.type === "route" && currentSelected.id === route.route_id;
        const isClusterMatch = hasSelectedPopulation && currentSelected.id === route.origin_cluster_id;

        let routeColor = isRec ? "#10b981" : "#38bdf8";
        let routeWeight = isRec ? 4.5 : 2.5;
        let dashArray: string | undefined = isRec ? undefined : "4, 4";
        let opacity = isRec ? 0.9 : 0.55;

        if (hasSelectedRoute) {
          if (isSelected) {
            routeColor = isRec ? "#10b981" : "#00f0ff";
            routeWeight = 6;
            dashArray = undefined;
            opacity = 1.0;
          } else if (isRec) {
            routeColor = "#10b981";
            routeWeight = 4;
            dashArray = undefined;
            opacity = 0.8;
          } else {
            routeColor = "#38bdf8";
            routeWeight = 2;
            dashArray = "4, 4";
            opacity = 0.25;
          }
        } else if (hasSelectedPopulation) {
          if (isClusterMatch) {
            routeColor = isRec ? "#10b981" : "#38bdf8";
            routeWeight = isRec ? 5 : 3.5;
            dashArray = isRec ? undefined : "3, 3";
            opacity = 0.95;
          } else {
            opacity = 0.2;
            routeWeight = 2;
          }
        }

        const routeLine = L.polyline(latLngs, {
          color: routeColor,
          weight: routeWeight,
          dashArray,
          opacity
        });

        routeLine.bindTooltip(
          `<div style="font-family: monospace; font-size: 11px;">
            <div style="font-weight: bold; color: ${isSelected ? "#00f0ff" : routeColor};">
              ${isSelected ? "▶ [ACTIVE SELECTION] " : ""}${isRec ? "★ RECOMMENDED ROUTE" : "ALTERNATIVE ROUTE"}
            </div>
            <div style="margin-top: 2px;">${route.name}</div>
            <div>ETA: <strong>${route.eta_minutes} min</strong> | Distance: <strong>${(route.total_distance_m / 1000).toFixed(1)} km</strong></div>
            <div>Risk: <strong style="color: ${route.risk_level === 'SAFE' || route.risk_level === 'LOW' ? '#34d399' : '#facc15'}">${route.risk_level}</strong> | Dest: <strong>${route.destination_shelter_name}</strong></div>
            <div style="color: #94a3b8; font-size: 10px; margin-top: 2px;">Click to isolate & inspect path</div>
          </div>`,
          { sticky: true, opacity: 0.95 }
        );

        routeLine.on("click", () => {
          selectEntity("route", route.route_id);
        });

        routes.addLayer(routeLine);
      });
    }

    // 4. RENDER SHELTERS (Markers)
    currentState.shelters.forEach((shelter) => {
      const isSelected = currentSelected.type === "shelter" && currentSelected.id === shelter.id;
      const isFull = shelter.status === "FULL" || shelter.status === "NEAR_CAPACITY";
      const isAvail = shelter.status === "AVAILABLE";

      const badgeColor = isAvail ? "#10b981" : isFull ? "#f59e0b" : "#38bdf8";

      const shelterIcon = L.divIcon({
        className: "custom-shelter-icon",
        html: `
          <div style="
            background: #0f172a;
            border: 2px solid ${badgeColor};
            border-radius: 6px;
            padding: 3px 6px;
            color: #f8fafc;
            font-family: monospace;
            font-size: 10px;
            display: flex;
            align-items: center;
            gap: 4px;
            white-space: nowrap;
            box-shadow: 0 4px 10px rgba(0,0,0,0.7);
            transform: ${isSelected ? "scale(1.15)" : "scale(1)"};
            transition: transform 0.15s ease;
          ">
            <span style="color: ${badgeColor}; font-weight: bold;">⛨ SHELTER</span>
            <span style="color: #94a3b8;">${shelter.current_occupancy}/${shelter.total_capacity}</span>
          </div>
        `,
        iconSize: [110, 24],
        iconAnchor: [55, 12]
      });

      const marker = L.marker([shelter.latitude, shelter.longitude], { icon: shelterIcon });
      marker.bindPopup(`
        <div style="font-family: monospace; font-size: 11px; padding: 4px; color: #f8fafc;">
          <div style="font-weight: bold; font-size: 12px; color: ${badgeColor};">${shelter.name}</div>
          <div style="margin-top: 4px;">Status: <strong>${shelter.status}</strong></div>
          <div>Occupancy: <strong>${shelter.current_occupancy}</strong> / ${shelter.total_capacity}</div>
          <div>Elevation: ${shelter.elevation_m}m MSL</div>
          <div style="color: #94a3b8; font-size: 10px; margin-top: 4px;">Contact: ${shelter.contact_number}</div>
        </div>
      `);

      marker.on("click", () => {
        selectEntity("shelter", shelter.id);
      });

      shelters.addLayer(marker);
    });

    // 5. RENDER POPULATION CLUSTERS
    currentState.population_zones.forEach((pop) => {
      const isSelected = currentSelected.type === "population" && currentSelected.id === pop.id;

      const circle = L.circle([pop.latitude, pop.longitude], {
        radius: 400,
        color: "#f87171",
        weight: 1,
        dashArray: "3, 3",
        fillColor: "#ef4444",
        fillOpacity: 0.1
      });
      population.addLayer(circle);

      const popIcon = L.divIcon({
        className: "custom-pop-icon",
        html: `
          <div style="
            background: rgba(15, 23, 42, 0.95);
            border: 1.5px solid #ef4444;
            border-radius: 9999px;
            padding: 2px 8px;
            color: #fca5a5;
            font-family: monospace;
            font-size: 10px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.8);
            transform: ${isSelected ? "scale(1.1)" : "scale(1)"};
          ">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 9999px; background: #ef4444;"></span>
            <span>${(pop.estimated_population / 1000).toFixed(1)}k AT RISK</span>
          </div>
        `,
        iconSize: [95, 20],
        iconAnchor: [47, 10]
      });

      const marker = L.marker([pop.latitude, pop.longitude], { icon: popIcon });
      marker.bindTooltip(
        `<div style="font-family: monospace; font-size: 11px;">
          <div style="font-weight: bold; color: #f87171;">${pop.name}</div>
          <div>Affected Residents: <strong>${pop.estimated_population.toLocaleString()}</strong></div>
          <div>Evacuation Urgency: <strong style="color: #ef4444;">${pop.evacuation_urgency}</strong></div>
        </div>`,
        { sticky: true }
      );

      marker.on("click", () => {
        selectEntity("population", pop.id);
      });

      population.addLayer(marker);
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;
      leafletRef.current = L;

      if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;

      // Prevent Leaflet error if container was already initialized by another pass
      const container = mapContainerRef.current as any;
      if (container._leaflet_id) {
        return;
      }

      // Pune center: [18.514, 73.838]
      const map = L.map(container, {
        center: [18.514, 73.838],
        zoom: 13,
        zoomControl: false,
        attributionControl: false
      });

      if (!isMounted) {
        map.remove();
        return;
      }

      L.control.zoom({ position: "topleft" }).addTo(map);

      L.control.attribution({ position: "bottomright", prefix: false })
        .addAttribution('&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors')
        .addTo(map);

      L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          opacity: 0.95,
          className: "osm-dark-tiles"
        }
      ).addTo(map);

      const hazardsGroup = L.layerGroup().addTo(map);
      const roadsGroup = L.layerGroup().addTo(map);
      const routesGroup = L.layerGroup().addTo(map);
      const sheltersGroup = L.layerGroup().addTo(map);
      const populationGroup = L.layerGroup().addTo(map);

      layerGroupsRef.current = {
        hazards: hazardsGroup,
        roads: roadsGroup,
        routes: routesGroup,
        shelters: sheltersGroup,
        population: populationGroup
      };

      mapInstanceRef.current = map;
      renderLayers();
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapContainerRef.current) {
        delete (mapContainerRef.current as any)._leaflet_id;
      }
    };
  }, [renderLayers]);

  // Synchronous re-render on state/selectedEntity change — no async import needed
  useEffect(() => {
    if (!mapInstanceRef.current || !leafletRef.current) return;
    renderLayers();
    mapInstanceRef.current.invalidateSize();
  }, [state, selectedEntity, renderLayers]);

  return (
    <div className="relative w-full h-full flex-1 overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Layer Toggles Overlay */}
      <div className="absolute top-3 right-3 z-10 bg-slate-950/90 border border-slate-800 rounded p-2 text-xs font-mono backdrop-blur-sm shadow-lg space-y-1.5">
        <div className="text-[10px] text-slate-400 font-semibold tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-800">
          <Layers className="w-3.5 h-3.5 text-sky-400" /> GIS LAYERS
        </div>

        <button
          onClick={() => toggleLayer("hazards")}
          className={`w-full flex items-center justify-between px-2 py-1 rounded transition-colors ${
            visibleLayers.hazards ? "bg-rose-950/40 text-rose-300 border border-rose-800/40" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-rose-500"></span>
            Flood Inundation
          </span>
          {visibleLayers.hazards ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => toggleLayer("routes")}
          className={`w-full flex items-center justify-between px-2 py-1 rounded transition-colors ${
            visibleLayers.routes ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/40" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-emerald-400"></span>
            Evac Routes ({state.routes?.length ?? 0})
          </span>
          {visibleLayers.routes ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => toggleLayer("roads")}
          className={`w-full flex items-center justify-between px-2 py-1 rounded transition-colors ${
            visibleLayers.roads ? "bg-sky-950/40 text-sky-300 border border-sky-800/40" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-sky-400"></span>
            Road Corridors
          </span>
          {visibleLayers.roads ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => toggleLayer("shelters")}
          className={`w-full flex items-center justify-between px-2 py-1 rounded transition-colors ${
            visibleLayers.shelters ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/40" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-emerald-400"></span>
            Shelters ({state.shelters.length})
          </span>
          {visibleLayers.shelters ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>

        <button
          onClick={() => toggleLayer("population")}
          className={`w-full flex items-center justify-between px-2 py-1 rounded transition-colors ${
            visibleLayers.population ? "bg-amber-950/40 text-amber-300 border border-amber-800/40" : "text-slate-500 hover:text-slate-300"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm bg-amber-400"></span>
            Population Clusters
          </span>
          {visibleLayers.population ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
        </button>
      </div>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-3 left-3 z-10 bg-slate-950/90 border border-slate-800 rounded p-2.5 text-[10px] font-mono backdrop-blur-sm shadow-lg space-y-1.5">
        <div className="font-semibold text-slate-300 tracking-wider flex items-center gap-1 pb-1 border-b border-slate-800">
          <Shield className="w-3 h-3 text-slate-400" /> OPERATIONAL MAP LEGEND
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-emerald-400"></span>
            <span>Recommended Route</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-sky-400 border-b border-dashed"></span>
            <span>Alternative Route</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-rose-500"></span>
            <span>Blocked / Closed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-amber-500"></span>
            <span>Congested Corridor</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-emerald-400 bg-emerald-500/20"></span>
            <span>Relief Shelter</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full border border-rose-400 bg-rose-500/30"></span>
            <span>Population Cluster</span>
          </div>
        </div>
      </div>
    </div>
  );
};
