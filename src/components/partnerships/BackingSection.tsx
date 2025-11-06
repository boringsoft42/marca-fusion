'use client';

import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

/**
 * Backing Section (Partnerships)
 *
 * Features:
 * - Brand representation showcase
 * - Capstone and Tablú logos/mentions
 * - Trust indicators
 * - Professional presentation
 * - Follows STYLE-GUIDE.md design patterns
 */

interface BackingSectionProps {
  className?: string;
}

export function BackingSection({ className }: BackingSectionProps) {
  const brandRepresentations = [
    {
      name: 'Capstone Green Energy',
      description: 'Microturbinas de cogeneración y generación distribuida',
      region: 'Estados Unidos',
      since: '2010',
      link: 'https://www.capstonegreenenergy.com',
    },
    {
      name: 'Tablú',
      description: 'Planificadores digitales en acrílico y magnéticos',
      region: 'Perú & Bolivia',
      since: '2020',
      link: 'https://tablu.com.pe',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marca-green/10 border border-marca-green/20 mb-4">
              <Award className="h-5 w-5 text-marca-green" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-green">Respaldo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Marcas que Representamos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Representamos marcas globales reconocidas por su innovación, calidad y compromiso con la excelencia.
            </p>
          </div>

          {/* Brand Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {brandRepresentations.map((brand, index) => (
              <div
                key={index}
                className="group p-8 md:p-10 rounded-lg bg-background border-2 border-border hover:border-marca-green/50 hover:shadow-2xl transition-all duration-300"
              >
                {/* Brand Logo Placeholder */}
                <div className="mb-6 h-16 flex items-center justify-center">
                  <div className="text-2xl font-bold text-marca-green">
                    {brand.name}
                  </div>
                  {/* Replace with actual logo: */}
                  {/* <Image src={`/images/logos/${brand.name.toLowerCase()}-logo.svg`} alt={brand.name} width={200} height={60} /> */}
                </div>

                {/* Description */}
                <p className="text-base text-foreground mb-4 font-medium">{brand.description}</p>

                {/* Details */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Región:</span>
                    {brand.region}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Desde:</span>
                    {brand.since}
                  </div>
                </div>

                {/* External Link */}
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-marca-green hover:text-marca-green/80 transition-colors"
                >
                  Visitar sitio oficial
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center p-8 rounded-lg bg-marca-green/5 border border-marca-green/20">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿Tu Marca Puede Ser la Siguiente?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos siempre abiertos a evaluar nuevas representaciones que aporten valor al mercado boliviano
              y se alineen con nuestra filosofía de excelencia e innovación.
            </p>
            <a
              href="/contacto"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-marca-green text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
              )}
            >
              Proponer Representación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
