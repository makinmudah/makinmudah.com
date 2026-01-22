import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import ProblemSolution from '@/components/landing/ProblemSolution.vue'

// Helper to create wrapper with global stubs
const createWrapper = () => {
  return mount(ProblemSolution, {
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

describe('ProblemSolution', () => {
  describe('Rendering', () => {
    it('renders two problem-solution pairs', () => {
      const wrapper = createWrapper()
      const headlines = wrapper.findAll('h2')
      expect(headlines).toHaveLength(2)
    })

    it('renders two solution headlines (h3)', () => {
      const wrapper = createWrapper()
      const solutionHeadlines = wrapper.findAll('h3')
      expect(solutionHeadlines).toHaveLength(2)
    })

    it('renders two visual demo images', () => {
      const wrapper = createWrapper()
      const images = wrapper.findAll('img')
      expect(images).toHaveLength(2)
    })

    it('renders CTA button', () => {
      const wrapper = createWrapper()
      const ctaButton = wrapper.find('a[href="/katalog"]')
      expect(ctaButton.exists()).toBe(true)
    })

    it('section has white background', () => {
      const wrapper = createWrapper()
      const section = wrapper.find('section')
      expect(section.classes()).toContain('bg-white')
    })
  })

  describe('Content - Problem 1', () => {
    it('problem 1 headline contains correct text', () => {
      const wrapper = createWrapper()
      const headline = wrapper.findAll('h2')[0]
      expect(headline.text()).toBe('IT terlalu ribet dan bikin pusing?')
    })

    it('problem 1 description contains key phrases', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')
      const problemDesc = paragraphs[0].text()
      expect(problemDesc).toContain('IT itu kayak bahasa alien')
      expect(problemDesc).toContain('sesederhana mungkin')
    })

    it('solution 1 headline contains correct text', () => {
      const wrapper = createWrapper()
      const solutionHeadline = wrapper.findAll('h3')[0]
      expect(solutionHeadline.text()).toBe(
        'Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun',
      )
    })

    it('solution 1 description contains key phrases', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')
      const solutionDesc = paragraphs[1].text()
      expect(solutionDesc).toContain('Gak perlu jadi IT expert')
      expect(solutionDesc).toContain('mentor yang siap bantu')
    })
  })

  describe('Content - Problem 2', () => {
    it('problem 2 headline contains correct text', () => {
      const wrapper = createWrapper()
      const headline = wrapper.findAll('h2')[1]
      expect(headline.text()).toBe('Khawatir budget bengkak atau bayar fitur yang gak kepake?')
    })

    it('problem 2 description contains key phrases', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')
      const problemDesc = paragraphs[2].text()
      expect(problemDesc).toContain('bayar sesuai kebutuhan')
      expect(problemDesc).toContain('Gak ada kontrak panjang')
    })

    it('solution 2 headline contains correct text', () => {
      const wrapper = createWrapper()
      const solutionHeadline = wrapper.findAll('h3')[1]
      expect(solutionHeadline.text()).toBe('Bayar sesuai kebutuhan, fleksibel sesuai budget kamu')
    })

    it('solution 2 description contains key phrases', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')
      const solutionDesc = paragraphs[3].text()
      expect(solutionDesc).toContain('bayar bulanan')
      expect(solutionDesc).toContain('pay-as-you-go')
    })
  })

  describe('Typography', () => {
    it('problem headlines use correct size and weight', () => {
      const wrapper = createWrapper()
      const headlines = wrapper.findAll('h2')

      headlines.forEach(headline => {
        expect(headline.classes()).toContain('text-2xl')
        expect(headline.classes()).toContain('md:text-3xl')
        expect(headline.classes()).toContain('font-bold')
        expect(headline.classes()).toContain('text-navy-900')
      })
    })

    it('solution headlines use correct size and color', () => {
      const wrapper = createWrapper()
      const solutionHeadlines = wrapper.findAll('h3')

      solutionHeadlines.forEach(headline => {
        expect(headline.classes()).toContain('text-xl')
        expect(headline.classes()).toContain('md:text-2xl')
        expect(headline.classes()).toContain('font-semibold')
        expect(headline.classes()).toContain('text-teal-600')
      })
    })

    it('paragraphs use correct size and color', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')

      paragraphs.forEach(paragraph => {
        expect(paragraph.classes()).toContain('text-base')
        expect(paragraph.classes()).toContain('md:text-lg')
        expect(paragraph.classes()).toContain('text-gray-600')
      })
    })
  })

  describe('Images', () => {
    it('image 1 has correct source and alt text', () => {
      const wrapper = createWrapper()
      const image = wrapper.findAll('img')[0]

      expect(image.attributes('src')).toBe('/images/simple-ui-demo.png')
      expect(image.attributes('alt')).toBe('Demo of simple and intuitive user interface')
    })

    it('image 2 has correct source and alt text', () => {
      const wrapper = createWrapper()
      const image = wrapper.findAll('img')[1]

      expect(image.attributes('src')).toBe('/images/pricing-flexibility.png')
      expect(image.attributes('alt')).toBe(
        'Illustration showing flexible pricing options and payment models',
      )
    })

    it('images have lazy loading enabled', () => {
      const wrapper = createWrapper()
      const images = wrapper.findAll('img')

      images.forEach(image => {
        expect(image.attributes('loading')).toBe('lazy')
      })
    })

    it('images have width and height attributes', () => {
      const wrapper = createWrapper()
      const images = wrapper.findAll('img')

      images.forEach(image => {
        expect(image.attributes('width')).toBe('600')
        expect(image.attributes('height')).toBe('400')
      })
    })

    it('images have proper styling classes', () => {
      const wrapper = createWrapper()
      const images = wrapper.findAll('img')

      images.forEach(image => {
        expect(image.classes()).toContain('h-auto')
        expect(image.classes()).toContain('max-w-full')
        expect(image.classes()).toContain('rounded-lg')
        expect(image.classes()).toContain('shadow-md')
      })
    })
  })

  describe('CTA Button', () => {
    it('CTA button links to correct URL', () => {
      const wrapper = createWrapper()
      const ctaButton = wrapper.find('a[href="/katalog"]')

      expect(ctaButton.exists()).toBe(true)
      expect(ctaButton.attributes('href')).toBe('/katalog')
    })

    it('CTA button has correct text', () => {
      const wrapper = createWrapper()
      const ctaButton = wrapper.find('a[href="/katalog"]')

      expect(ctaButton.text()).toBe('Intip Solusinya')
    })

    it('CTA button has correct styling classes', () => {
      const wrapper = createWrapper()
      const ctaButton = wrapper.find('a[href="/katalog"]')

      expect(ctaButton.classes()).toContain('inline-block')
      expect(ctaButton.classes()).toContain('rounded-lg')
      expect(ctaButton.classes()).toContain('bg-teal-500')
      expect(ctaButton.classes()).toContain('hover:bg-teal-600')
      expect(ctaButton.classes()).toContain('px-8')
      expect(ctaButton.classes()).toContain('py-3')
      expect(ctaButton.classes()).toContain('text-white')
      expect(ctaButton.classes()).toContain('font-semibold')
    })

    it('CTA button is centered', () => {
      const wrapper = createWrapper()
      const ctaContainer = wrapper.find('a[href="/katalog"]').element.parentElement

      expect(ctaContainer?.classList.contains('text-center')).toBe(true)
    })
  })

  describe('Layout', () => {
    it('section has proper padding', () => {
      const wrapper = createWrapper()
      const section = wrapper.find('section')

      expect(section.classes()).toContain('py-12')
      expect(section.classes()).toContain('md:py-16')
      expect(section.classes()).toContain('lg:py-20')
    })

    it('container has proper classes', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.container')

      expect(container.classes()).toContain('mx-auto')
      expect(container.classes()).toContain('px-4')
    })

    it('problem-solution pairs have proper spacing', () => {
      const wrapper = createWrapper()
      const pairs = wrapper.findAll('.mb-16')

      expect(pairs.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('Indonesian Language', () => {
    it('uses informal tone with "kamu"', () => {
      const wrapper = createWrapper()
      const allText = wrapper.text()

      expect(allText).toContain('kamu')
    })

    it('uses casual language with "gak"', () => {
      const wrapper = createWrapper()
      const allText = wrapper.text()

      expect(allText).toContain('gak')
    })

    it('uses slang term "gaptek"', () => {
      const wrapper = createWrapper()
      const allText = wrapper.text()

      expect(allText).toContain('gaptek')
    })

    it('includes colloquial phrases', () => {
      const wrapper = createWrapper()
      const allText = wrapper.text()

      expect(allText).toContain('banget')
    })
  })
})
