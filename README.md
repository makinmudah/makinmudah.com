# Makin Mudah

A modern, responsive web application built with Nuxt 3, Vue 3, and Tailwind CSS.

## Project Overview

Makin Mudah is a comprehensive web platform featuring a landing page, product catalogue, and contact functionality. Built with modern web technologies and best practices for performance, accessibility, and developer experience.

## Prerequisites

- **Node.js**: 24.12.0 or higher (LTS recommended)
- **npm**: 9+ or compatible package manager
- **Git**: For version control

## Tech Stack

- **Framework**: Nuxt 3 (v4.2.2) with Vue 3 (v3.5.26)
- **Styling**: Tailwind CSS with custom brand colors
- **TypeScript**: Full TypeScript support
- **Testing**: Vitest (unit/component) + Playwright (E2E)
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: simple-git-hooks + lint-staged

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd makinmudah.com
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and configure as needed:

```bash
cp .env.example .env
```

Edit `.env` to set your local configuration:

```env
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME=Makin Mudah
NODE_ENV=development
NUXT_DEVTOOLS=true
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

### Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally

### Code Quality

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

### Testing

- `npm test` - Run Vitest in watch mode
- `npm run test:unit` - Run unit tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run E2E tests with Playwright UI

## Project Structure

```
makinmudah.com/
├── .vscode/              # VS Code workspace settings
├── assets/               # Static assets (CSS, images)
│   └── css/             # Global styles
├── components/          # Vue components
│   ├── landing/        # Landing page components
│   ├── catalogue/      # Product catalogue components
│   ├── contact/        # Contact form components
│   └── common/         # Shared/reusable components
├── composables/         # Vue composables
├── pages/               # File-based routing pages
├── server/              # Server-side code
│   └── api/            # API endpoints
├── tests/               # Test files
│   ├── unit/           # Unit tests
│   ├── components/     # Component tests
│   └── e2e/            # End-to-end tests
├── types/               # TypeScript type definitions
├── .env.example         # Environment variables template
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── vitest.config.ts    # Vitest configuration
└── playwright.config.ts # Playwright configuration
```

## Brand Colors

The project uses the following brand colors:

- **Primary (Teal)**: `#14B8A6` - Main brand color
- **Secondary (Navy)**: `#1E3A8A` - Secondary accents
- **Accent (Orange)**: `#F59E0B` - Call-to-action elements

## Development Workflow

### Git Hooks

Pre-commit hooks are configured to automatically:

- Run ESLint and auto-fix issues
- Format code with Prettier
- Only on staged files for fast commits

### Code Style

- **ESLint**: Enforces code quality and consistency
- **Prettier**: Handles code formatting
- **TypeScript**: Strict type checking enabled

### Testing Strategy

- **Unit Tests**: Test individual functions and composables
- **Component Tests**: Test Vue components in isolation
- **E2E Tests**: Test complete user workflows with Playwright

## API Endpoints

### Health Check

```bash
GET /api/health
```

Returns server status and timestamp:

```json
{
  "status": "OK",
  "timestamp": 1234567890
}
```

## Analytics

The application uses Google Analytics 4 (GA4) to track user behavior and measure key metrics.

### Setup

1. **Create a GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Configure Environment Variables**:

```env
# Development (leave empty to disable tracking)
NUXT_PUBLIC_GA_ID=
NUXT_PUBLIC_GA_DEBUG=true

# Production
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NUXT_PUBLIC_GA_DEBUG=false
```

3. **Debug Mode**:
   - When `NUXT_PUBLIC_GA_DEBUG=true`, events are logged to the console
   - Useful for development and testing
   - Set to `false` in production

### Key Metrics Tracked

#### 1. Page Views

- **Event**: Automatic page view tracking
- **Includes**: Page path, page title
- **Triggers**: Initial page load and route changes (including hash navigation)

#### 2. CTA Clicks

