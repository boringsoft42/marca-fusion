'use client';

import { cn } from '@/lib/utils';
import { Handshake, Users } from 'lucide-react';

/**
 * Partnerships Hero Section
 *
 * Features:
 * - Collaboration/handshake imagery
 * - Partnership focus messaging
 * - Professional tone
 * - Gradient background with overlays
 * - Follows STYLE-GUIDE.md design patterns
 */

interface PartnershipsHeroProps {
  className?: string;
}

export function PartnershipsHero({ className }: PartnershipsHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 bg-gradient-to-br from-marca-steel via-marca-steel/90 to-marca-steel/80 overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(30deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor), linear-gradient(150deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Handshake className="h-64 w-64 text-white" aria-hidden="true" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-5">
        <Users className="h-56 w-56 text-white" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Handshake className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Alianzas Estratégicas</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Crezcamos Juntos
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            En Marca Fusión valoramos las alianzas estratégicas que generan valor mutuo.
            Si compartes nuestra visión de innovación y excelencia, conversemos.
          </p>

          {/* Value Proposition Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-medium text-white">Confianza</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-medium text-white">Innovación</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-medium text-white">Resultados</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-medium text-white">Crecimiento Mutuo</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-white text-marca-steel shadow-lg',
                'transition-all duration-200',
                'hover:bg-white/95 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-steel'
              )}
            >
              <Handshake className="h-5 w-5" aria-hidden="true" />
              Proponer Alianza
            </a>
            <a
              href="#why-choose-us"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                'transition-all duration-200',
                'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
              )}
            >
              Conocer más
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}
