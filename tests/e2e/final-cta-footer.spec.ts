import { test, expect } from '@playwright/test'

test.describe('Final CTA and Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
  })

  test.describe('Final CTA Section - Visual Verification', () => {
    test('Final CTA section is visible on landing page', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      await expect(ctaSection).toBeVisible()
    })

    test('section appears below FAQ section', async ({ page }) => {
      const faqSection = page.locator(
        'section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))',
      )
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')

      const faqBox = await faqSection.boundingBox()
      const ctaBox = await ctaSection.boundingBox()

      expect(faqBox).not.toBeNull()
      expect(ctaBox).not.toBeNull()
      expect(ctaBox!.y).toBeGreaterThanOrEqual(faqBox!.y + faqBox!.height)
    })

    test('headline "Siap untuk hidup yang makin mudah?" is visible', async ({ page }) => {
      const headline = page.locator('h2:has-text("Siap untuk hidup yang makin mudah?")')
      await expect(headline).toBeVisible()
    })

    test('CTA button "Intip Solusinya" is visible', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')
      await expect(button).toBeVisible()
    })

    test('section has gradient background', async ({ page }) => {
      const ctaSection = page
        .locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
        .first()

      const bgImage = await ctaSection.evaluate(el => {
        return window.getComputedStyle(el).backgroundImage
      })

      // Check for gradient (should contain 'gradient')
      expect(bgImage).toContain('gradient')
    })
  })

  test.describe('Final CTA Section - Interaction', () => {
    test('clicking CTA button navigates to /katalog', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')

      await button.click()
      await page.waitForURL('**/katalog')

      expect(page.url()).toContain('/katalog')
    })
  })

  test.describe('Final CTA Section - Styling', () => {
    test('button has teal background color', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')

      const bgColor = await button.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-teal-500 is rgb(20, 184, 166)
      expect(bgColor).toBe('rgb(20, 184, 166)')
    })

    test('headline has navy color', async ({ page }) => {
      const headline = page.locator('h2:has-text("Siap untuk hidup yang makin mudah?")')

      const color = await headline.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-navy-900 is rgb(30, 58, 138)
      expect(color).toBe('rgb(30, 58, 138)')
    })
  })

  test.describe('Final CTA Section - Accessibility', () => {
    test('button is keyboard accessible (Tab to focus, Enter to navigate)', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')

      // Focus the button
      await button.focus()

      // Verify focus is on the button
      const focusedElement = await page.evaluate(() => {
        return document.activeElement?.textContent
      })
      expect(focusedElement).toContain('Intip Solusinya')

      // Press Enter to navigate
      await page.keyboard.press('Enter')
      await page.waitForURL('**/katalog')

      expect(page.url()).toContain('/katalog')
    })

    test('button has visible focus indicator', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')

      await button.focus()

      const outlineStyle = await button.evaluate(el => {
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

  test.describe('Footer - Visual Verification', () => {
    test('Footer is visible at bottom of page', async ({ page }) => {
      const footer = page.locator('footer')
      await expect(footer).toBeVisible()
    })

    test('Footer displays copyright text with year', async ({ page }) => {
      const footer = page.locator('footer')
      const currentYear = new Date().getFullYear()

      const copyrightText = await footer.textContent()
      expect(copyrightText).toContain(String(currentYear))
      expect(copyrightText).toContain('Makin Mudah')
      expect(copyrightText).toContain('All rights reserved')
    })

    test('Footer appears below Final CTA section', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const footer = page.locator('footer')

      const ctaBox = await ctaSection.boundingBox()
      const footerBox = await footer.boundingBox()

      expect(ctaBox).not.toBeNull()
      expect(footerBox).not.toBeNull()
      expect(footerBox!.y).toBeGreaterThanOrEqual(ctaBox!.y + ctaBox!.height)
    })
  })

  test.describe('Footer - Styling', () => {
    test('Footer has light gray background', async ({ page }) => {
      const footer = page.locator('footer')

      const bgColor = await footer.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-gray-100 is rgb(243, 244, 246)
      expect(bgColor).toBe('rgb(243, 244, 246)')
    })

    test('copyright text is small and gray', async ({ page }) => {
      const copyrightPara = page.locator('footer p')

      const fontSize = await copyrightPara.evaluate(el => {
        return window.getComputedStyle(el).fontSize
      })

      const color = await copyrightPara.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-sm is 14px (0.875rem)
      expect(parseFloat(fontSize)).toBeLessThanOrEqual(16)

      // text-gray-600 is rgb(75, 85, 99)
      expect(color).toBe('rgb(75, 85, 99)')
    })
  })

  test.describe('Responsive Testing', () => {
    test('mobile (375px): Button and text display correctly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })

      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const headline = page.locator('h2:has-text("Siap untuk hidup yang makin mudah?")')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')
      const footer = page.locator('footer')

      await expect(headline).toBeVisible()
      await expect(button).toBeVisible()
      await expect(footer).toBeVisible()

      // Check no horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth
      })
      expect(hasOverflow).toBe(false)
    })

    test('tablet (768px): Proper spacing maintained', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })

      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const footer = page.locator('footer')

      await expect(ctaSection).toBeVisible()
      await expect(footer).toBeVisible()
    })

    test('desktop (1280px): Proper spacing and layout', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 })

      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const headline = page.locator('h2:has-text("Siap untuk hidup yang makin mudah?")')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')
      const footer = page.locator('footer')

      await expect(ctaSection).toBeVisible()
      await expect(headline).toBeVisible()
      await expect(button).toBeVisible()
      await expect(footer).toBeVisible()

      // Verify max-width constraint is applied for centered content
      const contentWrapper = ctaSection.locator('.max-w-2xl').first()
      await expect(contentWrapper).toBeVisible()

      const contentBox = await contentWrapper.boundingBox()
      expect(contentBox).not.toBeNull()
      // max-w-2xl is 672px
      expect(contentBox!.width).toBeLessThanOrEqual(672)
    })
  })

  test.describe('Indonesian Language Verification', () => {
    test('uses informal Indonesian in headline', async ({ page }) => {
      const headline = page.locator('h2:has-text("Siap untuk hidup yang makin mudah?")')
      await expect(headline).toBeVisible()

      const headlineText = await headline.textContent()
      expect(headlineText).toContain('makin')
      expect(headlineText).toContain('Siap')
    })

    test('CTA button uses casual Indonesian wording', async ({ page }) => {
      const ctaSection = page.locator('section:has(h2:has-text("Siap untuk hidup yang makin mudah?"))')
      const button = ctaSection.locator('a:has-text("Intip Solusinya")')
      await expect(button).toBeVisible()

      const buttonText = await button.textContent()
      expect(buttonText?.trim()).toBe('Intip Solusinya')
    })
  })
})
