'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

/**
 * Marca Fusión Navigation Component
 *
 * Features:
 * - Desktop horizontal navigation
 * - Dropdown for "Representaciones" (non-clickable parent)
 * - Active link highlighting
 * - Smooth hover effects
 * - Keyboard navigation support
 * - Follows STYLE-GUIDE.md design patterns
 */

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Navigation({ className, onLinkClick }: NavigationProps) {
  const [isRepresentationsOpen, setIsRepresentationsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const t = useTranslations('nav');

  const locale = params?.locale as string || 'es';

  // Navigation items configuration
  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/nosotros`, label: t('about') },
    {
      label: t('representations'),
      isDropdown: true,
      subItems: [
        { href: `/${locale}/capstone`, label: t('capstone') },
        { href: `/${locale}/tablu`, label: t('tablu') },
      ],
    },
    { href: `/${locale}/sectores`, label: t('sectors') },
    { href: `/${locale}/alianzas`, label: t('partnerships') },
    { href: `/${locale}/contacto`, label: t('contact') },
  ];

  // Check if current path matches link
  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  // Check if any sub-item is active
  const isDropdownActive = (subItems: Array<{ href: string }>) => {
    return subItems.some(item => pathname?.startsWith(item.href));
  };

  return (
    <nav className={cn('flex items-center space-x-1', className)} aria-label="Main navigation">
      {navItems.map((item, index) => {
        if (item.isDropdown && item.subItems) {
          const isActive = isDropdownActive(item.subItems);

          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setIsRepresentationsOpen(true)}
              onMouseLeave={() => setIsRepresentationsOpen(false)}
            >
              {/* Non-clickable parent */}
              <button
                type="button"
                className={cn(
                  'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  isActive && 'text-marca-green font-semibold'
                )}
                aria-expanded={isRepresentationsOpen}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isRepresentationsOpen && 'rotate-180'
                  )}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown menu */}
              {isRepresentationsOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-1 w-56 rounded-md border border-border bg-popover shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
                  role="menu"
                >
                  <div className="p-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          'block rounded-sm px-3 py-2 text-sm transition-colors',
                          'hover:bg-accent hover:text-accent-foreground',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isActive(subItem.href) && 'bg-accent text-accent-foreground font-medium'
                        )}
                        onClick={onLinkClick}
                        role="menuitem"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        // Regular navigation link
        return (
          <Link
            key={index}
            href={item.href!}
            className={cn(
              'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
              'hover:bg-accent hover:text-accent-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              isActive(item.href!) ? 'text-marca-green font-semibold' : 'text-foreground'
            )}
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
