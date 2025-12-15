'use client';

import { cn } from '@/lib/utils';
import { Target, Users, Rocket, Award, Check } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * What We Seek Section (Partnerships) - Light Theme
 *
 * Features:
 * - Clean white background
 * - Partnership types grid
 * - Criteria list
 * - Professional tone
 * - Follows visual pattern from Sectors page
 */

interface WhatWeSeekProps {
  className?: string;
}

export function WhatWeSeek({ className }: WhatWeSeekProps) {
  const partnershipTypes = [
    {
      icon: Target,
      title: 'Representaciones',
      description:
        'Marcas innovadoras de tecnología o productos que busquen entrar al mercado boliviano.',
    },
    {
      icon: Users,
      title: 'Alianzas Comerciales',
      description:
        'Distribuidores y consultores que complementen nuestro portafolio y amplíen nuestro alcance.',
    },
    {
      icon: Rocket,
      title: 'Joint Ventures',
      description:
        'Proyectos conjuntos para desarrollar soluciones específicas en energía y eficiencia.',
    },
    {
      icon: Award,
      title: 'Partners Estratégicos',
      description:
        'Empresas con visión a largo plazo que compartan nuestros valores y quieran co-crear valor.',
    },
  ];

  const criteria = [
    'Productos innovadores con diferenciación clara',
    'Compromiso con calidad y soporte post-venta',
    'Visión de largo plazo y crecimiento sostenible',
    'Valores corporativos alineados',
    'Disposición para trabajar colaborativamente',
    'Capacidad de adaptación al mercado',
  ];

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-wider font-medium text-[#1a1a1a]">
                ◆ Qué Buscamos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6"
            >
              Tipos de Alianza.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-[#666] max-w-3xl leading-relaxed"
            >
              No todas las alianzas son iguales. Buscamos partners que compartan nuestra visión de innovación,
              calidad y compromiso con el cliente.
            </motion.p>
          </div>

          {/* Partnership Types Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="group relative"
                >
                  <div className="pb-6 border-b border-gray-200 group-hover:border-[#1a1a1a] transition-colors duration-300">
                    <div className="mb-4">
                      <Icon
                        className="h-8 w-8 text-[#1a1a1a]"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Criteria List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#f9f9f9] rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 text-center">
              Criterios de Selección
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto">
              {criteria.map((criterion, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#1a1a1a] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base text-[#444]">{criterion}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
