'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Sectors Hero Section
 *
 * Features:
 * - Split collage visual (Industry left, Home right)
 * - Dual focus: Industrial energy solutions + Personal organization
 * - Real product images carousel
 * - Brand logos (Capstone & Tablú)
 * - Responsive split layout
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface SectorsHeroProps {
  className?: string;
}

export function SectorsHero({ className }: SectorsHeroProps) {
  const [industrialIndex, setIndustrialIndex] = useState(0);
  const [personalIndex, setPersonalIndex] = useState(0);

  // Industrial sector images - Capstone microturbines
  const industrialImages = [
    '/images/C800S (6).png',
    '/images/C600S (4).png',
    '/images/C200S (7).png',
  ];

  // Personal/home sector images - Tablú planners
  const personalImages = [
    '/images/ta1.jpg',
    '/images/ta2.jpg',
    '/images/ta3.png',
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndustrialIndex((prev) => (prev + 1) % industrialImages.length);
      setPersonalIndex((prev) => (prev + 1) % personalImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [industrialImages.length, personalImages.length]);

  return (
    <section className={cn('relative bg-[#ebe8e3] py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Industrial Images Carousel (Capstone) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-64 lg:h-auto min-h-[500px] overflow-hidden bg-white"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={industrialIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <Image
                      src={industrialImages[industrialIndex]}
                      alt={`Capstone Microturbine ${industrialIndex + 1}`}
                      fill
                      className="object-contain"
                      priority={industrialIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Capstone Logo Badge */}
                <div className="absolute top-6 left-6 px-6 py-3 rounded-xl bg-white shadow-xl border-2 border-[#2D5F3F]">
                  <div className="relative h-8 w-32">
                    <Image
                      src="/images/color_image.png"
                      alt="Capstone Green Energy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs text-[#2D5F3F] font-bold mt-1">Energía Industrial</div>
                </div>
              </motion.div>

              {/* Right Side - Personal Images Carousel (Tablú) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 lg:h-auto min-h-[500px] overflow-hidden bg-white"
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={personalIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <Image
                      src={personalImages[personalIndex]}
                      alt={`Tablú Planner ${personalIndex + 1}`}
                      fill
                      className="object-contain"
                      priority={personalIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Tablú Logo Badge */}
                <div className="absolute top-6 right-6 px-6 py-3 rounded-xl bg-white shadow-xl border-2 border-[#4A5BA8]">
                  <div className="relative h-8 w-32">
                    <Image
                      src="/images/Logo Tablu.png"
                      alt="Tablú"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs text-[#4A5BA8] font-bold mt-1">Organización Personal</div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[48px] font-normal text-[#1a1a1a] mb-4 leading-tight"
              >
                Soluciones para Cada Sector
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[15px] text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed mb-8"
              >
                Desde grandes industrias hasta espacios personales, conectamos tecnología y organización
                para impulsar el éxito en cada ámbito.
              </motion.p>

              {/* CTA Button - Less curved */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="#sectors"
                  className="inline-block px-7 py-3 rounded-xl bg-[#0d6832] text-white text-[15px] font-medium transition-all duration-200 hover:bg-[#0a5528] shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explorar Sectores
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
