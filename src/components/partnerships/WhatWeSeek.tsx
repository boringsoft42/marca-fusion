'use client';

import { cn } from '@/lib/utils';
import { Target, Users, Rocket, Award, Check } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * What We Seek Section (Partnerships) - Simple Card Layout
 *
 * Features:
 * - Clean card grid layout
 * - Partnership types in single row
 * - Criteria list below
 * - Professional tone
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface WhatWeSeekProps {
  className?: string;
}

export function WhatWeSeek({ className }: WhatWeSeekProps) {
  const partnershipTypes = [
    {
      icon: Target,
      title: 'Representaciones Exclusivas',
      description:
        'Buscamos marcas innovadoras de tecnología energética, equipamiento industrial o productos de organización personal que busquen entrar al mercado boliviano.',
    },
    {
      icon: Users,
      title: 'Alianzas Comerciales',
      description:
        'Distribuidores, integradores y consultores que complementen nuestro portafolio y amplíen nuestro alcance en sectores estratégicos.',
    },
    {
      icon: Rocket,
      title: 'Joint Ventures',
      description:
        'Proyectos conjuntos para desarrollar soluciones específicas, especialmente en energía renovable y eficiencia operacional.',
    },
    {
      icon: Award,
      title: 'Partners Estratégicos',
      description:
        'Empresas con visión a largo plazo que compartan nuestros valores y quieran co-crear valor en el mercado boliviano y regional.',
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

  return (
    <section className={cn('py-12 sm:py-16 md:py-20 lg:py-24 bg-sierra-cream', className)}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 px-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-4 sm:mb-6">
              ¿Qué Buscamos en una Alianza?
            </h2>
            <p className="text-sm sm:text-[15px] md:text-base text-sierra-text-secondary max-w-3xl mx-auto leading-relaxed">
              No todas las alianzas son iguales. Buscamos partners que compartan nuestra visión de innovación,
              calidad y compromiso con el cliente.
            </p>
          </motion.div>

          {/* Partnership Types - Cards in Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sierra-green/10 group-hover:bg-sierra-green transition-colors duration-300">
                    <type.icon
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-sierra-green group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-medium text-sierra-text-primary mb-2 sm:mb-3">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-sierra-text-secondary leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Criteria Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-sierra-text-primary mb-4 sm:mb-6 text-center">
              Criterios de Selección
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {criteria.map((criterion, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-sm sm:text-[15px] text-sierra-text-primary leading-relaxed">{criterion}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
