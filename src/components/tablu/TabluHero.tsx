'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Tablú Hero Section - Peru Style
 *
 * Features:
 * - Vibrant coral/pink background (#FF7777)
 * - Colorful decorative elements (organic shapes, leaves)
 * - Bold typography
 * - Playful design with floating elements
 * - Discount bubble
 * - Inspired by tablu.com.pe design
 */

interface TabluHeroProps {
  className?: string;
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-0 bg-[#FF7777] overflow-hidden min-h-[600px]', className)}>
      {/* Decorative Elements - Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="0" cy="0" r="100" fill="#FFD166" />
          <path d="M0,0 Q50,-50 100,0 T200,0" fill="#4A5BA8" opacity="0.7" />
        </svg>
      </div>

      {/* Decorative Elements - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-40">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="350" cy="350" r="150" fill="#FFD166" />
          <path d="M300,400 Q320,350 350,330 L400,400" fill="#4A5BA8" opacity="0.8" />
        </svg>
      </div>

      {/* Decorative Leaves - Top Right */}
      <div className="absolute top-10 right-20 opacity-70">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <path d="M50,10 Q70,30 60,50 Q50,70 30,60 Q10,50 20,30 Q30,10 50,10" fill="#2ECC71" />
          <path d="M55,15 Q65,25 60,40 Q55,55 40,50 Q25,45 30,30 Q35,15 55,15" fill="#27AE60" opacity="0.8" />
        </svg>
      </div>

      {/* Decorative Leaves - Bottom Left */}
      <div className="absolute bottom-20 left-10 opacity-60">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,80 Q40,70 50,50 Q60,30 70,20" stroke="#2ECC71" strokeWidth="8" fill="none" strokeLinecap="round" />
          <ellipse cx="70" cy="20" rx="15" ry="25" fill="#27AE60" transform="rotate(-30 70 20)" />
        </svg>
      </div>

      {/* Discount Floating Bubble */}
      <motion.div
        initial={{ y: 10, rotate: -5 }}
        animate={{ y: [10, -10, 10], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] z-20"
      >
        <div className="relative">
          <div className="bg-[#FFD166] text-[#1a1a1a] rounded-full px-6 py-4 shadow-2xl transform -rotate-12">
            <div className="text-center">
              <div className="text-sm font-bold">Obtén 10%</div>
              <div className="text-xs">dscto 🎁</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Heading with Blue Color */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A5BA8] mb-6 leading-tight"
                >
                  Elige el formato que más necesites
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-block bg-[#4A5BA8] text-white px-6 py-3 rounded-full"
                >
                  <p className="text-sm md:text-base">
                    Nuestros imantados se encuentran en la categoría Home y Rutina
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Product Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
                  alt="Planificador Digital Tablú"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
