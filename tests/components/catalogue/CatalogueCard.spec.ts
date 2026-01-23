import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

import CatalogueCard from '@/components/catalogue/CatalogueCard.vue'

// Mock Hero icons
vi.mock('@heroicons/vue/24/solid', () => ({
  ClockIcon: { template: '<svg class="clock-icon" />' },
  CheckCircleIcon: { template: '<svg class="check-circle-icon" />' },
}))

// ============================================================================
// TEST HELPERS
// ============================================================================
const mockAnalytics = {
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  setUserProperties: vi.fn(),
}

const createWrapper = (item: any) => {
  return mount(CatalogueCard, {
    props: { item },
    global: {
      stubs: {
        NuxtLink: {
          template: '<a :href="to"><slot /></a>',
          props: ['to'],
        },
      },
      mocks: {
        useAnalytics: () => mockAnalytics,
      },
    },
  })
}

const mockAvailableItem = {
  id: 'pos-system',
  title: 'Sistem Kasir Modern (POS)',
  category: 'aplikasi' as const,
  description:
    'Sistem kasir berbasis web yang mudah digunakan untuk UMKM. Kelola penjualan, stok, dan laporan dengan simpel.',
  features: [
    '✅ Pencatatan transaksi otomatis',
    '✅ Manajemen stok barang',
    '✅ Laporan penjualan harian/bulanan',
    '✅ Dukungan multi-user',
    '✅ Akses dari mana saja (berbasis web)',
  ],
  pricing: 'Mulai dari Rp 99.000/bulan',
  status: 'available' as const,
}

const mockComingSoonItem = {
  id: 'inventory-management',
  title: 'Manajemen Inventori',
  category: 'aplikasi' as const,
  description:
    'Kelola stok barang dengan mudah. Tracking otomatis, notifikasi stok menipis, dan integrasi dengan POS.',
  features: [
    '✅ Tracking stok real-time',
    '✅ Notifikasi stok menipis',
    '✅ Riwayat pergerakan barang',
  ],
  pricing: 'Mulai dari Rp 79.000/bulan',
  status: 'coming-soon' as const,
  badge: 'Segera Hadir',
}

const mockMentoringPemula = {
  id: 'web-dev-fundamentals',
  title: 'Web Development Fundamentals',
  category: 'mentoring' as const,
  description:
    'Belajar membuat website dari nol. HTML, CSS, JavaScript dengan project nyata dan bimbingan mentor.',
  features: [
    '✅ Materi: HTML, CSS, JavaScript',
    '✅ Project: Portfolio website sendiri',
    '✅ Didampingi mentor berpengalaman',
  ],
  pricing: 'Rp 499.000 (8 sesi) atau Rp 75.000/sesi',
  status: 'coming-soon' as const,
  badge: 'Segera Hadir',
  skillLevel: 'Pemula' as const,
  duration: '8 sesi',
}

const mockMentoringMenengah = {
  id: 'fullstack-bootcamp',
  title: 'Full-Stack Development Bootcamp',
  category: 'mentoring' as const,
  description: 'Program intensif belajar frontend dan backend.',
  features: [
    '✅ Frontend: Vue.js/React',
    '✅ Backend: Node.js',
    '✅ Didampingi mentor industry expert',
  ],
  pricing: 'Rp 2.499.000 (3 bulan)',
  status: 'coming-soon' as const,
  badge: 'Segera Hadir',
  skillLevel: 'Menengah' as const,
  duration: '3 bulan',
}

const mockMentoringLanjut = {
  id: 'it-consultation',
  title: 'Konsultasi IT untuk Bisnis',
  category: 'mentoring' as const,
  description: 'Konsultasi 1-on-1 dengan expert.',
  features: ['✅ Analisis kebutuhan bisnis', '✅ Didampingi IT consultant berpengalaman'],
  pricing: 'Rp 150.000/jam',
  status: 'available' as const,
  skillLevel: 'Lanjut' as const,
  duration: 'Fleksibel',
}

