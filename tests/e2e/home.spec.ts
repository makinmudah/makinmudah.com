import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the landing page', async ({ page }) => {
    await page.goto('/')

    // Check for the main heading
    await expect(page.getByRole('heading', { name: 'Makin Mudah' })).toBeVisible()

    // Check for welcome text
    await expect(page.getByText('Welcome to the landing page')).toBeVisible()
  })

  test('should have a test button', async ({ page }) => {
    await page.goto('/')

    // Check for the button
    const button = page.getByRole('button', { name: 'Test Button' })
    await expect(button).toBeVisible()

    // Verify button styling
    await expect(button).toHaveClass(/bg-orange-500/)
  })
})