- **Event**: `cta_click`
- **Parameters**:
  - `cta_label`: Button text (e.g., "Intip Yuk", "Mulai Dulu")
  - `cta_location`: Where the CTA is located (e.g., "hero", "problem_solution", "final")
  - `destination_url`: Where the button links to
- **Locations**: Hero section, Problem-Solution section, Final CTA

#### 3. User Type Inference

- **Event**: `user_properties`
- **Property**: `user_type_inferred` (values: "business" or "student")
- **Logic**:
  - "Intip Yuk" button → business user
  - "Mulai Dulu" button → student user
- **Storage**: Saved in sessionStorage to track across pages

#### 4. Scroll Depth

- **Event**: `scroll_depth`
- **Parameter**: `depth_percentage` (values: 25, 50, 75, 100)
- **Behavior**: Each milestone fires only once per page load
- **Performance**: Uses `requestAnimationFrame` for smooth tracking

#### 5. FAQ Interactions

- **Event**: `faq_interaction`
- **Parameters**:
  - `question_number`: 1-indexed question number
  - `action`: "open" or "close"

#### 6. Catalogue Card Clicks

- **Event**: `catalogue_card_click`
- **Parameters**:
  - `product_name`: Product title
  - `catalogue_type`: "aplikasi" or "mentoring"
  - `product_id`: Unique product identifier
  - `product_status`: "available" or "coming-soon"

#### 7. Value Proposition Views

- **Event**: `value_prop_view`
- **Parameter**: `viewport_entry`: true
- **Trigger**: When Value Propositions section enters viewport (50% visible)
- **Behavior**: Fires only once per page load

### Privacy & Compliance

- **Indonesian PDP Law Compliance**: Analytics storage consent set to "granted"
- **No Auto-Tracking in Development**: GA4 script only loads when `NUXT_PUBLIC_GA_ID` is configured
- **SSR Safe**: All tracking functions check for client-side environment

### Event Naming Conventions

- Use snake_case for event names (e.g., `scroll_depth`, `cta_click`)
- Keep event names descriptive and concise
- Use consistent parameter names across similar events
- Always include contextual parameters (location, type, etc.)

### Testing

1. **Development Testing**:
   - Set `NUXT_PUBLIC_GA_DEBUG=true`
   - Check browser console for event logs
   - Events show format: `[GA4 Debug] Event tracked: event_name { params }`

