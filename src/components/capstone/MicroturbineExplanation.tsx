'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Zap, Recycle, Settings, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Microturbine Technology Explanation Section - Dark Theme
 *
 * Features:
 * - Dark background (#1a1a1a) for contrast with Parallax Hero
 * - White text and styled components
 * - Responsive grid layout
 * - Z-index handling for parallax overlap effect
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
    <section className={cn('py-20 md:py-24 lg:py-32 bg-[#1a1a1a] relative z-10', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-wider font-medium text-white/80">
                ◆ Tecnología Eficiente
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Microturbinas para una energía <span className="block text-white/60">eficiente y sostenible</span>
            </motion.h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Left: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/images/ROTATING GROUPS, REAR, SANITIZED.jpg"
                alt="Rotating Groups Capstone Microturbine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-white/80 leading-relaxed">
                Las <span className="text-marca-green font-bold">microturbinas Capstone</span> son sistemas compactos de generación distribuida que utilizan turbinas de gas de alta velocidad para producir electricidad y calor para cogeneración (CHP) con altos niveles de eficiencia.
              </p>

              <p className="text-lg text-white/70 leading-relaxed">
                Gracias a su diseño con una sola pieza móvil, ofrecen mayor confiabilidad, libre de lubricantes y refrigerantes, menos desgaste y costos de mantenimiento significativamente reducidos frente a los generadores tradicionales.
              </p>
              
              <p className="text-lg text-white/70 leading-relaxed">
                Estas unidades destacan por su capacidad de operar con múltiples combustibles —gas natural, biogás, GLP, diésel, propano y gases de vertedero.
              </p>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="mt-24">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
              Beneficios Clave.
            </motion.h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isHovered = hoveredBenefit === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className="relative cursor-pointer group"
                  >
                    <div className="pb-8 border-b border-white/10 group-hover:border-marca-green/50 transition-colors duration-300 min-h-[200px]">
                      {/* Icon */}
                      <div className="mb-6">
                        <Icon
                          className={cn(
                            'h-10 w-10 transition-colors duration-300',
                            isHovered ? 'text-marca-green' : 'text-white'
                          )}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Title */}
                      <h4 className={cn(
                        'text-xl font-bold mb-4 transition-colors duration-300',
                        isHovered ? 'text-marca-green' : 'text-white'
                      )}>
                        {benefit.title}
                      </h4>

                      {/* Description - Always visible now for cleaner layout in dark mode */}
                      <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
