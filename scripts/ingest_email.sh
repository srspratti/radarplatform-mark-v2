#!/usr/bin/env bash
# Ingest a raw email file into the hub's Matrix pipeline.
# Usage: ./scripts/ingest_email.sh samples/matrix-alert-2-listings.eml [message-id]
#   HUB=http://localhost:8000  RADAR_API_KEY=…  (env, optional)
set -eu
FILE="$1"; MID="${2:-$(basename "$FILE")-$(date +%s)}"
HUB="${HUB:-http://localhost:8000}"
python3 -c 'import json,sys;print(json.dumps({"raw":open(sys.argv[1]).read(),"message_id":sys.argv[2]}))' "$FILE" "$MID" \
| curl -s -X POST "$HUB/api/connectors/matrix/ingest-raw" \
    -H "Content-Type: application/json" \
    ${RADAR_API_KEY:+-H "X-Radar-Key: $RADAR_API_KEY"} \
    --data @- | python3 -m json.tool
