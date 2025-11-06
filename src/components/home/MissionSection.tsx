'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Cpu, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

/**
 * Marca Fusión Mission Section
 *
 * Features:
 * - Three value cards (Technology, Trust, Sustainability)
 * - Icon-based visual representation
 * - Blurred map background for global context
 * - CTA to About Us page
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
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
      color: 'marca-green',
      bgColor: 'bg-marca-green-light',
    },
    {
      icon: ShieldCheck,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia, integridad y compromiso con nuestros clientes.',
      color: 'marca-steel',
      bgColor: 'bg-marca-steel-light',
    },
    {
      icon: Leaf,
      title: 'Sostenibilidad',
      description: 'Promovemos soluciones ambientalmente responsables que cuidan nuestro planeta para las futuras generaciones.',
      color: 'marca-green',
      bgColor: 'bg-marca-green-light',
    },
  ];

  return (
    <section className={cn('relative py-16 md:py-24 overflow-hidden', className)}>
      {/* Blurred map background */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for world map - will be replaced with actual map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-50" />

        {/* Map grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestra Misión
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            En Marca Fusión conectamos Bolivia con el mundo a través de representaciones estratégicas de marcas líderes, impulsando innovación y desarrollo sostenible.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card content */}
              <div className="p-6 md:p-8 text-center">
                {/* Icon */}
                <div className="inline-flex mb-6">
                  <div
                    className={cn(
                      'p-4 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110',
                      value.bgColor
                    )}
                  >
                    <value.icon
                      className={cn('h-8 w-8', `text-${value.color}`)}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Decorative gradient on hover */}
              <div
                className={cn(
                  'absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100',
                  `bg-${value.color}`
                )}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/nosotros"
            className={cn(
              'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
              'bg-marca-green text-white shadow-md',
              'transition-all duration-200',
              'hover:bg-marca-green/90 hover:shadow-lg hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
            )}
          >
            Conocer más sobre nosotros
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
