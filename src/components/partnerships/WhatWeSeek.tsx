'use client';

import { cn } from '@/lib/utils';
import { Target, Users, Rocket, Award } from 'lucide-react';

/**
 * What We Seek Section (Partnerships)
 *
 * Features:
 * - Partnership criteria description
 * - Types of alliances we're interested in
 * - Visual imagery of diverse collaboration
 * - Professional tone
 * - Follows STYLE-GUIDE.md design patterns
 */

interface WhatWeSeekProps {
  className?: string;
}

export function WhatWeSeek({ className }: WhatWeSeekProps) {
  const partnershipTypes = [
    {
      icon: Target,
      title: 'Representaciones Exclusivas',
      description:
        'Buscamos marcas innovadoras de tecnología energética, equipamiento industrial o productos de organización personal que busquen entrar al mercado boliviano.',
    },
    {
      icon: Users,
      title: 'Alianzas Comerciales',
      description:
        'Distribuidores, integradores y consultores que complementen nuestro portafolio y amplíen nuestro alcance en sectores estratégicos.',
    },
    {
      icon: Rocket,
      title: 'Joint Ventures',
      description:
        'Proyectos conjuntos para desarrollar soluciones específicas, especialmente en energía renovable y eficiencia operacional.',
    },
    {
      icon: Award,
      title: 'Partners Estratégicos',
      description:
        'Empresas con visión a largo plazo que compartan nuestros valores y quieran co-crear valor en el mercado boliviano y regional.',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Qué Buscamos en una Alianza?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              No todas las alianzas son iguales. Buscamos partners que compartan nuestra visión de innovación,
              calidad y compromiso con el cliente.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Partnership Types */}
            <div className="space-y-6">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-lg bg-background border border-border hover:shadow-lg hover:border-marca-steel/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-marca-steel/10">
                      <type.icon className="h-6 w-6 text-marca-steel" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Criteria */}
            <div className="p-8 md:p-10 rounded-lg bg-gradient-to-br from-background to-muted/50 border-2 border-marca-steel/30 shadow-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Criterios de Selección
              </h3>
              <ul className="space-y-4">
                {[
                  'Productos o servicios innovadores con diferenciación clara',
                  'Compromiso con calidad y soporte post-venta',
                  'Visión de largo plazo y crecimiento sostenible',
                  'Valores corporativos alineados (integridad, transparencia, excelencia)',
                  'Disposición para trabajar colaborativamente',
                  'Capacidad de adaptación al mercado boliviano',
                  'Respaldo técnico y capacitación continua',
                ].map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-marca-green/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-marca-green">✓</span>
                      </div>
                    </div>
                    <span className="text-sm md:text-base text-foreground">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center p-8 rounded-lg bg-background border-l-4 border-marca-steel shadow-md">
            <p className="text-base md:text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold">¿Tu empresa cumple con estos criterios?</span> Nos encantaría conocer tu
              propuesta. Envíanos un mensaje detallando tu marca, productos/servicios, y cómo visualizas una alianza
              estratégica con Marca Fusión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
