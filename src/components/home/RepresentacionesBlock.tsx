'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Representations Block - Dark Theme
 *
 * Features:
 * - Dark background design matching reference
 * - Split visual layout (Capstone left, Tablú right)
 * - Minimalist card style with dark background
 * - White text/icons for contrast
 * - Subtle hover effects
 * - Responsive design
 */

interface RepresentacionesBlockProps {
  className?: string;
}

export function RepresentacionesBlock({ className }: RepresentacionesBlockProps) {
  return (
    <section className={cn('bg-[#111111] py-20 md:py-24 lg:py-32 overflow-hidden relative z-20', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Representaciones</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight tracking-tight">
            Nuestras Representaciones
          </h2>
        </motion.div>

        {/* Split Layout - Dark Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Capstone Block - Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-[#1a1a1a] rounded-xl p-8 md:p-10 lg:p-12 flex flex-col min-h-[400px] border border-white/5 hover:border-white/10 transition-colors duration-300"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="bg-white rounded-lg inline-block w-full max-w-xs h-20 p-4 flex items-center justify-center">
                <div className="relative w-32 h-10">
                  <Image
                    src="/images/color_image.png"
                    alt="Capstone Green Energy"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="h-1 w-12 bg-white/20 rounded-full mt-4"></div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Capstone Green Energy (EE. UU.)
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Microturbinas y soluciones energéticas limpias.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/capstone"
              className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300 group-hover:text-marca-green"
            >
              Conocer Capstone
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Tablú Block - Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group bg-[#1a1a1a] rounded-xl p-8 md:p-10 lg:p-12 flex flex-col min-h-[400px] border border-white/5 hover:border-white/10 transition-colors duration-300"
          >
            {/* Logo */}
            <div className="mb-8">
              <div className="bg-white rounded-lg overflow-hidden inline-block w-full max-w-xs">
                <div className="relative w-full h-20">
                  <Image
                    src="/images/Logo Tablu.png"
                    alt="Tablú"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="h-1 w-12 bg-white/20 rounded-full mt-4"></div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Tablú (Perú / México)
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Planners de acrílico personalizados para personas y empresas.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/tablu"
              className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-300 group-hover:text-[#e53935]"
            >
              Ver Catálogo Tablú
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
