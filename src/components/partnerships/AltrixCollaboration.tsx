'use client';

import { cn } from '@/lib/utils';
import { Plane, Package } from 'lucide-react';

/**
 * Altrix Collaboration Section (Partnerships)
 *
 * Features:
 * - Altrix Solutions LLC introduction
 * - International operations explanation
 * - Container/airplane icons
 * - Metallic/gray professional background
 * - Follows STYLE-GUIDE.md design patterns
 */

interface AltrixCollaborationProps {
  className?: string;
}

export function AltrixCollaboration({ className }: AltrixCollaborationProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-gradient-to-br from-marca-steel/10 via-muted/20 to-marca-steel/10', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marca-steel/10 border border-marca-steel/20 mb-6">
                <Plane className="h-4 w-4 text-marca-steel" aria-hidden="true" />
                <span className="text-sm font-semibold text-marca-steel">Grupo Corporativo</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Altrix Solutions LLC
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
                <p>
                  <span className="font-bold text-foreground">Altrix Solutions LLC</span> (Estados Unidos) es nuestra
                  empresa hermana que facilita todas las operaciones internacionales de{' '}
                  <span className="font-semibold text-foreground">Marca Fusión</span> en Bolivia.
                </p>

                <p>
                  Altrix maneja la logística internacional, importación de equipos, coordinación directa con
                  fabricantes globales como Capstone Green Energy, y el cumplimiento de normativas aduaneras y de
                  comercio internacional.
                </p>

                <p>
                  Esta estructura corporativa nos permite ofrecer a nuestros clientes bolivianos acceso directo
                  a tecnología de clase mundial con el respaldo de una empresa estadounidense establecida.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  'Importación y logística especializada',
                  'Coordinación directa con fabricantes globales',
                  'Cumplimiento normativo internacional',
                  'Soporte técnico desde Estados Unidos',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 rounded-full bg-marca-steel/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-marca-steel">✓</span>
                      </div>
                    </div>
                    <span className="text-sm text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="p-10 md:p-12 rounded-lg bg-gradient-to-br from-marca-steel/20 to-marca-steel/10 border-2 border-marca-steel/30 shadow-xl">
                {/* Icons */}
                <div className="flex justify-center gap-12 mb-8">
                  <div className="p-6 rounded-full bg-marca-steel/20">
                    <Package className="h-16 w-16 text-marca-steel" aria-hidden="true" />
                  </div>
                  <div className="p-6 rounded-full bg-marca-steel/20">
                    <Plane className="h-16 w-16 text-marca-steel" aria-hidden="true" />
                  </div>
                </div>

                {/* Logo Placeholder */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-marca-steel mb-2">
                    Altrix Solutions LLC
                  </div>
                  <div className="text-sm text-muted-foreground">International Operations Partner</div>
                  {/* Replace with actual logo: */}
                  {/* <Image src="/images/logos/altrix-logo.svg" alt="Altrix Solutions LLC" width={250} height={80} /> */}
                </div>

                {/* Connection */}
                <div className="flex items-center justify-center gap-4 text-sm font-semibold text-muted-foreground">
                  <span>🇺🇸 USA</span>
                  <span className="text-2xl">↔</span>
                  <span>🇧🇴 Bolivia</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-marca-steel/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-marca-steel/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 p-6 rounded-lg bg-background border-l-4 border-marca-steel shadow-md">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Nota para potenciales aliados:</span> La estructura
              Marca Fusión + Altrix Solutions nos permite ofrecer un soporte integral tanto en territorio boliviano
              como en operaciones internacionales. Si tu alianza requiere coordinación transfronteriza, contamos con
              la capacidad operativa para hacerlo posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
