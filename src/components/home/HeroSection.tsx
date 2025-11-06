'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

/**
 * Marca Fusión Home Hero Section
 *
 * Features:
 * - Gradient headline with company tagline
 * - Subtitle with brand positioning
 * - Industrial background with green overlay (40% opacity)
 * - Two CTA buttons (Conocer más + Contacto)
 * - Responsive design with mobile-first approach
 * - Spanish only (no i18n)
 */

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden',
        className
      )}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for industrial background image - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted-foreground/20 to-muted" />

        {/* Green overlay (40% opacity) */}
        <div className="absolute inset-0 bg-marca-green opacity-40 mix-blend-multiply" />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gradient headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-lg">
              Conectamos Bolivia con marcas nacionales e internacionales que impulsan innovación, sostenibilidad y confianza.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/95 font-medium drop-shadow-md max-w-3xl mx-auto">
            Representantes exclusivos de Capstone Green Energy y Tablú para Bolivia
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/nosotros"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-marca-green text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green'
              )}
            >
              Conocer más
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-white/95 text-marca-green border-2 border-white shadow-lg backdrop-blur-sm',
                'transition-all duration-200',
                'hover:bg-white hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
              )}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-5 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
          </div>
          <span className="text-xs text-white/70 font-medium hidden md:block">
            Desplázate
          </span>
        </div>
      </div>
    </section>
  );
}
