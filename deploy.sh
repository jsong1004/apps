#!/bin/bash

# Set the project
gcloud config set project ai-biz-6b7ec

# Build the project
gcloud builds submit --config cloudbuild.yaml .
