<script setup lang="ts">
// ============================================================================
// IMPORTS
// ============================================================================
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

// ============================================================================
// COMPOSABLES
// ============================================================================
const route = useRoute()

// ============================================================================
// TYPES
// ============================================================================
interface Breadcrumb {
  label: string
  href: string | null
}

// ============================================================================
// COMPUTED
// ============================================================================
const breadcrumbs = computed<Breadcrumb[]>(() => {
  const crumbs: Breadcrumb[] = [{ label: 'Home', href: '/' }]

  // Add page-specific breadcrumbs
  if (route.path === '/katalog') {
    crumbs.push({ label: 'Katalog', href: null }) // Current page, no link
  }

  return crumbs
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="py-4">
    <ol class="flex items-center space-x-2 text-sm">
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.label" class="flex items-center">
        <NuxtLink
          v-if="crumb.href"
          :to="crumb.href"
          class="rounded text-gray-600 transition-colors hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="font-medium text-gray-900" aria-current="page">
          {{ crumb.label }}
        </span>

        <ChevronRightIcon
          v-if="index < breadcrumbs.length - 1"
          class="mx-2 h-4 w-4 text-gray-400"
          aria-hidden="true"
        />
      </li>
    </ol>
  </nav>
</template>
