'use client';

import { cn } from '@/lib/utils';
import { Calendar, Sparkles, Heart } from 'lucide-react';

/**
 * Tablú Hero Section
 *
 * Features:
 * - Light beige background with gradient
 * - Acrylic glass morphism effect
 * - Product showcase imagery
 * - Tablú branding (Bolivia & Perú)
 * - Key value propositions
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface TabluHeroProps {
  className?: string;
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 bg-gradient-to-br from-marca-beige/30 via-marca-beige/20 to-background overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Brand Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-marca-beige shadow-sm">
                <Sparkles className="h-4 w-4 text-marca-beige" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">
                  Tablú Bolivia & Perú
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  Organiza tu Vida con Estilo
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Planificadores digitales en acrílico y magnéticos. Diseños únicos para cada momento de tu vida.
                </p>
              </div>

              {/* Value Props Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marca-beige/20 border border-marca-beige/30">
                  <Calendar className="h-4 w-4 text-marca-beige" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">8 Categorías</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marca-beige/20 border border-marca-beige/30">
                  <Heart className="h-4 w-4 text-marca-beige" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">Diseños Únicos</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-marca-beige/20 border border-marca-beige/30">
                  <Sparkles className="h-4 w-4 text-marca-beige" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">Personalizable</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#catalogo"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                    'bg-marca-beige text-white shadow-lg',
                    'transition-all duration-200',
                    'hover:bg-marca-beige/90 hover:shadow-xl hover:scale-105',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                  )}
                >
                  Ver Catálogo Completo
                </a>
                <a
                  href="https://wa.me/59167710595?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20planificadores%20Tablú"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                    'bg-white/80 text-foreground border-2 border-marca-beige/30 backdrop-blur-sm shadow-lg',
                    'transition-all duration-200',
                    'hover:bg-white hover:border-marca-beige/50 hover:shadow-xl hover:scale-105',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                  )}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column - Product Showcase */}
            <div className="relative">
              {/* Acrylic Glass Effect Card */}
              <div className="relative rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-marca-beige/20" />

                {/* Product Image Placeholder */}
                <div className="relative aspect-square rounded-xl bg-gradient-to-br from-marca-beige/30 to-marca-beige/10 flex items-center justify-center overflow-hidden">
                  {/* Placeholder content */}
                  <div className="text-center space-y-4 p-8">
                    <Calendar className="h-24 w-24 mx-auto text-marca-beige/60" aria-hidden="true" />
                    <p className="text-lg font-semibold text-muted-foreground">
                      Planificador Digital
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Acrílico Premium con Marcadores Incluidos
                    </p>
                  </div>

                  {/* If you have actual product images, replace with: */}
                  {/* <Image
                    src="/images/products/tablu-hero-product.jpg"
                    alt="Planificador Tablú"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>

                {/* Floating feature badges */}
                <div className="absolute -top-4 -right-4 bg-marca-beige text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                  <span className="text-sm font-bold">¡Nuevo!</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-marca-beige/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-marca-beige/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-marca-beige/20">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">Categorías</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Diseños</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">5⭐</div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Países</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
