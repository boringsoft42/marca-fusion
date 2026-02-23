'use client';

import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

/**
 * Contact Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background with contact image
 * - Framer Motion animations
 * - Quick contact info
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface ContactHeroProps {
  className?: string;
}

export function ContactHero({ className }: ContactHeroProps) {
  const contactInfo = [
    { icon: Phone, text: '+591 72136767', href: 'tel:+59172136767' },
    { icon: Mail, text: 'info@marcafusion.com.bo', href: 'mailto:info@marcafusion.com.bo' },
    { icon: MapPin, text: 'Santa Cruz, Bolivia', href: null },
  ];

  return (
    <section className={cn('relative min-h-[70vh] flex items-center overflow-hidden', className)}>
      {/* Header positioned absolutely over video */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Image - Full Bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-hero.png"
          alt="Contacto Marca Fusión"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Left Aligned */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Sub-heading */}
            <div className="mb-4">
              <span className="text-sm uppercase tracking-widest font-semibold text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                ◆ CONTÁCTANOS
              </span>
            </div>

            {/* Main Title - Standard styling as /sectores or /alianzas */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Hablemos de tu <span className="block">Proyecto</span>
            </h1>

            {/* Subtitle - Standard styling */}
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-xl font-light">
              Estamos listos para ayudarte a encontrar la solución perfecta. 
              Contáctanos y descubre cómo podemos impulsar tu negocio juntos.
            </p>

            {/* Quick Contact Info - Professional Styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <info.icon className="h-5 w-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                      <span className="text-sm md:text-base font-semibold text-white tracking-wide">{info.text}</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                      <info.icon className="h-5 w-5 text-white/50" strokeWidth={1.5} />
                      <span className="text-sm md:text-base font-semibold text-white/80 tracking-wide">{info.text}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
