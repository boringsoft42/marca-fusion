import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { locales, type Locale } from '@/i18n/config';

/**
 * Marca Fusión Locale Layout
 *
 * This layout wraps all localized pages with:
 * - next-intl provider for translations
 * - Header with navigation
 * - Footer with contact info
 * - Main content area
 *
 * Route structure: /[locale]/* (e.g., /es/nosotros, /en/about)
 */

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  // Load translations for the current locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col">
        {/* Header with navigation */}
        <Header />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
