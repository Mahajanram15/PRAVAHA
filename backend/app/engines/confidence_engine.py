"""
Confidence Engine — Phase 2
Produces a confidence score that is independent of risk.

Confidence measures HOW RELIABLE the available evidence is —
not how dangerous the situation is.

Factors considered:
  - evidence freshness  (how old is the newest data?)
  - source agreement    (do sensor + ground reports agree?)
  - evidence quantity   (how many independent sources?)
  - conflicting reports (contradict the dominant picture → reduce confidence)
  - missing evidence    (gaps in sensor coverage)

Confidence is separate from Risk:
  High Risk + Low Confidence = situation looks dangerous but evidence is weak
  Low Risk  + High Confidence = situation looks safe and evidence is solid
"""

from datetime import datetime, timezone
from typing import List, Dict, Any, Tuple


def _freshness_score(last_updated_iso: str) -> Tuple[float, str]:
    """
    Returns a freshness score 0–1.
    Data < 5 min → 1.0 ; > 60 min → 0.2.
    """
    try:
        ts = datetime.fromisoformat(last_updated_iso.replace("Z", "+00:00"))
        age_minutes = (datetime.now(timezone.utc) - ts).total_seconds() / 60
    except Exception:
        return 0.5, "unknown age"

    if age_minutes <= 5:
        return 1.0, f"{int(age_minutes)}m (fresh)"
    if age_minutes <= 20:
        return 0.85, f"{int(age_minutes)}m (recent)"
    if age_minutes <= 60:
        return 0.65, f"{int(age_minutes)}m (aging)"
    return 0.3, f"{int(age_minutes)}m (stale)"


def _source_agreement(ground_reports: List[Dict[str, Any]], risk_level: str) -> Tuple[float, List[str]]:
    """
    Checks whether ground observations agree with the calculated risk level.
    Returns (agreement_score, reasons).

    If risk is CRITICAL/WARNING but ground reports use severity LOW → conflict.
    """
    if not ground_reports:
        return 0.7, ["No ground reports to compare (sensor data only)"]

    supporting = [r for r in ground_reports if r.get("severity") in ("HIGH", "MEDIUM")]
    conflicting = [r for r in ground_reports if r.get("severity") == "LOW"]
    total = len(ground_reports)

    reasons = []

    if risk_level in ("CRITICAL", "WARNING"):
        if conflicting and not supporting:
            reasons.append("⚠ All ground reports show low severity — conflicts with HIGH risk calculation")
            return 0.4, reasons
        if conflicting and supporting:
            ratio = len(conflicting) / total
            if ratio >= 0.5:
                reasons.append(f"⚠ {len(conflicting)}/{total} ground reports conflict with assessed risk level")
                return 0.55, reasons
            reasons.append(f"{len(supporting)}/{total} ground reports support assessed risk level")
            return 0.78, reasons
        reasons.append(f"All {total} ground reports support the assessed risk level")
        return 0.95, reasons

    # CAUTION or SAFE risk
    if supporting and not conflicting:
        reasons.append("Ground reports indicate higher severity than calculated risk")
        return 0.65, reasons
    reasons.append("Ground reports are consistent with calculated risk assessment")
    return 0.85, reasons


def _evidence_quantity_score(source_count: int) -> float:
    """0 sources → 0.3 ; 5+ sources → 1.0 (logarithmic-ish)."""
    if source_count == 0:
        return 0.3
    if source_count == 1:
        return 0.55
    if source_count == 2:
        return 0.72
    if source_count == 3:
        return 0.84
    if source_count == 4:
        return 0.92
    return 1.0


def _level_from_score(score: float) -> str:
    if score >= 80:
        return "HIGH"
    if score >= 60:
        return "MODERATE"
    if score >= 40:
        return "LOW"
    return "VERY_LOW"


