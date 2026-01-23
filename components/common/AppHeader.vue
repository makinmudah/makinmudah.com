<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

// ============================================================================
// COMPOSABLES
// ============================================================================
const route = useRoute()

// ============================================================================
// STATE
// ============================================================================
const mobileMenuOpen = ref(false)

// ============================================================================
// DATA
// ============================================================================
const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Aplikasi', href: '/katalog#aplikasi' },
  { label: 'Mentoring', href: '/katalog#mentoring' },
]

// ============================================================================
// METHODS
// ============================================================================
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function isActiveLink(href: string) {
  // Exact match for home
  if (href === '/') {
    return route.path === '/'
  }

  // For hash links, check full path
  if (href.includes('#')) {
    return route.fullPath.includes(href)
  }

  // For other routes, check if path starts with href
  return route.path.startsWith(href)
}

// Close mobile menu on escape key
function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Add/remove escape listener
watch(mobileMenuOpen, isOpen => {
  if (isOpen) {
    document.addEventListener('keydown', handleEscape)
  } else {
    document.removeEventListener('keydown', handleEscape)
  }
})

// Cleanup on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <header class="bg-white shadow-sm md:sticky md:top-0 md:z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-teal-600 transition-colors hover:text-teal-700"
          aria-label="Makin Mudah - Home"
        >
          Makin Mudah
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block" aria-label="Main navigation">
          <ul class="flex space-x-8">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink
                :to="link.href"
                :class="[
                  'transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded',
                  isActiveLink(link.href)
                    ? 'font-semibold text-teal-600'
                    : 'text-gray-700 hover:text-teal-600',
                ]"
                :aria-current="isActiveLink(link.href) ? 'page' : undefined"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="rounded p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
          @click="toggleMobileMenu"
        >
          <Bars3Icon v-if="!mobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <nav
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="border-t pb-4 md:hidden"
        aria-label="Mobile navigation"
      >
        <ul class="space-y-2 pt-4">
          <li v-for="link in navLinks" :key="link.href">
            <NuxtLink
              :to="link.href"
              :class="[
                'block rounded py-2 px-2 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500',
                isActiveLink(link.href)
                  ? 'font-semibold text-teal-600 bg-teal-50'
                  : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50',
              ]"
              :aria-current="isActiveLink(link.href) ? 'page' : undefined"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
