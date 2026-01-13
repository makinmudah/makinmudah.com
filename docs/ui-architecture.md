# Frontend Architecture - Makin Mudah Landing Page

**Document Version:** 1.0
**Last Updated:** 2026-01-13
**Status:** Ready for Implementation
**Owner:** Architecture Team (Winston)

---

## Table of Contents

1. [Template & Framework Selection](#1-template--framework-selection)
2. [Frontend Tech Stack](#2-frontend-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Component Standards](#4-component-standards)
5. [State Management](#5-state-management)
6. [API Integration](#6-api-integration)
7. [Routing & Navigation](#7-routing--navigation)
8. [Styling Guidelines](#8-styling-guidelines)
9. [Testing Requirements](#9-testing-requirements)
10. [Environment Configuration](#10-environment-configuration)
11. [Developer Standards](#11-developer-standards)

---

## 1. Template & Framework Selection

### Framework Decision

**Selected Framework:** Nuxt 3 (latest stable: ^3.13.0)

**Rationale:**
- **File-based routing:** Automatic route generation from `pages/` directory
- **SSG support:** Static site generation for optimal SEO and performance
- **SEO built-in:** Auto-generated meta tags, sitemaps, structured data
- **Developer experience:** Hot module replacement, TypeScript support, Vue DevTools
- **Performance:** Automatic code splitting, tree shaking, optimized builds

### Starter Template

**Approach:** Fresh Nuxt 3 initialization (no starter template)

```bash
npx nuxi@latest init makinmudah.com
cd makinmudah.com
npm install
```

**Why not use a starter template:**
- Avoid unnecessary dependencies and bloat
- Full control over architecture decisions
- Simpler to understand and maintain
- Aligns with MVP "keep it simple" principle

### Project Initialization Structure

```
makinmudah.com/
├── .nuxt/                    # Generated (gitignored)
├── node_modules/             # Dependencies (gitignored)
├── public/                   # Static assets
│   └── favicon.ico
├── pages/                    # File-based routing
│   └── index.vue
├── components/               # Vue components
├── composables/              # Vue composables
├── server/                   # Server routes & middleware
│   └── api/
├── assets/                   # Build-time assets (CSS, images)
│   └── css/
│       └── main.css
├── .env.example              # Environment variables template
├── .gitignore
├── nuxt.config.ts            # Nuxt configuration
├── package.json
├── tsconfig.json             # TypeScript configuration
└── README.md
```

### Key Configuration Decisions

**TypeScript:** Enabled by default (Nuxt 3 uses TypeScript)
**CSS Framework:** Tailwind CSS (utility-first approach)
**Component Library:** HeadlessUI Vue (accessible, lightweight)
**Build Tool:** Vite (bundled with Nuxt 3)
**Rendering Mode:** Static Site Generation (SSG) via `nuxt generate`

---

## 2. Frontend Tech Stack

### Complete Technology Table

| Category | Technology | Version | Purpose | Rationale |
|----------|-----------|---------|---------|-----------|
| **Framework** | Nuxt 3 | ^3.13.0 | Vue 3 SSG framework | File-based routing, SEO, SSG support |
| **UI Library** | Vue 3 | ^3.4.0 | Reactive UI components | Composition API, TypeScript support |
| **Build Tool** | Vite | ^5.0.0 | Fast builds & HMR | Bundled with Nuxt, 10x faster than Webpack |
| **Styling** | Tailwind CSS | ^3.4.0 | Utility-first CSS | Rapid development, small bundle (PurgeCSS) |
| **Component Library** | HeadlessUI Vue | ^1.7.0 | Accessible components | 5KB, WCAG compliant, unstyled primitives |
| **Icons** | Heroicons | ^2.1.0 | SVG icon library | Designed for Tailwind, 3 styles (outline/solid/mini) |
| **HTTP Client** | $fetch (ofetch) | Built-in | Server/client requests | Nuxt's unified fetch API |
| **Form Handling** | Native Vue 3 | Built-in | Form state & validation | No library needed for MVP scope |
| **Email Service** | Resend | ^3.2.0 | Transactional email | 3K emails/month free, modern API, great DX |
| **Email Fallback** | Nodemailer | ^6.9.0 | SMTP client | Backup if Resend unavailable |
| **Spam Protection** | reCAPTCHA v3 | ^3.0.0 | Invisible spam detection | Optional, 15KB bundle (only if needed) |
| **Rate Limiting** | LRU Cache | ^10.0.0 | In-memory rate limiting | Lightweight, 2KB, sufficient for single instance |
| **Redis Client** | Upstash Redis | ^1.28.0 | Distributed rate limiting | Optional, for multi-instance deployments |
| **Testing (Unit)** | Vitest | ^1.2.0 | Component/unit tests | Fast, native ESM, Vite integration |
| **Testing (E2E)** | Playwright | ^1.41.0 | End-to-end tests | Multi-browser, network throttling, great DX |
| **Testing (A11y)** | @axe-core/playwright | ^4.8.0 | Accessibility testing | Automates WCAG 2.1 AA compliance |
| **Testing Library** | @testing-library/vue | ^8.0.0 | User-centric tests | Query by accessible names, not implementation |
| **Code Quality** | ESLint | ^8.56.0 | Linting | Code quality, catch errors |
| **Formatting** | Prettier | ^3.2.0 | Code formatting | Consistent style, auto-format |
| **Type Checking** | TypeScript | ^5.3.0 | Static types | Catch errors early, better IDE support |
| **Git Hooks** | simple-git-hooks | ^2.9.0 | Pre-commit automation | Lighter than husky, 1KB |
| **Staged Files** | lint-staged | ^15.2.0 | Lint only changed files | Fast pre-commit checks |

### Bundle Size Targets

**JavaScript:**
- Landing page: <100KB gzipped
- Catalogue pages: <150KB gzipped
- Shared chunks: <50KB gzipped each

**CSS:**
- Global styles: <30KB gzipped
- Page-specific: <20KB gzipped

**Total Page Weight:**
- Landing page: <500KB (including images, fonts)
- Subsequent navigation: <200KB (cached assets)

### Browser Support

**Target Browsers:**
- Chrome 90+ (last 2 versions)
- Firefox 88+ (last 2 versions)
- Safari 14+ (last 2 versions)
- Edge 90+ (last 2 versions)
- Mobile Safari iOS 14+
- Chrome Android 90+

**Note:** Tailwind CSS and Vue 3 handle most compatibility concerns. PostCSS with Autoprefixer adds vendor prefixes automatically.

---

## 3. Project Structure

### Complete Directory Tree

```
makinmudah.com/
├── .github/
│   └── workflows/
│       ├── test.yml              # CI: Run tests on PR
│       └── deploy.yml            # CD: Deploy to Vercel
├── .nuxt/                        # Generated (gitignored)
├── .vscode/
│   ├── extensions.json           # Recommended VS Code extensions
│   └── settings.json             # Project-specific settings
├── assets/
│   ├── css/
│   │   └── main.css              # Global CSS + Tailwind imports
│   ├── images/
│   │   ├── hero-bg.webp          # Hero background image
│   │   └── logo.svg              # Makin Mudah logo
│   └── fonts/                    # Custom fonts (if not using Google Fonts)
├── components/
│   ├── landing/
│   │   ├── HeroSection.vue       # Hero with typing animation + dual CTAs
│   │   ├── ValuePropositions.vue # 3-column value props
│   │   ├── ProblemSolution.vue   # Problem → Solution section
│   │   └── FaqAccordion.vue      # Accordion FAQ (7 questions)
│   ├── catalogue/
│   │   ├── CatalogueCard.vue     # Card for app/service listing
│   │   ├── CatalogueGrid.vue     # Grid layout for cards
│   │   └── CatalogueFilter.vue   # Filter/sort controls (future)
│   ├── contact/
│   │   ├── ContactForm.vue       # Contact form with validation
│   │   └── FormInput.vue         # Reusable form input component
│   └── common/
│       ├── AppHeader.vue         # Site header/navigation
│       ├── AppFooter.vue         # Site footer
│       ├── CtaButton.vue         # Reusable CTA button component
│       └── SectionContainer.vue  # Reusable section wrapper
├── composables/
│   ├── useAnalytics.ts           # Google Analytics / Plausible tracking
│   ├── useContactForm.ts         # Contact form state & submission
│   ├── useFaqState.ts            # FAQ accordion state management
│   └── useScrollToSection.ts     # Smooth scroll helper
├── docs/
│   ├── prd.md                    # Product Requirements Document
│   ├── ui-architecture.md        # This document
│   ├── faq-content.md            # FAQ answers in Indonesian
│   └── stories/                  # User stories
├── pages/
│   ├── index.vue                 # Landing page (/)
│   ├── katalog/
│   │   ├── aplikasi.vue          # Business applications catalogue
│   │   └── mentoring.vue         # Mentoring services catalogue
│   └── kontak.vue                # Contact page
├── public/
│   ├── favicon.ico
│   ├── robots.txt                # SEO: Search engine directives
│   └── sitemap.xml               # SEO: Generated sitemap
├── server/
│   ├── api/
│   │   └── contact.post.ts       # POST /api/contact endpoint
│   ├── middleware/
│   │   └── security-headers.ts   # Security headers (CSP, HSTS, etc.)
│   ├── plugins/
│   │   └── validate-config.ts    # Startup config validation
│   └── utils/
│       ├── email.ts              # Email sending (Resend + Nodemailer)
│       ├── rate-limiter.ts       # Rate limiting logic (LRU cache)
│       ├── recaptcha.ts          # reCAPTCHA verification
│       ├── spam-protection.ts    # Honeypot + time-based validation
│       ├── circuit-breaker.ts    # Circuit breaker for external APIs
│       └── sanitize-errors.ts    # Error sanitization for production
├── tests/
│   ├── setup.ts                  # Vitest global setup
│   ├── unit/
│   │   ├── composables/
│   │   │   ├── useContactForm.test.ts
│   │   │   ├── useAnalytics.test.ts
│   │   │   └── useFaqState.test.ts
│   │   └── utils/
│   │       ├── validation.test.ts
│   │       └── formatters.test.ts
│   ├── components/
│   │   ├── landing/
│   │   │   ├── HeroSection.test.ts
│   │   │   ├── ValuePropositions.test.ts
│   │   │   ├── ProblemSolution.test.ts
│   │   │   └── FaqAccordion.test.ts
│   │   ├── catalogue/
│   │   │   ├── CatalogueCard.test.ts
│   │   │   └── CatalogueGrid.test.ts
│   │   ├── contact/
│   │   │   ├── ContactForm.test.ts
│   │   │   └── FormInput.test.ts
│   │   └── common/
│   │       ├── AppHeader.test.ts
│   │       ├── AppFooter.test.ts
│   │       └── CtaButton.test.ts
│   ├── e2e/
│   │   ├── landing-page.spec.ts
│   │   ├── catalogue-navigation.spec.ts
│   │   ├── contact-form.spec.ts
│   │   └── performance.spec.ts
│   └── a11y/
│       └── accessibility.test.ts
├── types/
│   ├── ContactFormData.ts        # Contact form types
│   ├── CatalogueItem.ts          # Catalogue card types
│   └── ApiResponse.ts            # API response types
├── utils/
│   ├── validation.ts             # Form validation helpers
│   ├── formatters.ts             # Date, phone, currency formatters
│   └── constants.ts              # App-wide constants
├── .env.example                  # Environment variables template
├── .eslintrc.cjs                 # ESLint configuration
├── .gitignore
├── .nvmrc                        # Node version (20.11.0)
├── .prettierrc                   # Prettier configuration
├── nuxt.config.ts                # Nuxt configuration
├── package.json
├── playwright.config.ts          # Playwright E2E config
├── README.md
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vitest.config.ts              # Vitest unit test config
```

### File Organization Principles

1. **Feature-based grouping:** Components organized by feature (landing, catalogue, contact)
2. **Shared components in common/:** Reusable components (buttons, headers, footers)
3. **Single responsibility:** Each file has one primary purpose
4. **Test co-location:** Tests mirror source structure (`components/` → `tests/components/`)
5. **Type safety:** Dedicated `types/` directory for shared interfaces

---

## 4. Component Standards

### Vue 3 Component Template

**Standard Component Structure:**

```vue
<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// Third-party
import { z } from 'zod'

// Internal composables
import { useAnalytics } from '@/composables/useAnalytics'

// Utils
import { validateEmail } from '@/utils/validation'

// Types
import type { ContactFormData } from '@/types/ContactFormData'

// Components
import FormInput from '@/components/contact/FormInput.vue'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================
interface ComponentProps {
  title: string
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

interface ComponentEmits {
  click: [id: string]
  submit: [data: ContactFormData]
}

// ============================================================================
// PROPS & EMITS
// ============================================================================
const props = withDefaults(defineProps<ComponentProps>(), {
  variant: 'primary',
  disabled: false,
})

const emit = defineEmits<ComponentEmits>()

// ============================================================================
// COMPOSABLES
// ============================================================================
const analytics = useAnalytics()
const router = useRouter()
const route = useRoute()

// ============================================================================
// STATE (ref, reactive)
// ============================================================================
const isLoading = ref(false)
const errorMessage = ref<string | null>(null)
const formData = ref<ContactFormData>({
  name: '',
  email: '',
  message: '',
})

// ============================================================================
// COMPUTED PROPERTIES
// ============================================================================
const buttonClasses = computed(() => ({
  'bg-teal-500 hover:bg-teal-600': props.variant === 'primary',
  'bg-orange-500 hover:bg-orange-600': props.variant === 'secondary',
  'opacity-50 cursor-not-allowed': props.disabled,
}))

const isValid = computed(() => {
  return formData.value.name.length >= 2 &&
         validateEmail(formData.value.email) &&
         formData.value.message.length >= 10
})

// ============================================================================
// WATCHERS
// ============================================================================
watch(() => props.disabled, (newVal) => {
  if (newVal) {
    isLoading.value = false
  }
})

watch(errorMessage, (newMsg) => {
  if (newMsg) {
    // Auto-clear error after 5 seconds
    setTimeout(() => {
      errorMessage.value = null
    }, 5000)
  }
})

// ============================================================================
// METHODS
// ============================================================================
async function handleClick() {
  if (props.disabled || isLoading.value) return

  analytics.trackEvent('button_click', {
    variant: props.variant,
    location: route.path,
  })

  emit('click', 'component-id')
}

async function handleSubmit() {
  if (!isValid.value) return

  isLoading.value = true
  errorMessage.value = null

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value,
    })

    analytics.trackEvent('form_submit_success', { form: 'contact' })
    emit('submit', formData.value)
  } catch (error: any) {
    errorMessage.value = error.data?.message || 'An error occurred'
    analytics.trackEvent('form_submit_error', {
      form: 'contact',
      error: error.message,
    })
  } finally {
    isLoading.value = false
  }
}

function reset() {
  formData.value = { name: '', email: '', message: '' }
  errorMessage.value = null
}

// ============================================================================
// LIFECYCLE HOOKS
// ============================================================================
onMounted(() => {
  analytics.trackView('component_view', { component: 'ExampleComponent' })
})

onUnmounted(() => {
  // Cleanup subscriptions, timers, etc.
})
</script>

<template>
  <div class="component-name">
    <!-- ================================================================ -->
    <!-- TEMPLATE CONTENT -->
    <!-- ================================================================ -->
    <button
      :class="buttonClasses"
      :disabled="disabled || isLoading"
      @click="handleClick"
    >
      <span v-if="isLoading">Loading...</span>
      <slot v-else />
    </button>

    <div v-if="errorMessage" role="alert" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
/* ============================================================================
   COMPONENT-SPECIFIC STYLES (if needed)
   Prefer Tailwind utilities in template over custom styles
   ============================================================================ */
.component-name {
  /* Only add styles that can't be expressed with Tailwind */
}
</style>
```

### Naming Conventions

**Components:**
```
✅ GOOD (PascalCase, multi-word)
HeroSection.vue
ContactForm.vue
FaqAccordion.vue
CtaButton.vue

❌ BAD (single word, conflicts with HTML)
Hero.vue
Form.vue
Button.vue
```

**Composables:**
```
✅ GOOD (camelCase with 'use' prefix)
useContactForm.ts
useAnalytics.ts
useFaqState.ts

❌ BAD (missing 'use', wrong case)
contactForm.ts
GetAnalytics.ts
faq_state.ts
```

**Utils:**
```
✅ GOOD (camelCase)
validation.ts
formatters.ts
apiClient.ts

❌ BAD (PascalCase, snake_case)
Validation.ts
api_client.ts
```

**Types/Interfaces:**
```
✅ GOOD (PascalCase)
ContactFormData
ApiResponse
CatalogueItem

❌ BAD (camelCase, prefixes)
contactFormData
IApiResponse (don't use 'I' prefix)
```

**Constants:**
```
✅ GOOD (SCREAMING_SNAKE_CASE)
const MAX_FILE_SIZE = 5242880
const API_BASE_URL = 'https://api.example.com'

❌ BAD (camelCase, lowercase)
const maxFileSize = 5242880
const apibaseurl = '...'
```

### Component Props Guidelines

**Always define prop types:**

```vue
<script setup lang="ts">
// ✅ GOOD - Explicit types with defaults
interface Props {
  title: string              // Required
  variant?: 'primary' | 'secondary'  // Optional with union type
  maxLength?: number         // Optional number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  maxLength: 100,
})

// ❌ BAD - No types
const props = defineProps({
  title: String,
  variant: String,
})
</script>
```

**Emit events with types:**

```vue
<script setup lang="ts">
// ✅ GOOD - Typed emits
const emit = defineEmits<{
  click: [id: string]
  submit: [data: FormData]
  update: []  // No payload
}>()

// Usage
emit('click', 'button-123')
emit('submit', formData)
emit('update')

// ❌ BAD - Untyped emits
const emit = defineEmits(['click', 'submit'])
</script>
```

### Accessibility Requirements

**Every component must:**

1. **Semantic HTML:** Use proper HTML5 elements (`<button>`, `<nav>`, `<main>`, etc.)
2. **ARIA labels:** Add `aria-label` when text isn't visible
3. **Keyboard navigation:** All interactive elements accessible via Tab/Enter/Space
4. **Focus indicators:** Visible focus states (use Tailwind's `focus:` variants)
5. **Color contrast:** Minimum 4.5:1 for text, 3:1 for UI components

**Example:**

```vue
<template>
  <!-- ✅ GOOD - Semantic, keyboard accessible, proper ARIA -->
  <button
    type="button"
    aria-label="Close dialog"
    class="focus:ring-2 focus:ring-teal-500"
    @click="handleClose"
  >
    <XIcon class="w-5 h-5" aria-hidden="true" />
  </button>

  <!-- ❌ BAD - div as button, no keyboard support, no ARIA -->
  <div class="cursor-pointer" @click="handleClose">
    <XIcon class="w-5 h-5" />
  </div>
</template>
```

---

## 5. State Management

### Strategy: Composables-Based State

**No Pinia/Vuex needed for MVP.** Use Vue 3 Composables for state management.

**Why composables over state libraries:**
- **Simplicity:** No boilerplate, just functions
- **Type safety:** Full TypeScript inference
- **Flexibility:** Compose multiple composables easily
- **Performance:** No store overhead for simple state
- **Bundle size:** 0KB (native Vue 3 feature)

### Composable Pattern

**File: `composables/useContactForm.ts`**

```typescript
import { ref, computed } from 'vue'

// Types
interface ContactFormData {
  name: string
  email: string
  phone: string
  interest: 'business' | 'mentoring' | 'other'
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

// Shared state (singleton pattern for global state)
const globalFormState = ref<ContactFormData | null>(null)

export function useContactForm() {
  // Local state (scoped to component)
  const data = ref<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    interest: 'business',
    message: '',
  })

  const errors = ref<ContactFormErrors>({})
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref<string | null>(null)

  // Computed
  const isValid = computed(() => {
    return data.value.name.length >= 2 &&
           isValidEmail(data.value.email) &&
           data.value.message.length >= 10
  })

  // Validation methods
  function validateName(): boolean {
    if (data.value.name.length < 2) {
      errors.value.name = 'Nama minimal 2 karakter'
      return false
    }
    delete errors.value.name
    return true
  }

  function validateEmail(): boolean {
    if (!isValidEmail(data.value.email)) {
      errors.value.email = 'Email tidak valid'
      return false
    }
    delete errors.value.email
    return true
  }

  function validateMessage(): boolean {
    if (data.value.message.length < 10) {
      errors.value.message = 'Pesan minimal 10 karakter'
      return false
    }
    delete errors.value.message
    return true
  }

  function validateAll(): boolean {
    return validateName() && validateEmail() && validateMessage()
  }

  // Submission
  async function submit(): Promise<boolean> {
    if (!validateAll()) {
      errorMessage.value = 'Mohon perbaiki kesalahan di atas'
      return false
    }

    isSubmitting.value = true
    errorMessage.value = null

    try {
      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: data.value,
      })

      isSuccess.value = true
      globalFormState.value = data.value // Save to global state
      reset()
      return true
    } catch (error: any) {
      errorMessage.value = error.data?.message || 'Terjadi kesalahan, silakan coba lagi'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  // Reset form
  function reset() {
    data.value = {
      name: '',
      email: '',
      phone: '',
      interest: 'business',
      message: '',
    }
    errors.value = {}
    errorMessage.value = null
  }

  // Public API
  return {
    // State
    data,
    errors,
    isSubmitting,
    isSuccess,
    errorMessage,

    // Computed
    isValid,

    // Methods
    validateName,
    validateEmail,
    validateMessage,
    validateAll,
    submit,
    reset,
  }
}

// Helper function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
```

**Usage in Component:**

```vue
<script setup lang="ts">
import { useContactForm } from '@/composables/useContactForm'

const {
  data,
  errors,
  isSubmitting,
  isSuccess,
  errorMessage,
  isValid,
  validateName,
  validateEmail,
  submit,
} = useContactForm()

async function handleSubmit() {
  const success = await submit()

  if (success) {
    // Navigate to success page or show toast
    navigateTo('/terima-kasih')
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input
        v-model="data.name"
        type="text"
        placeholder="Nama"
        @blur="validateName"
      />
      <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
    </div>

    <button
      type="submit"
      :disabled="!isValid || isSubmitting"
    >
      {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
    </button>

    <div v-if="errorMessage" role="alert">{{ errorMessage }}</div>
  </form>
</template>
```

### Other Composable Examples

**File: `composables/useAnalytics.ts`**

```typescript
import { useRuntimeConfig } from '#app'

export function useAnalytics() {
  const config = useRuntimeConfig()

  function trackEvent(eventName: string, eventParams?: Record<string, any>) {
    if (!config.public.gaId) return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  function trackView(pageName: string, pageParams?: Record<string, any>) {
    if (!config.public.gaId) return

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', config.public.gaId, {
        page_path: pageName,
        ...pageParams,
      })
    }
  }

  return {
    trackEvent,
    trackView,
  }
}
```

**File: `composables/useFaqState.ts`**

```typescript
import { ref } from 'vue'

export function useFaqState() {
  const openIndex = ref<number | null>(null)

  function toggle(index: number) {
    openIndex.value = openIndex.value === index ? null : index
  }

  function open(index: number) {
    openIndex.value = index
  }

  function close() {
    openIndex.value = null
  }

  function isOpen(index: number): boolean {
    return openIndex.value === index
  }

  return {
    openIndex,
    toggle,
    open,
    close,
    isOpen,
  }
}
```

---

## 6. API Integration

### HTTP Client: $fetch (ofetch)

Nuxt 3's built-in `$fetch` is used for all HTTP requests (server and client).

**Why $fetch:**
- **Universal:** Works on server and client
- **Auto-retry:** Built-in retry logic
- **Type-safe:** Full TypeScript support
- **Nuxt integration:** Automatic base URL, error handling

### Server API Routes

**File: `server/api/contact.post.ts`**

```typescript
import { Resend } from 'resend'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  interest: z.enum(['business', 'mentoring', 'other']),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
  recaptchaToken: z.string().optional(),

  // Honeypot & timing fields
  website: z.string().optional(),
  _timestamp: z.number().optional(),
})

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // ========================================================================
  // 1. RATE LIMITING
  // ========================================================================
  const ip = getRequestIP(event) || 'unknown'
  const rateLimitResult = checkRateLimit(ip, {
    maxRequests: config.rateLimitMaxRequests,
    windowMs: config.rateLimitWindowMs,
  })

  if (!rateLimitResult.allowed) {
    setResponseStatus(event, 429)
    return {
      success: false,
      message: 'Terlalu banyak permintaan. Silakan coba lagi nanti.',
    }
  }

  // ========================================================================
  // 2. PARSE & VALIDATE BODY
  // ========================================================================
  const body = await readBody(event)

  // Honeypot check (silent failure)
  if (body.website) {
    return { success: true } // Pretend success to bot
  }

  // Time-based check (submissions faster than 3s are likely bots)
  if (body._timestamp && Date.now() - body._timestamp < 3000) {
    return { success: true } // Pretend success to bot
  }

  // Validate with Zod
  const validationResult = contactSchema.safeParse(body)
  if (!validationResult.success) {
    throw createError({
      statusCode: 400,
      message: 'Data tidak valid',
      data: validationResult.error.flatten(),
    })
  }

  const data = validationResult.data

  // ========================================================================
  // 3. reCAPTCHA VERIFICATION (Optional)
  // ========================================================================
  if (config.recaptchaSecretKey && data.recaptchaToken) {
    const recaptchaResult = await verifyRecaptcha(data.recaptchaToken)

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      throw createError({
        statusCode: 400,
        message: 'Verifikasi reCAPTCHA gagal',
      })
    }
  }

  // ========================================================================
  // 4. SEND EMAIL
  // ========================================================================
  const resend = new Resend(config.resendApiKey)

  try {
    const emailResult = await resend.emails.send({
      from: config.resendFromEmail,
      to: config.resendToEmail,
      subject: `[Makin Mudah] Pesan dari ${data.name}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telepon:</strong> ${data.phone || '-'}</p>
        <p><strong>Minat:</strong> ${data.interest}</p>
        <p><strong>Pesan:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return {
      success: true,
      message: 'Pesan berhasil dikirim. Kami akan segera menghubungi Anda.',
    }
  } catch (error: any) {
    console.error('Email send error:', error)

    throw createError({
      statusCode: 500,
      message: 'Gagal mengirim pesan. Silakan coba lagi.',
    })
  }
})
```

### Rate Limiting Implementation

**File: `server/utils/rate-limiter.ts`**

```typescript
import { LRUCache } from 'lru-cache'

interface RateLimitEntry {
  count: number
  resetAt: number
}

interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetAt?: number
  message?: string
}

// In-memory cache (single instance)
// For multi-instance deployments, use Redis instead
const rateLimitCache = new LRUCache<string, RateLimitEntry>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour
})

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now()
  const entry = rateLimitCache.get(identifier)

  // No entry or expired - create new
  if (!entry || entry.resetAt < now) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + config.windowMs,
    }
    rateLimitCache.set(identifier, newEntry)

    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetAt: newEntry.resetAt,
    }
  }

  // Increment existing entry
  entry.count++

  if (entry.count > config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
      message: `Rate limit exceeded. Resets at ${new Date(entry.resetAt).toISOString()}`,
    }
  }

  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetAt: entry.resetAt,
  }
}