class ConfidenceEngine:
    """
    Deterministic, transparent confidence scorer.
    Confidence != Risk.
    """

    # Weights for the four confidence dimensions (must sum to 1.0)
    W_FRESHNESS  = 0.25
    W_AGREEMENT  = 0.35
    W_QUANTITY   = 0.20
    W_COMPLETENESS = 0.20

    def assess_confidence(
        self,
        *,
        risk_level: str,
        last_updated_iso: str,
        ground_reports: List[Dict[str, Any]],
        conflicting_report_count: int,
        sensor_coverage: float,  # 0.0–1.0 (fraction of sensors reporting)
    ) -> Dict[str, Any]:
        """
        Compute a confidence score 0–100.

        Returns a structured dict with score, level, reasons, and evidence items.
        """
        freshness_score, freshness_reason = _freshness_score(last_updated_iso)
        agreement_score, agreement_reasons = _source_agreement(ground_reports, risk_level)

        source_count = len(ground_reports) + (1 if sensor_coverage > 0 else 0) + 1  # +1 for environmental
        quantity_score = _evidence_quantity_score(source_count)

        # Completeness: penalise for missing sensors and conflicting count
        completeness_score = sensor_coverage
        if conflicting_report_count > 0:
            penalty = min(conflicting_report_count * 0.12, 0.40)
            completeness_score = max(0.0, completeness_score - penalty)

        weighted = (
            freshness_score  * self.W_FRESHNESS +
            agreement_score  * self.W_AGREEMENT +
            quantity_score   * self.W_QUANTITY +
            completeness_score * self.W_COMPLETENESS
        )
        confidence_score = round(min(weighted * 100, 100.0), 1)

        has_conflict = conflicting_report_count > 0 or agreement_score < 0.65
        conflict_explanation = None
        if has_conflict:
            parts = []
            if conflicting_report_count > 0:
                parts.append(f"{conflicting_report_count} conflicting ground observation(s) detected")
            if agreement_score < 0.65:
                parts.extend(agreement_reasons)
            conflict_explanation = "; ".join(parts) if parts else "Evidence agreement is low"

        reasons = []
        reasons.append(f"Data freshness: {freshness_reason}")
        reasons.extend(agreement_reasons)
        reasons.append(f"Source count: {source_count} independent inputs")
        reasons.append(f"Sensor coverage: {int(sensor_coverage * 100)}%")

        evidence_items = [
            {
                "source":       "Environmental Monitoring",
                "type":         "SENSOR",
                "value":        "Catchment rainfall + discharge telemetry",
                "timestamp":    last_updated_iso,
                "relevance":    0.9,
                "role":         "SUPPORTING",
                "freshness":    freshness_reason,
            },
            {
                "source":       "Dam Outflow Control",
                "type":         "OFFICIAL",
                "value":        "Khadakwasla spillway release record",
                "timestamp":    last_updated_iso,
                "relevance":    0.85,
                "role":         "SUPPORTING",
                "freshness":    freshness_reason,
            },
        ]

        for rep in ground_reports:
            role = "SUPPORTING" if rep.get("severity") in ("HIGH", "MEDIUM") else "CONFLICTING"
            evidence_items.append({
                "source":       "Ground Observer Report",
                "type":         "CITIZEN",
                "value":        rep.get("description", ""),
                "timestamp":    rep.get("timestamp", last_updated_iso),
                "relevance":    rep.get("confidence_impact", 0.1),
                "role":         role,
                "freshness":    "field",
                "location":     f"Lat {rep.get('latitude', '?'):.4f}, Lng {rep.get('longitude', '?'):.4f}",
            })

        return {
            "confidence_score":  confidence_score,
            "confidence_level":  _level_from_score(confidence_score),
            "has_conflict":      has_conflict,
            "conflict_explanation": conflict_explanation,
            "reasons":           reasons,
            "evidence_items":    evidence_items,
            "component_scores": {
                "freshness":     round(freshness_score * 100, 1),
                "agreement":     round(agreement_score * 100, 1),
                "quantity":      round(quantity_score * 100, 1),
                "completeness":  round(completeness_score * 100, 1),
            },
        }


confidence_engine = ConfidenceEngine()
