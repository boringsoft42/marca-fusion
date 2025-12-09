'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Marca Fusión Corporate Group Detail Section
 *
 * Features:
 * - World map visual representation
 * - USA-Bolivia connection arrows
 * - Clickable Altrix logo
 * - Corporate group explanation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupDetailProps {
  className?: string;
}

export function CorporateGroupDetail({ className }: CorporateGroupDetailProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section className={cn('py-16 md:py-24 bg-[#1a1a1a]', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-6">
              Grupo Corporativo <span className="font-bold">Marca Fusión – Altrix Solutions</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto font-medium">
              Unimos <span className="text-marca-green font-bold">presencia local</span> y <span className="text-marca-green font-bold">capacidad internacional</span> para brindar soluciones energéticas con <span className="text-marca-green font-bold">respaldo global</span>.
            </p>
          </div>

          {/* Connection Visual - Dark Theme */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl p-8 md:p-12">
              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                {/* USA - Altrix Solutions */}
                <div className="text-center">
                  <a
                    href={altrixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <div className="transition-all duration-300 hover:scale-105">
                      {/* Altrix logo - White Background */}
                      <div className="relative h-24 w-48 mx-auto mb-4 p-6 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all">
                        <Image
                          src="/images/Imagotipo_color.png"
                          alt="Altrix Solutions"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white mb-2">
                        Altrix Solutions LLC
                      </h3>
                      <p className="text-sm text-white/60 flex items-center justify-center gap-1">
                        <span className="text-lg">🇺🇸</span>
                        Estados Unidos
                      </p>
                    </div>
                  </a>
                </div>

                {/* Animated Connection Line - Bidirectional Arrows */}
                <div className="flex items-center justify-center relative">
                  <div className="relative w-full h-16 flex items-center">
                    {/* Base Line */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-[2px] bg-white/20" />
                    </div>

                    {/* Animated Light Bits - Going Right (USA -> Bolivia) - White */}
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]"
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
                      className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]"
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

                    {/* Animated Light Bits - Going Left (Bolivia -> USA) - White */}
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]"
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
                      className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.8)]"
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

                    {/* Center Icon - Bidirectional Arrows */}
                    <div className="relative flex justify-center w-full">
                      <motion.div
                        className="px-4 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg"
                        animate={{
                          boxShadow: [
                            '0 4px 12px rgba(255,255,255,0.1)',
                            '0 4px 20px rgba(255,255,255,0.3)',
                            '0 4px 12px rgba(255,255,255,0.1)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bolivia - Marca Fusión */}
                <div className="text-center">
                  <div className="transition-all duration-300 hover:scale-105">
                    {/* Marca Fusión logo - White Background */}
                    <div className="relative h-24 w-48 mx-auto mb-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all">
                      <Image
                        src="/images/Logo_Marca_Fusión_Transparente.png"
                        alt="Marca Fusión"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">
                      Marca Fusión SRL
                    </h3>
                    <p className="text-sm text-white/60 flex items-center justify-center gap-1">
                      <span className="text-lg">🇧🇴</span>
                      Bolivia
                    </p>
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
