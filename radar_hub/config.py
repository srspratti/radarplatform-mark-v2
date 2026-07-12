"""Radar Hub configuration. All secrets via environment — nothing hardcoded."""
import os


class Settings:
    # Core
    DB_URL: str = os.getenv("RADAR_DB_URL", "sqlite:///./radar_hub.db")
    API_KEY: str = os.getenv("RADAR_API_KEY", "")  # empty = open (dev mode)
    DEFAULT_TENANT: str = os.getenv("RADAR_TENANT_ID", "danny")

    # Anthropic (optional — everything degrades to deterministic fallbacks)
    ANTHROPIC_API_KEY: str = os.getenv("ANTHROPIC_API_KEY", "")
    HAIKU_MODEL: str = os.getenv("RADAR_HAIKU_MODEL", "claude-haiku-4-5-20251001")

    # Follow Up Boss
    FUB_API_KEY: str = os.getenv("FUB_API_KEY", "")
    FUB_BASE: str = os.getenv("FUB_BASE", "https://api.followupboss.com/v1")

    # Matrix inbox (IMAP ingestion of Centris/Matrix notification emails)
    MATRIX_IMAP_HOST: str = os.getenv("MATRIX_IMAP_HOST", "")
    MATRIX_IMAP_USER: str = os.getenv("MATRIX_IMAP_USER", "")
    MATRIX_IMAP_PASS: str = os.getenv("MATRIX_IMAP_PASS", "")
    MATRIX_IMAP_FOLDER: str = os.getenv("MATRIX_IMAP_FOLDER", "INBOX")

    # Vitrine webhook
    VITRINE_WEBHOOK_SECRET: str = os.getenv("VITRINE_WEBHOOK_SECRET", "")

    # Per-client Matrix intake address ("design it on the fly")
    #   plus  -> INTAKE_EMAIL_USER+<tag>@gmail.com   (works with any Gmail/Workspace inbox)
    #   alias -> <slug>-<tag>@INTAKE_EMAIL_DOMAIN     (needs a catch-all domain)
    INTAKE_EMAIL_MODE: str = os.getenv("INTAKE_EMAIL_MODE", "plus")
    INTAKE_EMAIL_USER: str = os.getenv("INTAKE_EMAIL_USER", "alertes.radar@gmail.com")
    INTAKE_EMAIL_DOMAIN: str = os.getenv("INTAKE_EMAIL_DOMAIN", "inbox.radar.example")

    # Edition marker (internal | marketable) — informational only
    EDITION: str = os.getenv("RADAR_EDITION", "dev")

    # Scoring
    ENGAGEMENT_HALF_LIFE_DAYS: float = float(os.getenv("RADAR_HALF_LIFE_DAYS", "7"))
    DORMANT_AFTER_DAYS: int = int(os.getenv("RADAR_DORMANT_DAYS", "14"))

    # Québec taxes (office manager agent)
    TPS_RATE: float = 0.05
    TVQ_RATE: float = 0.09975


settings = Settings()
