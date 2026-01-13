import { test, expect } from '@playwright/test'

test.describe('Hero Section', () => {
  test('should display hero section with headline and CTAs', async ({ page }) => {
    await page.goto('/')

    // Check hero section is visible
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()

    // Check headline
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Hidup')
    await expect(heading).toContainText('Makin Mudah')
    await expect(heading).toContainText('dengan')

    // Check CTA buttons
    const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
    const mulaiBtn = page.getByRole('link', { name: 'Mulai Dulu' })

    await expect(intipBtn).toBeVisible()
    await expect(mulaiBtn).toBeVisible()
  })

  test('should have animated headline on page load', async ({ page }) => {
    await page.goto('/')

    const heading = page.getByRole('heading', { level: 1 })

    // Check for animation class
    const headingClasses = await heading.getAttribute('class')
    expect(headingClasses).toContain('animate-slide-up')
  })

  test('should navigate to catalogue pages on CTA click', async ({ page }) => {
    await page.goto('/')

    // Click "Intip Yuk" button
    const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
    await intipBtn.click()
    await expect(page).toHaveURL('/katalog/aplikasi')
    await expect(page.getByRole('heading', { name: 'Katalog Aplikasi' })).toBeVisible()

    // Go back and click "Mulai Dulu"
    await page.goto('/')
    const mulaiBtn = page.getByRole('link', { name: 'Mulai Dulu' })
    await mulaiBtn.click()
    await expect(page).toHaveURL('/katalog/mentoring')
    await expect(page.getByRole('heading', { name: 'Katalog Mentoring' })).toBeVisible()
  })

  test('should have proper hero section height', async ({ page }) => {
    await page.goto('/')

    const heroSection = page.locator('section').first()
    const viewportHeight = page.viewportSize()?.height || 0

    const sectionBox = await heroSection.boundingBox()
    const sectionHeight = sectionBox?.height || 0

    // Hero should be at least 70% of viewport height
    expect(sectionHeight).toBeGreaterThanOrEqual(viewportHeight * 0.7)
  })

  test.describe('Responsive Design', () => {
    test('should display correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })
      await page.goto('/')

      // Check both buttons are visible and clickable
      const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
      const mulaiBtn = page.getByRole('link', { name: 'Mulai Dulu' })

      await expect(intipBtn).toBeVisible()
      await expect(mulaiBtn).toBeVisible()

      // Verify buttons are side-by-side (both in same row)
      const intipBox = await intipBtn.boundingBox()
      const mulaiBox = await mulaiBtn.boundingBox()

      // Both buttons should have Y coordinates close to each other (same row)
      if (intipBox && mulaiBox) {
        const yDifference = Math.abs(intipBox.y - mulaiBox.y)
        expect(yDifference).toBeLessThan(50) // Allow some flex-wrap tolerance
      }
    })

    test('should display correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      await page.goto('/')

      const heroSection = page.locator('section').first()
      await expect(heroSection).toBeVisible()

      const heading = page.getByRole('heading', { level: 1 })
      await expect(heading).toBeVisible()

      // Check buttons are visible
      await expect(page.getByRole('link', { name: 'Intip Yuk' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Mulai Dulu' })).toBeVisible()
    })

    test('should display correctly on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 1024 })
      await page.goto('/')

      const heroSection = page.locator('section').first()
      await expect(heroSection).toBeVisible()

      const heading = page.getByRole('heading', { level: 1 })
      await expect(heading).toBeVisible()

      // Check buttons are visible
      await expect(page.getByRole('link', { name: 'Intip Yuk' })).toBeVisible()
      await expect(page.getByRole('link', { name: 'Mulai Dulu' })).toBeVisible()
    })
  })

  test.describe('Accessibility', () => {
    test('should have proper heading hierarchy', async ({ page }) => {
      await page.goto('/')

      // First heading should be h1
      const firstHeading = page.locator('h1, h2, h3, h4, h5, h6').first()
      const tagName = await firstHeading.evaluate(el => el.tagName)
      expect(tagName).toBe('H1')
    })

    test('should have keyboard navigable buttons', async ({ page }) => {
      await page.goto('/')

      // Tab to first button
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
      await expect(intipBtn).toBeFocused()

      // Press Enter to navigate
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL('/katalog/aplikasi')
    })

    test('should have visible focus indicators', async ({ page }) => {
      await page.goto('/')

      const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
      await intipBtn.focus()

      // Check button has focus ring classes
      const btnClasses = await intipBtn.getAttribute('class')
      expect(btnClasses).toContain('focus:ring-2')
    })
  })

  test('should have no horizontal scrolling', async ({ page }) => {
    // Test on mobile
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = 375

    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth)
  })
})
