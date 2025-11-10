'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Marca Fusión Philosophy Section
 *
 * Features:
 * - Closing philosophical statement
 * - Company purpose and vision
 * - Call-to-action
 * - Elegant presentation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface PhilosophySectionProps {
  className?: string;
}

export function PhilosophySection({ className }: PhilosophySectionProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-gradient-to-br from-marca-green-light/20 via-background to-marca-steel-light/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-background border border-border shadow-md">
              <Sparkles className="h-8 w-8 text-marca-green" aria-hidden="true" />
            </div>
          </div>

          {/* Main Philosophy */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1A1A1A] mb-6 leading-tight">
              Más que Representantes, Somos Aliados Estratégicos
            </h2>

            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                En Marca Fusión, creemos que cada proyecto es una oportunidad para generar un impacto positivo duradero. No solo conectamos empresas con tecnologías; conectamos visiones con realidades, desafíos con soluciones, y aspiraciones con logros concretos.
              </p>

              <p className="text-foreground font-medium text-lg md:text-xl">
                Nuestro propósito es ser el puente que impulsa el progreso de Bolivia hacia un futuro más innovador, sostenible y competitivo.
              </p>

              <p>
                Cada cliente que confía en nosotros se convierte en parte de una red de transformación que trasciende fronteras. Juntos, estamos construyendo el Bolivia del mañana.
              </p>
            </div>
          </div>

          {/* Decorative quote */}
          <div className="relative p-8 md:p-12 rounded-lg bg-background/80 backdrop-blur-sm border-l-4 border-marca-green shadow-lg mb-12">
            <div className="absolute -top-4 left-8 px-3 py-1 bg-marca-green text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Nuestra Filosofía
            </div>
            <blockquote className="text-lg md:text-xl text-foreground font-medium italic text-center">
              &ldquo;Innovación con propósito, tecnología con corazón, y resultados que trascienden.&rdquo;
            </blockquote>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-marca-green text-white shadow-md',
                'transition-all duration-200',
                'hover:bg-marca-green/90 hover:shadow-lg hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
              )}
            >
              Conversemos sobre tu proyecto
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              href="/capstone"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                'bg-background text-foreground border-2 border-border shadow-md',
                'transition-all duration-200',
                'hover:bg-muted hover:shadow-lg hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              Conocer nuestras soluciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
