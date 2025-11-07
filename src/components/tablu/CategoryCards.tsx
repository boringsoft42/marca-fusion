'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home, Target, Baby, Users, GraduationCap, Briefcase, Building2, Gift } from 'lucide-react';

/**
 * Tablú Category Cards
 *
 * Features:
 * - 8 circular category cards
 * - Interactive hover effects with framer-motion
 * - Category icons and labels
 * - White background with sierra-green accents
 * - Responsive grid layout
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
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
      color: 'from-[#0d6832]/80 to-[#0d6832]/60',
      href: '#catalogo?category=home',
    },
    {
      icon: Target,
      label: 'Hábitos',
      description: 'Seguimiento diario',
      color: 'from-[#0d6832]/80 to-[#0d6832]/60',
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
      color: 'from-[#6b6b6b]/80 to-[#6b6b6b]/60',
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
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[48px] font-normal text-[#1a1a1a] mb-4"
            >
              Encuentra tu Categoría Ideal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto"
            >
              Planificadores diseñados específicamente para cada etapa y estilo de vida
            </motion.p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={category.href}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Circular Card */}
                <div className="relative">
                  {/* Circle Background */}
                  <div
                    className={cn(
                      'aspect-square rounded-full bg-gradient-to-br shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                      'transition-all duration-300',
                      'group-hover:shadow-lg group-hover:scale-110',
                      category.color
                    )}
                  >
                    {/* Icon Container */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <category.icon
                        className="h-12 w-12 md:h-16 md:w-16 text-white drop-shadow-lg"
                        strokeWidth={1.5}
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
                      <span className="text-white font-medium text-sm md:text-base drop-shadow-lg">
                        Ver más
                      </span>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4 text-center">
                  <h3 className="text-base md:text-xl font-medium text-[#1a1a1a] mb-1 group-hover:text-[#0d6832] transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-xs md:text-[15px] text-[#6b6b6b]">
                    {category.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-[15px] text-[#6b6b6b] mb-4">
              ¿No encuentras lo que buscas? Ofrecemos diseños personalizados
            </p>
            <a
              href="#corporativo"
              className={cn(
                'inline-flex items-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                'bg-white text-[#0d6832] border-2 border-[#0d6832]/30 shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                'transition-all duration-200',
                'hover:bg-[#0d6832]/10 hover:border-[#0d6832]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
              )}
            >
              Soluciones Corporativas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
