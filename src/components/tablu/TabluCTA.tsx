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
            className="p-8 md:p-12 rounded-2xl bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-8"
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

          {/* Info Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Bolivia Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-6 rounded-2xl bg-[#ebe8e3] border-l-4 border-[#0d6832] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-[#0d6832]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0d6832]">BO</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1a1a] mb-2 uppercase tracking-wide">
                    Operaciones en Bolivia
                  </h4>
                  <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                    <span className="font-medium text-[#1a1a1a]">Marca Fusión SRL</span> es el representante
                    oficial de Tablú en Bolivia. Ofrecemos envíos a todo el país, soporte local en español
                    y asesoría personalizada para todos nuestros clientes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Peru Connection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl bg-[#ebe8e3] border-l-4 border-[#6b6b6b] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-[#6b6b6b]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#6b6b6b]">PE</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#1a1a1a] mb-2 uppercase tracking-wide">
                    Conexión con Perú
                  </h4>
                  <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                    Los planificadores Tablú son diseñados y fabricados en Perú con los más altos
                    estándares de calidad. Visita{' '}
                    <a
                      href={tabluUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#0d6832] hover:underline"
                    >
                      tablu.com.pe
                    </a>
                    {' '}para conocer toda la colección.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-[15px] text-[#6b6b6b] mb-2">
              ¿Tienes preguntas sobre tamaños, diseños o precios especiales?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[15px]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#128C7E] hover:underline font-medium"
              >
                WhatsApp: +591 67710595
              </a>
              <span className="text-[#6b6b6b]">|</span>
              <a
                href="/contacto"
                className="text-[#0d6832] hover:underline font-medium"
              >
                Formulario de Contacto
              </a>
            </div>
          </motion.div>

          {/* Satisfaction Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-4 rounded-2xl bg-[#0d6832]/10 border border-[#0d6832]/30 text-center"
          >
            <p className="text-[15px] text-[#1a1a1a]">
              <span className="font-bold text-[#0d6832]">✓ Garantía de Satisfacción</span> •
              Envíos seguros a todo Bolivia • Soporte local en español
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
