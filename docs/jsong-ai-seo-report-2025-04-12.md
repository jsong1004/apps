# Comprehensive SEO Report: jsong.ai-biz.app
**Date:** April 12, 2026  
**Analyst:** Hermes AI Agent (Technical Product Lead)  
**Domain:** https://jsong.ai-biz.app  
**Scope:** GSC analysis, keyword/trend research, technical audit, competitive positioning, and actionable roadmap.

---

## 1. Executive Summary

| Metric | Value | Grade |
|--------|-------|-------|
| **GSC SEO Health Score** | 34 / 100 | Poor |
| **Organic Clicks (90d)** | 0 | Critical |
| **Organic Impressions (90d)** | 2 | Critical |
| **PageSpeed Mobile** | 89 / 100 | Good |
| **PageSpeed SEO** | 100 / 100 | Excellent |
| **SEOptimer Overall** | B | Moderate |
| **Wayback History** | None | New/Undiscovered |

**Bottom line:** Your portfolio has excellent on-page metadata and schema markup, but it is invisible to search engines because it is a JavaScript SPA with no prerendering, anemic site architecture (only 1 indexable URL), and near-zero backlink authority. Fixing crawlability and expanding to individual tool landing pages is the highest-ROI move.

---

## 2. Google Search Console Deep Dive

> **Note:** Live GSC API calls failed due to missing token (`~/.hermes/credentials/gsc-token.json`). The analysis below uses the most recent authenticated snapshot from memory (run date: 2026-04-11).

### 2.1 Property Performance
- **Clicks:** 0
- **Impressions:** 2
- **Branded Traffic:** 0%
- **Score:** 34 / 100

### 2.2 Pillar Breakdown
| Pillar | Score | Assessment |
|--------|-------|------------|
| Crawlability | 8 / 10 | robots.txt is permissive, but SPA architecture neutralizes it. |
| On-Page SEO | 7 / 10 | Meta tags and schema are strong in the HTML shell. |
| AI Bot Visibility | 3 / 10 | Very low. No llms.txt. Server blocks detected. |
| Schema | 8 / 10 | Rich Person/Book/SoftwareApplication/FAQPage schema present. |
| Performance | 8 / 10 | Fast load, but render-blocking resources exist. |

### 2.3 Active Flags
1. **llms.txt missing** — AI crawlers (ChatGPT, Perplexity, Claude) cannot discover your services in a single plaintext manifest.
2. **AI visibility low** — Your schema isn't enough when the DOM is empty until JS runs.
3. **Blocked bots** — GPTBot, PerplexityBot, and Google-Extended are blocked at the **server/network layer** (likely Cloudflare, CDN, or Cloud Run ingress rules) despite `Allow: /` in robots.txt.

### 2.4 What GSC Would Show (Projected)
With only 2 impressions and 0 clicks, there is no meaningful query data. The site is not ranking for anything except perhaps a direct brand search. There are **no quick-win keywords** because the homepage is the only page Google is indexing, and even that is poorly rendered.

---

## 3. Search Trend & Keyword Research

### 3.1 Methodology
We used `pytrends` (Google Trends API) to pull 12-month US interest data for keyword clusters aligned with your products and expertise. Values are relative search interest (0–100).

### 3.2 High-Opportunity Keywords

