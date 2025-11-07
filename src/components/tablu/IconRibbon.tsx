'use client';

import { motion } from 'framer-motion';
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
 * - Follows Sierra style guide
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
      color: 'text-[#0d6832]',
      bgColor: 'bg-[#0d6832]/10',
    },
    {
      icon: Sparkles,
      title: 'Diseños Únicos',
      description: 'Exclusivos y originales',
      color: 'text-[#0d6832]',
      bgColor: 'bg-[#0d6832]/10',
    },
    {
      icon: Gift,
      title: 'Gift Cards',
      description: 'Tarjetas de regalo',
      color: 'text-[#0d6832]',
      bgColor: 'bg-[#0d6832]/10',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Materiales de primera',
      color: 'text-[#0d6832]',
      bgColor: 'bg-[#0d6832]/10',
    },
  ];

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-[#ebe8e3]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200"
              >
                {/* Icon Container */}
                <div className={cn('p-4 rounded-full', feature.bgColor)}>
                  <feature.icon className={cn('h-8 w-8 md:h-10 md:w-10', feature.color)} strokeWidth={1.5} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#1a1a1a]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#6b6b6b]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
