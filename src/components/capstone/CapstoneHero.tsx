'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Zap, ArrowRight } from 'lucide-react';

/**
 * Capstone Green Energy Hero Section
 *
 * Features:
 * - Panoramic microturbine installation background
 * - Bold headline with brand positioning
 * - Key benefits highlights
 * - Dual CTAs (Contact + Learn More)
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CapstoneHeroProps {
  className?: string;
}

export function CapstoneHero({ className }: CapstoneHeroProps) {
  const capstoneUrl = process.env.NEXT_PUBLIC_CAPSTONE_URL || 'https://www.capstonegreenenergy.com';

  return (
    <section
      className={cn(
        'relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden',
        className
      )}
    >
      {/* Background with microturbine installation */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for panoramic microturbine installation image */}
        <div className="absolute inset-0 bg-gradient-to-br from-marca-green-light via-background to-marca-green-light/50" />

        {/* Industrial pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-marca-green/60 to-transparent" />
        </div>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-marca-green text-white shadow-lg">
            <Zap className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Capstone Green Energy
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Energía Limpia y Confiable para el Futuro de Bolivia
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Tecnología de microturbinas de clase mundial para generación distribuida, cogeneración y respaldo energético continuo.
          </p>

          {/* Key Benefits Pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-marca-green/30 shadow-md">
              <span className="text-sm font-semibold text-foreground">
                ✓ Ultra Baja Emisión
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-marca-green/30 shadow-md">
              <span className="text-sm font-semibold text-foreground">
                ✓ Alta Eficiencia
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-marca-green/30 shadow-md">
              <span className="text-sm font-semibold text-foreground">
                ✓ Operación 24/7
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-marca-green/30 shadow-md">
              <span className="text-sm font-semibold text-foreground">
                ✓ Bajo Mantenimiento
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-marca-green text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
              )}
            >
              Solicitar Cotización
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <a
              href={capstoneUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-background text-foreground border-2 border-border shadow-lg',
                'transition-all duration-200',
                'hover:bg-muted hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              Ver Sitio Oficial Capstone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
