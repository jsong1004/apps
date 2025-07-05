# Codebase Index

## Overview
This is a TypeScript/Vite-based showcase website displaying AI business tools in a modern table format. The application follows a modular component structure with a focus on SEO optimization and responsive design.

## Core Architecture

### Main Application Files
- **index.tsx** - Main application entry point that handles table population and component initialization
- **index.html** - HTML template with embedded styles, SEO meta tags, and component placeholders
- **Header.tsx** - Dynamic header component with social media links
- **Footer.tsx** - Footer component with company information and service links

### Configuration Files
- **package.json** - Project dependencies and npm scripts
- **tsconfig.json** - TypeScript configuration
- **vite.config.ts** - Vite build configuration with environment variable handling
- **Dockerfile** - Multi-stage Docker build for production deployment

### Data Structure
- **WebsiteData Interface** (`index.tsx:4-8`) - Defines structure for website entries
- **Data Array** (`index.tsx:10-62`) - Contains all AI business tools information

## Key Components

### Header Component (`Header.tsx`)
- **createHeader()** (`Header.tsx:1`) - Factory function that creates dynamic header
- Social media links: Facebook, LinkedIn
- Responsive design with mobile-first approach

### Footer Component (`Footer.tsx`)
- **createFooter()** (`Footer.tsx:1`) - Factory function that creates comprehensive footer
- Four main sections:
  - Company Information
  - Services (with tooltips)
  - Company Links
  - Contact Information

### Table Population (`index.tsx`)
- **populateTable()** (`index.tsx:64-86`) - Dynamically creates table rows from data array
- Handles link generation with proper attributes (target="_blank", rel="noopener noreferrer")

## Styling Architecture
- **Embedded CSS** in `index.html` (lines 47-317)
- Google Fonts (Roboto) integration
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1200px
  - Desktop: > 1200px
- CSS Grid and Flexbox layouts
- Sticky header with shadow effects

## SEO & Metadata
- **Meta Tags** (`index.html:3-26`) - Complete SEO optimization
- **JSON-LD Structured Data** (`index.html:28-45`) - Schema.org markup
- **Sitemap** - `sitemap.xml` for search engines
- **Robots.txt** - Search engine crawling instructions

## Static Pages
- **founder/** - About founder page
- **company/** - About company page  
- **case-studies/** - Case studies page
- **privacy-policy/** - Privacy policy page
- **terms-of-service/** - Terms of service page

## Development Configuration
- **Environment Variables** - `GEMINI_API_KEY` for API integration
- **Build Process** - Vite for bundling and development server
- **TypeScript** - Full type safety with strict configuration

## AI Business Tools Data
The application showcases 10 different AI-powered business tools:
1. **AI Content Generation Hub** - contents.ai-biz.app
2. **InvestorHub Dashboard** - investorhub-dash.ai-biz.app  
3. **InvestorHub Platform** - investorhub.ai-biz.app
4. **QR Code Generator** - qrcode.ai-biz.app
5. **Video Audio Synthesizer** - video-synthesizer.ai-biz.app
6. **AI-Powered Insights** - insights.ai-biz.app
7. **MyJob: AI-Powered Job Search** - myjob.ai-biz.app
8. **Website Screenshot Capture** - screen-capture.ai-biz.app
9. **AI Workshop Landing Page** - workshop.ai-biz.app
10. **Transform Your Business with AI** - www.ai-biz.app

## Deployment
- **Docker Support** - Multi-stage build with nginx for production
- **Static Asset Optimization** - Vite build process
- **Container Ready** - Production-ready Docker image

## Code Patterns
- **Factory Functions** - Component creation pattern
- **Direct DOM Manipulation** - No framework dependencies
- **Modular Architecture** - Separate concerns for header, footer, and main content
- **Responsive Design** - Mobile-first CSS approach
- **Accessibility** - ARIA labels and semantic HTML structure

## Key Features
- **Responsive Table** - Horizontal scrolling on mobile
- **Hover Effects** - Enhanced user interaction
- **Semantic HTML** - Proper accessibility markup
- **Performance Optimized** - Minimal JavaScript footprint
- **SEO Friendly** - Complete metadata and structured data