'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Cpu, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Mission Section - Sierra Style
 *
 * Features:
 * - White background with Sierra styling
 * - Three value cards with Sierra typography and spacing
 * - Clean, minimal design
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface MissionSectionProps {
  className?: string;
}

export function MissionSection({ className }: MissionSectionProps) {
  const values = [
    {
      icon: Cpu,
      title: 'Tecnología',
      description: 'Innovamos con soluciones tecnológicas de vanguardia que transforman industrias y generan valor sostenible.',
    },
    {
      icon: ShieldCheck,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia, integridad y compromiso con nuestros clientes.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Promovemos soluciones ambientalmente responsables que cuidan nuestro planeta para las futuras generaciones.',
    },
  ];

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
            Nuestra Misión
          </h2>
          <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
            En Marca Fusión conectamos Bolivia con el mundo a través de representaciones estratégicas de marcas líderes, impulsando innovación y desarrollo sostenible.
          </p>
        </motion.div>

        {/* Value Cards Grid - Sierra Style */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 text-center transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div className="inline-flex mb-6">
                <div className="p-4 rounded-2xl bg-sierra-green/10">
                  <value.icon
                    className="h-8 w-8 text-sierra-green"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-sierra-text-primary mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            href="/nosotros"
            className={cn(
              'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
              'bg-sierra-green text-white',
              'transition-colors duration-200',
              'hover:bg-sierra-green-hover',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
            )}
          >
            Conocer más sobre nosotros
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
