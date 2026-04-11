#!/bin/sh
set -e
gcloud builds submit --config cloudbuild.yaml .
