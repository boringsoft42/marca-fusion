'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Globe } from 'lucide-react';

/**
 * Marca Fusión Corporate Group Section
 *
 * Features:
 * - Displays connection between Marca Fusión (Bolivia) and Altrix Solutions (USA)
 * - Animated USA-Bolivia connection line
 * - Altrix logo display
 * - Metallic gray background
 * - Call-to-action to learn more about Altrix
 * - Responsive design with mobile adaptation
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupSectionProps {
  className?: string;
}

export function CorporateGroupSection({ className }: CorporateGroupSectionProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section
      className={cn(
        'relative py-16 md:py-24 bg-gradient-to-br from-marca-steel-light via-muted to-marca-steel-light overflow-hidden',
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-marca-steel rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-marca-steel rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-marca-steel/20 border border-marca-steel/30">
            <Globe className="h-4 w-4 text-marca-steel" aria-hidden="true" />
            <span className="text-sm font-semibold text-marca-steel uppercase tracking-wider">
              Conexión Global
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Parte del Grupo Corporativo
          </h2>
        </div>

        {/* Connection Visual */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Marca Fusión - Bolivia */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-6 rounded-lg bg-background/80 backdrop-blur-sm shadow-lg border border-border">
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-marca-green text-white font-bold text-2xl mb-4">
                  MF
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Marca Fusión
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <span className="text-lg">🇧🇴</span>
                  Bolivia
                </p>
              </div>
            </div>

            {/* Connection Arrow */}
            <div className="flex items-center justify-center">
              <div className="relative w-full">
                {/* Animated dashed line */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-dashed border-marca-steel/40 animate-pulse" />
                </div>
                {/* Arrow */}
                <div className="relative flex justify-center">
                  <div className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full border-2 border-marca-steel/40 shadow-md">
                    <ArrowRight className="h-6 w-6 text-marca-steel animate-pulse" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Altrix Solutions - USA */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-6 rounded-lg bg-background/80 backdrop-blur-sm shadow-lg border border-border">
                {/* Altrix logo placeholder */}
                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-marca-steel text-white font-bold text-xl mb-4">
                  AS
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Altrix Solutions
                </h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <span className="text-lg">🇺🇸</span>
                  USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Marca Fusión es parte de un grupo corporativo internacional que conecta Bolivia con Estados Unidos, combinando experiencia local con alcance global para ofrecer soluciones innovadoras.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href={altrixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold',
              'bg-marca-steel text-white shadow-md',
              'transition-all duration-200',
              'hover:bg-marca-steel/90 hover:shadow-lg hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-steel focus-visible:ring-offset-2'
            )}
          >
            Conocer Altrix Solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
