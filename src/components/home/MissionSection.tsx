'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Mission Section - New Version
 *
 * Features:
 * - Background image of Santa Cruz with blur
 * - Green and gray tones overlay
 * - B2B and B2C focus messaging
 * - Clean, modern design
 */

interface MissionSectionProps {
  className?: string;
}

export function MissionSection({ className }: MissionSectionProps) {
  return (
    <section className={cn('relative py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      {/* Gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none z-10" />
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Santa Cruz (1).jpg"
          alt="Santa Cruz, Bolivia"
          fill
          className="object-cover brightness-75 blur-sm"
          priority={false}
        />
        {/* Green and Gray Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/70 via-marca-green/20 to-[#2a2a2a]/75" />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-6">
            Tu puente hacia la <span className="font-bold text-white">tecnología</span> y la <span className="font-bold text-white">sostenibilidad</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white/95 leading-relaxed"
          >
            Conectamos personas, empresas e industrias con marcas líderes nacionales e internacionales.
          </motion.p>
        </motion.div>

        {/* Two Focus Areas - Glassmorphism Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* B2B Card - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-sm blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-sm p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300">
                <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-5 shadow-lg border border-white/30">
                  <span className="text-white font-bold text-base tracking-wide">B2B</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Empresas e Industrias
                </h4>
                <p className="text-base text-white/80 leading-relaxed">
                  Tecnología confiable y soluciones energéticas sostenibles.
                </p>
              </div>
            </motion.div>

            {/* B2C Card - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-sm blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-sm p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] hover:border-white/30 transition-all duration-300">
                <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-5 shadow-lg border border-white/30">
                  <span className="text-white font-bold text-base tracking-wide">B2C</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  Personas y Hogares
                </h4>
                <p className="text-base text-white/80 leading-relaxed">
                  Productos que inspiran organización y bienestar.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Essence Statement - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Creamos puentes entre innovación y vida cotidiana con <span className="text-marca-green font-semibold">compromiso</span> y <span className="text-marca-green font-semibold">calidad</span>.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center"
        >
          <Link
            href="/nosotros"
            className={cn(
              'inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold',
              'bg-marca-green text-white',
              'shadow-[0_4px_14px_rgba(45,95,63,0.4)]',
              'transition-all duration-200',
              'hover:bg-marca-green/90 hover:shadow-[0_6px_20px_rgba(45,95,63,0.6)] hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
            )}
          >
            Conócenos más
            <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
