'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';

/**
 * Tablú Hero Section - Image Carousel Only
 *
 * Features:
 * - Full-width image carousel
 * - Smooth transitions between images
 * - Header overlay
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
    <>
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
            className="object-contain"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </>
  );
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-0 overflow-hidden bg-white', className)}>
      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Background Image Carousel - centered with reduced height */}
      <div className="relative z-10 py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="relative h-[50vh] md:h-[60vh] max-h-[600px] rounded-lg overflow-hidden shadow-xl">
            <TabluBackgroundCarousel />
          </div>
        </div>
      </div>

      {/* Header positioned absolutely over background with dark text */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
    </section>
  );
}

/**
 * Tablú Info Section - Text and CTA below hero
 *
 * Features:
 * - Clean white background
 * - Centered content
 * - CTA buttons for catalog and WhatsApp
 */

interface TabluInfoSectionProps {
  className?: string;
}

export function TabluInfoSection({ className }: TabluInfoSectionProps) {
  return (
    <section className={cn('relative pt-8 pb-12 md:pt-10 md:pb-16 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-gray-50/80 rounded-xl p-6 md:p-10 shadow-lg border border-gray-200">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-5 leading-tight text-center"
            >
              Planners personalizados que inspiran productividad y organización con estilo
            </motion.h1>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black text-base md:text-lg leading-relaxed mb-6 text-center"
            >
              <p>
                Tablú es una marca con presencia en Perú y México que llega a Bolivia de la mano de Marca Fusión
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Ver Catálogo */}
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wide bg-[#0D6832] text-white hover:bg-[#0a5528] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                📋 Ver catálogo de planners
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wide bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                💬 Consultar vía WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
