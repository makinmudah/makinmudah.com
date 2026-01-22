import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import AppFooter from '@/components/common/AppFooter.vue'

describe('AppFooter', () => {
  describe('Rendering', () => {
    it('renders the component', () => {
      const wrapper = mount(AppFooter)
      expect(wrapper.exists()).toBe(true)
    })

    it('renders copyright notice with current year', () => {
      const wrapper = mount(AppFooter)
      const currentYear = new Date().getFullYear()

      const copyright = wrapper.find('p')
      expect(copyright.exists()).toBe(true)
      expect(copyright.text()).toContain(String(currentYear))
      expect(copyright.text()).toContain('Makin Mudah')
      expect(copyright.text()).toContain('All rights reserved')
    })

    it('displays year 2026 or current year', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')
      const currentYear = new Date().getFullYear()

      // Should contain the current year (which could be 2026 or later)
      expect(copyright.text()).toMatch(/©\s+\d{4}\s+Makin Mudah/)
      expect(copyright.text()).toContain(String(currentYear))
    })
  })

  describe('Styling', () => {
    it('footer has gray background class', () => {
      const wrapper = mount(AppFooter)
      const footer = wrapper.find('footer')

      expect(footer.classes()).toContain('bg-gray-100')
    })

    it('copyright text has small size class', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.classes()).toContain('text-sm')
    })

    it('copyright text has gray color class', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.classes()).toContain('text-gray-600')
    })

    it('copyright text is centered', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.classes()).toContain('text-center')
    })

    it('footer has minimal padding (py-6)', () => {
      const wrapper = mount(AppFooter)
      const footer = wrapper.find('footer')

      expect(footer.classes()).toContain('py-6')
    })
  })

  describe('Accessibility', () => {
    it('uses semantic footer element', () => {
      const wrapper = mount(AppFooter)
      expect(wrapper.find('footer').exists()).toBe(true)
    })

    it('footer element is the root component', () => {
      const wrapper = mount(AppFooter)
      expect(wrapper.element.tagName.toLowerCase()).toBe('footer')
    })
  })

  describe('Responsive Layout', () => {
    it('has container with responsive padding', () => {
      const wrapper = mount(AppFooter)
      const container = wrapper.find('.container')

      expect(container.exists()).toBe(true)
      expect(container.classes()).toContain('mx-auto')
      expect(container.classes()).toContain('px-4')
    })
  })

  describe('Copyright Content', () => {
    it('contains copyright symbol', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.text()).toContain('©')
    })

    it('contains company name "Makin Mudah"', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.text()).toContain('Makin Mudah')
    })

    it('contains rights reservation text', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      expect(copyright.text()).toContain('All rights reserved')
    })

    it('follows standard copyright format', () => {
      const wrapper = mount(AppFooter)
      const copyright = wrapper.find('p')

      // Should match pattern: © YEAR Company Name. Rights text.
      expect(copyright.text()).toMatch(/©\s+\d{4}\s+Makin Mudah\.\s+All rights reserved\./)
    })
  })
})
