'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to catalog section
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Continuous auto-scroll animation - smooth horizontal scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        // Move by small increments for smooth animation
        const newOffset = prev + 0.5;
        // Reset when we've scrolled past one full category width
        if (newOffset >= 100) {
          return 0;
        }
        return newOffset;
      });
    }, 30); // Update every 30ms for smooth animation

    return () => clearInterval(interval);
  }, [isPaused]);

  // Duplicate categories array for infinite loop effect
  const duplicatedCategories = [...categories, ...categories, ...categories];

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

        {/* Carousel Container */}
        <div
          className="relative -mx-6 md:-mx-10 lg:-mx-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Infinite scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-100 ease-linear"
              style={{
                transform: `translateX(-${offset}%)`,
              }}
            >
              {duplicatedCategories.map((category, index) => (
                <div
                  key={`${category.title}-${index}`}
                  onClick={scrollToCatalog}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group flex-shrink-0"
                  style={{ width: 'calc(25% - 18px)' }} // 4 items visible at once (25% width minus gap)
                >
                  {/* Category Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
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
