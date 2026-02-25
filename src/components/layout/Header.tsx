'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

/**
 * Marca Fusión Header Component
 *
 * Features:
 * - Sticky header with scroll behavior
 * - Brand logo
 * - Navigation integration
 * - Mobile responsive with hamburger menu
 * - Spanish only (no i18n)
 * - Dark text variant for /sectores and /alianzas pages
 */

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with transparent header and white text (Hero with background image)
  const isTransparentHeaderWhiteText = pathname === '/sectores' || pathname === '/alianzas' || pathname === '/contacto';

  // Pages with transparent header and dark text (Removed /contacto)
  const isTransparentHeaderDarkText = false;

  // Pages that need dark text on white background (Light Pages)
  const isLightPage = pathname === '/tablu' || pathname.startsWith('/tablu/') || pathname.startsWith('/galeria/');

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isLightPage ? 'bg-white' : '',
        isTransparentHeaderWhiteText || isTransparentHeaderDarkText ? 'bg-transparent' : '',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center relative">
          {/* Desktop Navigation - Centered */}
          <Navigation
            className="hidden md:flex"
            onLinkClick={() => setIsMobileMenuOpen(false)}
            textDark={isLightPage || isTransparentHeaderDarkText}
          />

          {/* Mobile menu button - Absolute positioned */}
          <div className="absolute right-0 flex items-center md:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
                isLightPage || isTransparentHeaderDarkText
                  ? "text-[#1a1a1a] hover:text-[#1a1a1a]/80 focus:ring-[#1a1a1a]"
                  : "text-white hover:text-white/80 focus:ring-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {/* Hamburger icon */}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onLinkClick={() => setIsMobileMenuOpen(false)}
        textDark={isLightPage || isTransparentHeaderDarkText}
      />
    </header>
  );
}
