#!/usr/bin/env bash
# Rebuild the three frontend bundles + their Tailwind sheets.
# Requires: node 18+. Run from repo root:  ./build_frontend.sh
#
# Since Phase 1 we ship three esbuild bundles:
#   apps/vitrine   -> /static/vitrine   (client portal, /portail/{token})
#   apps/dashboard -> /static/dashboard (realtor engagement, /)
#   apps/ops       -> /static/ops       (operations console, /ops)
#
# The /ops console previously loaded @babel/standalone + cdn.tailwindcss.com
# at runtime; that is now compiled ahead of time from apps/ops/src.
set -euo pipefail
npm install --no-audit --no-fund esbuild@0.24 react@18.3.1 react-dom@18.3.1 three lucide-react tailwindcss@3.4

# --- JS bundles -----------------------------------------------------
npx esbuild apps/vitrine/src/main.jsx --bundle --minify --format=iife \
  --loader:.jsx=jsx --jsx=automatic --define:process.env.NODE_ENV='"production"' \
  --outfile=apps/vitrine/dist/vitrine.js
npx esbuild apps/dashboard/src/main.jsx --bundle --minify --format=iife \
  --loader:.jsx=jsx --jsx=automatic --define:process.env.NODE_ENV='"production"' \
  --outfile=apps/dashboard/dist/dashboard.js
npx esbuild apps/ops/src/main.jsx --bundle --minify --format=iife \
  --loader:.jsx=jsx --jsx=automatic --define:process.env.NODE_ENV='"production"' \
  --outfile=apps/ops/dist/ops.js

# apps/ops/src/ops.css is a static stylesheet — copy alongside the bundle.
cp apps/ops/src/ops.css apps/ops/dist/ops.css

# --- Tailwind stylesheets ------------------------------------------
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > /tmp/tw.in.css

npx tailwindcss -i /tmp/tw.in.css -o apps/vitrine/dist/tw.css \
  --content "apps/vitrine/src/*.jsx,apps/_shared/*.{jsx,js}"
npx tailwindcss -i /tmp/tw.in.css -o apps/dashboard/dist/tw.css \
  --content "apps/dashboard/src/*.jsx,apps/_shared/*.{jsx,js}"
npx tailwindcss -i /tmp/tw.in.css -o apps/ops/dist/tw.css \
  --content "apps/ops/src/**/*.{jsx,js},apps/_shared/*.{jsx,js}"

echo "frontend built."
