import { test, expect } from '@playwright/test'

/**
 * Responsive Design and Performance Tests (Story 1.7)
 *
 * Tests:
 * - Responsive design across all breakpoints
 * - Tap target sizes on mobile (min 44x44px)
 * - No horizontal scrolling
 * - Layout stability (no unexpected shifts)
 */

test.describe('Responsive Design - All Breakpoints', () => {
  const breakpoints = [
    { name: 'Small Mobile', width: 320, height: 568 },
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Small Tablet', width: 640, height: 800 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Laptop', width: 1024, height: 768 },
    { name: 'Desktop', width: 1280, height: 1024 },
    { name: 'Large Desktop', width: 1536, height: 864 },
    { name: 'Extra Large', width: 1920, height: 1080 },
  ]

  breakpoints.forEach(({ name, width, height }) => {
    test(`should display correctly on ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height })
      await page.goto('/')

      // Verify all major sections are visible
      await expect(page.locator('section').first()).toBeVisible() // Hero
      await expect(page.getByRole('region', { name: 'Value Propositions' })).toBeVisible()
      await expect(
        page.getByRole('heading', { name: 'Pertanyaan yang Sering Ditanyakan' }),
      ).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()

      // Verify no horizontal scrolling
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
      expect(bodyWidth).toBeLessThanOrEqual(width + 1) // Allow 1px tolerance
    })
  })

  test('should have no horizontal overflow on any section - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 })
    await page.goto('/')

    const sections = await page.locator('section').all()

    for (const section of sections) {
      const sectionWidth = await section.evaluate(el => el.scrollWidth)
      const viewportWidth = 320

      expect(sectionWidth).toBeLessThanOrEqual(viewportWidth + 1) // Allow 1px tolerance
    }
  })
})

test.describe('Tap Target Sizes - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
  })

  test('Hero CTA buttons should be at least 44x44px', async ({ page }) => {
    const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
    const mulaiBtn = page.getByRole('link', { name: 'Mulai Dulu' })

    const intipBox = await intipBtn.boundingBox()
    const mulaiBox = await mulaiBtn.boundingBox()

    expect(intipBox?.width).toBeGreaterThanOrEqual(44)
    expect(intipBox?.height).toBeGreaterThanOrEqual(44)
    expect(mulaiBox?.width).toBeGreaterThanOrEqual(44)
    expect(mulaiBox?.height).toBeGreaterThanOrEqual(44)
  })

  test('Problem/Solution CTA button should be at least 44x44px', async ({ page }) => {
    const ctaBtn = page.getByRole('link', { name: 'Intip Solusinya' })
    const ctaBox = await ctaBtn.boundingBox()

    expect(ctaBox?.width).toBeGreaterThanOrEqual(44)
    expect(ctaBox?.height).toBeGreaterThanOrEqual(44)
  })

  test('FAQ accordion headers should be at least 44x44px tall', async ({ page }) => {
    const faqButtons = await page.getByRole('button', { name: /Berapa sih biayanya/ }).all()

    for (const button of faqButtons) {
      const box = await button.boundingBox()
      expect(box?.height).toBeGreaterThanOrEqual(44)
    }
  })

  test('Final CTA button should be at least 44x44px', async ({ page }) => {
    const finalCtaBtn = page.getByRole('link', { name: 'Intip Solusinya' }).last()
    const ctaBox = await finalCtaBtn.boundingBox()

    expect(ctaBox?.width).toBeGreaterThanOrEqual(44)
    expect(ctaBox?.height).toBeGreaterThanOrEqual(44)
  })

  test('Catalogue page buttons should be at least 44x44px', async ({ page }) => {
    await page.goto('/katalog')

    const buttons = await page.getByRole('button', { name: 'Hubungi Kami' }).all()

    for (const button of buttons) {
      const box = await button.boundingBox()
      expect(box?.width).toBeGreaterThanOrEqual(44)
      expect(box?.height).toBeGreaterThanOrEqual(44)
    }
  })
})

test.describe('Layout Stability (CLS Prevention)', () => {
  test('should have width/height on images to prevent layout shift', async ({ page }) => {
    await page.goto('/')

    // Check Problem/Solution images have dimensions
    const images = await page.locator('img').all()

    for (const img of images) {
      const width = await img.getAttribute('width')
      const height = await img.getAttribute('height')

      expect(width).toBeTruthy()
      expect(height).toBeTruthy()
    }
  })

  test('should not have unexpected layout shifts during load', async ({ page }) => {
    await page.goto('/')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Verify hero section position is stable
    const heroSection = page.locator('section').first()
    const initialBox = await heroSection.boundingBox()

    // Wait a bit and check position hasn't changed
    await page.waitForTimeout(1000)
    const finalBox = await heroSection.boundingBox()

    expect(initialBox?.y).toBe(finalBox?.y)
    expect(initialBox?.height).toBe(finalBox?.height)
  })
})

test.describe('Typography Scaling', () => {
  test('should have fluid typography on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const heading = page.getByRole('heading', { level: 1 })
    const fontSize = await heading.evaluate(el => {
      return window.getComputedStyle(el).fontSize
    })

    // Font size should be readable but not too large on mobile
    const fontSizeValue = parseFloat(fontSize)
    expect(fontSizeValue).toBeGreaterThanOrEqual(24) // Min 1.5rem = 24px
    expect(fontSizeValue).toBeLessThanOrEqual(48) // Max reasonable for mobile
  })

  test('should have larger typography on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1024 })
    await page.goto('/')

    const heading = page.getByRole('heading', { level: 1 })
    const fontSize = await heading.evaluate(el => {
      return window.getComputedStyle(el).fontSize
    })

    // Font size should be larger on desktop
    const fontSizeValue = parseFloat(fontSize)
    expect(fontSizeValue).toBeGreaterThanOrEqual(32) // Larger than mobile
  })
})

test.describe('Responsive Component Behavior', () => {
  test('Value Propositions should stack on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const valuePropsSection = page.getByRole('region', { name: 'Value Propositions' })
    const cards = await valuePropsSection.locator('div > div').all()

    if (cards.length >= 2) {
      const card1Box = await cards[0].boundingBox()
      const card2Box = await cards[1].boundingBox()

      // On mobile, cards should be stacked (card2 Y should be > card1 Y + height)
      if (card1Box && card2Box) {
        expect(card2Box.y).toBeGreaterThan(card1Box.y + card1Box.height - 50) // Allow some negative margin
      }
    }
  })

  test('Value Propositions should be side-by-side on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1024 })
    await page.goto('/')

    const valuePropsSection = page.getByRole('region', { name: 'Value Propositions' })
    const cards = await valuePropsSection.locator('div > div').all()

    if (cards.length >= 2) {
      const card1Box = await cards[0].boundingBox()
      const card2Box = await cards[1].boundingBox()

      // On desktop, cards should be side-by-side (similar Y coordinates)
      if (card1Box && card2Box) {
        const yDifference = Math.abs(card1Box.y - card2Box.y)
        expect(yDifference).toBeLessThan(50) // Should be in same row
      }
    }
  })

  test('FAQ accordion should be readable on all sizes', async ({ page }) => {
    const sizes = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 1024 },
    ]

    for (const size of sizes) {
      await page.setViewportSize(size)
      await page.goto('/')

      const faqButton = page.getByRole('button', { name: /Berapa sih biayanya/ })
      await expect(faqButton).toBeVisible()

      // Click to open
      await faqButton.click()

      // Content should be visible
      const faqContent = page.locator('#faq-answer-0')
      await expect(faqContent).toBeVisible()

      // Close it
      await faqButton.click()
    }
  })
})

test.describe('Catalogue Page Responsive', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/katalog')

    await expect(page.getByRole('heading', { name: 'Katalog Makin Mudah' })).toBeVisible()

    // Cards should be visible
    const cards = await page.locator('article').all()
    expect(cards.length).toBeGreaterThan(0)

    // No horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(375 + 1)
  })

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/katalog')

    await expect(page.getByRole('heading', { name: 'Katalog Makin Mudah' })).toBeVisible()

    // No horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(768 + 1)
  })

  test('should display correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1024 })
    await page.goto('/katalog')

    await expect(page.getByRole('heading', { name: 'Katalog Makin Mudah' })).toBeVisible()

    // No horizontal overflow
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(bodyWidth).toBeLessThanOrEqual(1280 + 1)
  })
})
