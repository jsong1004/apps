# AI Studio App

This project showcases AI-powered business tools in a modern web app.

## Run Locally

**Prerequisites:** Node.js (v18+ recommended)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

```bash
npm run build
```

## Run with Docker

1. Build the Docker image:
   ```bash
   docker build -t my-app .
   ```
2. Run the container:
   ```bash
   docker run -p 80:80 my-app
   ```

## Deploy to Google Cloud Run

### Using Cloud Build (Recommended)

1. Authenticate and set your project:
   ```bash
   gcloud auth login
   gcloud config set project myresume-457817
   ```
2. Submit the build and deploy using Cloud Build:
   ```bash
   gcloud builds submit --config cloudbuild.yaml .
   ```
   This will build, push, and deploy your app to Cloud Run as defined in `cloudbuild.yaml`.

### Manual Steps

1. Build the Docker image:
   ```bash
   docker build -t gcr.io/myresume-457817/app .
   ```
2. Push the image:
   ```bash
   gcloud auth configure-docker
   docker push gcr.io/myresume-457817/app
   ```
3. Deploy to Cloud Run:
   ```bash
   gcloud run deploy app \
     --image gcr.io/myresume-457817/app \
     --region us-central1 \
     --platform managed \
     --allow-unauthenticated \
     --service-account 711582759542-compute@developer.gserviceaccount.com \
     --project myresume-457817 \
     --memory 256Mi \
     --cpu 1 \
     --min-instances 0 \
     --max-instances 10 \
     --port 80
   ```

After deployment, Cloud Run will provide a public URL for your app.

## Environment Variables
- `GEMINI_API_KEY`: Required for Gemini API integration. Set this in `.env.local` for local development.

---

For any issues, please open an issue or contact the maintainer.
