#!/bin/bash

# Set the project
gcloud config set project myresume-457817

# Build the project
gcloud builds submit --config cloudbuild.yaml .
