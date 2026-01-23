<script setup lang="ts">
import CatalogueCard from './CatalogueCard.vue'

// ============================================================================
// TYPES
// ============================================================================
interface CatalogueItem {
  id: string
  title: string
  category: 'aplikasi' | 'mentoring'
  description: string
  features: string[]
  pricing: string
  status: 'available' | 'coming-soon'
  badge?: string
}

interface CatalogueGridProps {
  items: CatalogueItem[]
}

// ============================================================================
// PROPS
// ============================================================================
const props = defineProps<CatalogueGridProps>()
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <CatalogueCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