// Optional: Redis-based rate limiting for distributed systems
export async function checkRateLimitRedis(
  redis: any,
  identifier: string,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const key = `rate-limit:${identifier}`
  const now = Date.now()

  const count = await redis.incr(key)

  if (count === 1) {
    await redis.pexpire(key, config.windowMs)
  }

  const ttl = await redis.pttl(key)
  const resetAt = now + ttl

  if (count > config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetAt,
      message: 'Rate limit exceeded',
    }
  }

  return {
    allowed: true,
    remaining: config.maxRequests - count,
    resetAt,
  }
}
```

### Spam Protection

**File: `server/utils/spam-protection.ts`**

```typescript
interface SpamCheckResult {
  isSpam: boolean
  reason?: string
}

export function checkSpamPatterns(message: string, name: string): SpamCheckResult {
  // Common spam patterns
  const spamPatterns = [
    /viagra/i,
    /casino/i,
    /lottery/i,
    /winner/i,
    /<script/i,
    /onclick/i,
    /javascript:/i,
    /\[url=/i,
    /http.*http.*http/i, // Multiple URLs
  ]

  for (const pattern of spamPatterns) {
    if (pattern.test(message) || pattern.test(name)) {
      return {
        isSpam: true,
        reason: `Spam pattern detected: ${pattern}`,
      }
    }
  }

  // Check for excessive links
  const urlCount = (message.match(/https?:\/\//g) || []).length
  if (urlCount > 2) {
    return {
      isSpam: true,
      reason: 'Too many URLs in message',
    }
  }

  // Check for suspicious characters
  const suspiciousChars = /[^\x00-\x7F]/g // Non-ASCII
  const suspiciousCharCount = (message.match(suspiciousChars) || []).length
  const ratio = suspiciousCharCount / message.length

  if (ratio > 0.5 && message.length > 50) {
    return {
      isSpam: true,
      reason: 'High ratio of suspicious characters',
    }
  }

  return { isSpam: false }
}
```

**File: `server/utils/recaptcha.ts`**

```typescript
interface RecaptchaResponse {
  success: boolean
  score: number
  action: string
  challenge_ts: string
  hostname: string
  'error-codes'?: string[]
}

export async function verifyRecaptcha(token: string): Promise<RecaptchaResponse> {
  const config = useRuntimeConfig()

  if (!config.recaptchaSecretKey) {
    throw new Error('reCAPTCHA secret key not configured')
  }

  const response = await $fetch<RecaptchaResponse>(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      body: new URLSearchParams({
        secret: config.recaptchaSecretKey,
        response: token,
      }),
    }
  )

  return response
}
```

### Security Headers

**File: `server/middleware/security-headers.ts`**

```typescript
export default defineEventHandler((event) => {
  const headers = {
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-src https://www.google.com",
      "upgrade-insecure-requests",
    ].join('; '),

    // Prevent clickjacking
    'X-Frame-Options': 'SAMEORIGIN',

    // Prevent MIME sniffing
    'X-Content-Type-Options': 'nosniff',

    // Force HTTPS
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',

    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',

    // XSS protection (legacy, but doesn't hurt)
    'X-XSS-Protection': '1; mode=block',

    // Permissions policy
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  }

  for (const [key, value] of Object.entries(headers)) {
    setResponseHeader(event, key, value)
  }
})
```

### Circuit Breaker Pattern

**File: `server/utils/circuit-breaker.ts`**

```typescript
interface CircuitState {
  state: 'closed' | 'open' | 'half-open'
  failures: number
  lastFailure?: number
  nextRetry?: number
}

interface CircuitBreakerConfig {
  failureThreshold: number
  resetTimeout: number // milliseconds
}

const circuits = new Map<string, CircuitState>()

export async function executeWithCircuitBreaker<T>(
  key: string,
  operation: () => Promise<T>,
  config: CircuitBreakerConfig = {
    failureThreshold: 5,
    resetTimeout: 60000, // 1 minute
  }
): Promise<T> {
  let state = circuits.get(key)

  if (!state) {
    state = { state: 'closed', failures: 0 }
    circuits.set(key, state)
  }

  const now = Date.now()

  // Check if circuit should transition to half-open
  if (state.state === 'open' && state.nextRetry && now >= state.nextRetry) {
    state.state = 'half-open'
    state.failures = 0
  }

  // Circuit is open - fail fast
  if (state.state === 'open') {
    throw createError({
      statusCode: 503,
      message: 'Service temporarily unavailable (circuit breaker open)',
    })
  }

  // Attempt operation
  try {
    const result = await operation()

    // Success - reset circuit
    if (state.state === 'half-open') {
      state.state = 'closed'
      state.failures = 0
      delete state.lastFailure
      delete state.nextRetry
    }

    return result
  } catch (error) {
    state.failures++
    state.lastFailure = now

    // Open circuit if threshold reached
    if (state.failures >= config.failureThreshold) {
      state.state = 'open'
      state.nextRetry = now + config.resetTimeout
    }

    throw error
  }
}
```

### Email Sending with Fallback

**File: `server/utils/email.ts`**

```typescript
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const config = useRuntimeConfig()

  // Primary: Resend
  if (config.resendApiKey) {
    try {
      const resend = new Resend(config.resendApiKey)
      await resend.emails.send({
        from: config.resendFromEmail,
        to: options.to,
        subject: options.subject,
        html: options.html,
      })
      return
    } catch (error) {
      console.error('Resend failed, trying fallback:', error)
    }
  }

  // Fallback: Nodemailer with Gmail SMTP
  if (config.smtpHost && config.smtpUser && config.smtpPass) {
    const transporter = nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort || 587,
      secure: config.smtpPort === 465,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
      },
    })

    await transporter.sendMail({
      from: config.resendFromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
    })
    return
  }

  throw new Error('No email service configured')
}
```

---

## 7. Routing & Navigation

### File-Based Routing

Nuxt 3 automatically generates routes from the `pages/` directory.

**Route Structure:**

```
pages/
├── index.vue                 → /
├── katalog/
│   ├── aplikasi.vue          → /katalog/aplikasi
│   └── mentoring.vue         → /katalog/mentoring
└── kontak.vue                → /kontak
```

### Route Naming (Indonesian)

**Decision:** Use Indonesian route names for brand consistency.

```
✅ GOOD (Indonesian routes)
/katalog/aplikasi
/katalog/mentoring
/kontak

