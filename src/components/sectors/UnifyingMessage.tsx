'use client';

import { cn } from '@/lib/utils';
import { Quote, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Unifying Message Section - Dark Cards Style
 *
 * Features:
 * - Layout inspired by "Real people, lasting outcomes" reference
 * - Dark cards with white text
 * - Grid layout with featured large card and smaller side cards
 * - Institutional messaging adapted to testimonial/impact style
 * - Clean white background for the section
 */

interface UnifyingMessageProps {
  className?: string;
}

export function UnifyingMessage({ className }: UnifyingMessageProps) {
  return (
    <section className={cn('bg-white py-20 md:py-24 lg:py-32', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-6"
          >
            Impacto real, resultados duraderos.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed"
          >
            Con el respaldo de nuestras marcas, impulsamos el éxito de industrias y hogares en toda Bolivia.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="mt-8"
          >
             <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-[#0D6832] text-white transition-all duration-200 hover:bg-[#0a5528] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2"
            >
              Comenzar tu proyecto
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Main Large Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[500px]"
          >
            {/* Background Quote Icon */}
            <Quote className="absolute top-8 right-8 text-[#333] h-24 w-24 opacity-50 rotate-180" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Nuestra Filosofía</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-6">
                &ldquo;Lo que nos define no es solo lo que vendemos, sino el valor que generamos. Conectamos tecnología y organización para transformar realidades.&rdquo;
              </h3>
              
              <p className="text-white/70 text-base leading-relaxed max-w-2xl">
                Desde la energía que impulsa grandes industrias hasta la organización que simplifica la vida diaria, nuestro compromiso es brindar soluciones integrales que perduren en el tiempo.
              </p>
            </div>

            {/* Bottom Images Row */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative bg-white/5">
                <Image 
                  src="/images/C800S (6).png" 
                  alt="Tecnología Industrial" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative bg-white/5">
                <Image 
                  src="/images/ta1.jpg" 
                  alt="Organización Personal" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative bg-white/5">
                <Image 
                  src="/images/Santa Cruz (1).jpg" 
                  alt="Bolivia" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Top Right Card - Quote */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 text-[#333] h-12 w-12 opacity-50 rotate-180" />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Visión</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Innovación con propósito. Organización con estilo.
              </h4>
              <p className="text-white/70 text-sm">
                Buscamos ser el puente que une la eficiencia global con las necesidades locales de Bolivia.
              </p>
            </motion.div>

            {/* Bottom Right Card - Location/Contact */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
               <Quote className="absolute top-6 right-6 text-[#333] h-12 w-12 opacity-50 rotate-180" />
               <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Origen</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Orgullosamente desde Santa Cruz.
              </h4>
              <div className="flex items-center gap-3 text-white/80 mt-auto pt-4 border-t border-white/10">
                <MapPin className="h-5 w-5 text-marca-green" />
                <span className="text-sm font-medium">Santa Cruz de la Sierra, Bolivia</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