// ============================================================================
// TESTS
// ============================================================================
describe('CatalogueCard', () => {
  describe('Rendering', () => {
    it('renders product title correctly', () => {
      const wrapper = createWrapper(mockAvailableItem)
      expect(wrapper.text()).toContain('Sistem Kasir Modern (POS)')
    })

    it('displays description text', () => {
      const wrapper = createWrapper(mockAvailableItem)
      expect(wrapper.text()).toContain('Sistem kasir berbasis web yang mudah digunakan untuk UMKM')
    })

    it('renders all features from array', () => {
      const wrapper = createWrapper(mockAvailableItem)
      expect(wrapper.text()).toContain('Pencatatan transaksi otomatis')
      expect(wrapper.text()).toContain('Manajemen stok barang')
      expect(wrapper.text()).toContain('Laporan penjualan harian/bulanan')
      expect(wrapper.text()).toContain('Dukungan multi-user')
      expect(wrapper.text()).toContain('Akses dari mana saja (berbasis web)')
    })

    it('shows pricing with correct format', () => {
      const wrapper = createWrapper(mockAvailableItem)
      expect(wrapper.text()).toContain('Mulai dari Rp 99.000/bulan')
    })
  })

  describe('Coming Soon Badge', () => {
    it('"Segera Hadir" badge renders when status is coming-soon', () => {
      const wrapper = createWrapper(mockComingSoonItem)
      expect(wrapper.text()).toContain('Segera Hadir')
    })

    it('badge does not render for available items without badge property', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const badges = wrapper.findAll('.bg-orange-500')
      expect(badges.length).toBe(0)
    })

    it('badge has correct styling classes', () => {
      const wrapper = createWrapper(mockComingSoonItem)
      const badge = wrapper.find('.bg-orange-500')
      expect(badge.exists()).toBe(true)
      expect(badge.classes()).toContain('rounded-full')
      expect(badge.classes()).toContain('text-xs')
      expect(badge.classes()).toContain('font-semibold')
      expect(badge.classes()).toContain('text-white')
    })
  })

  describe('CTA Button', () => {
    it('CTA link is present for available items', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const ctaLink = wrapper.find('a[href*="/kontak"]')
      expect(ctaLink.exists()).toBe(true)
    })

    it('CTA button links to /kontak with query parameter', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const ctaLink = wrapper.find('a')
      expect(ctaLink.attributes('href')).toBe('/kontak?produk=pos-system')
    })

    it('CTA button text is "Pelajari Lebih Lanjut" for available items', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const ctaLink = wrapper.find('a')
      expect(ctaLink.text()).toBe('Pelajari Lebih Lanjut')
    })

    it('button is disabled for coming-soon items', () => {
      const wrapper = createWrapper(mockComingSoonItem)
      const disabledButton = wrapper.find('button[disabled]')
      expect(disabledButton.exists()).toBe(true)
    })

    it('button text is "Segera Hadir" for coming-soon items', () => {
      const wrapper = createWrapper(mockComingSoonItem)
      const disabledButton = wrapper.find('button[disabled]')
      expect(disabledButton.text()).toBe('Segera Hadir')
    })

    it('disabled button has opacity-50 class', () => {
      const wrapper = createWrapper(mockComingSoonItem)
      const disabledButton = wrapper.find('button[disabled]')
      expect(disabledButton.classes()).toContain('opacity-50')
      expect(disabledButton.classes()).toContain('cursor-not-allowed')
    })
  })

  describe('Card Styling', () => {
    it('card has white background and rounded corners', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const card = wrapper.find('.bg-white')
      expect(card.exists()).toBe(true)
      expect(card.classes()).toContain('rounded-lg')
    })

    it('card has border and shadow classes', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const card = wrapper.find('.border-gray-200')
      expect(card.classes()).toContain('border')
      expect(card.classes()).toContain('shadow-sm')
    })

    it('card has hover state classes', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const card = wrapper.find('.hover\\:border-teal-500')
      expect(card.exists()).toBe(true)
      expect(card.classes()).toContain('hover:shadow-md')
      expect(card.classes()).toContain('transition-all')
    })
  })

  describe('Typography', () => {
    it('title uses correct size and weight classes', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const title = wrapper.find('h3')
      expect(title.classes()).toContain('text-xl')
      expect(title.classes()).toContain('font-bold')
      expect(title.classes()).toContain('text-navy-900')
    })

    it('description uses correct text color', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const description = wrapper.find('.text-gray-700')
      expect(description.exists()).toBe(true)
    })

    it('features use small text size', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const features = wrapper.findAll('.text-sm.text-gray-700')
      expect(features.length).toBeGreaterThan(0)
    })

    it('pricing uses teal color and semibold weight', () => {
      const wrapper = createWrapper(mockAvailableItem)
      const pricing = wrapper.find('.text-teal-600')
      expect(pricing.exists()).toBe(true)
      expect(pricing.classes()).toContain('font-semibold')
    })
  })

  describe('Query Parameter Encoding', () => {
    it('properly encodes product ID in URL', () => {
      const itemWithSpecialChars = {
        ...mockAvailableItem,
        id: 'test-product-123',
      }
      const wrapper = createWrapper(itemWithSpecialChars)
      const ctaLink = wrapper.find('a')
      expect(ctaLink.attributes('href')).toBe('/kontak?produk=test-product-123')
    })
  })

  describe('Mentoring Features', () => {
    describe('Skill Level Badge', () => {
      it('renders skill level badge for Pemula', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        expect(wrapper.text()).toContain('Pemula')
      })

      it('Pemula badge has green background', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        const badge = wrapper.find('.bg-green-500')
        expect(badge.exists()).toBe(true)
        expect(badge.classes()).toContain('rounded-full')
        expect(badge.classes()).toContain('text-xs')
        expect(badge.classes()).toContain('font-semibold')
      })

      it('renders skill level badge for Menengah', () => {
        const wrapper = createWrapper(mockMentoringMenengah)
        expect(wrapper.text()).toContain('Menengah')
      })

      it('Menengah badge has yellow background with dark text', () => {
        const wrapper = createWrapper(mockMentoringMenengah)
        const badge = wrapper.find('.bg-yellow-500')
        expect(badge.exists()).toBe(true)
        expect(badge.classes()).toContain('text-gray-900')
        expect(badge.classes()).toContain('rounded-full')
      })

      it('renders skill level badge for Lanjut', () => {
        const wrapper = createWrapper(mockMentoringLanjut)
        expect(wrapper.text()).toContain('Lanjut')
      })

      it('Lanjut badge has blue background', () => {
        const wrapper = createWrapper(mockMentoringLanjut)
        const badge = wrapper.find('.bg-blue-500')
        expect(badge.exists()).toBe(true)
        expect(badge.classes()).toContain('rounded-full')
      })

      it('does not render skill level badge for items without skillLevel', () => {
        const wrapper = createWrapper(mockAvailableItem)
        expect(wrapper.find('.bg-green-500').exists()).toBe(false)
        expect(wrapper.find('.bg-yellow-500').exists()).toBe(false)
        expect(wrapper.find('.bg-blue-500').exists()).toBe(false)
      })
    })

    describe('Duration Display', () => {
      it('renders duration for mentoring programs', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        expect(wrapper.text()).toContain('8 sesi')
      })

      it('duration display has clock icon', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        const durationDiv = wrapper.find('.flex.items-center.gap-2')
        expect(durationDiv.exists()).toBe(true)
        expect(durationDiv.classes()).toContain('text-sm')
        expect(durationDiv.classes()).toContain('text-gray-600')
      })

      it('renders different duration formats', () => {
        const menengahWrapper = createWrapper(mockMentoringMenengah)
        expect(menengahWrapper.text()).toContain('3 bulan')

        const lanjutWrapper = createWrapper(mockMentoringLanjut)
        expect(lanjutWrapper.text()).toContain('Fleksibel')
      })

      it('does not render duration for items without duration field', () => {
        const wrapper = createWrapper(mockAvailableItem)
        const durationDiv = wrapper.find('.flex.items-center.gap-2')
        expect(durationDiv.exists()).toBe(false)
      })
    })

    describe('Button Text Differentiation', () => {
      it('button text is "Mulai Belajar" for available mentoring items', () => {
        const wrapper = createWrapper(mockMentoringLanjut)
        const ctaLink = wrapper.find('a')
        expect(ctaLink.text()).toBe('Mulai Belajar')
      })

      it('button text is "Pelajari Lebih Lanjut" for available application items', () => {
        const wrapper = createWrapper(mockAvailableItem)
        const ctaLink = wrapper.find('a')
        expect(ctaLink.text()).toBe('Pelajari Lebih Lanjut')
      })

      it('button text is "Segera Hadir" for coming-soon mentoring items', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        const disabledButton = wrapper.find('button[disabled]')
        expect(disabledButton.text()).toBe('Segera Hadir')
      })

      it('button text is "Segera Hadir" for coming-soon application items', () => {
        const wrapper = createWrapper(mockComingSoonItem)
        const disabledButton = wrapper.find('button[disabled]')
        expect(disabledButton.text()).toBe('Segera Hadir')
      })
    })

    describe('Backward Compatibility', () => {
      it('renders application cards without skillLevel or duration', () => {
        const wrapper = createWrapper(mockAvailableItem)
        expect(wrapper.find('h3').text()).toBe('Sistem Kasir Modern (POS)')
        expect(wrapper.text()).toContain('Mulai dari Rp 99.000/bulan')
      })

      it('mentoring items display all standard fields plus new fields', () => {
        const wrapper = createWrapper(mockMentoringPemula)
        expect(wrapper.text()).toContain('Web Development Fundamentals')
        expect(wrapper.text()).toContain('Pemula')
        expect(wrapper.text()).toContain('8 sesi')
        expect(wrapper.text()).toContain('Rp 499.000 (8 sesi) atau Rp 75.000/sesi')
      })
    })
  })
})
