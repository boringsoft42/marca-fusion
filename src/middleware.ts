import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// Marca Fusion i18n configuration
const intlMiddleware = createMiddleware({
  // Supported locales
  locales: ['es', 'en'],

  // Default locale (Spanish for Bolivia)
  defaultLocale: 'es',

  // Always show locale prefix in URL (e.g., /es/nosotros, /en/about)
  localePrefix: 'always',

  // Locale detection strategy
  localeDetection: true,
});

export default function middleware(request: NextRequest) {
  // Apply i18n middleware for all requests
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except API routes, static files, and internal Next.js routes
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api/*)
    // - Static files (/_next/*, /favicon.ico, etc.)
    // - Images in public folder
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
