import { SimulationState } from "@/types/simulation";

export const PROGRESSIVE_SCENARIO_STEPS: SimulationState[] = [
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "ACTIVE_MONITORING",
      "step": 0,
      "sim_time": "T+00:00",
      "sim_time_label": "Baseline GIS & Routine Monitoring",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": false,
      "crowd_multiplier": 1.0,
      "latest_reroute_reason": null,
      "weather": {
        "rainfall_24h_mm": 184.5,
        "river_discharge_cusecs": 45200,
        "dam_level_pct": 95.5,
        "trend": "STABLE"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 81.7,
        "confidence_score": 80.9,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "184.5 mm / 24h",
            "raw_score": 0.922,
            "contribution": 0.28,
            "weighted_contribution": 25.8,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "45,200 cusecs",
            "raw_score": 0.753,
            "contribution": 0.22,
            "weighted_contribution": 16.6,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "WARNING"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "95.5% capacity",
            "raw_score": 0.887,
            "contribution": 0.18,
            "weighted_contribution": 16.0,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "0 verified reports",
            "raw_score": 0.0,
            "contribution": 0.08,
            "weighted_contribution": 0.0,
            "description": "Field-observer reports corroborating sensor data",
            "status": "SAFE"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 184.5,
          "river_discharge_cusecs": 45200,
          "dam_level_pct": 95.5,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 0
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.297642Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.297642Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 70.0,
          "quantity": 72.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "No ground reports to compare (sensor data only)",
          "Source count: 2 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 120,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 80,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 300,
        "status": "AVAILABLE",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 150,
        "status": "AVAILABLE",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [],
    "routes": [],
    "group_assignments": [],
    "cluster_summaries": [],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "FLOOD_SURGE_DETECTED",
      "step": 1,
      "sim_time": "T+10:00",
      "sim_time_label": "Rainfall Surge (+25mm)",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": false,
      "crowd_multiplier": 1.0,
      "latest_reroute_reason": null,
      "weather": {
        "rainfall_24h_mm": 209.5,
        "river_discharge_cusecs": 49700,
        "dam_level_pct": 99.2,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 88.3,
        "confidence_score": 92.1,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "209.5 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "49,700 cusecs",
            "raw_score": 0.828,
            "contribution": 0.22,
            "weighted_contribution": 18.2,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.2% capacity",
            "raw_score": 0.98,
            "contribution": 0.18,
            "weighted_contribution": 17.6,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "1 verified reports",
            "raw_score": 0.143,
            "contribution": 0.08,
            "weighted_contribution": 1.1,
            "description": "Field-observer reports corroborating sensor data",
            "status": "SAFE"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 209.5,
          "river_discharge_cusecs": 49700,
          "dam_level_pct": 99.2,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 1
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.297825Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.297825Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.297767Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 84.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 1 ground reports support the assessed risk level",
          "Source count: 3 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 120,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 80,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 300,
        "status": "AVAILABLE",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 150,
        "status": "AVAILABLE",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "LOW",
        "evacuation_urgency": "STANDBY",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.297767Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      }
    ],
    "routes": [],
    "group_assignments": [],
    "cluster_summaries": [],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "EVACUATION_ACTIVE",
      "step": 2,
      "sim_time": "T+20:00",
      "sim_time_label": "Evacuation Dispatched \u2014 Group Assignment Active",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": true,
      "crowd_multiplier": 1.0,
      "latest_reroute_reason": null,
      "weather": {
        "rainfall_24h_mm": 215.0,
        "river_discharge_cusecs": 52000,
        "dam_level_pct": 99.5,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 90.5,
        "confidence_score": 93.7,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "215.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "52,000 cusecs",
            "raw_score": 0.867,
            "contribution": 0.22,
            "weighted_contribution": 19.1,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.5% capacity",
            "raw_score": 0.988,
            "contribution": 0.18,
            "weighted_contribution": 17.8,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "2 verified reports",
            "raw_score": 0.286,
            "contribution": 0.08,
            "weighted_contribution": 2.3,
            "description": "Field-observer reports corroborating sensor data",
            "status": "SAFE"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 215.0,
          "river_discharge_cusecs": 52000,
          "dam_level_pct": 99.5,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 2
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.298021Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.298021Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.297958Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.297962Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 92.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 2 ground reports support the assessed risk level",
          "Source count: 4 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 640,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 410,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 1200,
        "status": "AVAILABLE",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 600,
        "status": "AVAILABLE",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.297958Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.297962Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sp-college-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 8100,
        "eta_minutes": 16.5,
        "total_cost": 39.12,
        "risk_level": "LOW",
        "hazard_score": 0.14,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 9300,
        "eta_minutes": 19.0,
        "total_cost": 47.12,
        "risk_level": "LOW",
        "hazard_score": 0.13,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sp-college-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 12800,
        "eta_minutes": 26.0,
        "total_cost": 55.63,
        "risk_level": "LOW",
        "hazard_score": 0.11,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring",
          "rd-paud-mit-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.824,
            18.514
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 14000,
        "eta_minutes": 28.5,
        "total_cost": 63.63,
        "risk_level": "LOW",
        "hazard_score": 0.11,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring",
          "rd-paud-mit-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.824,
            18.514
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p0",
        "name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 4000,
        "eta_minutes": 8.0,
        "total_cost": 17.14,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.47,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
        "name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5300,
        "eta_minutes": 11.0,
        "total_cost": 23.35,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.47,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p1",
        "name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 6200,
        "eta_minutes": 12.5,
        "total_cost": 24.7,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.47,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p1",
        "name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7500,
        "eta_minutes": 15.5,
        "total_cost": 30.91,
        "risk_level": "LOW",
        "hazard_score": 0.07,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.47,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 49.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-mit-sports-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 8300,
        "eta_minutes": 18.5,
        "total_cost": 55.85,
        "risk_level": "MODERATE",
        "hazard_score": 0.28,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 57.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 9600,
        "eta_minutes": 21.5,
        "total_cost": 62.07,
        "risk_level": "MODERATE",
        "hazard_score": 0.24,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p1",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 10500,
        "eta_minutes": 23.0,
        "total_cost": 63.41,
        "risk_level": "MODERATE",
        "hazard_score": 0.24,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-mit-sports-p1",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 11800,
        "eta_minutes": 26.0,
        "total_cost": 69.63,
        "risk_level": "MODERATE",
        "hazard_score": 0.21,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-mit-sports-p0",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 5100,
        "eta_minutes": 10.5,
        "total_cost": 27.84,
        "risk_level": "LOW",
        "hazard_score": 0.14,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p0",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 6400,
        "eta_minutes": 13.5,
        "total_cost": 34.05,
        "risk_level": "LOW",
        "hazard_score": 0.12,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p1",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 7300,
        "eta_minutes": 15.0,
        "total_cost": 35.4,
        "risk_level": "LOW",
        "hazard_score": 0.12,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-mit-sports-p1",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 8600,
        "eta_minutes": 18.0,
        "total_cost": 41.61,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sp-college-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 16.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 19.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sp-college-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 26.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 28.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 200,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-10",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p0",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 8.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-11",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-12",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-13",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 350,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 12.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-14",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-15",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-16",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-17",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-18",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 300,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "PLANNED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-19",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "PLANNED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-20",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-21",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 400,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-mit-sports-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 10.5,
        "risk_level": "LOW",
        "status": "PLANNED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 4200,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 9,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-sp-college-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-sarasbaug-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-sarasbaug-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-sp-college-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 1850,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 4,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
          "rte-pop-pulachi-wadi-sh-mit-sports-p0",
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-kothrud-natya-p1"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 2300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 1400,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 3,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-mit-sports-p0",
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-sp-college-direct"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "EVACUATION_ACTIVE",
      "step": 3,
      "sim_time": "T+30:00",
      "sim_time_label": "Surge Crowd Volume (Multiplier x1.5)",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": true,
      "crowd_multiplier": 1.5,
      "latest_reroute_reason": null,
      "weather": {
        "rainfall_24h_mm": 218.0,
        "river_discharge_cusecs": 54500,
        "dam_level_pct": 99.7,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 92.6,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "218.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "54,500 cusecs",
            "raw_score": 0.908,
            "contribution": 0.22,
            "weighted_contribution": 20.0,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.7% capacity",
            "raw_score": 0.993,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "3 verified reports",
            "raw_score": 0.429,
            "contribution": 0.08,
            "weighted_contribution": 3.4,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CAUTION"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 218.0,
          "river_discharge_cusecs": 54500,
          "dam_level_pct": 99.7,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 3
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.302546Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.302546Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.302454Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.302469Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.302472Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 3 ground reports support the assessed risk level",
          "Source count: 5 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-sangam-confluence",
        "name": "Sangamwadi Mula-Mutha Confluence Basin",
        "severity": "CRITICAL",
        "water_level_m": 3.1,
        "flow_velocity_mps": 1.9,
        "risk_score": 92.4,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.858,
            18.527
          ],
          [
            73.871,
            18.5375
          ],
          [
            73.881,
            18.535
          ],
          [
            73.8735,
            18.524
          ],
          [
            73.8625,
            18.523
          ],
          [
            73.858,
            18.527
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "218.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "54,500 cusecs",
            "raw_score": 0.908,
            "contribution": 0.22,
            "weighted_contribution": 20.0,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.7% capacity",
            "raw_score": 0.993,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "551 m MSL",
            "raw_score": 0.936,
            "contribution": 0.14,
            "weighted_contribution": 13.1,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "3.1 m",
            "raw_score": 1.0,
            "contribution": 0.1,
            "weighted_contribution": 10.0,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "3 verified reports",
            "raw_score": 0.429,
            "contribution": 0.08,
            "weighted_contribution": 3.4,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CAUTION"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 218.0,
          "river_discharge_cusecs": 54500,
          "dam_level_pct": 99.7,
          "elevation_m": 551.0,
          "water_level_m": 3.1,
          "ground_report_count": 3
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.302591Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.302591Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.302454Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.302469Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.302472Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 3 ground reports support the assessed risk level",
          "Source count: 5 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-bavdhan-runoff",
        "name": "Paud-Kothrud Western Buffer Zone",
        "severity": "WARNING",
        "water_level_m": 0.4,
        "flow_velocity_mps": 0.8,
        "risk_score": 75.1,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.798,
            18.505
          ],
          [
            73.812,
            18.518
          ],
          [
            73.818,
            18.512
          ],
          [
            73.805,
            18.499
          ],
          [
            73.798,
            18.505
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "218.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "54,500 cusecs",
            "raw_score": 0.908,
            "contribution": 0.22,
            "weighted_contribution": 20.0,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.7% capacity",
            "raw_score": 0.993,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "580 m MSL",
            "raw_score": 0.319,
            "contribution": 0.14,
            "weighted_contribution": 4.5,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CAUTION"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "0.4 m",
            "raw_score": 0.133,
            "contribution": 0.1,
            "weighted_contribution": 1.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "SAFE"
          },
          {
            "name": "Ground Confirmation",
            "value": "3 verified reports",
            "raw_score": 0.429,
            "contribution": 0.08,
            "weighted_contribution": 3.4,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CAUTION"
          }
        ],
        "status": "MONITORING",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "WARNING",
        "risk_inputs": {
          "rainfall_24h_mm": 218.0,
          "river_discharge_cusecs": 54500,
          "dam_level_pct": 99.7,
          "elevation_m": 580.0,
          "water_level_m": 0.4,
          "ground_report_count": 3
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.302625Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.302625Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.302454Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.302469Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.302472Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 3 ground reports support the assessed risk level",
          "Source count: 5 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1980,
        "hazard_exposure": 0.12,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "CAUTION"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "CAUTION"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "CONGESTED"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 1250,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 980,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 2480,
        "status": "LIMITED",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 1130,
        "status": "NEAR_CAPACITY",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.302454Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.302469Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-003",
        "timestamp": "2026-09-29T17:25:38.302472Z",
        "latitude": 18.5305,
        "longitude": 73.865,
        "report_type": "STRANDED_PEOPLE",
        "severity": "HIGH",
        "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
        "verified": true,
        "confidence_impact": 0.18
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sp-college-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 8100,
        "eta_minutes": 16.5,
        "total_cost": 41.01,
        "risk_level": "LOW",
        "hazard_score": 0.14,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 9300,
        "eta_minutes": 19.0,
        "total_cost": 49.01,
        "risk_level": "LOW",
        "hazard_score": 0.13,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sp-college-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 12800,
        "eta_minutes": 26.0,
        "total_cost": 57.51,
        "risk_level": "LOW",
        "hazard_score": 0.11,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring",
          "rd-paud-mit-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.824,
            18.514
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 14000,
        "eta_minutes": 28.5,
        "total_cost": 65.51,
        "risk_level": "LOW",
        "hazard_score": 0.11,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus",
          "node_paud_phata",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring",
          "rd-paud-mit-link",
          "rd-karve-paud",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.824,
            18.514
          ],
          [
            73.831,
            18.511
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p0",
        "name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 4000,
        "eta_minutes": 8.0,
        "total_cost": 19.02,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
        "name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5300,
        "eta_minutes": 11.0,
        "total_cost": 25.24,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p1",
        "name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 6200,
        "eta_minutes": 12.5,
        "total_cost": 26.58,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p1",
        "name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7500,
        "eta_minutes": 15.5,
        "total_cost": 32.8,
        "risk_level": "LOW",
        "hazard_score": 0.07,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 49.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 57.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-mit-sports-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 8300,
        "eta_minutes": 18.5,
        "total_cost": 57.74,
        "risk_level": "MODERATE",
        "hazard_score": 0.28,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 9600,
        "eta_minutes": 21.5,
        "total_cost": 63.95,
        "risk_level": "MODERATE",
        "hazard_score": 0.24,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p1",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 10500,
        "eta_minutes": 23.0,
        "total_cost": 65.3,
        "risk_level": "MODERATE",
        "hazard_score": 0.24,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-mit-sports-p1",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 11800,
        "eta_minutes": 26.0,
        "total_cost": 71.52,
        "risk_level": "MODERATE",
        "hazard_score": 0.21,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-mit-sports-p0",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 5100,
        "eta_minutes": 10.5,
        "total_cost": 29.72,
        "risk_level": "LOW",
        "hazard_score": 0.14,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p0",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 6400,
        "eta_minutes": 13.5,
        "total_cost": 35.94,
        "risk_level": "LOW",
        "hazard_score": 0.12,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p1",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 7300,
        "eta_minutes": 15.0,
        "total_cost": 37.28,
        "risk_level": "LOW",
        "hazard_score": 0.12,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-mit-sports-p1",
        "name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 8600,
        "eta_minutes": 18.0,
        "total_cost": 43.5,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.71,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_alka_talkies",
          "node_paud_phata",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-karve-paud",
          "rd-paud-karve-link",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sp-college-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 16.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 19.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sp-college-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 26.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sarasbaug-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus -> Paud Phata -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 28.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-10",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-11",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-12",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-13",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 300,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-sp-college-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 16.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-14",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-15",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-16",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p0",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 8.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-17",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-18",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 12.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-19",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 275,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-mit-sports-p1",
        "assigned_route_name": "Via Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-20",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-21",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-22",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-mit-sports-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 18.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-23",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 21.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-24",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 23.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-25",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-mit-sports-p1",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 26.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-26",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 450,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-27",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-28",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-29",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-mit-sports-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 10.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-30",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 13.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-31",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 100,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Sadashiv Peth -> Alka Talkies -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 15.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 6300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 13,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-sp-college-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-sarasbaug-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-sarasbaug-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-sp-college-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 2775,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 6,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-kothrud-natya-p1",
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-mit-sports-p1",
          "rte-pop-pulachi-wadi-sh-kothrud-natya-p0",
          "rte-pop-pulachi-wadi-sh-mit-sports-p0",
          "rte-pop-pulachi-wadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 3450,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 7,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0",
          "rte-pop-sangamwadi-sh-mit-sports-p0",
          "rte-pop-sangamwadi-sh-kothrud-natya-p0",
          "rte-pop-sangamwadi-sh-mit-sports-p1",
          "rte-pop-sangamwadi-sh-sp-college-p0",
          "rte-pop-sangamwadi-sh-kothrud-natya-p1"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 2100,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-sp-college-direct",
          "rte-pop-sadashiv-low-sh-kothrud-natya-p1",
          "rte-pop-sadashiv-low-sh-mit-sports-p0",
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-kothrud-natya-p0"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "EVACUATION_ACTIVE",
      "step": 4,
      "sim_time": "T+40:00",
      "sim_time_label": "Corridor Blocked (rd-karve-paud) \u2014 Dynamic Reroute",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": true,
      "crowd_multiplier": 1.5,
      "latest_reroute_reason": "Road rd-karve-paud blocked: Sudden flash inundation and carriage-way breach at Paud elevated junction. Recalculating alternative corridors.",
      "weather": {
        "rainfall_24h_mm": 220.0,
        "river_discharge_cusecs": 55000,
        "dam_level_pct": 99.8,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 94.0,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "220.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "55,000 cusecs",
            "raw_score": 0.917,
            "contribution": 0.22,
            "weighted_contribution": 20.2,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.8% capacity",
            "raw_score": 0.995,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "4 verified reports",
            "raw_score": 0.571,
            "contribution": 0.08,
            "weighted_contribution": 4.6,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 220.0,
          "river_discharge_cusecs": 55000,
          "dam_level_pct": 99.8,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 4
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.305850Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.305850Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.305774Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.305781Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.305784Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.305787Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 4 ground reports support the assessed risk level",
          "Source count: 6 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-sangam-confluence",
        "name": "Sangamwadi Mula-Mutha Confluence Basin",
        "severity": "CRITICAL",
        "water_level_m": 3.1,
        "flow_velocity_mps": 1.9,
        "risk_score": 93.8,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.858,
            18.527
          ],
          [
            73.871,
            18.5375
          ],
          [
            73.881,
            18.535
          ],
          [
            73.8735,
            18.524
          ],
          [
            73.8625,
            18.523
          ],
          [
            73.858,
            18.527
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "220.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "55,000 cusecs",
            "raw_score": 0.917,
            "contribution": 0.22,
            "weighted_contribution": 20.2,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.8% capacity",
            "raw_score": 0.995,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "551 m MSL",
            "raw_score": 0.936,
            "contribution": 0.14,
            "weighted_contribution": 13.1,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "3.1 m",
            "raw_score": 1.0,
            "contribution": 0.1,
            "weighted_contribution": 10.0,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "4 verified reports",
            "raw_score": 0.571,
            "contribution": 0.08,
            "weighted_contribution": 4.6,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 220.0,
          "river_discharge_cusecs": 55000,
          "dam_level_pct": 99.8,
          "elevation_m": 551.0,
          "water_level_m": 3.1,
          "ground_report_count": 4
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.305890Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.305890Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.305774Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.305781Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.305784Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.305787Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 4 ground reports support the assessed risk level",
          "Source count: 6 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-bavdhan-runoff",
        "name": "Paud-Kothrud Western Buffer Zone",
        "severity": "WARNING",
        "water_level_m": 0.4,
        "flow_velocity_mps": 0.8,
        "risk_score": 76.4,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.798,
            18.505
          ],
          [
            73.812,
            18.518
          ],
          [
            73.818,
            18.512
          ],
          [
            73.805,
            18.499
          ],
          [
            73.798,
            18.505
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "220.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "55,000 cusecs",
            "raw_score": 0.917,
            "contribution": 0.22,
            "weighted_contribution": 20.2,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.8% capacity",
            "raw_score": 0.995,
            "contribution": 0.18,
            "weighted_contribution": 17.9,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "580 m MSL",
            "raw_score": 0.319,
            "contribution": 0.14,
            "weighted_contribution": 4.5,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CAUTION"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "0.4 m",
            "raw_score": 0.133,
            "contribution": 0.1,
            "weighted_contribution": 1.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "SAFE"
          },
          {
            "name": "Ground Confirmation",
            "value": "4 verified reports",
            "raw_score": 0.571,
            "contribution": 0.08,
            "weighted_contribution": 4.6,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "MONITORING",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "WARNING",
        "risk_inputs": {
          "rainfall_24h_mm": 220.0,
          "river_discharge_cusecs": 55000,
          "dam_level_pct": 99.8,
          "elevation_m": 580.0,
          "water_level_m": 0.4,
          "ground_report_count": 4
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.305922Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.305922Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.305774Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.305781Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.305784Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.305787Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 4 ground reports support the assessed risk level",
          "Source count: 6 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": true,
        "closure_reason": "Sudden flash inundation and carriage-way breach at Paud elevated junction",
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 1850,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 1450,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 1100,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 2480,
        "status": "LIMITED",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 1130,
        "status": "NEAR_CAPACITY",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.305774Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.305781Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-003",
        "timestamp": "2026-09-29T17:25:38.305784Z",
        "latitude": 18.5305,
        "longitude": 73.865,
        "report_type": "STRANDED_PEOPLE",
        "severity": "HIGH",
        "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
        "verified": true,
        "confidence_impact": 0.18
      },
      {
        "id": "rep-block-rd-karve-paud",
        "timestamp": "2026-09-29T17:25:38.305787Z",
        "latitude": 18.511,
        "longitude": 73.831,
        "report_type": "ROAD_BLOCKED",
        "severity": "CRITICAL",
        "description": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
        "verified": true,
        "confidence_impact": 0.2
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 49.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 57.42,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.77,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-10",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-11",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-12",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-13",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 300,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-14",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-15",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-16",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-17",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-18",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-19",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 275,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-20",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-21",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-22",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-23",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-24",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-25",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-26",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 450,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-27",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-28",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-29",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-30",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-31",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 100,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 6300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 13,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 2775,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 6,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 3450,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 7,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0",
          "rte-pop-sangamwadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 2100,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-sp-college-direct"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "EVACUATION_ACTIVE",
      "step": 5,
      "sim_time": "T+50:00",
      "sim_time_label": "NDRF Field Access Verification Received",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": true,
      "crowd_multiplier": 1.5,
      "latest_reroute_reason": "Road rd-karve-paud blocked: Sudden flash inundation and carriage-way breach at Paud elevated junction. Recalculating alternative corridors.",
      "weather": {
        "rainfall_24h_mm": 210.0,
        "river_discharge_cusecs": 53000,
        "dam_level_pct": 99.0,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 94.0,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "210.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "53,000 cusecs",
            "raw_score": 0.883,
            "contribution": 0.22,
            "weighted_contribution": 19.4,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.0% capacity",
            "raw_score": 0.975,
            "contribution": 0.18,
            "weighted_contribution": 17.5,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 210.0,
          "river_discharge_cusecs": 53000,
          "dam_level_pct": 99.0,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.307570Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.307570Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.307498Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.307503Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.307505Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.307508Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.307510Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 5 ground reports support the assessed risk level",
          "Source count: 7 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-sangam-confluence",
        "name": "Sangamwadi Mula-Mutha Confluence Basin",
        "severity": "CRITICAL",
        "water_level_m": 3.1,
        "flow_velocity_mps": 1.9,
        "risk_score": 93.8,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.858,
            18.527
          ],
          [
            73.871,
            18.5375
          ],
          [
            73.881,
            18.535
          ],
          [
            73.8735,
            18.524
          ],
          [
            73.8625,
            18.523
          ],
          [
            73.858,
            18.527
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "210.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "53,000 cusecs",
            "raw_score": 0.883,
            "contribution": 0.22,
            "weighted_contribution": 19.4,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.0% capacity",
            "raw_score": 0.975,
            "contribution": 0.18,
            "weighted_contribution": 17.5,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "551 m MSL",
            "raw_score": 0.936,
            "contribution": 0.14,
            "weighted_contribution": 13.1,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "3.1 m",
            "raw_score": 1.0,
            "contribution": 0.1,
            "weighted_contribution": 10.0,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 210.0,
          "river_discharge_cusecs": 53000,
          "dam_level_pct": 99.0,
          "elevation_m": 551.0,
          "water_level_m": 3.1,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.307609Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.307609Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.307498Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.307503Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.307505Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.307508Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.307510Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 5 ground reports support the assessed risk level",
          "Source count: 7 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-bavdhan-runoff",
        "name": "Paud-Kothrud Western Buffer Zone",
        "severity": "WARNING",
        "water_level_m": 0.4,
        "flow_velocity_mps": 0.8,
        "risk_score": 76.5,
        "confidence_score": 95.2,
        "polygon_coordinates": [
          [
            73.798,
            18.505
          ],
          [
            73.812,
            18.518
          ],
          [
            73.818,
            18.512
          ],
          [
            73.805,
            18.499
          ],
          [
            73.798,
            18.505
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "210.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "53,000 cusecs",
            "raw_score": 0.883,
            "contribution": 0.22,
            "weighted_contribution": 19.4,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "99.0% capacity",
            "raw_score": 0.975,
            "contribution": 0.18,
            "weighted_contribution": 17.5,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "580 m MSL",
            "raw_score": 0.319,
            "contribution": 0.14,
            "weighted_contribution": 4.5,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CAUTION"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "0.4 m",
            "raw_score": 0.133,
            "contribution": 0.1,
            "weighted_contribution": 1.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "SAFE"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "MONITORING",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "WARNING",
        "risk_inputs": {
          "rainfall_24h_mm": 210.0,
          "river_discharge_cusecs": 53000,
          "dam_level_pct": 99.0,
          "elevation_m": 580.0,
          "water_level_m": 0.4,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.307645Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.307645Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.307498Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.307503Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.307505Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.307508Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.307510Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 95.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "All 5 ground reports support the assessed risk level",
          "Source count: 7 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": true,
        "closure_reason": "Sudden flash inundation and carriage-way breach at Paud elevated junction",
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 2100,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 1450,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 1100,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 2480,
        "status": "LIMITED",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 1130,
        "status": "NEAR_CAPACITY",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.307498Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.307503Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-003",
        "timestamp": "2026-09-29T17:25:38.307505Z",
        "latitude": 18.5305,
        "longitude": 73.865,
        "report_type": "STRANDED_PEOPLE",
        "severity": "HIGH",
        "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
        "verified": true,
        "confidence_impact": 0.18
      },
      {
        "id": "rep-block-rd-karve-paud",
        "timestamp": "2026-09-29T17:25:38.307508Z",
        "latitude": 18.511,
        "longitude": 73.831,
        "report_type": "ROAD_BLOCKED",
        "severity": "CRITICAL",
        "description": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-verified-005",
        "timestamp": "2026-09-29T17:25:38.307510Z",
        "latitude": 18.498,
        "longitude": 73.831,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
        "verified": true,
        "confidence_impact": 0.15
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 50.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 58.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-10",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-11",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-12",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-13",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 300,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-14",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-15",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-16",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-17",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-18",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-19",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 275,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-20",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-21",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-22",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-23",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-24",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-25",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-26",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 450,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-27",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-28",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-29",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-30",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-31",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 100,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 6300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 13,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 2775,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 6,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 3450,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 7,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0",
          "rte-pop-sangamwadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 2100,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-sp-college-direct"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "EVACUATION_ACTIVE",
      "step": 6,
      "sim_time": "T+60:00",
      "sim_time_label": "Conflicting Observation Injected",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 1,
      "evacuation_active": true,
      "crowd_multiplier": 1.5,
      "latest_reroute_reason": "Road rd-karve-paud blocked: Sudden flash inundation and carriage-way breach at Paud elevated junction. Recalculating alternative corridors.",
      "weather": {
        "rainfall_24h_mm": 205.0,
        "river_discharge_cusecs": 50000,
        "dam_level_pct": 98.5,
        "trend": "RISING"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 92.7,
        "confidence_score": 86.9,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "205.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "50,000 cusecs",
            "raw_score": 0.833,
            "contribution": 0.22,
            "weighted_contribution": 18.3,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "98.5% capacity",
            "raw_score": 0.963,
            "contribution": 0.18,
            "weighted_contribution": 17.3,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 205.0,
          "river_discharge_cusecs": 50000,
          "dam_level_pct": 98.5,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": true,
        "conflict_explanation": "1 conflicting ground observation(s) detected",
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.309349Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.309349Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.309266Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.309273Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.309276Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.309278Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.309280Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.309283Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 73.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "4/6 ground reports support assessed risk level",
          "Source count: 8 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-sangam-confluence",
        "name": "Sangamwadi Mula-Mutha Confluence Basin",
        "severity": "CRITICAL",
        "water_level_m": 3.1,
        "flow_velocity_mps": 1.9,
        "risk_score": 92.5,
        "confidence_score": 86.9,
        "polygon_coordinates": [
          [
            73.858,
            18.527
          ],
          [
            73.871,
            18.5375
          ],
          [
            73.881,
            18.535
          ],
          [
            73.8735,
            18.524
          ],
          [
            73.8625,
            18.523
          ],
          [
            73.858,
            18.527
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "205.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "50,000 cusecs",
            "raw_score": 0.833,
            "contribution": 0.22,
            "weighted_contribution": 18.3,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "98.5% capacity",
            "raw_score": 0.963,
            "contribution": 0.18,
            "weighted_contribution": 17.3,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "551 m MSL",
            "raw_score": 0.936,
            "contribution": 0.14,
            "weighted_contribution": 13.1,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "3.1 m",
            "raw_score": 1.0,
            "contribution": 0.1,
            "weighted_contribution": 10.0,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 205.0,
          "river_discharge_cusecs": 50000,
          "dam_level_pct": 98.5,
          "elevation_m": 551.0,
          "water_level_m": 3.1,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": true,
        "conflict_explanation": "1 conflicting ground observation(s) detected",
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.309394Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.309394Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.309266Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.309273Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.309276Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.309278Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.309280Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.309283Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 73.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "4/6 ground reports support assessed risk level",
          "Source count: 8 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-bavdhan-runoff",
        "name": "Paud-Kothrud Western Buffer Zone",
        "severity": "WARNING",
        "water_level_m": 0.4,
        "flow_velocity_mps": 0.8,
        "risk_score": 75.2,
        "confidence_score": 86.9,
        "polygon_coordinates": [
          [
            73.798,
            18.505
          ],
          [
            73.812,
            18.518
          ],
          [
            73.818,
            18.512
          ],
          [
            73.805,
            18.499
          ],
          [
            73.798,
            18.505
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "205.0 mm / 24h",
            "raw_score": 1.0,
            "contribution": 0.28,
            "weighted_contribution": 28.0,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "50,000 cusecs",
            "raw_score": 0.833,
            "contribution": 0.22,
            "weighted_contribution": 18.3,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "CRITICAL"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "98.5% capacity",
            "raw_score": 0.963,
            "contribution": 0.18,
            "weighted_contribution": 17.3,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "580 m MSL",
            "raw_score": 0.319,
            "contribution": 0.14,
            "weighted_contribution": 4.5,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CAUTION"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "0.4 m",
            "raw_score": 0.133,
            "contribution": 0.1,
            "weighted_contribution": 1.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "SAFE"
          },
          {
            "name": "Ground Confirmation",
            "value": "5 verified reports",
            "raw_score": 0.714,
            "contribution": 0.08,
            "weighted_contribution": 5.7,
            "description": "Field-observer reports corroborating sensor data",
            "status": "WARNING"
          }
        ],
        "status": "MONITORING",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "WARNING",
        "risk_inputs": {
          "rainfall_24h_mm": 205.0,
          "river_discharge_cusecs": 50000,
          "dam_level_pct": 98.5,
          "elevation_m": 580.0,
          "water_level_m": 0.4,
          "ground_report_count": 5
        },
        "confidence_level": "HIGH",
        "has_conflict": true,
        "conflict_explanation": "1 conflicting ground observation(s) detected",
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.309431Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.309431Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.309266Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.309273Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.309276Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.309278Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.309280Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.309283Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 73.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "4/6 ground reports support assessed risk level",
          "Source count: 8 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": true,
        "closure_reason": "Sudden flash inundation and carriage-way breach at Paud elevated junction",
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 2100,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 1450,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 1100,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 2480,
        "status": "LIMITED",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 1130,
        "status": "NEAR_CAPACITY",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.309266Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.309273Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-003",
        "timestamp": "2026-09-29T17:25:38.309276Z",
        "latitude": 18.5305,
        "longitude": 73.865,
        "report_type": "STRANDED_PEOPLE",
        "severity": "HIGH",
        "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
        "verified": true,
        "confidence_impact": 0.18
      },
      {
        "id": "rep-block-rd-karve-paud",
        "timestamp": "2026-09-29T17:25:38.309278Z",
        "latitude": 18.511,
        "longitude": 73.831,
        "report_type": "ROAD_BLOCKED",
        "severity": "CRITICAL",
        "description": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-verified-005",
        "timestamp": "2026-09-29T17:25:38.309280Z",
        "latitude": 18.498,
        "longitude": 73.831,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-conflict-006",
        "timestamp": "2026-09-29T17:25:38.309283Z",
        "latitude": 18.508,
        "longitude": 73.834,
        "report_type": "WATERLOGGING",
        "severity": "LOW",
        "description": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
        "verified": false,
        "confidence_impact": -0.2
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 50.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 58.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-10",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-11",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-12",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-13",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 300,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-14",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-15",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-16",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-17",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-18",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-19",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 275,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-20",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-21",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-22",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-23",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-24",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-25",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-26",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 450,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-27",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-28",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-29",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-30",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-31",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 100,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 6300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 13,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 2775,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 6,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 3450,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 7,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0",
          "rte-pop-sangamwadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 2100,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-sp-college-direct"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  },
  {
    "scenario": {
      "id": "pune-monsoon-flood-2026",
      "name": "Pune Monsoon Mutha River Inundation",
      "district": "Pune Urban",
      "description": "Simulated heavy cloudburst upstream at Khadakwasla Catchment causing 45,000 cusecs discharge into Mutha River basin, threatening low-lying urban sectors.",
      "is_simulated": true,
      "banner": "DEMO MODE \u00b7 SIMULATED DATA"
    },
    "system_state": {
      "status": "OPERATIONAL_EQUILIBRIUM",
      "step": 7,
      "sim_time": "T+70:00",
      "sim_time_label": "Final Operational Equilibrium",
      "last_reset": "2026-09-29T17:25:38.297165Z",
      "conflicting_report_count": 0,
      "evacuation_active": true,
      "crowd_multiplier": 1.5,
      "latest_reroute_reason": "Road rd-karve-paud blocked: Sudden flash inundation and carriage-way breach at Paud elevated junction. Recalculating alternative corridors.",
      "weather": {
        "rainfall_24h_mm": 195.0,
        "river_discharge_cusecs": 46000,
        "dam_level_pct": 97.8,
        "trend": "STABLE"
      }
    },
    "hazard_zones": [
      {
        "id": "hz-mutha-riverbank",
        "name": "Mutha Riverbank Inundation Corridor",
        "severity": "CRITICAL",
        "water_level_m": 2.8,
        "flow_velocity_mps": 2.4,
        "risk_score": 91.4,
        "confidence_score": 89.3,
        "polygon_coordinates": [
          [
            73.821,
            18.471
          ],
          [
            73.8285,
            18.484
          ],
          [
            73.8365,
            18.501
          ],
          [
            73.842,
            18.5135
          ],
          [
            73.8485,
            18.5215
          ],
          [
            73.864,
            18.5315
          ],
          [
            73.8675,
            18.529
          ],
          [
            73.8525,
            18.517
          ],
          [
            73.8445,
            18.508
          ],
          [
            73.8345,
            18.494
          ],
          [
            73.8265,
            18.477
          ],
          [
            73.821,
            18.471
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "195.0 mm / 24h",
            "raw_score": 0.975,
            "contribution": 0.28,
            "weighted_contribution": 27.3,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "46,000 cusecs",
            "raw_score": 0.767,
            "contribution": 0.22,
            "weighted_contribution": 16.9,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "WARNING"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "97.8% capacity",
            "raw_score": 0.945,
            "contribution": 0.18,
            "weighted_contribution": 17.0,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "548 m MSL",
            "raw_score": 1.0,
            "contribution": 0.14,
            "weighted_contribution": 14.0,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "2.8 m",
            "raw_score": 0.933,
            "contribution": 0.1,
            "weighted_contribution": 9.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "6 verified reports",
            "raw_score": 0.857,
            "contribution": 0.08,
            "weighted_contribution": 6.9,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CRITICAL"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 195.0,
          "river_discharge_cusecs": 46000,
          "dam_level_pct": 97.8,
          "elevation_m": 548.0,
          "water_level_m": 2.8,
          "ground_report_count": 6
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.311128Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.311128Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.311052Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.311057Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.311060Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.311062Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.311064Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.311066Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Central Disaster Command confirms complete evacuation equilibrium and verified operational posture across all sectors.",
            "timestamp": "2026-09-29T17:25:38.311069Z",
            "relevance": 0.1,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5140, Lng 73.8380"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "5/7 ground reports support assessed risk level",
          "Source count: 9 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-sangam-confluence",
        "name": "Sangamwadi Mula-Mutha Confluence Basin",
        "severity": "CRITICAL",
        "water_level_m": 3.1,
        "flow_velocity_mps": 1.9,
        "risk_score": 91.1,
        "confidence_score": 89.3,
        "polygon_coordinates": [
          [
            73.858,
            18.527
          ],
          [
            73.871,
            18.5375
          ],
          [
            73.881,
            18.535
          ],
          [
            73.8735,
            18.524
          ],
          [
            73.8625,
            18.523
          ],
          [
            73.858,
            18.527
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "195.0 mm / 24h",
            "raw_score": 0.975,
            "contribution": 0.28,
            "weighted_contribution": 27.3,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "46,000 cusecs",
            "raw_score": 0.767,
            "contribution": 0.22,
            "weighted_contribution": 16.9,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "WARNING"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "97.8% capacity",
            "raw_score": 0.945,
            "contribution": 0.18,
            "weighted_contribution": 17.0,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "551 m MSL",
            "raw_score": 0.936,
            "contribution": 0.14,
            "weighted_contribution": 13.1,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CRITICAL"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "3.1 m",
            "raw_score": 1.0,
            "contribution": 0.1,
            "weighted_contribution": 10.0,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "CRITICAL"
          },
          {
            "name": "Ground Confirmation",
            "value": "6 verified reports",
            "raw_score": 0.857,
            "contribution": 0.08,
            "weighted_contribution": 6.9,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CRITICAL"
          }
        ],
        "status": "ACTIVE",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "CRITICAL",
        "risk_inputs": {
          "rainfall_24h_mm": 195.0,
          "river_discharge_cusecs": 46000,
          "dam_level_pct": 97.8,
          "elevation_m": 551.0,
          "water_level_m": 3.1,
          "ground_report_count": 6
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.311170Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.311170Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.311052Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.311057Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.311060Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.311062Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.311064Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.311066Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Central Disaster Command confirms complete evacuation equilibrium and verified operational posture across all sectors.",
            "timestamp": "2026-09-29T17:25:38.311069Z",
            "relevance": 0.1,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5140, Lng 73.8380"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "5/7 ground reports support assessed risk level",
          "Source count: 9 independent inputs",
          "Sensor coverage: 85%"
        ]
      },
      {
        "id": "hz-bavdhan-runoff",
        "name": "Paud-Kothrud Western Buffer Zone",
        "severity": "WARNING",
        "water_level_m": 0.4,
        "flow_velocity_mps": 0.8,
        "risk_score": 73.8,
        "confidence_score": 89.3,
        "polygon_coordinates": [
          [
            73.798,
            18.505
          ],
          [
            73.812,
            18.518
          ],
          [
            73.818,
            18.512
          ],
          [
            73.805,
            18.499
          ],
          [
            73.798,
            18.505
          ]
        ],
        "contributing_factors": [
          {
            "name": "Catchment Rainfall",
            "value": "195.0 mm / 24h",
            "raw_score": 0.975,
            "contribution": 0.28,
            "weighted_contribution": 27.3,
            "description": "Upstream cloud-burst precipitation feeding Mutha basin",
            "status": "CRITICAL"
          },
          {
            "name": "River Discharge",
            "value": "46,000 cusecs",
            "raw_score": 0.767,
            "contribution": 0.22,
            "weighted_contribution": 16.9,
            "description": "Khadakwasla outflow rate into Mutha River",
            "status": "WARNING"
          },
          {
            "name": "Dam Reservoir Pressure",
            "value": "97.8% capacity",
            "raw_score": 0.945,
            "contribution": 0.18,
            "weighted_contribution": 17.0,
            "description": "Khadakwasla dam fill level driving spillway release",
            "status": "CRITICAL"
          },
          {
            "name": "Elevation Exposure",
            "value": "580 m MSL",
            "raw_score": 0.319,
            "contribution": 0.14,
            "weighted_contribution": 4.5,
            "description": "Zone sits below safe-ground threshold (595 m MSL)",
            "status": "CAUTION"
          },
          {
            "name": "Observed Inundation Depth",
            "value": "0.4 m",
            "raw_score": 0.133,
            "contribution": 0.1,
            "weighted_contribution": 1.3,
            "description": "Water depth reported by field observers / sensor telemetry",
            "status": "SAFE"
          },
          {
            "name": "Ground Confirmation",
            "value": "6 verified reports",
            "raw_score": 0.857,
            "contribution": 0.08,
            "weighted_contribution": 6.9,
            "description": "Field-observer reports corroborating sensor data",
            "status": "CRITICAL"
          }
        ],
        "status": "MONITORING",
        "updated_at": "2026-09-27T19:30:00Z",
        "risk_level": "WARNING",
        "risk_inputs": {
          "rainfall_24h_mm": 195.0,
          "river_discharge_cusecs": 46000,
          "dam_level_pct": 97.8,
          "elevation_m": 580.0,
          "water_level_m": 0.4,
          "ground_report_count": 6
        },
        "confidence_level": "HIGH",
        "has_conflict": false,
        "conflict_explanation": null,
        "evidence_items": [
          {
            "source": "Environmental Monitoring",
            "type": "SENSOR",
            "value": "Catchment rainfall + discharge telemetry",
            "timestamp": "2026-09-29T17:25:38.311205Z",
            "relevance": 0.9,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Dam Outflow Control",
            "type": "OFFICIAL",
            "value": "Khadakwasla spillway release record",
            "timestamp": "2026-09-29T17:25:38.311205Z",
            "relevance": 0.85,
            "role": "SUPPORTING",
            "freshness": "0m (fresh)"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
            "timestamp": "2026-09-29T17:25:38.311052Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4835, Lng 73.8275"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
            "timestamp": "2026-09-29T17:25:38.311057Z",
            "relevance": 0.2,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5020, Lng 73.8380"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
            "timestamp": "2026-09-29T17:25:38.311060Z",
            "relevance": 0.18,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5305, Lng 73.8650"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
            "timestamp": "2026-09-29T17:25:38.311062Z",
            "relevance": 0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5110, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
            "timestamp": "2026-09-29T17:25:38.311064Z",
            "relevance": 0.15,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.4980, Lng 73.8310"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
            "timestamp": "2026-09-29T17:25:38.311066Z",
            "relevance": -0.2,
            "role": "CONFLICTING",
            "freshness": "field",
            "location": "Lat 18.5080, Lng 73.8340"
          },
          {
            "source": "Ground Observer Report",
            "type": "CITIZEN",
            "value": "Central Disaster Command confirms complete evacuation equilibrium and verified operational posture across all sectors.",
            "timestamp": "2026-09-29T17:25:38.311069Z",
            "relevance": 0.1,
            "role": "SUPPORTING",
            "freshness": "field",
            "location": "Lat 18.5140, Lng 73.8380"
          }
        ],
        "confidence_components": {
          "freshness": 100.0,
          "agreement": 78.0,
          "quantity": 100.0,
          "completeness": 85.0
        },
        "confidence_reasons": [
          "Data freshness: 0m (fresh)",
          "5/7 ground reports support assessed risk level",
          "Source count: 9 independent inputs",
          "Sensor coverage: 85%"
        ]
      }
    ],
    "roads": [
      {
        "id": "rd-sinhagad-low",
        "name": "Sinhagad Road (Rajaram to Dandekar Brg)",
        "start_node": "node_vitthalwadi",
        "end_node": "node_dandekar_brg",
        "distance_m": 3800,
        "base_travel_time_min": 8.0,
        "capacity_vph": 2400,
        "current_load_vph": 120,
        "hazard_exposure": 0.95,
        "is_blocked": true,
        "closure_reason": "1.2m standing flood water across 800m carriage-way. Traffic halted.",
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.832,
            18.492
          ],
          [
            73.838,
            18.502
          ],
          [
            73.8435,
            18.51
          ]
        ],
        "condition": "FLOOD_SUBMERGED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-vitthalwadi-bypass",
        "name": "Vitthalwadi - Karve High-Ground Bypass",
        "start_node": "node_vitthalwadi",
        "end_node": "node_karve_putala",
        "distance_m": 3600,
        "base_travel_time_min": 7.0,
        "capacity_vph": 2000,
        "current_load_vph": 850,
        "hazard_exposure": 0.15,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "ELEVATED_BYPASS_CLEAR",
        "status": "NORMAL"
      },
      {
        "id": "rd-karve-paud",
        "name": "Karve Road - Paud Elevated Corridor",
        "start_node": "node_alka_talkies",
        "end_node": "node_paud_phata",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 2800,
        "current_load_vph": 1320,
        "hazard_exposure": 0.12,
        "is_blocked": true,
        "closure_reason": "Sudden flash inundation and carriage-way breach at Paud elevated junction",
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.831,
            18.511
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "BLOCKED"
      },
      {
        "id": "rd-karve-kothrud",
        "name": "Karve Statue to Kothrud Depot Spine",
        "start_node": "node_karve_putala",
        "end_node": "node_kothrud_depot",
        "distance_m": 1900,
        "base_travel_time_min": 4.0,
        "capacity_vph": 2600,
        "current_load_vph": 920,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-karve-link",
        "name": "Paud Phata to Karve Statue Link",
        "start_node": "node_paud_phata",
        "end_node": "node_karve_putala",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2400,
        "current_load_vph": 600,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.82,
            18.508
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-paud-mit-link",
        "name": "Paud Road to MIT Evacuation Link",
        "start_node": "node_paud_phata",
        "end_node": "node_mit_campus",
        "distance_m": 1800,
        "base_travel_time_min": 3.5,
        "capacity_vph": 2200,
        "current_load_vph": 650,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "DRY_ELEVATED",
        "status": "NORMAL"
      },
      {
        "id": "rd-kothrud-mit-ring",
        "name": "Kothrud Depot to MIT Sports Arena Ridge",
        "start_node": "node_kothrud_depot",
        "end_node": "node_mit_campus",
        "distance_m": 2200,
        "base_travel_time_min": 4.5,
        "capacity_vph": 1800,
        "current_load_vph": 520,
        "hazard_exposure": 0.05,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "condition": "CLEAR_RIDGE",
        "status": "NORMAL"
      },
      {
        "id": "rd-jm-fc-spine",
        "name": "JM Road / FC Road Shivajinagar Spine",
        "start_node": "node_alka_talkies",
        "end_node": "node_shivajinagar",
        "distance_m": 2100,
        "base_travel_time_min": 5.0,
        "capacity_vph": 2400,
        "current_load_vph": 2100,
        "hazard_exposure": 0.38,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.847,
            18.525
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "PASSABLE_CURB_OVERFLOW",
        "status": "NORMAL"
      },
      {
        "id": "rd-sangam-shivaji",
        "name": "Sangamwadi - Shivajinagar Relief Link",
        "start_node": "node_sangamwadi_jnc",
        "end_node": "node_shivajinagar",
        "distance_m": 2200,
        "base_travel_time_min": 5.5,
        "capacity_vph": 2000,
        "current_load_vph": 1400,
        "hazard_exposure": 0.55,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ]
        ],
        "condition": "SLOW_STANDING_WATER_20CM",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sp-link",
        "name": "Sadashiv Peth - SP College Approach",
        "start_node": "node_alka_talkies",
        "end_node": "node_sadashiv_peth",
        "distance_m": 1100,
        "base_travel_time_min": 2.5,
        "capacity_vph": 1600,
        "current_load_vph": 980,
        "hazard_exposure": 0.22,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-sadashiv-sarasbaug",
        "name": "SP College to Saras Baug High Street",
        "start_node": "node_sadashiv_peth",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1200,
        "base_travel_time_min": 2.5,
        "capacity_vph": 2200,
        "current_load_vph": 1100,
        "hazard_exposure": 0.1,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "OPERATIONAL",
        "status": "NORMAL"
      },
      {
        "id": "rd-tilak-shastri",
        "name": "Tilak Road - Shastri Corridor",
        "start_node": "node_dandekar_brg",
        "end_node": "node_sarasbaug_jnc",
        "distance_m": 1900,
        "base_travel_time_min": 6.5,
        "capacity_vph": 1800,
        "current_load_vph": 1690,
        "hazard_exposure": 0.48,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.838,
            18.502
          ],
          [
            73.844,
            18.509
          ],
          [
            73.849,
            18.506
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "condition": "HEAVY_CONGESTION_WATERLOGGED",
        "status": "NORMAL"
      },
      {
        "id": "rd-pune-satara",
        "name": "Pune-Satara Highway Connector",
        "start_node": "node_sarasbaug_jnc",
        "end_node": "node_satara_rd_entry",
        "distance_m": 3400,
        "base_travel_time_min": 6.0,
        "capacity_vph": 3200,
        "current_load_vph": 1420,
        "hazard_exposure": 0.08,
        "is_blocked": false,
        "closure_reason": null,
        "coordinates": [
          [
            73.8558,
            18.5012
          ],
          [
            73.856,
            18.488
          ],
          [
            73.854,
            18.472
          ]
        ],
        "condition": "CLEAR_HIGHWAY",
        "status": "NORMAL"
      }
    ],
    "shelters": [
      {
        "id": "sh-kothrud-natya",
        "name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "latitude": 18.5025,
        "longitude": 73.8075,
        "total_capacity": 2500,
        "current_occupancy": 1450,
        "status": "AVAILABLE",
        "elevation_m": 582.0,
        "amenities": [
          "Medical Bay",
          "Clean Drinking Water",
          "Emergency Generator",
          "Comm Radio"
        ],
        "contact_number": "+91-20-2544-0101"
      },
      {
        "id": "sh-mit-sports",
        "name": "MIT Paud Road Evacuation Complex",
        "latitude": 18.5178,
        "longitude": 73.8152,
        "total_capacity": 1800,
        "current_occupancy": 1100,
        "status": "AVAILABLE",
        "elevation_m": 579.5,
        "amenities": [
          "Indoor Arena",
          "First Aid",
          "Food Stock 72h"
        ],
        "contact_number": "+91-20-2544-0202"
      },
      {
        "id": "sh-sarasbaug",
        "name": "Saras Baug Emergency Coordination Ground",
        "latitude": 18.5012,
        "longitude": 73.8558,
        "total_capacity": 3000,
        "current_occupancy": 2480,
        "status": "LIMITED",
        "elevation_m": 566.0,
        "amenities": [
          "Field Kitchen",
          "Ambulance Station",
          "Sanitation Units"
        ],
        "contact_number": "+91-20-2444-0303"
      },
      {
        "id": "sh-sp-college",
        "name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "latitude": 18.5085,
        "longitude": 73.8498,
        "total_capacity": 1200,
        "current_occupancy": 1130,
        "status": "NEAR_CAPACITY",
        "elevation_m": 564.2,
        "amenities": [
          "Basic First Aid",
          "Dry Rations"
        ],
        "contact_number": "+91-20-2444-0404"
      }
    ],
    "population_zones": [
      {
        "id": "pop-ekta-nagar",
        "name": "Ekta Nagari / Vitthalwadi Riverbank",
        "latitude": 18.484,
        "longitude": 73.828,
        "estimated_population": 4200,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-kothrud-natya",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-pulachi-wadi",
        "name": "Pulachi Wadi / Z-Bridge Lowlands",
        "latitude": 18.5155,
        "longitude": 73.843,
        "estimated_population": 1850,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-mit-sports",
        "assigned_route_id": "rd-karve-paud"
      },
      {
        "id": "pop-sangamwadi",
        "name": "Sangamwadi Confluence Settlement",
        "latitude": 18.531,
        "longitude": 73.8655,
        "estimated_population": 2300,
        "vulnerability_level": "HIGH",
        "evacuation_urgency": "IMMEDIATE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-jm-fc-spine"
      },
      {
        "id": "pop-sadashiv-low",
        "name": "Sadashiv Peth / Shastri Rd Fringe",
        "latitude": 18.507,
        "longitude": 73.846,
        "estimated_population": 1400,
        "vulnerability_level": "MEDIUM",
        "evacuation_urgency": "PREPARE",
        "assigned_shelter_id": "sh-sarasbaug",
        "assigned_route_id": "rd-tilak-shastri"
      }
    ],
    "ground_reports": [
      {
        "id": "rep-001",
        "timestamp": "2026-09-29T17:25:38.311052Z",
        "latitude": 18.4835,
        "longitude": 73.8275,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "Mutha river breached retaining wall near Vitthalwadi temple. Water rushing into ground floors of residential societies.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-002",
        "timestamp": "2026-09-29T17:25:38.311057Z",
        "latitude": 18.502,
        "longitude": 73.838,
        "report_type": "ROAD_BLOCKED",
        "severity": "HIGH",
        "description": "Sinhagad Road completely impassable between Rajaram Bridge and Dandekar Bridge. Multiple submerged vehicles.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-003",
        "timestamp": "2026-09-29T17:25:38.311060Z",
        "latitude": 18.5305,
        "longitude": 73.865,
        "report_type": "STRANDED_PEOPLE",
        "severity": "HIGH",
        "description": "Approx 80 residents stranded at Sangamwadi community hall upper floor. Evacuation teams moving.",
        "verified": true,
        "confidence_impact": 0.18
      },
      {
        "id": "rep-block-rd-karve-paud",
        "timestamp": "2026-09-29T17:25:38.311062Z",
        "latitude": 18.511,
        "longitude": 73.831,
        "report_type": "ROAD_BLOCKED",
        "severity": "CRITICAL",
        "description": "CRITICAL ROAD BREACH: Karve Road - Paud Elevated Corridor completely impassable. Sudden flash flood breach and tree fall.",
        "verified": true,
        "confidence_impact": 0.2
      },
      {
        "id": "rep-verified-005",
        "timestamp": "2026-09-29T17:25:38.311064Z",
        "latitude": 18.498,
        "longitude": 73.831,
        "report_type": "WATERLOGGING",
        "severity": "HIGH",
        "description": "NDRF Field Unit 2 confirms JM/FC Road northern spine and Vitthalwadi bypass clear for redirected evacuees.",
        "verified": true,
        "confidence_impact": 0.15
      },
      {
        "id": "rep-conflict-006",
        "timestamp": "2026-09-29T17:25:38.311066Z",
        "latitude": 18.508,
        "longitude": 73.834,
        "report_type": "WATERLOGGING",
        "severity": "LOW",
        "description": "Citizen social post claims dry road & receding water at Vitthalwadi margin (unverified contradiction).",
        "verified": false,
        "confidence_impact": -0.2
      },
      {
        "id": "rep-verified-007",
        "timestamp": "2026-09-29T17:25:38.311069Z",
        "latitude": 18.514,
        "longitude": 73.838,
        "report_type": "INFRASTRUCTURE_DAMAGE",
        "severity": "HIGH",
        "description": "Central Disaster Command confirms complete evacuation equilibrium and verified operational posture across all sectors.",
        "verified": true,
        "confidence_impact": 0.1
      }
    ],
    "routes": [
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 5500,
        "eta_minutes": 11.0,
        "total_cost": 20.23,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 6600,
        "eta_minutes": 13.0,
        "total_cost": 25.41,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "total_distance_m": 7700,
        "eta_minutes": 15.5,
        "total_cost": 27.79,
        "risk_level": "LOW",
        "hazard_score": 0.08,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_kothrud_depot",
          "node_mit_campus"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-karve-kothrud",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.8075,
            18.5025
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8152,
            18.5178
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "origin_cluster_id": "pop-ekta-nagar",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "total_distance_m": 8800,
        "eta_minutes": 17.5,
        "total_cost": 32.97,
        "risk_level": "LOW",
        "hazard_score": 0.09,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.42,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_vitthalwadi",
          "node_karve_putala",
          "node_paud_phata",
          "node_mit_campus",
          "node_kothrud_depot"
        ],
        "road_ids": [
          "rd-vitthalwadi-bypass",
          "rd-paud-karve-link",
          "rd-paud-mit-link",
          "rd-kothrud-mit-ring"
        ],
        "coordinates": [
          [
            73.828,
            18.484
          ],
          [
            73.8245,
            18.481
          ],
          [
            73.819,
            18.491
          ],
          [
            73.818,
            18.501
          ],
          [
            73.82,
            18.508
          ],
          [
            73.831,
            18.511
          ],
          [
            73.824,
            18.514
          ],
          [
            73.8152,
            18.5178
          ],
          [
            73.811,
            18.511
          ],
          [
            73.8075,
            18.5025
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 1100,
        "eta_minutes": 2.5,
        "total_cost": 10.7,
        "risk_level": "MODERATE",
        "hazard_score": 0.22,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-pulachi-wadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 2300,
        "eta_minutes": 5.0,
        "total_cost": 18.7,
        "risk_level": "LOW",
        "hazard_score": 0.16,
        "congestion_status": "CAUTION",
        "max_congestion_ratio": 0.61,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.843,
            18.5155
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Moderate corridor density; monitor bottleneck points",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 5400,
        "eta_minutes": 13.0,
        "total_cost": 50.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.38,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sangamwadi",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 6600,
        "eta_minutes": 15.5,
        "total_cost": 58.25,
        "risk_level": "MODERATE",
        "hazard_score": 0.31,
        "congestion_status": "CONGESTED",
        "max_congestion_ratio": 0.88,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sangamwadi_jnc",
          "node_shivajinagar",
          "node_alka_talkies",
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sangam-shivaji",
          "rd-jm-fc-spine",
          "rd-sadashiv-sp-link",
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.8655,
            18.531
          ],
          [
            73.858,
            18.5315
          ],
          [
            73.851,
            18.532
          ],
          [
            73.847,
            18.525
          ],
          [
            73.8435,
            18.51
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Moderate flood proximity; elevated corridor safe",
          "High crowd and vehicular density approaching limit",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "total_distance_m": 100,
        "eta_minutes": 1.5,
        "total_cost": 1.0,
        "risk_level": "SAFE",
        "hazard_score": 0.0,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.1,
        "is_recommended": true,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth"
        ],
        "road_ids": [],
        "coordinates": [
          [
            73.8498,
            18.5085
          ]
        ],
        "reasons": [
          "Direct immediate shelter proximity",
          "No hazard exposure",
          "Fully operational"
        ],
        "route_type": "PRIMARY_RECOMMENDED"
      },
      {
        "route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "name": "Via Sadashiv Peth -> Saras Baug",
        "origin_cluster_id": "pop-sadashiv-low",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "total_distance_m": 1200,
        "eta_minutes": 2.5,
        "total_cost": 8.0,
        "risk_level": "LOW",
        "hazard_score": 0.1,
        "congestion_status": "NORMAL",
        "max_congestion_ratio": 0.5,
        "is_recommended": false,
        "is_viable": true,
        "path_nodes": [
          "node_sadashiv_peth",
          "node_sarasbaug_jnc"
        ],
        "road_ids": [
          "rd-sadashiv-sarasbaug"
        ],
        "coordinates": [
          [
            73.846,
            18.507
          ],
          [
            73.8498,
            18.5085
          ],
          [
            73.8558,
            18.5012
          ]
        ],
        "reasons": [
          "Low flood inundation exposure (< 20%)",
          "Smooth traffic flow; under 60% corridor capacity",
          "Route completely avoids all confirmed submerged road closures"
        ],
        "route_type": "ALTERNATIVE"
      }
    ],
    "group_assignments": [
      {
        "group_id": "GRP-EKTA-NAGAR-01",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-02",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-03",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-04",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-05",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-06",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-07",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-08",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-09",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-10",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 13.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-11",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-mit-sports-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot -> MIT Paud Road Campus",
        "destination_shelter_id": "sh-mit-sports",
        "destination_shelter_name": "MIT Paud Road Evacuation Complex",
        "eta_minutes": 15.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-12",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 500,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Paud Phata -> MIT Paud Road Campus -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 17.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-EKTA-NAGAR-13",
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "headcount": 300,
        "assigned_route_id": "rte-pop-ekta-nagar-sh-kothrud-natya-p0",
        "assigned_route_name": "Via Vitthalwadi -> Karve Statue -> Kothrud Depot",
        "destination_shelter_id": "sh-kothrud-natya",
        "destination_shelter_name": "Kothrud Disaster Relief Center (Yashwantrao Chavan Complex)",
        "eta_minutes": 11.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-14",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-15",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-16",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-17",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-18",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 500,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sp-college-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 2.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-PULACHI-WADI-19",
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "headcount": 275,
        "assigned_route_id": "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 5.0,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-20",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-21",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-22",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-23",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-24",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-25",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 15.5,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SANGAMWADI-26",
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "headcount": 450,
        "assigned_route_id": "rte-pop-sangamwadi-sh-sp-college-p0",
        "assigned_route_name": "Via Sangamwadi Confluence Point -> Shivajinagar -> Alka Talkies -> Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 13.0,
        "risk_level": "MODERATE",
        "status": "DISPATCHED",
        "dispatch_priority": "IMMEDIATE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-27",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-28",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-29",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-30",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 500,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sarasbaug-p0",
        "assigned_route_name": "Via Sadashiv Peth -> Saras Baug",
        "destination_shelter_id": "sh-sarasbaug",
        "destination_shelter_name": "Saras Baug Emergency Coordination Ground",
        "eta_minutes": 2.5,
        "risk_level": "LOW",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      },
      {
        "group_id": "GRP-SADASHIV-LOW-31",
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "headcount": 100,
        "assigned_route_id": "rte-pop-sadashiv-low-sh-sp-college-direct",
        "assigned_route_name": "Direct Shelter Access -> SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "destination_shelter_id": "sh-sp-college",
        "destination_shelter_name": "SP College Pavilion & Relief Shelter, Sadashiv Peth",
        "eta_minutes": 1.5,
        "risk_level": "SAFE",
        "status": "DISPATCHED",
        "dispatch_priority": "PREPARE"
      }
    ],
    "cluster_summaries": [
      {
        "cluster_id": "pop-ekta-nagar",
        "cluster_name": "Ekta Nagari / Vitthalwadi Riverbank",
        "total_evacuees": 6300,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 13,
        "allocated_routes": [
          "rte-pop-ekta-nagar-sh-kothrud-natya-p1",
          "rte-pop-ekta-nagar-sh-mit-sports-p0",
          "rte-pop-ekta-nagar-sh-mit-sports-p1",
          "rte-pop-ekta-nagar-sh-kothrud-natya-p0"
        ]
      },
      {
        "cluster_id": "pop-pulachi-wadi",
        "cluster_name": "Pulachi Wadi / Z-Bridge Lowlands",
        "total_evacuees": 2775,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 6,
        "allocated_routes": [
          "rte-pop-pulachi-wadi-sh-sarasbaug-p0",
          "rte-pop-pulachi-wadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sangamwadi",
        "cluster_name": "Sangamwadi Confluence Settlement",
        "total_evacuees": 3450,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 7,
        "allocated_routes": [
          "rte-pop-sangamwadi-sh-sarasbaug-p0",
          "rte-pop-sangamwadi-sh-sp-college-p0"
        ]
      },
      {
        "cluster_id": "pop-sadashiv-low",
        "cluster_name": "Sadashiv Peth / Shastri Rd Fringe",
        "total_evacuees": 2100,
        "status": "ROUTED_OPTIMAL",
        "error_message": null,
        "assigned_groups_count": 5,
        "allocated_routes": [
          "rte-pop-sadashiv-low-sh-sarasbaug-p0",
          "rte-pop-sadashiv-low-sh-sp-college-direct"
        ]
      }
    ],
    "no_reliable_route_clusters": []
  }
] as SimulationState[];
