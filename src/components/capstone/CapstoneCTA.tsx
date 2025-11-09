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
          <div className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-marca-green to-marca-green/80 text-white shadow-2xl mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-6">
                Transforme su Operación Energética Hoy
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Descubra cómo las microturbinas Capstone pueden reducir sus costos operativos,
                disminuir su huella de carbono y garantizar suministro energético confiable 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - Contact Form */}
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-white text-marca-green shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/95 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green'
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
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                Explorar Sitio Oficial Capstone
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Altrix Disclaimer */}
          <div className="p-6 rounded-lg bg-background border-l-4 border-marca-steel shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="h-8 w-8 rounded-full bg-marca-steel-light flex items-center justify-center">
                  <span className="text-xs font-bold text-marca-steel">ℹ</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                  Operaciones Internacionales
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Marca Fusión SRL</span> es el representante comercial
                  y técnico de Capstone Green Energy en Bolivia.{' '}
                  <span className="font-semibold text-foreground">Altrix Solutions LLC</span> (Estados Unidos) maneja
                  todas las operaciones de importación, logística internacional y coordinación directa con Capstone,
                  garantizando cumplimiento normativo y soporte técnico especializado.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ¿Tiene preguntas técnicas específicas? Nuestro equipo de ingenieros está disponible para
              asistirle en la evaluación técnico-económica de su proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
