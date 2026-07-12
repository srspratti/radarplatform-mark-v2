"""Serves the live intelligence dashboard + its JSON feed.

Run:
    uvicorn radar_acheteur.api:app --reload --port 8000
Then open http://localhost:8000/

Endpoints:
    GET /                  -> the dashboard (fetches /api/intelligence)
    GET /api/intelligence  -> computed metrics as JSON
"""
from pathlib import Path
from fastapi import FastAPI
from fastapi.responses import JSONResponse, FileResponse
from .analytics import compute
from .config import cfg

app = FastAPI(title="Radar Acheteur — Intelligence")
HERE = Path(__file__).parent


@app.get("/api/intelligence")
def intelligence(lookback: int = None):
    data = compute(cfg.db_path,
                   lookback_days=lookback or cfg.lookback_days,
                   half_life=cfg.half_life_days)
    return JSONResponse(data)


@app.get("/")
def dashboard():
    return FileResponse(HERE / "dashboard.html")
