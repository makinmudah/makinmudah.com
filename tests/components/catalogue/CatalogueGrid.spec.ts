import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

import CatalogueCard from '@/components/catalogue/CatalogueCard.vue'
import CatalogueGrid from '@/components/catalogue/CatalogueGrid.vue'

// Mock useAnalytics
vi.mock('~/composables/useAnalytics', () => ({
  useAnalytics: () => ({
    trackEvent: vi.fn(),
  }),
}))

// Mock Heroicons
vi.mock('@heroicons/vue/24/solid', () => ({
  ClockIcon: { template: '<svg class="clock-icon" />' },
  CheckCircleIcon: { template: '<svg class="check-circle-icon" />' },
}))

// ============================================================================
// TEST HELPERS
// ============================================================================
const createWrapper = (items: any[]) => {
  return mount(CatalogueGrid, {
    props: { items },
    global: {
      stubs: {
        NuxtLink: {
          template: '<a :href="to"><slot /></a>',
          props: ['to'],
        },
      },
    },
  })
}

const mockItems = [
  {
    id: 'pos-system',
    title: 'Sistem Kasir Modern (POS)',
    category: 'aplikasi' as const,
    description:
      'Sistem kasir berbasis web yang mudah digunakan untuk UMKM. Kelola penjualan, stok, dan laporan dengan simpel.',
    features: [
      '✅ Pencatatan transaksi otomatis',
      '✅ Manajemen stok barang',
      '✅ Laporan penjualan harian/bulanan',
    ],
    pricing: 'Mulai dari Rp 99.000/bulan',
    status: 'available' as const,
  },
  {
    id: 'inventory-management',
    title: 'Manajemen Inventori',
    category: 'aplikasi' as const,
    description: 'Kelola stok barang dengan mudah.',
    features: ['✅ Tracking stok real-time', '✅ Notifikasi stok menipis'],
    pricing: 'Mulai dari Rp 79.000/bulan',
    status: 'coming-soon' as const,
    badge: 'Segera Hadir',
  },
  {
    id: 'customer-management',
    title: 'Manajemen Pelanggan (CRM)',
    category: 'aplikasi' as const,
    description: 'Kelola data pelanggan dan program loyalitas.',
    features: ['✅ Database pelanggan lengkap', '✅ Program poin & loyalitas'],
    pricing: 'Mulai dari Rp 89.000/bulan',
    status: 'coming-soon' as const,
    badge: 'Segera Hadir',
  },
]

// ============================================================================
// TESTS
// ============================================================================
describe('CatalogueGrid', () => {
  describe('Rendering', () => {
    it('renders correct number of cards based on items prop', () => {
      const wrapper = createWrapper(mockItems)
      const cards = wrapper.findAllComponents(CatalogueCard)
      expect(cards.length).toBe(3)
    })

    it('passes data correctly to child CatalogueCard components', () => {
      const wrapper = createWrapper(mockItems)
      const cards = wrapper.findAllComponents(CatalogueCard)

      expect(cards[0].props('item').title).toBe('Sistem Kasir Modern (POS)')
      expect(cards[1].props('item').title).toBe('Manajemen Inventori')
      expect(cards[2].props('item').title).toBe('Manajemen Pelanggan (CRM)')
    })

    it('renders empty state gracefully when items array is empty', () => {
      const wrapper = createWrapper([])
      const cards = wrapper.findAllComponents(CatalogueCard)
      expect(cards.length).toBe(0)
    })
  })

  describe('Grid Layout', () => {
    it('grid has responsive classes (grid-cols-1, md:grid-cols-2, lg:grid-cols-3)', () => {
      const wrapper = createWrapper(mockItems)
      const gridContainer = wrapper.find('.grid')

      expect(gridContainer.exists()).toBe(true)
      expect(gridContainer.classes()).toContain('md:grid-cols-2')
      expect(gridContainer.classes()).toContain('lg:grid-cols-3')
      expect(gridContainer.classes()).toContain('gap-6')
    })

    it('grid uses correct gap spacing', () => {
      const wrapper = createWrapper(mockItems)
      const gridContainer = wrapper.find('.grid')
      expect(gridContainer.classes()).toContain('gap-6')
    })
  })

  describe('Data Flow', () => {
    it('each card receives unique key based on item id', () => {
      const wrapper = createWrapper(mockItems)
      const cards = wrapper.findAllComponents(CatalogueCard)

      cards.forEach((card, index) => {
        expect(card.props('item').id).toBe(mockItems[index].id)
      })
    })

    it('handles items with different statuses', () => {
      const wrapper = createWrapper(mockItems)
      const cards = wrapper.findAllComponents(CatalogueCard)

      expect(cards[0].props('item').status).toBe('available')
      expect(cards[1].props('item').status).toBe('coming-soon')
      expect(cards[2].props('item').status).toBe('coming-soon')
    })
  })
})
