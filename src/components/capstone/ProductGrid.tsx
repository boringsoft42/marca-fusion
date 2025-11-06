'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Zap, Info, ExternalLink } from 'lucide-react';

/**
 * Capstone Product Grid
 *
 * Features:
 * - Displays Capstone microturbine models (C65, C200S, C600S, C800S, C1000S)
 * - Model specifications and applications
 * - Expandable detail cards
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ProductGridProps {
  className?: string;
}

interface Product {
  model: string;
  capacity: string;
  efficiency: string;
  applications: string[];
  description: string;
  keyFeatures: string[];
}

export function ProductGrid({ className }: ProductGridProps) {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      model: 'C65',
      capacity: '65 kW',
      efficiency: 'Hasta 28%',
      applications: ['Pequeña Industria', 'Comercial', 'Respaldo'],
      description: 'Solución compacta ideal para aplicaciones comerciales y pequeñas industrias que requieren generación distribuida confiable.',
      keyFeatures: [
        'Diseño compacto y modular',
        'Operación con múltiples combustibles',
        'Bajo nivel de ruido',
        'Instalación simplificada',
      ],
    },
    {
      model: 'C200S',
      capacity: '200 kW',
      efficiency: 'Hasta 33%',
      applications: ['Industrial', 'Cogeneración', 'Hospitalario'],
      description: 'Modelo versátil para aplicaciones industriales medianas, ideal para cogeneración y respaldo crítico.',
      keyFeatures: [
        'Alta eficiencia eléctrica',
        'Capacidad de cogeneración',
        'Ultra bajas emisiones',
        'Operación continua 24/7',
      ],
    },
    {
      model: 'C600S',
      capacity: '600 kW',
      efficiency: 'Hasta 33%',
      applications: ['Gran Industria', 'Oil & Gas', 'Minería'],
      description: 'Potencia robusta para aplicaciones industriales exigentes con alta demanda energética.',
      keyFeatures: [
        'Alta capacidad de generación',
        'Ideal para instalaciones remotas',
        'Configuración en paralelo disponible',
        'Mínimo mantenimiento',
      ],
    },
    {
      model: 'C800S',
      capacity: '800 kW',
      efficiency: 'Hasta 33%',
      applications: ['Oil & Gas', 'Industrial Pesada', 'Procesamiento'],
      description: 'Solución de alta potencia para operaciones industriales de gran escala y procesos continuos.',
      keyFeatures: [
        'Máxima potencia en formato compacto',
        'Operación con gas de proceso',
        'Alta disponibilidad',
        'Recuperación de calor eficiente',
      ],
    },
    {
      model: 'C1000S',
      capacity: '1 MW',
      efficiency: 'Hasta 33%',
      applications: ['Mega Industria', 'Utilities', 'Grandes Instalaciones'],
      description: 'La solución más potente de Capstone, diseñada para las aplicaciones industriales más demandantes.',
      keyFeatures: [
        'Máxima capacidad de generación',
        'Configuración modular escalable',
        'Eficiencia óptima en cogeneración',
        'Control avanzado y monitoreo remoto',
      ],
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Línea de Productos Capstone
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluciones de microturbinas desde 65 kW hasta 1 MW para diversas aplicaciones industriales y comerciales
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-background border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-border bg-marca-green-light/30">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-marca-green" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {product.model}
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-marca-green text-white text-xs font-bold">
                      {product.capacity}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Eficiencia: {product.efficiency}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Applications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Aplicaciones:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => setExpandedProduct(expandedProduct === product.model ? null : product.model)}
                    className={cn(
                      'w-full mt-4 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold',
                      'bg-marca-green/10 text-marca-green border border-marca-green/30',
                      'transition-all duration-200',
                      'hover:bg-marca-green hover:text-white',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green'
                    )}
                  >
                    {expandedProduct === product.model ? 'Ocultar Detalles' : 'Ver Detalles'}
                    <Info className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {/* Expanded Details */}
                  {expandedProduct === product.model && (
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border animate-in slide-in-from-top-2 fade-in-0">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Características Clave:
                      </h4>
                      <ul className="space-y-2">
                        {product.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-marca-green mt-0.5">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Capstone Website */}
          <div className="text-center">
            <a
              href={process.env.NEXT_PUBLIC_CAPSTONE_URL || 'https://www.capstonegreenenergy.com'}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-background text-foreground border-2 border-border shadow-md',
                'transition-all duration-200',
                'hover:bg-muted hover:shadow-lg hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              Ver Especificaciones Completas en Capstone.com
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
