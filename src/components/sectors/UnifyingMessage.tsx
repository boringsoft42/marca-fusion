'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

/**
 * Unifying Message Section
 *
 * Features:
 * - Institutional closing message
 * - Panoramic Santa Cruz background (gradient)
 * - Green marca-fusion branding
 * - Inspirational tone
 * - CTA back to home or contact
 * - Follows STYLE-GUIDE.md design patterns
 */

interface UnifyingMessageProps {
  className?: string;
}

export function UnifyingMessage({ className }: UnifyingMessageProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-28 bg-gradient-to-br from-marca-green via-marca-green/90 to-marca-green/80 overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
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

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Marca Fusión SRL</span>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Conectamos Soluciones para Cada Dimensión de tu Vida
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-md">
            <p>
              Desde la energía que impulsa industrias hasta la organización que transforma
              espacios personales, en <span className="font-bold">Marca Fusión</span> creemos que
              el progreso comienza con soluciones adaptadas a cada necesidad.
            </p>

            <p>
              Ya sea que busques eficiencia energética para tu operación industrial o herramientas
              para organizar tu día a día, nuestro compromiso es brindarte lo mejor de{' '}
              <span className="font-bold">Capstone Green Energy</span> y{' '}
              <span className="font-bold">Tablú Bolivia</span>.
            </p>

            <p className="text-2xl md:text-3xl font-bold text-white mt-8">
              &ldquo;Innovación con propósito. Organización con estilo.&rdquo;
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-white text-marca-green shadow-lg',
                'transition-all duration-200',
                'hover:bg-white/95 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green'
              )}
            >
              Volver al Inicio
            </Link>
            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                'transition-all duration-200',
                'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
              )}
            >
              Contáctanos
            </Link>
          </div>

          {/* Location Badge */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/80">
              Orgullosamente desde <span className="font-bold text-white">Santa Cruz de la Sierra, Bolivia</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
