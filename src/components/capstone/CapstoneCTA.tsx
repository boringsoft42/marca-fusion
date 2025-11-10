'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink, FileText } from 'lucide-react';

/**
 * Capstone Final CTA Section
 *
 * Features:
 * - Dual CTAs (Quote form + External Capstone website)
 * - Altrix disclaimer
 * - Professional presentation
 * - Responsive design
 * - Follows STYLE-GUIDE.MD design patterns
 */

interface CapstoneCTAProps {
  className?: string;
}

export function CapstoneCTA({ className }: CapstoneCTAProps) {
  const capstoneUrl = process.env.NEXT_PUBLIC_CAPSTONE_URL || 'https://www.capstonegreenenergy.com';

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="p-8 md:p-12 rounded-lg bg-[#1a1a1a] text-white shadow-2xl mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-6">
                Transforme su Operación Energética Hoy
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Reduzca costos operativos, disminuya su huella de carbono y garantice suministro energético confiable 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - Contact Form */}
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-marca-green text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
                )}
              >
                <FileText className="h-5 w-5" aria-hidden="true" />
                Solicitar Cotización Detallada
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>

              {/* Secondary CTA - External Capstone */}
              <a
                href={capstoneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-transparent text-white border-2 border-white/40 shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/10 hover:border-white/60 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
                )}
              >
                Explorar Sitio Oficial Capstone
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
