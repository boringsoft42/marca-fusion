'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck, Lightbulb, Eye, Repeat, Award, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Mission, Vision & Values Section - Bento Grid Dark Theme
 *
 * Features:
 * - Bento Grid layout with Mission, Vision, and Values
 * - Dark background (#1a1a1a)
 * - Condensed, impactful content
 * - Responsive grid with varying card sizes
 * - Follows dark theme pattern from Footer and CorporateGroupSection
 */

interface MissionVisionValuesProps {
  className?: string;
}

export function MissionVisionValues({ className }: MissionVisionValuesProps) {
  const missionVision = [
    {
      Icon: Target,
      name: 'Misión',
      description: 'Conectar en Bolivia a personas, empresas e industrias con marcas nacionales e internacionales que aporten innovación, confianza y sostenibilidad. Nuestro compromiso es ofrecer soluciones confiables y de calidad, impulsando el desarrollo local y la competitividad del país.',
    },
    {
      Icon: Rocket,
      name: 'Visión',
      description: 'Ser reconocidos en Bolivia como una empresa referente en innovación y confianza, capaz de conectar industrias y personas con partners comerciales globales que aporten calidad, tecnología y crecimiento sostenible.',
    },
  ];

  const values = [
    {
      Icon: ShieldCheck,
      name: 'Confianza',
      description: 'Cumplimos cada compromiso con integridad y transparencia.',
    },
    {
      Icon: Lightbulb,
      name: 'Innovación',
      description: 'Buscamos soluciones modernas que transformen desafíos en oportunidades.',
    },
    {
      Icon: Eye,
      name: 'Transparencia',
      description: 'Construimos relaciones sólidas basadas en la claridad y la ética.',
    },
    {
      Icon: Repeat,
      name: 'Adaptabilidad',
      description: 'Evolucionamos con el mercado y las necesidades de nuestros clientes.',
    },
    {
      Icon: Award,
      name: 'Compromiso',
      description: 'Actuamos con responsabilidad en cada paso de nuestro trabajo.',
    },
  ];

  return (
    <section className={cn('py-12 md:py-16 lg:py-20 bg-[#1a1a1a]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Misión y Visión */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {missionVision.map((item, idx) => {
              const Icon = item.Icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative p-8 md:p-10 rounded-sm bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-marca-green/10 to-transparent rounded-sm" />
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-xl bg-marca-green/20 mb-4">
                      <Icon className="h-6 w-6 text-marca-green" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{item.name}</h3>
                    <p className="text-[15px] text-white/80 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Valores */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-3">
              Valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.Icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-sm bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300"
                >
                  <div className="inline-flex p-2 rounded-lg bg-marca-green/20 mb-3">
                    <Icon className="h-5 w-5 text-marca-green" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.name}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
