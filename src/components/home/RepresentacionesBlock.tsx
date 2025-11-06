'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Zap, PenTool } from 'lucide-react';

/**
 * Marca Fusión Representations Block
 *
 * Features:
 * - Split visual layout (Capstone left, Tablú right)
 * - Brand-specific styling (green for Capstone, beige for Tablú)
 * - Individual CTAs for each representation
 * - Hover effects with smooth transitions
 * - Responsive design with mobile stacking
 * - Icon integration for visual interest
 * - Follows STYLE-GUIDE.md design patterns
 */

interface RepresentacionesBlockProps {
  className?: string;
}

export function RepresentacionesBlock({ className }: RepresentacionesBlockProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nuestras Representaciones
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
          {/* Capstone Block - Left */}
          <div className="relative group overflow-hidden bg-marca-green-light hover:bg-marca-green-light/80 transition-colors duration-300">
            <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
              {/* Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-full bg-marca-green text-white shadow-md">
                  <Zap className="h-8 w-8" aria-hidden="true" />
                </div>
                {/* Decorative brand name */}
                <div className="text-right">
                  <span className="text-sm font-semibold text-marca-green uppercase tracking-wider">
                    Capstone
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Green Energy
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Energía Limpia
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Sistemas de microturbinas que generan energía limpia, eficiente y confiable para aplicaciones industriales y comerciales.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/capstone"
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold w-fit',
                  'bg-marca-green text-white shadow-md',
                  'transition-all duration-200',
                  'hover:bg-marca-green/90 hover:shadow-lg hover:translate-x-1',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                )}
              >
                Explorar Capstone
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-marca-green rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Tablú Block - Right */}
          <div className="relative group overflow-hidden bg-marca-beige-light hover:bg-marca-beige-light/80 transition-colors duration-300">
            <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
              {/* Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-full bg-marca-beige text-white shadow-md">
                  <PenTool className="h-8 w-8" aria-hidden="true" />
                </div>
                {/* Decorative brand name */}
                <div className="text-right">
                  <span className="text-sm font-semibold text-marca-beige uppercase tracking-wider">
                    Tablú
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Bolivia
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Organización con Estilo
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Planificadores y agendas bolivianas que combinan diseño elegante con funcionalidad práctica para tu día a día.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/tablu"
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold w-fit',
                  'bg-marca-beige text-white shadow-md',
                  'transition-all duration-200',
                  'hover:bg-marca-beige/90 hover:shadow-lg hover:translate-x-1',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                )}
              >
                Explorar Tablú
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-marca-beige rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
