# Jaehee Song | Portfolio & Web Services

Personal portfolio and AI tools showcase for Jaehee Song — Data Platform Architect & AI Solution Developer.

**Live Site**: [https://jsong.ai-biz.app](https://jsong.ai-biz.app) | [https://apps.ai-biz.app](https://apps.ai-biz.app)

## 🎯 Overview

A responsive portfolio site featuring About, Career, Web Services (Products), Publications, Lectures, Global Programs, Skills, and Education. Includes 13+ production AI tools and supports English/Korean (i18n).

### Key Features

- **Portfolio sections**: About (with portrait), Career, Web Services, Publications, Lectures, Programs, Skills, Education
- **13+ Web Services**: Clearly, MyJob, InNews, AI Insights, Content Hub, Storybook, InvestorHub, Workshop, QR Code, Survey, Screen Capture, and more
- **i18n**: English and Korean
- **SEO**: Schema.org structured data, sitemap, robots.txt, ai-metadata.json
- **Accessibility**: ARIA labels, skip links, semantic HTML
- **Deploy**: Google Cloud Run (ai-biz-6b7ec)

## 🛠️ Web Services (Products)

### AI & ML
- **Clearly** – AI-powered BRD/PRD generator
- **MyJob** – Multi-agent job search platform
- **InNews** – Newsletter platform
- **AI Insights Generator** – Multi-agent research
- **AI Content Hub** – Convert presentations, audio, video to scripts/podcasts/blogs
- **AI Storybook Creator** – Personalized illustrated storybooks

### Business
- **InvestorHub** – Startup pitch scoring
- **InvestorHub Dashboard** – Live analytics
- **AI Business Automation** – Workshop & training

### Utilities
- **QR Code Generator**, **AI Survey Generator**, **Website Screenshot Capture**

## 🎨 Tech Stack

- **Vite** 6.2 · **TypeScript** 5.7 · **CSS3** (Grid, Flexbox)
- **Deploy**: Google Cloud Run, Docker

## 📁 Key Files

| File | Purpose |
|------|---------|
| `index.tsx` | App entry, i18n, section rendering |
| `index.html` | Layout, styles, SEO meta |
| `data.ts` | Portfolio data (career, tools, books, lectures, etc.) |
| `sections.ts` | Section renderers (About, Career, Projects, etc.) |
| `Header.tsx` | Nav, social links (LinkedIn, Medium, Brunch) |
| `Footer.tsx` | Footer layout |
| `i18n-data.ts` | EN/KO strings |
| `cloudbuild.yaml` | Cloud Run deploy config |

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
**URLs**: [https://app-22835475779.us-central1.run.app/](https://app-22835475779.us-central1.run.app/) | [https://jsong.ai-biz.app](https://jsong.ai-biz.app)

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

**Last Updated**: February 2025  
**Status**: ✅ Production Ready  
**Web Services**: 13+  
**Languages**: EN, KO