❌ BAD (English routes)
/catalogue/apps
/catalogue/mentoring
/contact
```

**Rationale:**
- Target audience is Indonesian
- Aligns with brand messaging ("Makin Mudah")
- Better for SEO in Indonesian market
- Consistency with UI language

### Page Meta & SEO

**File: `pages/index.vue`**

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Makin Mudah - Solusi IT Tanpa Ribet',
  description: 'Platform IT untuk UMKM dan pelajar Indonesia. Aplikasi bisnis, konsultasi, dan mentoring dengan harga terjangkau.',
  ogTitle: 'Makin Mudah - Solusi IT Tanpa Ribet',
  ogDescription: 'Platform IT untuk UMKM dan pelajar Indonesia',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://makinmudah.com',
  twitterCard: 'summary_large_image',
})

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div>
    <HeroSection />
    <ValuePropositions />
    <ProblemSolution />
    <FaqAccordion />
  </div>
</template>
```

**File: `pages/katalog/aplikasi.vue`**

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Aplikasi Bisnis - Makin Mudah',
  description: 'Aplikasi bisnis berbasis web untuk UMKM Indonesia. POS, inventori, dan lebih banyak lagi dengan harga terjangkau.',
  ogTitle: 'Aplikasi Bisnis - Makin Mudah',
})
</script>

