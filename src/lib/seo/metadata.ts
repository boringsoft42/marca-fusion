import type { Metadata } from 'next';

/**
 * Marca Fusión Metadata Utilities
 *
 * Generates SEO-optimized metadata for all pages
 *
 * Features:
 * - Unique titles and descriptions per page
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - Character limits (titles: 50-60, descriptions: 150-160)
 * - Spanish-language optimized
 */

// Base URL configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.marcafusion.com.bo';
const SITE_NAME = 'Marca Fusión SRL';
const SITE_LOCALE = 'es_BO';
const TWITTER_HANDLE = '@MarcaFusion'; // Update if Twitter/X exists

// Default metadata for fallback (reserved for future use)
// const DEFAULT_METADATA = {
//   title: 'Marca Fusión - Soluciones Energéticas y Planificación',
//   description:
//     'Representantes oficiales de Capstone Green Energy y Tablú Bolivia. Microturbinas de cogeneración y planificadores digitales en Santa Cruz de la Sierra.',
// };

// Company contact information
const CONTACT_INFO = {
  phone: '+591 72136767',
  email: 'info@marcafusion.com.bo',
  address: 'Santa Cruz de la Sierra, Bolivia',
};

/**
 * Generate base metadata shared across all pages
 */
export function getBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add Google Search Console verification code here
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

/**
 * Home Page Metadata
 */
export function getHomeMetadata(): Metadata {
  return {
    title: 'Marca Fusión - Energía Eficiente y Organización Bolivia',
    description:
      'Representantes de Capstone Green Energy y Tablú Bolivia. Microturbinas de cogeneración de alta eficiencia y planificadores digitales para hogares y empresas en Santa Cruz.',
    keywords: [
      'Marca Fusión',
      'Capstone Bolivia',
      'Tablú Bolivia',
      'microturbinas',
      'cogeneración',
      'planificadores digitales',
      'Santa Cruz',
      'energía eficiente',
    ],
    openGraph: {
      title: 'Marca Fusión - Energía Eficiente y Organización Bolivia',
      description:
        'Representación oficial de Capstone Green Energy y Tablú en Santa Cruz de la Sierra. Soluciones de energía limpia y organización profesional.',
      url: SITE_URL,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/og/home-og.jpg`,
          width: 1200,
          height: 630,
          alt: 'Marca Fusión - Representaciones en Bolivia',
        },
      ],
    },
  };
}

/**
 * About Us Page Metadata
 */
export function getAboutMetadata(): Metadata {
  return {
    title: 'Nosotros - Marca Fusión | Quiénes Somos',
    description:
      'Conozca a Marca Fusión SRL: empresa boliviana representante de Capstone Green Energy y Tablú. Más de una década conectando tecnología global con el mercado local en Santa Cruz.',
    keywords: [
      'Marca Fusión',
      'empresa boliviana',
      'representantes Capstone',
      'representantes Tablú',
      'Santa Cruz',
      'Altrix Solutions',
    ],
    openGraph: {
      title: 'Nosotros - Marca Fusión | Quiénes Somos',
      description:
        'Empresa boliviana con visión global. Representamos marcas internacionales en energía y organización. Parte del grupo corporativo Altrix Solutions.',
      url: `${SITE_URL}/nosotros`,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/og/about-og.jpg`,
          width: 1200,
          height: 630,
          alt: 'Equipo Marca Fusión',
        },
      ],
    },
  };
}

/**
 * Capstone Page Metadata
 */
export function getCapstoneMetadata(): Metadata {
  return {
    title: 'Capstone Green Energy - Microturbinas Bolivia | Marca Fusión',
    description:
      'Representantes oficiales de Capstone Green Energy en Bolivia. Microturbinas de cogeneración C65, C200S, C600S, C800S, C1000S. Eficiencia energética, 0 emisiones, mantenimiento local.',
    keywords: [
      'Capstone Green Energy',
      'microturbinas',
      'cogeneración',
      'energía limpia',
      'eficiencia energética',
      'C65',
      'C200S',
      'C600S',
      'Bolivia',
      'Oil & Gas',
    ],
    openGraph: {
      title: 'Capstone Green Energy - Microturbinas de Cogeneración',
      description:
        'Tecnología de microturbinas líder mundial. Desde 65 kW hasta 1 MW. Soluciones para Oil & Gas, industria, hospitales y comercios en Bolivia.',
      url: `${SITE_URL}/capstone`,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/og/capstone-og.jpg`,
          width: 1200,
          height: 630,
          alt: 'Capstone Green Energy Microturbinas',
        },
      ],
    },
  };
}

/**
 * Tablú Page Metadata
 */
export function getTabluMetadata(): Metadata {
  return {
    title: 'Tablú Bolivia - Planificadores Digitales Acrílicos | Marca Fusión',
    description:
      'Distribuidores oficiales de Tablú en Bolivia. Planificadores digitales acrílicos y magnéticos personalizables. Catálogo completo: home, corporativo, niños, emprendedores. Envíos a domicilio.',
    keywords: [
      'Tablú',
      'planificadores digitales',
      'planificadores acrílicos',
      'planificadores magnéticos',
      'organización',
      'home office',
      'Bolivia',
      'Santa Cruz',
    ],
    openGraph: {
      title: 'Tablú Bolivia - Planificadores Digitales Personalizables',
      description:
        'Los planificadores digitales más innovadores del mercado. Diseños exclusivos en acrílico y magnéticos. Ideal para hogares, oficinas y emprendedores.',
      url: `${SITE_URL}/tablu`,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/og/tablu-og.jpg`,
          width: 1200,
          height: 630,
          alt: 'Tablú Planificadores Digitales',
        },
      ],
    },
  };
}

