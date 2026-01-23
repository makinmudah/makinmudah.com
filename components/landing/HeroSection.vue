<script setup lang="ts">
// ============================================================================
// COMPOSABLES
// ============================================================================
const { trackEvent, setUserProperties } = useAnalytics()

// ============================================================================
// EVENT HANDLERS
// ============================================================================
function handleIntipYukClick() {
  // Infer user type based on first CTA click
  if (typeof window !== 'undefined' && !sessionStorage.getItem('user_type_inferred')) {
    sessionStorage.setItem('user_type_inferred', 'business')
    setUserProperties({ user_type_inferred: 'business' })
  }

  // Track CTA click event
  trackEvent('cta_click', {
    cta_label: 'Intip Yuk',
    cta_location: 'hero',
    destination_url: '/katalog#aplikasi',
  })
}

function handleMulaiDuluClick() {
  // Infer user type based on first CTA click
  if (typeof window !== 'undefined' && !sessionStorage.getItem('user_type_inferred')) {
    sessionStorage.setItem('user_type_inferred', 'student')
    setUserProperties({ user_type_inferred: 'student' })
  }

  // Track CTA click event
  trackEvent('cta_click', {
    cta_label: 'Mulai Dulu',
    cta_location: 'hero',
    destination_url: '/katalog#mentoring',
  })
}
</script>

<template>
  <section
    class="flex min-h-[80vh] items-center justify-center bg-white px-6 py-12 md:px-12 lg:min-h-[85vh]"
  >
    <div class="max-w-4xl text-center">
      <!-- Hero Headline with Slide-Up Animation -->
      <h1
        class="mb-8 animate-slide-up text-[clamp(1.5rem,5vw,2rem)] font-bold leading-tight text-navy-900 md:text-[clamp(2rem,4vw,2.5rem)] lg:text-[clamp(2.5rem,4vw,3.5rem)]"
      >
        Hidup makin mudah dengan
        <span class="font-bold text-teal-500">Makin Mudah</span>
      </h1>

      <!-- Dual CTA Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-4">
        <NuxtLink
          to="/katalog#aplikasi"
          class="inline-block rounded-lg bg-teal-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          data-testid="cta-intip"
          @click="handleIntipYukClick"
        >
          Intip Yuk
        </NuxtLink>

        <NuxtLink
          to="/katalog#mentoring"
          class="inline-block rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          data-testid="cta-mulai"
          @click="handleMulaiDuluClick"
        >
          Mulai Dulu
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
