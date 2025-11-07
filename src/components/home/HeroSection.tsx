'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

/**
 * Marca Fusión Home Hero Section - Sierra Style
 *
 * Features:
 * - Sierra cream background (#ebe8e3)
 * - Clean typography with font-weight 400 for hero title
 * - Sierra green buttons with 24px border radius
 * - Simplified, minimal design
 * - Responsive design with mobile-first approach
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'bg-sierra-cream py-20 md:py-32 lg:py-40',
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Title - Sierra Style: 48px, font-weight 400 */}
          <h1 className="text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight tracking-tight text-sierra-text-primary mb-6">
            Conectamos Bolivia con marcas nacionales e internacionales que impulsan innovación, sostenibilidad y confianza
          </h1>

          {/* Subtitle - Sierra Style: 16px, secondary color */}
          <p className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
            Representantes exclusivos de Capstone Green Energy y Tablú para Bolivia
          </p>

          {/* CTA Buttons - Sierra Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/nosotros"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-sierra-green text-white',
                'transition-colors duration-200',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Conocer más
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-white text-sierra-green border-2 border-sierra-green',
                'transition-all duration-200',
                'hover:bg-sierra-green hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
