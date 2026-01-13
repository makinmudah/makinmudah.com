import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import HeroSection from '@/components/landing/HeroSection.vue'

describe('HeroSection', () => {
  describe('Rendering', () => {
    it('renders hero headline correctly', () => {
      const wrapper = mount(HeroSection)
      const headline = wrapper.find('h1')
      const headlineText = headline.text()

      expect(headlineText).toContain('Hidup')
      expect(headlineText).toContain('Makin Mudah')
      expect(headlineText).toContain('dengan')
    })

    it('"Makin Mudah" words are emphasized with teal color', () => {
      const wrapper = mount(HeroSection)
      const spans = wrapper.findAll('h1 span')
      expect(spans.length).toBeGreaterThanOrEqual(2)
      expect(spans[0].classes()).toContain('text-teal-500')
      expect(spans[0].classes()).toContain('font-bold')
    })

    it('applies slide-up animation class to headline', () => {
      const wrapper = mount(HeroSection)
      const headline = wrapper.find('h1')
      expect(headline.classes()).toContain('animate-slide-up')
    })

    it('displays both CTA buttons with correct text', () => {
      const { getByText } = render(HeroSection)
      expect(getByText('Intip Yuk')).toBeInTheDocument()
      expect(getByText('Mulai Dulu')).toBeInTheDocument()
    })

    it('buttons have correct background colors', () => {
      const wrapper = mount(HeroSection)
      const intipBtn = wrapper.find('[data-testid="cta-intip"]')
      const mulaiBtn = wrapper.find('[data-testid="cta-mulai"]')

      expect(intipBtn.classes()).toContain('bg-teal-500')
      expect(mulaiBtn.classes()).toContain('bg-orange-500')
    })

    it('buttons have minimum tap target size classes', () => {
      const wrapper = mount(HeroSection)
      const intipBtn = wrapper.find('[data-testid="cta-intip"]')
      const mulaiBtn = wrapper.find('[data-testid="cta-mulai"]')

      // px-8 py-4 should provide >44px tap target
      expect(intipBtn.classes()).toContain('px-8')
      expect(intipBtn.classes()).toContain('py-4')
      expect(mulaiBtn.classes()).toContain('px-8')
      expect(mulaiBtn.classes()).toContain('py-4')
    })
  })

  describe('Navigation', () => {
    it('"Intip Yuk" button navigates to /katalog/aplikasi', () => {
      const wrapper = mount(HeroSection)
      const intipBtn = wrapper.find('[data-testid="cta-intip"]')

      expect(intipBtn.attributes('to')).toBe('/katalog/aplikasi')
    })

    it('"Mulai Dulu" button navigates to /katalog/mentoring', () => {
      const wrapper = mount(HeroSection)
      const mulaiBtn = wrapper.find('[data-testid="cta-mulai"]')

      expect(mulaiBtn.attributes('to')).toBe('/katalog/mentoring')
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      const wrapper = mount(HeroSection)
      const h1 = wrapper.find('h1')
      expect(h1.exists()).toBe(true)

      // Should not have h2 before h1
      const headings = wrapper.findAll('h1, h2, h3, h4, h5, h6')
      expect(headings[0].element.tagName).toBe('H1')
    })

    it('uses semantic HTML section element', () => {
      const wrapper = mount(HeroSection)
      expect(wrapper.find('section').exists()).toBe(true)
    })

    it('CTA buttons have accessible names', () => {
      const { getByText } = render(HeroSection)
      const intipBtn = getByText('Intip Yuk')
      const mulaiBtn = getByText('Mulai Dulu')

      expect(intipBtn).toBeInTheDocument()
      expect(mulaiBtn).toBeInTheDocument()
    })

    it('buttons have visible focus indicators', () => {
      const wrapper = mount(HeroSection)
      const intipBtn = wrapper.find('[data-testid="cta-intip"]')
      const mulaiBtn = wrapper.find('[data-testid="cta-mulai"]')

      expect(intipBtn.classes()).toContain('focus:ring-2')
      expect(mulaiBtn.classes()).toContain('focus:ring-2')
    })
  })

  describe('Responsive Design', () => {
    it('headline has responsive text sizing with clamp()', () => {
      const wrapper = mount(HeroSection)
      const headline = wrapper.find('h1')

      // Check for clamp-based responsive sizing
      const classes = headline.classes().join(' ')
      expect(classes).toContain('text-[clamp')
    })

    it('hero section has appropriate min-height classes', () => {
      const wrapper = mount(HeroSection)
      const section = wrapper.find('section')

      expect(section.classes()).toContain('min-h-[80vh]')
    })
  })
})
