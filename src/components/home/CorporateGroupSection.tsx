'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Marca Fusión Corporate Group Section
 *
 * Features:
 * - Two-column layout (text left, logos right)
 * - Scroll-based color animation (white to black)
 * - USA-Bolivia connection visualization
 * - Clickable Altrix logo
 * - Professional design with dynamic background
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupSectionProps {
  className?: string;
}

export function CorporateGroupSection({ className }: CorporateGroupSectionProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll animation for text color
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to color values (0 = white, 1 = black)
  const titleColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['rgb(255, 255, 255)', 'rgb(180, 180, 180)', 'rgb(80, 80, 80)', 'rgb(0, 0, 0)']
  );
  
  const subtitleColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['rgb(255, 255, 255)', 'rgb(180, 180, 180)', 'rgb(80, 80, 80)', 'rgb(0, 0, 0)']
  );

  const labelColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['rgb(255, 255, 255)', 'rgb(180, 180, 180)', 'rgb(80, 80, 80)', 'rgb(0, 0, 0)']
  );

  const ctaColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['rgb(255, 255, 255)', 'rgb(180, 180, 180)', 'rgb(80, 80, 80)', 'rgb(0, 0, 0)']
  );

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(26, 26, 26)', 'rgb(245, 245, 245)', 'rgb(255, 255, 255)']
  );

  return (
    <section 
      ref={sectionRef}
      className={cn('py-16 md:py-24 lg:py-32 relative overflow-hidden', className)}
    >
      {/* Background that transitions from dark to white */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundColor: bgColor,
        }}
      />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Category Label */}
              <motion.div 
                className="flex items-center gap-2"
                style={{ color: labelColor }}
              >
                <span className="text-sm uppercase tracking-wider font-medium">
                  ◆ Grupo Corporativo
                </span>
              </motion.div>

              {/* Main Title with Scroll Animation */}
              <motion.h2 
                style={{ color: titleColor }}
                className="text-4xl md:text-5xl font-normal leading-tight"
              >
                Un grupo, una{' '}
                <span className="font-semibold">visión</span>: conectar Bolivia con el mundo
              </motion.h2>

              {/* Subtitle with Scroll Animation */}
              <motion.p 
                style={{ color: subtitleColor }}
                className="text-base md:text-lg leading-relaxed max-w-2xl"
              >
                <span className="font-semibold">Marca Fusión (Bolivia)</span> forma parte del grupo corporativo junto a empresa especializada en comercio internacional y representación técnica de equipos energéticos bajo modalidad <span className="font-semibold">EXW USA</span> con destino final a Bolivia.
              </motion.p>

              {/* CTA Link */}
              <motion.div 
                className="pt-4"
                style={{ color: ctaColor }}
              >
                <a
                  href={altrixUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-marca-green transition-colors duration-200 group"
                >
                  <span className="font-medium">Conocer Altrix Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* Right Column - Logos and Connection */}
            <div className="lg:pl-8">
              <div className="relative">
                {/* Connection Visual - Light Theme */}
                <div className="relative overflow-hidden rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] shadow-sm p-8 md:p-12">
                  <div className="relative z-10 grid grid-cols-2 gap-6 items-center">
                    {/* Bolivia - Marca Fusión */}
                    <div className="text-center">
                      <div className="transition-all duration-300 hover:scale-105">
                        {/* Marca Fusión logo */}
                        <div className="relative h-20 w-40 mx-auto mb-4 p-4 rounded-sm bg-white shadow-md hover:shadow-lg transition-all">
                          <Image
                            src="/images/Logo_Marca_Fusión_Transparente.png"
                            alt="Marca Fusión"
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-[#1a1a1a] mb-2">
                          Marca Fusión
                        </h3>
                        <p className="text-xs text-[#666] flex items-center justify-center gap-1">
                          <span className="text-base">🇧🇴</span>
                          Bolivia
                        </p>
                      </div>
                    </div>

                    {/* USA - Altrix Solutions */}
                    <div className="text-center">
                      <a
                        href={altrixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-block"
                      >
                        <div className="transition-all duration-300 hover:scale-105">
                          {/* Altrix logo */}
                          <div className="relative h-20 w-40 mx-auto mb-4 p-4 rounded-sm bg-white shadow-md group-hover:shadow-lg transition-all">
                            <Image
                              src="/images/Imagotipo_color.png"
                              alt="Altrix Solutions"
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <h3 className="text-sm md:text-base font-bold text-[#1a1a1a] mb-2">
                            Altrix Solutions
                          </h3>
                          <p className="text-xs text-[#666] flex items-center justify-center gap-1">
                            <span className="text-base">🇺🇸</span>
                            USA
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Animated Connection - Elegant Wave Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8">
                    <div className="relative h-16 flex items-center">
                      {/* Base subtle line */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent" />
                      </div>

                      {/* Animated gradient wave flowing right */}
                      <motion.div
                        className="absolute h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#2D5F3F] to-transparent"
                        style={{
                          filter: 'blur(1px)',
                        }}
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                          left: ['0%', '100%'],
                          opacity: [0, 0.8, 0.8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0,
                        }}
                      />

                      {/* Animated gradient wave flowing left */}
                      <motion.div
                        className="absolute h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#2D5F3F] to-transparent"
                        style={{
                          filter: 'blur(1px)',
                        }}
                        initial={{ right: '0%', opacity: 0 }}
                        animate={{
                          right: ['0%', '100%'],
                          opacity: [0, 0.8, 0.8, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.5,
                        }}
                      />

                      {/* Center connection point with pulsing effect */}
                      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <motion.div
                          className="relative"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          {/* Outer pulse ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border border-[#2D5F3F]"
                            animate={{
                              scale: [1, 1.5],
                              opacity: [0.6, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeOut',
                            }}
                            style={{
                              width: '12px',
                              height: '12px',
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                            }}
                          />
                          {/* Inner solid dot */}
                          <div
                            className="w-2 h-2 rounded-full bg-[#2D5F3F]"
                            style={{
                              boxShadow: '0 0 8px rgba(45, 95, 63, 0.5)',
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
