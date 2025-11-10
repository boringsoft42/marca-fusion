'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Tablú Social Section - Peru Style
 *
 * Features:
 * - Purple/blue background (#5762A2)
 * - "Nosotros" section with image
 * - Brand story
 * - Similar to tablu.com.pe design
 */

interface SocialSectionProps {
  className?: string;
}

export function SocialSection({ className }: SocialSectionProps) {
  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-[#5762A2]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Equipo Tablú"
                  width={500}
                  height={500}
                  className="rounded-xl grayscale"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                NOSOTROS
              </h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                "Tablú le ha dado un giro emocionante a nuestras vidas, nos esforzamos cada día por mejorar la calidad de nuestros productos, por innovar, por escuchar las necesidades de los clientes y crear soluciones. Somos fieles creyentes de que la organización es clave para lograr nuestras metas y creemos que nuestros Tablús son un gran aliado en ese camino"
              </p>
              <motion.a
                href="/sobre-nosotros"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={cn(
                  'inline-block px-8 py-3 rounded-full text-base font-medium',
                  'bg-[#2ECC71] text-white',
                  'transition-all duration-200',
                  'hover:bg-[#27AE60]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5762A2]'
                )}
              >
                LEER MÁS
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
