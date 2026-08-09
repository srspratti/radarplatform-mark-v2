# Matrix RPA — ÉDITION INTERNE SEULEMENT / INTERNAL EDITION ONLY

⚠️ **Lire avant d'exécuter.** L'automatisation de Matrix/Centris n'est pas
couverte par leurs conditions d'utilisation. Ce dossier existe uniquement pour
l'édition interne : le compte du courtier lui-même, à des fins de test
personnel, à cadence humaine, jamais distribué, jamais dans une image Docker
(`.dockerignore` le bloque déjà), jamais dans le produit vendable.

⚠️ Automating Matrix/Centris sits outside their Terms of Use. This folder is
for the INTERNAL edition only: the broker's own account, personal testing,
human-paced, never distributed, never in a Docker image (already fenced by
`.dockerignore`), never in the sellable product.

## Le chemin recommandé n'est PAS celui-ci

Pour les tableaux « lien seulement », le chemin conforme est déjà dans le
produit : dans Matrix, ouvrir les résultats → Sélectionner tout →
**Envoyer PDF / Imprimer PDF** (format détaillé, ex. `my:Partial`) → envoyer
le PDF à l'adresse d'admission du client OU le déposer dans `/ops` (fiche du
client → « Import PDF Matrix »). Quatre clics humains, aucune automatisation
de Matrix, et la Vitrine se peuple. Essayez ça d'abord.

## Ce que fait le harvester (si vous choisissez quand même de l'utiliser)

`matrix_results_harvester.py` rejoue ces mêmes clics dans un navigateur
Playwright **après que VOUS vous soyez connecté manuellement** (profil
persistant — le script n'automatise jamais la connexion et ne stocke aucun
mot de passe) :

1. Premier lancement : la fenêtre s'ouvre, vous vous connectez à Matrix
   vous-même, puis Entrée dans le terminal pour continuer.
2. Le script navigue vers l'auto-courriel indiqué, sélectionne tout,
   exporte le PDF de la grille (format détaillé).
3. **Dry-run par défaut** : il affiche ce qu'il enverrait. Avec `--apply`,
   il POSTe le PDF à `POST /api/connectors/matrix/ingest-pdf` du hub.

```bash
pip install playwright httpx && playwright install chromium
python matrix_results_harvester.py \
  --hub http://localhost:8000 --key $RADAR_API_KEY \
  --contact-id 3 --results-url "https://matrix.centris.ca/…"      # dry-run
# … vérifier la sortie, puis ajouter --apply
```

Les sélecteurs `PLACEHOLDER_…` doivent être remplis contre le DOM réel
(DevTools → clic droit sur l'élément → Copy selector) — ils varient selon la
configuration du tableau. Cadence humaine intégrée (pauses aléatoires);
gardez les exécutions rares (1-2×/jour max.).
