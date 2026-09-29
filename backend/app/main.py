from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.config import settings
from backend.app.api.simulation import router as simulation_router
from backend.app.api.hazards import router as hazards_router
from backend.app.api.routes import router as routes_router
from backend.app.api.shelters import router as shelters_router
from backend.app.api.reports import router as reports_router
from backend.app.api.explanations import router as explanations_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="PRAVAHA — Emergency Operations & Evacuation Decision Support Engine (Phase 1 Prototype)"
)

# Enable CORS for local Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(simulation_router, prefix="/api")
app.include_router(hazards_router, prefix="/api")
app.include_router(routes_router, prefix="/api")
app.include_router(shelters_router, prefix="/api")
app.include_router(reports_router, prefix="/api")
app.include_router(explanations_router, prefix="/api")

@app.get("/")
def root():
    return {
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "mode": "DEMO MODE · SIMULATED DATA",
        "scenario": settings.SCENARIO_NAME,
        "health": "OPERATIONAL"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "HEALTHY",
        "timestamp": settings.APP_VERSION,
        "demo_mode": settings.IS_DEMO_MODE
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8000, reload=True)
