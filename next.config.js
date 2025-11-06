/** @type {import('next').NextConfig} */
// i18n Configuration Note:
// next-intl uses middleware-based routing for internationalization
// Locales: es (Spanish - default), en (English)
// i18n config is handled in middleware.ts and src/i18n/ directory
const nextConfig = {
  images: {
    domains: [
      // Supabase domains
      "swfgvfhpmicwptupjyko.supabase.co",
      "xqakfzhkeiongvzgbhji.supabase.co",
      // Google Maps for location images
      "maps.googleapis.com",
      "maps.gstatic.com",
      // Stock image providers for placeholders
      "images.unsplash.com",
      "via.placeholder.com",
    ],
  },
  // output: "standalone", // Commented out for Vercel deployment
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('_http_common');
    }
    return config;
  },
  // Security headers configuration
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://*.supabase.co https://maps.googleapis.com https://*.google.com; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.stripe.com https://maps.googleapis.com https://*.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.supabase.co https://* blob:; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://js.stripe.com https://www.google.com; object-src 'none'",
          },
        ],
      },
      {
        // Special headers for service worker
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      {
        // Headers for API routes
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
  // ... other config options
};

module.exports = nextConfig;
