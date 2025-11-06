'use client';

import { cn } from '@/lib/utils';
import { Zap, Recycle, Settings, TrendingDown } from 'lucide-react';

/**
 * Microturbine Technology Explanation Section
 *
 * Features:
 * - Technology description and explanation
 * - Key benefits with icons
 * - Technical highlights
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface MicroturbineExplanationProps {
  className?: string;
}

export function MicroturbineExplanation({ className }: MicroturbineExplanationProps) {
  const benefits = [
    {
      icon: Zap,
      title: 'Generación Eficiente',
      description: 'Producción de energía eléctrica con eficiencias de hasta 33% y hasta 90% en aplicaciones de cogeneración.',
    },
    {
      icon: Recycle,
      title: 'Ultra Baja Emisión',
      description: 'Tecnología que cumple con las normativas ambientales más estrictas, con emisiones mínimas de NOx y CO.',
    },
    {
      icon: Settings,
      title: 'Bajo Mantenimiento',
      description: 'Diseño con una sola pieza móvil que reduce significativamente los costos y frecuencia de mantenimiento.',
    },
    {
      icon: TrendingDown,
      title: 'Costos Operativos Reducidos',
      description: 'Menor consumo de combustible y gastos de mantenimiento comparado con tecnologías tradicionales.',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ¿Qué son las Microturbinas?
            </h2>
            <div className="w-20 h-1 bg-marca-green mx-auto rounded-full mb-8" />
          </div>

          {/* Main Explanation */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none">
              <div className="p-8 md:p-12 rounded-lg bg-muted/30 border border-border">
                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  Las <span className="font-bold text-marca-green">microturbinas Capstone</span> son sistemas compactos de generación de energía que utilizan turbinas de gas de alta velocidad para producir electricidad. A diferencia de los generadores tradicionales, las microturbinas operan con una única pieza móvil, lo que resulta en mayor confiabilidad y menores costos de mantenimiento.
                </p>

                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6">
                  Estas unidades son ideales para <span className="font-semibold">generación distribuida</span>, <span className="font-semibold">cogeneración</span> (producción combinada de calor y electricidad), y <span className="font-semibold">respaldo energético</span> en aplicaciones que requieren suministro continuo y confiable.
                </p>

                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  La tecnología Capstone se destaca por su capacidad de operar con múltiples combustibles, incluyendo gas natural, biogás, propano, y gases de vertedero, ofreciendo flexibilidad operativa excepcional.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Beneficios Clave
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-background border border-border hover:border-marca-green/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Icon */}
                  <div className="inline-flex mb-4">
                    <div className="p-4 rounded-full bg-marca-green-light group-hover:bg-marca-green transition-colors duration-300">
                      <benefit.icon
                        className="h-7 w-7 text-marca-green group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {benefit.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
