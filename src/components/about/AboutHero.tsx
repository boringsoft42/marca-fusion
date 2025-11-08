'use client';

import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Marca Fusión About Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background
 * - Professional Santa Cruz cityscape image from Unsplash
 * - Framer Motion fade-in animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-sierra-cream',
        className
      )}
    >
      {/* Background Image - Business partnership and energy */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2070&auto=format&fit=crop&sharpen=50"
          alt="Colaboración empresarial y tecnología"
          fill
          className="object-cover opacity-50 brightness-110 contrast-110"
          priority
        />
        {/* Green tinted overlay for brand color */}
        <div className="absolute inset-0 bg-sierra-green/5" />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/80 via-sierra-cream/50 to-sierra-cream/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <MapPin className="h-4 w-4 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium text-sierra-text-primary">
              Santa Cruz de la Sierra, Bolivia
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-sierra-text-primary leading-tight tracking-tight mb-6"
          >
            Sobre Nosotros
          </motion.h1>

          {/* Subtitle - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto"
          >
            Conectamos Bolivia con el mundo a través de representaciones estratégicas que impulsan innovación, sostenibilidad y desarrollo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
