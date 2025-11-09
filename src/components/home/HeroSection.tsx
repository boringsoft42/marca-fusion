'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Marca Fusión Home Hero Section - Sierra Style with Image Carousel
 *
 * Features:
 * - Auto-rotating background images from Unsplash
 * - Sierra cream background with green overlay
 * - Clean typography with font-weight 400 for hero title
 * - Sierra green buttons with 24px border radius
 * - Framer Motion animations
 * - Responsive design with mobile-first approach
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images related to renewable energy, sustainability, and technology
  const backgroundImages = [
    {
      src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2070&q=80',
      alt: 'Energía solar renovable - Paneles solares',
    },
    {
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2070&q=80',
      alt: 'Turbinas de energía eólica sostenible',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2070&q=80',
      alt: 'Innovación y tecnología empresarial',
    },
    {
      src: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=2070&q=80',
      alt: 'Colaboración tecnológica y negocios',
    },
    {
      src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2070&q=80',
      alt: 'Energía limpia y sostenibilidad',
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
        'relative bg-sierra-cream py-20 md:py-32 lg:py-40 overflow-hidden',
        className
      )}
    >
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
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/85 via-sierra-cream/70 to-sierra-cream/85" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Title - Sierra Style: 48px, font-weight 400 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-[48px] font-normal leading-tight tracking-tight text-sierra-text-primary mb-6"
          >
            Conectamos Bolivia con marcas nacionales e internacionales que impulsan innovación, sostenibilidad y confianza
          </motion.h1>

          {/* Subtitle - Sierra Style: 16px, secondary color */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Representantes exclusivos de Capstone Green Energy y Tablú para Bolivia
          </motion.p>

          {/* CTA Buttons - Sierra Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/nosotros"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-sierra-green text-white',
                'transition-colors duration-200',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Conocer más
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-white text-sierra-green border-2 border-sierra-green',
                'transition-all duration-200',
                'hover:bg-sierra-green hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Contacto
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
