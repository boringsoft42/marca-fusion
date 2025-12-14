'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';

/**
 * Capstone Green Energy Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background with industrial energy image
 * - Framer Motion animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface CapstoneHeroProps {
  className?: string;
}

export function CapstoneHero({ className }: CapstoneHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden',
        className
      )}
    >
      {/* Header positioned absolutely over video */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

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
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32 pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight tracking-tight mb-6"
          >
            <span className="text-[#2D5F3F] font-semibold">Capstone</span> Green Energy en Bolivia
          </motion.h1>

          {/* Description Text - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mb-10"
          >
            Somos representantes oficiales en Bolivia de <span className="font-bold">Capstone Green Energy</span>, una compañía estadounidense líder mundial en el desarrollo de microturbinas de generación eléctrica con más de <span className="font-bold">25 años</span> de innovación en energía sostenible.
          </motion.p>

          {/* CTA Button - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold',
                'bg-[#2D5F3F] text-white',
                'shadow-[0_4px_14px_rgba(45,95,63,0.4)]',
                'transition-all duration-200',
                'hover:bg-[#2D5F3F]/90 hover:shadow-[0_6px_20px_rgba(45,95,63,0.6)] hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5F3F] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              )}
            >
              Contacto
              <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