| Keyword / Cluster | 12-Mo Avg | Latest Month | Trend | Verdict |
|-------------------|-----------|--------------|-------|---------|
| **LangGraph** | 36.8 | 43.0 | ⬆️ Rising | **Highest volume** in your tech stack. Strong tutorial potential. |
| **AI portfolio** | 31.5 | 40.6 | ⬆️ Rising | Meta but high-intent for your exact audience. |
| **vibe coding** | 27.9 | 32.0 | ⬆️ Rising | Cultural moment. You already lecture on this. |
| **AI job search** | 16.9 | 20.1 | ⬆️ Rising | Directly maps to MyJob. Moderate volume. |
| **generative AI tools** | 10.4 | 12.2 | ⬆️ Rising | Broad, competitive, but relevant to your tool suite. |
| **CrewAI** | 7.5 | 8.8 | ⬆️ Rising | Niche but growing fast. Maps to AI Insights Generator & MyJob. |
| **multi-agent AI** | 5.6 | 7.9 | ⬆️ Rising | Academic/enterprise intent. Low competition. |
| **GraphRAG** | 5.1 | 6.4 | ⬆️ Rising | Emerging; very few authoritative voices. |
| **Seattle startup accelerator** | 1.9 | 0.0 | ➡️ Flat | Hyper-local; low volume but high conversion potential. |
| **AI BRD generator** | ~0 | ~0 | — | **Blue ocean.** Almost no search demand yet = first-mover advantage if you create the category content. |
| **AI PRD generator** | 0 | 0 | — | Same as above. Clearly can own this term with the right landing page. |
| **Korean startup US market entry** | 0 | 0 | — | Niche B2B; very low search volume but extremely high value per visitor. |

### 3.3 Related Queries (Rising Trends)
**"vibe coding" related (explosive growth):**
- `codex` — +67,800% (OpenAI Codex launch effect)
- `google ai studio vibe coding` — +52,600%
- `vibe coding for kids` — +51,850%
- `vibe coding definition` — +650%
- `vibe coding book` — +600%

**"CrewAI" related:**
- `openclaw` — +112,200%
- `google adk` — +38,550%
- `crewai pricing` — +350%

**Strategic insight:** The query "vibe coding book" is rising 600%. You literally wrote the *AI Development Guide* and teach vibe coding. A landing page or blog post titled "The Unofficial Vibe Coding Book: A Practical Guide" could capture this intent.

### 3.4 Keyword Cluster Strategy
We recommend organizing content around **3 clusters**:

#### Cluster A: Developer Authority (High Volume)
- Primary: `LangGraph tutorial`, `CrewAI examples`, `multi-agent AI platform`, `GraphRAG implementation`
- Content: Technical case studies using MyJob and AI Insights Generator as real-world examples.

#### Cluster B: Product-Led SEO (Blue Ocean)
- Primary: `AI BRD generator`, `AI PRD generator`, `5-second resume tailoring`, `AI job search platform`
- Content: Individual tool landing pages with live demos and before/after screenshots.

#### Cluster C: Founder/Educator Brand (High Value)
- Primary: `Korean startup US market entry`, `Seattle startup accelerator`, `vibe coding workshop`
- Content: Program pages, Seattle Partners case studies, and lecture recordings.

---

## 4. Technical SEO Audit

### 4.1 Architecture & Crawlability
**Issue: Single-Page Application (SPA) Trap**
- Your site is a Vite-built TypeScript SPA. `index.tsx` clears the DOM and re-injects all content on `DOMContentLoaded`.
- Googlebot's secondary rendering **can** execute JS, but it does so inconsistently and with delays. Many crawlers (including social bots and AI agents) see a near-empty `<body>`.
- **Impact:** Even though your `index.html` has great meta tags, the *content* (headings, paragraphs, links) is invisible to fast crawlers.

**Fix:** Implement prerendering (also called pre-rendering or SSR for SPAs). Since Puppeteer is already a devDependency, the fastest path is a build-step script that uses Puppeteer to generate a static `index.html` with fully rendered DOM.

### 4.2 Sitemap
Current `sitemap.xml`:
```xml
<urlset>
  <url>
    <loc>https://jsong.ai-biz.app/</loc>
  </url>
</urlset>
```
**Only 1 URL.** You have 16+ live web services and 7+ subdirectories (`/founder`, `/company`, `/case-studies`, `/presentations`, `/privacy-policy`, `/terms-of-service`, `/myjob_investment`) that are not in the sitemap.

