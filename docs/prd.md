# Makin Mudah Landing Page Product Requirements Document (PRD)

---

## Goals and Background Context

### Goals

- Launch SEO-optimized landing page that converts visitors to catalogue explorers within 4-6 weeks
- Validate dual-audience model (business owners + students) with 30%+ engagement from each segment
- Achieve 15%+ click-through rate from landing page to catalogue pages
- Establish brand identity as "accessible IT for everyone" in Indonesian market
- Generate 500+ monthly catalogue visits within 3 months, growing to 2,000+ within 6 months
- Prove "show, don't tell" value-first strategy with visual demos and casual Indonesian messaging
- Create mobile-first, performance-optimized experience (<3s load time on 3G connections)
- Build foundation for future ecosystem (applications, mentoring platform, community)

### Background Context

The COVID-19 digital acceleration has created urgent demand for IT solutions across Indonesia, but non-technical users remain underserved and intimidated. Indonesian small business owners (64+ million MSMEs, only ~13% digitally integrated) face complexity intimidation, contract fears, and installation barriers when seeking IT solutions. Simultaneously, Indonesian students face a 600,000-worker digital talent gap, with affordable mentorship (Rp 5-20 million bootcamps are out of reach) and structured learning paths unavailable.

Makin Mudah Landing Page solves this accessibility barrier through a "show, don't tell" strategy using culturally native Indonesian messaging ("Hidup makin mudah dengan Makin Mudah"), transparent flexible pricing ("Bayar Seperlumu, Bayar Semaumu"), and dual self-directed paths (business applications via "Intip Yuk" / student mentoring via "Mulai Dulu"). The page serves as the gateway to products under development (POS systems, Learning Courses) and will validate the dual-sided network effects model where students become talent for businesses using Makin Mudah tools.

### Change Log

| Date       | Version | Description                                        | Author  |
| ---------- | ------- | -------------------------------------------------- | ------- |
| 2026-01-13 | 1.0     | Initial PRD creation (Goals section) - IN PROGRESS | PM John |

---

## Requirements

### Functional

**FR1:** The landing page shall display an animated hero section with the headline "Hidup makin mudah dengan Makin Mudah" using typing animation effect, responsive sizing, and emphasized brand words.

**FR2:** The hero section shall present two side-by-side CTA buttons labeled "Intip Yuk" (business path) and "Mulai Dulu" (student path) that navigate to respective catalogue pages.

**FR3:** The landing page shall display a value propositions section with three columns showing: (1) price tag icon with "Bayar Seperlumu, Bayar Semaumu" messaging, (2) browser icon with "Tanpa Instalasi, Buka Dimana Saja" messaging, (3) hands helping icon with "Didampingi Mentor" messaging.

**FR4:** The landing page shall display a Problem → Solution section with two unified problems: "IT terlalu ribet dan bikin pusing?" and "Takut terjebak biaya mahal?" each paired with corresponding solution text and visual demo (GIF/graphic).

**FR5:** The Problem → Solution section shall include a CTA button labeled "Intip Solusinya" that navigates to the catalogue pages.

**FR6:** The landing page shall display an FAQ section with accordion UI containing 7 questions with full Indonesian answers as specified in docs/faq-content.md: (1) "Berapa sih biayanya?", (2) "Butuh komputer khusus gak?", (3) "Gimana cara mulainya?", (4) "Kalau ada masalah, bisa tanya siapa?", (5) "Apa aja yang didapat?", (6) "Harus komitmen berapa lama?", (7) "Bisa coba dulu gak?".

**FR7:** Each FAQ item shall be expandable/collapsible via click interaction, with only one item expanded at a time (accordion behavior).

**FR8:** The landing page shall display a final CTA section with headline "Siap untuk hidup yang makin mudah?" and a single CTA button labeled "Intip Solusinya".

**FR9:** The landing page shall display a footer with copyright notice.

**FR10:** The system shall provide two catalogue pages (applications and mentoring services) with Netflix-style card layouts showing product/service options including "coming soon" placeholders.

**FR11:** The applications catalogue page shall display cards for POS system and other business applications with title, description, and status indicators.

**FR12:** The mentoring services catalogue page shall display cards for Learning Courses and other educational services with title, description, and status indicators.

**FR13:** The landing page shall implement Google Analytics 4 event tracking for: CTA clicks (with button label), scroll depth, FAQ accordion interactions (which question), and path selection (business vs student).

**FR14:** The landing page shall generate structured data markup for FAQ section using schema.org FAQ schema to enable rich snippets in search results.

**FR15:** The landing page shall include meta tags for SEO (title, description, keywords), Open Graph tags for social sharing, and proper heading hierarchy (H1, H2, H3).

**FR16:** The landing page shall generate a sitemap.xml file including all pages (landing, catalogue-apps, catalogue-mentoring, contact form).

**FR17:** The catalogue pages shall provide a contact form accessible from card CTAs that collects user inquiries (Name, Email, Phone, Product/Service Interest, Message) and sends submissions via email to the Makin Mudah team with confirmation message to the user.

### Non-Functional

**NFR1:** The landing page shall load in under 3 seconds on 3G connections (Indonesian average mobile speed).

**NFR2:** The landing page shall achieve First Contentful Paint (FCP) in under 1.5 seconds.

**NFR3:** The landing page shall achieve Lighthouse scores of: 90+ performance, 100 accessibility, 100 SEO, 90+ best practices.

**NFR4:** The landing page shall achieve Core Web Vitals targets: LCP <2.5s, FID <100ms, CLS <0.1.

**NFR5:** The landing page initial JavaScript bundle shall be under 200KB gzipped, CSS under 50KB gzipped.

**NFR6:** The landing page shall be fully responsive and functional on mobile devices (Chrome Android 90+, Safari iOS 13+, Samsung Internet 14+) and desktop browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+).

**NFR7:** The landing page shall be hosted on free tier infrastructure (Vercel or Netlify) with 95%+ uptime.

**NFR8:** The landing page shall be built using Nuxt 3 with Static Site Generation (SSG) for optimal performance and SEO.

**NFR9:** The landing page shall use Indonesian language throughout all content with culturally adapted messaging (not direct translations).

**NFR10:** The landing page shall be accessible to users with disabilities following WCAG 2.1 Level AA standards (minimum contrast ratios, keyboard navigation, ARIA labels).

**NFR11:** The system shall implement HTTPS (SSL/TLS) for all connections enforced by hosting platform.

**NFR12:** The system shall comply with Indonesian PDP law (Perlindungan Data Pribadi) including privacy policy and cookie consent where required.

---

## User Interface Design Goals

### Overall UX Vision

