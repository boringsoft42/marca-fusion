'use client';

import { cn } from '@/lib/utils';
import { Wrench, FileSearch, Truck, Headphones, GraduationCap, TrendingUp } from 'lucide-react';

/**
 * Capstone Services Section
 *
 * Features:
 * - 6 service items with icons
 * - Service descriptions
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ServicesSectionProps {
  className?: string;
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      icon: FileSearch,
      title: 'Evaluación y Dimensionamiento',
      description: 'Análisis técnico de su necesidad energética para determinar la solución óptima de microturbinas.',
    },
    {
      icon: Truck,
      title: 'Importación y Logística',
      description: 'Gestión completa de importación desde Estados Unidos con soporte de Altrix Solutions LLC.',
    },
    {
      icon: Wrench,
      title: 'Instalación y Puesta en Marcha',
      description: 'Instalación profesional y puesta en marcha supervisada por técnicos certificados.',
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico',
      description: 'Asistencia técnica local en español y conexión directa con ingenieros de Capstone.',
    },
    {
      icon: GraduationCap,
      title: 'Capacitación',
      description: 'Entrenamiento para personal operativo y de mantenimiento de su organización.',
    },
    {
      icon: TrendingUp,
      title: 'Mantenimiento Preventivo',
      description: 'Programas de mantenimiento programado para maximizar la disponibilidad y vida útil del equipo.',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Soporte integral desde la evaluación inicial hasta el mantenimiento continuo
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-background border border-border hover:border-marca-green/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="inline-flex mb-4">
                  <div className="p-4 rounded-full bg-marca-green-light group-hover:bg-marca-green transition-colors duration-300">
                    <service.icon
                      className="h-7 w-7 text-marca-green group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 md:p-8 rounded-lg bg-background border-l-4 border-marca-green shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿Por qué elegirnos como su partner Capstone?
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-marca-green mt-0.5 font-bold">✓</span>
                Únicos representantes autorizados de Capstone Green Energy en Bolivia
              </li>
              <li className="flex items-start gap-2">
                <span className="text-marca-green mt-0.5 font-bold">✓</span>
                Respaldo de Altrix Solutions LLC para operaciones internacionales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-marca-green mt-0.5 font-bold">✓</span>
                Experiencia comprobada en más de 71 instalaciones de microturbinas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-marca-green mt-0.5 font-bold">✓</span>
                Soporte técnico local y conexión directa con ingenieros de fábrica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
