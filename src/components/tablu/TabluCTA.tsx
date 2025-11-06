'use client';

import { cn } from '@/lib/utils';
import { ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

/**
 * Tablú Final CTA Section
 *
 * Features:
 * - Dual CTAs (External Catalog + WhatsApp)
 * - Link to https://tablu.com.pe
 * - Conversion-focused design
 * - Gradient background
 * - Responsive layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface TabluCTAProps {
  className?: string;
}

export function TabluCTA({ className }: TabluCTAProps) {
  const tabluUrl = process.env.NEXT_PUBLIC_TABLU_URL || 'https://tablu.com.pe';
  const whatsappNumber = '59167710595';
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre los planificadores Tablú');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-marca-beige to-marca-beige/80 text-white shadow-2xl mb-8">
            <div className="text-center mb-8">
              {/* Icon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">Tablú Bolivia</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                ¡Empieza a Organizar tu Vida Hoy!
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Descubre nuestra colección completa de planificadores en acrílico y magnéticos.
                Diseños únicos para cada momento de tu vida.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA - External Catalog */}
              <a
                href={tabluUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-white text-marca-beige shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/95 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-beige'
                )}
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                Explorar Catálogo Completo
              </a>

              {/* Secondary CTA - WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Bolivia Operations */}
            <div className="p-6 rounded-lg bg-background border-l-4 border-marca-beige shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-marca-beige-light flex items-center justify-center">
                    <span className="text-xs font-bold text-marca-beige">BO</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                    Operaciones en Bolivia
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Marca Fusión SRL</span> es el representante
                    oficial de Tablú en Bolivia. Ofrecemos envíos a todo el país, soporte local en español
                    y asesoría personalizada para todos nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Peru Connection */}
            <div className="p-6 rounded-lg bg-background border-l-4 border-marca-steel shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-marca-steel-light flex items-center justify-center">
                    <span className="text-xs font-bold text-marca-steel">PE</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                    Conexión con Perú
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Los planificadores Tablú son diseñados y fabricados en Perú con los más altos
                    estándares de calidad. Visita{' '}
                    <a
                      href={tabluUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-marca-steel hover:underline"
                    >
                      tablu.com.pe
                    </a>
                    {' '}para conocer toda la colección.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              ¿Tienes preguntas sobre tamaños, diseños o precios especiales?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-semibold"
              >
                WhatsApp: +591 67710595
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="/contacto"
                className="text-marca-beige hover:underline font-semibold"
              >
                Formulario de Contacto
              </a>
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="mt-8 p-4 rounded-lg bg-marca-green/10 border border-marca-green/30 text-center">
            <p className="text-sm text-foreground">
              <span className="font-bold text-marca-green">✓ Garantía de Satisfacción</span> •
              Envíos seguros a todo Bolivia • Soporte local en español
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
