/**
 * Scroll depth tracking composable
 *
 * Tracks scroll depth at 25%, 50%, 75%, and 100% milestones.
 * Each milestone fires only once per page load.
 *
 * @example
 * ```typescript
 * // In app.vue or a layout
 * useScrollTracking()
 * ```
 */

import { onMounted, onUnmounted } from 'vue'

export function useScrollTracking() {
  const { trackEvent } = useAnalytics()

  // Track which milestones have been reached
  const milestones = {
    25: false,
    50: false,
    75: false,
    100: false,
  }

  let rafId: number | null = null

  function handleScroll() {
    // Use requestAnimationFrame for better performance
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    rafId = requestAnimationFrame(() => {
      // Calculate scroll percentage
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const percentage = Math.round((scrolled / total) * 100)

      // Track 25% milestone
      if (percentage >= 25 && !milestones[25]) {
        milestones[25] = true
        trackEvent('scroll_depth', { depth_percentage: 25 })
      }

      // Track 50% milestone
      if (percentage >= 50 && !milestones[50]) {
        milestones[50] = true
        trackEvent('scroll_depth', { depth_percentage: 50 })
      }

      // Track 75% milestone
      if (percentage >= 75 && !milestones[75]) {
        milestones[75] = true
        trackEvent('scroll_depth', { depth_percentage: 75 })
      }

      // Track 100% milestone
      if (percentage >= 100 && !milestones[100]) {
        milestones[100] = true
        trackEvent('scroll_depth', { depth_percentage: 100 })
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
  })
}
