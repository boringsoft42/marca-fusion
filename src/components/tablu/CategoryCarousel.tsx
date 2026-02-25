'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef } from 'react';
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
];

interface CategoryCarouselProps {
  className?: string;
}

export function CategoryCarousel({ className }: CategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to catalog section
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Scroll by the visible width of the container minus a small overlap
      const scrollAmount = container.clientWidth * 0.8; 
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
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
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
            Encuentra tu <span className="font-kaushan text-[#4A5BA8] lowercase text-[0.85em] font-normal tracking-normal">planner ideal</span> <br className="hidden md:block" />
            según tu estilo de vida
          </h2>
          <p className="text-base md:text-lg text-[#666] leading-relaxed">
            Porque cada persona, hogar o empresa tiene una forma única de organizarse, diseñamos planners pensados para cada etapa y necesidad.
          </p>
        </motion.div>

        {/* Carousel Container with Arrows */}
        <div className="relative group">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/90 hover:bg-white text-[#1a1a1a] shadow-lg rounded-full border border-gray-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/90 hover:bg-white text-[#1a1a1a] shadow-lg rounded-full border border-gray-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrolling container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                onClick={scrollToCatalog}
                className="snap-start relative w-[85%] sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] flex-shrink-0 aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Category Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
