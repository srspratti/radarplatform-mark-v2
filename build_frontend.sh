#!/usr/bin/env bash
# Rebuild the two frontend bundles + their Tailwind sheets.
# Requires: node 18+. Run from repo root:  ./build_frontend.sh
set -euo pipefail
npm install --no-audit --no-fund esbuild@0.24 react@18.3.1 react-dom@18.3.1 three lucide-react tailwindcss@3.4
npx esbuild apps/vitrine/src/main.jsx --bundle --minify --format=iife \
  --loader:.jsx=jsx --jsx=automatic --define:process.env.NODE_ENV='"production"' \
  --outfile=apps/vitrine/dist/vitrine.js
npx esbuild apps/dashboard/src/main.jsx --bundle --minify --format=iife \
  --loader:.jsx=jsx --jsx=automatic --define:process.env.NODE_ENV='"production"' \
  --outfile=apps/dashboard/dist/dashboard.js
printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' > /tmp/tw.in.css
npx tailwindcss -i /tmp/tw.in.css -o apps/vitrine/dist/tw.css \
  --content "apps/vitrine/src/*.jsx"
npx tailwindcss -i /tmp/tw.in.css -o apps/dashboard/dist/tw.css \
  --content "apps/dashboard/src/*.jsx"
echo "frontend built."
