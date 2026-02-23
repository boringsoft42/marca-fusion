'use client';

import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

/**
 * Partnerships Hero Section - Two Column Layout
 *
 * Features:
 * - Two-column layout (text left, visual right)
 * - Sub-heading with diamond symbol
 * - Large bold title split across two lines
 * - Descriptive paragraph in grey
 * - Right card visual with image top and black content bottom
 * - Clean white background
 * - Follows provided visual reference
 */

interface PartnershipsHeroProps {
  className?: string;
}

export function PartnershipsHero({ className }: PartnershipsHeroProps) {
  return (
    <section className={cn('relative min-h-[90vh] flex items-center overflow-hidden', className)}>
      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Image - Full Bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/alianzas-hero.png"
          alt="Alianzas Estratégicas"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark Overlay for text readability (Darker as requested) */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

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
                ◆ Alianzas Estratégicas
              </span>
            </div>

            {/* Main Title - Standard styling */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Crezcamos <br />
              <span>Juntos.</span>
            </h1>

            {/* Description - Standard styling */}
            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-xl">
              Creemos en las alianzas estratégicas como el motor del progreso.
              <br />
              En Marca Fusión, unimos la solidez empresarial boliviana con la innovación de partners nacionales e internacionales.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-lg text-sm font-medium',
                  'bg-[#2D5F3F] text-white',
                  'transition-all duration-200',
                  'hover:bg-[#234d32]'
                )}
              >
                <Handshake className="h-4 w-4" strokeWidth={1.5} />
                Conocer más
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Gradient at bottom to blend with next section (Dark bg-[#1a1a1a]) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
    </section>
  );
}
