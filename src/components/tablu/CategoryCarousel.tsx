'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Tablú Category Carousel
 *
 * Features:
 * - Image-based category carousel with navigation arrows
 * - Manual navigation with left/right arrows
 * - Category badges overlay on images
 * - Responsive design
 * - Each category card is a separate image
 */

interface Category {
  title: string;
  image: string;
  badgeColor: string;
}

const categories: Category[] = [
  {
    title: 'COLECCIONES ESPECIALES',
    image: '/images/colecciones especiales.png',
    badgeColor: 'bg-yellow-500',
  },
  {
    title: 'DARK STYLE',
    image: '/images/dark style.png',
    badgeColor: 'bg-gray-900',
  },
  {
    title: 'HOGAR Y RUTINAS',
    image: '/images/hogar y rutinas.png',
    badgeColor: 'bg-green-500',
  },
  {
    title: 'NIÑOS Y JÓVENES',
    image: '/images/ninos y jovenes.png',
    badgeColor: 'bg-purple-500',
  },
  {
    title: 'PARA EL DÍA A DÍA',
    image: '/images/para el dia a dia.png',
    badgeColor: 'bg-blue-500',
  },
  {
    title: 'HOME OFFICE',
    image: '/images/homeofiice.png',
    badgeColor: 'bg-teal-500',
  },
  {
    title: 'CORPORATIVO',
    image: '/images/Grupo Corporativo.png',
    badgeColor: 'bg-gray-700',
  },
];

interface CategoryCarouselProps {
  className?: string;
}

export function CategoryCarousel({ className }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Calculate visible categories (show 4 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleCategories = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(categories[(currentIndex + i) % categories.length]);
    }
    return visible;
  };

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

        {/* Category Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-lg md:text-xl font-bold text-[#0D6832] uppercase tracking-wide">
            Cada carpeta es una categoría, dentro se encuentra la subcategoría
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 -ml-4 md:-ml-6"
            aria-label="Previous category"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 -mr-4 md:-mr-6"
            aria-label="Next category"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" strokeWidth={2.5} />
          </button>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {getVisibleCategories().map((category, index) => (
              <motion.div
                key={`${category.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Category Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
                  <div className={cn('px-4 py-2 rounded-lg text-center', category.badgeColor)}>
                    <p className="text-white font-bold text-sm md:text-base uppercase tracking-wide">
                      {category.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 text-[#4A5BA8] hover:text-[#0D6832] font-semibold transition-colors duration-200"
          >
            Desliza para ver todas las categorías →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
