'use client';

import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <section
      className={cn(
        'relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-sierra-cream',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
          alt="Contact us"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sierra-cream/90 via-sierra-cream/85 to-sierra-cream/95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - Animated */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-sierra-text-primary leading-tight tracking-tight mb-6"
          >
            Hablemos de tu Proyecto
          </motion.h1>

          {/* Subtitle - Animated */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-sierra-text-secondary leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Estamos listos para ayudarte a encontrar la solución perfecta. Contáctanos y descubre cómo podemos impulsar tu negocio.
          </motion.p>

          {/* Quick Contact Info - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {contactInfo.map((info, index) => (
              info.href ? (
                <a
                  key={index}
                  href={info.href}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-200"
                >
                  <info.icon className="h-4 w-4 text-sierra-green" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-sierra-text-primary">{info.text}</span>
                </a>
              ) : (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <info.icon className="h-4 w-4 text-sierra-green" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-sierra-text-primary">{info.text}</span>
                </div>
              )
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
