import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FinalCta from '@/components/landing/FinalCta.vue'

// Mock NuxtLink component
const NuxtLinkStub = {
  name: 'NuxtLink',
  template: '<a :href="to"><slot /></a>',
  props: ['to'],
}

describe('FinalCta', () => {
  describe('Rendering', () => {
    it('renders the component', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      expect(wrapper.exists()).toBe(true)
    })

    it('renders the headline "Siap untuk hidup yang makin mudah?"', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const headline = wrapper.find('h2')
      expect(headline.exists()).toBe(true)
      expect(headline.text()).toBe('Siap untuk hidup yang makin mudah?')
    })

    it('renders the CTA button with text "Intip Solusinya"', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.exists()).toBe(true)
      expect(button.text()).toBe('Intip Solusinya')
    })
  })

  describe('Navigation', () => {
    it('CTA button links to /katalog', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.attributes('href')).toBe('/katalog')
    })
  })

  describe('Styling', () => {
    it('headline has navy color class', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const headline = wrapper.find('h2')
      expect(headline.classes()).toContain('text-navy-900')
    })

    it('headline has bold font weight', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const headline = wrapper.find('h2')
      expect(headline.classes()).toContain('font-bold')
    })

    it('headline has responsive text sizing classes', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const headline = wrapper.find('h2')
      expect(headline.classes()).toContain('text-3xl')
      expect(headline.classes()).toContain('md:text-4xl')
      expect(headline.classes()).toContain('lg:text-5xl')
    })

    it('button has teal background color', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.classes()).toContain('bg-teal-500')
    })

    it('button has hover state class', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.classes()).toContain('hover:bg-teal-600')
    })

    it('button has white text color', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.classes()).toContain('text-white')
    })

    it('button has proper padding for tap target size', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.classes()).toContain('px-8')
      expect(button.classes()).toContain('py-4')
    })

    it('button has focus ring classes', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.classes()).toContain('focus:ring-2')
      expect(button.classes()).toContain('focus:ring-teal-500')
    })

    it('section has gradient background', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const section = wrapper.find('section')
      expect(section.classes()).toContain('bg-gradient-to-r')
      expect(section.classes()).toContain('from-gray-50')
      expect(section.classes()).toContain('to-white')
    })

    it('section has proper padding classes', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const section = wrapper.find('section')
      expect(section.classes()).toContain('py-16')
      expect(section.classes()).toContain('md:py-20')
      expect(section.classes()).toContain('lg:py-24')
    })
  })

  describe('Accessibility', () => {
    it('uses semantic section element', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      expect(wrapper.find('section').exists()).toBe(true)
    })

    it('uses semantic h2 element for headline', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      expect(wrapper.find('h2').exists()).toBe(true)
    })

    it('button has descriptive text (not just icon)', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const button = wrapper.find('a')
      expect(button.text().trim().length).toBeGreaterThan(0)
      expect(button.text()).toBe('Intip Solusinya')
    })
  })

  describe('Responsive Layout', () => {
    it('content is centered with max-width constraint', () => {
      const wrapper = mount(FinalCta, {
        global: {
          stubs: {
            NuxtLink: NuxtLinkStub,
          },
        },
      })

      const contentWrapper = wrapper.find('.max-w-2xl')
      expect(contentWrapper.exists()).toBe(true)
      expect(contentWrapper.classes()).toContain('mx-auto')
      expect(contentWrapper.classes()).toContain('text-center')
    })
  })
})
