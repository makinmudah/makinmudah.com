/**
 * Google Analytics 4 tracking composable
 *
 * Provides functions to track events and page views in GA4.
 * Automatically handles environment detection and graceful degradation.
 *
 * @example
 * ```typescript
 * const { trackEvent, trackPageView } = useAnalytics()
 *
 * // Track a custom event
 * trackEvent('cta_click', {
 *   cta_label: 'Intip Yuk',
 *   cta_location: 'hero',
 *   destination_url: '/katalog#aplikasi'
 * })
 *
 * // Track a page view
 * trackPageView('/katalog', {
 *   page_title: 'Katalog - Makin Mudah'
 * })
 * ```
 */

import { useRuntimeConfig } from '#app'

// Type definitions for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set',
      targetOrAction: string,
      params?: Record<string, any>,
    ) => void
    dataLayer?: any[]
  }
}

export interface AnalyticsEventParams {
  [key: string]: string | number | boolean | undefined
}

export function useAnalytics() {
  const config = useRuntimeConfig()

  /**
   * Track a custom event in Google Analytics 4
   *
   * @param eventName - Name of the event (e.g., 'cta_click', 'scroll_depth')
   * @param eventParams - Optional parameters for the event
   */
  function trackEvent(eventName: string, eventParams?: AnalyticsEventParams) {
    // Skip tracking if GA ID not configured
    if (!config.public.gaId) {
      if (config.public.gaDebug) {
        console.log('[GA4 Debug] Event tracked (no GA ID):', eventName, eventParams)
      }
      return
    }

    // Skip tracking if gtag not available (SSR or script not loaded)
    if (typeof window === 'undefined' || !window.gtag) {
      return
    }

    // Track the event
    window.gtag('event', eventName, eventParams)

    // Log in debug mode
    if (config.public.gaDebug) {
      console.log('[GA4 Debug] Event tracked:', eventName, eventParams)
    }
  }

  /**
   * Track a page view in Google Analytics 4
   *
   * @param pagePath - Path of the page (e.g., '/', '/katalog')
   * @param pageParams - Optional parameters (page_title, etc.)
   */
  function trackPageView(pagePath: string, pageParams?: AnalyticsEventParams) {
    // Skip tracking if GA ID not configured
    if (!config.public.gaId) {
      if (config.public.gaDebug) {
        console.log('[GA4 Debug] Page view tracked (no GA ID):', pagePath, pageParams)
      }
      return
    }

    // Skip tracking if gtag not available (SSR or script not loaded)
    if (typeof window === 'undefined' || !window.gtag) {
      return
    }

    // Track the page view
    window.gtag('config', config.public.gaId, {
      page_path: pagePath,
      ...pageParams,
    })

    // Log in debug mode
    if (config.public.gaDebug) {
      console.log('[GA4 Debug] Page view tracked:', pagePath, pageParams)
    }
  }

  /**
   * Set user properties in Google Analytics 4
   *
   * @param properties - User properties to set (user_type_inferred, device_category, etc.)
   */
  function setUserProperties(properties: AnalyticsEventParams) {
    // Skip if GA ID not configured
    if (!config.public.gaId) {
      if (config.public.gaDebug) {
        console.log('[GA4 Debug] User properties set (no GA ID):', properties)
      }
      return
    }

    // Skip if gtag not available
    if (typeof window === 'undefined' || !window.gtag) {
      return
    }

    // Set user properties
    window.gtag('set', 'user_properties', properties)

    // Log in debug mode
    if (config.public.gaDebug) {
      console.log('[GA4 Debug] User properties set:', properties)
    }
  }

  return {
    trackEvent,
    trackPageView,
    setUserProperties,
  }
}