The Makin Mudah landing page embodies **approachable technology** through a clean, unintimidating interface that proves simplicity through its own design. The UX prioritizes **immediate comprehension** (users understand value within 10 seconds) and **friction removal** at every interaction point. The design language is warm, friendly, and distinctly Indonesian—using conversational tone, cultural wordplay, and familiar patterns rather than corporate formality. Visual hierarchy guides users naturally from hero → value props → problem/solution → FAQ → conversion without overwhelming or confusing. The experience feels like a helpful friend explaining technology, not a sales pitch.

**Key UX Principles:**

- **Clarity over cleverness** - Every element has obvious purpose
- **Mobile-first thinking** - Thumb-friendly tap targets, readable text, fast loading
- **Progressive disclosure** - Show enough to intrigue, reveal details on demand (accordion FAQ)
- **Cultural authenticity** - Indonesian language and design sensibility, not Western template
- **Performance as UX** - Speed is a feature, not an afterthought

### Key Interaction Paradigms

**Scroll-Driven Narrative:** The landing page unfolds like a story as users scroll—problem introduction, solution reveal, objection handling, final invitation. Each section builds trust progressively.

**Self-Selection Pathways:** Dual CTAs ("Intip Yuk" / "Mulai Dulu") empower users to choose their journey without forms or quizzes. Visual differentiation (icons, color accents) makes paths obvious.

**Accordion Information Architecture:** FAQ uses accordion pattern (one open at a time) to provide comprehensive answers without overwhelming page length. Click/tap to expand, automatic collapse of others.

**Visual Proof Over Text:** GIFs and graphics demonstrate simplicity and pricing flexibility—showing rather than telling reduces cognitive load and builds credibility for non-technical users.

**Minimal Friction CTAs:** All call-to-action buttons use casual, inviting Indonesian language ("Intip Yuk" not "Click Here") and lead directly to exploration (catalogue) rather than forms or gates.

### Core Screens and Views

**1. Landing Page (Homepage)**

- Hero section with animated headline + dual CTAs
- Value Propositions (3-column cards)
- Problem → Solution with visual demos
- FAQ accordion
- Final CTA section
- Footer

**2. Applications Catalogue Page**

- Netflix-style card grid showing business applications
- Each card: product name, short description, "Coming Soon" or status badge
- Optional: filter/sort controls (future enhancement)
- Back to home navigation

**3. Mentoring Services Catalogue Page**

- Netflix-style card grid showing learning courses and mentoring options
- Each card: service name, short description, "Coming Soon" or status badge
- Optional: filter/sort controls (future enhancement)
- Back to home navigation

**Note:** Catalogue pages use same design system and navigation as landing page for consistency. Future iterations may add detail pages, but MVP focuses on discovery/validation.

### Accessibility: WCAG 2.1 Level AA

**Compliance Requirements:**

