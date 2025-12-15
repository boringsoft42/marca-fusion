'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

/**
 * Marca Fusión Mobile Menu Component
 *
 * Features:
 * - Vertical navigation for mobile devices
 * - Accordion-style dropdown for "Representaciones"
 * - Active link highlighting
 * - Touch-friendly spacing and targets
 * - Smooth animations
 * - Spanish only (no i18n)
 */

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick?: () => void;
  className?: string;
  textDark?: boolean;
}

export function MobileMenu({ isOpen, onLinkClick, className, textDark = false }: MobileMenuProps) {
  const [isRepresentationsOpen, setIsRepresentationsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items configuration (Spanish only)
  const navItems = [
    { href: `/`, label: 'Inicio' },
    { href: `/nosotros`, label: 'Nosotros' },
    {
      label: 'Representaciones',
      isDropdown: true,
      subItems: [
        { href: `/capstone`, label: 'Capstone' },
        { href: `/tablu`, label: 'Tablú' },
      ],
    },
    { href: `/sectores`, label: 'Sectores' },
    { href: `/alianzas`, label: 'Alianzas' },
    { href: `/contacto`, label: 'Contacto' },
  ];

  // Check if current path matches link
  const isActive = (href: string) => {
    if (href === `/`) {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  // Check if any sub-item is active
  const isDropdownActive = (subItems: Array<{ href: string }>) => {
    return subItems.some(item => pathname?.startsWith(item.href));
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'md:hidden border-t bg-background',
        'animate-in slide-in-from-top-4 fade-in-0 duration-200',
        textDark ? 'border-[#e0e0e0] bg-white' : 'border-border',
        className
      )}
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="space-y-1 px-4 py-4">
        {navItems.map((item, index) => {
          if (item.isDropdown && item.subItems) {
            const isDropdownItemActive = isDropdownActive(item.subItems);

            return (
              <div key={index} className="space-y-1">
                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => setIsRepresentationsOpen(!isRepresentationsOpen)}
                  className={cn(
                    'flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    isDropdownItemActive && 'text-marca-green font-semibold'
                  )}
                  aria-expanded={isRepresentationsOpen}
                  aria-controls={`mobile-submenu-${index}`}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform duration-200',
                      isRepresentationsOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Accordion content */}
                {isRepresentationsOpen && (
                  <div
                    id={`mobile-submenu-${index}`}
                    className="space-y-1 pl-4 animate-in slide-in-from-top-2 fade-in-0"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          'block rounded-md px-3 py-2.5 text-sm transition-colors',
                          'hover:bg-accent hover:text-accent-foreground',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isActive(subItem.href)
                            ? 'bg-accent text-accent-foreground font-medium'
                            : 'text-muted-foreground'
                        )}
                        onClick={onLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
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
                'block rounded-md px-3 py-3 text-base font-medium transition-colors',
                'hover:bg-accent hover:text-accent-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                isActive(item.href!)
                  ? 'text-marca-green font-semibold'
                  : 'text-foreground'
              )}
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
