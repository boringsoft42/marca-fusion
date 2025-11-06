'use client';

import { cn } from '@/lib/utils';
import { Package, Sparkles, Gift, Award } from 'lucide-react';

/**
 * Tablú Icon Ribbon
 *
 * Features:
 * - 4 feature icons with labels
 * - Horizontal ribbon layout
 * - Responsive design
 * - Visual trust indicators
 * - Follows STYLE-GUIDE.md design patterns
 */

interface IconRibbonProps {
  className?: string;
}

export function IconRibbon({ className }: IconRibbonProps) {
  const features = [
    {
      icon: Package,
      title: 'Envío Seguro',
      description: 'Empaquetado profesional',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Sparkles,
      title: 'Diseños Únicos',
      description: 'Exclusivos y originales',
      color: 'text-marca-beige',
      bgColor: 'bg-marca-beige/10',
    },
    {
      icon: Gift,
      title: 'Gift Cards',
      description: 'Tarjetas de regalo',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Materiales de primera',
      color: 'text-marca-green',
      bgColor: 'bg-marca-green/10',
    },
  ];

  return (
    <section className={cn('py-12 md:py-16 bg-muted/30 border-y border-border', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-background transition-colors duration-200"
              >
                {/* Icon Container */}
                <div className={cn('p-4 rounded-full', feature.bgColor)}>
                  <feature.icon className={cn('h-8 w-8 md:h-10 md:w-10', feature.color)} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
