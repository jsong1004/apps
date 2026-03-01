#!/bin/bash
# Allow unauthenticated (public) access to the Cloud Run service.
# Fixes: "Your client does not have permission to get URL / from this server."
# Run once: ./allow-public-invoker.sh

set -e

PROJECT_ID="ai-biz-6b7ec"
REGION="us-central1"
SERVICE_NAME="app"

echo "Granting public access to Cloud Run service: ${SERVICE_NAME} in ${REGION}..."

gcloud run services add-iam-policy-binding "${SERVICE_NAME}" \
  --region="${REGION}" \
  --project="${PROJECT_ID}" \
  --member="allUsers" \
  --role="roles/run.invoker" \
  --quiet

echo "Done. The service is now publicly accessible at:"
echo "  https://app-22835475779.us-central1.run.app/"
echo ""
echo "To use custom domain jsong.ai-biz.app:"
echo "  1. In Cloud Console: Cloud Run > app > Manage Custom Domains"
echo "  2. Add mapping: jsong.ai-biz.app -> app (us-central1)"
echo "  3. In your DNS provider, add the CNAME/A record shown there (e.g. ghs.googlehosted.com or run.app domain)."
