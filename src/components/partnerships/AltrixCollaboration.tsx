'use client';

import { cn } from '@/lib/utils';
import { Plane, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Altrix Collaboration Section (Partnerships)
 *
 * Features:
 * - Altrix Solutions LLC introduction
 * - International operations explanation
 * - Container/airplane icons
 * - Metallic/gray professional background
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface AltrixCollaborationProps {
  className?: string;
}

export function AltrixCollaboration({ className }: AltrixCollaborationProps) {
  return (
    <section className={cn('py-12 sm:py-16 md:py-20 lg:py-24 bg-sierra-cream', className)}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 sm:px-7 py-2 sm:py-3 rounded-3xl bg-[#6b6b6b]/10 mb-4 sm:mb-6">
                <Plane className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#6b6b6b]" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-xs sm:text-[15px] font-medium text-[#6b6b6b]">Grupo Corporativo</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1a1a1a] mb-4 sm:mb-6">
                Altrix Solutions LLC
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-[15px] text-[#6b6b6b] leading-relaxed mb-6 sm:mb-8">
                <p>
                  <span className="font-medium text-[#1a1a1a]">Altrix Solutions LLC</span> (Estados Unidos) es nuestra
                  empresa hermana que facilita todas las operaciones internacionales de{' '}
                  <span className="font-medium text-[#1a1a1a]">Marca Fusión</span> en Bolivia.
                </p>

                <p>
                  Altrix maneja la logística internacional, importación de equipos, coordinación directa con
                  fabricantes globales como Capstone Green Energy, y el cumplimiento de normativas aduaneras y de
                  comercio internacional.
                </p>

                <p>
                  Esta estructura corporativa nos permite ofrecer a nuestros clientes bolivianos acceso directo
                  a tecnología de clase mundial con el respaldo de una empresa estadounidense establecida.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  'Importación y logística especializada',
                  'Coordinación directa con fabricantes globales',
                  'Cumplimiento normativo internacional',
                  'Soporte técnico desde Estados Unidos',
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-sierra-green/20 flex items-center justify-center">
                        <span className="text-[10px] sm:text-xs font-bold text-sierra-green">✓</span>
                      </div>
                    </div>
                    <span className="text-sm sm:text-[15px] text-[#1a1a1a] font-medium">{point}</span>
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
              {/* Background Image */}
              <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                  alt="International logistics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                  {/* Icons */}
                  <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm">
                      <Package className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm">
                      <Plane className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Logo Placeholder */}
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-normal text-white mb-1 sm:mb-2">
                      Altrix Solutions LLC
                    </div>
                    <div className="text-xs sm:text-sm md:text-[15px] text-white/80">International Operations Partner</div>
                  </div>

                  {/* Connection */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-[15px] font-medium text-white mt-4 sm:mt-6">
                    <span>🇺🇸 USA</span>
                    <span className="text-lg sm:text-xl md:text-2xl">↔</span>
                    <span>🇧🇴 Bolivia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <p className="text-sm sm:text-[15px] text-[#6b6b6b] leading-relaxed">
              <span className="font-medium text-[#1a1a1a]">Nota para potenciales aliados:</span> La estructura
              Marca Fusión + Altrix Solutions nos permite ofrecer un soporte integral tanto en territorio boliviano
              como en operaciones internacionales. Si tu alianza requiere coordinación transfronteriza, contamos con
              la capacidad operativa para hacerlo posible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
