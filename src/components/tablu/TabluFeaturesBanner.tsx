'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Truck, Tag, Gift, Star } from 'lucide-react';

/**
 * Tablu Features Banner
 * 
 * Displays key benefits with icons in a light cream background,
 * mimicking a hand-drawn or friendly aesthetic as per reference.
 */

export function TabluFeaturesBanner() {
  const features = [
    {
      icon: Truck,
      text: "Envíos a todo el país", // Adapted to Bolivia context based on project
    },
    {
      icon: Tag,
      text: "Diseños únicos",
    },
    {
      icon: Gift,
      text: "Gift cards",
    },
    {
      icon: Star,
      text: "Excelente calidad",
    }
  ];

  return (
    <section className="bg-[#FFFDE7] py-8 border-t border-b border-[#2d8d7b]/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[140px] flex flex-col items-center justify-center text-center gap-3 group"
            >
              <div className="text-[#2d8d7b] transition-transform duration-300 group-hover:-translate-y-1">
                <feature.icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <p className="text-[#2d8d7b] font-medium text-lg md:text-xl font-handwriting md:whitespace-nowrap">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
