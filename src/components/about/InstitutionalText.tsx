'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

/**
 * Marca Fusión Institutional Text Section - Feature Spotlight Style
 *
 * Features:
 * - Feature spotlight design from 21st.dev
 * - Company origin story with animations
 * - Interactive hover effects
 * - Maintains original copy
 */

interface InstitutionalTextProps {
  className?: string;
}

export function InstitutionalText({ className }: InstitutionalTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div
          className="group relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Grid Layout: 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Column: Text Content */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              {/* Label with diamond bullet */}
              <div className="mb-6 md:mb-8">
                <span className="text-sm uppercase tracking-wider font-medium text-[#1a1a1a]">
                  ◆ Historia
                </span>
              </div>

              {/* Title - large, bold, black */}
              <h2 className="relative mb-6">
                <span className="block text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                  Nuestra Historia
                </span>
              </h2>

              {/* Description - medium size, normal weight, grey */}
              <div className="mt-6 text-base md:text-lg leading-relaxed text-[#666] space-y-4 max-w-2xl md:mt-8 lg:mt-10">
                <p>
                  Marca Fusión, nació con un propósito claro: conectar personas, empresas e industrias con marcas nacionales e internacionales de prestigio.
                </p>

                <p>
                  Creemos que el crecimiento se logra cuando la innovación y la confianza caminan juntas. Por eso representamos marcas que ofrecen soluciones reales y sostenibles, tanto para el sector empresarial e industrial como para el hogar y la vida personal.
                </p>

                <p>
                  Nos caracteriza una gestión transparente, adaptable y comprometida, enfocada en generar valor duradero y relaciones comerciales de largo plazo.
                </p>
              </div>
            </div>

            {/* Right Column: Image Block */}
            <div
              className="relative transition-all duration-700 w-full flex justify-center md:justify-end"
              style={{
                transform: isHovered ? 'translateX(4px) translateY(-4px)' : 'translateX(0) translateY(0)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Frame outline */}
              <div
                className="absolute -inset-3 border transition-all duration-700 md:-inset-4"
                style={{
                  borderColor: isHovered ? 'hsl(var(--foreground) / 0.15)' : 'transparent',
                  transform: isHovered ? 'scale(1.01)' : 'scale(1)',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Image container - responsive sizing */}
              <div className="relative h-[320px] w-full max-w-[320px] overflow-hidden md:h-[400px] lg:h-[480px]">
                <div
                  className="absolute -inset-1 transition-all duration-700"
                  style={{
                    boxShadow: isHovered ? '0 24px 64px hsl(var(--foreground) / 0.1)' : '0 0 0 transparent',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <Image
                  src="/images/Santa Cruz (1).jpg"
                  alt="Santa Cruz de la Sierra, Bolivia"
                  fill
                  className="object-cover transition-all duration-1000"
                  style={{
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-700"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Corner accents */}
                <div
                  className="absolute left-2 top-2 h-5 w-px bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:h-6"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '50ms',
                  }}
                />
                <div
                  className="absolute left-2 top-2 h-px w-5 bg-white/80 transition-all duration-500 md:left-3 md:top-3 md:w-6"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '100ms',
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 h-5 w-px bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:h-6"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'bottom',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '150ms',
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 h-px w-5 bg-white/80 transition-all duration-500 md:bottom-3 md:right-3 md:w-6"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'right',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: '200ms',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
