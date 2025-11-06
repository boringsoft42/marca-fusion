'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck, Lightbulb, Eye, Repeat, Award } from 'lucide-react';

/**
 * Marca Fusión Mission, Vision & Values Section
 *
 * Features:
 * - Mission statement
 * - Vision statement
 * - 5 core values with icons (Trust, Innovation, Transparency, Adaptability, Commitment)
 * - Responsive grid layout
 * - Brand color accents
 * - Follows STYLE-GUIDE.md design patterns
 */

interface MissionVisionValuesProps {
  className?: string;
}

export function MissionVisionValues({ className }: MissionVisionValuesProps) {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en transparencia, integridad y cumplimiento de nuestros compromisos.',
      color: 'marca-green',
      bgColor: 'bg-marca-green-light',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas soluciones y tecnologías que generen valor para nuestros clientes.',
      color: 'marca-steel',
      bgColor: 'bg-marca-steel-light',
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Operamos con honestidad y claridad en todas nuestras relaciones comerciales y operaciones.',
      color: 'marca-beige',
      bgColor: 'bg-marca-beige-light',
    },
    {
      icon: Repeat,
      title: 'Adaptabilidad',
      description: 'Nos ajustamos ágilmente a las necesidades cambiantes del mercado y de nuestros clientes.',
      color: 'marca-steel',
      bgColor: 'bg-marca-steel-light',
    },
    {
      icon: Award,
      title: 'Compromiso',
      description: 'Nos dedicamos completamente al éxito de nuestros clientes y al desarrollo de Bolivia.',
      color: 'marca-green',
      bgColor: 'bg-marca-green-light',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        {/* Mission & Vision */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-lg bg-background border border-border shadow-md">
              <div className="mb-4">
                <div className="inline-flex px-4 py-2 rounded-full bg-marca-green-light border border-marca-green/30 mb-4">
                  <span className="text-sm font-bold text-marca-green uppercase tracking-wider">
                    Misión
                  </span>
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Conectar Bolivia con tecnologías innovadoras de clase mundial, proporcionando soluciones que impulsen el desarrollo sostenible y la competitividad de nuestros clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-lg bg-background border border-border shadow-md">
              <div className="mb-4">
                <div className="inline-flex px-4 py-2 rounded-full bg-marca-steel-light border border-marca-steel/30 mb-4">
                  <span className="text-sm font-bold text-marca-steel uppercase tracking-wider">
                    Visión
                  </span>
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Ser el referente en Bolivia como representantes de marcas internacionales líderes, reconocidos por nuestra excelencia, confiabilidad y compromiso con la innovación.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestras acciones y decisiones cada día
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={cn(
                  'group relative overflow-hidden rounded-lg bg-background border border-border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
                  index === 4 && 'sm:col-span-2 lg:col-span-1' // Center the 5th card on mobile
                )}
              >
                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className="inline-flex mb-4">
                    <div className={cn('p-4 rounded-full transition-all duration-300', value.bgColor)}>
                      <value.icon
                        className={cn('h-7 w-7 transition-colors duration-300', `text-${value.color}`)}
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

                {/* Bottom accent line */}
                <div
                  className={cn(
                    'absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100',
                    `bg-${value.color}`
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
