# Ahmadyar Developments — Luxury Real Estate Web Experience

Official digital experience redesign for **Ahmadyar Developments** (Dubai, UAE), a premier property developer backed by over 32 years of regional engineering, infrastructure, and trading excellence through **Ahmad Yar Group** (founded 1992).

---

## Creative & Architectural Direction

Inspired by the editorial elegance, generous whitespace, and architectural storytelling of high-end design references (such as Mr. Eight), this redesign establishes an original, authentic brand experience for Ahmadyar Developments:

- **Bespoke Luxury Color Palette**:
  - Primary Background: Warm Ivory (`#F5F3EE`)
  - Secondary Background: Soft Stone (`#E9E6DF`)
  - Primary Text: Deep Charcoal (`#20211F`)
  - Secondary Text: Muted Grey (`#777873`)
  - Dark Contrast Sections: Obsidian Charcoal (`#171916`)
  - Accent: Restrained Bronze (`#A88B63`)
- **Typography**:
  - Editorial Headlines: Contemporary Serif (*Cormorant Garamond*)
  - Body & Metadata: Clean architectural sans-serif (*Inter*)
  - Restrained uppercase micro-labels with wide letter spacing
- **Verified Flagship Developments**:
  1. **Vestoria Bay** — Dubai Islands (Waterfront luxury residences & penthouses)
  2. **La Vera Creek** — Nad Al Hammar (Contemporary residences, "A True Rhythm of Living")
  3. **Palatium Residences** — Jumeirah Village Circle (JVC) (Urban wellness residences)

---

## Key Features & Page Architecture

1. **Homepage (`/`)**:
   - Immersive architectural hero with smooth scroll indicators
   - Our Philosophy: "Creating places with purpose"
   - Curated Developments: Asymmetrical showcase of flagship and supporting projects
   - Project Spotlight: Deep dive into La Vera Creek
   - The Ahmadyar Difference: 5 core engineering & design pillars
   - The Residential Experience: Smart Home IoT, Leisure & Wellness, Community Living
   - Enterprise in Numbers: 32+ Years Heritage, 3 Prime Developments, 100% Delivery Commitment
   - Developer Heritage: 1992-present history of Ahmad Yar Group
   - News & Intelligence: Published media features (including Construction Week Middle East)
   - Lead Capture: Confidential inquiry section with honeypot spam protection
   - Luxury Footer: Complete Dubai Hills address, direct contacts, and legal disclosures
2. **Projects Portfolio (`/projects`)**:
   - Interactive district filters: *All*, *Dubai Islands*, *Nad Al Hammar*, *Jumeirah Village Circle*
   - Detailed project cards with verified specifications and typologies
3. **Dynamic Project Detail Pages (`/projects/[slug]`)**:
   - Reusable data architecture (`/projects/vestoria-bay`, `/projects/la-vera-creek`, `/projects/palatium-residences`)
   - Architectural concepts, full specifications, image galleries, amenity grids, and embedded lead forms
4. **About Our Legacy (`/about`)**:
   - Verified 32-year timeline (Tavakal Ahmadyar petroleum trading in 1992, formal incorporation in 2004, heavy civil engineering, and luxury Dubai developments)
5. **Our Approach (`/our-approach`)**:
   - 6-step development philosophy from land intelligence to handover care
   - Sustainable engineering disclosures (thermal insulation, water conservation, IoT energy management)
6. **News & Media Center (`/insights` & `/insights/[slug]`)**:
   - Real published articles and industry analysis with magazine-style editorial layouts
7. **Contact Headquarters (`/contact`)**:
   - Suite 701 & 706, Park Heights Square 2, Dubai Hills, Dubai, UAE
   - Direct telephone: `+971 4 297 1500`
   - WhatsApp direct link: `+971 54 505 2829`
   - Official email: `info@ahmadyardevelopments.com`
   - Google Maps GPS navigation links
   - Fully validated enquiry form with server-side processing
8. **Compliance & Legal (`/privacy`, `/terms`, `/cookies`)**:
   - Tailored legal agreements adhering to UAE real estate standards and Dubai Land Department practices
9. **SEO & Technical Performance**:
   - Native XML sitemap (`/sitemap.xml`)
   - Robots configuration (`/robots.txt`)
   - Schema.org JSON-LD structured data (`RealEstateAgent` and `Organization`)
   - OpenGraph and Twitter card metadata for every page

---

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System Tokens
- **Icons**: Lucide React
- **Rendering**: Static Site Generation (SSG) for subpages with instant loading

---

## Getting Started Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run the production build
npm run build

# Start the production server
npm run start -p 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Vercel Deployment Guide

This project is configured out-of-the-box for seamless Vercel deployment:

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Keep default settings:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. (Optional) Configure environment variables for CRM integration:
   - `CRM_API_ENDPOINT`: URL to your CRM lead ingestion webhook
   - `CRM_API_KEY`: Secret API key for authentication
   - `NEXT_PUBLIC_GA_ID`: Google Analytics 4 Measurement ID
5. Click **"Deploy"**.
