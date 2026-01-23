import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { useRuntimeConfig } from '#app'
import { useAnalytics } from '~/composables/useAnalytics'

// Mock #app with a function that can be configured per test
vi.mock('#app', () => ({
  useRuntimeConfig: vi.fn(),
}))

describe('useAnalytics', () => {
  let mockGtag: ReturnType<typeof vi.fn>
  let originalWindow: typeof globalThis.window

  beforeEach(() => {
    // Save original window
    originalWindow = globalThis.window

    // Mock window.gtag and window.dataLayer
    mockGtag = vi.fn()
    globalThis.window = {
      ...globalThis.window,
      gtag: mockGtag,
      dataLayer: [],
    } as any

    // Clear console.log spy
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    // Restore original window
    globalThis.window = originalWindow
    vi.clearAllMocks()
  })

  describe('trackEvent', () => {
    it('should track event with GA ID configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1', param2: 123 })

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_event', {
        param1: 'value1',
        param2: 123,
      })
    })

    it('should not track event when GA ID is not configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: '',
          gaDebug: false,
        },
      } as any)

      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1' })

      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should log debug message when gaDebug is true and GA ID is not configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: '',
          gaDebug: true,
        },
      } as any)

      const consoleSpy = vi.spyOn(console, 'log')
      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1' })

      expect(consoleSpy).toHaveBeenCalledWith(
        '[GA4 Debug] Event tracked (no GA ID):',
        'test_event',
        { param1: 'value1' },
      )
    })

    it('should log debug message when gaDebug is true and event is tracked', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: true,
        },
      } as any)

      const consoleSpy = vi.spyOn(console, 'log')
      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1' })

      expect(consoleSpy).toHaveBeenCalledWith('[GA4 Debug] Event tracked:', 'test_event', {
        param1: 'value1',
      })
    })

    it('should handle SSR (window undefined)', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      // Simulate SSR environment
      const originalWindow = globalThis.window
      // @ts-ignore
      globalThis.window = undefined

      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1' })

      // Restore window
      globalThis.window = originalWindow

      // Should not throw error and not call gtag
      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should handle missing window.gtag gracefully', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      // Remove gtag from window
      globalThis.window.gtag = undefined

      const { trackEvent } = useAnalytics()
      trackEvent('test_event', { param1: 'value1' })

      // Should not throw error
      expect(mockGtag).not.toHaveBeenCalled()
    })
  })

  describe('trackPageView', () => {
    it('should track page view with GA ID configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      const { trackPageView } = useAnalytics()
      trackPageView('/test-page', { page_title: 'Test Page' })

      expect(mockGtag).toHaveBeenCalledWith('config', 'G-TEST123', {
        page_path: '/test-page',
        page_title: 'Test Page',
      })
    })

    it('should not track page view when GA ID is not configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: '',
          gaDebug: false,
        },
      } as any)

      const { trackPageView } = useAnalytics()
      trackPageView('/test-page')

      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should log debug message when gaDebug is true', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: true,
          siteUrl: 'http://localhost:3000',
          siteName: 'Test Site',
        },
      } as any)

      const consoleSpy = vi.spyOn(console, 'log')
      const { trackPageView } = useAnalytics()
      trackPageView('/test-page', { page_title: 'Test Page' })

      expect(consoleSpy).toHaveBeenCalledWith('[GA4 Debug] Page view tracked:', '/test-page', {
        page_title: 'Test Page',
      })
    })

    it('should handle SSR (window undefined)', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
          siteUrl: 'http://localhost:3000',
          siteName: 'Test Site',
        },
      } as any)

      // Simulate SSR environment
      const originalWindow = globalThis.window
      // @ts-ignore
      globalThis.window = undefined

      const { trackPageView } = useAnalytics()
      trackPageView('/test-page')

      // Restore window
      globalThis.window = originalWindow

      // Should not throw error and not call gtag
      expect(mockGtag).not.toHaveBeenCalled()
    })
  })

  describe('setUserProperties', () => {
    it('should set user properties with GA ID configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      const { setUserProperties } = useAnalytics()
      setUserProperties({ user_type: 'business', user_id: 123 })

      expect(mockGtag).toHaveBeenCalledWith('set', 'user_properties', {
        user_type: 'business',
        user_id: 123,
      })
    })

    it('should not set user properties when GA ID is not configured', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: '',
          gaDebug: false,
        },
      } as any)

      const { setUserProperties } = useAnalytics()
      setUserProperties({ user_type: 'business' })

      expect(mockGtag).not.toHaveBeenCalled()
    })

    it('should log debug message when gaDebug is true', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: true,
          siteUrl: 'http://localhost:3000',
          siteName: 'Test Site',
        },
      } as any)

      const consoleSpy = vi.spyOn(console, 'log')
      const { setUserProperties } = useAnalytics()
      setUserProperties({ user_type: 'business' })

      expect(consoleSpy).toHaveBeenCalledWith('[GA4 Debug] User properties set:', {
        user_type: 'business',
      })
    })

    it('should handle SSR (window undefined)', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
          siteUrl: 'http://localhost:3000',
          siteName: 'Test Site',
        },
      } as any)

      // Simulate SSR environment
      const originalWindow = globalThis.window
      // @ts-ignore
      globalThis.window = undefined

      const { setUserProperties } = useAnalytics()
      setUserProperties({ user_type: 'business' })

      // Restore window
      globalThis.window = originalWindow

      // Should not throw error and not call gtag
      expect(mockGtag).not.toHaveBeenCalled()
    })
  })

  describe('integrated behavior', () => {
    it('should handle multiple tracking calls correctly', () => {
      vi.mocked(useRuntimeConfig).mockReturnValue({
        public: {
          gaId: 'G-TEST123',
          gaDebug: false,
        },
      } as any)

      const { trackEvent, trackPageView, setUserProperties } = useAnalytics()

      setUserProperties({ user_type: 'business' })
      trackPageView('/home')
      trackEvent('cta_click', { cta_label: 'Get Started' })

      expect(mockGtag).toHaveBeenCalledTimes(3)
      expect(mockGtag).toHaveBeenNthCalledWith(1, 'set', 'user_properties', {
        user_type: 'business',
      })
      expect(mockGtag).toHaveBeenNthCalledWith(2, 'config', 'G-TEST123', {
        page_path: '/home',
      })
      expect(mockGtag).toHaveBeenNthCalledWith(3, 'event', 'cta_click', {
        cta_label: 'Get Started',
      })
    })
  })
})
