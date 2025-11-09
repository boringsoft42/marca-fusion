'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Factory, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Sectors Hero Section
 *
 * Features:
 * - Split collage visual (Industry left, Home right)
 * - Dual focus: Industrial energy solutions + Personal organization
 * - Professional Unsplash split image
 * - Responsive split layout
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface SectorsHeroProps {
  className?: string;
}

export function SectorsHero({ className }: SectorsHeroProps) {
  const [industrialIndex, setIndustrialIndex] = useState(0);
  const [personalIndex, setPersonalIndex] = useState(0);

  // Industrial sector images
  const industrialImages = [
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format',
      alt: 'Planta industrial de manufactura',
    },
    {
      src: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?w=800&h=600&fit=crop&auto=format',
      alt: 'Infraestructura petrolera y gas',
    },
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&auto=format',
      alt: 'Sector de salud y hospitales',
    },
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format',
      alt: 'Edificios comerciales modernos',
    },
  ];

  // Personal/home sector images
  const personalImages = [
    {
      src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&auto=format',
      alt: 'Espacio de trabajo personal organizado',
    },
    {
      src: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=600&fit=crop&auto=format',
      alt: 'Planificación y organización personal',
    },
    {
      src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&auto=format',
      alt: 'Hogar moderno y acogedor',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&auto=format',
      alt: 'Oficina profesional y productiva',
    },
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
              {/* Left Side - Industrial Images Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={industrialIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={industrialImages[industrialIndex].src}
                      alt={industrialImages[industrialIndex].alt}
                      fill
                      className="object-cover"
                      priority={industrialIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d6832]/80 to-[#0d6832]/60" />

                {/* Industrial Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-3 px-5 py-2.5 rounded-3xl bg-white/95 backdrop-blur-sm shadow-lg">
                  <Factory className="h-5 w-5 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                  <div className="text-left">
                    <div className="text-[15px] font-medium text-[#1a1a1a]">Capstone</div>
                    <div className="text-xs text-[#6b6b6b]">Energía Industrial</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Personal Images Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={personalIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={personalImages[personalIndex].src}
                      alt={personalImages[personalIndex].alt}
                      fill
                      className="object-cover"
                      priority={personalIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ebe8e3]/80 to-[#ebe8e3]/60" />

                {/* Personal Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-3 px-5 py-2.5 rounded-3xl bg-white/95 backdrop-blur-sm shadow-lg">
                  <Home className="h-5 w-5 text-[#6b6b6b]" strokeWidth={1.5} aria-hidden="true" />
                  <div className="text-left">
                    <div className="text-[15px] font-medium text-[#1a1a1a]">Tablú</div>
                    <div className="text-xs text-[#6b6b6b]">Organización Personal</div>
                  </div>
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

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href="#sectors"
                  className="inline-block px-7 py-3 rounded-3xl bg-[#0d6832] text-white text-[15px] font-medium transition-all duration-200 hover:bg-[#0a5528] shadow-lg hover:shadow-xl"
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
