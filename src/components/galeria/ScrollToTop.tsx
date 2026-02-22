'use client';

import { useEffect } from 'react';

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to top when component mounts
 * Used in gallery pages to ensure user starts at top of page
 */

export function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return null;
}
