'use client';

import { cn } from '@/lib/utils';
import { Building2, Briefcase, Home, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Personal Sectors Block (Tablú)
 *
 * Features:
 * - 4 personal profile cards with hover-expand functionality
 * - Corporativo, Profesionales, Hogares, Emprendedores
 * - Icon-based visual hierarchy
 * - Expandable benefits on hover
 * - CTA to Tablú page
 * - Beige branding
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface PersonalBlockProps {
  className?: string;
}

export function PersonalBlock({ className }: PersonalBlockProps) {
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  const personalProfiles = [
    {
      icon: Building2,
      title: 'Corporativo',
      description:
        'Planificadores personalizados para equipos y oficinas. Tableros de gestión visual, OKRs y coordinación de proyectos.',
      benefits: [
        'Branding corporativo personalizado',
        'Pedidos al por mayor',
        'Tableros para salas de reunión',
        'Gestión visual de proyectos',
      ],
    },
    {
      icon: Briefcase,
      title: 'Profesionales',
      description:
        'Herramientas de organización para profesionales que buscan maximizar su productividad y gestionar múltiples responsabilidades.',
      benefits: [
        'Planificación de agenda',
        'Gestión de tiempo',
        'Seguimiento de objetivos',
        'Diseños profesionales',
      ],
    },
    {
      icon: Home,
      title: 'Hogares',
      description:
        'Organización familiar simplificada. Planificadores de comidas, tareas domésticas y actividades para toda la familia.',
      benefits: [
        'Calendario familiar',
        'Planificador de comidas',
        'Tareas para niños',
        'Lista de compras integrada',
      ],
    },
    {
      icon: Rocket,
      title: 'Emprendedores',
      description:
        'Gestión de proyectos, contenido digital y metas de negocio. Herramientas visuales para emprendedores en crecimiento.',
      benefits: [
        'Calendario de contenido',
        'Objetivos de negocio',
        'Gestión de proyectos',
        'Seguimiento financiero',
      ],
    },
  ];

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6"
              >
                Soluciones por Segmento
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-[#666] max-w-3xl leading-relaxed"
              >
                Planificadores diseñados para adaptarse a diferentes formas de trabajo, organización y vida diaria. Encuentra la solución ideal según tu necesidad.
              </motion.p>
            </div>

            {/* Tablú Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-48 h-28 md:w-64 md:h-40 rounded-2xl bg-white shadow-xl border-2 border-gray-50 flex items-center justify-center p-6">
                <Image
                  src="/images/Logo Tablu.png"
                  alt="Tablú"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </motion.div>
          </div>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {personalProfiles.map((profile, index) => {
              const Icon = profile.icon;
              const isHovered = hoveredProfile === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  onMouseEnter={() => setHoveredProfile(index)}
                  onMouseLeave={() => setHoveredProfile(null)}
                  className="relative cursor-pointer group"
                >
                  <div className="pb-6 border-b border-gray-200 group-hover:border-[#4A5BA8] transition-colors duration-300">
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon
                        className={cn(
                          'h-8 w-8 transition-colors duration-300',
                          isHovered ? 'text-[#4A5BA8]' : 'text-[#4A5BA8]'
                        )}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className={cn(
                        'text-lg font-bold mb-3 transition-colors duration-300',
                        isHovered ? 'text-[#4A5BA8]' : 'text-[#1a1a1a]'
                      )}
                    >
                      {profile.title}
                    </h4>

                    {/* Expandable Content */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-500 ease-in-out',
                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      {/* Description */}
                      <p className="text-sm text-sierra-text-secondary leading-relaxed mb-4">
                        {profile.description}
                      </p>

                      {/* Benefits */}
                      <div>
                        <p className="text-xs font-medium text-[#6b6b6b] mb-2 uppercase tracking-wider">
                          Beneficios:
                        </p>
                        <ul className="space-y-1.5">
                          {profile.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-[#4A5BA8] mt-0.5">✓</span>
                              <span className="text-[#6b6b6b]">{benefit}</span>
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
            className="text-center p-8 md:p-10 rounded-2xl bg-[#f5f5f5] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿Listo para organizar tu vida con estilo?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto">
              Explora nuestro catálogo completo de planificadores digitales en acrílico y magnéticos, diseñados
              específicamente para tu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tablu"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-[#0D6832] text-white transition-all duration-200 hover:bg-[#0a5528] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2"
              >
                Ver Catálogo Tablú
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/59167710595?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20planificadores%20Tablú"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-white text-[#1a1a1a] border-2 border-[#1a1a1a]/20 transition-all duration-200 hover:bg-gray-50 hover:border-[#1a1a1a]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
