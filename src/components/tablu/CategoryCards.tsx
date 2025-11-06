'use client';

import { cn } from '@/lib/utils';
import { Home, Target, Baby, Users, GraduationCap, Briefcase, Building2, Gift } from 'lucide-react';

/**
 * Tablú Category Cards
 *
 * Features:
 * - 8 circular category cards
 * - Interactive hover effects
 * - Category icons and labels
 * - Smooth animations
 * - Responsive grid layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CategoryCardsProps {
  className?: string;
}

export function CategoryCards({ className }: CategoryCardsProps) {
  const categories = [
    {
      icon: Home,
      label: 'Home',
      description: 'Organiza tu hogar',
      color: 'from-marca-beige/80 to-marca-beige/60',
      href: '#catalogo?category=home',
    },
    {
      icon: Target,
      label: 'Hábitos',
      description: 'Seguimiento diario',
      color: 'from-marca-green/80 to-marca-green/60',
      href: '#catalogo?category=habits',
    },
    {
      icon: Baby,
      label: 'Niños',
      description: 'Diversión educativa',
      color: 'from-blue-400 to-blue-300',
      href: '#catalogo?category=kids',
    },
    {
      icon: Users,
      label: 'Jóvenes',
      description: 'Estilo juvenil',
      color: 'from-purple-400 to-purple-300',
      href: '#catalogo?category=youth',
    },
    {
      icon: GraduationCap,
      label: 'Universidad',
      description: 'Éxito académico',
      color: 'from-marca-steel/80 to-marca-steel/60',
      href: '#catalogo?category=university',
    },
    {
      icon: Briefcase,
      label: 'Emprendedores',
      description: 'Gestión de proyectos',
      color: 'from-orange-400 to-orange-300',
      href: '#catalogo?category=entrepreneurs',
    },
    {
      icon: Building2,
      label: 'Corporativo',
      description: 'Soluciones empresariales',
      color: 'from-slate-500 to-slate-400',
      href: '#catalogo?category=corporate',
    },
    {
      icon: Gift,
      label: 'Regalos',
      description: 'Ideas especiales',
      color: 'from-pink-400 to-pink-300',
      href: '#catalogo?category=gifts',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encuentra tu Categoría Ideal
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Planificadores diseñados específicamente para cada etapa y estilo de vida
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.href}
                className="group relative"
              >
                {/* Circular Card */}
                <div className="relative">
                  {/* Circle Background */}
                  <div
                    className={cn(
                      'aspect-square rounded-full bg-gradient-to-br shadow-lg',
                      'transition-all duration-300',
                      'group-hover:shadow-2xl group-hover:scale-110',
                      category.color
                    )}
                  >
                    {/* Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <category.icon
                        className="h-12 w-12 md:h-16 md:w-16 text-white drop-shadow-lg"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={cn(
                        'absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm',
                        'opacity-0 group-hover:opacity-100',
                        'transition-opacity duration-300',
                        'flex items-center justify-center'
                      )}
                    >
                      <span className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
                        Ver más
                      </span>
                    </div>
                  </div>

                  {/* Decorative Ring */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-full border-4 border-white/50',
                      'scale-105 opacity-0 group-hover:opacity-100',
                      'transition-all duration-300'
                    )}
                  />
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-marca-beige transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-base text-muted-foreground mb-4">
              ¿No encuentras lo que buscas? Ofrecemos diseños personalizados
            </p>
            <a
              href="#corporativo"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                'bg-marca-beige/10 text-marca-beige border-2 border-marca-beige/30',
                'transition-all duration-200',
                'hover:bg-marca-beige/20 hover:border-marca-beige/50 hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
              )}
            >
              Soluciones Corporativas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