/**
 * Sectors Page Metadata
 */
export function getSectorsMetadata(): Metadata {
  return {
    title: 'Sectores - Soluciones para Industria y Hogares | Marca Fusión',
    description:
      'Soluciones energéticas para Oil & Gas, industria, hospitales y comercios con Capstone. Planificadores para corporativos, profesionales y hogares con Tablú. Santa Cruz, Bolivia.',
    keywords: [
      'sectores',
      'Oil & Gas',
      'industria',
      'hospitalario',
      'comercial',
      'corporativo',
      'profesionales',
      'hogares',
      'Bolivia',
    ],
    openGraph: {
      title: 'Sectores - Soluciones para Industria y Hogares',
      description:
        'Desde grandes industrias hasta hogares: soluciones de energía y organización adaptadas a cada sector.',
      url: `${SITE_URL}/sectores`,
      type: 'website',
    },
  };
}

/**
 * Partnerships Page Metadata
 */
export function getPartnershipsMetadata(): Metadata {
  return {
    title: 'Alianzas Estratégicas - Únete a Marca Fusión',
    description:
      'Construye alianzas comerciales con Marca Fusión. Buscamos distribuidores, partners técnicos y aliados estratégicos en Bolivia. Respaldo de Capstone Green Energy y Tablú.',
    keywords: [
      'alianzas estratégicas',
      'partnerships',
      'distribuidores',
      'representaciones',
      'Marca Fusión',
      'Bolivia',
      'Altrix Solutions',
    ],
    openGraph: {
      title: 'Alianzas Estratégicas - Únete a Marca Fusión',
      description:
        'Creamos relaciones de largo plazo. Confianza, conexión internacional y resultados comprobados. Únete a nuestra red comercial.',
      url: `${SITE_URL}/alianzas`,
      type: 'website',
    },
  };
}

/**
 * Contact Page Metadata
 */
export function getContactMetadata(): Metadata {
  return {
    title: 'Contacto - Conversemos | Marca Fusión',
    description: `Contáctanos para asesoría técnica, cotizaciones o alianzas. Email: ${CONTACT_INFO.email}, Tel: ${CONTACT_INFO.phone}. Oficina en ${CONTACT_INFO.address}.`,
    keywords: [
      'contacto',
      'cotización',
      'asesoría técnica',
      'Marca Fusión',
      'Santa Cruz',
      'Bolivia',
      'info@marcafusion.com.bo',
    ],
    openGraph: {
      title: 'Contacto - Conversemos | Marca Fusión',
      description:
        'Estamos aquí para responder tus preguntas y ayudarte a encontrar la solución perfecta. Múltiples canales de contacto disponibles.',
      url: `${SITE_URL}/contacto`,
      type: 'website',
    },
  };
}

/**
 * 404 Not Found Page Metadata
 */
export function getNotFoundMetadata(): Metadata {
  return {
    title: 'Página No Encontrada - Marca Fusión',
    description: 'La página que buscas no existe. Vuelve al inicio para explorar nuestras soluciones.',
    robots: {
      index: false,
      follow: true,
    },
  };
}

/**
 * Error Page Metadata
 */
export function getErrorMetadata(): Metadata {
  return {
    title: 'Error - Marca Fusión',
    description: 'Ocurrió un error inesperado. Por favor intenta nuevamente o contáctanos para asistencia.',
    robots: {
      index: false,
      follow: true,
    },
  };
}

/**
 * Generate metadata for dynamic product pages (if needed in future)
 */
export function generateProductMetadata(
  productName: string,
  description: string,
  imageUrl?: string
): Metadata {
  return {
    title: `${productName} | Marca Fusión`,
    description: description.substring(0, 160),
    openGraph: {
      title: productName,
      description: description.substring(0, 160),
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: productName,
            },
          ]
        : undefined,
    },
  };
}

/**
 * Export all metadata generators
 */
export const metadata = {
  base: getBaseMetadata,
  home: getHomeMetadata,
  about: getAboutMetadata,
  capstone: getCapstoneMetadata,
  tablu: getTabluMetadata,
  sectors: getSectorsMetadata,
  partnerships: getPartnershipsMetadata,
  contact: getContactMetadata,
  notFound: getNotFoundMetadata,
  error: getErrorMetadata,
  product: generateProductMetadata,
};
