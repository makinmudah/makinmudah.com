import { test, expect } from '@playwright/test'

test.describe('FAQ Accordion Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Visual Verification', () => {
    test('FAQ section is visible on landing page', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      await expect(faqSection).toBeVisible()
    })

    test('section appears below Problem/Solution section', async ({ page }) => {
      const problemSection = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )

      const problemBox = await problemSection.boundingBox()
      const faqBox = await faqSection.boundingBox()

      expect(problemBox).not.toBeNull()
      expect(faqBox).not.toBeNull()
      expect(faqBox!.y).toBeGreaterThanOrEqual(problemBox!.y + problemBox!.height)
    })

    test('7 questions are displayed in collapsed state on page load', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const questions = faqSection.locator('button')
      await expect(questions).toHaveCount(7)
    })

    test('section has white background', async ({ page }) => {
      const faqSection = page
        .locator('section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))')
        .first()
      const bgColor = await faqSection.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-white is rgb(255, 255, 255)
      expect(bgColor).toBe('rgb(255, 255, 255)')
    })

    test('section heading is visible and centered', async ({ page }) => {
      const heading = page.locator('h2:has-text("Pertanyaan yang Sering Ditanyakan")')
      await expect(heading).toBeVisible()

      const textAlign = await heading.evaluate(el => {
        return window.getComputedStyle(el).textAlign
      })
      expect(textAlign).toBe('center')
    })
  })

  test.describe('Interaction', () => {
    test('clicking Question 1 expands answer with smooth animation', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question1 = faqSection.locator('button:has-text("Berapa sih biayanya?")')
      await question1.click()

      // Wait for animation to complete
      await page.waitForTimeout(350)

      // Check that answer content is visible within FAQ section
      const answer = faqSection.locator('text=Rp 99.000/bulan')
      await expect(answer).toBeVisible()
    })

    test('clicking expanded question collapses it', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question1 = faqSection.locator('button:has-text("Berapa sih biayanya?")')

      // Expand
      await question1.click()
      await page.waitForTimeout(350)

      const answer = faqSection.locator('text=Rp 99.000/bulan')
      await expect(answer).toBeVisible()

      // Collapse
      await question1.click()
      await page.waitForTimeout(250)

      await expect(answer).not.toBeVisible()
    })

    test('opening Question 2 while Question 1 is open collapses Question 1', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question1 = faqSection.locator('button:has-text("Berapa sih biayanya?")')
      const question2 = faqSection.locator('button:has-text("Butuh komputer khusus gak?")')

      // Open Question 1
      await question1.click()
      await page.waitForTimeout(350)
      const answer1 = faqSection.locator('text=Rp 99.000/bulan')
      await expect(answer1).toBeVisible()

      // Open Question 2
      await question2.click()
      await page.waitForTimeout(350)

      // Question 1 should be collapsed
      await expect(answer1).not.toBeVisible()

      // Question 2 should be visible
      const answer2 = faqSection.locator('text=berbasis web')
      await expect(answer2).toBeVisible()
    })

    test('chevron icon rotates when expanding/collapsing', async ({ page }) => {
      const question1 = page.locator('button:has-text("Berapa sih biayanya?")')
      const chevron = question1.locator('svg').first()

      // Check initial state (not rotated)
      const initialTransform = await chevron.evaluate(el => {
        return window.getComputedStyle(el).transform
      })

      // Expand
      await question1.click()
      await page.waitForTimeout(350)

      // Check rotated state
      const expandedTransform = await chevron.evaluate(el => {
        return window.getComputedStyle(el).transform
      })

      // Transform should have changed (rotation applied)
      expect(expandedTransform).not.toBe(initialTransform)
      expect(expandedTransform).not.toBe('none')
    })
  })

  test.describe('Content Verification', () => {
    test('all question text is visible and matches FAQ content', async ({ page }) => {
      const questions = [
        'Berapa sih biayanya?',
        'Butuh komputer khusus gak?',
        'Gimana cara mulainya?',
        'Kalau ada masalah, bisa tanya siapa?',
        'Apa aja yang didapat?',
        'Harus komitmen berapa lama?',
        'Bisa coba dulu gak?',
      ]

      for (const questionText of questions) {
        const question = page.locator(`button:has-text("${questionText}")`)
        await expect(question).toBeVisible()
      }
    })

    test('Answer content for Question 1 contains pricing information', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question1 = faqSection.locator('button:has-text("Berapa sih biayanya?")')
      await question1.click()
      await page.waitForTimeout(350)

      await expect(faqSection.locator('text=Rp 99.000/bulan')).toBeVisible()
      await expect(faqSection.locator('text=Untuk Aplikasi Bisnis')).toBeVisible()
      await expect(faqSection.locator('text=Untuk Mentoring')).toBeVisible()
    })

    test('Answer content for Question 7 contains trial/demo information', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question7 = faqSection.locator('button:has-text("Bisa coba dulu gak?")')
      await question7.click()
      await page.waitForTimeout(350)

      await expect(faqSection.locator('text=Bisa banget!')).toBeVisible()
      await expect(faqSection.locator('text=Free Trial 14 hari')).toBeVisible()
    })

    test('answers contain checkmark emojis for feature lists', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question5 = faqSection.locator('button:has-text("Apa aja yang didapat?")')
      await question5.click()
      await page.waitForTimeout(350)

      const answerDiv = faqSection.locator('div[id="faq-answer-4"]')
      const content = await answerDiv.textContent()
      expect(content).toContain('✅')
    })
  })

  test.describe('Keyboard Navigation', () => {
    test('keyboard navigation works (Tab to focus, Enter to toggle)', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const firstQuestion = faqSection.locator('button').first()

      // Focus the first FAQ button directly
      await firstQuestion.focus()

      // Verify focus is on the button
      const focusedElement = await page.evaluate(() => {
        return document.activeElement?.tagName
      })
      expect(focusedElement).toBe('BUTTON')

      // Press Enter to expand
      await page.keyboard.press('Enter')
      await page.waitForTimeout(350)

      // Check that content is visible within FAQ section
      const answer = faqSection.locator('text=Rp 99.000/bulan')
      await expect(answer).toBeVisible()
    })

    test('focus indicators are visible on keyboard navigation', async ({ page }) => {
      const question1 = page.locator('button:has-text("Berapa sih biayanya?")')
      await question1.focus()

      // Check that focus ring is applied
      const outlineStyle = await question1.evaluate(el => {
        const styles = window.getComputedStyle(el)
        return {
          outline: styles.outline,
          boxShadow: styles.boxShadow,
        }
      })

      // Should have either outline or box-shadow (focus ring)
      const hasFocusIndicator =
        outlineStyle.outline !== 'none' ||
        (outlineStyle.boxShadow !== 'none' && outlineStyle.boxShadow !== '')

      expect(hasFocusIndicator).toBe(true)
    })
  })

  test.describe('Styling Verification', () => {
    test('questions have navy color (#1E3A8A)', async ({ page }) => {
      const question = page.locator('button:has-text("Berapa sih biayanya?")')
      const color = await question.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-navy-900 is rgb(30, 58, 138)
      expect(color).toBe('rgb(30, 58, 138)')
    })

    test('question buttons have proper hover state', async ({ page }) => {
      const question = page.locator('button:has-text("Berapa sih biayanya?")')

      // Get initial background
      const initialBg = await question.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // Hover
      await question.hover()
      await page.waitForTimeout(50)

      const hoverBg = await question.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // Background should change on hover (gray-50 to gray-100)
      expect(hoverBg).not.toBe(initialBg)
    })
  })

  test.describe('Responsive Testing', () => {
    test('mobile (375px): Questions wrap properly, no overflow', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })

      const faqSection = page.locator('section:has(h2:has-text("Pertanyaan"))')
      await expect(faqSection).toBeVisible()

      // Check no horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth
      })
      expect(hasOverflow).toBe(false)

      // Open a question to verify answer wraps
      const question1 = page.locator('button:has-text("Berapa sih biayanya?")')
      await question1.click()
      await page.waitForTimeout(350)

      const answer = page.locator('text=Bayar Seperlumu')
      await expect(answer).toBeVisible()
    })

    test('tablet (768px): Proper spacing and readability', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })

      const faqSection = page.locator('section:has(h2:has-text("Pertanyaan"))')
      await expect(faqSection).toBeVisible()

      const heading = page.locator('h2:has-text("Pertanyaan yang Sering Ditanyakan")')
      await expect(heading).toBeVisible()
    })

    test('desktop (1280px): Proper spacing and readability', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 })

      const faqSection = page.locator('section:has(h2:has-text("Pertanyaan"))')
      await expect(faqSection).toBeVisible()

      // Verify max-width constraint is applied
      const container = faqSection.locator('.max-w-3xl').first()
      await expect(container).toBeVisible()

      const containerBox = await container.boundingBox()
      expect(containerBox).not.toBeNull()
      // max-w-3xl is 768px
      expect(containerBox!.width).toBeLessThanOrEqual(768)
    })
  })

  test.describe('Indonesian Language Verification', () => {
    test('uses informal "kamu" pronoun', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question2 = faqSection.locator('button:has-text("Butuh komputer khusus gak?")')
      await question2.click()
      await page.waitForTimeout(350)

      const answerDiv = faqSection.locator('div[id="faq-answer-1"]')
      const content = await answerDiv.textContent()
      expect(content).toContain('kamu')
    })

    test('uses casual "gak" instead of "tidak"', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question2 = faqSection.locator('button:has-text("Butuh komputer khusus gak?")')
      await expect(question2).toBeVisible()

      const questionText = await question2.textContent()
      expect(questionText).toContain('gak')
    })

    test('uses colloquial intensifier "banget"', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const question7 = faqSection.locator('button:has-text("Bisa coba dulu gak?")')
      await question7.click()
      await page.waitForTimeout(350)

      const answerDiv = faqSection.locator('div[id="faq-answer-6"]')
      const content = await answerDiv.textContent()
      expect(content).toContain('banget')
    })
  })
})
