'use client';

import { cn } from '@/lib/utils';

/**
 * Marca Fusión Client Showcase - Sierra Style
 *
 * Features:
 * - White background with Sierra styling
 * - Auto-scrolling logo ribbons
 * - Clean, minimal design
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface ClientShowcaseProps {
  className?: string;
}

export function ClientShowcase({ className }: ClientShowcaseProps) {
  // Placeholder client logos
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

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            Nuestros Clientes
          </h2>
        </div>

        {/* Split Layout - Sierra Style */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Capstone Clients */}
          <div className="space-y-4">
            {/* Label */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-sierra-green mb-2">
                Clientes Capstone
              </h3>
              <div className="w-16 h-1 bg-sierra-green mx-auto rounded-full" />
            </div>

            {/* Scrolling logos container */}
            <div className="relative overflow-hidden rounded-2xl bg-sierra-green/5 py-8">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sierra-green/5 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sierra-green/5 to-transparent z-10" />

              {/* Scrolling content */}
              <div
                className="flex gap-8 animate-scroll hover:pause-animation"
                style={{
                  animation: 'scroll 30s linear infinite',
                }}
              >
                {capstoneLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] min-w-[200px]"
                  >
                    <span className="text-sm font-medium text-sierra-text-primary text-center">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablú Clients */}
          <div className="space-y-4">
            {/* Label */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-medium text-marca-beige-500 mb-2">
                Clientes Tablú
              </h3>
              <div className="w-16 h-1 bg-marca-beige-500 mx-auto rounded-full" />
            </div>

            {/* Scrolling logos container */}
            <div className="relative overflow-hidden rounded-2xl bg-marca-beige-500/5 py-8">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-marca-beige-500/5 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-marca-beige-500/5 to-transparent z-10" />

              {/* Scrolling content */}
              <div
                className="flex gap-8 animate-scroll-reverse hover:pause-animation"
                style={{
                  animation: 'scroll-reverse 35s linear infinite',
                }}
              >
                {tabluLogos.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] min-w-[200px]"
                  >
                    <span className="text-sm font-medium text-sierra-text-primary text-center">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
