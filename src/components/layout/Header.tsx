'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
 */

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior for sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'sticky top-0 z-50 w-full border-b border-[#e0e0e0] bg-white',
        isScrolled && 'shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2.5 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/Logo_Marca_Fusión_Transparente.png"
                alt="Marca Fusión Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="flex flex-col">
                <span className="text-[15px] font-medium tracking-tight text-[#1a1a1a]">
                  Marca Fusión
                </span>
                <p className="text-[11px] text-[#716F6C] -mt-0.5">Bolivia</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex" onLinkClick={() => setIsMobileMenuOpen(false)} />

          {/* Right side: Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#716F6C] hover:text-[#1a1a1a] hover:bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-marca-green focus:ring-offset-2"
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
      />
    </header>
  );
}
