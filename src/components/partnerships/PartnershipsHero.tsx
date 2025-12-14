'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

/**
 * Partnerships Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background with partnership handshake image
 * - Framer Motion animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface PartnershipsHeroProps {
  className?: string;
}

export function PartnershipsHero({ className }: PartnershipsHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const valuePills = ['Confianza', 'Innovación', 'Resultados', 'Crecimiento Mutuo'];

  // Background images related to partnerships and collaboration
  const backgroundImages = [
    {
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2070&q=80',
      alt: 'Apretón de manos - alianza estratégica',
    },
    {
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=2070&q=80',
      alt: 'Colaboración empresarial y trabajo en equipo',
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2070&q=80',
      alt: 'Partnership y acuerdos de negocios',
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80',
      alt: 'Reunión estratégica de negocios',
    },
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      className={cn(
        'relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-sierra-cream',
        className
      )}
    >
      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex].src}
              alt={backgroundImages[currentImageIndex].alt}
              fill
              className="object-cover brightness-110 contrast-110"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Green tinted overlay for brand color */}
        <div className="absolute inset-0 bg-sierra-green/15" />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/85 via-sierra-cream/70 to-sierra-cream/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-32 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-3xl bg-sierra-green text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          >
            <Handshake className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
              Alianzas Estratégicas
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-sierra-text-primary leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Crezcamos Juntos
          </motion.h1>

          {/* Subtitle - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-2"
          >
            En Marca Fusión valoramos las alianzas estratégicas que generan valor mutuo.
            Si compartes nuestra visión de innovación y excelencia, conversemos.
          </motion.p>

          {/* Value Pills - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2"
          >
            {valuePills.map((value, index) => (
              <div key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-xs sm:text-sm font-medium text-sierra-text-primary">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <a
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-3xl text-sm sm:text-[15px] font-medium',
                'bg-sierra-green text-white',
                'transition-colors duration-200',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              <Handshake className="h-4 w-4" strokeWidth={1.5} />
              Proponer Alianza
            </a>
            <a
              href="#why-choose-us"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-3xl text-sm sm:text-[15px] font-medium',
                'bg-white text-sierra-green border-2 border-sierra-green',
                'transition-all duration-200',
                'hover:bg-sierra-green hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Conocer más
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
