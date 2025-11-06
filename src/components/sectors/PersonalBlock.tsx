'use client';

import { cn } from '@/lib/utils';
import { Building2, Briefcase, Home, Rocket, ArrowRight } from 'lucide-react';

/**
 * Personal Sectors Block (Tablú)
 *
 * Features:
 * - 4 personal profile cards
 * - Corporativo, Profesionales, Hogares, Emprendedores
 * - Icon-based visual hierarchy
 * - CTA to Tablú page
 * - Beige branding
 * - Follows STYLE-GUIDE.md design patterns
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
      color: 'from-marca-steel to-marca-steel/80',
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
      color: 'from-purple-500 to-purple-400',
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
      color: 'from-marca-beige to-marca-beige/80',
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
      color: 'from-orange-500 to-orange-400',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marca-beige/10 border border-marca-beige/20 mb-4">
              <Home className="h-5 w-5 text-marca-beige" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-beige">Tablú Bolivia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perfiles Personales
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Planificadores digitales diseñados para cada estilo de vida. Organiza tu día, tu semana y tus metas
              con herramientas visuales que se adaptan a ti.
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {personalProfiles.map((profile, index) => (
              <div
                key={index}
                className={cn(
                  'group relative p-6 rounded-lg border border-border bg-background overflow-hidden',
                  'transition-all duration-300',
                  'hover:shadow-2xl hover:-translate-y-2 hover:border-marca-beige/50'
                )}
              >
                {/* Gradient background (visible on hover) */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300',
                    profile.color
                  )}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className={cn(
                        'inline-flex p-4 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110',
                        profile.color
                      )}
                    >
                      <profile.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{profile.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{profile.description}</p>

                  {/* Benefits */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Beneficios:
                    </p>
                    <ul className="space-y-1.5">
                      {profile.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-marca-beige mt-0.5 font-bold">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-marca-beige" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center p-8 md:p-10 rounded-lg bg-gradient-to-br from-marca-beige/10 to-background border border-marca-beige/30">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              ¿Listo para organizar tu vida con estilo?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explora nuestro catálogo completo de planificadores digitales en acrílico y magnéticos, diseñados
              específicamente para tu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tablu"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-marca-beige text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-marca-beige/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                )}
              >
                Ver Catálogo Tablú
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/59167710595?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20planificadores%20Tablú"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-[#25D366] text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-[#25D366]/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
                )}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
