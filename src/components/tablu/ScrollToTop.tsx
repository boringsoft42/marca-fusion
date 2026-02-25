'use client';

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Also set it after a brief delay to ensure it takes effect
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
