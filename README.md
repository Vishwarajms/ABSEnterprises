# ABS Enterprises — Website Redesign

A production-ready, SEO-optimised marketing site for ABS Enterprises (false ceilings, POP work,
drywall partitions, and interior design — Hadapsar, Pune), rebuilt with React, Tailwind CSS and
Framer Motion.

## A note on scope vs. the original brief

The design brief this project was built from was written as a generic template for a **training
institute** (a "Courses" page, blog topics about PLC programming and industrial automation). The
live site at absenterprisespune.in is a **false ceiling, POP and interior design contractor** with
no courses. To keep every fact accurate:

- The **Courses** page was replaced with a **Services** page covering the business's actual 12
  service lines (POP ceiling, gypsum board, drywall partitions, fire-rated partitions, interior
  design, renovation projects, etc.), each with a description, benefits, process, mode and duration
  — the same structure the brief asked for course cards to have.
- The 10 requested blog topics (industrial training, PLC programming, career guidance) were
  replaced with **6 long-form SEO articles** relevant to the actual business: false ceiling design,
  POP vs. gypsum, lighting layouts, drywall partitions for offices, cost planning, and maintenance.
  Six was chosen over ten to keep every article genuinely useful and well-researched rather than
  padded to hit a word count — each is fully SEO-structured (meta title/description, keywords,
  table of contents, FAQs with schema, tags, related articles) so more can be added later using the
  same `src/data/blogs.js` format.
- All company facts (name, founder, phone, email, address, working hours, value propositions,
  6-step process, testimonic themes) were extracted from the live site and rewritten for clarity,
  not invented. Figures without a public source (e.g. an exact founding year) were left out rather
  than guessed.

## Tech stack

React 18 · React Router · Tailwind CSS · Framer Motion · Lucide Icons · React Helmet Async ·
Swiper · React CountUp · EmailJS · Vite

## Getting started

```bash
npm install
cp .env.example .env   # add your EmailJS Service ID, Template ID and Public Key
npm run dev
```

The contact form on `/contact` uses [EmailJS](https://www.emailjs.com/) so it can send mail from a
static, frontend-only site. Without the three `VITE_EMAILJS_*` values set in `.env`, the form still
renders correctly but shows a clear error message instead of failing silently — it will not pretend
to send an email it can't.

## Build

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/            static images/icons
  components/
    layout/          Navbar, Footer
    ui/              SectionTitle, StatCounter, Breadcrumb, Loader, ScrollToTop, WhatsAppFloat, PageTransition
    sections/        Hero, WhyChooseUs, ProcessSteps, IndustriesServed, Gallery, Testimonials,
                      FAQ, CTABanner, ServiceCard, BlogCard, ContactForm, ContactInfo,
                      FounderMessage, MissionVisionGoal, CompanyJourney
    SEO.jsx          React Helmet wrapper + JSON-LD schema builders
  pages/             Home, About, Services, Blogs, BlogPost, Contact, NotFound
  data/              company.js, services.js, blogs.js — all editable content, no hardcoded copy in components
  hooks/             useRouteScrollReset
  utils/             motion.js — shared Framer Motion variants
  constants/         nav.js
  styles/            index.css — Tailwind layers + design tokens
```

## Motion system

All animation lives in a small set of reusable primitives so the effects stay consistent and
cheap rather than one-off per section:

- **`hooks/useTilt.js`** — spring-damped 3D tilt driven by pointer position (transform-only).
  Used on service cards and gallery tiles.
- **`hooks/useParallax.js`** — scroll-linked drift for background shapes (Hero blobs).
- **`components/ui/RevealText.jsx`** — word-by-word scroll reveal for headings.
- **`components/ui/ImageReveal.jsx`** — curtain-style clip-path reveal for image panels.
- **`components/ui/CursorSpotlight.jsx`** — pointer-following radial glow on dark sections.
- **`components/ui/TiltCard.jsx`** — drop-in tilt wrapper for one-off card use.

Everything above animates only `transform`, `opacity` or `clip-path` — never `width`, `height`,
`top`/`left`, or `box-shadow` on a loop — so it stays GPU-composited and 60fps-safe. Every
JS-driven effect (tilt, parallax, cursor spotlight, word reveal) checks
`useReducedMotion()`/`prefers-reduced-motion` and disables itself for users who ask for it; the
global stylesheet also collapses all CSS transitions/animations under that same media query.

## Editing content

Everything user-facing lives in `src/data/`:

- **`company.js`** — name, contact details, address, hours, stats, value props, process steps,
  mission/vision, testimonials, industries served, FAQs.
- **`services.js`** — the 12 services shown on Home and the Services page. Add a new object to the
  array to add a service; it will automatically appear in the grid and get its own anchor link
  (`/services#slug`).
- **`blogs.js`** — blog articles. Each entry is a title, metadata, an array of content blocks
  (`h2`, `p`, `ul`), FAQs, and related-article slugs. Add a new object here to publish a new post at
  `/blog/your-slug`.

## SEO

- **Meta tags** — unique `<title>`, meta description, keywords, canonical URL, `robots`, Open Graph
  and Twitter Card tags on every page via `react-helmet-async` (`src/components/SEO.jsx`).
- **Structured data (JSON-LD)**, each schema shipped as its own `<script>` tag (not bundled into one
  array, which is the more fragile pattern some sites use):
  - `HomeAndConstructionBusiness`/`LocalBusiness` — site-wide, with address, hours, logo
  - `WebSite` — Home
  - `BreadcrumbList` — every non-home page, always rooted at Home
  - `FAQPage` — Home, About, Services, and every blog post
  - `ItemList` of `Service` schema — the full catalogue on `/services` (this is the "Course Schema"
    equivalent for a business that sells services, not courses — see the note at the top of this file)
  - `ItemList` — the post collection on `/blog`
  - `BlogPosting` — every article, with word count, section, and publisher block
- **Sitemap & robots** — `public/sitemap.xml` lists all 11 routes (including every blog post, each
  with its own `lastmod`); `public/robots.txt` allows all crawlers and points to it.
- **Images** — a real branded `og-image.jpg` (1200×630), a `logo-mark.png`, and a full favicon set
  (16px/32px/180px) are generated and included in `public/`, referenced from both `index.html` and
  the JSON-LD `logo`/`image` fields.
- **Heading hierarchy** — audited end-to-end: every page has exactly one `h1`, and every `h2`→`h3`
  step is unbroken (fixed a few spots that previously skipped a level — footer nav labels, FAQ
  questions, and the Contact page's card titles).
- **Internal linking** — services and blog posts now cross-link both directions
  (`relatedBlogSlug` on `services.js`, `relatedServiceSlug` on `blogs.js`), rendered as a "Read our
  guide" link inside each service row and a "Related Service" callout on each article, plus a new
  About → Services link.
- **Accessibility ties into SEO here too** — FAQ accordions use the proper heading + `aria-controls`
  pattern rather than a plain clickable `<span>`.

## Before going live

1. Replace the gradient placeholder tiles in `Hero`, `Gallery`, `FounderMessage` and `BlogPost`
   with real project photography — the brief calls for premium photography, and none is bundled in
   this repo to avoid using stock imagery that isn't actually the client's own work.
2. Set the three EmailJS environment variables so the contact form can send mail.
3. Update `public/sitemap.xml` if you add new blog posts or pages (each entry needs a `lastmod`).
4. Confirm the Google Map embed URL in `src/data/company.js` against the exact registered address.
5. Submit `public/sitemap.xml` in Google Search Console once the domain is live, and validate the
   JSON-LD with Google's Rich Results Test after deploying.
