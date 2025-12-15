'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Sectors Hero Section - Two Column Layout
 *
 * Features:
 * - Two-column layout (text left, logos right)
 * - Sub-heading with diamond symbol
 * - Large bold title split across two lines
 * - Descriptive paragraph in grey
 * - Right card visual with image top and black content bottom
 * - Clean white background
 * - Follows provided visual reference
 */

interface SectorsHeroProps {
  className?: string;
}

export function SectorsHero({ className }: SectorsHeroProps) {
  return (
    <section className={cn('relative bg-white pt-8 pb-6 md:pt-12 md:pb-8 lg:pt-16 lg:pb-10 overflow-hidden min-h-screen flex items-center', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Sub-heading with diamond symbol */}
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider font-medium text-[#1a1a1a]">
                  ◆ Nuestros Sectores
                </span>
              </div>

              {/* Main Title - Large, bold, split across two lines */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Soluciones para cada{' '}
                <span className="block">sector.</span>
              </h1>

              {/* Description - medium size, normal weight, grey */}
              <p className="text-base md:text-lg leading-relaxed text-[#666] max-w-xl">
                Desde grandes industrias hasta espacios personales, conectamos tecnología y organización
                para impulsar el éxito en cada ámbito.
              </p>
            </div>

            {/* Right Column - Visual Card */}
            <div className="lg:pl-8 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a]"
              >
                {/* Top Image Section */}
                <div className="relative h-72 w-full bg-gray-100">
                  <Image
                    src="/images/Santa Cruz (1).jpg"
                    alt="Sectores Marca Fusión"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay gradient to blend with black bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Bottom Black Section */}
                <div className="bg-[#1a1a1a] p-8 text-white relative z-10 -mt-2">
                  <p className="text-lg font-medium leading-relaxed mb-8 text-white/90 italic">
                    "Innovación energética y organización personal. Dos mundos, un compromiso de calidad."
                  </p>
                  
                  {/* Logos Row */}
                  <div className="flex items-center justify-between border-t border-white/20 pt-6">
                    {/* Capstone Logo - White/Inverted */}
                    <div className="relative h-10 w-32 opacity-90 hover:opacity-100 transition-opacity">
                      <Image
                        src="/images/color_image.png"
                        alt="Capstone"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    
                    {/* Divider */}
                    <div className="h-8 w-px bg-white/20 mx-2"></div>

                    {/* Tablu Logo - White/Inverted */}
                    <div className="relative h-10 w-24 opacity-90 hover:opacity-100 transition-opacity">
                      <Image
                        src="/images/Logo Tablu.png"
                        alt="Tablú"
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 text-right">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                      MARCA FUSIÓN SRL
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
