# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install Chromium and its dependencies for Puppeteer prerendering
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Tell Puppeteer to use the system Chromium instead of downloading its own
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code and configuration files
COPY tsconfig.json .
COPY vite.config.ts .
COPY index.html .
COPY *.tsx *.ts ./

# Copy SEO and metadata files
COPY robots.txt .
COPY sitemap.xml .
COPY metadata.json .
COPY public/ ./public/

# Copy all page subdirectories with their HTML files
COPY founder/ ./founder/
COPY company/ ./company/
COPY case-studies/ ./case-studies/
COPY privacy-policy/ ./privacy-policy/
COPY terms-of-service/ ./terms-of-service/
COPY myjob_investment/ ./myjob_investment/
COPY presentations/ ./presentations/
COPY tools/ ./tools/
COPY blog/ ./blog/

# Build the SPA
RUN npm run build

# Prerender: start vite preview in background, snapshot with Puppeteer, stop preview
RUN npx vite preview --port 4173 & \
    sleep 4 && \
    node scripts/prerender.cjs && \
    kill %1 || true

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy static page directories to nginx html directory
COPY --from=builder /app/founder/ /usr/share/nginx/html/founder/
COPY --from=builder /app/company/ /usr/share/nginx/html/company/
COPY --from=builder /app/case-studies/ /usr/share/nginx/html/case-studies/
COPY --from=builder /app/privacy-policy/ /usr/share/nginx/html/privacy-policy/
COPY --from=builder /app/terms-of-service/ /usr/share/nginx/html/terms-of-service/
COPY --from=builder /app/myjob_investment/ /usr/share/nginx/html/myjob_investment/
COPY --from=builder /app/presentations/ /usr/share/nginx/html/presentations/
COPY --from=builder /app/tools/ /usr/share/nginx/html/tools/
COPY --from=builder /app/blog/ /usr/share/nginx/html/blog/
COPY --from=builder /app/public/ /usr/share/nginx/html/

# Copy SEO files to nginx html root
COPY --from=builder /app/robots.txt /usr/share/nginx/html/
COPY --from=builder /app/sitemap.xml /usr/share/nginx/html/

# Copy nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 