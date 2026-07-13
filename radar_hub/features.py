"""Tiered feature flags — the packaging layer for selling Radar Hub.

A feature is ON when the active tier includes it, unless features.toml
[overrides] pins it explicitly. Tiers are cumulative:
    basic ⊂ premium ⊂ gold ⊂ platinum

Resolution order (highest wins):
  1. [overrides] in features.toml        — per-feature true/false
  2. RADAR_TIER environment variable     — deploy-time tier switch
  3. tier = "…" in features.toml         — the sold plan
  4. DEFAULT_TIER (platinum — dev mode shows everything)
"""
from __future__ import annotations
import os
import tomllib
from pathlib import Path

TIERS = ["basic", "premium", "gold", "platinum"]
DEFAULT_TIER = "platinum"

# key -> (min tier, label FR, one-line pitch FR)
FEATURES: dict[str, tuple[str, str, str]] = {
    # ---- basic — les essentiels du quotidien
    "open_house_qr":     ("basic", "Porte ouverte QR",
                          "Feuille d'inscription QR — chaque visiteur devient un lead."),
    "call_capture":      ("basic", "Notes d'appel IA",
                          "Après chaque appel, une note structurée dans la chronologie et le CRM."),
    # ---- premium — la machine à leads
    "speed_to_lead":     ("premium", "Réponse instantanée",
                          "Accusé de réception automatique à chaque nouveau lead (LCAP)."),
    "notifications":     ("premium", "Alertes leads chauds",
                          "Notification dès qu'un lead prioritaire entre au radar."),
    "sequences":         ("premium", "Relances automatiques",
                          "Cadence J+1 / J+3 / J+7 / J+30 — aucun lead oublié."),
    "showing_scheduler": ("premium", "Proposition de visites",
                          "3 créneaux proposés par texto en un clic."),
    "analytics_ai":      ("premium", "Rapports IA",
                          "Posez n'importe quelle question sur votre portefeuille."),
    # ---- gold — le client à vie
    "client_for_life":   ("gold", "Client à vie",
                          "Anniversaires d'achat, rappels fiscaux, rapport de valeur annuel."),
    "review_engine":     ("gold", "Moteur d'avis",
                          "Demande d'avis Google au bon moment après chaque clôture."),
    "transaction_tracker": ("gold", "Suivi de dossier client",
                          "Page de suivi pour le client — moins d'appels « où en est-on? »."),
    "farming_reports":   ("gold", "Infolettre de quartier",
                          "« Vendu dans votre quartier » généré chaque mois."),
    "alert_mailer":      ("gold", "Alertes courriel traquées",
                          "Le hub renvoie l'alerte Centris avec des liens mesurés vers le portail."),
    # ---- platinum — le cabinet complet
    "cma_generator":     ("platinum", "Analyse comparative (ACM)",
                          "Collez vos comparables — rapport de prix suggéré bilingue."),
    "messaging_sync":    ("platinum", "SMS/WhatsApp bidirectionnel",
                          "Messagerie d'affaires synchronisée à la chronologie (connecteur)."),
    "consent_vault":     ("platinum", "Registre de consentements",
                          "Piste d'audit Loi 25 / LCAP exportable, par contact."),
    "ai_texts":          ("platinum", "Textos IA de seuil",
                          "Texto automatique quand l'engagement ou la priorité franchit un seuil."),
}

_CONFIG_PATH = Path(__file__).resolve().parents[1] / "features.toml"


def _load_config() -> dict:
    try:
        with open(_CONFIG_PATH, "rb") as f:
            return tomllib.load(f)
    except FileNotFoundError:
        return {}
    except Exception:  # noqa: BLE001 — a broken config must never down the hub
        return {}


def resolve() -> dict:
    """Returns {"tier": str, "features": {key: {enabled, label, pitch, tier}},
    "settings": {…}} — recomputed per call so features.toml edits apply on
    the next request without a restart."""
    cfg = _load_config()
    tier = os.getenv("RADAR_TIER") or cfg.get("tier") or DEFAULT_TIER
    if tier not in TIERS:
        tier = DEFAULT_TIER
    rank = TIERS.index(tier)
    overrides = cfg.get("overrides", {})
    out = {}
    for key, (min_tier, label, pitch) in FEATURES.items():
        enabled = TIERS.index(min_tier) <= rank
        if key in overrides:
            enabled = bool(overrides[key])
        out[key] = {"enabled": enabled, "label": label, "pitch": pitch,
                    "tier": min_tier}
    return {"tier": tier, "features": out, "settings": cfg.get("settings", {})}


def enabled(key: str) -> bool:
    return resolve()["features"].get(key, {}).get("enabled", False)


def setting(key: str, default=None):
    return resolve()["settings"].get(key, default)
