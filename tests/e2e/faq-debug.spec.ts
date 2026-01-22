import { test } from '@playwright/test'

test('FAQ debug - check state update', async ({ page }) => {
  await page.goto('/')

  const faqSection = page.locator('section:has(h2:has-text("Pertanyaan yang Sering Ditanyakan"))')
  const question1 = faqSection.locator('button:has-text("Berapa sih biayanya?")')

  // Check initial state
  const initialOpen = await question1.getAttribute('data-open')
  console.log('Initial data-open:', initialOpen)

  // Click the button
  await question1.click()

  // Wait a bit for state update
  await page.waitForTimeout(500)

  // Check state after click
  const afterOpen = await question1.getAttribute('data-open')
  console.log('After click data-open:', afterOpen)

  // Check aria-expanded
  const ariaExpanded = await question1.getAttribute('aria-expanded')
  console.log('aria-expanded:', ariaExpanded)

  // Try to find the answer div
  const answerDiv = page.locator('#faq-answer-0')
  const answerExists = await answerDiv.count()
  console.log('Answer div count:', answerExists)

  if (answerExists > 0) {
    const isVisible = await answerDiv.isVisible()
    console.log('Answer visible:', isVisible)
    const html = await answerDiv.innerHTML()
    console.log('Answer HTML length:', html.length)
  }

  // Get all the HTML to see what's rendered
  const faqHTML = await faqSection.innerHTML()
  console.log('FAQ section has', faqHTML.length, 'characters')
})
