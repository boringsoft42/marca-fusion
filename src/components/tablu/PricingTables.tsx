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
      size: '30 x 20 cm',
      format: 'To Do List, hábitos, menu',
      price: 'Bs 89,00',
      color: 'bg-[#FF7777]', // Coral
      delay: 0.1,
    },
    {
      size: '40 x 30 cm',
      format: 'Semanal',
      price: 'Bs 160,00',
      color: 'bg-[#FFD166]', // Yellow
      delay: 0.2,
    },
    {
      size: '60 x 40 cm',
      format: 'Mensual, semanal y pendientes',
      price: 'Bs 260,00',
      color: 'bg-[#2ECC71]', // Green
      highlighted: true,
      tag: 'Más Popular',
      delay: 0.3,
    },
    {
      size: '70 x 45 cm',
      format: 'Mensual, seminal y pendientes, Kanban',
      price: 'Bs 360,00',
      color: 'bg-[#4A5BA8]', // Blue
      delay: 0.4,
    },
    {
      size: '80 x 60 cm',
      format: 'Anual, todos los formatos en 1',
      price: 'Bs 460,00',
      color: 'bg-[#9B59B6]', // Purple
      delay: 0.5,
    },
  ];

  const magneticPlanners = [
    {
      size: '30 x 20 cm',
      format: 'Menú semanal, lista de compras, pendientes',
      price: 'Bs 210,00',
      color: 'bg-[#FF7777]',
      delay: 0.1,
    },
    {
      size: '40 x 30 cm',
      format: 'Menú semanal, mensual.',
      price: 'Bs 280,00',
      color: 'bg-[#FFD166]',
      delay: 0.2,
      highlighted: true,
      tag: 'Más Vendido',
    },
  ];

  interface Planner {
    size: string;
    format: string;
    price: string;
    color: string;
    delay: number;
    highlighted?: boolean;
    tag?: string;
    features?: string[];
  }

  const PlannerTable = ({
    title,
    icon: Icon,
    planners,
    accentColor,
    columns = 4
  }: {
    title: string;
    icon: React.ElementType;
    planners: Planner[];
    accentColor: string;
    columns?: number;
  }) => {
    return (
    <div className="space-y-6">
      {/* Table Header - Compact */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-2 bg-white px-5 py-2 rounded-full shadow-md"
        >
          <Icon className={cn('h-5 w-5', accentColor)} strokeWidth={1.5} aria-hidden="true" />
          <h3 className="text-lg font-bold text-[#1a1a1a]">
            {title.includes('Acrílico') ? (
              <>Planificadores de <span className="font-kaushan text-[#2ECC71] lowercase font-normal">acrílico</span></>
            ) : (
              <>Planners <span className="font-kaushan text-[#5762A2] lowercase font-normal">imantados</span></>
            )}
          </h3>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-white/80"
        >
          {title.includes('Acrílico')
            ? 'Elegante para cualquier espacio'
            : 'Uso para Refrigeradores, tableros o cocinas'}
        </motion.p>
      </div>

      {/* Planners Grid - Compact */}
      <div className={cn(
        "grid gap-3",
        columns === 5
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          : planners.length === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      )}>
        {planners.map((planner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: planner.delay || index * 0.08 }}
            className={cn(
              'relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group',
              planner.highlighted ? 'ring-2 ring-[#FFD166]' : ''
            )}
          >
            {/* Header / Top Bar - Thinner */}
            <div className={cn("h-2 w-full", planner.color || 'bg-gray-200')} />

            <div className="p-4 flex flex-col h-full">
                {/* Badge - Smaller */}
                {planner.highlighted && (
                <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white bg-[#FFD166] rounded-full">
                    {planner.tag || 'Popular'}
                    </span>
                </div>
                )}

                {/* Size - Compact */}
                <div className="mb-3">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Tamaño</p>
                    <h4 className="text-xl font-bold text-[#1a1a1a]">{planner.size}</h4>
                </div>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Price - Compact */}
                {planner.price && (
                    <div className="mt-auto">
                        <div className="rounded-xl py-2 px-3 text-center bg-gray-50">
                            <p className="text-[10px] text-gray-500 uppercase font-semibold mb-0.5">Precio</p>
                            <p className="text-lg font-bold text-[#1a1a1a]">
                                {planner.price}
                            </p>
                        </div>
                    </div>
                )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    );
  };

  return (
    <section className={cn('py-12 md:py-16 bg-[#5762A2] relative overflow-hidden', className)}>
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#FFD166]/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#2ECC71]/15 blur-3xl" />

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Section Header - Compact */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Encuentra tu <span className="font-kaushan text-[#FFD166] lowercase font-normal">tamaño ideal</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-base text-white/80 max-w-2xl mx-auto"
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
            columns={5}
          />

          <PlannerTable
            title="Planners Imantados (2 modelos disponibles)"
            icon={Magnet}
            planners={magneticPlanners}
            accentColor="text-[#5762A2]"
          />


        </div>
      </div>
    </section>
  );
}
