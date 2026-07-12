"""Office manager agent: bookkeeping, record keeping, monthly reporting.
Deterministic aggregation is the report; Claude only adds an optional
narrative paragraph when a key is configured. Records are append-friendly
(OACIQ retention posture — nothing here deletes transaction records).
"""
from __future__ import annotations
import calendar
from datetime import datetime
from sqlalchemy.orm import Session
from ..config import settings
from ..models import Contact, Event, Expense, LedgerEntry, utcnow
from ..events import ingest_event
from ..stages import STAGE_LABELS_FR


def add_ledger_entry(db: Session, tenant_id: str, *, property_address: str,
                     sale_price: float, commission_rate: float,
                     contact_id: int | None = None, kind: str = "sale",
                     closed_on: datetime | None = None) -> LedgerEntry:
    entry = LedgerEntry(tenant_id=tenant_id, contact_id=contact_id,
                        property_address=property_address,
                        sale_price=sale_price, commission_rate=commission_rate,
                        commission_gross=round(sale_price * commission_rate, 2),
                        kind=kind, closed_on=closed_on or utcnow())
    db.add(entry)
    db.commit()
    if contact_id:
        ingest_event(db, tenant_id=tenant_id, contact_id=contact_id,
                     etype="transaction.closed", actor="system", origin="agent",
                     payload={"ledger_id": entry.id, "address": property_address},
                     idempotency_key=f"ledger-{entry.id}")
    return entry


def add_expense(db: Session, tenant_id: str, *, category: str, amount: float,
                memo: str = "", spent_on: datetime | None = None) -> Expense:
    exp = Expense(tenant_id=tenant_id, category=category, amount=amount,
                  memo=memo, spent_on=spent_on or utcnow())
    db.add(exp)
    db.commit()
    return exp


def monthly_report(db: Session, tenant_id: str, year: int, month: int,
                   narrative: bool = False) -> dict:
    start = datetime(year, month, 1)
    end = datetime(year, month, calendar.monthrange(year, month)[1], 23, 59, 59)

    deals = (db.query(LedgerEntry)
             .filter(LedgerEntry.tenant_id == tenant_id,
                     LedgerEntry.closed_on >= start,
                     LedgerEntry.closed_on <= end).all())
    gross = round(sum(d.commission_gross for d in deals), 2)
    tps = round(gross * settings.TPS_RATE, 2)
    tvq = round(gross * settings.TVQ_RATE, 2)

    expenses = (db.query(Expense)
                .filter(Expense.tenant_id == tenant_id,
                        Expense.spent_on >= start, Expense.spent_on <= end).all())
    by_cat: dict[str, float] = {}
    for e in expenses:
        by_cat[e.category] = round(by_cat.get(e.category, 0) + e.amount, 2)
    total_exp = round(sum(by_cat.values()), 2)

    pipeline: dict[str, int] = {}
    for (stage,) in db.query(Contact.stage).filter_by(tenant_id=tenant_id,
                                                      lifecycle="client"):
        pipeline[stage] = pipeline.get(stage, 0) + 1

    activity: dict[str, int] = {}
    for (fam,) in (db.query(Event.family)
                   .filter(Event.tenant_id == tenant_id,
                           Event.ts >= start, Event.ts <= end)):
        activity[fam] = activity.get(fam, 0) + 1

    report = {
        "period": f"{year}-{month:02d}",
        "deals_closed": len(deals),
        "commission_gross": gross,
        "taxes": {"tps_5": tps, "tvq_9975": tvq, "total": round(tps + tvq, 2)},
        "expenses_total": total_exp,
        "expenses_by_category": by_cat,
        "net_before_tax_remittance": round(gross - total_exp, 2),
        "pipeline_snapshot": {STAGE_LABELS_FR.get(k, k): v
                              for k, v in pipeline.items()},
        "activity_by_family": activity,
        "deals": [{"address": d.property_address, "price": d.sale_price,
                   "rate": d.commission_rate, "commission": d.commission_gross,
                   "kind": d.kind} for d in deals],
    }
    if narrative and settings.ANTHROPIC_API_KEY:
        from ..llm import complete
        text = complete(
            f"Rapport mensuel courtier immobilier QC (JSON): {report}\n"
            "Rédige 4-5 phrases de synthèse en français, ton professionnel.",
            system="Assistant de gestion de bureau pour courtiers OACIQ.")
        report["narrative"] = text or ""
    report["markdown"] = _to_markdown(report)
    return report


def _to_markdown(r: dict) -> str:
    lines = [f"# Rapport mensuel — {r['period']}", "",
             f"**Transactions clôturées:** {r['deals_closed']}",
             f"**Commissions brutes:** {r['commission_gross']:,.2f} $",
             f"**TPS (5 %):** {r['taxes']['tps_5']:,.2f} $ · "
             f"**TVQ (9,975 %):** {r['taxes']['tvq_9975']:,.2f} $",
             f"**Dépenses:** {r['expenses_total']:,.2f} $",
             f"**Net (avant remises de taxes):** "
             f"{r['net_before_tax_remittance']:,.2f} $", "", "## Pipeline"]
    for k, v in r["pipeline_snapshot"].items():
        lines.append(f"- {k}: {v}")
    lines.append("")
    lines.append("## Transactions")
    for d in r["deals"]:
        lines.append(f"- {d['address']} — {d['price']:,.0f} $ × "
                     f"{d['rate']*100:.2f} % = {d['commission']:,.2f} $")
    if r.get("narrative"):
        lines += ["", "## Synthèse", r["narrative"]]
    return "\n".join(lines)
