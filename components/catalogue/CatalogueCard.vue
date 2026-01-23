<script setup lang="ts">
import { computed } from 'vue'
import { ClockIcon, CheckCircleIcon } from '@heroicons/vue/24/solid'

// ============================================================================
// COMPOSABLES
// ============================================================================
const { trackEvent } = useAnalytics()

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
  skillLevel?: 'Pemula' | 'Menengah' | 'Lanjut'
  duration?: string
}

interface CatalogueCardProps {
  item: CatalogueItem
}

// ============================================================================
// PROPS
// ============================================================================
const props = defineProps<CatalogueCardProps>()

// ============================================================================
// COMPUTED
// ============================================================================
const buttonText = computed(() => {
  if (props.item.status === 'coming-soon') return 'Segera Hadir'
  return props.item.category === 'mentoring' ? 'Mulai Belajar' : 'Pelajari Lebih Lanjut'
})

const buttonDisabled = computed(() => {
  return props.item.status === 'coming-soon'
})

const contactLink = computed(() => {
  return `/kontak?produk=${encodeURIComponent(props.item.id)}`
})

const skillLevelColor = computed(() => {
  if (!props.item.skillLevel) return ''
  const colors = {
    Pemula: 'bg-green-500',
    Menengah: 'bg-yellow-500 text-gray-900',
    Lanjut: 'bg-blue-500',
  }
  return colors[props.item.skillLevel]
})

// ============================================================================
// EVENT HANDLERS
// ============================================================================
function handleCardClick() {
  trackEvent('catalogue_card_click', {
    product_name: props.item.title,
    catalogue_type: props.item.category,
    product_id: props.item.id,
    product_status: props.item.status,
  })
}
</script>

<template>
  <div
    class="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-teal-500 hover:shadow-md"
  >
    <!-- Coming Soon Badge -->
    <div
      v-if="item.badge"
      class="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white"
    >
      {{ item.badge }}
    </div>

    <!-- Product Title -->
    <h3 class="mb-3 text-xl font-bold text-navy-900">{{ item.title }}</h3>

    <!-- Skill Level Badge (for mentoring programs) -->
    <div
      v-if="item.skillLevel"
      :class="[skillLevelColor, 'mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white']"
    >
      {{ item.skillLevel }}
    </div>

    <!-- Duration (for mentoring programs) -->
    <div v-if="item.duration" class="mb-3 flex items-center gap-2 text-sm text-gray-600">
      <ClockIcon class="h-4 w-4" />
      <span>{{ item.duration }}</span>
    </div>

    <!-- Description -->
    <p class="mb-4 text-base text-gray-700 md:text-lg">{{ item.description }}</p>

    <!-- Features List -->
    <ul class="mb-6 space-y-2">
      <li
        v-for="(feature, index) in item.features"
        :key="index"
        class="flex items-start gap-2 text-sm text-gray-700"
      >
        <CheckCircleIcon class="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" />
        <span>{{ feature.replace(/^✅\s*/, '') }}</span>
      </li>
    </ul>

    <!-- Pricing & CTA -->
    <div class="mt-auto">
      <p class="mb-4 text-lg font-semibold text-teal-600">{{ item.pricing }}</p>

      <NuxtLink
        v-if="!buttonDisabled"
        :to="contactLink"
        class="block w-full rounded-lg bg-teal-500 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-600"
        @click="handleCardClick"
      >
        {{ buttonText }}
      </NuxtLink>

      <button
        v-else
        disabled
        class="w-full cursor-not-allowed rounded-lg bg-teal-500 px-6 py-3 text-center font-semibold text-white opacity-50"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
