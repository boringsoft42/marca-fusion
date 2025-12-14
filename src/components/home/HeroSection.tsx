'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';

/**
 * Marca Fusión Home Hero Section - Left-aligned Layout with Logo
 *
 * Features:
 * - Left-aligned text layout
 * - Logo above title
 * - Background video with dark overlay
 * - Bold typography hierarchy in hero title
 * - Framer Motion animations
 * - Responsive design with mobile-first approach
 */

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative bg-sierra-cream py-20 md:py-32 lg:py-40 overflow-hidden min-h-screen flex items-center',
        className
      )}
    >
      {/* Header positioned absolutely over video */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/1.png"
        >
          <source src="/images/YPFB Transporte - CAIGUA (1).mp4" type="video/mp4" />
        </video>
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
            Conectamos <span className="font-bold">Bolivia</span> con marcas nacionales e internacionales que impulsan <span className="font-bold">innovación</span>, <span className="font-bold">sostenibilidad</span> y <span className="font-bold">confianza</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/90 leading-relaxed mb-12 font-light"
          >
            Representantes exclusivos de{' '}
            <span className="font-medium text-white">Capstone Green Energy</span> y{' '}
            <span className="font-medium text-white">Tablú</span> para Bolivia
          </motion.p>

          {/* CTA Button - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <Link
              href="/nosotros"
              className={cn(
                'group inline-flex items-center justify-center gap-2',
                'px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase',
                'bg-transparent text-white border border-white',
                'transition-all duration-300',
                'hover:bg-white hover:text-[#1a1a1a]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              )}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Descubre Más
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
