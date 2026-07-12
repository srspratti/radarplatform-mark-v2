FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY radar_acheteur ./radar_acheteur
# Cheapest deploy: single loop process. For scheduled runs use cron/systemd instead.
CMD ["python", "-m", "radar_acheteur.run", "--loop", "--interval", "300"]
