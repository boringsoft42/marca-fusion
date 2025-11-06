'use client';

import { cn } from '@/lib/utils';
import { Factory, Home } from 'lucide-react';

/**
 * Sectors Hero Section
 *
 * Features:
 * - Split collage visual (Industry left, Home right)
 * - Dual focus: Industrial energy solutions + Personal organization
 * - Gradient overlays
 * - Responsive split layout
 * - Follows STYLE-GUIDE.md design patterns
 */

interface SectorsHeroProps {
  className?: string;
}

export function SectorsHero({ className }: SectorsHeroProps) {
  return (
    <section className={cn('relative min-h-[60vh] md:min-h-[70vh] overflow-hidden', className)}>
      {/* Split Background */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        {/* Left Side - Industrial (Capstone) */}
        <div className="relative bg-gradient-to-br from-marca-green/90 via-marca-green/80 to-marca-green/70">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          {/* Icon decoration */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <Factory className="h-48 w-48 text-white" aria-hidden="true" />
          </div>
        </div>

        {/* Right Side - Personal (Tablú) */}
        <div className="relative bg-gradient-to-br from-marca-beige/90 via-marca-beige/80 to-marca-beige/70">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(-45deg, currentColor 25%, transparent 25%), linear-gradient(45deg, transparent 75%, currentColor 75%), linear-gradient(-45deg, transparent 75%, currentColor 75%)',
                backgroundSize: '32px 32px',
                backgroundPosition: '0 0, 0 16px, 16px -16px, -16px 0px',
              }}
            />
          </div>

          {/* Icon decoration */}
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-10">
            <Home className="h-48 w-48 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 h-full min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Soluciones para Cada Sector
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Desde grandes industrias hasta espacios personales, conectamos tecnología y organización
            para impulsar el éxito en cada ámbito.
          </p>

          {/* Dual Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Industrial Badge */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-xl">
              <Factory className="h-6 w-6 text-white" aria-hidden="true" />
              <div className="text-left">
                <div className="text-sm font-bold text-white">Capstone</div>
                <div className="text-xs text-white/90">Energía Industrial</div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block text-3xl text-white/50 font-light">+</div>

            {/* Personal Badge */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-xl">
              <Home className="h-6 w-6 text-white" aria-hidden="true" />
              <div className="text-left">
                <div className="text-sm font-bold text-white">Tablú</div>
                <div className="text-xs text-white/90">Organización Personal</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-white/80 font-medium">Explorar sectores</span>
              <svg
                className="h-6 w-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}
