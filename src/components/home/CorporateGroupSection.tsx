'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Globe } from 'lucide-react';

/**
 * Marca Fusión Corporate Group Section - Sierra Style
 *
 * Features:
 * - Sierra cream background
 * - White cards with Sierra styling
 * - Clean typography following Sierra guidelines
 * - Simplified connection visual
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface CorporateGroupSectionProps {
  className?: string;
}

export function CorporateGroupSection({ className }: CorporateGroupSectionProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section
      className={cn(
        'bg-sierra-cream py-16 md:py-20 lg:py-24',
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <Globe className="h-4 w-4 text-sierra-text-primary" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium text-sierra-text-primary uppercase tracking-wider">
              Conexión Global
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            Parte del Grupo Corporativo
          </h2>
        </div>

        {/* Connection Visual - Sierra Style */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Marca Fusión - Bolivia */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sierra-green text-white font-medium text-2xl mb-4">
                  MF
                </div>
                <h3 className="text-lg font-medium text-sierra-text-primary mb-1">
                  Marca Fusión
                </h3>
                <p className="text-sm text-sierra-text-secondary flex items-center gap-1">
                  <span className="text-lg">🇧🇴</span>
                  Bolivia
                </p>
              </div>
            </div>

            {/* Connection Arrow */}
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-dashed border-sierra-gray-light" />
                </div>
                <div className="relative flex justify-center">
                  <div className="px-4 py-2 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <ArrowRight className="h-6 w-6 text-sierra-text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Altrix Solutions - USA */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-marca-steel-500 text-white font-medium text-xl mb-4">
                  AS
                </div>
                <h3 className="text-lg font-medium text-sierra-text-primary mb-1">
                  Altrix Solutions
                </h3>
                <p className="text-sm text-sierra-text-secondary flex items-center gap-1">
                  <span className="text-lg">🇺🇸</span>
                  USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description - Sierra Style */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
            Marca Fusión es parte de un grupo corporativo internacional que conecta Bolivia con Estados Unidos, combinando experiencia local con alcance global para ofrecer soluciones innovadoras.
          </p>
        </div>

        {/* CTA - Sierra Style */}
        <div className="flex justify-center">
          <a
            href={altrixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
              'bg-marca-steel-500 text-white',
              'transition-colors duration-200',
              'hover:bg-marca-steel-600',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-steel-500 focus-visible:ring-offset-2'
            )}
          >
            Conocer Altrix Solutions
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
