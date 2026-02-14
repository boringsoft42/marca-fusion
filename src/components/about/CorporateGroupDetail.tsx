'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Marca Fusión Corporate Group Detail Section
 *
 * Features:
 * - Two-column layout (text left, logos right)
 * - Scroll-based color animation (white to black)
 * - USA-Bolivia connection visualization
 * - Clickable Altrix logo
 * - Professional white background design
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupDetailProps {
  className?: string;
}

export function CorporateGroupDetail({ className }: CorporateGroupDetailProps) {
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
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Conectando operaciones globales con Bolivia
              </motion.h2>

              {/* Subtitle with Scroll Animation */}
              <motion.p 
                style={{ color: subtitleColor }}
                className="text-base md:text-lg leading-relaxed max-w-2xl font-normal"
              >
                <span className="font-semibold">Marca Fusión (Bolivia)</span> forma parte del grupo corporativo junto a{' '}
                <span className="font-semibold">empresa especializada en comercio internacional</span> y representación técnica de equipos energéticos bajo modalidad{' '}
                <span className="font-semibold">EXW USA</span> con destino final a Bolivia.
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

            {/* Right Column - Corporate Group Image */}
            <div className="lg:pl-8">
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/Grupo Corporativo.png"
                  alt="Grupo Corporativo - Altrix Solutions y Marca Fusión"
                  width={1200}
                  height={900}
                  className="w-full h-auto scale-110"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
