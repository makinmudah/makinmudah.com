import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import ValuePropositions from '@/components/landing/ValuePropositions.vue'

describe('ValuePropositions', () => {
  describe('Rendering', () => {
    it('renders three value proposition columns', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')
      expect(columns).toHaveLength(3)
    })

    it('each column contains icon, headline, and description', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')

      columns.forEach(column => {
        // Icon (svg element)
        expect(column.find('svg').exists()).toBe(true)
        // Headline (h2)
        expect(column.find('h2').exists()).toBe(true)
        // Description (p)
        expect(column.find('p').exists()).toBe(true)
      })
    })

    it('icons have correct size classes (w-16 h-16)', () => {
      const wrapper = mount(ValuePropositions)
      const icons = wrapper.findAll('svg')

      icons.forEach(icon => {
        expect(icon.classes()).toContain('w-16')
        expect(icon.classes()).toContain('h-16')
      })
    })

    it('icons have teal color class (text-teal-500)', () => {
      const wrapper = mount(ValuePropositions)
      const icons = wrapper.findAll('svg')

      icons.forEach(icon => {
        expect(icon.classes()).toContain('text-teal-500')
      })
    })

    it('headlines have correct Indonesian text content', () => {
      const wrapper = mount(ValuePropositions)
      const headlines = wrapper.findAll('h2')

      expect(headlines[0].text()).toBe('Bayar Seperlumu, Bayar Semaumu')
      expect(headlines[1].text()).toBe('Tanpa Instalasi, Buka Dimana Saja')
      expect(headlines[2].text()).toBe('Didampingi Mentor')
    })

    it('headlines have semibold weight class (font-semibold)', () => {
      const wrapper = mount(ValuePropositions)
      const headlines = wrapper.findAll('h2')

      headlines.forEach(headline => {
        expect(headline.classes()).toContain('font-semibold')
      })
    })

    it('section has light gray background (bg-gray-100)', () => {
      const wrapper = mount(ValuePropositions)
      const section = wrapper.find('section')

      expect(section.classes()).toContain('bg-gray-100')
    })

    it('grid layout uses correct classes (grid-cols-1 md:grid-cols-3)', () => {
      const wrapper = mount(ValuePropositions)
      const grid = wrapper.find('.grid')

      expect(grid.classes()).toContain('grid-cols-1')
      expect(grid.classes()).toContain('md:grid-cols-3')
      expect(grid.classes()).toContain('gap-8')
    })

    it('text is center-aligned (text-center)', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')

      expect(columns).toHaveLength(3)
      columns.forEach(column => {
        expect(column.classes()).toContain('text-center')
      })
    })
  })

  describe('Typography', () => {
    it('headlines use correct size (text-xl)', () => {
      const wrapper = mount(ValuePropositions)
      const headlines = wrapper.findAll('h2')

      headlines.forEach(headline => {
        expect(headline.classes()).toContain('text-xl')
      })
    })

    it('headlines use navy color (text-navy-900)', () => {
      const wrapper = mount(ValuePropositions)
      const headlines = wrapper.findAll('h2')

      headlines.forEach(headline => {
        expect(headline.classes()).toContain('text-navy-900')
      })
    })

    it('descriptions use base size (text-base)', () => {
      const wrapper = mount(ValuePropositions)
      const descriptions = wrapper.findAll('p')

      descriptions.forEach(description => {
        expect(description.classes()).toContain('text-base')
      })
    })

    it('descriptions use gray color (text-gray-600)', () => {
      const wrapper = mount(ValuePropositions)
      const descriptions = wrapper.findAll('p')

      descriptions.forEach(description => {
        expect(description.classes()).toContain('text-gray-600')
      })
    })
  })

  describe('Layout', () => {
    it('container has proper padding (py-12 md:py-16 lg:py-20)', () => {
      const wrapper = mount(ValuePropositions)
      const section = wrapper.find('section')

      expect(section.classes()).toContain('py-12')
      expect(section.classes()).toContain('md:py-16')
      expect(section.classes()).toContain('lg:py-20')
    })

    it('container has responsive width and centering', () => {
      const wrapper = mount(ValuePropositions)
      const container = wrapper.find('.container')

      expect(container.classes()).toContain('mx-auto')
      expect(container.classes()).toContain('px-4')
    })
  })

  describe('Accessibility', () => {
    it('section has role="region" and aria-label', () => {
      const wrapper = mount(ValuePropositions)
      const section = wrapper.find('section')

      expect(section.attributes('role')).toBe('region')
      expect(section.attributes('aria-label')).toBe('Value Propositions')
    })

    it('icons have aria-hidden="true"', () => {
      const wrapper = mount(ValuePropositions)
      const icons = wrapper.findAll('svg')

      icons.forEach(icon => {
        expect(icon.attributes('aria-hidden')).toBe('true')
      })
    })

    it('uses proper semantic HTML (section, h2, p)', () => {
      const wrapper = mount(ValuePropositions)

      expect(wrapper.find('section').exists()).toBe(true)
      expect(wrapper.findAll('h2')).toHaveLength(3)
      expect(wrapper.findAll('p')).toHaveLength(3)
    })
  })

  describe('Content', () => {
    it('pricing column has correct content', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')

      expect(columns[0].find('h2').text()).toBe('Bayar Seperlumu, Bayar Semaumu')
      expect(columns[0].find('p').text()).toContain('Tidak ada kontrak panjang')
    })

    it('web-based column has correct content', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')

      expect(columns[1].find('h2').text()).toBe('Tanpa Instalasi, Buka Dimana Saja')
      expect(columns[1].find('p').text()).toContain('Cukup buka browser')
    })

    it('mentor column has correct content', () => {
      const wrapper = mount(ValuePropositions)
      const columns = wrapper.findAll('.text-center')

      expect(columns[2].find('h2').text()).toBe('Didampingi Mentor')
      expect(columns[2].find('p').text()).toContain('Ada mentor yang siap bantu')
    })
  })
})
