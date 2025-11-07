'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Sparkles, Magnet } from 'lucide-react';

/**
 * Tablú Pricing Tables
 *
 * Features:
 * - Two comparison tables (Acrylic vs Magnetic)
 * - Size options with dimensions
 * - Ideal use cases for each size
 * - Responsive table design with Sierra styling
 * - Visual differentiation between types
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface PricingTablesProps {
  className?: string;
}

export function PricingTables({ className }: PricingTablesProps) {
  const acrylicPlanners = [
    {
      size: 'Mini',
      dimensions: '21 x 29.7 cm (A4)',
      idealFor: 'Escritorio, mochila, uso personal diario',
      features: ['Portátil', 'Perfecto para estudiantes', 'Incluye marcador'],
    },
    {
      size: 'Mediano',
      dimensions: '30 x 40 cm',
      idealFor: 'Home office, dormitorio, planificación semanal',
      features: ['Ideal para hogar', 'Mayor visibilidad', '2 marcadores incluidos'],
    },
    {
      size: 'Grande',
      dimensions: '40 x 60 cm',
      idealFor: 'Oficina, sala de reuniones, planificación mensual',
      features: ['Alta visibilidad', 'Perfecto para equipos', '3 marcadores incluidos'],
      highlighted: true,
    },
    {
      size: 'Extra Grande',
      dimensions: '60 x 90 cm',
      idealFor: 'Corporativo, salas de planificación, proyectos',
      features: ['Máxima visibilidad', 'Uso corporativo', 'Kit completo de marcadores'],
    },
  ];

  const magneticPlanners = [
    {
      size: 'Pequeño',
      dimensions: '20 x 30 cm',
      idealFor: 'Refrigerador, pizarra metálica, recordatorios',
      features: ['Magnético fuerte', 'Fácil reposicionamiento', 'Marcador incluido'],
    },
    {
      size: 'Mediano',
      dimensions: '30 x 45 cm',
      idealFor: 'Cocina, oficina en casa, planificación familiar',
      features: ['Versátil', 'Ideal para espacios pequeños', '2 marcadores incluidos'],
      highlighted: true,
    },
    {
      size: 'Grande',
      dimensions: '45 x 60 cm',
      idealFor: 'Oficina, espacios de trabajo colaborativo',
      features: ['Gran área de trabajo', 'Perfecto para equipos', '3 marcadores incluidos'],
    },
  ];

  const PlannerTable = ({
    title,
    icon: Icon,
    planners,
    accentColor,
  }: {
    title: string;
    icon: React.ElementType;
    planners: typeof acrylicPlanners;
    accentColor: string;
  }) => (
    <div className="space-y-6">
      {/* Table Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-3"
        >
          <Icon className={cn('h-8 w-8', accentColor)} strokeWidth={1.5} aria-hidden="true" />
          <h3 className="text-xl font-medium text-[#1a1a1a]">{title}</h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[15px] text-[#6b6b6b]"
        >
          {title.includes('Acrílico') ? 'Cristalino y elegante, ideal para cualquier espacio' : 'Flexible y práctico, adhiere a cualquier superficie metálica'}
        </motion.p>
      </div>

      {/* Planners Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {planners.map((planner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              'relative p-6 rounded-2xl border-2 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
              'transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-1',
              planner.highlighted
                ? 'border-[#0d6832]'
                : 'border-[#e0e0e0] hover:border-[#0d6832]/50'
            )}
          >
            {/* Highlighted Badge */}
            {planner.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-3xl bg-[#0d6832] text-white text-xs font-bold shadow-md">
                Más Popular
              </div>
            )}

            {/* Size */}
            <div className="text-center mb-4">
              <h4 className="text-xl font-medium text-[#1a1a1a] mb-1">{planner.size}</h4>
              <p className="text-sm text-[#0d6832] font-medium">{planner.dimensions}</p>
            </div>

            {/* Ideal For */}
            <div className="mb-4 p-3 rounded-lg bg-[#ebe8e3]">
              <p className="text-xs font-medium text-[#6b6b6b] mb-1 uppercase tracking-wide">
                Ideal para:
              </p>
              <p className="text-[15px] text-[#1a1a1a] leading-relaxed">{planner.idealFor}</p>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {planner.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-[#0d6832] flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[#6b6b6b]">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-[#ebe8e3]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[48px] font-normal text-[#1a1a1a] mb-4"
            >
              Encuentra tu Tamaño Ideal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto"
            >
              Ofrecemos planificadores en acrílico y magnéticos en diversos tamaños para adaptarse a tus necesidades
            </motion.p>
          </div>

          {/* Acrylic Planners Table */}
          <PlannerTable
            title="Planificadores de Acrílico"
            icon={Sparkles}
            planners={acrylicPlanners}
            accentColor="text-[#0d6832]"
          />

          {/* Magnetic Planners Table */}
          <PlannerTable
            title="Planificadores Magnéticos"
            icon={Magnet}
            planners={magneticPlanners}
            accentColor="text-[#6b6b6b]"
          />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 md:p-8 rounded-2xl bg-white border-l-4 border-[#0d6832] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿Necesitas un tamaño personalizado?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-4 leading-relaxed">
              Ofrecemos planificadores en medidas personalizadas para proyectos corporativos o necesidades específicas.
              Contáctanos para cotizaciones especiales.
            </p>
            <a
              href="https://wa.me/59167710595?text=Hola!%20Necesito%20un%20planificador%20en%20medida%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                'transition-all duration-200',
                'hover:bg-[#0a5528]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
              )}
            >
              Solicitar Cotización Personalizada
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
