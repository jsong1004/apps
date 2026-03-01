# AI Business Tools Showcase

A comprehensive showcase platform featuring 14+ production-ready AI-powered business tools. From elegant single-purpose utilities to full-scale business solutions with complex workflows and AI integration.

**Live Site**: [https://apps.ai-biz.app/](https://apps.ai-biz.app/)

## 🎯 Overview

This platform serves as a central hub for discovering and accessing AI-powered business tools across multiple categories. Each tool is live, production-ready, and designed to solve real-world business challenges.

### Key Features

- **14+ Live AI Tools**: Production-ready applications across AI, Business, Utilities, and Presentations
- **Interactive Search & Filter**: Real-time search with category-based filtering
- **Modern UI/UX**: Responsive design with gradient cards, smooth animations, and intuitive navigation
- **SEO Optimized**: Complete with Schema.org structured data, sitemap, robots.txt, and AI agent metadata
- **Accessibility**: WCAG 2.1 compliant with ARIA labels, skip links, and screen reader support
- **Multi-language Support**: Tools available in English and Korean

## 🛠️ Featured Tools

### AI & ML Tools
- **MyJob**: AI-powered job search platform with resume analysis and matching
- **Requirements Made Clear**: Transform ideas into professional BRDs and PRDs with AI-guided conversations
- **AI Storybook Creator**: Create personalized illustrated storybooks (Korean language)
- **AI Content Generation Hub**: Convert presentations, audio, and videos into scripts, podcasts, and blog posts
- **AI-Powered Insights**: Generate comprehensive, validated insights on any topic using AI research agents

### Business Tools
- **AI Workshop**: Training platform for building business automation
- **InvestorHub Platform**: Smart investment platform with AI-powered scoring
- **InvestorHub Dashboard**: Real-time analytics and portfolio management
- **Transform Your Business**: Main AI automation platform

### Utility Tools
- **QR Code Generator**: Instant QR code generation for any website
- **AI Survey Generator**: Create professional surveys and forms with AI-powered question generation
- **Website Screenshot Capture**: Full-page screenshot capture tool

### Presentations
- **MyJob Investment Presentation**: Complete platform showcase with multi-agent architecture
- **AI와 함께 꿈을 찾는 법**: High school special lecture on finding dreams with AI (Korean)
- **What is Vibe Coding?**: Presentation on AI-assisted coding
- **Beyond Vibe Coding**: Deep dive into production-ready AI development challenges

## 🎨 Technology Stack

- **Build Tool**: Vite 6.2.0
- **Language**: TypeScript 5.7.2
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Deployment**: Google Cloud Run
- **Container**: Docker

## 📝 Key Features Implementation

### Search & Filter
- Real-time search across tool titles and descriptions
- Category-based filtering (All, AI & ML, Business, Utilities, Presentation)
- Accessible with proper ARIA labels and keyboard navigation

### Tool Cards
- Dynamic card generation from TypeScript data
- Category badges and status indicators (live, demo, beta)
- Direct links to tools with copy URL functionality
- Responsive grid layout (auto-fit, min 380px)

### Accessibility
- WCAG 2.1 Level A/AA compliance
- Screen reader support with ARIA labels
- Skip links for keyboard navigation
- Visually hidden labels for context

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the site locally.

## 📦 Build & Deploy

```bash
npm run build
```

### Deploy to Google Cloud Run

**Project**: `ai-biz-6b7ec`  
**Region**: `us-central1`  
** URLs**: [https://app-22835475779.us-central1.run.app/](https://app-22835475779.us-central1.run.app/) | [https://jsong.ai-biz.app](https://jsong.ai-biz.app)

1. One-time setup: grant deploy roles to the Cloud Build service account:
   ```bash
   ./grant-deploy-roles.sh
   ```

2. Optional: fix ADC quota warning:
   ```bash
   gcloud auth application-default set-quota-project ai-biz-6b7ec
   ```

3. Deploy:
   ```bash
   ./deploy.sh
   ```
   Or manually: `gcloud builds submit --config cloudbuild.yaml .`

4. If the site returns Forbidden, allow public invoker:
   ```bash
   ./allow-public-invoker.sh
   ```

## 🔗 Related Links

- **Main Platform**: https://www.ai-biz.app/
- **Company Info**: https://apps.ai-biz.app/company/
- **Founder**: https://apps.ai-biz.app/founder/
- **Case Studies**: https://apps.ai-biz.app/case-studies/

## 📄 License

Private project - All rights reserved.

## 🤝 Contributing

This is a private showcase project. For inquiries or issues, please contact the maintainer.

---

**Last Updated**: October 2025  
**Status**: ✅ Production Ready  
**Live Tools**: 14+  
**Categories**: 4 (AI & ML, Business, Utilities, Presentations)

