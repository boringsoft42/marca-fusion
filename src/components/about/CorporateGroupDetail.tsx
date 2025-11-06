'use client';

import { cn } from '@/lib/utils';
import { Globe, ArrowRight, Building2 } from 'lucide-react';

/**
 * Marca Fusión Corporate Group Detail Section
 *
 * Features:
 * - World map visual representation
 * - USA-Bolivia connection arrows
 * - Clickable Altrix logo
 * - Corporate group explanation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupDetailProps {
  className?: string;
}

export function CorporateGroupDetail({ className }: CorporateGroupDetailProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-marca-steel-light border border-marca-steel/30">
              <Globe className="h-4 w-4 text-marca-steel" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-steel uppercase tracking-wider">
                Alcance Global
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Parte de un Grupo Corporativo Internacional
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestra alianza estratégica con Altrix Solutions LLC nos permite combinar experiencia local con capacidad operativa internacional.
            </p>
          </div>

          {/* World Map Visual */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-lg bg-background border border-border shadow-lg p-8 md:p-12">
              {/* Map background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                      linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                {/* USA - Altrix Solutions */}
                <div className="text-center">
                  <a
                    href={altrixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <div className="p-6 rounded-lg bg-marca-steel-light border-2 border-marca-steel/30 hover:border-marca-steel transition-all duration-300 hover:shadow-lg">
                      {/* Altrix logo placeholder */}
                      <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-md bg-marca-steel text-white font-bold text-xl md:text-2xl mx-auto mb-4">
                        AS
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        Altrix Solutions LLC
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
                        <span className="text-lg">🇺🇸</span>
                        Estados Unidos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Operaciones Internacionales
                      </p>
                    </div>
                  </a>
                </div>

                {/* Connection Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full flex flex-col items-center gap-4">
                    {/* Top arrow - Export/Import */}
                    <div className="flex items-center w-full">
                      <div className="flex-1 border-t-2 border-dashed border-marca-steel/40" />
                      <ArrowRight className="h-6 w-6 text-marca-steel mx-2" aria-hidden="true" />
                      <div className="flex-1 border-t-2 border-dashed border-marca-steel/40" />
                    </div>

                    {/* Connection label */}
                    <div className="px-4 py-2 bg-background rounded-full border border-border shadow-md">
                      <Building2 className="h-5 w-5 text-marca-steel mx-auto mb-1" aria-hidden="true" />
                      <p className="text-xs font-semibold text-muted-foreground text-center whitespace-nowrap">
                        Grupo Corporativo
                      </p>
                    </div>

                    {/* Bottom arrow - Support/Logistics */}
                    <div className="flex items-center w-full">
                      <div className="flex-1 border-t-2 border-dashed border-marca-green/40" />
                      <ArrowRight className="h-6 w-6 text-marca-green mx-2 rotate-180" aria-hidden="true" />
                      <div className="flex-1 border-t-2 border-dashed border-marca-green/40" />
                    </div>
                  </div>
                </div>

                {/* Bolivia - Marca Fusión */}
                <div className="text-center">
                  <div className="p-6 rounded-lg bg-marca-green-light border-2 border-marca-green/30">
                    {/* Marca Fusión logo */}
                    <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-md bg-marca-green text-white font-bold text-xl md:text-2xl mx-auto mb-4">
                      MF
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      Marca Fusión SRL
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
                      <span className="text-lg">🇧🇴</span>
                      Bolivia
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Representaciones Locales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-marca-green" />
                Ventajas del Grupo Corporativo
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-marca-green mt-1">✓</span>
                  Capacidad operativa internacional para importación y exportación
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marca-green mt-1">✓</span>
                  Soporte técnico especializado desde Estados Unidos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marca-green mt-1">✓</span>
                  Cumplimiento garantizado de procesos logísticos internacionales
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-marca-steel" />
                Compromiso Local
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-marca-steel mt-1">✓</span>
                  Equipo local con conocimiento profundo del mercado boliviano
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marca-steel mt-1">✓</span>
                  Atención personalizada y soporte en español
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marca-steel mt-1">✓</span>
                  Compromiso con el desarrollo sostenible de Bolivia
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
