'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowLeftRight, ArrowRight } from 'lucide-react';
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
        'bg-[#1a1a1a] py-16 md:py-20 lg:py-24 overflow-hidden relative',
        className
      )}
    >
      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none z-10" />
      <div className="container relative z-20 mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-4">
            Un <span className="font-bold">grupo</span>, una <span className="font-bold">visión</span>: conectar Bolivia con el mundo
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
              <div className="relative group inline-flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-sm blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-sm p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300">
                  <div className="relative h-16 w-32 mb-4">
                    <Image
                      src="/images/Logo_Marca_Fusión_Transparente.png"
                      alt="Marca Fusión"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Marca Fusión
                  </h3>
                  <p className="text-sm text-white/90 flex items-center gap-1">
                    <span className="text-lg">🇧🇴</span>
                    Bolivia
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Connection Line - Subtle Data Flow */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-full h-16 flex items-center">
                {/* Base Connection Line - Subtle */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Animated Gradient Pulse - Subtle flow effect */}
                <motion.div
                  className="absolute h-[2px] w-1/3 bg-gradient-to-r from-transparent via-marca-green/40 to-transparent"
                  initial={{ left: '-33%', opacity: 0 }}
                  animate={{
                    left: ['-33%', '133%'],
                    opacity: [0, 0.6, 0.6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0,
                  }}
                />

                {/* Second Pulse - Delayed for continuous flow */}
                <motion.div
                  className="absolute h-[2px] w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ left: '-33%', opacity: 0 }}
                  animate={{
                    left: ['-33%', '133%'],
                    opacity: [0, 0.5, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                />

                {/* Center Connection Node - Professional Design */}
                <div className="relative flex justify-center w-full">
                  <div className="relative">
                    {/* Outer ring - subtle pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-marca-green/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {/* Inner node */}
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                      <ArrowLeftRight className="h-5 w-5 text-marca-green/80" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Subtle connection dots along the line */}
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute h-1 w-1 rounded-full bg-marca-green/40"
                    style={{
                      left: `${20 + index * 15}%`,
                    }}
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Altrix Solutions - USA */}
            <div className="text-center">
              <div className="relative group inline-flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-sm blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-sm p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300">
                  <div className="relative h-16 w-32 mb-4">
                    <Image
                      src="/images/Imagotipo_color.png"
                      alt="Altrix Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    Altrix Solutions
                  </h3>
                  <p className="text-sm text-white/90 flex items-center gap-1">
                    <span className="text-lg">🇺🇸</span>
                    USA
                  </p>
                </div>
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
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <p className="text-[15px] md:text-base text-[#a0a0a0] leading-relaxed">
            <span className="text-white font-medium">Marca Fusión (Bolivia)</span> forma parte del grupo corporativo junto a empresa especializada en comercio internacional y representación técnica de equipos energéticos bajo modalidad <span className="text-marca-green font-medium">EXW USA</span> con destino final a Bolivia.
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
              'inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[15px] font-medium',
              'bg-marca-green text-white',
              'transition-colors duration-200',
              'hover:bg-marca-green/90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]'
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
