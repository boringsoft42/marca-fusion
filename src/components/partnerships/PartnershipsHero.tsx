'use client';

import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Partnerships Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background with partnership handshake image
 * - Framer Motion animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface PartnershipsHeroProps {
  className?: string;
}

export function PartnershipsHero({ className }: PartnershipsHeroProps) {
  const valuePills = ['Confianza', 'Innovación', 'Resultados', 'Crecimiento Mutuo'];

  return (
    <section
      className={cn(
        'relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-sierra-cream',
        className
      )}
    >
      {/* Background Image - Business partnership handshake */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
          alt="Business partnership collaboration"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/90 via-sierra-cream/85 to-sierra-cream/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-3xl bg-sierra-green text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
          >
            <Handshake className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Alianzas Estratégicas
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-sierra-text-primary leading-tight tracking-tight mb-6"
          >
            Crezcamos Juntos
          </motion.h1>

          {/* Subtitle - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-3xl mx-auto mb-8"
          >
            En Marca Fusión valoramos las alianzas estratégicas que generan valor mutuo.
            Si compartes nuestra visión de innovación y excelencia, conversemos.
          </motion.p>

          {/* Value Pills - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {valuePills.map((value, index) => (
              <div key={index} className="px-4 py-2 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-sm font-medium text-sierra-text-primary">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contacto"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-sierra-green text-white',
                'transition-colors duration-200',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              <Handshake className="h-4 w-4" strokeWidth={1.5} />
              Proponer Alianza
            </a>
            <a
              href="#why-choose-us"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
                'bg-white text-sierra-green border-2 border-sierra-green',
                'transition-all duration-200',
                'hover:bg-sierra-green hover:text-white',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Conocer más
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
