'use client';

import { cn } from '@/lib/utils';
import { Quote, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Closing Quote Section (Partnerships) - Dark Cards Style
 *
 * Features:
 * - Layout inspired by UnifyingMessage
 * - Dark cards with white text
 * - Grid layout with featured large card and smaller side cards
 * - Clean white background for the section
 */

interface ClosingQuoteProps {
  className?: string;
}

export function ClosingQuote({ className }: ClosingQuoteProps) {
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
            Hablemos de negocios.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#666] max-w-2xl mx-auto leading-relaxed"
          >
            Estamos listos para explorar cómo podemos colaborar y crecer juntos.
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#1a1a1a] text-[#1a1a1a] font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 uppercase text-sm tracking-wide"
            >
              <ArrowRight className="h-4 w-4" />
              Iniciar Conversación
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
            className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[400px]"
          >
            {/* Background Quote Icon */}
            <Quote className="absolute top-8 right-8 text-[#333] h-24 w-24 opacity-50 rotate-180" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Filosofía</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-6">
                "El éxito de una alianza no se mide solo en términos comerciales, sino en el valor compartido que creamos juntos."
              </h3>
              
              <p className="text-white/70 text-base leading-relaxed max-w-2xl mt-auto pt-8 border-t border-white/10">
                Buscamos relaciones a largo plazo basadas en la transparencia y el beneficio mutuo.
              </p>
            </div>
          </motion.div>

          {/* Right Column Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Top Right Card - Email */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Contacto Directo</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Email
              </h4>
              <a href="mailto:info@marcafusion.com.bo" className="text-white/70 hover:text-white transition-colors text-lg break-all">
                info@marcafusion.com.bo
              </a>
            </motion.div>

            {/* Bottom Right Card - WhatsApp */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
            >
               <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Mensajería</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                WhatsApp
              </h4>
              <a href="https://wa.me/59172136767" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-lg">
                +591 72136767
              </a>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
