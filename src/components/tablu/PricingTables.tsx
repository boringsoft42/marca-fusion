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
    <div className="space-y-8">
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
          {title.includes('Acrílico') 
            ? 'Elegante para cualquier espacio' 
            : 'Uso para Refrigeradores, tableros o cocinas'}
        </motion.p>
      </div>

      {/* Planners Grid */}
      <div className={cn(
        "grid gap-4",
        columns === 5
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          : planners.length === 2
            ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}>
        {planners.map((planner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: planner.delay || index * 0.1 }}
            className={cn(
              'relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group',
              planner.highlighted ? 'ring-4 ring-[#FFD166] ring-offset-2 ring-offset-[#5762A2]' : ''
            )}
          >
            {/* Header / Top Bar */}
            <div className={cn("h-3 w-full", planner.color || 'bg-gray-200')} />

            <div className="p-6 flex flex-col h-full">
                {/* Badge */}
                {planner.highlighted && (
                <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#FFD166] rounded-full shadow-md">
                    {planner.tag || 'Popular'}
                    </span>
                </div>
                )}

                {/* Size - Main Title */}
                <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Tamaño</p>
                    <h4 className="text-3xl font-black text-[#1a1a1a] tracking-tight">{planner.size}</h4>
                </div>
                
                {/* Divider with circle */}
                <div className="relative h-px w-full bg-gray-100 my-4">
                    <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full", planner.color)} />
                </div>

                {/* Format / Content */}
                <div className="flex-grow mb-6">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Formato</p>
                     <p className="text-[#5762A2] font-medium leading-relaxed">
                        {planner.format}
                     </p>
                     
                     {/* Features List for magnetic or if present */}
                     {planner.features && (
                        <ul className="mt-3 space-y-1.5">
                            {planner.features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className={cn("h-1.5 w-1.5 rounded-full", planner.color)} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                     )}
                </div>

                {/* Price */}
                {planner.price && (
                    <div className="mt-auto">
                        <div className={cn(
                            "rounded-2xl py-3 px-4 text-center transition-transform duration-300 group-hover:scale-105", 
                            "bg-gray-50 group-hover:bg-[#f0f0f0]"
                        )}>
                            <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Precio</p>
                            <p className={cn("text-2xl font-black", "text-[#1a1a1a]")}>
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
              className="text-3xl md:text-4xl font-bold text-white mb-4"
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
