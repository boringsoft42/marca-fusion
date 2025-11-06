'use client';

import { cn } from '@/lib/utils';
import { Shield, Globe, Settings, Lightbulb, TrendingUp } from 'lucide-react';

/**
 * Why Choose Us Section (Partnerships)
 *
 * Features:
 * - 5 icon-based trust points
 * - Trust, International Connection, Management, Innovation, Results
 * - Circular icon design
 * - Professional tone
 * - Follows STYLE-GUIDE.md design patterns
 */

interface WhyChooseUsProps {
  className?: string;
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Confianza Comprobada',
      description:
        'Más de una década representando marcas globales en Bolivia. Trayectoria sólida con 71+ instalaciones de Capstone y cientos de clientes satisfechos con Tablú.',
      color: 'from-marca-green to-marca-green/80',
    },
    {
      icon: Globe,
      title: 'Conexión Internacional',
      description:
        'Respaldo de Altrix Solutions LLC (Estados Unidos) para operaciones internacionales. Puente directo entre Bolivia y fabricantes globales.',
      color: 'from-blue-500 to-blue-400',
    },
    {
      icon: Settings,
      title: 'Gestión Integral',
      description:
        'Soporte técnico local, logística, importación, instalación y mantenimiento. Nos encargamos de todo el ciclo para que tú te enfoques en crecer.',
      color: 'from-marca-steel to-marca-steel/80',
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description:
        'Buscamos y representamos tecnologías disruptivas. Desde microturbinas de última generación hasta planificadores digitales con diseños únicos.',
      color: 'from-purple-500 to-purple-400',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description:
        'Enfoque en KPIs y ROI. Nuestros clientes industriales reducen costos hasta 40% y nuestros usuarios Tablú mejoran su productividad notablemente.',
      color: 'from-orange-500 to-orange-400',
    },
  ];

  return (
    <section id="why-choose-us" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por Qué Elegirnos como Aliado?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos más que un intermediario. Somos un partner estratégico comprometido con el éxito mutuo.
            </p>
          </div>

          {/* Trust Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-8 rounded-lg border border-border bg-background',
                  'transition-all duration-300',
                  'hover:shadow-2xl hover:-translate-y-1 hover:border-marca-steel/50'
                )}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={cn(
                      'inline-flex p-5 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 shadow-lg',
                      point.color
                    )}
                  >
                    <point.icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{point.title}</h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{point.description}</p>

                {/* Decorative element */}
                <div
                  className={cn(
                    'absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity duration-300',
                    point.color
                  )}
                />
              </div>
            ))}

            {/* Call-out Card (6th item spanning full width on mobile, or taking the remaining space) */}
            <div className="md:col-span-2 lg:col-span-3 p-8 rounded-lg bg-gradient-to-br from-marca-steel/10 to-background border-2 border-marca-steel/30">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Alianzas Basadas en Valores Compartidos
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  No buscamos simplemente proveedores o distribuidores. Buscamos partners que compartan nuestra
                  pasión por la excelencia, la innovación y el impacto positivo. Si tu organización valora la
                  integridad, la transparencia y el compromiso, conversemos sobre cómo podemos crecer juntos.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-marca-steel/20 text-sm font-semibold text-foreground border border-marca-steel/30">
                    Integridad
                  </span>
                  <span className="px-4 py-2 rounded-full bg-marca-steel/20 text-sm font-semibold text-foreground border border-marca-steel/30">
                    Transparencia
                  </span>
                  <span className="px-4 py-2 rounded-full bg-marca-steel/20 text-sm font-semibold text-foreground border border-marca-steel/30">
                    Compromiso
                  </span>
                  <span className="px-4 py-2 rounded-full bg-marca-steel/20 text-sm font-semibold text-foreground border border-marca-steel/30">
                    Excelencia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
