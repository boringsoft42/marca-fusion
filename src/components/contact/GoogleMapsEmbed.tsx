'use client';

import { cn } from '@/lib/utils';

/**
 * Google Maps Embed Component
 *
 * Features:
 * - Embedded Google Map
 * - Santa Cruz office location
 * - Responsive iframe
 * - Loading state
 * - Follows STYLE-GUIDE.md design patterns
 */

interface GoogleMapsEmbedProps {
  className?: string;
}

export function GoogleMapsEmbed({ className }: GoogleMapsEmbedProps) {
  // Google Maps embed URL for Santa Cruz de la Sierra, Bolivia
  // Replace with actual office location coordinates when available
  const mapsEmbedUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30528.15!2d-63.1812!3d-17.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c7f6f9f5e5%3A0x5d4e5e5e5e5e5e5e!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus';

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Encuéntranos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Visítanos en nuestra oficina en Santa Cruz de la Sierra
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={mapsEmbedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Marca Fusión en Santa Cruz de la Sierra, Bolivia"
              />
            </div>
          </div>

          {/* Map Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              <a
                href="https://maps.google.com/?q=Santa+Cruz+de+la+Sierra,Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marca-green hover:underline font-medium"
              >
                Abrir en Google Maps
              </a>
              {' '}para obtener direcciones desde tu ubicación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