- **Color Contrast:** Minimum 4.5:1 for normal text, 3:1 for large text (teal #14B8A6 on white, navy #1E3A8A text meet this)
- **Keyboard Navigation:** All interactive elements (CTAs, accordion, links) accessible via Tab/Enter/Space
- **Screen Reader Support:** Semantic HTML, ARIA labels for icon-only elements, alt text for all images/GIFs
- **Focus Indicators:** Visible focus rings on all focusable elements
- **Responsive Text:** Text remains readable when zoomed to 200%
- **Touch Targets:** Minimum 44x44px tap targets for mobile (all CTAs, accordion headers)

**Testing:** Use axe DevTools or Lighthouse accessibility audit to verify compliance before launch.

### Branding

**Brand Identity:**

**Color Palette:**

- Primary: Teal (#14B8A6) - main brand color for CTAs, accents
- Secondary: Deep Navy (#1E3A8A) - headings, important text
- Accent: Warm Orange (#F59E0B) - highlights, hover states
- Neutrals: White (#FFFFFF) backgrounds, grays for text hierarchy

**Typography:**

- Font Family: **Inter** (Google Font, free, excellent Indonesian character support)
- Headlines: 700-800 weight, generous line-height
- Body: 400 weight, optimized for readability on mobile
- All text in Indonesian with culturally adapted phrasing

**Visual Style:**

- Minimalist, flat design (no heavy shadows or 3D effects)
- Outlined icons (stroke style, 2px weight, rounded corners)
- Friendly illustrations where needed (avoid generic stock photos)
- Ample white space to reduce cognitive overload
- Rounded corners on cards and buttons (friendly, approachable)

**Voice & Tone:**

- Casual Indonesian ("Yuk", "Intip", "Gampang kok!")
- Friend helping friend, not corporation selling
- Honest, transparent, encouraging
- Never condescending or overly technical

**Logo/Branding Assets:** TBD (user to provide or design separately)

### Target Device and Platforms: Web Responsive

**Primary:** Mobile-first responsive web (70%+ expected traffic from smartphones)

**Supported Devices:**

- **Mobile:** 375px-768px viewport (portrait orientation priority)
- **Tablet:** 768px-1024px viewport
- **Desktop:** 1024px+ viewport

**Browser Support:**

- Mobile: Chrome Android 90+, Safari iOS 13+, Samsung Internet 14+
- Desktop: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- No IE11 support

**Breakpoint Strategy:**

- Mobile-first CSS (default styles for small screens, media queries scale up)
- 3-column value props become 1-column stack on mobile
- Side-by-side CTAs remain side-by-side even on mobile (thumb-friendly, not stacked)
- Typography scales fluidly using clamp() or viewport units

---

## Technical Assumptions

### Repository Structure: Monorepo

**Decision:** Single monorepo containing landing page, catalogue pages, and shared components.

**Rationale:**

- MVP scope is small enough (3 pages) that monorepo overhead is minimal
- Shared components (header, footer, CTA buttons, card layouts) benefit from single source of truth
- Simplifies deployment (one build, one deploy) on Vercel/Netlify
- Future migration to proper monorepo tool (Turborepo, Nx) possible when adding backend services

**Structure:**

```
/
├── pages/              # Nuxt pages (index.vue, catalogue-apps.vue, catalogue-mentoring.vue)
├── components/         # Reusable Vue components (Hero, ValueProps, FAQ, etc.)
├── assets/             # Images, icons, GIFs
├── composables/        # Vue composables (analytics, scroll tracking)
├── public/             # Static files (sitemap.xml, robots.txt, favicon)
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies
```

### Service Architecture

**Decision:** Static Site Generation (SSG) with client-side analytics and optional serverless functions for future needs.

**Rationale:**

- **MVP:** Pure static site generated at build time via Nuxt SSG
  - Maximum performance (<3s load time on 3G)
  - Excellent SEO (pre-rendered HTML with meta tags, structured data)
  - Free hosting on Vercel/Netlify
  - No backend complexity or costs

- **Phase 2 (optional):** Add serverless edge functions if needed
  - Smart CTA logic (scroll tracking, personalization)
  - A/B testing assignments
  - Form handling (email waitlist capture)

- **Future:** Microservices or serverless backend when adding:
  - User accounts (students, business owners)
  - Product catalogue management (CRUD for POS, courses)
  - Mentor booking system
  - Payment processing

**Technologies:**

- **Build:** Nuxt 3 SSG mode (generates static HTML/CSS/JS at build time)
- **Runtime:** Client-side JavaScript for interactivity (accordion, analytics tracking, animations)
- **APIs:** None for MVP; future integration with backend services via REST or GraphQL

### Testing Requirements

**Decision:** Unit + Integration testing for MVP, with manual QA supplementing automated tests.

**Test Coverage:**

- **Unit Tests:** Critical business logic (if any), utility functions, composables
  - Framework: Vitest (recommended for Nuxt 3)
  - Coverage target: 70%+ for utility code

- **Component Tests:** Vue components (Hero, ValueProps, FAQ accordion behavior)
  - Framework: Vitest + Vue Test Utils
  - Focus on: User interactions (CTA clicks, accordion expand/collapse), accessibility (ARIA, keyboard nav)

- **Integration Tests:** Page-level functionality, navigation flows
  - Framework: Playwright or Cypress (end-to-end testing)
  - Critical paths: Landing page → CTA click → Catalogue page navigation

- **Performance Tests:** Lighthouse CI in GitHub Actions
  - Assert: Performance 90+, Accessibility 100, SEO 100, Best Practices 90+
  - Automated on every deploy

- **Manual QA:**
  - Real device testing (Indonesian mobile devices on 3G)
  - Cross-browser compatibility checks
  - Accessibility testing with screen readers
  - User testing with 5-10 people from each target segment

**Testing Strategy:**

- Test early and often (TDD for critical components)
- Automated tests run on every pull request
- Manual QA before each deployment
- Post-launch: Monitor analytics and user feedback for issues

### Additional Technical Assumptions and Requests

**Frontend Framework:**

- **Nuxt 3** (Vue 3 framework) for SSG capabilities and excellent SEO support
- **Rendering:** Static Site Generation (pre-render all pages at build time)
- **Vue Version:** Vue 3 with Composition API for modern, maintainable code

**Styling:**

- **Tailwind CSS** for utility-first styling (rapid development, small bundle size with PurgeCSS)
- **Component Library:** HeadlessUI Vue or Radix Vue for accessible accordion, modals (future)
- **Custom CSS:** Minimal custom styles beyond Tailwind utilities

**Animation:**

- **Hero typing animation:** GSAP or simple CSS keyframes (lightweight, performant)
- **Scroll animations:** Intersection Observer API for triggering animations on scroll
- **Smooth scroll:** CSS `scroll-behavior: smooth` or lightweight JS library

**Icons:**

- **Icon Set:** Heroicons, Lucide Icons, or Phosphor Icons (outlined style, consistent stroke weight)
- **Format:** SVG inline for performance and styling flexibility

**Analytics:**

- **Google Analytics 4** with custom event tracking (CTA clicks, scroll depth, FAQ interactions)
- **Google Tag Manager** for flexibility to add more tracking tools without code changes
- **Privacy:** Implement cookie consent if required by Indonesian PDP law

**SEO:**

- **Meta tags:** Managed via Nuxt's useHead() composable (dynamic per page)
- **Structured data:** JSON-LD for FAQ schema (rich snippets)
- **Sitemap:** Auto-generated via @nuxtjs/sitemap module
- **Robots.txt:** Allow all crawlers, link to sitemap
- **Open Graph:** Images and descriptions for social sharing

**Performance Optimization:**

- **Image optimization:** Nuxt Image module for automatic lazy loading, WebP conversion
- **Code splitting:** Automatic via Nuxt (route-based chunking)
- **Bundle optimization:** Vite for fast builds, tree-shaking, minification
- **CDN:** Vercel/Netlify Edge Network for global distribution with Jakarta/Singapore PoPs

**Hosting & Deployment:**

- **Primary:** Vercel (excellent Nuxt support) OR Netlify (equivalent features)
- **Free tier:** Sufficient for MVP (100GB bandwidth, unlimited builds)
- **Domain:** makinmudah.com (assume already owned or to be purchased)
- **SSL:** Automatic via hosting platform
- **CI/CD:** GitHub Actions or built-in Vercel/Netlify deploy on git push

**Error Tracking:**

- **Sentry** (free tier) for client-side error monitoring
- **LogRocket** (optional, future) for session replay and debugging

**Development Tools:**

- **Package Manager:** pnpm or npm (consistent across team)
- **Code Quality:** ESLint + Prettier for linting and formatting
- **Git:** GitHub for version control
- **Editor:** VSCode with Vue extension recommended

**Browser Support:**

- **No polyfills needed** for modern browsers (Chrome 90+, Safari 13+)
- **Transpilation:** Vite handles necessary transforms
- **CSS:** Modern features (Grid, Flexbox, CSS variables) safe to use

**Constraints:**

- **Budget:** Free tier hosting only (Vercel/Netlify)
- **Timeline:** 4-6 weeks from approval to launch
- **Resources:** 1-2 developers (solo or small team)
- **No existing backend:** Greenfield project, no legacy systems to integrate

**Future Integrations (Out of Scope for MVP):**

- CRM (HubSpot, Pipedrive, or simple Airtable)
- Email marketing (Mailchimp, SendGrid)
- Payment gateway (Midtrans for Indonesia)
- WhatsApp Business API for customer support
- Content CMS (Strapi, Sanity) for catalogue management

---

## Epic List

### Epic 1: Foundation & Complete Landing Page

**Goal:** Establish Nuxt project infrastructure and deliver fully functional landing page with all sections (hero, value props, problem/solution, FAQ, final CTA) deployed to production.

### Epic 2: Catalogue Pages, Analytics & SEO Optimization

**Goal:** Build applications and mentoring catalogue pages with Netflix-style cards, integrate Google Analytics 4 event tracking, implement comprehensive SEO (meta tags, structured data, sitemap), and optimize performance to meet Lighthouse targets.

---

## Epic 1: Foundation & Complete Landing Page

**Epic Goal:** Establish Nuxt 3 project infrastructure with proper tooling (Git, CI/CD, linting, testing), implement all landing page sections (hero, value props, problem/solution, FAQ, final CTA) with mobile-first responsive design, and deploy to production with basic health check validation.

### Story 1.1: Project Setup and Infrastructure

**As a** developer,
**I want** a properly configured Nuxt 3 project with development tools and deployment pipeline,
**so that** I have a solid foundation to build features efficiently and deploy reliably.

**Acceptance Criteria:**

1. Nuxt 3 project initialized with TypeScript support and Vue 3 Composition API
2. Tailwind CSS configured with custom color palette (teal #14B8A6, navy #1E3A8A, orange #F59E0B) and Inter font
3. Git repository created with `.gitignore` for node_modules, `.nuxt`, `dist`, and environment files
4. ESLint and Prettier configured for code quality and formatting
5. Package.json includes dev dependencies: Vitest, Vue Test Utils, @nuxtjs/tailwindcss
6. Vercel or Netlify deployment configured with automatic deploys on main branch push
7. Basic health check page (`/health`) displays "OK" and returns 200 status
8. Project deploys successfully to production URL (e.g., makinmudah.vercel.app)
9. README.md documents: project setup, local development commands, deployment process
10. Project structure follows Technical Assumptions (pages/, components/, assets/, composables/, public/)

### Story 1.2: Hero Section with Animated Headline and Dual CTAs

**As a** visitor,
**I want** to immediately see an engaging headline with clear action buttons for my needs,
**so that** I understand the value proposition and can choose my path (business or learning).

**Acceptance Criteria:**

1. Hero section displays headline "Hidup makin mudah dengan Makin Mudah" with "Makin Mudah" words emphasized (bold/different color)
2. Headline has typing animation effect on page load using GSAP or CSS keyframes
3. Headline is responsive: scales fluidly across mobile (24-32px), tablet (32-40px), desktop (40-56px) using clamp()
4. Two CTA buttons displayed side-by-side: "Intip Yuk" (teal background) and "Mulai Dulu" (orange background)
5. CTA buttons are thumb-friendly (minimum 44x44px tap target) and maintain side-by-side layout even on mobile
6. "Intip Yuk" button navigates to `/catalogue-apps` (placeholder page for now)
7. "Mulai Dulu" button navigates to `/catalogue-mentoring` (placeholder page for now)
8. Hero section has clean white background with ample padding/spacing
9. Hero section is visually distinct (takes up 70-90% of viewport height on load)
10. All text is in Indonesian language
11. Component is accessible (semantic HTML, ARIA labels if needed, keyboard navigable)

### Story 1.3: Value Propositions Section with Three-Column Layout

**As a** visitor,
**I want** to quickly understand the three main benefits of Makin Mudah,
**so that** I can decide if this solution addresses my needs.

**Acceptance Criteria:**

1. Value propositions section displays three columns on desktop/tablet
2. Column 1: Price tag icon + "Bayar Seperlumu, Bayar Semaumu" headline + brief description
3. Column 2: Browser/window icon + "Tanpa Instalasi, Buka Dimana Saja" headline + brief description
4. Column 3: Hands helping icon + "Didampingi Mentor" headline + brief description
5. Icons are SVG format, outlined style, 48-64px size, teal color
6. Icons use Heroicons, Lucide, or Phosphor icon set (consistent stroke weight)
7. On mobile (<768px), three columns stack vertically with proper spacing
8. Each column has centered text alignment and icon positioned above headline
9. Section has light gray background (#F3F4F6) to differentiate from hero/other sections
10. Typography follows design system: headlines 600 weight, descriptions 400 weight, Inter font
11. Section is keyboard navigable and screen reader accessible

### Story 1.4: Problem and Solution Section with Visual Demos

**As a** visitor,
**I want** to see my specific problems acknowledged and solutions demonstrated visually,
**so that** I trust that Makin Mudah understands my pain points and can actually solve them.

**Acceptance Criteria:**

1. Section displays two problem-solution pairs in stacked layout (problem → solution → visual demo)
2. Problem 1: "IT terlalu ribet dan bikin pusing?" headline with empathetic description
3. Solution 1: "Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun" with explanation
4. Visual demo 1: GIF or static image showing simple UI (placeholder acceptable for MVP)
5. Problem 2: "Takut terjebak biaya mahal?" headline with description
6. Solution 2: "Bayar Seperlumu, Bayar Semaumu" with pricing flexibility explanation
7. Visual demo 2: Graphic showing flexible payment options (monthly/yearly/PAYG visualization)
8. CTA button "Intip Solusinya" displayed after second solution, navigates to `/catalogue-apps`
9. CTA button uses teal background, white text, rounded corners, accessible (44x44px min)
10. Section responsive: stacks cleanly on mobile, side-by-side text+visual on desktop (if space allows)
11. Images/GIFs are optimized (<500KB each), lazy-loaded for performance
12. All Indonesian language, casual tone maintained

### Story 1.5: FAQ Accordion Section

**As a** visitor,
**I want** to get answers to common questions without leaving the page,
**so that** my objections are addressed before I decide to explore further.

**Acceptance Criteria:**

1. FAQ section displays accordion with 7 questions in collapsed state on page load
2. Question 1: "Berapa sih biayanya?" with complete answer from docs/faq-content.md (pricing tiers, transparency messaging)
3. Question 2: "Butuh komputer khusus gak?" with complete answer from docs/faq-content.md (web-based, device flexibility)
4. Question 3: "Gimana cara mulainya?" with complete answer from docs/faq-content.md (3-step onboarding process)
5. Question 4: "Kalau ada masalah, bisa tanya siapa?" with complete answer from docs/faq-content.md (support channels, mentor availability)
6. Question 5: "Apa aja yang didapat?" with complete answer from docs/faq-content.md (feature list for apps and mentoring)
7. Question 6: "Harus komitmen berapa lama?" with complete answer from docs/faq-content.md (flexible terms, no long-term lock-in)
8. Question 7: "Bisa coba dulu gak?" with complete answer from docs/faq-content.md (trial options, demo availability)
9. All FAQ content sourced from docs/faq-content.md - update placeholders (phone number, email) with actual contact info before launch
10. Clicking a question expands answer smoothly (CSS transition or Vue transition, 300ms ease-in-out)
11. Only one question expanded at a time (accordion behavior) - expanding new question collapses previous
12. Expanded state shows answer with proper typography: questions 18-20px bold navy, answers 16px regular dark gray
13. Bullet points use ✅ checkmark emoji or custom SVG icon for visual appeal
14. Accordion is keyboard accessible (Tab to navigate, Enter/Space to toggle)
15. Accordion uses ARIA attributes (aria-expanded, aria-controls) for screen readers OR <details>/<summary> HTML5 elements
16. Accordion component uses HeadlessUI Vue or Radix Vue for accessibility, OR custom implementation with proper ARIA
17. Section has white background to contrast with problem/solution section

### Story 1.6: Final CTA Section and Footer

**As a** visitor,
**I want** a clear call-to-action after reading the full landing page,
**so that** I can easily take the next step to explore solutions.

**Acceptance Criteria:**

1. Final CTA section displays headline "Siap untuk hidup yang makin mudah?" (centered, large, navy color)
2. CTA button "Intip Solusinya" displayed below headline (teal background, white text, large size)
3. CTA button navigates to `/catalogue-apps` (consistent with earlier CTAs)
4. Section has subtle background color or pattern to make it visually distinct
5. Button is accessible (44x44px min, keyboard navigable, ARIA label if icon-only)
6. Footer section displays below CTA with light gray background
7. Footer contains copyright notice: "© 2026 Makin Mudah. All rights reserved." (or similar)
8. Footer text is small (12-14px), centered, gray color
9. Footer has minimal padding (16-24px vertical)
10. Footer is responsive and looks clean on all screen sizes

### Story 1.7: Mobile-First Responsive Design and Performance Optimization

**As a** mobile visitor on 3G connection,
**I want** the landing page to load quickly and be easy to navigate on my smartphone,
**so that** I don't abandon due to slow loading or frustrating mobile experience.

**Acceptance Criteria:**

1. All landing page sections are fully responsive from 320px (small mobile) to 1920px+ (large desktop)
2. Typography scales fluidly using CSS clamp() or viewport units (no awkward jumps at breakpoints)
3. Images and GIFs are optimized using Nuxt Image module (lazy loading, WebP format, responsive sizes)
4. Total page weight is under 2MB (excluding external scripts like Google Analytics)
5. JavaScript bundle is under 200KB gzipped, CSS under 50KB gzipped
6. Lighthouse performance score is 90+ on mobile simulation (DevTools throttled to 3G)
7. First Contentful Paint (FCP) is under 1.5 seconds on simulated 3G
8. Largest Contentful Paint (LCP) is under 2.5 seconds
9. Cumulative Layout Shift (CLS) is under 0.1 (no content jumps during load)
10. All tap targets are minimum 44x44px on mobile (CTAs, accordion headers)
11. Mobile navigation is thumb-friendly (buttons within easy reach)
12. Test on real mobile device (Chrome Android or Safari iOS) and verify smooth performance

### Story 1.8: Accessibility Compliance (WCAG 2.1 Level AA)

**As a** visitor with disabilities,
**I want** to navigate and use the landing page with keyboard and screen reader,
**so that** I have equal access to information and functionality.

**Acceptance Criteria:**

1. All interactive elements (CTAs, accordion, links) are keyboard accessible (Tab to focus, Enter/Space to activate)
2. Visible focus indicators (outline or ring) on all focusable elements
3. Color contrast ratios meet WCAG AA: 4.5:1 for normal text, 3:1 for large text (verify with color picker)
4. All images and icons have appropriate alt text or ARIA labels (describe function, not decoration)
5. Heading hierarchy is logical (H1 for hero headline, H2 for section headlines, H3 for subsections)
6. Accordion uses proper ARIA (aria-expanded, aria-controls, aria-labelledby)
7. CTA buttons have descriptive text (not just "Click Here") - already satisfied with Indonesian labels
8. Page is navigable with screen reader (test with NVDA on Windows or VoiceOver on macOS)
9. Form elements (if any) have associated labels (not applicable for MVP, but structure in place)
10. HTML is semantic (nav, header, main, section, footer tags)
11. Run axe DevTools accessibility audit with 0 critical or serious issues
12. Lighthouse accessibility score is 100

---

### Epic 2: Catalogue Pages, Analytics & SEO Optimization

**Goal:** Build applications and mentoring catalogue pages with Netflix-style cards, implement contact form for lead capture, enable comprehensive analytics tracking, optimize SEO for Indonesian search visibility, and ensure all performance targets are met.

**Why This Matters:** Epic 1 creates awareness and interest; Epic 2 delivers the complete conversion funnel—catalogue browsing to inquiry submission. Analytics validates our dual-audience hypothesis. SEO drives organic discovery beyond paid channels. Contact form converts interest into actionable leads.

**Stories:**

### Story 2.1: Applications Catalogue Page with Netflix-Style Card Layout

**As a** small business owner exploring IT solutions
**I want** to browse available applications in a visually appealing card-based catalogue
**So that** I can quickly understand what products are available and select ones relevant to my needs

**Acceptance Criteria:**

1. Catalogue page accessible via URL route `/katalog/aplikasi` when clicking "Intip Yuk" CTA
2. Page displays heading "Aplikasi untuk Bisnis Anda" with subtitle explaining available solutions
3. Applications displayed as card grid: 1 column (mobile), 2 columns (tablet), 3 columns (desktop 1024px+)
4. Each application card contains: Product name, brief description (2-3 sentences), key features list (3-5 bullets), pricing indicator, CTA button
5. Card visual design: White background, teal border on hover, subtle shadow, rounded corners (8px border-radius)
6. POS application card includes: "Sistem Kasir Modern", description of point-of-sale features, "Dari Rp X/bulan" pricing
7. Learning Courses placeholder card with "Segera Hadir" (Coming Soon) badge for products under development
8. Each card has "Pelajari Lebih Lanjut" (Learn More) button linking to `/kontak` with product pre-selected via query parameter (see Story 2.7)
9. Page maintains consistent header with Makin Mudah logo and navigation back to landing page
10. Footer displays same copyright information as landing page
11. Page meta tags: title "Aplikasi Bisnis - Makin Mudah", description with keywords, Open Graph tags
12. Page loads in <3 seconds, meets same performance standards as landing page (LCP <2.5s)

### Story 2.2: Mentoring Services Catalogue Page

**As a** student seeking IT learning and mentorship
**I want** to view available mentoring services and courses in an organized catalogue
**So that** I can choose learning programs that match my skill level and budget

**Acceptance Criteria:**

1. Catalogue page accessible via URL route `/katalog/mentoring` when clicking "Mulai Dulu" CTA
2. Page displays heading "Program Belajar & Mentoring" with encouraging subtitle about learning journey
3. Services displayed in same Netflix-style card grid layout as applications catalogue
4. Each service card contains: Program name, skill level indicator (Pemula/Menengah/Lanjut), learning outcomes list, duration estimate, pricing, CTA button
5. Learning Courses card includes: Course topic, technologies covered, project-based learning mention, mentor supervision availability
6. Pricing displayed as flexible options: "Bayar Per Sesi" or "Paket Bulanan" with price ranges
7. Each card emphasizes "Didampingi Mentor" with icon to reinforce human support
8. "Mulai Belajar" (Start Learning) CTA button on each card linking to `/kontak` with service pre-selected via query parameter (see Story 2.7)
9. Page includes testimonial or trust-building element: "Belajar Bareng, Bukan Sendirian" messaging
10. Responsive card grid matches applications catalogue layout (1/2/3 columns)
11. Page meta tags: title "Program Mentoring IT - Makin Mudah", description targeting students, Open Graph tags
12. Accessibility: All cards keyboard navigable, screen reader friendly descriptions

### Story 2.3: Google Analytics 4 Integration and Event Tracking

**As a** product owner analyzing user behavior
**I want** comprehensive analytics tracking across landing and catalogue pages
**So that** I can measure conversion rates, understand user paths, and optimize the experience

**Acceptance Criteria:**

1. Google Analytics 4 property created and measurement ID configured in Nuxt config
2. GA4 tracking script loads asynchronously in app layout, respects Indonesian PDP law consent requirements
3. Page view tracking automatically fires for: landing page (`/`), applications catalogue (`/katalog/aplikasi`), mentoring catalogue (`/katalog/mentoring`)
4. Custom event tracking for "cta_click" with parameters: `cta_label` (Intip Yuk/Mulai Dulu/Intip Solusinya), `cta_location` (hero/final/floating), `destination_url`
5. Custom event tracking for "scroll_depth" at 25%, 50%, 75%, 100% milestones
6. Custom event tracking for "faq_interaction" with parameters: `question_number`, `action` (open/close)
7. Custom event tracking for "catalogue_card_click" with parameters: `product_name`, `catalogue_type` (aplikasi/mentoring)
8. Custom event tracking for "value_prop_view" when value propositions section enters viewport
9. GA4 events include user properties: `user_type_inferred` (business/student based on CTA clicked), `device_category`, `language`
10. Enhanced measurement enabled for: outbound clicks, site search, video engagement (future), file downloads
11. Analytics composable created (`useAnalytics.js`) for easy event tracking throughout app
12. Development environment excludes GA4 tracking (uses debug mode or disabled entirely)
13. Documentation added to README: how to view analytics, key metrics to monitor, event naming conventions

### Story 2.4: SEO Implementation and Structured Data

**As a** potential user searching for IT solutions or mentoring in Indonesia
**I want** Makin Mudah pages to appear prominently in search results with rich information
**So that** I can easily discover the services when searching for relevant terms

**Acceptance Criteria:**

1. All pages include unique, keyword-optimized meta titles: Landing (<60 chars), Applications catalogue, Mentoring catalogue
2. All pages include compelling meta descriptions (150-160 chars) with primary keywords and call-to-action
3. Open Graph meta tags implemented for social sharing: `og:title`, `og:description`, `og:image` (1200x630px), `og:url`, `og:type`
4. Twitter Card meta tags for enhanced Twitter sharing: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
5. Canonical URLs set for each page to prevent duplicate content issues
6. Language tag set to Indonesian (`<html lang="id">`)
7. FAQ structured data implemented using schema.org `FAQPage` markup with all 7 questions
8. Organization structured data added to landing page: name, logo, contact info, social profiles
9. Breadcrumb structured data added to catalogue pages showing: Home > Katalog > [Aplikasi/Mentoring]
10. XML sitemap generated listing all pages: `/`, `/katalog/aplikasi`, `/katalog/mentoring`, `/kontak` with priority and change frequency
11. Robots.txt file created allowing all pages for indexing, reference to sitemap location
12. Structured data validated with Google Rich Results Test, no errors or warnings
13. Primary keywords targeted: "solusi IT mudah", "mentoring IT Indonesia", "aplikasi bisnis sederhana", "belajar IT terjangkau"

### Story 2.5: Performance Optimization and Lighthouse Targets

**As a** user on a mobile device with limited bandwidth
**I want** all pages to load quickly and smoothly
**So that** I have a frustration-free experience regardless of my connection speed

**Acceptance Criteria:**

1. Landing page achieves Lighthouse scores: Performance ≥90, Accessibility 100, Best Practices ≥90, SEO 100
2. Catalogue pages achieve Lighthouse scores: Performance ≥85, Accessibility 100, Best Practices ≥90, SEO 100
3. Core Web Vitals targets met: LCP <2.5s, FID <100ms, CLS <0.1 on all pages
4. Images optimized: WebP format with PNG fallback, lazy loading for below-fold images, responsive srcset attributes
5. Hero typing animation uses CSS keyframes (not heavy JavaScript library) for minimal performance impact
6. Fonts optimized: Inter loaded via Google Fonts with `font-display: swap`, only weights 400/700 loaded
7. Critical CSS inlined for above-the-fold content, non-critical CSS loaded asynchronously
8. JavaScript bundle size <100KB (gzipped) for landing page, <150KB for catalogue pages
9. Nuxt SSG pre-renders all static pages at build time, eliminating server-side rendering delays
10. Compression enabled: Gzip or Brotli for text assets (HTML, CSS, JS)
11. Third-party scripts (GA4) loaded asynchronously with defer attribute to prevent render blocking
12. Performance monitoring setup: Lighthouse CI runs on every build, fails if scores drop below thresholds
13. Testing performed on throttled 3G connection (2G fallback acceptable), validates <3s load time requirement from NFR1

### Story 2.6: Shared Navigation and Cross-Page Components

**As a** user navigating between landing and catalogue pages
**I want** consistent navigation and visual continuity
**So that** I understand I'm still on the Makin Mudah site and can easily move between sections

**Acceptance Criteria:**

1. Shared header component created containing: Makin Mudah logo (links to `/`), navigation menu
2. Header displays on all pages: landing, applications catalogue, mentoring catalogue
3. Navigation menu includes links: "Beranda" (home), "Aplikasi", "Mentoring", with active state highlighting
4. Header is sticky on desktop (fixed position on scroll), static on mobile to save screen space
5. Logo uses SVG format, teal color (#14B8A6), includes alt text "Makin Mudah"
6. Shared footer component created with: Copyright text, future links placeholders (Tentang Kami, Kontak, Kebijakan Privasi)
7. Footer displays consistently across all pages with same styling
8. Breadcrumb component created for catalogue pages showing user path: Home > Katalog > [Section]
9. Breadcrumbs improve navigation and SEO (schema.org BreadcrumbList structured data)
10. "Back to Home" link prominently displayed on catalogue pages for easy navigation
11. Smooth page transitions implemented using Nuxt page transitions (fade effect, 200ms duration)
12. Mobile menu (hamburger) implemented for navigation links on screens <768px width
13. All navigation elements meet WCAG 2.1 AA: sufficient color contrast, keyboard accessible, focus indicators visible

### Story 2.7: Contact Form with Email Integration

**As a** visitor interested in a specific product or service
**I want** to submit an inquiry with my contact information
**So that** the Makin Mudah team can reach out to me with more details

**Acceptance Criteria:**

1. Contact form accessible via route `/kontak` with dedicated page
2. Catalogue card "Pelajari Lebih Lanjut" and "Mulai Belajar" buttons link to `/kontak` with product/service pre-selected via query parameter (e.g., `/kontak?produk=POS`)
3. Form displays fields: Nama (Name), Email, Nomor Telepon (Phone - optional), Minat (Interest - dropdown), Pesan (Message - textarea)
4. Interest dropdown pre-populated from query parameter, includes options: "POS System", "Learning Courses", "Konsultasi Umum", "Lainnya"
5. Form validation implemented: Name required (min 2 chars), Email required (valid email format), Message required (min 10 chars)
6. Validation errors displayed in Indonesian below each field with red text (WCAG AA contrast)
7. Submit button labeled "Kirim Pesan" (Send Message), disabled state while submitting, teal background
8. Form submission uses Nuxt server API route (`/api/contact`) to send email via nodemailer or similar
9. Email sent to configured recipient (environment variable `CONTACT_EMAIL`) with subject "Inquiry dari Makin Mudah - [Interest]"
10. Email body includes: Name, Email, Phone, Interest, Message, Timestamp, Source URL
11. Success state displays confirmation message: "Terima kasih! Pesan Anda sudah terkirim. Kami akan menghubungi Anda segera." with checkmark icon
12. Error state displays user-friendly message: "Maaf, ada masalah mengirim pesan. Silakan coba lagi atau hubungi kami di [email]"
13. Form resets after successful submission, allowing user to submit another inquiry
14. Page includes header/footer navigation consistent with other pages
15. Form is fully responsive: single column on mobile, maintains usability on all screen sizes
16. Form is keyboard accessible with proper tab order and visible focus indicators

---

---

## PM Checklist Validation Report

**Validation Date:** 2026-01-13
**Validated By:** PM John

### Executive Summary

**Overall PRD Completeness:** 96%
**MVP Scope Appropriateness:** Just Right
**Readiness for Architecture Phase:** ✅ Ready

The PRD is comprehensive and provides clear direction for architectural design. All core requirements are well-defined with contact form lead capture now specified, user stories are properly structured with 15 total stories, and technical constraints are explicit.

### Category Assessment

| Category                         | Status  | Completeness |
| -------------------------------- | ------- | ------------ |
| 1. Problem Definition & Context  | PASS    | 100%         |
| 2. MVP Scope Definition          | PARTIAL | 85%          |
| 3. User Experience Requirements  | PASS    | 100%         |
| 4. Functional Requirements       | PASS    | 100%         |
| 5. Non-Functional Requirements   | PARTIAL | 90%          |
| 6. Epic & Story Structure        | PASS    | 100%         |
| 7. Technical Guidance            | PASS    | 95%          |
| 8. Cross-Functional Requirements | PASS    | 95%          |
| 9. Clarity & Communication       | PARTIAL | 85%          |

### Critical Findings

**HIGH Priority Improvements Needed:**

1. ✅ **Contact Form Strategy** - RESOLVED: Added FR17 and Story 2.7 specifying email-based contact form with Nuxt server API route using nodemailer.

2. **MVP Validation Plan** - Success metrics defined but testing methodology missing. Recommendation: Add section documenting beta user recruitment, feedback collection approach, iteration timeline.

3. ✅ **Data Storage for Inquiries** - RESOLVED: Story 2.7 specifies email submission (no database required for MVP), inquiry data sent to configured email address.

**MEDIUM Priority Enhancements:**

4. Out-of-Scope list not explicitly documented (prevents scope creep)
5. Backup/disaster recovery procedures not addressed (low risk for static site)
6. Stakeholder identification and approval process undefined

**LOW Priority:**

7. Technical risk areas not explicitly flagged (teams will identify during planning)

### Strengths

- Problem statement well-quantified with market data
- User stories follow consistent format with comprehensive acceptance criteria (10-15 per story)
- Performance requirements specific and measurable (Lighthouse scores, Core Web Vitals, load times)
- Accessibility prioritized (WCAG 2.1 AA, dedicated Story 1.8)
- Technical stack decisions clear and justified (Nuxt 3 SSG, Tailwind, specific component libraries)
- Dual-audience approach innovative and well-executed through UX design

### MVP Scope Analysis

**Appropriately Minimal:**

- Landing page (5 sections) + 2 catalogue pages = minimal viable marketing presence
- Analytics and SEO support validation goals without bloating scope
- No premature features (user accounts, payments, actual products)

**Could Cut if Timeline Compresses:**

- Hero typing animation (polish, not essential)
- Visual demos in Problem/Solution (placeholders acceptable)
- Breadcrumb navigation (helpful but overkill for 3-page site)

**Timeline Realism:**
4-6 weeks achievable for 1-2 developers. Biggest risk: content creation (Indonesian copy, GIFs) often takes longer than coding.

### Final Recommendation

**✅ READY FOR ARCHITECT** - Proceed with architectural design. Address HIGH priority items (contact form, validation plan) within 1-2 days to ensure complete development handoff. MEDIUM items can be refined during Epic 1 sprint planning.

---

## Next Steps

### For UX Expert

**Context:** The PRD defines a dual-audience landing page for Makin Mudah (Indonesian IT solutions + mentoring) targeting small business owners and students. The page uses culturally adapted Indonesian messaging ("Hidup makin mudah dengan Makin Mudah"), flexible pricing positioning ("Bayar Seperlumu, Bayar Semaumu"), and self-directed pathways ("Intip Yuk" for business, "Mulai Dulu" for students).

**Your Mission:** Design high-fidelity mockups and visual specifications that bring the PRD's UX vision to life with warm, approachable, distinctly Indonesian design language.

**Key Design Challenges:**

1. **Dual CTAs Without Confusion** - Hero section presents two side-by-side CTAs. Design must make self-selection obvious without overwhelming or creating decision paralysis. Consider: color coding, iconography, visual separation, micro-copy.

2. **Indonesian Cultural Authenticity** - Design language must feel genuinely Indonesian, not Western template with Indonesian text. Leverage: local color preferences, familiar visual metaphors, casual warmth vs corporate formality.

3. **Simplicity Proof Through Design** - Target users fear IT complexity. The design itself must prove simplicity through: clean whitespace, limited color palette (teal #14B8A6, navy #1E3A8A, orange #F59E0B), obvious interaction patterns, zero jargon.

4. **Value Props Visual Hierarchy** - Three-column value propositions (Price flexibility, No installation, Mentor support) must scan in <5 seconds. Design challenge: icon selection, typography balance, responsive stacking order.

5. **FAQ Discoverability** - Accordion FAQ is critical for conversion but often overlooked. Design must: make questions scannable at glance, encourage interaction, show expanded state clearly.

6. **Performance-Conscious Assets** - Design within constraints: images <500KB, GIFs for demos, WebP format, mobile-first responsive breakpoints (375px, 768px, 1024px).

**Deliverables Needed:**

- High-fidelity mockups for landing page (mobile 375px, desktop 1440px)
- Component specifications: Hero, Value Props, Problem/Solution, FAQ, Final CTA, Footer
- Visual design system: color tokens, typography scale (Inter font), spacing, shadows, border-radius
- Icon selection/design for value propositions (price tag, browser, hands helping)
- Interaction states: button hovers, FAQ expand/collapse, focus indicators (WCAG AA compliant)
- GIF/visual demo concepts for Problem/Solution section (showing UI simplicity + payment flexibility)
- Catalogue page mockups: Netflix-style card layout, applications vs mentoring differentiation

**Design System Foundation:**

- **Primary Color:** Teal #14B8A6 (trust, accessibility, modern)
- **Secondary Color:** Deep Navy #1E3A8A (professionalism, contrast)
- **Accent Color:** Warm Orange #F59E0B (energy, action, friendliness)
- **Typography:** Inter font family (400 regular, 700 bold)
- **Accessibility:** WCAG 2.1 Level AA minimum (4.5:1 contrast for normal text, 3:1 for large text)
- **Tone:** Warm, friendly, conversational - like a helpful friend, not a sales pitch

**Reference Documents:**

- Full PRD: docs/prd.md
- User Personas & Insights: docs/brief.md (Target Users section)
- Brainstorming Session: docs/brainstorming-session-results.md (Journey Mapping section)

**Success Criteria:**
Your designs succeed when:

- Users understand core value proposition within 10 seconds of landing
- CTA paths feel obvious and non-intimidating
- Design authentically represents Indonesian cultural context
- Visual hierarchy guides natural scroll flow (hero → value → problem → FAQ → conversion)
- Mobile experience feels native, not cramped desktop adaptation

---

### For Architect

**Context:** The PRD specifies a Nuxt 3 Static Site Generation (SSG) landing page with aggressive performance targets (<3s load on 3G, Lighthouse 90+) and comprehensive analytics/SEO requirements. Target: Indonesian market with 3G mobile as baseline connectivity.

**Your Mission:** Design technical architecture, component structure, and implementation strategy that achieves performance targets while maintaining code quality and developer experience.

**Key Architectural Challenges:**

1. **Performance Budget Enforcement** - NFR5 requires: JavaScript <100KB (landing), <150KB (catalogue), CSS <50KB gzipped. Challenge: Nuxt 3 + dependencies can easily exceed this. Consider: code splitting strategy, library selection (HeadlessUI vs custom components), lazy loading patterns.

2. **SSG + Dynamic Analytics** - Static generation with client-side GA4 tracking. Challenges: script loading strategy (async/defer), user consent mechanism (Indonesian PDP law), tracking dual-audience paths, avoiding CLS from late-loading scripts.

3. **3G Performance Validation** - NFR1/13 require testing on throttled 3G. Challenge: establishing reproducible testing methodology. Design: Lighthouse CI integration, network throttling setup, performance regression guards.

4. **Typing Animation Performance** - FR1 specifies hero typing animation. Challenge: avoiding heavy JavaScript library while achieving smooth effect. Evaluate: CSS keyframes vs GSAP vs lightweight alternatives, impact on FCP/LCP.

5. **Image Optimization Pipeline** - Visual demos (GIFs), icons, social share images (1200x630 OG image). Challenge: WebP conversion, responsive srcset generation, lazy loading below fold. Design: build-time optimization workflow.

6. **SEO Structured Data** - FR14/Story 2.4 require FAQ schema, Organization schema, Breadcrumbs. Challenge: integrating schema.org markup without bloating HTML. Design: JSON-LD implementation, validation strategy.

7. **Monorepo Structure** - Technical Assumptions specify monorepo for landing + catalogue pages. Challenge: shared components, routing strategy, deployment configuration. Design: file structure, component composition patterns.

8. **Contact Form Email Integration** - Story 2.7 requires server-side email sending for lead capture. Challenges: SMTP service selection (SendGrid free tier, Gmail SMTP, Resend), credential security (environment variables), email deliverability, spam prevention, form validation strategy (client + server-side), error handling for failed sends. Design: Nuxt server API route architecture, email template format, retry logic.

**Technical Decisions Requiring Specification:**

1. **Component Library Choice:** HeadlessUI Vue, Radix Vue, or custom ARIA implementation for accordion?
   - Evaluate: bundle size impact, accessibility compliance, maintenance burden

2. **Analytics Composable API:** Design for `useAnalytics()` - event naming conventions, type safety, testing strategy

3. **CSS Strategy:** Tailwind config (custom color tokens, Inter font integration) + critical CSS inlining approach

4. **Testing Pyramid:** Unit tests (Vitest) for what? E2E (Playwright/Cypress) for what? Accessibility tests (axe-core)?

5. **Build & Deploy Pipeline:** Nuxt SSG build configuration, environment variables (GA4 ID), CI/CD workflow (GitHub Actions?), preview deployments

6. **Responsive Breakpoints Implementation:** Tailwind breakpoints vs Nuxt viewport composables

7. **Email Service Integration:** Contact form requires email sending via Nuxt server API route. Design: nodemailer configuration, SMTP credentials management (environment variables), email template formatting, error handling, rate limiting

**Deliverables Needed:**

- Architecture decision records (ADRs) for key technical choices
- Component hierarchy diagram (layouts, pages, components, composables)
- File structure specification (monorepo organization)
- Build configuration: Nuxt config, Tailwind config, TypeScript setup
- Testing strategy: unit vs E2E coverage, CI integration
- Performance monitoring approach: Lighthouse CI setup, metrics tracking
- Deployment architecture: hosting config, environment setup, rollback strategy
- SEO implementation guide: meta tag patterns, structured data templates

**Performance Constraints (Non-Negotiable):**

- LCP <2.5s on throttled 3G (Lighthouse simulation)
- JavaScript budget: 100KB (landing), 150KB (catalogue) gzipped
- CSS budget: 50KB gzipped
- Lighthouse scores: Performance 90+, Accessibility 100, SEO 100
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

**Browser Support Matrix:**

- Mobile: Chrome Android 90+, Safari iOS 13+, Samsung Internet 14+
- Desktop: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

**Reference Documents:**

- Full PRD: docs/prd.md (especially Technical Assumptions section)
- Performance Requirements: docs/prd.md (NFR1-NFR5)
- Story Details: docs/prd.md (Epic 1 & 2 for implementation specifics)

**Success Criteria:**
Your architecture succeeds when:

- All performance budgets enforced via build-time checks (fail build if exceeded)
- Lighthouse CI automated in pipeline with 90+ thresholds
- Component structure enables parallel development (multiple devs can work independently)
- SEO structured data validates in Google Rich Results Test
- 3G testing reproducible via documented throttling setup

---

**Reference Documents:**

- Project Brief: docs/brief.md
- Brainstorming Session Results: docs/brainstorming-session-results.md
- FAQ Content (Complete Answers): docs/faq-content.md
