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
        <div className="text-center">
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
      </div>
    </section>
  );
}
