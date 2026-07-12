FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY radar_hub ./radar_hub
COPY radar_acheteur ./radar_acheteur
COPY apps/vitrine/dist ./apps/vitrine/dist
COPY apps/dashboard/dist ./apps/dashboard/dist
ENV RADAR_EDITION=marketable
ENV RADAR_DB_URL=sqlite:////data/radar_hub.db
ENV DB_PATH=/data/radar_acheteur.db
EXPOSE 8080
CMD ["sh", "-c", "python -m radar_hub.seed && uvicorn radar_hub.main:app --host 0.0.0.0 --port 8080"]