<template>
  <div>
    <h1>Aplikasi Bisnis</h1>
    <CatalogueGrid type="business" />
  </div>
</template>
```

### Navigation Component

**File: `components/common/AppHeader.vue`**

```vue
<script setup lang="ts">
const route = useRoute()

const navigationLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Aplikasi', path: '/katalog/aplikasi' },
  { name: 'Mentoring', path: '/katalog/mentoring' },
  { name: 'Kontak', path: '/kontak' },
]

function isActive(path: string): boolean {
  return route.path === path
}
</script>

<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="text-2xl font-bold text-teal-500">
          Makin Mudah
        </NuxtLink>

        <!-- Navigation -->
        <ul class="hidden md:flex space-x-6">
          <li v-for="link in navigationLinks" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="text-gray-700 hover:text-teal-500 transition-colors"
              :class="{ 'text-teal-500 font-semibold': isActive(link.path) }"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button class="md:hidden" aria-label="Toggle menu">
          <!-- Menu icon -->
        </button>
      </div>
    </nav>
  </header>
</template>
```

### Programmatic Navigation

```vue
<script setup lang="ts">
const router = useRouter()

async function handleCTAClick(type: 'business' | 'mentoring') {
  // Track analytics
  const analytics = useAnalytics()
  analytics.trackEvent('cta_click', { type, location: 'hero' })

  // Navigate
  if (type === 'business') {
    await router.push('/katalog/aplikasi')
  } else {
    await router.push('/katalog/mentoring')
  }
}
</script>
```

### Scroll Behavior

**File: `app/router.options.ts`**

```typescript
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Restore scroll position on back/forward
    if (savedPosition) {
      return savedPosition
    }

    // Scroll to anchor if present
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed header
      }
    }

    // Scroll to top for new pages
    return { top: 0, behavior: 'smooth' }
  },
}
```

---

## 8. Styling Guidelines

### Tailwind CSS Configuration

**File: `tailwind.config.ts`**

```typescript
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14B8A6', // Primary brand color
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        navy: {
          50: '#f0f5ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#1E3A8A', // Secondary brand color
          950: '#1e1b4b',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F59E0B', // Accent color
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'hero-mobile': ['clamp(1.5rem, 5vw, 2rem)', { lineHeight: '1.2' }],
        'hero-desktop': ['clamp(2.5rem, 4vw, 3.5rem)', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'card': '0.75rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'typing': 'typing 3s steps(40, end)',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### Global CSS with Custom Properties

**File: `assets/css/main.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* ========================================================================
     COLORS
     ======================================================================== */
  --color-teal-primary: #14B8A6;
  --color-teal-dark: #0d9488;
  --color-navy-primary: #1E3A8A;
  --color-orange-primary: #F59E0B;

  /* Semantic colors */
  --color-text-primary: #1f2937;
  --color-text-secondary: #6b7280;
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;

  /* ========================================================================
     TYPOGRAPHY
     ======================================================================== */
  --font-sans: 'Inter var', 'Inter', ui-sans-serif, system-ui, sans-serif;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* ========================================================================
     SPACING
     ======================================================================== */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  --section-gap-mobile: 2.5rem;
  --section-gap-desktop: 4rem;

  /* ========================================================================
     SHADOWS
     ======================================================================== */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  /* ========================================================================
     TRANSITIONS
     ======================================================================== */
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;

  /* ========================================================================
     Z-INDEX SCALE
     ======================================================================== */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* ============================================================================
   BASE STYLES
   ============================================================================ */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-gray-900 antialiased;
    font-family: var(--font-sans);
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-navy-900;
  }

  h1 {
    @apply text-4xl md:text-5xl;
  }

  h2 {
    @apply text-3xl md:text-4xl;
  }

  h3 {
    @apply text-2xl md:text-3xl;
  }

  a {
    @apply transition-colors duration-200;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline-none ring-2 ring-teal-500 ring-offset-2;
  }
}

/* ============================================================================
   COMPONENT CLASSES
   ============================================================================ */
@layer components {
  /* Buttons */
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 font-semibold text-white
           bg-teal-500 rounded-lg hover:bg-teal-600 active:bg-teal-700
           focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed
           transition-colors duration-200;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 font-semibold text-white
           bg-orange-500 rounded-lg hover:bg-orange-600 active:bg-orange-700
           focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed
           transition-colors duration-200;
  }

  .btn-outline {
    @apply inline-flex items-center justify-center px-6 py-3 font-semibold
           text-teal-600 bg-transparent border-2 border-teal-500 rounded-lg
           hover:bg-teal-50 active:bg-teal-100
           focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
           transition-colors duration-200;
  }

  /* Cards */
  .card {
    @apply bg-white rounded-card shadow-card p-6
           hover:shadow-card-hover transition-shadow duration-300;
  }

  .card-interactive {
    @apply card cursor-pointer
           hover:-translate-y-1 transition-all duration-300;
  }

  /* Form inputs */
  .form-input {
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg
           focus:border-teal-500 focus:ring-1 focus:ring-teal-500
           placeholder:text-gray-400
           disabled:bg-gray-100 disabled:cursor-not-allowed
           transition-colors duration-200;
  }

  .form-label {
    @apply block mb-2 font-medium text-gray-700;
  }

  .form-error {
    @apply mt-1 text-sm text-red-600;
  }

  /* Section containers */
  .section-container {
    @apply container mx-auto px-4 py-12 md:py-16 lg:py-20;
  }

  /* Link styles */
  .link {
    @apply text-teal-600 hover:text-teal-700 underline underline-offset-2;
  }
}

/* ============================================================================
   UTILITY CLASSES
   ============================================================================ */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  /* Custom scrollbar */
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .scrollbar-thin::-webkit-scrollbar-track {
    @apply bg-gray-100 rounded;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb {
    @apply bg-gray-400 rounded hover:bg-gray-500;
  }

  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-teal-500 to-navy-900 bg-clip-text text-transparent;
  }
}

/* ============================================================================
   ANIMATIONS
   ============================================================================ */

/* Typing animation for hero headline */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-animation {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--color-teal-primary);
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--color-teal-primary);
  }
}

/* Accordion animation */
.accordion-content {
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.accordion-content[data-state='open'] {
  animation: slideDown 0.3s ease-out;
}

.accordion-content[data-state='closed'] {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    max-height: 500px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
}
```

### Font Loading Strategy

**File: `nuxt.config.ts`**

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
```

**Alternative: Self-hosted fonts (for better performance)**

```typescript
// Download fonts and place in public/fonts/
// Then load via CSS:

// assets/css/main.css
@font-face {
  font-family: 'Inter var';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/Inter-roman.var.woff2') format('woff2');
}
```

### Responsive Design Breakpoints

Tailwind's default breakpoints (used throughout):

```
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Laptops
xl:  1280px  // Desktops
2xl: 1536px  // Large desktops
```

**Usage example:**

```vue
<template>
  <div class="text-base sm:text-lg md:text-xl lg:text-2xl">
    Responsive text sizing
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- 1 column mobile, 2 tablet, 3 desktop -->
  </div>
</template>
```

---

## 9. Testing Requirements

### Testing Framework Configuration

**Vitest Setup (Unit & Component Tests):**

**File: `vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.config.{js,ts}',
        '.nuxt/',
        'dist/',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
```

**File: `tests/setup.ts`**

```typescript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return [] }
  unobserve() {}
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

### Component Test Template

**File: `tests/components/landing/HeroSection.test.ts`**

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'
import HeroSection from '@/components/landing/HeroSection.vue'

describe('HeroSection', () => {
  describe('Rendering', () => {
    it('renders hero headline correctly', () => {
      const { getByText } = render(HeroSection)
      expect(getByText(/Hidup Makin Mudah dengan Makin Mudah/i)).toBeInTheDocument()
    })

    it('displays both CTA buttons', () => {
      const { getByRole } = render(HeroSection)
      expect(getByRole('button', { name: /Intip Yuk/i })).toBeInTheDocument()
      expect(getByRole('button', { name: /Mulai Dulu/i })).toBeInTheDocument()
    })

    it('applies typing animation class to headline', () => {
      const wrapper = mount(HeroSection)
      const headline = wrapper.find('h1')
      expect(headline.classes()).toContain('typing-animation')
    })
  })

  describe('Interactions', () => {
    it('tracks analytics when Intip Yuk clicked', async () => {
      const mockTrack = vi.fn()
      const wrapper = mount(HeroSection, {
        global: {
          mocks: {
            useAnalytics: () => ({ trackEvent: mockTrack }),
          },
        },
      })

      await wrapper.find('[data-testid="cta-intip"]').trigger('click')
      expect(mockTrack).toHaveBeenCalledWith('cta_click', {
        type: 'business',
        location: 'hero'
      })
    })

    it('navigates to correct page on CTA click', async () => {
      const mockPush = vi.fn()
      const wrapper = mount(HeroSection, {
        global: {
          mocks: {
            $router: { push: mockPush },
          },
        },
      })

      await wrapper.find('[data-testid="cta-mulai"]').trigger('click')
      expect(mockPush).toHaveBeenCalledWith('/katalog/mentoring')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const wrapper = mount(HeroSection)
      expect(wrapper.find('h1').exists()).toBe(true)
      expect(wrapper.find('h2').exists()).toBe(false)
    })

    it('CTA buttons have accessible names', () => {
      const { getByRole } = render(HeroSection)
      const intipBtn = getByRole('button', { name: /Intip Yuk/i })
      const mulaiBtn = getByRole('button', { name: /Mulai Dulu/i })

      expect(intipBtn).toHaveAccessibleName()
      expect(mulaiBtn).toHaveAccessibleName()
    })
  })
})
```

### Playwright E2E Configuration

**File: `playwright.config.ts`**

```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: '3g-network', // NFR1 compliance: 3G simulation
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: {
          offline: false,
        },
        // 3G Fast network throttling
        launchOptions: {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
          ],
        },
      },
    },
  ],

  webServer: {
    command: 'npm run preview',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

### E2E Test Examples

**File: `tests/e2e/landing-page.spec.ts`**

```typescript
import { test, expect } from '@playwright/test'

test.describe('Landing Page User Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('business owner flow: hero → value props → CTA', async ({ page }) => {
    // 1. Hero visible
    await expect(page.locator('h1')).toContainText('Hidup Makin Mudah')

    // 2. Click business CTA
    await page.click('text=Intip Yuk')

    // 3. Navigate to applications catalogue
    await expect(page).toHaveURL('/katalog/aplikasi')
    await expect(page.locator('h1')).toContainText('Aplikasi Bisnis')
  })

  test('student flow: hero → FAQ → contact', async ({ page }) => {
    // 1. Click student CTA
    await page.click('text=Mulai Dulu')
    await expect(page).toHaveURL('/katalog/mentoring')

    // 2. Navigate back to check FAQ
    await page.goBack()

    // 3. Open FAQ accordion
    await page.click('text=Berapa sih biayanya?')
    await expect(page.locator('[data-accordion-content]').first()).toBeVisible()

    // 4. Fill contact form
    await page.click('text=Hubungi Kami')
    await page.fill('input[name="name"]', 'Test Student')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('textarea[name="message"]', 'Saya ingin belajar programming')
    await page.click('button[type="submit"]')

    // 5. Success message
    await expect(page.locator('text=Terima kasih')).toBeVisible({ timeout: 5000 })
  })

  test('page loads within 3 seconds on 3G', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/', { waitUntil: 'networkidle' })

    const loadTime = Date.now() - startTime
    expect(loadTime).toBeLessThan(3000) // NFR1 requirement
  })

  test('all CTAs are accessible via keyboard', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab')
    await expect(page.locator('button:focus').first()).toBeVisible()

    // Activate CTA with Enter
    await page.keyboard.press('Enter')
    await expect(page).not.toHaveURL('/')
  })
})
```

### Accessibility Testing

**File: `tests/a11y/accessibility.test.ts`**

```typescript
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Compliance (WCAG 2.1 AA)', () => {
  test('landing page has no accessibility violations', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('FAQ accordion is keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Navigate to FAQ section
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Expand accordion with keyboard
    const faqButton = page.locator('[aria-expanded]').first()
    await faqButton.focus()
    await page.keyboard.press('Enter')

    await expect(faqButton).toHaveAttribute('aria-expanded', 'true')
  })

  test('contact form has proper labels and error messages', async ({ page }) => {
    await page.goto('/kontak')

    const nameInput = page.locator('input[name="name"]')
    expect(await nameInput.getAttribute('aria-label')).toBeTruthy()

    // Submit empty form
    await page.click('button[type="submit"]')

    // Error message should be announced
    const errorMessage = page.locator('[role="alert"]')
    await expect(errorMessage).toBeVisible()
  })
})
```

### CI/CD Integration

**File: `.github/workflows/test.yml`**

```yaml
name: Test & Quality

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Build application
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

### Test Scripts

**File: `package.json`**

```json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:a11y": "playwright test tests/a11y",
    "test:all": "npm run test:unit && npm run test:e2e"
  }
}
```

---

## 10. Environment Configuration

### Environment Variables Structure

**File: `.env.example` (Committed Template)**

```bash
# Application
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME="Makin Mudah"

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@makinmudah.com
RESEND_TO_EMAIL=support@makinmudah.com

