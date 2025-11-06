'use client';

import { cn } from '@/lib/utils';
import { Fuel, Factory, Heart, Building2, ArrowRight } from 'lucide-react';

/**
 * Industrial Sectors Block (Capstone)
 *
 * Features:
 * - 4 industrial sector cards
 * - Oil & Gas, Industrial, Hospitalario, Comercial
 * - Icon-based visual hierarchy
 * - CTA to Capstone page
 * - Green branding
 * - Follows STYLE-GUIDE.md design patterns
 */

interface IndustrialBlockProps {
  className?: string;
}

export function IndustrialBlock({ className }: IndustrialBlockProps) {
  const industrialSectors = [
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description:
        'Generación de energía eficiente en sitios de extracción y procesamiento. Soluciones para operaciones remotas y ambientes exigentes.',
      applications: ['Extracción petrolera', 'Procesamiento de gas', 'Operaciones offshore', 'Compresión de gas'],
      color: 'from-orange-500 to-orange-400',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description:
        'Energía confiable para manufactura y procesos industriales. Cogeneración para maximizar eficiencia energética.',
      applications: ['Manufactura', 'Procesamiento de alimentos', 'Plantas químicas', 'Cogeneración CHP'],
      color: 'from-marca-steel to-marca-steel/80',
    },
    {
      icon: Heart,
      title: 'Hospitalario',
      description:
        'Respaldo energético crítico para hospitales y centros médicos. Operación silenciosa y emisiones ultra bajas.',
      applications: ['Hospitales', 'Clínicas', 'Centros médicos', 'Laboratorios'],
      color: 'from-red-500 to-red-400',
    },
    {
      icon: Building2,
      title: 'Comercial',
      description:
        'Soluciones energéticas para edificios comerciales, hoteles y centros de datos. Eficiencia operativa y reducción de costos.',
      applications: ['Centros comerciales', 'Hoteles', 'Data centers', 'Edificios corporativos'],
      color: 'from-blue-500 to-blue-400',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marca-green/10 border border-marca-green/20 mb-4">
              <Factory className="h-5 w-5 text-marca-green" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-green">Capstone Green Energy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sectores Industriales
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Microturbinas de alta eficiencia para generación de energía distribuida, cogeneración y respaldo crítico
              en los sectores más exigentes.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industrialSectors.map((sector, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-lg border border-border bg-background overflow-hidden',
                  'transition-all duration-300',
                  'hover:shadow-2xl hover:-translate-y-2 hover:border-marca-green/50'
                )}
              >
                {/* Gradient background (visible on hover) */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                    sector.color
                  )}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={cn(
                        'inline-flex p-4 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110',
                        sector.color
                      )}
                    >
                      <sector.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{sector.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.description}</p>

                  {/* Applications */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Aplicaciones:
                    </p>
                    <ul className="space-y-1.5">
                      {sector.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-marca-green mt-0.5 font-bold">✓</span>
                          <span className="text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-marca-green" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center p-8 md:p-10 rounded-lg bg-gradient-to-br from-marca-green/10 to-background border border-marca-green/30">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ¿Tu sector requiere soluciones energéticas confiables?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Descubre cómo las microturbinas Capstone pueden transformar la eficiencia energética de tu operación
              industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capstone"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-marca-green text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                )}
              >
                Explorar Soluciones Capstone
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-background text-foreground border-2 border-marca-green/30',
                  'transition-all duration-200',
                  'hover:bg-marca-green/5 hover:border-marca-green/50 hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                )}
              >
                Solicitar Asesoría Técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
