'use client';

import { cn } from '@/lib/utils';
import { Fuel, Factory, Heart, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Industrial Sectors Block (Capstone)
 *
 * Features:
 * - 4 industrial sector cards with hover-expand functionality
 * - Oil & Gas, Industrial, Hospitalario, Comercial
 * - Icon-based visual hierarchy
 * - Expandable applications on hover
 * - CTA to Capstone page
 * - Green branding
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
    <section id="sectors" className={cn('bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-[#0d6832]/10 border border-[#0d6832]/20 mb-6"
            >
              <Factory className="h-5 w-5 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[15px] font-medium text-[#0d6832]">Capstone Green Energy</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] font-normal text-[#1a1a1a] mb-4"
            >
              Sectores Industriales
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed"
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
                  className="relative cursor-pointer"
                >
                  <div className="pb-6">
                    {/* Icon */}
                    <div className="mb-4">
                      <div
                        className={cn(
                          'inline-flex p-4 rounded-full transition-all duration-300',
                          isHovered ? 'bg-[#0d6832]' : 'bg-[#0d6832]/10'
                        )}
                      >
                        <Icon
                          className={cn(
                            'h-7 w-7 transition-colors duration-300',
                            isHovered ? 'text-white' : 'text-[#0d6832]'
                          )}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className={cn(
                        'text-lg font-bold mb-3 transition-colors duration-300',
                        isHovered ? 'text-[#0d6832]' : 'text-sierra-text-primary'
                      )}
                    >
                      {sector.title}
                    </h4>

                    {/* Bottom Line Indicator */}
                    <div
                      className={cn(
                        'h-1 w-full mb-4 transition-all duration-300',
                        isHovered ? 'bg-[#0d6832]' : 'bg-gray-200'
                      )}
                    />

                    {/* Expandable Content */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-500 ease-in-out',
                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      {/* Description */}
                      <p className="text-sm text-sierra-text-secondary leading-relaxed mb-4">
                        {sector.description}
                      </p>

                      {/* Applications */}
                      <div>
                        <p className="text-xs font-medium text-[#6b6b6b] mb-2 uppercase tracking-wider">
                          Aplicaciones:
                        </p>
                        <ul className="space-y-1.5">
                          {sector.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-[#0d6832] mt-0.5">✓</span>
                              <span className="text-[#6b6b6b]">{app}</span>
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
            className="text-center p-8 md:p-10 rounded-2xl bg-[#ebe8e3] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿Tu sector requiere soluciones energéticas confiables?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto">
              Descubre cómo las microturbinas Capstone pueden transformar la eficiencia energética de tu operación
              industrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capstone"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-[15px] font-medium bg-[#0d6832] text-white shadow-lg transition-all duration-200 hover:bg-[#0a5528] hover:shadow-xl"
              >
                Explorar Soluciones Capstone
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-[15px] font-medium bg-white text-[#1a1a1a] border-2 border-[#0d6832]/30 transition-all duration-200 hover:bg-[#0d6832]/5 hover:border-[#0d6832]/50"
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