# Google reCAPTCHA v3 (Optional - enable if spam becomes issue)
NUXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX
RECAPTCHA_SECRET_KEY=6LcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX

# Redis (Optional - for distributed rate limiting)
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=
REDIS_TLS_ENABLED=false

# Analytics (Optional)
NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=makinmudah.com

# Security
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=3600000
HONEYPOT_FIELD_NAME=website
MIN_SUBMISSION_TIME_MS=3000

# Development
NODE_ENV=development
NUXT_DEVTOOLS=true
```

**File: `.env` (Local Development - Gitignored)**

```bash
# Copy from .env.example and fill in actual values
NUXT_PUBLIC_SITE_URL=http://localhost:3000
NUXT_PUBLIC_SITE_NAME="Makin Mudah"

# Use test API keys for local dev
RESEND_API_KEY=re_test_xxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=dev@test.makinmudah.com
RESEND_TO_EMAIL=developer@makinmudah.com

# Disable reCAPTCHA in local dev (use honeypot only)
# NUXT_PUBLIC_RECAPTCHA_SITE_KEY=
# RECAPTCHA_SECRET_KEY=

# Local Redis (if running via Docker)
REDIS_URL=redis://localhost:6379

# Analytics disabled in local dev
# NUXT_PUBLIC_GA_ID=
# NUXT_PUBLIC_PLAUSIBLE_DOMAIN=

