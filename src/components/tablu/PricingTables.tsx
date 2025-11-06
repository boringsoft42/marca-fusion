'use client';

import { cn } from '@/lib/utils';
import { Check, Sparkles, Magnet } from 'lucide-react';

/**
 * Tablú Pricing Tables
 *
 * Features:
 * - Two comparison tables (Acrylic vs Magnetic)
 * - Size options with dimensions
 * - Ideal use cases for each size
 * - Responsive table design
 * - Visual differentiation between types
 * - Follows STYLE-GUIDE.md design patterns
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
        <div className="inline-flex items-center gap-3 mb-3">
          <Icon className={cn('h-8 w-8', accentColor)} aria-hidden="true" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-muted-foreground">
          {title.includes('Acrílico') ? 'Cristalino y elegante, ideal para cualquier espacio' : 'Flexible y práctico, adhiere a cualquier superficie metálica'}
        </p>
      </div>

      {/* Planners Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {planners.map((planner, index) => (
          <div
            key={index}
            className={cn(
              'relative p-6 rounded-lg border-2 bg-background',
              'transition-all duration-300',
              'hover:shadow-xl hover:-translate-y-1',
              planner.highlighted
                ? `border-${accentColor.replace('text-', '')} shadow-lg scale-105`
                : 'border-border hover:border-marca-beige/50'
            )}
          >
            {/* Highlighted Badge */}
            {planner.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-marca-beige text-white text-xs font-bold shadow-md">
                Más Popular
              </div>
            )}

            {/* Size */}
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-foreground mb-1">{planner.size}</h4>
              <p className="text-sm text-marca-beige font-semibold">{planner.dimensions}</p>
            </div>

            {/* Ideal For */}
            <div className="mb-4 p-3 rounded-md bg-muted/50">
              <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                Ideal para:
              </p>
              <p className="text-sm text-foreground leading-relaxed">{planner.idealFor}</p>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {planner.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-marca-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encuentra tu Tamaño Ideal
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos planificadores en acrílico y magnéticos en diversos tamaños para adaptarse a tus necesidades
            </p>
          </div>

          {/* Acrylic Planners Table */}
          <PlannerTable
            title="Planificadores de Acrílico"
            icon={Sparkles}
            planners={acrylicPlanners}
            accentColor="text-marca-beige"
          />

          {/* Magnetic Planners Table */}
          <PlannerTable
            title="Planificadores Magnéticos"
            icon={Magnet}
            planners={magneticPlanners}
            accentColor="text-marca-steel"
          />

          {/* Additional Info */}
          <div className="mt-12 p-6 md:p-8 rounded-lg bg-background border-l-4 border-marca-beige shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿Necesitas un tamaño personalizado?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              Ofrecemos planificadores en medidas personalizadas para proyectos corporativos o necesidades específicas.
              Contáctanos para cotizaciones especiales.
            </p>
            <a
              href="https://wa.me/59167710595?text=Hola!%20Necesito%20un%20planificador%20en%20medida%20personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                'bg-marca-beige text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-marca-beige/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
              )}
            >
              Solicitar Cotización Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
