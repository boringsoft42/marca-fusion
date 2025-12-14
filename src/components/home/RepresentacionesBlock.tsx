'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Representations Block
 *
 * Features:
 * - Split visual layout (Capstone left, Tablú right)
 * - Brand-specific styling (green for Capstone, beige for Tablú)
 * - Individual CTAs for each representation
 * - Hover effects with smooth transitions
 * - Responsive design with mobile stacking
 * - Icon integration for visual interest
 * - Follows STYLE-GUIDE.md design patterns
 */

interface RepresentacionesBlockProps {
  className?: string;
}

export function RepresentacionesBlock({ className }: RepresentacionesBlockProps) {
  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            Nuestras <span className="font-bold">Representaciones</span>
          </h2>
        </motion.div>

        {/* Split Layout - Sierra Style Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Capstone Block - Left - Sierra Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            {/* Logo */}
            <div className="flex items-start justify-between mb-6">
              <div className="relative w-32 h-16">
                <Image
                  src="/images/color_image.png"
                  alt="Capstone Green Energy"
                  fill
                  className="object-contain object-left"
                />
              </div>
              {/* Brand location */}
              <div className="text-right">
                <span className="text-sm font-medium text-sierra-text-primary uppercase tracking-wider">
                  CAPSTONE
                </span>
                <p className="text-xs text-sierra-text-secondary mt-1">
                  Green Energy
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-xl md:text-2xl font-medium text-sierra-text-primary mb-4">
                Capstone Green Energy (EE. UU.)
              </h3>
              <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                Microturbinas y soluciones energéticas limpias.
              </p>
            </div>

            {/* CTA - Sierra Style */}
            <Link
              href="/capstone"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase w-fit',
                'bg-sierra-green text-white',
                'transition-all duration-300',
                'hover:bg-sierra-green-hover',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Conocer Capstone
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Tablú Block - Right - Sierra Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] transition-shadow duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          >
            {/* Logo */}
            <div className="flex items-start justify-between mb-6">
              <div className="relative w-32 h-16">
                <Image
                  src="/images/Logo Tablu.png"
                  alt="Tablú"
                  fill
                  className="object-contain object-left"
                />
              </div>
              {/* Brand location */}
              <div className="text-right">
                <span className="text-sm font-medium text-sierra-text-primary uppercase tracking-wider">
                  TABLÚ
                </span>
                <p className="text-xs text-sierra-text-secondary mt-1">
                  Perú / México
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-xl md:text-2xl font-medium text-sierra-text-primary mb-4">
                Tablú (Perú / México)
              </h3>
              <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                Planners de acrílico personalizados para personas y empresas.
              </p>
            </div>

            {/* CTA - Sierra Style */}
            <Link
              href="/tablu"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase w-fit',
                'bg-[#DC2626] text-white',
                'transition-all duration-300',
                'hover:bg-[#B91C1C]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] focus-visible:ring-offset-2'
              )}
            >
              Ver Catálogo Tablú
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
