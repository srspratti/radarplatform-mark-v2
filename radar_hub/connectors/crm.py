"""CRM-agnostic layer. The hub never talks to a specific CRM — it talks to
this registry, and whichever adapters have credentials respond.

Adapter contract (all of them, present and future):
  name / label   — identity ("fub", "ghl", …)
  configured     — credentials present for this deployment
  import_contacts(db, tenant, limit) → {"imported", "skipped"}
  flush(db, tenant) → {"sent", "manual", "failed"}

Adding a CRM = one connector module honoring the contract + one line in
ADAPTERS. Deployments choose their CRM by which env vars they set — several
can run side by side (a lead keeps the source it came from; writebacks route
to the CRM that owns the contact).
"""
from __future__ import annotations

from sqlalchemy.orm import Session

from . import fub as _fub
from . import gohighlevel as _ghl


class FUBAdapter:
    name, label = "fub", "Follow Up Boss"

    @property
    def configured(self) -> bool:
        return _fub.FUBClient().configured

    def import_contacts(self, db: Session, tenant_id: str,
                        limit: int = 100) -> dict:
        return _fub.import_from_fub(db, tenant_id, _fub.FUBClient(),
                                    limit=limit)

    def flush(self, db: Session, tenant_id: str) -> dict:
        return _fub.flush_writebacks(db, tenant_id)


class GHLAdapter:
    name, label = "ghl", "GoHighLevel"

    @property
    def configured(self) -> bool:
        return _ghl.GHLClient().configured

    def import_contacts(self, db: Session, tenant_id: str,
                        limit: int = 100) -> dict:
        return _ghl.import_from_ghl(db, tenant_id, _ghl.GHLClient(),
                                    limit=limit)

    def flush(self, db: Session, tenant_id: str) -> dict:
        return _ghl.flush_writebacks_ghl(db, tenant_id)


ADAPTERS = [FUBAdapter(), GHLAdapter()]


def status() -> list[dict]:
    return [{"name": a.name, "label": a.label, "configured": a.configured}
            for a in ADAPTERS]


def _safe(label: str, fn) -> dict:
    """One adapter phase, degraded to an error report instead of a 500 —
    a CRM rejecting its token (401, missing scopes, wrong location id) must
    never take the other CRMs' sync down with it."""
    try:
        return fn()
    except Exception as exc:  # noqa: BLE001 — transport/HTTP errors expected
        db_note = f"{type(exc).__name__}: {exc}"[:200]
        return {"error": f"{label}: {db_note}"}


def sync_all(db: Session, tenant_id: str, limit: int = 100) -> dict:
    """One call = import + writeback flush on every configured CRM.
    This is the endpoint schedulers should hit — it stays correct no matter
    which CRM(s) a deployment wires up. Per-adapter failures are reported
    in-band, never raised."""
    out: dict = {"configured": [], "results": {}}
    for a in ADAPTERS:
        if not a.configured:
            continue
        out["configured"].append(a.name)
        res = {"import": _safe(f"{a.name} import",
                               lambda a=a: a.import_contacts(
                                   db, tenant_id, limit=limit))}
        if "error" in res["import"]:
            db.rollback()          # a mid-import failure must not poison
        res["writebacks"] = _safe(f"{a.name} writebacks",
                                  lambda a=a: a.flush(db, tenant_id))
        if "error" in res["writebacks"]:
            db.rollback()
        out["results"][a.name] = res
    return out
