import { chromium } from 'playwright'

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  // Enable console logging
  page.on('console', msg => console.log('PAGE LOG:', msg.text()))

  await page.goto('http://localhost:3000')

  // Wait for page to load
  await page.waitForTimeout(2000)

  // Get the first chevron
  const chevron = page.locator('button:has-text("Berapa sih biayanya?") svg').first()

  // Check initial transform
  const initialTransform = await chevron.evaluate(el => {
    const styles = window.getComputedStyle(el)
    return {
      transform: styles.transform,
      transition: styles.transition,
      classList: Array.from(el.classList),
    }
  })
  console.log('Initial state:', initialTransform)

  // Click to expand
  const question1 = page.locator('button:has-text("Berapa sih biayanya?")')
  await question1.click()
  await page.waitForTimeout(400) // Wait for transition

  // Check expanded transform
  const expandedTransform = await chevron.evaluate(el => {
    const styles = window.getComputedStyle(el)
    return {
      transform: styles.transform,
      transition: styles.transition,
      classList: Array.from(el.classList),
    }
  })
  console.log('Expanded state:', expandedTransform)

  await browser.close()
})()
