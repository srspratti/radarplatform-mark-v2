import os
import pathlib

TEST_DB = pathlib.Path("./test_radar_hub.db")
os.environ["RADAR_DB_URL"] = f"sqlite:///{TEST_DB}"
os.environ["RADAR_API_KEY"] = ""          # open auth in tests
os.environ["ANTHROPIC_API_KEY"] = ""      # force deterministic paths
os.environ["VITRINE_WEBHOOK_SECRET"] = ""
os.environ["DB_PATH"] = "./test_acheteur.db"   # Radar Acheteur module DB

import pytest
from fastapi.testclient import TestClient
from radar_hub.models import Base, engine, SessionLocal
from radar_hub.main import app


@pytest.fixture(autouse=True)
def fresh_db():
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)
    yield


@pytest.fixture
def db():
    s = SessionLocal()
    yield s
    s.close()


@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c
