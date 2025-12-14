'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

/**
 * ScrollSmoother Provider
 * 
 * Initializes GSAP ScrollSmoother for smooth scrolling across the entire website.
 * This provides a professional, smooth scrolling experience.
 * 
 * Note: ScrollSmoother is a premium GSAP plugin. For production use, you'll need
 * a Club GreenSock membership. For development, it works with trial limitations.
 */

export function ScrollSmootherProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      // Create ScrollSmoother instance
      const smoother = ScrollSmoother.create({
        smooth: 1, // Time in seconds to "catch up" to native scroll position
        effects: true, // Enable data-speed and data-lag attributes
        smoothTouch: 0.1, // Shorter smoothing on touch devices
        normalizeScroll: true, // Prevent mobile browser address bar issues
      });

      // Cleanup on unmount
      return () => {
        if (smoother) {
          smoother.kill();
        }
      };
    }
  }, []);

  return <>{children}</>;
}

