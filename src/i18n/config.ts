/**
 * Marca Fusion i18n Configuration
 *
 * Central configuration for internationalization
 * Locales: Spanish (es) - Bolivia, English (en) - International
 */

export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export type Locale = (typeof locales)[number];

/**
 * Locale display names
 */
export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/**
 * Locale metadata for SEO
 */
export const localeMetadata: Record<Locale, { lang: string; hreflang: string; country: string }> = {
  es: {
    lang: 'es',
    hreflang: 'es-BO', // Spanish - Bolivia
    country: 'BO',
  },
  en: {
    lang: 'en',
    hreflang: 'en-US', // English - International
    country: 'US',
  },
};

/**
 * Validate if a given locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get locale from string or return default
 */
export function getValidLocale(locale?: string | null): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return defaultLocale;
}
