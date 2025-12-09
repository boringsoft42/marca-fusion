'use client';

import { cn } from '@/lib/utils';
import { ShoppingCart, Package, Wrench, GraduationCap, Lightbulb, Headphones } from 'lucide-react';

/**
 * Capstone Services Section - Soluciones Integrales
 *
 * Features:
 * - 6 service items in 2 columns (3 left, 3 right)
 * - Service descriptions with icons
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Venta de microturbinas Capstone',
      description: 'Desde 65 kW hasta 1 MW.',
    },
    {
      icon: Package,
      title: 'Provisión de repuestos originales',
      description: 'Stock directo y pedidos especiales.',
    },
    {
      icon: Wrench,
      title: 'Mantenimiento preventivo y correctivo',
      description: 'Técnicos capacitados bajo estándares internacionales.',
    },
    {
      icon: GraduationCap,
      title: 'Capacitación técnica y certificaciones',
      description: 'En nuevas tecnologías y mantenimiento de microturbinas.',
    },
    {
      icon: Lightbulb,
      title: 'Consultoría técnica',
      description: 'Resolución de fallas y optimización de sistemas existentes.',
    },
    {
      icon: Headphones,
      title: 'Asistencia postventa y soporte remoto',
      description: 'Acompañamiento continuo al cliente.',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
              Soluciones integrales de energía limpia en Bolivia
            </h2>
            <p className="text-base md:text-lg text-sierra-text-secondary max-w-3xl mx-auto leading-relaxed">
              En Marca Fusión, representamos a Capstone en Bolivia ofreciendo un servicio integral que cubre todo el ciclo de vida de sus equipos:
            </p>
          </div>

          {/* Services Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-[#2D5F3F]/10 group-hover:bg-[#2D5F3F] transition-all duration-300">
                      <Icon
                        className="h-6 w-6 text-[#2D5F3F] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-sierra-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-sierra-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