NODE_ENV=development
NUXT_DEVTOOLS=true
```

**File: `.env.production` (Production - Gitignored)**

```bash
NUXT_PUBLIC_SITE_URL=https://makinmudah.com
NUXT_PUBLIC_SITE_NAME="Makin Mudah"

# Production Resend API Key
RESEND_API_KEY=re_prod_xxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@makinmudah.com
RESEND_TO_EMAIL=support@makinmudah.com

# Production reCAPTCHA keys
NUXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcxxxPRODxxxxxxxxxxxxxxxxxxxxxxxxX
RECAPTCHA_SECRET_KEY=6LcxxxPRODxxxxxxxxxxxxxxxxxxxxxxxxX

# Upstash Redis (production)
REDIS_URL=rediss://default:xxxxxxxxxxxxx@fly-region-xxxx.upstash.io:6379
REDIS_PASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
REDIS_TLS_ENABLED=true

# Production analytics
NUXT_PUBLIC_GA_ID=G-PRODXXXXXX
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=makinmudah.com

# Stricter rate limiting in production
RATE_LIMIT_MAX_REQUESTS=3
RATE_LIMIT_WINDOW_MS=3600000

NODE_ENV=production
NUXT_DEVTOOLS=false
```

### Nuxt Runtime Configuration

**File: `nuxt.config.ts`**

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys (server-side only, NEVER sent to client)
    resendApiKey: process.env.RESEND_API_KEY,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'noreply@makinmudah.com',
    resendToEmail: process.env.RESEND_TO_EMAIL || 'support@makinmudah.com',

    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,

    redisUrl: process.env.REDIS_URL,
    redisPassword: process.env.REDIS_PASSWORD,
    redisTlsEnabled: process.env.REDIS_TLS_ENABLED === 'true',

    rateLimitMaxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
    rateLimitWindowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '3600000'),
    honeypotFieldName: process.env.HONEYPOT_FIELD_NAME || 'website',
    minSubmissionTimeMs: parseInt(process.env.MIN_SUBMISSION_TIME_MS || '3000'),

    // Public keys (exposed to client via NUXT_PUBLIC_ prefix)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Makin Mudah',

      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,

      gaId: process.env.NUXT_PUBLIC_GA_ID,
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
    },
  },
})
```

