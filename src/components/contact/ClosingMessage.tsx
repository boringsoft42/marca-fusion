'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, ArrowRight } from 'lucide-react';

/**
 * Closing Message Section (Contact Page)
 *
 * Features:
 * - Institutional closing message
 * - "Volver al inicio" CTA
 * - Professional tone
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ClosingMessageProps {
  className?: string;
}

export function ClosingMessage({ className }: ClosingMessageProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Message */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gracias por tu Interés en Marca Fusión
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                En <span className="font-bold text-foreground">Marca Fusión</span>, creemos que cada
                conversación es el inicio de una gran alianza. Ya sea que busques soluciones energéticas
                con <span className="font-semibold">Capstone Green Energy</span> o herramientas de
                organización con <span className="font-semibold">Tablú Bolivia</span>, estamos aquí
                para escucharte y ayudarte.
              </p>
              <p>
                Nuestro equipo se pondrá en contacto contigo a la brevedad. Mientras tanto, te invitamos
                a explorar más sobre nuestras soluciones y lo que nos hace diferentes.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-marca-green text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
              )}
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              Volver al Inicio
            </Link>
            <Link
              href="/nosotros"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-background text-foreground border-2 border-marca-green/30',
                'transition-all duration-200',
                'hover:bg-marca-green/5 hover:border-marca-green/50 hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
              )}
            >
              Conocer más sobre nosotros
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">Marca Fusión SRL</span> • Santa Cruz de la Sierra, Bolivia
              <br />
              Representantes oficiales de Capstone Green Energy y Tablú Bolivia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
