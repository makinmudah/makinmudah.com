<script setup lang="ts">
const config = useRuntimeConfig()
const router = useRouter()
const { trackPageView } = useAnalytics()

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================
useScrollTracking()

// ============================================================================
// GOOGLE ANALYTICS 4 SETUP
// ============================================================================
if (config.public.gaId) {
  useHead({
    script: [
      // Load gtag.js asynchronously
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true,
      },
      // Initialize gtag and configure consent
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Set default consent for Indonesian PDP law compliance
          gtag('consent', 'default', {
            'analytics_storage': 'granted'
          });

          // Configure GA4 with measurement ID
          gtag('config', '${config.public.gaId}', {
            'debug_mode': ${config.public.gaDebug},
            'send_page_view': false
          });
        `,
        type: 'text/javascript',
      },
    ],
  })
}

// ============================================================================
// PAGE VIEW TRACKING
// ============================================================================
// Track initial page view
onMounted(() => {
  const route = useRoute()
  trackPageView(route.fullPath, {
    page_title: document.title,
  })
})

// Track page views on route change
router.afterEach(to => {
  // Small delay to ensure document.title is updated
  nextTick(() => {
    trackPageView(to.fullPath, {
      page_title: document.title,
    })
  })
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
