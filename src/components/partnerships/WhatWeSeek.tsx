'use client';

import { cn } from '@/lib/utils';
import { Target, Users, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * What We Seek Section (Partnerships)
 *
 * Features:
 * - Partnership criteria description
 * - Types of alliances we're interested in
 * - Visual imagery of diverse collaboration
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
            className="text-center mb-12"
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              ¿Qué Buscamos en una Alianza?
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              No todas las alianzas son iguales. Buscamos partners que compartan nuestra visión de innovación,
              calidad y compromiso con el cliente.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Partnership Types */}
            <div className="space-y-6">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-sierra-green/10">
                      <type.icon className="h-6 w-6 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">{type.title}</h3>
                    <p className="text-[15px] text-[#6b6b6b] leading-relaxed">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Criteria */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 md:p-10 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-6">
                Criterios de Selección
              </h3>
              <ul className="space-y-4">
                {[
                  'Productos o servicios innovadores con diferenciación clara',
                  'Compromiso con calidad y soporte post-venta',
                  'Visión de largo plazo y crecimiento sostenible',
                  'Valores corporativos alineados (integridad, transparencia, excelencia)',
                  'Disposición para trabajar colaborativamente',
                  'Capacidad de adaptación al mercado boliviano',
                  'Respaldo técnico y capacitación continua',
                ].map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-sierra-green/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-sierra-green">✓</span>
                      </div>
                    </div>
                    <span className="text-[15px] text-[#1a1a1a]">{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <p className="text-[15px] text-[#1a1a1a] leading-relaxed max-w-3xl mx-auto">
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
