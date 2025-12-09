'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Marca Fusión Institutional Text Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra white background with professional business image
 * - Company origin story with animations
 * - Belief statements with animated cards
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface InstitutionalTextProps {
  className?: string;
}

export function InstitutionalText({ className }: InstitutionalTextProps) {

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Origin Story with Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
                Nuestra Historia
              </h2>

              <div className="space-y-6 text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                <p>
                  Marca Fusión, nació con un propósito claro: conectar personas, empresas e industrias con marcas nacionales e internacionales de prestigio.
                </p>

                <p>
                  Creemos que el crecimiento se logra cuando la innovación y la confianza caminan juntas. Por eso representamos marcas que ofrecen soluciones reales y sostenibles, tanto para el sector empresarial e industrial como para el hogar y la vida personal.
                </p>

                <p>
                  Nos caracteriza una gestión transparente, adaptable y comprometida, enfocada en generar valor duradero y relaciones comerciales de largo plazo.
                </p>
              </div>
            </motion.div>

            {/* Santa Cruz Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/images/Santa Cruz (1).jpg"
                alt="Santa Cruz de la Sierra, Bolivia"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
