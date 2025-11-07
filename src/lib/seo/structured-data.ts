import type { Organization, LocalBusiness, Product, WithContext } from 'schema-dts';
import type { TabluProduct } from '@/data/tablu-catalog';

/**
 * Marca Fusión Structured Data (JSON-LD) Generators
 *
 * Implements Schema.org structured data for SEO enhancement
 *
 * Schemas:
 * - Organization: Company information
 * - LocalBusiness: Physical location details
 * - Product: Tablú product catalog items
 *
 * Usage:
 * Add to page components via <script type="application/ld+json">
 */

// Base URL configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marcafusion.com.bo';

/**
 * Organization Schema
 * Use in root layout for global company information
 */
export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Marca Fusión SRL',
    legalName: 'Marca Fusión Sociedad de Responsabilidad Limitada',
    alternateName: 'Marca Fusión',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logos/marca-fusion-logo.svg`,
    description:
      'Representantes oficiales de Capstone Green Energy y Tablú Bolivia. Soluciones de energía eficiente y organización profesional en Santa Cruz de la Sierra.',
    foundingDate: '2012',
    email: 'info@marcafusion.com.bo',
    telephone: '+591-72136767',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz de la Sierra',
      addressRegion: 'Santa Cruz',
      addressCountry: 'BO',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Bolivia',
    },
    sameAs: [
      // Add social media URLs when available
      'https://www.linkedin.com/company/marca-fusion',
      'https://www.facebook.com/marcafusion',
      'https://www.instagram.com/marcafusion',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Altrix Solutions LLC',
      description: 'International operations and logistics partner',
    },
    brand: [
      {
        '@type': 'Brand',
        name: 'Capstone Green Energy',
        url: 'https://www.capstonegreenenergy.com',
        logo: `${SITE_URL}/images/logos/capstone-logo.svg`,
      },
      {
        '@type': 'Brand',
        name: 'Tablú',
        url: 'https://tablu.com.pe',
        logo: `${SITE_URL}/images/logos/tablu-logo.svg`,
      },
    ],
    knowsAbout: [
      'Microturbinas de Cogeneración',
      'Energía Limpia',
      'Eficiencia Energética',
      'Planificadores Digitales',
      'Organización Personal',
      'Soluciones Corporativas',
    ],
    slogan: 'Conectamos Bolivia con marcas internacionales que impulsan innovación y sostenibilidad',
  };
}

/**
 * LocalBusiness Schema
 * Use on Contact page for local SEO
 */
export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Marca Fusión SRL',
    image: `${SITE_URL}/images/hero/about-hero.jpg`,
    url: SITE_URL,
    telephone: '+591-72136767',
    email: 'info@marcafusion.com.bo',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Santa Cruz de la Sierra',
      addressLocality: 'Santa Cruz de la Sierra',
      addressRegion: 'Santa Cruz',
      postalCode: '',
      addressCountry: 'BO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add actual coordinates for Santa Cruz office
      latitude: -17.783,
      longitude: -63.182,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: {
      '@type': 'Country',
      name: 'Bolivia',
    },
    hasMap: `${SITE_URL}/contacto#map`,
  };
}

/**
 * Product Schema for Tablú Planners
 * Use on Tablú product pages/catalog
 */
export function generateProductSchema(product: TabluProduct): WithContext<Product> {
  // Determine currency based on price range
  const currency = 'BOB'; // Bolivianos

  // Extract min/max prices from priceRange (e.g., "Bs. 85 - Bs. 350")
  const priceMatch = product.priceRange.match(/\d+/g);
  const minPrice = priceMatch ? priceMatch[0] : '0';
  const maxPrice = priceMatch && priceMatch.length > 1 ? priceMatch[1] : minPrice;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/tablu#${product.id}`,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Tablú',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: currency,
      lowPrice: minPrice,
      highPrice: maxPrice,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Marca Fusión SRL',
      },
    },
    material: product.material === 'acrylic' ? 'Acrílico' : 'Magnético',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Tamaños disponibles',
        value: product.sizes.join(', '),
      },
      {
        '@type': 'PropertyValue',
        name: 'Material',
        value: product.material === 'acrylic' ? 'Acrílico Premium' : 'Magnético',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };
}

/**
 * Product Catalog Schema for Tablú Page
 * Aggregates all products into a single schema
 */
export function generateProductCatalogSchema(products: TabluProduct[]): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/tablu#catalog`,
    name: 'Tablú Bolivia - Marca Fusión',
    url: `${SITE_URL}/tablu`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planificadores Digitales Tablú',
      itemListElement: products.slice(0, 10).map((product, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: product.name,
          description: product.description,
        },
        position: index + 1,
      })),
    },
  };
}

/**
 * Breadcrumb Schema Generator
 * Use on internal pages for breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQ Schema Generator
 * Use if FAQ section is added in future
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Helper function to convert structured data to JSON-LD script tag
 */
export function structuredDataToScript(
  data: WithContext<Organization> | WithContext<LocalBusiness> | WithContext<Product> | object
): string {
  return JSON.stringify(data);
}

/**
 * Export all structured data generators
 */
export const structuredData = {
  organization: generateOrganizationSchema,
  localBusiness: generateLocalBusinessSchema,
  product: generateProductSchema,
  productCatalog: generateProductCatalogSchema,
  breadcrumb: generateBreadcrumbSchema,
  faq: generateFAQSchema,
  toScript: structuredDataToScript,
};
