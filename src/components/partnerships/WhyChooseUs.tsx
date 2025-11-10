'use client';

import { cn } from '@/lib/utils';
import { Shield, Globe, Settings, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedTabs } from '@/components/ui/animated-tabs';

/**
 * Why Choose Us Section (Partnerships) - Sierra Style with Animated Tabs
 *
 * Features:
 * - 5 icon-based trust points with animated tabs
 * - Sierra white background with clean design
 * - Framer Motion scroll animations
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface WhyChooseUsProps {
  className?: string;
}

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  const trustPoints = [
    {
      id: 'confianza',
      icon: Shield,
      title: 'Confianza Comprobada',
      description:
        'Más de una década representando marcas globales en Bolivia. Trayectoria sólida con 71+ instalaciones de Capstone y cientos de clientes satisfechos con Tablú.',
    },
    {
      id: 'conexion',
      icon: Globe,
      title: 'Conexión Internacional',
      description:
        'Respaldo de Altrix Solutions LLC (Estados Unidos) para operaciones internacionales. Puente directo entre Bolivia y fabricantes globales.',
    },
    {
      id: 'gestion',
      icon: Settings,
      title: 'Gestión Integral',
      description:
        'Soporte técnico local, logística, importación, instalación y mantenimiento. Nos encargamos de todo el ciclo para que tú te enfoques en crecer.',
    },
    {
      id: 'innovacion',
      icon: Lightbulb,
      title: 'Innovación Constante',
      description:
        'Buscamos y representamos tecnologías disruptivas. Desde microturbinas de última generación hasta planificadores digitales con diseños únicos.',
    },
    {
      id: 'resultados',
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description:
        'Enfoque en KPIs y ROI. Nuestros clientes industriales reducen costos hasta 40% y nuestros usuarios Tablú mejoran su productividad notablemente.',
    },
  ];

  const tabs = trustPoints.map((point) => ({
    id: point.id,
    label: point.title,
    content: (
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 py-4 sm:py-6 px-2">
        {/* Icon */}
        <div className="inline-flex">
          <div className="p-4 sm:p-6 rounded-2xl bg-sierra-green/10">
            <point.icon
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sierra-green"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-sierra-text-primary">
          {point.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-[15px] md:text-base text-sierra-text-secondary leading-relaxed max-w-2xl">
          {point.description}
        </p>
      </div>
    ),
  }));

  return (
    <section id="why-choose-us" className={cn('py-12 sm:py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-3 sm:mb-4">
              ¿Por Qué Elegirnos como Aliado?
            </h2>
            <p className="text-sm sm:text-[15px] md:text-base text-sierra-text-secondary max-w-3xl mx-auto leading-relaxed">
              Somos más que un intermediario. Somos un partner estratégico comprometido con el éxito mutuo.
            </p>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <AnimatedTabs tabs={tabs} defaultTab="confianza" className="w-full max-w-4xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
