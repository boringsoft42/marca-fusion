'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';

/**
 * Tablú Hero Section - Peru Style
 *
 * Features:
 * - Vibrant coral/pink background (#FF7777)
 * - Colorful decorative elements (organic shapes, leaves)
 * - Bold typography
 * - Playful design with floating elements
 * - Discount bubble
 * - Image carousel showcase
 * - Inspired by tablu.com.pe design
 */

interface TabluHeroProps {
  className?: string;
}

// Background Carousel Component
function TabluBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/images/Captura de pantalla 2026-01-06 163430.png',
    '/images/Captura de pantalla 2026-01-06 163550.png',
    '/images/Captura de pantalla 2026-01-06 163630.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`Tablú Planners ${index + 1}`}
            fill
            className="object-cover blur-sm brightness-75"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      ))}
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-0 overflow-hidden min-h-[700px] md:min-h-[600px]', className)}>
      {/* Background Image Carousel with Blur */}
      <TabluBackgroundCarousel />

      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-[500px]">
            {/* Centered Text Content with backdrop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center max-w-4xl"
            >
              {/* Main Heading with backdrop */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                >
                  Planners personalizados que inspiran productividad y organización con estilo
                </motion.h1>

                {/* Description Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white text-lg md:text-xl leading-relaxed mb-8"
                >
                  <p className="drop-shadow-md">
                    Tablú es una marca con presencia en Perú y México que llega a Bolivia de la mano de Marca Fusión
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  {/* Ver Catálogo */}
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wide bg-[#0D6832] text-white hover:bg-[#0a5528] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    📋 Ver catálogo de planners
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wide bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    💬 Consultar vía WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
