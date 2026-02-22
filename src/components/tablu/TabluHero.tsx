'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { ArrowRight, MessageSquare, ChevronRight } from 'lucide-react';

/**
 * Tablú Hero Section - Redesigned for Premium Look
 *
 * Features:
 * - Full-bleed image carousel (Improved "formato completo")
 * - Integrated glassmorphism text card
 * - Scroll-triggered animations
 * - Professional typography and spacing
 */

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
    }, 5000); // Slightly slower for better readability

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full bg-white">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: currentIndex === index ? 1 : 0,
            scale: currentIndex === index ? 1 : 1.05
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={`Tablú Planners ${index + 1}`}
            fill
            className="object-cover md:object-contain" // Cover on mobile, contain on desktop to avoid cutting banner text
            sizes="100vw"
            priority={index === 0}
          />
          {/* Subtle overlay to enhance text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />
        </motion.div>
      ))}
      
      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <div 
            key={index}
            className={cn(
              "h-1 transition-all duration-500 rounded-full",
              currentIndex === index ? "w-8 bg-[#0D6832]" : "w-2 bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function TabluHero({ className }: { className?: string }) {
  return (
    <section className={cn('relative min-h-[85vh] flex flex-col overflow-hidden bg-white', className)}>
      {/* Header positioned absolutely */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative flex-1 flex flex-col">
        {/* Full-width Carousel Background */}
        <div className="relative h-[65vh] md:h-[75vh] w-full">
          <TabluBackgroundCarousel />
        </div>

        {/* Floating Text Card - Overlapping the image */}
        <div className="container mx-auto px-6 relative z-30 -mt-20 md:-mt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_32px_64px_-16px_rgba(13,104,50,0.15)] border border-white/60 text-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-[#0D6832]/5 border border-[#0D6832]/10"
              >
                <span className="text-[#0D6832] text-lg">✨</span>
                <span className="font-kaushan text-[#0D6832] text-xl md:text-2xl lowercase">
                  Tu organización empieza aquí
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
                Organizá <span className="text-[#0D6832]">tu vida</span> <br className="hidden md:block" />
                <span className="font-kaushan text-[#0D6832] text-[0.9em] font-normal lowercase tracking-normal">con estilo</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Tablú Bolivia te acompaña en cada meta, proyecto o idea. <br />
                <span className="text-gray-400">Diseños prácticos, elegantes y 100% personalizables.</span>
              </p>

              {/* CTA Buttons - Professional Styling */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href="#catalogo"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full",
                    "bg-[#FFFDF0] text-[#0D6832] text-base font-bold transition-all duration-300",
                    "hover:bg-white hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  )}
                >
                  <div className="p-1 rounded-full bg-[#0D6832]/5">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span>Ver catálogo completo</span>
                </a>

                <a
                  href="https://wa.me/59167710595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full",
                    "bg-white/10 text-[#1a1a1a] text-base font-bold border-2 border-white/40 backdrop-blur-sm transition-all duration-300",
                    "hover:bg-white/20 hover:border-white/60 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  )}
                >
                  <MessageSquare className="w-5 h-5 opacity-70" />
                  <span>Contactar ventas</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

