'use client';

import { cn } from '@/lib/utils';
import { Shield, Globe, Settings, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Why Choose Us Section (Partnerships) - Sierra Style with Animations
 *
 * Features:
 * - 5 icon-based trust points with animations
 * - Sierra white background with clean cards
 * - Framer Motion scroll animations
 * - Follows STYLE-GUIDE-SIERRA.md
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
        'Buscamos y representamos tecnologías disruptivas. Desde microturbinas de última generación hasta planificadores digitales con diseños únicos.',
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description:
        'Enfoque en KPIs y ROI. Nuestros clientes industriales reducen costos hasta 40% y nuestros usuarios Tablú mejoran su productividad notablemente.',
    },
  ];

  return (
    <section id="why-choose-us" className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-4">
              ¿Por Qué Elegirnos como Aliado?
            </h2>
            <p className="text-[15px] md:text-base text-sierra-text-secondary max-w-3xl mx-auto leading-relaxed">
              Somos más que un intermediario. Somos un partner estratégico comprometido con el éxito mutuo.
            </p>
          </motion.div>

          {/* Trust Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-10 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="inline-flex mb-6">
                  <div className="p-4 rounded-2xl bg-sierra-green/10">
                    <point.icon
                      className="h-8 w-8 text-sierra-green"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-sierra-text-primary mb-3">{point.title}</h3>

                {/* Description */}
                <p className="text-[15px] text-sierra-text-secondary leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
