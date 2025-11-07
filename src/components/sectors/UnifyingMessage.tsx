'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Unifying Message Section
 *
 * Features:
 * - Institutional closing message
 * - Green marca-fusion branding
 * - Inspirational tone
 * - CTA back to home or contact
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface UnifyingMessageProps {
  className?: string;
}

export function UnifyingMessage({ className }: UnifyingMessageProps) {
  return (
    <section
      className={cn(
        'relative py-16 md:py-20 lg:py-24 bg-[#0d6832] overflow-hidden',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
          >
            <Sparkles className="h-4 w-4 text-white" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-[15px] font-medium text-white">Marca Fusión SRL</span>
          </motion.div>

          {/* Main Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[48px] font-normal text-white mb-6 leading-tight"
          >
            Conectamos Soluciones para Cada Dimensión de tu Vida
          </motion.h2>

          <div className="space-y-6 text-[15px] text-white leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desde la energía que impulsa industrias hasta la organización que transforma
              espacios personales, en <span className="font-medium">Marca Fusión</span> creemos que
              el progreso comienza con soluciones adaptadas a cada necesidad.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ya sea que busques eficiencia energética para tu operación industrial o herramientas
              para organizar tu día a día, nuestro compromiso es brindarte lo mejor de{' '}
              <span className="font-medium">Capstone Green Energy</span> y{' '}
              <span className="font-medium">Tablú Bolivia</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-medium text-white mt-8"
            >
              &ldquo;Innovación con propósito. Organización con estilo.&rdquo;
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium bg-white text-[#0d6832] shadow-lg transition-all duration-200 hover:bg-white/95 hover:shadow-xl"
            >
              Volver al Inicio
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg transition-all duration-200 hover:bg-white/20 hover:border-white/50 hover:shadow-xl"
            >
              Contáctanos
            </Link>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-[15px] text-white/80">
              Orgullosamente desde <span className="font-medium text-white">Santa Cruz de la Sierra, Bolivia</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