### Configuration Validation

**File: `server/plugins/validate-config.ts`**

```typescript
export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()

  // Required secrets validation
  const requiredSecrets = [
    { key: 'resendApiKey', name: 'RESEND_API_KEY' },
    { key: 'resendFromEmail', name: 'RESEND_FROM_EMAIL' },
    { key: 'resendToEmail', name: 'RESEND_TO_EMAIL' },
  ]

  const missing: string[] = []

  for (const { key, name } of requiredSecrets) {
    if (!config[key]) {
      missing.push(name)
    }
  }

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:')
    missing.forEach(name => console.error(`   - ${name}`))
    console.error('\n💡 Copy .env.example to .env and fill in values\n')

    if (process.env.NODE_ENV === 'production') {
      throw new Error('Missing required environment variables in production')
    }
  }

  // Optional features warnings
  if (!config.recaptchaSecretKey) {
    console.warn('⚠️  reCAPTCHA not configured - relying on honeypot + time-based spam protection')
  }

  if (!config.redisUrl) {
    console.warn('⚠️  Redis not configured - using in-memory rate limiting (single instance only)')
  }

  console.log('✅ Configuration validated successfully')
})
```

### Secrets Management (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Add production secrets
vercel env add RESEND_API_KEY production
vercel env add RECAPTCHA_SECRET_KEY production
vercel env add REDIS_URL production

