'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
 * - Spanish only (no i18n)
 */

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
  textDark?: boolean;
}

export function Navigation({ className, onLinkClick, textDark = false }: NavigationProps) {
  const [isRepresentationsOpen, setIsRepresentationsOpen] = useState(false);
  const pathname = usePathname();
  
  // Text color classes based on textDark prop
  const textColorClass = textDark ? 'text-[#1a1a1a]' : 'text-white';
  const hoverColorClass = textDark ? 'hover:text-[#2D5F3F]' : 'hover:text-[#2D5F3F]';
  const activeColorClass = 'text-[#2D5F3F] font-bold';

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

  return (
    <nav className={cn('flex items-center space-x-2', className)} aria-label="Main navigation">
      {navItems.map((item, index) => {
        if (item.isDropdown && item.subItems) {
          const isDropdownItemActive = isDropdownActive(item.subItems);

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
                  'inline-flex items-center gap-1 px-4 py-2 text-[14px] font-semibold transition-colors duration-300',
                  hoverColorClass,
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                  textDark ? 'focus-visible:ring-[#1a1a1a]' : 'focus-visible:ring-white',
                  isDropdownItemActive ? activeColorClass : textColorClass
                )}
                aria-expanded={isRepresentationsOpen}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-200',
                    isRepresentationsOpen && 'rotate-180'
                  )}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown menu */}
              {isRepresentationsOpen && (
                <div
                  className="absolute left-0 top-full z-50 pt-2 w-48"
                  role="menu"
                >
                  <div className="rounded-lg border border-[#e0e0e0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                  <div className="p-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          'block rounded-md px-4 py-2 text-[14px] transition-colors',
                          'hover:bg-[#f5f5f5] hover:text-[#1a1a1a]',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                          isActive(subItem.href) ? 'bg-[#f5f5f5] text-[#2D5F3F] font-bold' : 'text-[#716F6C]'
                        )}
                        onClick={onLinkClick}
                        role="menuitem"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
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
              'inline-flex items-center px-4 py-2 text-[14px] font-semibold transition-colors duration-300',
              hoverColorClass,
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              textDark ? 'focus-visible:ring-[#1a1a1a]' : 'focus-visible:ring-white',
              isActive(item.href!) ? activeColorClass : textColorClass
            )}
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        );
      })}

      {/* CTA Button */}
      <Link
        href="/contacto"
        className={cn(
          'inline-flex items-center justify-center px-6 py-2 ml-2',
          'text-[14px] font-medium text-white',
          'bg-[#2D5F3F] rounded-sm',
          'transition-all duration-200',
          'hover:bg-[#234830]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          textDark ? 'focus-visible:ring-[#1a1a1a]' : 'focus-visible:ring-white'
        )}
        onClick={onLinkClick}
      >
        Contacto
      </Link>
    </nav>
  );
}
