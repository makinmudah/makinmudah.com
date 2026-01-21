import { test, expect } from '@playwright/test'

test.describe('Value Propositions Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Visual Verification', () => {
    test('value propositions section is visible on landing page', async ({ page }) => {
      const section = page.locator('section[aria-label="Value Propositions"]')
      await expect(section).toBeVisible()
    })

    test('section appears below hero section', async ({ page }) => {
      const hero = page.locator('section').first()
      const valueProps = page.locator('section[aria-label="Value Propositions"]')

      const heroBox = await hero.boundingBox()
      const valuePropsBox = await valueProps.boundingBox()

      expect(valuePropsBox).not.toBeNull()
      expect(heroBox).not.toBeNull()
      expect(valuePropsBox!.y).toBeGreaterThan(heroBox!.y)
    })

    test('all three columns are visible', async ({ page }) => {
      const columns = page.locator('section[aria-label="Value Propositions"] .text-center')
      await expect(columns).toHaveCount(3)

      for (let i = 0; i < 3; i++) {
        await expect(columns.nth(i)).toBeVisible()
      }
    })

    test('icons are rendered and visible', async ({ page }) => {
      const icons = page.locator('section[aria-label="Value Propositions"] svg')
      await expect(icons).toHaveCount(3)

      for (let i = 0; i < 3; i++) {
        await expect(icons.nth(i)).toBeVisible()
      }
    })
  })

  test.describe('Content Verification', () => {
    test('column 1 headline: "Bayar Seperlumu, Bayar Semaumu"', async ({ page }) => {
      const headline = page.locator('h2:has-text("Bayar Seperlumu, Bayar Semaumu")')
      await expect(headline).toBeVisible()
      await expect(headline).toHaveText('Bayar Seperlumu, Bayar Semaumu')
    })

    test('column 2 headline: "Tanpa Instalasi, Buka Dimana Saja"', async ({ page }) => {
      const headline = page.locator('h2:has-text("Tanpa Instalasi, Buka Dimana Saja")')
      await expect(headline).toBeVisible()
      await expect(headline).toHaveText('Tanpa Instalasi, Buka Dimana Saja')
    })

    test('column 3 headline: "Didampingi Mentor"', async ({ page }) => {
      const headline = page.locator('h2:has-text("Didampingi Mentor")')
      await expect(headline).toBeVisible()
      await expect(headline).toHaveText('Didampingi Mentor')
    })

    test('all descriptions are present and readable', async ({ page }) => {
      const descriptions = page.locator('section[aria-label="Value Propositions"] p')
      await expect(descriptions).toHaveCount(3)

      await expect(descriptions.nth(0)).toContainText('Tidak ada kontrak panjang')
      await expect(descriptions.nth(1)).toContainText('Cukup buka browser')
      await expect(descriptions.nth(2)).toContainText('Ada mentor yang siap bantu')
    })
  })

  test.describe('Styling Verification', () => {
    test('section has light gray background', async ({ page }) => {
      const section = page.locator('section[aria-label="Value Propositions"]')
      const bgColor = await section.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-gray-100 is #F3F4F6 which is rgb(243, 244, 246)
      expect(bgColor).toBe('rgb(243, 244, 246)')
    })

    test('icons have teal color', async ({ page }) => {
      const icon = page.locator('section[aria-label="Value Propositions"] svg').first()
      const color = await icon.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-teal-500 is #14B8A6 which is rgb(20, 184, 166)
      expect(color).toBe('rgb(20, 184, 166)')
    })

    test('headlines have navy color', async ({ page }) => {
      const headline = page.locator('section[aria-label="Value Propositions"] h2').first()
      const color = await headline.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-navy-900 is #1E3A8A which is rgb(30, 58, 138)
      expect(color).toBe('rgb(30, 58, 138)')
    })
  })

  test.describe('Responsive Testing', () => {
    test('mobile (375px): columns stack vertically', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })

      const columns = page.locator('section[aria-label="Value Propositions"] .text-center')
      await expect(columns).toHaveCount(3)

      // Get bounding boxes for all columns
      const boxes = await Promise.all([
        columns.nth(0).boundingBox(),
        columns.nth(1).boundingBox(),
        columns.nth(2).boundingBox(),
      ])

      // All columns should have similar x position (stacked vertically)
      expect(boxes[0]).not.toBeNull()
      expect(boxes[1]).not.toBeNull()
      expect(boxes[2]).not.toBeNull()

      // Columns should be vertically stacked (y positions increase)
      expect(boxes[1]!.y).toBeGreaterThan(boxes[0]!.y)
      expect(boxes[2]!.y).toBeGreaterThan(boxes[1]!.y)
    })

    test('tablet (768px): three columns side-by-side', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })

      const columns = page.locator('section[aria-label="Value Propositions"] .text-center')
      await expect(columns).toHaveCount(3)

      const boxes = await Promise.all([
        columns.nth(0).boundingBox(),
        columns.nth(1).boundingBox(),
        columns.nth(2).boundingBox(),
      ])

      expect(boxes[0]).not.toBeNull()
      expect(boxes[1]).not.toBeNull()
      expect(boxes[2]).not.toBeNull()

      // Columns should be horizontally arranged (x positions increase)
      expect(boxes[1]!.x).toBeGreaterThan(boxes[0]!.x)
      expect(boxes[2]!.x).toBeGreaterThan(boxes[1]!.x)

      // Columns should have similar y position (same row)
      const yTolerance = 10 // Allow 10px tolerance
      expect(Math.abs(boxes[1]!.y - boxes[0]!.y)).toBeLessThan(yTolerance)
      expect(Math.abs(boxes[2]!.y - boxes[0]!.y)).toBeLessThan(yTolerance)
    })

    test('desktop (1280px): three columns with proper spacing', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 })

      const columns = page.locator('section[aria-label="Value Propositions"] .text-center')
      await expect(columns).toHaveCount(3)

      const boxes = await Promise.all([
        columns.nth(0).boundingBox(),
        columns.nth(1).boundingBox(),
        columns.nth(2).boundingBox(),
      ])

      expect(boxes[0]).not.toBeNull()
      expect(boxes[1]).not.toBeNull()
      expect(boxes[2]).not.toBeNull()

      // Columns should be horizontally arranged
      expect(boxes[1]!.x).toBeGreaterThan(boxes[0]!.x)
      expect(boxes[2]!.x).toBeGreaterThan(boxes[1]!.x)

      // Check for gap-8 spacing (32px) between columns
      const gap1 = boxes[1]!.x - (boxes[0]!.x + boxes[0]!.width)
      const gap2 = boxes[2]!.x - (boxes[1]!.x + boxes[1]!.width)

      // Gap should be approximately 32px (allow some tolerance)
      const gapTolerance = 10
      expect(gap1).toBeGreaterThan(32 - gapTolerance)
      expect(gap1).toBeLessThan(32 + gapTolerance)
      expect(gap2).toBeGreaterThan(32 - gapTolerance)
      expect(gap2).toBeLessThan(32 + gapTolerance)
    })

    test('verify no horizontal overflow on any viewport', async ({ page }) => {
      const viewports = [
        { width: 375, height: 667 },
        { width: 768, height: 1024 },
        { width: 1280, height: 720 },
      ]

      for (const viewport of viewports) {
        await page.setViewportSize(viewport)

        const section = page.locator('section[aria-label="Value Propositions"]')
        const sectionBox = await section.boundingBox()
        const viewportWidth = viewport.width

        expect(sectionBox).not.toBeNull()
        expect(sectionBox!.width).toBeLessThanOrEqual(viewportWidth)
      }
    })
  })

  test.describe('Accessibility', () => {
    test('section has proper ARIA attributes', async ({ page }) => {
      const section = page.locator('section[aria-label="Value Propositions"]')

      await expect(section).toHaveAttribute('role', 'region')
      await expect(section).toHaveAttribute('aria-label', 'Value Propositions')
    })

    test('icons have aria-hidden="true"', async ({ page }) => {
      const icons = page.locator('section[aria-label="Value Propositions"] svg')
      const count = await icons.count()

      for (let i = 0; i < count; i++) {
        await expect(icons.nth(i)).toHaveAttribute('aria-hidden', 'true')
      }
    })

    test('proper semantic HTML structure', async ({ page }) => {
      const section = page.locator('section[aria-label="Value Propositions"]')
      await expect(section).toBeVisible()

      const headlines = section.locator('h2')
      await expect(headlines).toHaveCount(3)

      const paragraphs = section.locator('p')
      await expect(paragraphs).toHaveCount(3)
    })
  })
})