2. **Production Testing**:
   - Use [GA4 DebugView](https://support.google.com/analytics/answer/7201382)
   - Install Google Analytics Debugger Chrome extension
   - Monitor real-time events in GA4 dashboard

### Implementation

The analytics system is built with:

- **`useAnalytics` composable**: Core tracking functions (`trackEvent`, `trackPageView`, `setUserProperties`)
- **`useScrollTracking` composable**: Automated scroll depth tracking
- **Component-level tracking**: Event handlers in Vue components
- **Global page view tracking**: Automatic tracking in `app.vue`

For implementation details, see:

- `composables/useAnalytics.ts`
- `composables/useScrollTracking.ts`
- `app.vue` (script loading and page view tracking)

## Performance Optimization

The application is optimized for fast loading and excellent user experience across all devices and network conditions.

### Bundle Sizes

**JavaScript Bundles (Gzipped):**

- Landing page: ~66KB (target: <100KB) ✅
- Katalog page: ~84KB (target: <150KB) ✅
- Total JS: Well under performance budgets

### Image Optimization

All images use **@nuxt/image** module for automatic optimization:

- **WebP Format**: Modern format with PNG fallback for older browsers
- **Responsive srcset**: Multiple sizes generated for different screen sizes
- **Lazy Loading**: Below-fold images load only when needed
- **Explicit Dimensions**: Width and height set to prevent layout shift (CLS)
- **Optimized Quality**: 80% quality for balance between size and visual fidelity

Example:

```vue
<NuxtImg
  src="/images/hero.png"
  format="webp"
  quality="80"
  loading="lazy"
  width="600"
  height="400"
  sizes="sm:100vw md:80vw lg:600px"
/>
```

### Font Optimization

**Google Fonts (Inter) Optimizations:**

- **font-display: swap**: Prevents invisible text during font load (FOIT)
- **Preload**: Critical font files preloaded for faster rendering
- **Async Loading**: Fonts load asynchronously to avoid render blocking
- **Selective Weights**: Only needed weights loaded (400/500/600/700/800)

### Static Site Generation (SSG)

The application uses **Nuxt SSG** for optimal performance:

```bash
npm run generate  # Generates static HTML for all routes
```

**Benefits:**

- No server-side rendering delays
- Instant page loads
- Can be deployed to any static hosting (Vercel, Netlify, GitHub Pages)
- SEO-friendly with pre-rendered HTML

### Core Web Vitals

**Target Metrics:**

- **LCP (Largest Contentful Paint)**: <2.5s ✅
- **FID (First Input Delay)**: <100ms ✅
- **CLS (Cumulative Layout Shift)**: <0.1 ✅

**Optimizations:**

- Hero images optimized and preloaded
- Critical CSS inlined
- JavaScript deferred where possible
- Explicit image dimensions prevent layout shift
- Font loading optimized to prevent FOIT/FOUT

### Lighthouse Scores

**Target Scores:**

Landing Page (`/`):

- Performance: ≥90
- Accessibility: 100
- Best Practices: ≥90
- SEO: 100

Katalog Page (`/katalog`):

- Performance: ≥85
- Accessibility: 100
- Best Practices: ≥90
- SEO: 100

### Running Performance Audits

**Local Lighthouse Audit:**

1. Build the production site:

   ```bash
   npm run build
   npm run generate
   ```

2. Serve the static files:

   ```bash
   npx serve .output/public
   ```

3. Open Chrome DevTools (F12) > Lighthouse tab
4. Configure:
   - Device: Mobile
   - Categories: Performance, Accessibility, Best Practices, SEO
5. Run audit

**Network Throttling Test:**

Chrome DevTools > Network tab > Throttling > Slow 3G

Verify page loads in <3s on throttled connection.

### Performance Monitoring

**Lighthouse CI** (TODO - to be configured):

Automated performance monitoring on every build:

- Install: `npm install --save-dev @lhci/cli`
- Configure score thresholds in `lighthouserc.json`
- Integrate with CI/CD pipeline
- Fail builds if scores drop below targets

### Compression

Compression is enabled on hosting platform (Vercel/Netlify):

- **Brotli/Gzip**: Automatic compression for text assets (HTML, CSS, JS)
- **Typical Compression Ratio**: 70-80% reduction in file size

### Third-Party Scripts

**Google Analytics 4:**

- Loaded asynchronously with `async` attribute
- Debug mode configurable (no tracking in development)
- Minimal performance impact (<5KB gzipped)

## SEO & Structured Data

The application implements comprehensive SEO optimization with structured data for better search visibility.

### Meta Tags

All pages include:

- **Optimized Titles**: Keyword-rich, unique per page (<60 characters)
- **Meta Descriptions**: Compelling summaries with CTAs (150-160 characters)
- **Open Graph Tags**: Enhanced social sharing previews (Facebook, LinkedIn)
- **Twitter Card Tags**: Twitter-specific sharing optimization
- **Canonical URLs**: Prevent duplicate content issues

### Structured Data (Schema.org)

**Landing Page (`/`):**

- **FAQPage Schema**: All 7 FAQ questions for rich snippets in search results
- **Organization Schema**: Business information, contact details, service area

**Catalogue Page (`/katalog`):**

- **Breadcrumb Schema**: Navigation hierarchy (Home > Katalog)

### Technical SEO

- **HTML Language**: Set to Indonesian (`lang="id"`)
- **XML Sitemap**: Auto-generated at `/sitemap.xml` via @nuxtjs/sitemap module
- **Robots.txt**: Configured to allow all pages, references sitemap location
- **Social Sharing Image**: OG image (1200x630px) at `/images/og-image.jpg` (requires design)

### Primary Keywords

The site targets these Indonesian keywords:

- **"solusi IT mudah"** - Landing page focus
- **"mentoring IT Indonesia"** - Mentoring services
- **"aplikasi bisnis sederhana"** - Business applications
- **"belajar IT terjangkau"** - Learning programs

### Validation & Testing

**Structured Data Validation:**

- Use [Google Rich Results Test](https://search.google.com/test/rich-results) to validate schema markup
- Verify FAQ snippets are eligible for rich results
- Check for errors or warnings in structured data

**Social Sharing Preview:**

- Test Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Test Twitter: [Card Validator](https://cards-dev.twitter.com/validator)
- Verify OG image displays correctly

**SEO Audit:**

- Run Lighthouse SEO audit (target: 90+ score)
- Submit sitemap to Google Search Console
- Monitor indexing status and search performance

### Sitemap Configuration

The sitemap includes:

- `/` - Priority: 1.0, Change frequency: weekly
- `/katalog` - Priority: 0.8, Change frequency: monthly

Update `nuxt.config.ts` to add new routes as pages are created.

### Google Search Console Setup

1. Verify site ownership at [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap: `https://makinmudah.com/sitemap.xml`
3. Monitor:
   - Index coverage
   - Search performance (impressions, clicks, CTR)
   - Core Web Vitals
   - Mobile usability

## Deployment

The application is deployed at **makinmudah.com**.

### Deployment Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `.output/public`
- **Node Version**: 24.12.0 (see `.nvmrc`)

### Environment Variables

Set the following environment variables in your deployment platform:

```env
NUXT_PUBLIC_SITE_URL=https://makinmudah.com
NUXT_PUBLIC_SITE_NAME=Makin Mudah
NODE_ENV=production
NUXT_DEVTOOLS=false
```

### DNS Configuration

To make the site accessible at makinmudah.com, configure your DNS records:

1. **Root Domain (makinmudah.com)**:
   - Add an `A` record pointing to your hosting provider's IP address, OR
   - Add an `ALIAS`/`ANAME` record pointing to your deployment (e.g., `yourproject.vercel.app`)

2. **WWW Subdomain (www.makinmudah.com)**:
   - Add a `CNAME` record pointing to your deployment or root domain

3. **SSL Certificate**:
   - Most hosting platforms (Vercel, Netlify, etc.) automatically provision SSL certificates
   - Verify HTTPS is working at https://makinmudah.com

### Custom Domain Setup (Platform-Specific)

**For Vercel:**

```bash
# Add domain in Vercel dashboard
1. Go to Project Settings → Domains
2. Add "makinmudah.com" and "www.makinmudah.com"
3. Follow DNS configuration instructions provided
4. Wait for DNS propagation (5-60 minutes)
```

**For Netlify:**

```bash
# Add domain in Netlify dashboard
1. Go to Domain Settings → Add custom domain
2. Add "makinmudah.com"
3. Configure DNS records as instructed
4. Enable HTTPS
```

**For Cloudflare Pages:**

```bash
# Add domain in Cloudflare dashboard
1. Go to Pages → Custom domains
2. Add "makinmudah.com"
3. DNS automatically configured if using Cloudflare DNS
```

## Architecture Documentation

For detailed architecture information, see:

- `docs/ui-architecture.md` - UI architecture and component structure
- `docs/stories/` - User stories and feature specifications

## VS Code Setup

Recommended extensions (configured in `.vscode/extensions.json`):

- Vue Language Features (Volar)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Playwright Test for VSCode

Settings are pre-configured for optimal development experience.

## Contributing

1. Follow the existing code style (enforced by ESLint/Prettier)
2. Write tests for new features
3. Update documentation as needed
4. Ensure all tests pass before committing

## License

[Your License Here]
