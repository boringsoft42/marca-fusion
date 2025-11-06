import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from './config';

/**
 * Server-side i18n request configuration
 *
 * This function is called on every request to load the appropriate
 * translation messages for the requested locale.
 */
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    messages: (await import(`../../locales/${locale}/common.json`)).default,
  };
});
