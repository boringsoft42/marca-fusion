'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, MessageCircle } from 'lucide-react';

/**
 * Capstone Benefits Section
 *
 * Features:
 * - Key benefits list with icons
 * - WhatsApp CTA button
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface BenefitsSectionProps {
  className?: string;
}

export function BenefitsSection({ className }: BenefitsSectionProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_GENERAL || '59172136767';
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre las microturbinas Capstone Green Energy.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    'Reducción de costos operativos hasta 40% comparado con generadores diesel',
    'Generación de energía limpia con emisiones mínimas de NOx y CO',
    'Alta confiabilidad con disponibilidad superior al 95%',
    'Operación silenciosa ideal para áreas urbanas y hospitales',
    'Capacidad de operar con múltiples combustibles (gas natural, biogás, propano)',
    'Mantenimiento programado cada 8,000 horas de operación',
    'Recuperación de inversión en 3-5 años según aplicación',
    'Tecnología probada con más de 10,000 unidades instaladas mundialmente',
    'Cumplimiento de normativas ambientales internacionales más estrictas',
    'Soporte técnico local en español y conexión directa con ingenieros Capstone',
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
              ¿Por Qué Elegir Microturbinas Capstone?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Beneficios comprobados que transforman su operación energética
            </p>
          </div>

          {/* Benefits List */}
          <div className="mb-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <CheckCircle2 className="h-6 w-6 text-marca-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="p-8 md:p-12 rounded-lg bg-gradient-to-br from-marca-green-light to-background border border-marca-green/30">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Listo para Optimizar su Generación de Energía?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestros especialistas están disponibles para evaluar su necesidad energética y
                recomendar la solución Capstone ideal para su aplicación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                    'bg-[#128C7E] text-white shadow-lg',
                    'transition-all duration-200',
                    'hover:bg-[#128C7E]/90 hover:shadow-xl hover:scale-105',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2'
                  )}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Consultar por WhatsApp
                </a>

                {/* Contact Form CTA */}
                <a
                  href="/contacto"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                    'bg-marca-green text-white shadow-lg',
                    'transition-all duration-200',
                    'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                  )}
                >
                  Solicitar Cotización Formal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
