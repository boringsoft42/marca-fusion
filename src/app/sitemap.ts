import { MetadataRoute } from 'next';

/**
 * Marca Fusión Dynamic Sitemap
 *
 * Generates sitemap.xml for all static pages
 *
 * Features:
 * - All main pages included
 * - Priority and change frequency configured
 * - Last modified dates
 * - Spanish-only (no locale variants)
 *
 * Accessed at: /sitemap.xml
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marcafusion.com.bo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Get current date for lastModified
  const currentDate = new Date();

  // Define all static pages with their metadata
  const pages = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/nosotros`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/capstone`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tablu`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sectores`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/alianzas`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
  ];

  return pages;
}
