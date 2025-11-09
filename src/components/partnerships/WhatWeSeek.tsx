'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Target, Users, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * What We Seek Section (Partnerships) - Radial Orbital Design
 *
 * Features:
 * - Radial/orbital layout for partnership types
 * - Interactive hover states
 * - Center focal point with criteria
 * - Professional tone
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface WhatWeSeekProps {
  className?: string;
}

export function WhatWeSeek({ className }: WhatWeSeekProps) {
  const [activeType, setActiveType] = useState<number | null>(null);

  const partnershipTypes = [
    {
      icon: Target,
      title: 'Representaciones Exclusivas',
      description:
        'Buscamos marcas innovadoras de tecnología energética, equipamiento industrial o productos de organización personal que busquen entrar al mercado boliviano.',
      position: 'top',
    },
    {
      icon: Users,
      title: 'Alianzas Comerciales',
      description:
        'Distribuidores, integradores y consultores que complementen nuestro portafolio y amplíen nuestro alcance en sectores estratégicos.',
      position: 'right',
    },
    {
      icon: Rocket,
      title: 'Joint Ventures',
      description:
        'Proyectos conjuntos para desarrollar soluciones específicas, especialmente en energía renovable y eficiencia operacional.',
      position: 'bottom',
    },
    {
      icon: Award,
      title: 'Partners Estratégicos',
      description:
        'Empresas con visión a largo plazo que compartan nuestros valores y quieran co-crear valor en el mercado boliviano y regional.',
      position: 'left',
    },
  ];

  const criteria = [
    'Productos o servicios innovadores con diferenciación clara',
    'Compromiso con calidad y soporte post-venta',
    'Visión de largo plazo y crecimiento sostenible',
    'Valores corporativos alineados (integridad, transparencia, excelencia)',
    'Disposición para trabajar colaborativamente',
    'Capacidad de adaptación al mercado boliviano',
    'Respaldo técnico y capacitación continua',
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top':
        return 'lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2';
      case 'right':
        return 'lg:absolute lg:top-1/2 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/2';
      case 'bottom':
        return 'lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2';
      case 'left':
        return 'lg:absolute lg:top-1/2 lg:left-0 lg:-translate-x-1/2 lg:-translate-y-1/2';
      default:
        return '';
    }
  };

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-sierra-cream', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
              ¿Qué Buscamos en una Alianza?
            </h2>
            <p className="text-[15px] text-sierra-text-secondary max-w-3xl mx-auto leading-relaxed">
              No todas las alianzas son iguales. Buscamos partners que compartan nuestra visión de innovación,
              calidad y compromiso con el cliente.
            </p>
          </motion.div>

          {/* Radial Orbital Layout */}
          <div className="relative max-w-5xl mx-auto mb-16">
            <div className="lg:relative lg:h-[600px] flex flex-col lg:block gap-6 lg:gap-0">
              {/* Center Circle - Criteria */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-96 p-8 md:p-10 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] z-10"
              >
                <h3 className="text-xl font-medium text-sierra-text-primary mb-6 text-center">
                  Criterios de Selección
                </h3>
                <ul className="space-y-3">
                  {criteria.map((criterion, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-sierra-green/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-sierra-green">✓</span>
                        </div>
                      </div>
                      <span className="text-sm text-sierra-text-primary leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Orbital Partnership Types */}
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setActiveType(index)}
                  onMouseLeave={() => setActiveType(null)}
                  className={cn(
                    'w-full lg:w-72 p-6 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer',
                    getPositionClasses(type.position),
                    activeType === index && 'ring-2 ring-sierra-green'
                  )}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn(
                      'p-3 rounded-full transition-colors duration-300',
                      activeType === index ? 'bg-sierra-green' : 'bg-sierra-green/10'
                    )}>
                      <type.icon
                        className={cn(
                          'h-6 w-6 transition-colors duration-300',
                          activeType === index ? 'text-white' : 'text-sierra-green'
                        )}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-sierra-text-primary">{type.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-sierra-text-secondary leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[15px] text-sierra-text-primary leading-relaxed max-w-3xl mx-auto">
              <span className="font-medium">¿Tu empresa cumple con estos criterios?</span> Nos encantaría conocer tu
              propuesta. Envíanos un mensaje detallando tu marca, productos/servicios, y cómo visualizas una alianza
              estratégica con Marca Fusión.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
