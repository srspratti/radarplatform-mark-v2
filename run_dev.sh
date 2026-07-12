#!/usr/bin/env bash
# Lance Radar Hub en dev avec le bon environnement Python (3.12), --reload actif.
set -euo pipefail
cd "$(dirname "$0")"
ENV_NAME="${RADAR_CONDA_ENV:-radar-platform-mark-v2}"
if command -v conda >/dev/null 2>&1; then
  exec conda run --no-capture-output -n "$ENV_NAME" \
    uvicorn radar_hub.main:app --reload "$@"
fi
exec uvicorn radar_hub.main:app --reload "$@"
