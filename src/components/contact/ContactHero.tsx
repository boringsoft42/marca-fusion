'use client';

import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Contact Hero Section
 *
 * Features:
 * - Santa Cruz cityscape background (gradient)
 * - Contact headline
 * - Quick contact info pills
 * - Professional presentation
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ContactHeroProps {
  className?: string;
}

export function ContactHero({ className }: ContactHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 bg-gradient-to-br from-marca-green via-marca-green/90 to-marca-green/80 overflow-hidden', className)}>
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Mail className="h-4 w-4 text-white" aria-hidden="true" />
            <span className="text-sm font-semibold text-white">Contacto</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Conversemos
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Estamos aquí para responder tus preguntas, brindarte asesoría especializada
            y ayudarte a encontrar la solución perfecta para tus necesidades.
          </p>

          {/* Quick Contact Info Pills */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            {/* Phone */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <Phone className="h-5 w-5 text-white" aria-hidden="true" />
              <a
                href="tel:+59172136767"
                className="text-sm font-medium text-white hover:underline"
              >
                +591 72136767
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <Mail className="h-5 w-5 text-white" aria-hidden="true" />
              <a
                href="mailto:info@marcafusion.com.bo"
                className="text-sm font-medium text-white hover:underline"
              >
                info@marcafusion.com.bo
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
              <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Santa Cruz, Bolivia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}
