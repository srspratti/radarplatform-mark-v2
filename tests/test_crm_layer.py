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


class _BrokenAdapter:
    """A CRM whose token was revoked — every call raises like httpx would."""
    name, label = "broken", "Broken CRM"
    configured = True

    def import_contacts(self, db, t, limit=100):
        raise RuntimeError("401 Unauthorized: invalid token")

    def flush(self, db, t):
        raise RuntimeError("401 Unauthorized: invalid token")


def test_sync_degrades_per_adapter_instead_of_500(client, monkeypatch):
    # One broken CRM must not break the sync endpoint, nor the healthy CRM
    # running beside it — its failure is reported in-band.
    monkeypatch.setattr(crm, "ADAPTERS", [_BrokenAdapter(), _FakeAdapter()])
    resp = client.post("/api/connectors/crm/sync")
    assert resp.status_code == 200
    r = resp.json()
    assert r["configured"] == ["broken", "fake"]
    assert "401 Unauthorized" in r["results"]["broken"]["import"]["error"]
    assert "401 Unauthorized" in r["results"]["broken"]["writebacks"]["error"]
    assert r["results"]["fake"]["import"]["imported"] == 3
    assert r["results"]["fake"]["writebacks"]["sent"] == 2
