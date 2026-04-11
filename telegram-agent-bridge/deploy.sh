#!/bin/sh
set -e

echo "Building and deploying telegram-bot to Cloud Run..."
gcloud builds submit --config cloudbuild.yaml .

SERVICE_URL=$(gcloud run services describe telegram-bot --region us-central1 --platform managed --format 'value(status.url)')
WEBHOOK_URL="${SERVICE_URL}/webhook"

echo "Service URL: ${SERVICE_URL}"
echo "Setting webhook to: ${WEBHOOK_URL}"

gcloud run services update telegram-bot \
  --region us-central1 \
  --platform managed \
  --update-env-vars WEBHOOK_URL="${WEBHOOK_URL}"

curl -s "https://api.telegram.org/bot8650462065:AAHn3BUxT-mLLVm7GUVtL8Iw1uXCGbDmjwo/setWebhook?url=${WEBHOOK_URL}"
echo ""
echo "Done."
