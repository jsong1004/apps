# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code and configuration files
COPY tsconfig.json .
COPY vite.config.ts .
COPY index.html .
COPY *.tsx ./

# Copy SEO and metadata files
COPY robots.txt .
COPY sitemap.xml .
COPY metadata.json .

# Copy all page subdirectories with their HTML files
COPY founder/ ./founder/
COPY company/ ./company/
COPY case-studies/ ./case-studies/
COPY privacy-policy/ ./privacy-policy/
COPY terms-of-service/ ./terms-of-service/
COPY myjob_investment/ ./myjob_investment/

# Build the application
RUN npm run build

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

# Copy SEO files to nginx html root
COPY --from=builder /app/robots.txt /usr/share/nginx/html/
COPY --from=builder /app/sitemap.xml /usr/share/nginx/html/

# Copy nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 