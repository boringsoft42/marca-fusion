'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Marca Fusión About Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background
 * - Professional Santa Cruz cityscape image from Unsplash
 * - Framer Motion fade-in animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images related to business, collaboration, and team
  const backgroundImages = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80',
      alt: 'Equipo de negocios colaborando',
    },
    {
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2070&q=80',
      alt: 'Reunión de equipo profesional',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2070&q=80',
      alt: 'Colaboración empresarial moderna',
    },
    {
      src: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=2070&q=80',
      alt: 'Oficina de negocios y tecnología',
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
        'relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-sierra-cream',
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
              className="object-cover opacity-60 brightness-110 contrast-110 blur-sm"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
        {/* Green tinted overlay for brand color and design harmony */}
        <div className="absolute inset-0 bg-sierra-green/20" />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/70 via-sierra-cream/40 to-sierra-cream/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <MapPin className="h-4 w-4 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium text-sierra-text-primary">
              Santa Cruz de la Sierra, Bolivia
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-sierra-text-primary leading-tight tracking-tight mb-6"
          >
            Sobre Nosotros
          </motion.h1>

          {/* Subtitle - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto"
          >
            Conectamos Bolivia con el mundo a través de representaciones estratégicas que impulsan innovación, sostenibilidad y desarrollo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
