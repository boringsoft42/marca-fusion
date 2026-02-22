'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 pt-20">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-normal text-white leading-tight tracking-tight">
              Conectamos Bolivia con marcas nacionales e internacionales que impulsan{' '}
              <span className="block mt-2">innovación, sostenibilidad y confianza</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-normal">
              Representantes exclusivos de <strong>Capstone Green Energy</strong> y <strong>Tablú</strong> para Bolivia
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#sectores-industriales"
                className="inline-flex items-center gap-2 px-6 py-3 bg-marca-green text-white rounded-md font-semibold hover:bg-marca-green/90 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                DESCUBRE MÁS
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
