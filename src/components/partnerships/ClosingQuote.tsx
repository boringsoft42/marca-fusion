'use client';

import { cn } from '@/lib/utils';
import { Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Closing Quote Section (Partnerships)
 *
 * Features:
 * - Inspirational quote
 * - Contact CTA
 * - Professional closing
 * - Sierra green background with white text
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface ClosingQuoteProps {
  className?: string;
}

export function ClosingQuote({ className }: ClosingQuoteProps) {
  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-sierra-green relative overflow-hidden', className)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Quote className="h-10 w-10 text-white" strokeWidth={1.5} aria-hidden="true" />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-[48px] font-normal text-white leading-tight mb-6 drop-shadow-lg">
              &ldquo;El éxito de una alianza no se mide solo en términos comerciales,
              sino en el valor compartido que creamos juntos.&rdquo;
            </p>
            <footer className="text-xl text-white/90 font-medium">
              — Filosofía Marca Fusión
            </footer>
          </motion.blockquote>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-white/30 mx-auto mb-12"
          />

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-white">
              ¿Listo para Explorar una Alianza Estratégica?
            </h3>
            <p className="text-[15px] text-white/90 max-w-2xl mx-auto leading-relaxed">
              Conversemos sobre cómo podemos crecer juntos y generar impacto positivo en el mercado boliviano.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-white text-sierra-green shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
                  'transition-all duration-200',
                  'hover:bg-white/95',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sierra-green'
                )}
              >
                Iniciar Conversación
                <ArrowRight className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </a>
              <a
                href="mailto:info@marcafusion.com.bo"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                Enviar Email Directo
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-[15px] text-white/90">
              Email:{' '}
              <a href="mailto:info@marcafusion.com.bo" className="font-medium text-white hover:underline">
                info@marcafusion.com.bo
              </a>
              {' '}•{' '}
              WhatsApp:{' '}
              <a href="https://wa.me/59172136767" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                +591 72136767
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
