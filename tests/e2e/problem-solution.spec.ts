import { test, expect } from '@playwright/test'

test.describe('Problem and Solution Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test.describe('Visual Verification', () => {
    test('problem and solution section is visible on landing page', async ({ page }) => {
      // Find section by looking for the first problem headline
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      await expect(section).toBeVisible()
    })

    test('section appears below value propositions section', async ({ page }) => {
      const valueProps = page.locator('section[aria-label="Value Propositions"]')
      const problemSolution = page.locator('section:has(h2:has-text("IT terlalu ribet"))')

      const valuePropsBox = await valueProps.boundingBox()
      const problemSolutionBox = await problemSolution.boundingBox()

      expect(valuePropsBox).not.toBeNull()
      expect(problemSolutionBox).not.toBeNull()
      expect(problemSolutionBox!.y).toBeGreaterThanOrEqual(valuePropsBox!.y + valuePropsBox!.height)
    })

    test('both problem headlines are visible', async ({ page }) => {
      const problem1 = page.locator('h2:has-text("IT terlalu ribet dan bikin pusing?")')
      const problem2 = page.locator(
        'h2:has-text("Khawatir budget bengkak atau bayar fitur yang gak kepake?")',
      )

      await expect(problem1).toBeVisible()
      await expect(problem2).toBeVisible()
    })

    test('both solution headlines are visible', async ({ page }) => {
      const solution1 = page.locator(
        'h3:has-text("Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun")',
      )
      const solution2 = page.locator(
        'h3:has-text("Bayar sesuai kebutuhan, fleksibel sesuai budget kamu")',
      )

      await expect(solution1).toBeVisible()
      await expect(solution2).toBeVisible()
    })

    test('both visual demo images are visible', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const images = section.locator('img')

      await expect(images).toHaveCount(2)
      await expect(images.nth(0)).toBeVisible()
      await expect(images.nth(1)).toBeVisible()
    })

    test('CTA button is visible', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')
      await expect(ctaButton).toBeVisible()
    })
  })

  test.describe('Content Verification', () => {
    test('problem 1 contains correct headline', async ({ page }) => {
      const headline = page.locator('h2:has-text("IT terlalu ribet dan bikin pusing?")')
      await expect(headline).toBeVisible()
      await expect(headline).toHaveText('IT terlalu ribet dan bikin pusing?')
    })

    test('problem 1 description contains key phrases', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('IT itu kayak bahasa alien')
      expect(content).toContain('sesederhana mungkin')
    })

    test('solution 1 contains correct headline', async ({ page }) => {
      const headline = page.locator(
        'h3:has-text("Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun")',
      )
      await expect(headline).toBeVisible()
    })

    test('solution 1 description contains key phrases', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('Gak perlu jadi IT expert')
      expect(content).toContain('mentor yang siap bantu')
    })

    test('problem 2 contains correct headline', async ({ page }) => {
      const headline = page.locator(
        'h2:has-text("Khawatir budget bengkak atau bayar fitur yang gak kepake?")',
      )
      await expect(headline).toBeVisible()
    })

    test('problem 2 description contains key phrases', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('bayar sesuai kebutuhan')
      expect(content).toContain('Gak ada kontrak panjang')
    })

    test('solution 2 contains correct headline', async ({ page }) => {
      const headline = page.locator(
        'h3:has-text("Bayar sesuai kebutuhan, fleksibel sesuai budget kamu")',
      )
      await expect(headline).toBeVisible()
    })

    test('solution 2 description contains key phrases', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('bayar bulanan')
      expect(content).toContain('pay-as-you-go')
    })
  })

  test.describe('Images', () => {
    test('image 1 has correct source and alt text', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const image = section.locator('img').first()

      await expect(image).toHaveAttribute('src', '/images/simple-ui-demo.png')
      await expect(image).toHaveAttribute('alt', 'Demo of simple and intuitive user interface')
    })

    test('image 2 has correct source and alt text', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const image = section.locator('img').nth(1)

      await expect(image).toHaveAttribute('src', '/images/pricing-flexibility.png')
      await expect(image).toHaveAttribute(
        'alt',
        'Illustration showing flexible pricing options and payment models',
      )
    })

    test('images have lazy loading enabled', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const images = section.locator('img')

      const count = await images.count()
      for (let i = 0; i < count; i++) {
        await expect(images.nth(i)).toHaveAttribute('loading', 'lazy')
      }
    })

    test('images have width and height attributes', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const images = section.locator('img')

      const count = await images.count()
      for (let i = 0; i < count; i++) {
        await expect(images.nth(i)).toHaveAttribute('width', '600')
        await expect(images.nth(i)).toHaveAttribute('height', '400')
      }
    })
  })

  test.describe('CTA Button', () => {
    test('CTA button has correct text', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')
      await expect(ctaButton).toHaveText('Intip Solusinya')
    })

    test('CTA button has correct href', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')
      await expect(ctaButton).toHaveAttribute('href', '/katalog')
    })

    test('CTA button has teal background', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')
      const bgColor = await ctaButton.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-teal-500 is #14B8A6 which is rgb(20, 184, 166)
      expect(bgColor).toBe('rgb(20, 184, 166)')
    })

    test('CTA button is clickable', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')
      await expect(ctaButton).toBeEnabled()

      // Verify it's an actual link (not disabled)
      const href = await ctaButton.getAttribute('href')
      expect(href).toBe('/katalog')
    })
  })

  test.describe('Styling Verification', () => {
    test('section has white background', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))').first()
      const bgColor = await section.evaluate(el => {
        return window.getComputedStyle(el).backgroundColor
      })

      // bg-white is rgb(255, 255, 255)
      expect(bgColor).toBe('rgb(255, 255, 255)')
    })

    test('problem headlines have navy color', async ({ page }) => {
      const headline = page.locator('h2:has-text("IT terlalu ribet dan bikin pusing?")')
      const color = await headline.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-navy-900 is rgb(30, 58, 138)
      expect(color).toBe('rgb(30, 58, 138)')
    })

    test('solution headlines have teal color', async ({ page }) => {
      const headline = page.locator(
        'h3:has-text("Solusi kami dibuat sederhana, bahkan untuk yang gaptek sekalipun")',
      )
      const color = await headline.evaluate(el => {
        return window.getComputedStyle(el).color
      })

      // text-teal-600 is rgb(13, 148, 136)
      expect(color).toBe('rgb(13, 148, 136)')
    })
  })

  test.describe('Responsive Testing', () => {
    test('mobile (375px): content is readable and images fit', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 })

      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      await expect(section).toBeVisible()

      // Check images fit within viewport
      const images = section.locator('img')
      const imageCount = await images.count()

      for (let i = 0; i < imageCount; i++) {
        const box = await images.nth(i).boundingBox()
        expect(box).not.toBeNull()
        expect(box!.width).toBeLessThanOrEqual(375)
      }
    })

    test('tablet (768px): content is well-spaced', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })

      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      await expect(section).toBeVisible()

      const images = section.locator('img')
      await expect(images.first()).toBeVisible()
      await expect(images.nth(1)).toBeVisible()
    })

    test('desktop (1280px): full layout with proper spacing', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 })

      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      await expect(section).toBeVisible()

      const sectionBox = await section.boundingBox()
      expect(sectionBox).not.toBeNull()
      expect(sectionBox!.width).toBeLessThanOrEqual(1280)
    })

    test('verify no horizontal overflow on any viewport', async ({ page }) => {
      const viewports = [
        { width: 375, height: 667 },
        { width: 768, height: 1024 },
        { width: 1280, height: 720 },
      ]

      for (const viewport of viewports) {
        await page.setViewportSize(viewport)

        const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
        const sectionBox = await section.boundingBox()
        const viewportWidth = viewport.width

        expect(sectionBox).not.toBeNull()
        expect(sectionBox!.width).toBeLessThanOrEqual(viewportWidth)
      }
    })
  })

  test.describe('Accessibility', () => {
    test('uses proper semantic HTML structure', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      await expect(section).toBeVisible()

      // Check for h2 elements (problem headlines)
      const h2Elements = section.locator('h2')
      await expect(h2Elements).toHaveCount(2)

      // Check for h3 elements (solution headlines)
      const h3Elements = section.locator('h3')
      await expect(h3Elements).toHaveCount(2)

      // Check for paragraph elements
      const paragraphs = section.locator('p')
      await expect(paragraphs).toHaveCount(4)
    })

    test('images have descriptive alt text', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const images = section.locator('img')

      const alt1 = await images.first().getAttribute('alt')
      const alt2 = await images.nth(1).getAttribute('alt')

      expect(alt1).toBeTruthy()
      expect(alt1).toContain('Demo')
      expect(alt2).toBeTruthy()
      expect(alt2).toContain('pricing')
    })

    test('CTA link is keyboard accessible', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const ctaButton = section.locator('a:has-text("Intip Solusinya")')

      // Focus the button using keyboard
      await ctaButton.focus()

      // Verify it's focused
      const isFocused = await ctaButton.evaluate(el => el === document.activeElement)
      expect(isFocused).toBe(true)
    })
  })

  test.describe('Indonesian Language Verification', () => {
    test('uses informal "kamu" pronoun', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('kamu')
    })

    test('uses casual "gak" instead of "tidak"', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('gak')
    })

    test('uses slang term "gaptek"', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('gaptek')
    })

    test('uses colloquial intensifier "banget"', async ({ page }) => {
      const section = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
      const content = await section.textContent()

      expect(content).toContain('banget')
    })
  })
})
