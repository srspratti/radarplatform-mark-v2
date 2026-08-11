"""CRM-agnostic adapter registry."""
from radar_hub.connectors import crm


class _FakeAdapter:
    name, label = "fake", "Fake CRM"
    configured = True

    def import_contacts(self, db, t, limit=100):
        return {"imported": 3, "skipped": 1}

    def flush(self, db, t):
        return {"sent": 2, "manual": 0, "failed": 0}


def test_status_lists_all_adapters(client):
    rows = client.get("/api/connectors/crm/status").json()
    assert {r["name"] for r in rows} == {"fub", "ghl"}
    # tests run without CRM credentials → nothing configured
    assert all(r["configured"] is False for r in rows)


def test_sync_runs_only_configured_adapters(client, db, monkeypatch):
    r = client.post("/api/connectors/crm/sync").json()
    assert r == {"configured": [], "results": {}}
    monkeypatch.setattr(crm, "ADAPTERS", [_FakeAdapter()])
    r = client.post("/api/connectors/crm/sync").json()
    assert r["configured"] == ["fake"]
    assert r["results"]["fake"]["import"]["imported"] == 3
    assert r["results"]["fake"]["writebacks"]["sent"] == 2
