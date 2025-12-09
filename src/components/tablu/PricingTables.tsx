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
      idealFor: 'Uso personal diario',
      features: ['Portátil', 'Ideal estudiantes'],
    },
    {
      size: 'Mediano',
      dimensions: '30 x 40 cm',
      idealFor: 'Home office',
      features: ['Ideal hogar', 'Mayor visibilidad'],
    },
    {
      size: 'Grande',
      dimensions: '40 x 60 cm',
      idealFor: 'Oficinas y reuniones',
      features: ['Alta visibilidad', 'Para equipos'],
      highlighted: true,
    },
    {
      size: 'Extra Grande',
      dimensions: '60 x 90 cm',
      idealFor: 'Uso corporativo',
      features: ['Máxima visibilidad', 'Proyectos grandes'],
    },
  ];

  const magneticPlanners = [
    {
      size: 'Pequeño',
      dimensions: '20 x 30 cm',
      idealFor: 'Refrigerador, recordatorios',
      features: ['Magnético fuerte', 'Fácil reposición'],
    },
    {
      size: 'Mediano',
      dimensions: '30 x 45 cm',
      idealFor: 'Cocina, hogar',
      features: ['Versátil', 'Espacios pequeños'],
      highlighted: true,
    },
    {
      size: 'Grande',
      dimensions: '45 x 60 cm',
      idealFor: 'Oficina colaborativa',
      features: ['Gran área', 'Para equipos'],
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
  }) => {
    const isAcrylic = title.includes('Acrílico');
    const bgGradient = isAcrylic
      ? 'from-[#FFD166]/30 via-white to-white'
      : 'from-[#88FFB4]/30 via-white to-white';
    const badgeColor = isAcrylic ? 'bg-[#2ECC71]' : 'bg-[#5762A2]';

    return (
    <div className="space-y-6">
      {/* Table Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-3 bg-white px-6 py-3 rounded-full shadow-lg"
        >
          <Icon className={cn('h-8 w-8', accentColor)} strokeWidth={1.5} aria-hidden="true" />
          <h3 className="text-2xl font-bold text-[#1a1a1a]">{title}</h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-white/90"
        >
          {title.includes('Acrílico') ? 'Elegante para cualquier espacio' : 'Práctico para superficies metálicas'}
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
              'relative p-6 rounded-2xl border-2 shadow-xl',
              'transition-all duration-300',
              'hover:shadow-2xl hover:-translate-y-2 hover:scale-105',
              planner.highlighted
                ? `border-transparent bg-gradient-to-br ${bgGradient}`
                : 'border-[#e0e0e0] bg-white hover:border-[#2ECC71]'
            )}
          >
            {/* Highlighted Badge */}
            {planner.highlighted && (
              <div className={cn(
                "absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-lg",
                badgeColor
              )}>
                Más Popular
              </div>
            )}

            {/* Size */}
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-[#1a1a1a] mb-1">{planner.size}</h4>
              <p className="text-sm text-[#5762A2] font-bold">{planner.dimensions}</p>
            </div>

            {/* Ideal For */}
            <div className={cn(
              "mb-4 p-4 rounded-xl",
              isAcrylic ? 'bg-[#FFF3CD]' : 'bg-[#D1F2EB]'
            )}>
              <p className="text-xs font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">
                IDEAL PARA:
              </p>
              <p className="text-sm text-[#1a1a1a] leading-relaxed">{planner.idealFor}</p>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {planner.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className={cn(
                    "h-5 w-5 flex-shrink-0 mt-0.5",
                    isAcrylic ? 'text-[#2ECC71]' : 'text-[#5762A2]'
                  )} strokeWidth={2} aria-hidden="true" />
                  <span className="text-[#1a1a1a] font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    );
  };

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-[#5762A2] relative overflow-hidden', className)}>
      {/* Decorative Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#FFD166]/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#2ECC71]/20 blur-3xl" />

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Encuentra tu Tamaño Ideal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-white/90 max-w-3xl mx-auto"
            >
              Ofrecemos planificadores en acrílico y magnéticos en diversos tamaños para adaptarse a tus necesidades
            </motion.p>
          </div>

          {/* Acrylic Planners Table */}
          <PlannerTable
            title="Planificadores de Acrílico"
            icon={Sparkles}
            planners={acrylicPlanners}
            accentColor="text-[#2ECC71]"
          />

          {/* Magnetic Planners Table */}
          <PlannerTable
            title="Planificadores Magnéticos"
            icon={Magnet}
            planners={magneticPlanners}
            accentColor="text-[#5762A2]"
          />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 shadow-2xl text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Necesitas un tamaño personalizado?
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Medidas personalizadas para proyectos corporativos.
            </p>
            <a
              href="https://wa.me/59167710595?text=Hola!%20Necesito%20un%20planificador%20en%20medida%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold',
                'bg-[#2ECC71] text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-[#27AE60] hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
              )}
            >
              Solicitar Cotización
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
