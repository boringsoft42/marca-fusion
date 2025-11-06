import { MetadataRoute } from 'next';

/**
 * Marca Fusión Robots.txt Configuration
 *
 * Defines crawler rules for search engines
 *
 * Features:
 * - Allow all crawlers
 * - Reference sitemap location
 * - No restricted paths (all pages public)
 *
 * Accessed at: /robots.txt
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marcafusion.com.bo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'], // Disallow API routes and internal paths
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
