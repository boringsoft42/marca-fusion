'use client';

import { cn } from '@/lib/utils';
import { Quote, ArrowRight } from 'lucide-react';

/**
 * Closing Quote Section (Partnerships)
 *
 * Features:
 * - Inspirational quote
 * - Contact CTA
 * - Professional closing
 * - Gradient background
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ClosingQuoteProps {
  className?: string;
}

export function ClosingQuote({ className }: ClosingQuoteProps) {
  return (
    <section className={cn('py-20 md:py-28 bg-gradient-to-br from-marca-green via-marca-green/90 to-marca-green/80 relative overflow-hidden', className)}>
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
          {/* Quote Icon */}
          <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-8">
            <Quote className="h-10 w-10 text-white" aria-hidden="true" />
          </div>

          {/* Quote */}
          <blockquote className="mb-12">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              &ldquo;El éxito de una alianza no se mide solo en términos comerciales,
              sino en el valor compartido que creamos juntos.&rdquo;
            </p>
            <footer className="text-lg md:text-xl text-white/90 font-medium">
              — Filosofía Marca Fusión
            </footer>
          </blockquote>

          {/* Divider */}
          <div className="w-24 h-1 bg-white/30 mx-auto mb-12" />

          {/* Call to Action */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para Explorar una Alianza Estratégica?
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Conversemos sobre cómo podemos crecer juntos y generar impacto positivo en el mercado boliviano.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-white text-marca-green shadow-xl',
                  'transition-all duration-200',
                  'hover:bg-white/95 hover:shadow-2xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green'
                )}
              >
                Iniciar Conversación
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@marcafusion.com.bo"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-4 text-base font-semibold',
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                Enviar Email Directo
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/80">
              Email:{' '}
              <a href="mailto:info@marcafusion.com.bo" className="font-semibold text-white hover:underline">
                info@marcafusion.com.bo
              </a>
              {' '}•{' '}
              WhatsApp:{' '}
              <a href="https://wa.me/59172136767" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
                +591 72136767
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
