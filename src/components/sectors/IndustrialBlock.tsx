'use client';

import { cn } from '@/lib/utils';
import { Fuel, Factory, Leaf, Zap, Activity, Network, BatteryCharging, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

/**
 * Industrial Sectors Block (Capstone)
 *
 * "Adaptable a la Industria"
 *
 * Features:
 * - Dark theme background for contrast
 * - 7 industrial sector cards with hover-expand functionality
 * - Updated sectors including Renewables, Microgrids, EV Charging
 * - Icon-based visual hierarchy
 * - Expandable applications on hover
 * - CTA to Capstone page
 * - Top right Capstone logo
 */

interface IndustrialBlockProps {
  className?: string;
}

export function IndustrialBlock({ className }: IndustrialBlockProps) {
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);
  
  // Updated sectors list based on user request
  const industrialSectors = [
    {
      icon: Fuel,
      title: 'Petróleo & Gas',
      description: 'Soluciones para generación distribuida y operaciones en ambientes remotos con alta exigencia operativa.',
      applications: ['Sitios de extracción', 'Operaciones remotas', 'Alta exigencia'],
    },
    {
      icon: Leaf,
      title: 'Energías Renovables',
      description: 'Generación limpia a partir de biogás, gases residuales y energía renovable, optimizando recursos con impacto ambiental positivo.',
      applications: ['Biogás', 'Gases residuales', 'Energía renovable'],
    },
    {
      icon: Zap, // Using Zap for Efficiency/Power
      title: 'Eficiencia Energética & Cogeneración (CHP/CCHP)',
      description: 'Integración de generación eléctrica y térmica para maximizar eficiencia en procesos industriales y comerciales.',
      applications: ['Generación eléctrica', 'Generación térmica', 'Procesos industriales'],
    },
    {
      icon: Activity, // Using Activity for Critical/Health
      title: 'Fuente de Alimentación Crítica',
      description: 'Respaldo energético confiable para centros de datos, telecomunicaciones, salud y operaciones esenciales.',
      applications: ['Data centers', 'Telecomunicaciones', 'Salud', 'Operaciones esenciales'],
    },
    {
      icon: Network, // Using Network for Microgrids
      title: 'Microrredes (Microgrid)',
      description: 'Diseño de sistemas energéticos híbridos con integración de energías renovables y almacenamiento.',
      applications: ['Sistemas híbridos', 'Almacenamiento', 'Integración renovable'],
    },
    {
      icon: BatteryCharging, // Using BatteryCharging for EV
      title: 'Carga de Vehículos Eléctricos (EV Charging)',
      description: 'Soluciones modulares que apoyan la infraestructura de movilidad eléctrica con generación local eficiente.',
      applications: ['Movilidad eléctrica', 'Generación local', 'Infraestructura'],
    },
    {
      icon: Building2,
      title: 'Comercial e Industrial',
      description: 'Energía eficiente para plantas, manufactura, centros comerciales, hoteles y más.',
      applications: ['Plantas', 'Manufactura', 'Hoteles', 'Centros comerciales'],
    },
  ];

  return (
    <section id="sectors" className={cn('bg-[#1a1a1a] py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Logo */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="text-sm uppercase tracking-wider font-medium text-white/80">
                  ◆ Adaptable a la Industria
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Adaptable a la Industria.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg text-white/70 leading-relaxed"
              >
                Microturbinas de alta eficiencia para generación de energía distribuida, cogeneración y respaldo crítico
                en los sectores más exigentes.
              </motion.p>
            </div>

            {/* Capstone Logo - Top Right */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-white rounded-lg p-3 hidden md:block" // Flexible sizing
            >
                <div className="relative h-10 w-32 lg:h-12 lg:w-40">
                  <Image
                    src="/images/color_image.png"
                    alt="Capstone Green Energy"
                    fill
                    className="object-contain"
                  />
                </div>
            </motion.div>
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
                  <div className="pb-6 border-b border-white/10 group-hover:border-marca-green/50 transition-colors duration-300 h-full flex flex-col justify-between">
                   <div>
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
                    
                    {/* Simplified Description for non-hover state (optional, or just keep expanding behavior) */}
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
