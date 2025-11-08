'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Corporate Group Section - Dark Theme
 *
 * Features:
 * - Dark background (#1a1a1a)
 * - White cards with clean styling
 * - Clean typography with high contrast
 * - Simplified connection visual with green accents
 * - Follows dark theme pattern from Footer
 */

interface CorporateGroupSectionProps {
  className?: string;
}

export function CorporateGroupSection({ className }: CorporateGroupSectionProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section
      className={cn(
        'bg-[#1a1a1a] py-16 md:py-20 lg:py-24 overflow-hidden',
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-3xl bg-[#2a2a2a] border border-[#333] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
            <Globe className="h-4 w-4 text-marca-green" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              Conexión Global
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white">
            Parte del Grupo Corporativo
          </h2>
        </motion.div>

        {/* Connection Visual - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Marca Fusión - Bolivia */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sierra-green text-white font-medium text-2xl mb-4">
                  MF
                </div>
                <h3 className="text-lg font-medium text-sierra-text-primary mb-1">
                  Marca Fusión
                </h3>
                <p className="text-sm text-sierra-text-secondary flex items-center gap-1">
                  <span className="text-lg">🇧🇴</span>
                  Bolivia
                </p>
              </div>
            </div>

            {/* Animated Connection Line - Data Transfer Visual */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-full h-16 flex items-center">
                {/* Base Line */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[2px] bg-gradient-to-r from-sierra-green via-white to-marca-steel-500 opacity-30" />
                </div>

                {/* Animated Light Bits - Going Right (Bolivia -> USA) */}
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
                  initial={{ left: '0%', opacity: 0 }}
                  animate={{
                    left: ['0%', '100%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0,
                  }}
                />
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"
                  initial={{ left: '0%', opacity: 0 }}
                  animate={{
                    left: ['0%', '100%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.7,
                  }}
                />

                {/* Animated Light Bits - Going Left (USA -> Bolivia) */}
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-marca-green shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]"
                  initial={{ left: '100%', opacity: 0 }}
                  animate={{
                    left: ['100%', '0%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.35,
                  }}
                />
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-marca-green shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]"
                  initial={{ left: '100%', opacity: 0 }}
                  animate={{
                    left: ['100%', '0%'],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1.05,
                  }}
                />

                {/* Center Icon - Data Transfer */}
                <div className="relative flex justify-center w-full">
                  <motion.div
                    className="px-4 py-2 bg-[#2a2a2a] rounded-full border border-[#333] shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                    animate={{
                      boxShadow: [
                        '0 2px 8px rgba(0,0,0,0.1)',
                        '0 2px 12px rgba(16,185,129,0.3)',
                        '0 2px 8px rgba(0,0,0,0.1)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="h-6 w-6 text-marca-green" strokeWidth={1.5} aria-hidden="true" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Altrix Solutions - USA */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-marca-steel-500 text-white font-medium text-xl mb-4">
                  AS
                </div>
                <h3 className="text-lg font-medium text-sierra-text-primary mb-1">
                  Altrix Solutions
                </h3>
                <p className="text-sm text-sierra-text-secondary flex items-center gap-1">
                  <span className="text-lg">🇺🇸</span>
                  USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-8"
        >
          <p className="text-[15px] md:text-base text-[#a0a0a0] leading-relaxed">
            Marca Fusión trabaja en colaboración con <span className="text-white font-medium">Altrix Solutions LLC</span> en Estados Unidos para la <span className="text-marca-green font-medium">importación y distribución de equipos Capstone</span> hacia Bolivia.
          </p>
        </motion.div>

        {/* CTA - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href={altrixUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
              'bg-marca-steel-500 text-white',
              'transition-colors duration-200',
              'hover:bg-marca-steel-600',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-steel-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
            )}
          >
            Conocer Altrix Solutions
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
