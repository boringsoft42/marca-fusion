'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';

/**
 * Conditional Header Component
 *
 * Only shows Header on pages that don't have Header integrated in their Hero sections
 * Pages with integrated headers: /, /nosotros, /capstone, /tablu, /alianzas, /sectores, /contacto
 */
export function ConditionalHeader() {
  const pathname = usePathname();
  const pagesWithIntegratedHeader = ['/', '/nosotros', '/capstone', '/tablu', '/alianzas', '/sectores', '/contacto'];
  const hasIntegratedHeader = pagesWithIntegratedHeader.includes(pathname);

  if (hasIntegratedHeader) {
    return null;
  }

  return <Header />;
}