### 4.3 robots.txt
Your `robots.txt` is exemplary — it explicitly allows all major AI crawlers. However, the SEO audit flags **blocked bots** at the server layer. This means something upstream (most likely Cloudflare, a Google Cloud Load Balancer, or CDN WAF rules) is returning 403s to GPTBot, PerplexityBot, and Google-Extended before they ever read robots.txt.

**Fix:** Check your Cloud Run service or any proxy/CDN for bot-blocking security rules and whitelist the user-agents above.

### 4.4 PageSpeed Insights (Mobile)
| Category | Score | Notes |
|----------|-------|-------|
| Performance | 89 | Good, but has render-blocking fonts/CSS. |
| Accessibility | 96 | Minor contrast issues on some text elements. |
| Best Practices | 100 | Excellent security headers. |
| SEO | 100 | Lighthouse sees your meta tags; real crawlers may not. |

**Performance Opportunities:**
- Eliminate render-blocking resources (~1,440 ms savings)
- Improve image delivery (~1,400 KiB savings)
- Use efficient cache lifetimes (~1,469 KiB savings)
- Minify CSS (~11 KiB savings)

**CrUX (Real User Data):** `No Data`. Because traffic is too low, Google has no real-world Core Web Vitals for your domain.

### 4.5 SEOptimer Summary
| Category | Grade |
|----------|-------|
| Overall | B |
| On-Page SEO | A- |
| Links | A- |
| Usability | **F** |
| Performance | A |
| Social | A+ |

The **Usability F** is a red flag. In the context of SEOptimer, this usually means:
- No mobile viewport optimization detected (ironic, because your CSS does have breakpoints)
- Missing or delayed tap targets due to JS rendering
- Possible flash of unstyled content or missing content frame on initial load

This aligns with the SPA diagnosis: audit bots see an empty or broken page before JS executes.

### 4.6 Schema Markup
Your structured data is actually **above average** for a personal portfolio:
- `Person` schema with `sameAs` links
- `Book` schema for both titles
- `SoftwareApplication` schema for Clearly, MyJob, InNews, InvestorHub, AI Insights Generator
- `FAQPage` schema with 8 Q&A pairs

**Missing schemas to add:**
- `WebSite` with `SearchAction` (sitelinks searchbox)
- `Course` or `LearningResource` for your lectures and workshops
- `HowTo` for vibe coding / AI agent tutorials
- `ItemList` for your tool grid

### 4.7 Backlinks & Authority
- **Wayback Machine:** Zero snapshots found. The domain has little historical presence.
- **Ahrefs DR:** Could not retrieve via free tool (bot protection), but inferred DR is likely **0–5** given zero organic traffic and no visible backlink profile.
- **SEOptimer Links:** A- (internal linking is decent, but there are almost no external backlinks).

---

## 5. Competitive Landscape

Because you operate across three personas (developer, founder, educator), your competition is fragmented:

| Competitor Type | Example | Their Strength | Your Advantage |
|-----------------|---------|----------------|----------------|
| AI Tool Directories | Futurepedia, TheresAnAIForThat | Massive traffic, SEO machines | You *built* the tools; they just list them. |
| Developer Portfolios | Standard GitHub Pages / Vercel templates | Clean, fast, indexed | You have 16 live products + 20 years enterprise experience. |
| AI Education Creators | Fireship, Wes Bos | Huge YouTube backlink moats | You have real enterprise/production credibility (Visa, Seattle Partners). |
| Local Accelerators | MassChallenge, Techstars Seattle | Strong local SEO, big brands | You specialize in Korean→US market entry; hyper-niche. |

**Your moat:** Very few people can credibly write about *both* enterprise data architecture (Visa, Apache Druid) *and* shipping 16 AI products. Most competitors only do one. Your content strategy should lean into this intersection.

---

## 6. Prioritized Action Plan

### Phase 1: Fix Crawlability (Week 1)
1. **Add prerendering to the build pipeline.**
   - Write a Puppeteer script that loads `http://localhost:4173` (Vite preview), waits for `DOMContentLoaded` + 1s, and saves the fully rendered HTML over `dist/index.html`.
   - Run this inside `cloudbuild.yaml` or as an `npm run postbuild` step.
