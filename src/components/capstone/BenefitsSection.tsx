'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, FileSearch, Truck, Wrench, Headphones } from 'lucide-react';

/**
 * Capstone Combined Services & Benefits Section
 *
 * Features:
 * - Key services (condensed)
 * - Key benefits (condensed)
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface BenefitsSectionProps {
  className?: string;
}

export function BenefitsSection({ className }: BenefitsSectionProps) {
  const services = [
    { icon: FileSearch, title: 'Evaluación y Dimensionamiento' },
    { icon: Truck, title: 'Importación y Logística' },
    { icon: Wrench, title: 'Instalación y Puesta en Marcha' },
    { icon: Headphones, title: 'Soporte Técnico 24/7' },
  ];

  const benefits = [
    'Reducción de costos operativos hasta 40%',
    'Emisiones mínimas de NOx y CO',
    'Disponibilidad superior al 95%',
    'Operación silenciosa',
    'Múltiples combustibles (gas, biogás, propano)',
    'Tecnología probada en +10,000 instalaciones',
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
              Por Qué Elegir Capstone
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Solución integral con tecnología probada y soporte completo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Servicios Integrales
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-marca-green-light">
                      <service.icon className="h-5 w-5 text-marca-green" aria-hidden="true" />
                    </div>
                    <p className="text-base font-medium text-foreground">{service.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Column */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                Beneficios Clave
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-6 w-6 text-marca-green flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <p className="text-base text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
