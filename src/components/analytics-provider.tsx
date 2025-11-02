"use client";

import { useEffect } from "react";
import { initScrollTracking, trackPageView } from "@/lib/analytics";

/**
 * Analytics Provider Component
 *
 * This component initializes analytics tracking for the entire application.
 * It tracks:
 * - Page views when the component mounts
 * - Scroll depth as users scroll through the page (25%, 50%, 75%, 100%)
 *
 * Usage:
 * Wrap your page content with this provider to enable analytics tracking.
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView();

    // Initialize scroll depth tracking
    const cleanupScrollTracking = initScrollTracking();

    // Cleanup on unmount
    return () => {
      if (cleanupScrollTracking) {
        cleanupScrollTracking();
      }
    };
  }, []);

  return <>{children}</>;
}
