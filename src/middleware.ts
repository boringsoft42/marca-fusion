import { NextResponse } from 'next/server';

/**
 * Marca Fusión Middleware
 *
 * Basic middleware for handling requests.
 * No i18n - site is Spanish only.
 */
export default function middleware() {
  return NextResponse.next();
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
