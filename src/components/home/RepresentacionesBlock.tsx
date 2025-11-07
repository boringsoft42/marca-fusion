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
    <section className={cn('bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            Nuestras Representaciones
          </h2>
        </div>

        {/* Split Layout - Sierra Style Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Capstone Block - Left - Sierra Style */}
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            {/* Icon */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-sierra-green/10">
                <Zap className="h-8 w-8 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
              </div>
              {/* Brand name */}
              <div className="text-right">
                <span className="text-sm font-medium text-sierra-text-primary uppercase tracking-wider">
                  Capstone
                </span>
                <p className="text-xs text-sierra-text-secondary mt-1">
                  Green Energy
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-sierra-text-primary mb-4">
                Energía Limpia
              </h3>
              <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                Sistemas de microturbinas que generan energía limpia, eficiente y confiable para aplicaciones industriales y comerciales.
              </p>
            </div>

            {/* CTA - Sierra Style */}
            <Link
              href="/capstone"
              className={cn(
                'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium w-fit',
                'bg-sierra-green text-white',
                'transition-colors duration-200',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Explorar Capstone
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          {/* Tablú Block - Right - Sierra Style */}
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            {/* Icon */}
            <div className="flex items-start justify-between mb-6">
              <div className="p-4 rounded-2xl bg-marca-beige-500/10">
                <PenTool className="h-8 w-8 text-marca-beige-500" strokeWidth={1.5} aria-hidden="true" />
              </div>
              {/* Brand name */}
              <div className="text-right">
                <span className="text-sm font-medium text-sierra-text-primary uppercase tracking-wider">
                  Tablú
                </span>
                <p className="text-xs text-sierra-text-secondary mt-1">
                  Bolivia
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-2xl md:text-3xl font-medium text-sierra-text-primary mb-4">
                Organización con Estilo
              </h3>
              <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                Planificadores y agendas bolivianas que combinan diseño elegante con funcionalidad práctica para tu día a día.
              </p>
            </div>

            {/* CTA - Sierra Style */}
            <Link
              href="/tablu"
              className={cn(
                'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium w-fit',
                'bg-marca-beige-500 text-white',
                'transition-colors duration-200',
                'hover:bg-marca-beige-600',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige-500 focus-visible:ring-offset-2'
              )}
            >
              Explorar Tablú
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
