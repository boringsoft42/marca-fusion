'use client';

import { cn } from '@/lib/utils';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Partnerships Hero Section - Two Column Layout
 *
 * Features:
 * - Two-column layout (text left, visual right)
 * - Sub-heading with diamond symbol
 * - Large bold title split across two lines
 * - Descriptive paragraph in grey
 * - Right card visual with image top and black content bottom
 * - Clean white background
 * - Follows provided visual reference
 */

interface PartnershipsHeroProps {
  className?: string;
}

export function PartnershipsHero({ className }: PartnershipsHeroProps) {
  return (
    <section className={cn('relative bg-white pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 overflow-hidden min-h-screen flex items-center', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Sub-heading with diamond symbol */}
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider font-medium text-[#1a1a1a]">
                  ◆ Alianzas Estratégicas
                </span>
              </div>

              {/* Main Title - Large, bold */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight tracking-tight">
                Crezcamos <span className="block">Juntos.</span>
              </h1>

              {/* Description - medium size, normal weight, grey */}
              <p className="text-base md:text-lg leading-relaxed text-[#666] max-w-xl">
                Creemos en las alianzas estratégicas como el motor del progreso.
                <br />
                En Marca Fusión, unimos la solidez empresarial boliviana con la innovación de partners nacionales e internacionales.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <button
                  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-sm font-medium',
                    'bg-[#1a1a1a] text-white',
                    'transition-colors duration-200',
                    'hover:bg-black',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
                  )}
                >
                  <Handshake className="h-4 w-4" strokeWidth={1.5} />
                  Conocer más
                </button>
              </div>
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
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2070&q=80"
                    alt="Alianzas Estratégicas"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Bottom Black Section */}
                <div className="bg-[#1a1a1a] p-8 text-white relative z-10 -mt-2">
                  <p className="text-lg font-medium leading-relaxed mb-8 text-white/90 italic">
                    &ldquo;El éxito de una alianza no se mide solo en términos comerciales, sino en el valor compartido que creamos juntos.&rdquo;
                  </p>
                  
                  <div className="mt-6 text-right border-t border-white/20 pt-6">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                      FILOSOFÍA MARCA FUSIÓN
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
