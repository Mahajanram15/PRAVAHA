from fastapi import APIRouter
from typing import Dict, Any

router = APIRouter(prefix="/explanations", tags=["explanations"])

@router.get("/status")
def get_explanation_status() -> Dict[str, Any]:
    """Status endpoint for explanation foundation (Phase 1)."""
    return {
        "status": "READY",
        "phase": 1,
        "mode": "RULE_AND_EVIDENCE_BASED",
        "description": "Explanations foundation established. Advanced NLP and LLM summaries will connect in Phase 4."
    }
