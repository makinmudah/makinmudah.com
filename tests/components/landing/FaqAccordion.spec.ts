import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import FaqAccordion from '@/components/landing/FaqAccordion.vue'

// Helper to create wrapper with global stubs
const createWrapper = () => {
  return mount(FaqAccordion, {
    global: {
      stubs: {
        ChevronDownIcon: {
          template: '<svg class="chevron-icon" />',
        },
      },
    },
  })
}

describe('FaqAccordion', () => {
  describe('Rendering', () => {
    it('renders 7 FAQ items in collapsed state on initial load', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('[class*="text-lg"]')
      expect(questions.length).toBeGreaterThanOrEqual(7)
    })

    it('renders section heading', () => {
      const wrapper = createWrapper()
      const heading = wrapper.find('h2')
      expect(heading.text()).toBe('Pertanyaan yang Sering Ditanyakan')
    })

    it('section has white background', () => {
      const wrapper = createWrapper()
      const section = wrapper.find('section')
      expect(section.classes()).toContain('bg-white')
    })

    it('section has proper padding', () => {
      const wrapper = createWrapper()
      const section = wrapper.find('section')
      expect(section.classes()).toContain('py-12')
      expect(section.classes()).toContain('md:py-16')
      expect(section.classes()).toContain('lg:py-20')
    })

    it('accordion content is constrained with max-width', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.max-w-3xl')
      expect(container.exists()).toBe(true)
    })
  })

  describe('Content - Questions', () => {
    it('Question 1 text matches "Berapa sih biayanya?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[0].text()).toContain('Berapa sih biayanya?')
    })

    it('Question 2 text matches "Butuh komputer khusus gak?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[1].text()).toContain('Butuh komputer khusus gak?')
    })

    it('Question 3 text matches "Gimana cara mulainya?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[2].text()).toContain('Gimana cara mulainya?')
    })

    it('Question 4 text matches "Kalau ada masalah, bisa tanya siapa?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[3].text()).toContain('Kalau ada masalah, bisa tanya siapa?')
    })

    it('Question 5 text matches "Apa aja yang didapat?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[4].text()).toContain('Apa aja yang didapat?')
    })

    it('Question 6 text matches "Harus komitmen berapa lama?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[5].text()).toContain('Harus komitmen berapa lama?')
    })

    it('Question 7 text matches "Bisa coba dulu gak?"', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')
      expect(questions[6].text()).toContain('Bisa coba dulu gak?')
    })
  })

  describe('Content - Answers', () => {
    it('Answer 1 contains pricing information', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[0].answer).toContain('Bayar Seperlumu')
      expect(vm.faqItems[0].answer).toContain('Rp 99.000/bulan')
    })

    it('Answer 2 contains device flexibility information', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[1].answer).toContain('Gak perlu!')
      expect(vm.faqItems[1].answer).toContain('berbasis web')
    })

    it('Answer 3 contains 3-step onboarding process', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[2].answer).toContain('3 langkah')
      expect(vm.faqItems[2].answer).toContain('Intip Yuk')
      expect(vm.faqItems[2].answer).toContain('Mulai Dulu')
    })

    it('Answer 4 contains support channel information', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[3].answer).toContain('support@makinmudah.com')
      expect(vm.faqItems[3].answer).toContain('+62 812')
    })

    it('Answer 5 contains feature list with checkmarks', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[4].answer).toContain('✅')
      expect(vm.faqItems[4].answer).toContain('all-in-one')
    })

    it('Answer 6 contains flexible commitment information', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[5].answer).toContain('Gak ada kontrak jangka panjang')
      expect(vm.faqItems[5].answer).toContain('Flexible')
    })

    it('Answer 7 contains trial/demo information', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      expect(vm.faqItems[6].answer).toContain('Bisa banget')
      expect(vm.faqItems[6].answer).toContain('Free Trial 14 hari')
      expect(vm.faqItems[6].answer).toContain('🎁')
    })
  })

  describe('Typography', () => {
    it('question buttons use correct size and weight', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')

      questions.forEach(question => {
        expect(question.classes()).toContain('text-lg')
        expect(question.classes()).toContain('md:text-xl')
        expect(question.classes()).toContain('font-semibold')
        expect(question.classes()).toContain('text-navy-900')
      })
    })

    it('section heading uses correct typography', () => {
      const wrapper = createWrapper()
      const heading = wrapper.find('h2')
      expect(heading.classes()).toContain('text-3xl')
      expect(heading.classes()).toContain('md:text-4xl')
      expect(heading.classes()).toContain('font-bold')
      expect(heading.classes()).toContain('text-navy-900')
    })
  })

  describe('Styling', () => {
    it('question buttons have proper background and hover states', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')

      questions.forEach(question => {
        expect(question.classes()).toContain('bg-gray-50')
        expect(question.classes()).toContain('hover:bg-gray-100')
        expect(question.classes()).toContain('rounded-lg')
      })
    })

    it('question buttons have focus ring for accessibility', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')

      questions.forEach(question => {
        expect(question.classes()).toContain('focus:ring-2')
        expect(question.classes()).toContain('focus:ring-teal-500')
      })
    })

    it('question buttons have minimum tap target padding', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')

      questions.forEach(question => {
        expect(question.classes()).toContain('px-6')
        expect(question.classes()).toContain('py-4')
      })
    })

    it('chevron icon exists for each question', () => {
      const wrapper = createWrapper()
      const buttons = wrapper.findAll('button')
      expect(buttons.length).toBe(7)
      // Each button should have an icon (stubbed as svg.chevron-icon)
      buttons.forEach(button => {
        const icon = button.find('svg')
        expect(icon.exists()).toBe(true)
      })
    })

    it('spacing between accordion items', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.space-y-4')
      expect(container.exists()).toBe(true)
    })
  })

  describe('Layout', () => {
    it('section uses container with horizontal padding', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.container')
      expect(container.classes()).toContain('mx-auto')
      expect(container.classes()).toContain('px-4')
    })

    it('heading is centered', () => {
      const wrapper = createWrapper()
      const heading = wrapper.find('h2')
      expect(heading.classes()).toContain('text-center')
    })
  })

  describe('Indonesian Language', () => {
    it('uses informal tone with "kamu"', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      const allContent = vm.faqItems.map((item: any) => item.answer).join(' ')
      expect(allContent).toContain('kamu')
    })

    it('uses casual language with "gak"', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      const allQuestions = vm.faqItems.map((item: any) => item.question).join(' ')
      const allAnswers = vm.faqItems.map((item: any) => item.answer).join(' ')
      expect(allQuestions).toContain('gak')
      expect(allAnswers).toContain('Gak')
    })

    it('uses colloquial intensifier "banget"', () => {
      const wrapper = createWrapper()
      const vm = wrapper.vm as any
      const allContent = vm.faqItems.map((item: any) => item.answer).join(' ')
      expect(allContent).toContain('banget')
    })

    it('all questions are in Indonesian', () => {
      const wrapper = createWrapper()
      const questions = wrapper.findAll('button')

      const questionTexts = questions.map(q => q.text())
      questionTexts.forEach(text => {
        expect(text).not.toContain('How')
        expect(text).not.toContain('What')
        expect(text).not.toContain('Why')
      })
    })
  })
})
