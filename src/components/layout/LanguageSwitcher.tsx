'use client';

import { useState, useEffect } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

/**
 * Marca Fusión Language Switcher Component
 *
 * Features:
 * - Toggle between Spanish (ES) and English (EN)
 * - localStorage persistence for language preference
 * - Smooth locale switching with next-intl
 * - Visual active state indicator
 * - Keyboard navigation support
 * - Follows STYLE-GUIDE.md design patterns
 */

interface LanguageSwitcherProps {
  className?: string;
}

type Locale = 'es' | 'en';

const locales: { code: Locale; label: string; ariaLabel: string }[] = [
  { code: 'es', label: 'ES', ariaLabel: 'Español' },
  { code: 'en', label: 'EN', ariaLabel: 'English' },
];

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params?.locale as Locale) || 'es';

  const [isClient, setIsClient] = useState(false);

  // Ensure component is mounted (avoid hydration mismatch with localStorage)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Persist locale preference to localStorage
  useEffect(() => {
    if (isClient && currentLocale) {
      localStorage.setItem('marca-fusion-locale', currentLocale);
    }
  }, [currentLocale, isClient]);

  // Handle locale change
  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Build new pathname with updated locale
    const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, '') || '';
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`;

    // Navigate to new locale path
    router.push(newPath);
  };

  if (!isClient) {
    // Render placeholder during SSR to avoid hydration mismatch
    return (
      <div className={cn('flex items-center gap-1', className)}>
        <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <div className="flex items-center rounded-md border border-border bg-muted/30 p-1">
          <div className="h-7 w-14" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('flex items-center gap-1.5', className)}
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <div className="flex items-center rounded-md border border-border bg-muted/30 p-1">
        {locales.map((locale) => {
          const isActive = locale.code === currentLocale;

          return (
            <button
              key={locale.code}
              type="button"
              onClick={() => handleLocaleChange(locale.code)}
              className={cn(
                'rounded-sm px-2.5 py-1 text-xs font-medium transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                isActive
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={`${locale.ariaLabel}${isActive ? ' (actual)' : ''}`}
              aria-current={isActive ? 'true' : undefined}
            >
              {locale.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
