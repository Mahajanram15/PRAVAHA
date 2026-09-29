"""
Risk Engine — Phase 2
Deterministic, weighted flood-risk scoring.

Inputs:
  - rainfall_24h_mm        (environmental)
  - river_discharge_cusecs (environmental)
  - dam_level_pct          (environmental)
  - elevation_m            (topographic)
  - water_level_m          (observed)
  - ground_report_count    (social/field)
  - road_blocked           (operational)
  - conflicting_report     (social — counts against confidence, NOT risk)

Output:
  RiskAssessment:
    risk_score:   0–100  (float)
    risk_level:   CRITICAL | WARNING | CAUTION | SAFE
    factors:      list of RiskFactor
"""

from typing import List, Dict, Any

# ---------------------------------------------------------------------------
# Factor weights — must sum to 1.0
# ---------------------------------------------------------------------------
FACTOR_WEIGHTS: Dict[str, float] = {
    "catchment_rainfall":   0.28,
    "river_discharge":      0.22,
    "dam_pressure":         0.18,
    "elevation_exposure":   0.14,
    "observed_water_level": 0.10,
    "ground_confirmation":  0.08,
}

assert abs(sum(FACTOR_WEIGHTS.values()) - 1.0) < 1e-6, "Weights must sum to 1.0"


def _score_rainfall(mm: float) -> float:
    """Normalise 24-h rainfall to 0–1 contribution score."""
    # Thresholds: 0 mm → 0.0 ; 200 mm → 1.0
    return min(mm / 200.0, 1.0)


def _score_discharge(cusecs: float) -> float:
    """Normalise river discharge to 0–1. Danger mark for Pune ~30k cusecs."""
    return min(cusecs / 60_000, 1.0)


def _score_dam(pct: float) -> float:
    """Normalise dam level percentage to 0–1 (100 % full = 1.0)."""
    # Risk rises steeply above 90 %
    if pct <= 80:
        return pct / 160.0
    return 0.5 + (pct - 80.0) / 40.0


def _score_elevation(elevation_m: float) -> float:
    """
    Lower elevation → higher risk.
    Pune river zones sit ~548–570 m MSL; safe high-ground ≥ 590 m.
    """
    reference_safe = 595.0
    reference_critical = 548.0
    raw = (reference_safe - elevation_m) / (reference_safe - reference_critical)
    return min(max(raw, 0.0), 1.0)


def _score_water_level(water_m: float) -> float:
    """Observed/simulated inundation depth → 0–1. 3 m or above = full score."""
    return min(water_m / 3.0, 1.0)


def _score_ground_reports(count: int) -> float:
    """
    0 reports → 0.0 contribution (no field confirmation adds no ground score).
    7+ reports → 1.0.
    """
    return min(count / 7.0, 1.0)


def _level_from_score(score: float) -> str:
    if score >= 80:
        return "CRITICAL"
    if score >= 55:
        return "WARNING"
    if score >= 30:
        return "CAUTION"
    return "SAFE"


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

