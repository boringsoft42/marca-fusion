'use client';

import { cn } from '@/lib/utils';
import { Plane, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Altrix Collaboration Section (Partnerships) - Dark Theme
 *
 * Features:
 * - Dark background
 * - Altrix Solutions LLC introduction
 * - Two column layout
 * - Professional tone
 * - Follows visual pattern from Sectors page
 */

interface AltrixCollaborationProps {
  className?: string;
}

export function AltrixCollaboration({ className }: AltrixCollaborationProps) {
  return (
    <section className={cn('bg-[#1a1a1a] py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <span className="text-sm uppercase tracking-wider font-medium text-white/80">
                  ◆ Grupo Corporativo
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Altrix Solutions LLC.
              </h2>

              <div className="space-y-4 text-base md:text-lg text-white/70 leading-relaxed mb-8">
                <p>
                  <span className="font-medium text-white">Altrix Solutions LLC</span> (Estados Unidos) es nuestra
                  empresa hermana que facilita todas las operaciones internacionales de Marca Fusión en Bolivia.
                </p>

                <p>
                  Altrix maneja la logística internacional, importación de equipos, coordinación directa con
                  fabricantes globales y el cumplimiento de normativas aduaneras.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  'Importación y logística especializada',
                  'Coordinación directa con fabricantes',
                  'Cumplimiento normativo internacional',
                  'Soporte técnico desde Estados Unidos',
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-5 w-5 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">✓</span>
                      </div>
                    </div>
                    <span className="text-base text-white/90">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-[#2a2a2a]">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                  alt="International logistics"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex gap-6 mb-8">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <Package className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                      <Plane className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Altrix Solutions LLC
                    </h3>
                    <p className="text-white/60">
                      International Operations Partner
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-white font-medium mt-6 pt-6 border-t border-white/10">
                    <span>🇺🇸 USA</span>
                    <span className="text-white/40">↔</span>
                    <span>🇧🇴 Bolivia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
