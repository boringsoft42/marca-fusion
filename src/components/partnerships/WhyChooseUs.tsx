'use client';

import { cn } from '@/lib/utils';
import { Shield, Globe, Settings, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Why Choose Us Section (Partnerships) - Dark Theme
 *
 * Features:
 * - Dark background for contrast
 * - 5 icon-based trust points
 * - Clean layout with white text
 * - Green accents
 * - Follows visual pattern from Sectors page
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
        'Más de una década representando marcas globales en Bolivia. Trayectoria sólida con 71+ instalaciones de Capstone y cientos de clientes satisfechos.',
    },
    {
      icon: Globe,
      title: 'Conexión Internacional',
      description:
        'Respaldo de Altrix Solutions LLC (Estados Unidos) para operaciones internacionales. Puente directo entre Bolivia y fabricantes globales.',
    },
    {
      icon: Settings,
      title: 'Gestión Integral',
      description:
        'Soporte técnico local, logística, importación, instalación y mantenimiento. Nos encargamos de todo el ciclo para que tú te enfoques en crecer.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación Constante',
      description:
        'Buscamos y representamos tecnologías disruptivas. Desde microturbinas de última generación hasta productos con diseños únicos.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description:
        'Enfoque en KPIs y ROI. Nuestros clientes industriales reducen costos hasta 40% y nuestros usuarios mejoran su productividad notablemente.',
    },
  ];

  return (
    <section id="why-choose-us" className={cn('bg-[#1a1a1a] py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-sm uppercase tracking-wider font-medium text-white/80">
                ◆ Por Qué Elegirnos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Aliado Estratégico.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed"
            >
              Somos más que un intermediario. Somos un partner estratégico comprometido con el éxito mutuo.
            </motion.p>
          </div>

          {/* Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="group relative"
                >
                  <div className="pb-6 border-b border-white/10 group-hover:border-marca-green/50 transition-colors duration-300">
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon
                        className="h-8 w-8 text-white group-hover:text-marca-green transition-colors duration-300"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/70 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
