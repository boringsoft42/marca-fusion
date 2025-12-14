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

// Image Carousel Component
function TabluImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Product Image Carousel */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={`Planificador Tablú ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              currentIndex === index ? 'w-8 bg-[#4A5BA8]' : 'w-2 bg-white/50'
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TabluHero({ className }: TabluHeroProps) {
  return (
    <section className={cn('relative py-0 bg-[#FF7777] overflow-hidden min-h-[600px]', className)}>
      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Decorative Elements - Top Left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-60">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="0" cy="0" r="100" fill="#FFD166" />
          <path d="M0,0 Q50,-50 100,0 T200,0" fill="#4A5BA8" opacity="0.7" />
        </svg>
      </div>

      {/* Decorative Elements - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-40">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="350" cy="350" r="150" fill="#FFD166" />
          <path d="M300,400 Q320,350 350,330 L400,400" fill="#4A5BA8" opacity="0.8" />
        </svg>
      </div>

      {/* Decorative Leaves - Top Right */}
      <div className="absolute top-10 right-20 opacity-70">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <path d="M50,10 Q70,30 60,50 Q50,70 30,60 Q10,50 20,30 Q30,10 50,10" fill="#2ECC71" />
          <path d="M55,15 Q65,25 60,40 Q55,55 40,50 Q25,45 30,30 Q35,15 55,15" fill="#27AE60" opacity="0.8" />
        </svg>
      </div>

      {/* Decorative Leaves - Bottom Left */}
      <div className="absolute bottom-20 left-10 opacity-60">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path d="M20,80 Q40,70 50,50 Q60,30 70,20" stroke="#2ECC71" strokeWidth="8" fill="none" strokeLinecap="round" />
          <ellipse cx="70" cy="20" rx="15" ry="25" fill="#27AE60" transform="rotate(-30 70 20)" />
        </svg>
      </div>

      {/* Discount Floating Bubble */}
      <motion.div
        initial={{ y: 10, rotate: -5 }}
        animate={{ y: [10, -10, 10], rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] z-20"
      >
        <div className="relative">
          <div className="bg-[#FFD166] text-[#1a1a1a] rounded-full px-6 py-4 shadow-2xl transform -rotate-12">
            <div className="text-center">
              <div className="text-sm font-bold">Obtén 10%</div>
              <div className="text-xs">dscto 🎁</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A5BA8] mb-6 leading-tight"
                >
                  Planners personalizados que inspiran productividad y organización con estilo
                </motion.h1>

                {/* Description Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white/95 text-lg md:text-xl leading-relaxed"
                >
                  <p>
                    <span className="font-bold">Tablú</span> llega a Bolivia de la mano de <span className="font-bold">Marca Fusión</span>. Planners de acrílico de alta calidad en formatos To Do List, semanales, mensuales, anuales y Kanban para uso personal y corporativo.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  {/* Ver Catálogo */}
                  <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-[#4A5BA8] text-white shadow-lg hover:bg-[#3d4a8f] hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    📋 Ver catálogo de planners
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={process.env.NEXT_PUBLIC_WHATSAPP_TABLU || 'https://wa.me/59178885533'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-[#25D366] text-white shadow-lg hover:bg-[#20ba5a] hover:shadow-xl transition-all duration-200 hover:scale-105"
                  >
                    💬 Consultar vía WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Product Showcase Carousel */}
            <TabluImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
