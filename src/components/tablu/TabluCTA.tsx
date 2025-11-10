'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ExternalLink, MessageCircle, Sparkles } from 'lucide-react';

/**
 * Tablú Final CTA Section
 *
 * Features:
 * - Dual CTAs (External Catalog + WhatsApp)
 * - Link to https://tablu.com.pe
 * - Conversion-focused design
 * - Sierra-green background with white text (good contrast)
 * - Responsive layout
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface TabluCTAProps {
  className?: string;
}

export function TabluCTA({ className }: TabluCTAProps) {
  const tabluUrl = process.env.NEXT_PUBLIC_TABLU_URL || 'https://tablu.com.pe';
  const whatsappNumber = '59167710595';
  const whatsappMessage = encodeURIComponent('Hola! Me interesa conocer más sobre los planificadores Tablú');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-2xl bg-[#2ECC71] text-white shadow-2xl mb-8"
          >
            <div className="text-center mb-8">
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 mb-6"
              >
                <Sparkles className="h-4 w-4 text-white" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-medium text-white">Tablú Bolivia</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[48px] font-normal mb-4"
              >
                ¡Empieza a Organizar tu Vida Hoy!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[15px] text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Descubre nuestra colección completa de planificadores en acrílico y magnéticos.
                Diseños únicos para cada momento de tu vida.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Primary CTA - External Catalog */}
              <a
                href={tabluUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-white text-[#0d6832] shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-white/95',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d6832]'
                )}
              >
                <ExternalLink className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Explorar Catálogo Completo
              </a>

              {/* Secondary CTA - WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