class RiskEngine:
    """
    Deterministic weighted flood-risk engine.
    All inputs are explicit; no black-box ML is involved.
    """

    def assess_zone(
        self,
        *,
        rainfall_24h_mm: float,
        river_discharge_cusecs: float,
        dam_level_pct: float,
        elevation_m: float,
        water_level_m: float,
        ground_report_count: int,
    ) -> Dict[str, Any]:
        """
        Compute risk for one hazard zone.

        Returns a dict compatible with the frontend RiskAssessment type.
        """
        raw_scores = {
            "catchment_rainfall":   _score_rainfall(rainfall_24h_mm),
            "river_discharge":      _score_discharge(river_discharge_cusecs),
            "dam_pressure":         _score_dam(dam_level_pct),
            "elevation_exposure":   _score_elevation(elevation_m),
            "observed_water_level": _score_water_level(water_level_m),
            "ground_confirmation":  _score_ground_reports(ground_report_count),
        }

        # Weighted sum → 0–100
        weighted_sum = sum(
            raw_scores[k] * FACTOR_WEIGHTS[k] for k in FACTOR_WEIGHTS
        )
        risk_score = round(min(weighted_sum * 100, 100.0), 1)

        factors = [
            {
                "name":         "Catchment Rainfall",
                "value":        f"{rainfall_24h_mm:.1f} mm / 24h",
                "raw_score":    round(raw_scores["catchment_rainfall"], 3),
                "contribution": FACTOR_WEIGHTS["catchment_rainfall"],
                "weighted_contribution": round(
                    raw_scores["catchment_rainfall"] * FACTOR_WEIGHTS["catchment_rainfall"] * 100, 1
                ),
                "description":  "Upstream cloud-burst precipitation feeding Mutha basin",
                "status":       _level_from_score(raw_scores["catchment_rainfall"] * 100),
            },
            {
                "name":         "River Discharge",
                "value":        f"{int(river_discharge_cusecs):,} cusecs",
                "raw_score":    round(raw_scores["river_discharge"], 3),
                "contribution": FACTOR_WEIGHTS["river_discharge"],
                "weighted_contribution": round(
                    raw_scores["river_discharge"] * FACTOR_WEIGHTS["river_discharge"] * 100, 1
                ),
                "description":  "Khadakwasla outflow rate into Mutha River",
                "status":       _level_from_score(raw_scores["river_discharge"] * 100),
            },
            {
                "name":         "Dam Reservoir Pressure",
                "value":        f"{dam_level_pct:.1f}% capacity",
                "raw_score":    round(raw_scores["dam_pressure"], 3),
                "contribution": FACTOR_WEIGHTS["dam_pressure"],
                "weighted_contribution": round(
                    raw_scores["dam_pressure"] * FACTOR_WEIGHTS["dam_pressure"] * 100, 1
                ),
                "description":  "Khadakwasla dam fill level driving spillway release",
                "status":       _level_from_score(raw_scores["dam_pressure"] * 100),
            },
            {
                "name":         "Elevation Exposure",
                "value":        f"{elevation_m:.0f} m MSL",
                "raw_score":    round(raw_scores["elevation_exposure"], 3),
                "contribution": FACTOR_WEIGHTS["elevation_exposure"],
                "weighted_contribution": round(
                    raw_scores["elevation_exposure"] * FACTOR_WEIGHTS["elevation_exposure"] * 100, 1
                ),
                "description":  "Zone sits below safe-ground threshold (595 m MSL)",
                "status":       _level_from_score(raw_scores["elevation_exposure"] * 100),
            },
            {
                "name":         "Observed Inundation Depth",
                "value":        f"{water_level_m:.1f} m",
                "raw_score":    round(raw_scores["observed_water_level"], 3),
                "contribution": FACTOR_WEIGHTS["observed_water_level"],
                "weighted_contribution": round(
                    raw_scores["observed_water_level"] * FACTOR_WEIGHTS["observed_water_level"] * 100, 1
                ),
                "description":  "Water depth reported by field observers / sensor telemetry",
                "status":       _level_from_score(raw_scores["observed_water_level"] * 100),
            },
            {
                "name":         "Ground Confirmation",
                "value":        f"{ground_report_count} verified reports",
                "raw_score":    round(raw_scores["ground_confirmation"], 3),
                "contribution": FACTOR_WEIGHTS["ground_confirmation"],
                "weighted_contribution": round(
                    raw_scores["ground_confirmation"] * FACTOR_WEIGHTS["ground_confirmation"] * 100, 1
                ),
                "description":  "Field-observer reports corroborating sensor data",
                "status":       _level_from_score(raw_scores["ground_confirmation"] * 100),
            },
        ]

        return {
            "risk_score":  risk_score,
            "risk_level":  _level_from_score(risk_score),
            "factors":     factors,
            "inputs": {
                "rainfall_24h_mm":        rainfall_24h_mm,
                "river_discharge_cusecs": river_discharge_cusecs,
                "dam_level_pct":          dam_level_pct,
                "elevation_m":            elevation_m,
                "water_level_m":          water_level_m,
                "ground_report_count":    ground_report_count,
            },
        }


risk_engine = RiskEngine()
