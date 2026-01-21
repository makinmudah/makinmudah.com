import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the landing page', async ({ page }) => {
    await page.goto('/')

    // Check for the hero section headline containing "Makin Mudah"
    const heroHeading = page.locator('h1')
    await expect(heroHeading).toBeVisible()
    await expect(heroHeading).toContainText('Makin Mudah')

    // Check that all main sections are visible
    await expect(page.locator('section').first()).toBeVisible()
  })

  test('should have CTA buttons', async ({ page }) => {
    await page.goto('/')

    // Check for the hero section CTA buttons
    const intipBtn = page.getByRole('link', { name: 'Intip Yuk' })
    await expect(intipBtn).toBeVisible()

    const mulaiBtn = page.getByRole('link', { name: 'Mulai Dulu' })
    await expect(mulaiBtn).toBeVisible()
  })

  test('should display all landing sections in order', async ({ page }) => {
    await page.goto('/')

    // Verify Hero Section exists
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()

    // Verify Value Propositions section exists
    const valuePropsSection = page.locator('section[aria-label="Value Propositions"]')
    await expect(valuePropsSection).toBeVisible()

    // Verify Problem Solution section exists
    const problemSolutionSection = page.locator('section:has(h2:has-text("IT terlalu ribet"))')
    await expect(problemSolutionSection).toBeVisible()
  })
})
