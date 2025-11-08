'use client';

import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

/**
 * Marca Fusión Team Section
 *
 * Features:
 * - Team photo display
 * - Caption with team description
 * - Professional presentation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-marca-green-light border border-marca-green/30">
              <Users className="h-4 w-4 text-marca-green" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-green uppercase tracking-wider">
                Nuestro Equipo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              El Talento Detrás de Marca Fusión
            </h2>
          </div>

          {/* Team Photo Container */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-xl border border-border bg-muted/30">
              {/* Placeholder for team photo - will be replaced with actual image */}
              <div className="aspect-video md:aspect-[21/9] flex items-center justify-center bg-gradient-to-br from-marca-green-light via-marca-steel-light to-marca-beige-light">
                <div className="text-center p-8">
                  <Users className="h-16 w-16 md:h-24 md:w-24 text-muted-foreground/40 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    Foto del Equipo Marca Fusión
                  </p>
                </div>
              </div>

              {/* Decorative overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>

          {/* Team Description */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/30 border border-border">
                <div className="text-2xl md:text-3xl font-bold text-marca-green mb-1">
                  10+
                </div>
                <p className="text-sm text-muted-foreground">
                  Años de Experiencia
                </p>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/30 border border-border">
                <div className="text-2xl md:text-3xl font-bold text-marca-steel mb-1">
                  100%
                </div>
                <p className="text-sm text-muted-foreground">
                  Compromiso con el Cliente
                </p>
              </div>

              <div className="text-center p-4 rounded-lg bg-muted/30 border border-border">
                <div className="text-2xl md:text-3xl font-bold text-marca-beige mb-1">
                  24/7
                </div>
                <p className="text-sm text-muted-foreground">
                  Soporte Técnico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
