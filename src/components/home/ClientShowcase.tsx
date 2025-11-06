'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Marca Fusión Client Showcase
 *
 * Features:
 * - Split layout (Capstone left, Tablú right)
 * - Auto-scrolling logo ribbons
 * - Infinite loop animation
 * - Pause on hover
 * - Brand-specific styling
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ClientShowcaseProps {
  className?: string;
}

export function ClientShowcase({ className }: ClientShowcaseProps) {
  const capstoneScrollRef = useRef<HTMLDivElement>(null);
  const tabluScrollRef = useRef<HTMLDivElement>(null);

  // Placeholder client logos - will be replaced with actual logos
  const capstoneClients = [
    'YPFB',
    'Petrobras',
    'Repsol',
    'Total Energies',
    'Shell',
    'Chaco',
    'Vintage Petroleum',
    'BG Bolivia',
  ];

  const tabluClients = [
    'Universidad Privada de Santa Cruz',
    'Colegio Alemán',
    'Empresa Constructora',
    'Estudio Jurídico',
    'Consultora Empresarial',
    'Agencia de Marketing',
    'Centro Médico',
    'Oficina Corporativa',
  ];

  // Duplicate arrays for infinite scroll effect
  const capstoneLogos = [...capstoneClients, ...capstoneClients];
  const tabluLogos = [...tabluClients, ...tabluClients];

  useEffect(() => {
    // Auto-scroll animation will be handled by CSS
    // This effect is for future enhancements if needed
  }, []);

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nuestros Clientes
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Capstone Clients - Left */}
          <div className="space-y-4">
            {/* Label */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-marca-green mb-2">
                Clientes Capstone
              </h3>
              <div className="w-16 h-1 bg-marca-green mx-auto rounded-full" />
            </div>

            {/* Scrolling logos container */}
            <div className="relative overflow-hidden rounded-lg bg-marca-green-light/30 border border-marca-green/20 py-8">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-marca-green-light/30 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-marca-green-light/30 to-transparent z-10" />

              {/* Scrolling content */}
              <div
                ref={capstoneScrollRef}
                className="flex gap-8 animate-scroll hover:pause-animation"
                style={{
                  animation: 'scroll 30s linear infinite',
                }}
              >
                {capstoneLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-background rounded-md border border-border shadow-sm min-w-[200px]"
                  >
                    <span className="text-sm font-medium text-foreground text-center">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablú Clients - Right */}
          <div className="space-y-4">
            {/* Label */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-marca-beige mb-2">
                Clientes Tablú
              </h3>
              <div className="w-16 h-1 bg-marca-beige mx-auto rounded-full" />
            </div>

            {/* Scrolling logos container */}
            <div className="relative overflow-hidden rounded-lg bg-marca-beige-light/30 border border-marca-beige/20 py-8">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-marca-beige-light/30 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-marca-beige-light/30 to-transparent z-10" />

              {/* Scrolling content */}
              <div
                ref={tabluScrollRef}
                className="flex gap-8 animate-scroll-reverse hover:pause-animation"
                style={{
                  animation: 'scroll-reverse 35s linear infinite',
                }}
              >
                {tabluLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-background rounded-md border border-border shadow-sm min-w-[200px]"
                  >
                    <span className="text-sm font-medium text-foreground text-center">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Note about placeholder logos */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground italic">
            {/* Placeholder for future client logo images */}
          </p>
        </div>
      </div>

      {/* CSS animations defined inline for component isolation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 35s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