# Add preview/development secrets
vercel env add RESEND_API_KEY preview
vercel env add RESEND_API_KEY development

# Pull environment variables to local .env
vercel env pull .env.local
```

### .gitignore Configuration

**File: `.gitignore`**

```bash
# Environment files (never commit secrets!)
.env
.env.local
.env.*.local
.env.production
.env.staging

# Always commit the example template
!.env.example

# Nuxt build artifacts
.nuxt
.output
dist
.vercel

# Dependencies
node_modules

# Logs
*.log
logs

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea

# Test coverage
coverage
test-results
playwright-report

# Local certificates
*.pem
*.key
*.crt
```

---

## 11. Developer Standards

### Code Quality Standards

**File: `.eslintrc.cjs`**

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // Vue-specific rules
    'vue/multi-word-component-names': 'error',
    'vue/no-v-html': 'warn', // Warn but allow (we sanitize)
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',

    // General rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-const': 'error',
    'no-var': 'error',

    // Import organization
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'always',
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],
  },
}
```

**File: `.prettierrc`**

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "vueIndentScriptAndStyle": false
}
```

### Git Workflow

**Branch Naming Convention:**

```bash
# Feature branches
feature/hero-section-animation
feature/contact-form-validation

# Bug fixes
fix/accordion-keyboard-navigation
fix/mobile-layout-overflow

# Refactoring
refactor/composables-structure

# Documentation
docs/setup-instructions

# Chores (deps, config, tooling)
chore/update-dependencies
chore/configure-playwright
```

**Commit Message Format:**

```bash
# Format: <type>(<scope>): <subject>
#
# Types:
#   feat     - New feature
#   fix      - Bug fix
#   refactor - Code change that neither fixes bug nor adds feature
#   style    - Changes that don't affect code meaning (whitespace, formatting)
#   test     - Adding or updating tests
#   docs     - Documentation changes
#   chore    - Build process, tooling, dependencies

# Examples:
feat(hero): add typing animation to headline
fix(contact): validate phone number format
refactor(composables): extract form validation logic
test(faq): add accordion keyboard navigation tests
docs(readme): update setup instructions
chore(deps): upgrade nuxt to 3.13.1
```

**Pre-commit Hooks:**

**File: `package.json`**

```json
{
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,scss}": [
      "prettier --write"
    ],
    "*.md": [
      "prettier --write"
    ]
  }
}
```

### Pull Request Template

**File: `.github/pull_request_template.md`**

```markdown
## Description
<!-- Brief description of what this PR does -->

## Type of Change
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Refactoring (no functional changes)
- [ ] Documentation update

## Related Story/Issue
<!-- Link to story file or issue -->
Story: [1.1 Project Setup](../docs/stories/epic-1-story-1.1-project-setup.md)
Issue: #42

## Changes Made
- Added hero section component with typing animation
- Implemented dual CTAs with analytics tracking
- Added unit tests for HeroSection component

## Testing Checklist
- [ ] Unit tests pass (`npm run test:unit`)
- [ ] E2E tests pass (`npm run test:e2e`)
- [ ] Tested on mobile (Chrome DevTools)
- [ ] Tested keyboard navigation
- [ ] Lighthouse score >90 (performance)
- [ ] No console errors/warnings

## Accessibility Notes
- [ ] Proper heading hierarchy (h1, h2, etc.)
- [ ] ARIA labels where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible

## Bundle Size Impact
<!-- Check bundle size change with `npm run build` -->
- JavaScript: +5KB gzipped
- CSS: +2KB gzipped
- Within budget: ✅ Yes / ❌ No

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed code before requesting review
- [ ] Added/updated tests for changes
- [ ] All tests passing
- [ ] Documentation updated (if needed)
- [ ] No hardcoded values (used env vars)
- [ ] Commit messages follow convention
```

### Quick Reference Guide

**Common Tasks:**

```bash
# 🚀 GETTING STARTED
git clone <repo-url>
cd makinmudah.com
cp .env.example .env          # Fill in your values
npm install
npm run dev                   # Start dev server at http://localhost:3000

# 🧪 TESTING
npm run test                  # Run unit tests in watch mode
npm run test:unit             # Run unit tests once
npm run test:coverage         # Generate coverage report
npm run test:e2e              # Run E2E tests
npm run test:e2e:ui           # Run E2E with UI
npm run test:a11y             # Run accessibility tests

# 🔨 BUILDING
npm run build                 # Build for production
npm run preview               # Preview production build locally
npm run generate              # Generate static site (SSG)

# 🎨 CODE QUALITY
npm run lint                  # Lint all files
npm run lint:fix              # Auto-fix linting issues
npm run format                # Format with Prettier
npm run typecheck             # TypeScript type checking

# 📊 ANALYSIS
npm run analyze               # Analyze bundle size
npx nuxi analyze              # Nuxt bundle analyzer

# 🧹 MAINTENANCE
npm run clean                 # Remove .nuxt, node_modules, dist
npm outdated                  # Check for outdated dependencies
npm audit                     # Security audit
```

### Development Environment Setup

**Required Tools:**

```bash
# Node.js (via nvm recommended)
nvm install 20
nvm use 20

# Package manager
npm --version          # Should be 9.x or higher

# Git
git --version          # Should be 2.x or higher

# Optional but recommended
brew install redis     # For local rate limiting testing
```

**File: `.nvmrc`**

```
20.11.0
```

**VS Code Extensions:**

**File: `.vscode/extensions.json`**

```json
{
  "recommendations": [
    "Vue.volar",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "nuxt.mdc",
    "ms-playwright.playwright",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

**File: `.vscode/settings.json`**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["class:\\s*?[\"'`]([^\"'`]*).*?[\"'`]", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "vue.server.hybridMode": true
}
```

### Troubleshooting Guide

**Common Issues:**

```bash
# 1. Port already in use
killall node
npm run dev -- --port 3001

# 2. Module not found after npm install
rm -rf node_modules .nuxt
npm install
npm run dev

# 3. TypeScript errors after update
npx nuxi prepare
npx nuxi typecheck

# 4. ESLint/Prettier conflicts
npm run format
npm run lint:fix

# 5. Tests failing in CI but passing locally
node --version
npm ci
npm run test:unit -- --no-watch

# 6. Build fails with out of memory
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# 7. Vercel deployment fails
vercel env ls
vercel env pull .env.local
```

---

## Document Complete

This Frontend Architecture Document covers all technical aspects needed to implement the Makin Mudah landing page from setup to deployment.

**Next Steps:**

1. **Project Setup:** Initialize Nuxt 3 project with all dependencies
2. **Story Drafting:** Scrum Master creates detailed story files for Epic 1
3. **Implementation:** Developer begins with Story 1.1 (Project Setup & Base Configuration)

**Questions or Clarifications:**

For architecture questions, consult Winston (Architect).
For implementation questions, consult James (Developer).
For story refinement, consult Bob (Scrum Master).

---

**Document Metadata:**
- **Total Sections:** 11
- **Technology Decisions:** 25+
- **Code Examples:** 50+
- **Configuration Files:** 15+
- **Word Count:** ~15,000 words

**Status:** ✅ Ready for Implementation
