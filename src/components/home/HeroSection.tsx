'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section
      className={cn(
        'relative bg-sierra-cream py-20 md:py-32 lg:py-40 overflow-hidden',
        className
      )}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/1.png"
        >
          <source src="/images/YPFB Transporte - CAIGUA (1).mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero Title - Apple Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-white mb-8"
          >
            Conectamos <span className="text-[#2D5F3F] font-semibold">Bolivia</span> con marcas nacionales e internacionales que impulsan innovación, sostenibilidad y confianza
          </motion.h1>

          {/* Subtitle - Apple Style: smaller and refined */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light tracking-wide"
          >
            Representantes exclusivos de{' '}
            <span className="font-medium text-white">Capstone Green Energy</span> y{' '}
            <span className="font-medium text-white">Tablú</span> para Bolivia
          </motion.p>

          {/* CTA Button - Apple Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <Link
              href="/nosotros"
              className={cn(
                'group inline-flex items-center justify-center gap-2',
                'px-8 py-4 rounded-xl text-base font-semibold',
                'bg-[#2D5F3F] text-white',
                'shadow-[0_4px_14px_rgba(45,95,63,0.4)]',
                'transition-all duration-200',
                'hover:bg-[#2D5F3F]/90 hover:shadow-[0_6px_20px_rgba(45,95,63,0.6)] hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5F3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              )}
            >
              Quiénes Somos
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