2. **Fix server-level bot blocks.**
   - Audit Cloud Run / Cloudflare WAF rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
3. **Expand `sitemap.xml`.**
   - Add all static subdirectories and planned tool landing pages.
4. **Create `/llms.txt`.**
   - Plaintext manifest of your services, books, and contact info for AI crawlers.

### Phase 2: Expand Site Architecture (Weeks 2–3)
5. **Create individual tool landing pages (16 pages).**
   - Route pattern: `/tools/<slug>/index.html`
   - Each page needs a unique `<title>`, `<meta name="description">`, `<h1>`, and 200+ words.
   - Link back to homepage with "Built by Jaehee Song" breadcrumb.
6. **Add a blog/case-study section.**
   - Target the 3 keyword clusters above.
   - First 3 posts:
     - "What Is Vibe Coding? A Production Developer's Perspective"
     - "How We Built a Multi-Agent Job Search Platform with CrewAI"
     - "From Seoul to Seattle: A Checklist for Korean Startup US Market Entry"

### Phase 3: Authority Building (Ongoing)
7. **Guest posts & backlinks.**
   - Publish the "vibe coding" post on Medium with a canonical tag pointing to your portfolio.
   - Pitch a technical post to the CrewAI or LangGraph community blogs.
   - List Clearly on AI tool directories (Futurepedia, SaasHub, etc.) with a backlink.
8. **Social signals.**
   - Your SEOptimer Social score is A+. Maintain LinkedIn and Medium presence; cross-link every new page.

---

## 7. Quick Wins (Do Today)

| Action | Effort | Impact |
|--------|--------|--------|
| Add `/llms.txt` | 15 min | High (AI visibility) |
| Expand `sitemap.xml` with existing subdirs | 15 min | Medium (indexability) |
| Update `<title>` to include "Vibe Coding | Multi-Agent AI | Seattle" | 5 min | Medium (branded + trend keywords) |
| Add `WebSite` + `SearchAction` schema | 20 min | Medium (rich snippets) |
| Verify Cloud Run bot-blocking rules | 30 min | High (crawlability) |
| Add a "Featured Post" section on homepage linking to vibe coding content | 30 min | Medium (internal linking + freshness) |

---

## 8. Appendix: Raw Data

### 8.1 Google Trends — Interest Over Time (US, Last 12 Months)
```json
{
  "vibe coding": { "avg": 27.9, "latest_month": 32.0 },
  "AI portfolio": { "avg": 31.5, "latest_month": 40.6 },
  "LangGraph": { "avg": 36.8, "latest_month": 43.0 },
  "AI job search": { "avg": 16.9, "latest_month": 20.1 },
  "CrewAI": { "avg": 7.5, "latest_month": 8.8 },
  "GraphRAG": { "avg": 5.1, "latest_month": 6.4 },
  "AI BRD generator": { "avg": ~0, "latest_month": ~0 },
  "AI PRD generator": { "avg": 0, "latest_month": 0 }
}
```

### 8.2 Latest GSC Snapshot (Memory)
```json
{
  "run_date": "2026-04-11",
  "services": ["JSoNG"],
  "reports": [
    {
      "service": "JSoNG",
      "clicks": 0,
      "impr": 2,
      "branded": 0,
      "score": 34,
      "flags": ["llms.txt missing", "AI visibility low", "blocked bots"]
    }
  ]
}
```

### 8.3 SEOptimer Grades
- Overall: **B**
- On-Page SEO: **A-**
- Links: **A-**
- Usability: **F**
- Performance: **A**
- Social: **A+**

### 8.4 PageSpeed Insights
- Performance: **89**
- Accessibility: **96**
- Best Practices: **100**
- SEO: **100**
- CrUX: **No Data**

---

*Report generated by Hermes AI Agent for Jaehee Song.*
