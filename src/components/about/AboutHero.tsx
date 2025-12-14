'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

/**
 * Marca Fusión About Hero Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra cream background
 * - Professional Santa Cruz cityscape image from Unsplash
 * - Framer Motion fade-in animations
 * - Clean typography following Sierra guidelines
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface AboutHeroProps {
  className?: string;
}

export function AboutHero({ className }: AboutHeroProps) {

  return (
    <section
      className={cn(
        'relative bg-sierra-cream py-20 md:py-32 lg:py-40 overflow-hidden min-h-screen flex items-center',
        className
      )}
    >
      {/* Header positioned absolutely over background */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Image - Santa Cruz */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Santa Cruz (1).jpg"
          alt="Santa Cruz de la Sierra, Bolivia"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 pt-24">
        <div className="max-w-3xl">
          {/* Logo - Above title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <Image
              src="/images/Logo_Marca_Fusión_Transparente.png"
              alt="Marca Fusión Logo"
              width={60}
              height={60}
              className="h-14 w-auto brightness-0 invert"
              priority
            />
          </motion.div>

          {/* Hero Title - Left aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-white mb-8"
          >
            ¿QUIÉNES SOMOS?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/90 leading-relaxed mb-12 font-light"
          >
            Conectamos Bolivia con el mundo a través de representaciones estratégicas que impulsan innovación, sostenibilidad y desarrollo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
