# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`  
- **Preview production build**: `npm run preview`
- **Install dependencies**: `npm install`

## Environment Configuration

The application requires a `GEMINI_API_KEY` environment variable to be set in `.env.local` for Gemini API integration. The Vite config automatically exposes this as `process.env.GEMINI_API_KEY` and `process.env.API_KEY` in the client bundle.

## Architecture Overview

This is a TypeScript/Vite-based showcase website displaying AI business tools in a modern table format. The application follows a modular component structure:

### Core Components
- **index.tsx**: Main application logic that populates a table with website data and manages component initialization
- **Header.tsx**: Creates dynamic header with social media links
- **Footer.tsx**: Generates footer with company information and contact details  
- **index.html**: Main HTML template with embedded styles and component placeholders

### Key Patterns
- **Component Creation**: Uses factory functions (`createHeader`, `createFooter`) that accept container elements and dynamically build DOM structures
- **Data Structure**: Website information is stored as an array of `WebsiteData` objects with `webSite`, `title`, and `description` properties
- **DOM Manipulation**: Direct DOM API usage for table population and component injection
- **Responsive Design**: CSS-in-HTML approach with mobile-first responsive styling

### Styling Architecture
- Embedded CSS in `index.html` with extensive responsive breakpoints
- Google Fonts (Roboto) integration
- CSS Grid and Flexbox layouts
- Sticky header with shadow effects
- Hover states and smooth transitions

## Deployment

The project includes a multi-stage Dockerfile for containerized deployment using nginx to serve the built static assets.