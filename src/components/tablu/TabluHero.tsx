'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Calendar, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';

/**
 * Tablú Hero Section
 *
 * Features:
 * - Sierra-style clean design with warm beige background
 * - Professional Unsplash image of organized workspace
 * - Smooth framer-motion animations
 * - Tablú branding (Bolivia & Perú)
 * - Key value propositions
 * - Responsive design
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface TabluHeroProps {
  className?: string;
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-16 md:py-20 lg:py-24 bg-[#ebe8e3] overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Brand Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <Sparkles className="h-4 w-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-medium text-[#1a1a1a]">
                  Tablú Bolivia & Perú
                </span>
              </motion.div>

              {/* Main Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[48px] font-normal text-[#1a1a1a] mb-4 leading-tight"
                >
                  Organiza tu Vida con Estilo
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-[15px] text-[#6b6b6b] leading-relaxed"
                >
                  Planificadores digitales en acrílico y magnéticos. Diseños únicos para cada momento de tu vida.
                </motion.p>
              </div>

              {/* Value Props Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Calendar className="h-4 w-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[15px] font-medium text-[#1a1a1a]">8 Categorías</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Heart className="h-4 w-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[15px] font-medium text-[#1a1a1a]">Diseños Únicos</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Sparkles className="h-4 w-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[15px] font-medium text-[#1a1a1a]">Personalizable</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#catalogo"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                    'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                    'transition-all duration-200',
                    'hover:bg-[#0a5528]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                  )}
                >
                  Ver Catálogo Completo
                </a>
                <a
                  href="https://wa.me/59167710595?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20los%20planificadores%20Tablú"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                    'bg-white text-[#1a1a1a] border-2 border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                    'transition-all duration-200',
                    'hover:border-[#0d6832]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                  )}
                >
                  Consultar por WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Main Image Card */}
              <div className="relative rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 transform hover:scale-105 transition-transform duration-300">
                {/* Professional Unsplash Image */}
                <div className="relative aspect-square rounded-xl bg-gradient-to-br from-[#ebe8e3] to-white overflow-hidden">
                  {/* Professional workspace image from Unsplash */}
                  <Image
                    src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
                    alt="Planificador Digital Tablú - Espacio de trabajo organizado"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Floating feature badge */}
                <div className="absolute -top-4 -right-4 bg-[#0d6832] text-white rounded-full px-4 py-2 shadow-lg transform rotate-12">
                  <span className="text-sm font-bold">¡Nuevo!</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-[#e0e0e0]"
          >
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-normal text-[#1a1a1a]">8</div>
                <div className="text-[15px] text-[#6b6b6b]">Categorías</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-[#1a1a1a]">100+</div>
                <div className="text-[15px] text-[#6b6b6b]">Diseños</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-[#1a1a1a]">5⭐</div>
                <div className="text-[15px] text-[#6b6b6b]">Calificación</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-[#1a1a1a]">2</div>
                <div className="text-[15px] text-[#6b6b6b]">Países</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
