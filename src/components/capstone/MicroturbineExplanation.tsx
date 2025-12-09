'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Zap, Recycle, Settings, TrendingDown } from 'lucide-react';
import Image from 'next/image';

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
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

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
    <section className={cn('py-16 md:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
              Microturbinas para una energía eficiente y sostenible
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ROTATING GROUPS, REAR, SANITIZED.jpg"
                alt="Rotating Groups Capstone Microturbine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
              <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                Las <span className="text-[#2D5F3F] font-semibold">microturbinas Capstone</span> son sistemas compactos de generación distribuida que utilizan turbinas de gas de alta velocidad para producir electricidad y calor para cogeneración (CHP) con altos niveles de eficiencia. Gracias a su diseño con una sola pieza móvil, ofrecen mayor confiabilidad, libre de lubricantes y refrigerantes, menos desgaste y costos de mantenimiento significativamente reducidos frente a los generadores tradicionales.
              </p>

              <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                Estas unidades destacan por su capacidad de operar con múltiples combustibles —gas natural, biogás, GLP, diésel, propano y gases de vertedero— lo que brinda una flexibilidad operativa excepcional y las convierte en una solución ideal para aplicaciones industriales, comerciales y proyectos de energías renovables.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-sierra-text-primary text-center mb-12">
              Beneficios Clave
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className="relative cursor-pointer"
                  >
                    <div className="pb-6">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className={cn(
                          'inline-flex p-4 rounded-full transition-all duration-300',
                          isHovered ? 'bg-[#2D5F3F]' : 'bg-[#2D5F3F]/10'
                        )}>
                          <Icon
                            className={cn(
                              'h-7 w-7 transition-colors duration-300',
                              isHovered ? 'text-white' : 'text-[#2D5F3F]'
                            )}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className={cn(
                        'text-lg font-bold mb-3 transition-colors duration-300',
                        isHovered ? 'text-[#2D5F3F]' : 'text-sierra-text-primary'
                      )}>
                        {benefit.title}
                      </h4>

                      {/* Bottom line under title */}
                      <div className={cn(
                        'h-1 w-full mb-4 transition-all duration-300',
                        isHovered ? 'bg-[#2D5F3F]' : 'bg-gray-200'
                      )} />

                      {/* Description - Expandable */}
                      <div className={cn(
                        'overflow-hidden transition-all duration-500 ease-in-out',
                        isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      )}>
                        <p className="text-sm text-sierra-text-secondary leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
