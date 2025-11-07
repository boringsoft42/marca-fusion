'use client';

import { cn } from '@/lib/utils';
import { Building2, Briefcase, Home, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Personal Sectors Block (Tablú)
 *
 * Features:
 * - 4 personal profile cards
 * - Corporativo, Profesionales, Hogares, Emprendedores
 * - Icon-based visual hierarchy
 * - CTA to Tablú page
 * - Beige branding
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface PersonalBlockProps {
  className?: string;
}

export function PersonalBlock({ className }: PersonalBlockProps) {
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
    <section className={cn('bg-[#ebe8e3] py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-white/80 border border-[#6b6b6b]/20 mb-6"
            >
              <Home className="h-5 w-5 text-[#6b6b6b]" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[15px] font-medium text-[#6b6b6b]">Tablú Bolivia</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] font-normal text-[#1a1a1a] mb-4"
            >
              Perfiles Personales
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed"
            >
              Planificadores digitales diseñados para cada estilo de vida. Organiza tu día, tu semana y tus metas
              con herramientas visuales que se adaptan a ti.
            </motion.p>
          </div>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {personalProfiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group relative p-6 rounded-2xl border border-[#e0e0e0] bg-white overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#6b6b6b]/30"
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-2xl bg-[#6b6b6b]/10 transition-all duration-300 group-hover:bg-[#6b6b6b] group-hover:scale-110">
                      <profile.icon className="h-6 w-6 text-[#6b6b6b] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">{profile.title}</h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-4">{profile.description}</p>

                  {/* Benefits */}
                  <div>
                    <p className="text-xs font-medium text-[#6b6b6b] mb-2 uppercase tracking-wider">
                      Beneficios:
                    </p>
                    <ul className="space-y-1.5">
                      {profile.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[15px]">
                          <span className="text-[#6b6b6b] mt-0.5">✓</span>
                          <span className="text-[#6b6b6b]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-[#6b6b6b]" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-8 md:p-10 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿Listo para organizar tu vida con estilo?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto">
              Explora nuestro catálogo completo de planificadores digitales en acrílico y magnéticos, diseñados
              específicamente para tu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tablu"
                className="inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium bg-[#0d6832] text-white shadow-lg transition-all duration-200 hover:bg-[#0a5528] hover:shadow-xl"
              >
                Ver Catálogo Tablú
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/59167710595?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20planificadores%20Tablú"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium bg-[#128C7E] text-white shadow-lg transition-all duration-200 hover:bg-[#128C7E]/90 hover:shadow-xl"
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
