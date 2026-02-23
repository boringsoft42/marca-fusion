'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

/**
 * Sectors Hero Section - Full Banner with Background Image
 *
 * Features:
 * - Full-width background banner image
 * - Centered text content overlay
 * - Consistent sizing with home page hero
 * - Clean, professional typography
 */

interface SectorsHeroProps {
  className?: string;
}

export function SectorsHero({ className }: SectorsHeroProps) {
  return (
    <section className={cn('relative bg-white overflow-hidden min-h-screen flex items-center', className)}>
      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Fondo Sectores.png"
          alt="Sectores Marca Fusión"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Left aligned */}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Sub-heading */}
            <div className="mb-4">
              <span className="text-sm uppercase tracking-widest font-semibold text-white/90">
                ◆ NUESTROS SECTORES
              </span>
            </div>

            {/* Main Title - Left aligned, same size as home hero */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Soluciones para cada{' '}
              <span className="block">sector</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
              Desde grandes industrias hasta espacios personales, conectamos tecnología y organización para impulsar el éxito en cada ámbito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
