'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Home, Sparkles, Baby, Backpack, GraduationCap, Lightbulb, Building2, Gift } from 'lucide-react';

/**
 * Tablú Category Carousel
 *
 * Features:
 * - Auto-scrolling carousel of planner categories
 * - Icon-based category cards
 * - Smooth infinite scroll animation
 * - Responsive design
 */

interface Category {
  icon: typeof Home;
  title: string;
  description: string;
  color: string;
}

const categories: Category[] = [
  {
    icon: Home,
    title: 'Hogar',
    description: 'Ideal para planificar tareas, compras, pendientes, comidas o rutinas familiares.',
    color: 'bg-blue-500',
  },
  {
    icon: Sparkles,
    title: 'Hábitos',
    description: 'Diseños que ayudan a construir y mantener buenos hábitos diarios.',
    color: 'bg-purple-500',
  },
  {
    icon: Baby,
    title: 'Niños',
    description: 'Colores alegres y diseños adaptados para estimular su organización, rutinas, estimulación, motricidad.',
    color: 'bg-pink-500',
  },
  {
    icon: Backpack,
    title: 'Jóvenes y Estudiantes',
    description: 'Para tareas, metas, hábitos y horarios académicos.',
    color: 'bg-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'Universitarios',
    description: 'Espacio para planificaciones académicas, proyectos y finanzas.',
    color: 'bg-indigo-500',
  },
  {
    icon: Lightbulb,
    title: 'Emprendedores',
    description: 'Diseños con enfoque en metas, productividad y ventas.',
    color: 'bg-yellow-500',
  },
  {
    icon: Building2,
    title: 'Corporativos',
    description: 'Personalizados con logo y colores de marca.',
    color: 'bg-gray-700',
  },
  {
    icon: Gift,
    title: 'Regalos / Familiares',
    description: 'Perfectos para obsequios o celebraciones personalizadas.',
    color: 'bg-red-500',
  },
];

interface CategoryCarouselProps {
  className?: string;
}

export function CategoryCarousel({ className }: CategoryCarouselProps) {
  // Duplicate categories for seamless infinite scroll
  const duplicatedCategories = [...categories, ...categories];

  return (
    <section className={cn('py-16 md:py-20 bg-white overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A5BA8] mb-4">
            Encuentra tu planner ideal según tu estilo de vida
          </h2>
          <p className="text-base md:text-lg text-[#666] leading-relaxed">
            Porque cada persona, hogar o empresa tiene una forma única de organizarse, diseñamos planners pensados para cada etapa y necesidad.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1920], // Adjust based on card width * number of original categories
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {duplicatedCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className={cn('w-14 h-14 rounded-lg flex items-center justify-center mb-4', category.color)}>
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{category.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#666] leading-relaxed">{category.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom spacing */}
      <div className="mt-12 text-center">
        <p className="text-sm text-[#666]">
          Desliza para ver todas las categorías →
        </p>
      </div>
    </section>
  );
}
