#!/bin/bash
# Grant the default Cloud Build service account the roles needed to push images and deploy to Cloud Run.
# Run once: ./grant-deploy-roles.sh
# Requires: gcloud and project owner (or resourcemanager.projects.setIamPolicy).

set -e

PROJECT_ID="ai-biz-6b7ec"
# Default Cloud Build SA (used when you run gcloud builds submit)
PROJECT_NUMBER="22835475779"
CLOUD_BUILD_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"
# Cloud Run will run as this SA (set in cloudbuild.yaml --service-account)
RUN_SA="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"

echo "Granting deploy roles to Cloud Build SA: ${CLOUD_BUILD_SA}"
echo "Cloud Run runtime SA (unchanged): ${RUN_SA}"
echo ""

# Cloud Run Admin - so Cloud Build can deploy to Cloud Run
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/run.admin" \
  --quiet

# Service Account User - so Cloud Build can deploy a service that runs as RUN_SA
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/iam.serviceAccountUser" \
  --quiet

# Storage Object Admin - so Cloud Build can push images to GCR
gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/storage.objectAdmin" \
  --quiet

echo "Done. Cloud Build SA has: run.admin, iam.serviceAccountUser, storage.objectAdmin"
echo ""
echo "Optional: set ADC quota project to avoid the warning:"
echo "  gcloud auth application-default set-quota-project ${PROJECT_ID}"