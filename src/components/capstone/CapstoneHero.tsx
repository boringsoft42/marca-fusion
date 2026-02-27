'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { useRef, useEffect } from 'react';

/**
 * Capstone Hero Section - Full Page Parallax
 *
 * Features:
 * - Visual style matching Home Hero
 * - Full screen height
 * - Left-aligned text layout
 * - Background video with parallax effect
 * - Sticky positioning for overlap effect
 */

interface CapstoneHeroProps {
  className?: string;
}

export function CapstoneHero({ className }: CapstoneHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax scroll animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Transform for parallax effect - background moves slower
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  // Force video to play on mount - fixes autoplay issues on mobile/iOS
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        // Try to play the video
        await video.play();
      } catch (error) {
        // If autoplay fails (common on mobile), retry on user interaction
        console.log('Video autoplay prevented, will retry on user interaction');

        const handleInteraction = async () => {
          try {
            await video.play();
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('click', handleInteraction);
          } catch (e) {
            console.error('Failed to play video:', e);
          }
        };

        document.addEventListener('touchstart', handleInteraction, { once: true });
        document.addEventListener('click', handleInteraction, { once: true });
      }
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(() => {
      playVideo();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative bg-[#1a1a1a] py-20 md:py-32 lg:py-40 overflow-hidden min-h-screen flex items-center sticky top-0 z-0',
        className
      )}
    >
      {/* Header positioned absolutely over video */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Background Video with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/1.png"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
        >
          <source src="/images/YPFB-web-optimized.mp4" type="video/mp4" />
          {/* Fallback image for devices that cannot play video */}
          <Image
            src="/images/1.png"
            alt="Capstone Green Energy Background"
            fill
            className="object-cover"
            priority
          />
        </video>
        {/* Dark overlay for text readability */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          style={{ opacity }}
        />
      </motion.div>

      <motion.div 
        className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 pt-24"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl">
          {/* Hero Title - Left aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-tight tracking-tight text-white mb-8 text-left"
          >
            <span className="text-[#0D6832]" style={{ WebkitTextStroke: '0.5px white' }}>Capstone</span> Green Energy en Bolivia
          </motion.h1>

          {/* Subtitle - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-left" // Explicit left alignment
          >
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-light max-w-2xl">
              Somos representantes oficiales en Bolivia de <span className="font-bold text-white">Capstone Green Energy</span>, líder mundial en microturbinas de generación eléctrica con más de <span className="font-bold text-white">25 años</span> de innovación.
            </p>
          </motion.div>

          {/* CTA Button - Left aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <Link
              href="/contacto"
              className={cn(
                'group inline-flex items-center justify-center gap-2',
                'px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase',
                'bg-[#0D6832] text-white',
                'transition-all duration-200',
                'hover:bg-[#0a5528]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              )}
            >
              Contactar Asesor
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
 