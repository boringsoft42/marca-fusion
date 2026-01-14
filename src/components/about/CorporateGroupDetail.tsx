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
                Un grupo, una visión: conectar Bolivia con el mundo
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

            {/* Right Column - Logos and Connection */}
            <div className="lg:pl-8">
              <motion.div 
                className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* World Map Background */}
                <div className="absolute inset-0 bg-[#0f1115]">
                  <Image
                    src="/images/world_map_bg.png"
                    alt="World Map Background"
                    fill
                    className="object-cover opacity-60 transition-transform duration-[20s] ease-linear group-hover:scale-110"
                    priority
                  />
                  {/* Gradient Overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/80 via-transparent to-[#0f1115]/80" />
                </div>

                {/* Animated Connection Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {/* USA Pulse (Approximate location) */}
                  <div className="absolute top-[30%] left-[35%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/30 blur-md"
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: 40, height: 40, left: -20, top: -20 }}
                      />
                      <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] relative z-10" />
                    </div>
                  </div>

                  {/* Bolivia Pulse (Approximate location) */}
                  <div className="absolute top-[65%] left-[40%] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-500/30 blur-md"
                        animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        style={{ width: 40, height: 40, left: -20, top: -20 }}
                      />
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] relative z-10" />
                    </div>
                  </div>

                  {/* Connecting Line (SVG) */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Curved path connecting USA (35%, 30%) and Bolivia (40%, 65%) */}
                    {/* Using cubic bezier for a nice curve */}
                    <motion.path
                      d="M 350 150 Q 450 300 400 325" 
                      // Note: These coordinates are relative to a 1000x500 viewBox assumption or need to be responsive.
                      // Better to use percentages in CSS or a responsive SVG.
                      // Let's use a responsive path with vector-effect="non-scaling-stroke" if possible, 
                      // but SVG paths need absolute units usually.
                      // Instead, I'll use a simple straight line with a curve in a 100x100 coordinate system and scale it.
                    />
                  </svg>
                  
                  {/* Responsive SVG Line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      d="M 35 30 C 35 30, 50 45, 40 65"
                      fill="none"
                      stroke="url(#connectionGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="5 5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                     <motion.circle
                      r="1"
                      fill="#fff"
                      filter="url(#glow)"
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 35 30 C 35 30, 50 45, 40 65"
                      />
                    </motion.circle>
                  </svg>
                </div>

                {/* Cards Container */}
                <div className="relative z-20 h-full flex flex-col justify-center items-center p-6 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                    {/* Altrix Solutions (USA) */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="group/card"
                    >
                      <a
                        href={altrixUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      >
                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover/card:opacity-100 transition-opacity">
                          <span className="text-xl">🇺🇸</span>
                        </div>
                        <div className="h-16 w-full relative mb-4">
                          <Image
                            src="/images/Imagotipo_color.png"
                            alt="Altrix Solutions"
                            fill
                            className="object-contain brightness-0 invert opacity-90 group-hover/card:opacity-100 transition-all"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-white font-bold text-lg mb-1">Altrix Solutions</h3>
                          <p className="text-white/60 text-xs uppercase tracking-wider">USA Headquarters</p>
                        </div>
                      </a>
                    </motion.div>

                    {/* Marca Fusión (Bolivia) */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="group/card"
                    >
                      <div className="block relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                        <div className="absolute top-0 right-0 p-3 opacity-50 group-hover/card:opacity-100 transition-opacity">
                          <span className="text-xl">🇧🇴</span>
                        </div>
                        <div className="h-16 w-full relative mb-4">
                          <Image
                            src="/images/Logo_Marca_Fusión_Transparente.png"
                            alt="Marca Fusión"
                            fill
                            className="object-contain brightness-0 invert opacity-90 group-hover/card:opacity-100 transition-all"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-white font-bold text-lg mb-1">Marca Fusión</h3>
                          <p className="text-white/60 text-xs uppercase tracking-wider">Bolivia Operations</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Text */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                  >
                    <p className="text-white/80 text-sm font-light tracking-wide max-w-md mx-auto">
                      <span className="text-blue-400 font-medium">Conexión Global</span> • Infraestructura compartida y logística integrada
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
