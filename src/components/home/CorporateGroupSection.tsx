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
                className="text-base md:text-lg leading-relaxed max-w-2xl mb-6"
              >
                <span className="font-semibold">Marca Fusión</span> forma parte de un grupo corporativo con presencia internacional, junto a <span className="font-semibold">Altrix Solutions (EE. UU.)</span>, empresa dedicada al comercio exterior y la representación técnica de equipos energéticos bajo modalidad <span className="font-semibold">EXW</span>.
              </motion.p>

              {/* Additional synergy text */}
              <motion.p
                style={{ color: subtitleColor }}
                className="text-base md:text-lg leading-relaxed max-w-2xl"
              >
                Esta sinergia nos permite conectar directamente con fabricantes internacionales, optimizando tiempos de entrega y garantizando soporte técnico de primer nivel.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <a
                  href={altrixUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wide',
                    'bg-[#0D6832] text-white',
                    'transition-all duration-200',
                    'hover:bg-[#0a5528]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2'
                  )}
                >
                  Conocer Altrix Solutions
                  <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Right Column - Corporate Group Visual */}
            <div className="lg:pl-8">
              <motion.div
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-[#0f1115]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/Grupo Altrix - Marca Fusión.png"
                  alt="Mapa mundial mostrando conexión entre Altrix Solutions en USA y Marca Fusión en Bolivia"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
