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
            Hablemos de negocios
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

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#2D5F3F] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Contacto Directo</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Email
            </h4>
            <a href="mailto:info@marcafusion.com.bo" className="text-white/90 hover:text-white transition-colors text-lg break-all">
              info@marcafusion.com.bo
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-[#2D5F3F] rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-white uppercase tracking-widest">◆ Mensajería</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              WhatsApp
            </h4>
            <a href="https://wa.me/59172136767" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors text-lg">
              +591 72136767
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
