'use client';

import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';

/**
 * Marca Fusión About Hero Section
 *
 * Features:
 * - Large, impactful headline
 * - Blurred Santa Cruz cityscape background
 * - Location indicator
 * - Gradient overlays for text readability
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden',
        className
      )}
    >
      {/* Background with blurred cityscape effect */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for Santa Cruz cityscape - will be replaced with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted" />

        {/* Cityscape pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-marca-green/30 via-marca-steel/20 to-marca-beige/30" />
        </div>

        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md">
            <MapPin className="h-4 w-4 text-marca-green" aria-hidden="true" />
            <span className="text-sm font-semibold text-foreground">
              Santa Cruz de la Sierra, Bolivia
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Sobre Nosotros
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Conectamos Bolivia con el mundo a través de representaciones estratégicas que impulsan innovación, sostenibilidad y desarrollo.
          </p>

          {/* Decorative elements */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-marca-green rounded-full" />
            <div className="h-1 w-16 bg-marca-steel rounded-full" />
            <div className="h-1 w-16 bg-marca-beige rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
