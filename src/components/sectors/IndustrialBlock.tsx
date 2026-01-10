'use client';

import { cn } from '@/lib/utils';
import { Fuel, Factory, Heart, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Industrial Sectors Block (Capstone)
 *
 * Features:
 * - Dark theme background for contrast
 * - 4 industrial sector cards with hover-expand functionality
 * - Oil & Gas, Industrial, Hospitalario, Comercial
 * - Icon-based visual hierarchy
 * - Expandable applications on hover
 * - CTA to Capstone page
 * - Green branding adapted for dark mode
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface IndustrialBlockProps {
  className?: string;
}

export function IndustrialBlock({ className }: IndustrialBlockProps) {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  const industrialSectors = [
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description:
        'Generación de energía eficiente en sitios de extracción y procesamiento. Soluciones para operaciones remotas y ambientes exigentes.',
      applications: ['Extracción petrolera', 'Procesamiento de gas', 'Operaciones offshore', 'Compresión de gas'],
    },
    {
      icon: Factory,
      title: 'Industrial',
      description:
        'Energía confiable para manufactura y procesos industriales. Cogeneración para maximizar eficiencia energética.',
      applications: ['Manufactura', 'Procesamiento de alimentos', 'Plantas químicas', 'Cogeneración CHP'],
    },
    {
      icon: Heart,
      title: 'Hospitalario',
      description:
        'Respaldo energético crítico para hospitales y centros médicos. Operación silenciosa y emisiones ultra bajas.',
      applications: ['Hospitales', 'Clínicas', 'Centros médicos', 'Laboratorios'],
    },
    {
      icon: Building2,
      title: 'Comercial',
      description:
        'Soluciones energéticas para edificios comerciales, hoteles y centros de datos. Eficiencia operativa y reducción de costos.',
      applications: ['Centros comerciales', 'Hoteles', 'Data centers', 'Edificios corporativos'],
    },
  ];

  return (
    <section id="sectors" className={cn('bg-[#1a1a1a] py-16 md:py-20 lg:py-24', className)}>
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
                ◆ Sectores Industriales
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Sectores Industriales.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed"
            >
              Microturbinas de alta eficiencia para generación de energía distribuida, cogeneración y respaldo crítico
              en los sectores más exigentes.
            </motion.p>
          </div>

          {/* Sectors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industrialSectors.map((sector, index) => {
              const Icon = sector.icon;
              const isHovered = hoveredSector === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  onMouseEnter={() => setHoveredSector(index)}
                  onMouseLeave={() => setHoveredSector(null)}
                  className="relative cursor-pointer group"
                >
                  <div className="pb-6 border-b border-white/10 group-hover:border-marca-green/50 transition-colors duration-300">
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon
                        className={cn(
                          'h-8 w-8 transition-colors duration-300',
                          isHovered ? 'text-marca-green' : 'text-white'
                        )}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className={cn(
                        'text-lg font-bold mb-3 transition-colors duration-300',
                        isHovered ? 'text-marca-green' : 'text-white'
                      )}
                    >
                      {sector.title}
                    </h4>

                    {/* Expandable Content */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-500 ease-in-out',
                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      {/* Description */}
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        {sector.description}
                      </p>

                      {/* Applications */}
                      <div>
                        <p className="text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                          Aplicaciones:
                        </p>
                        <ul className="space-y-1.5">
                          {sector.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-marca-green mt-0.5">✓</span>
                              <span className="text-white/80">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-8 md:p-10 rounded-2xl bg-[#2a2a2a] border border-white/5"
          >
            <h3 className="text-xl font-medium text-white mb-3">
              ¿Tu sector requiere soluciones energéticas confiables?
            </h3>
            <p className="text-[15px] text-white/70 mb-6 max-w-2xl mx-auto">
              Descubre cómo las microturbinas Capstone pueden transformar la eficiencia energética de tu operación
              industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capstone"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-[#0D6832] text-white transition-all duration-200 hover:bg-[#0a5528] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2"
              >
                Explorar Soluciones Capstone
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-transparent text-white border-2 border-white/20 transition-all duration-200 hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Solicitar Asesoría Técnica
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
