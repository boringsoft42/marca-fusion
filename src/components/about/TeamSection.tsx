'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Marca Fusión Team Section - Feature Spotlight Style
 *
 * Features:
 * - Feature spotlight design with hover animations
 * - Two-column layout: text left, image right
 * - Team metrics integrated in text column
 * - Professional and clean presentation
 * - Maintains original copy
 */

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div
          className="group relative flex cursor-pointer flex-col items-center gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16 max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Text Block */}
          <div className="relative z-10 flex w-full max-w-[320px] shrink-0 flex-col items-center text-center md:w-[240px] md:items-start md:text-left lg:w-[280px] lg:pt-4">
            {/* Label with animated line */}
            <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
              <div
                className="h-px bg-sierra-text-primary transition-all duration-700"
                style={{
                  width: isHovered ? 48 : 32,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <span
                className="text-[10px] font-medium uppercase tracking-[0.25em] text-sierra-text-primary transition-all duration-700 md:text-xs"
                style={{
                  letterSpacing: isHovered ? '0.3em' : '0.25em',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Equipo
              </span>
            </div>

            {/* Title - responsive text sizes */}
            <h2 className="relative mb-6">
              <span
                className="block text-4xl font-normal tracking-tight text-sierra-text-primary transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
                style={{
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                El Talento
              </span>
              <span
                className="block text-4xl font-normal tracking-tight text-sierra-text-primary transition-all duration-700 sm:text-5xl md:text-5xl lg:text-6xl"
                style={{
                  transform: isHovered ? 'translateX(12px)' : 'translateX(0)',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Detrás de Marca Fusión
              </span>
            </h2>

            {/* Description - responsive spacing */}
            <div
              className="mt-6 max-w-[260px] text-sm leading-relaxed transition-all duration-700 md:mt-8 md:max-w-[220px] md:text-base lg:mt-10 lg:max-w-[240px] space-y-4"
              style={{
                color: isHovered ? '#1a1a1a' : '#716F6C',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <p>
                En Marca Fusión creemos que las marcas no se representan solo con contratos, sino con personas que comparten una misma visión de crecimiento y excelencia.
              </p>

              <p>
                Nuestro equipo directivo y operativo combina experiencia en gestión de negocios internacionales, conocimiento del mercado boliviano, y un profundo sentido de responsabilidad profesional.
              </p>

              <p>
                Cada proyecto es una oportunidad para demostrar que la confianza se construye con resultados.
              </p>
            </div>

            {/* Team Metrics - Integrated in text column */}
            <div
              className="mt-8 md:mt-10 grid grid-cols-3 gap-4 w-full max-w-[260px] md:max-w-[220px] lg:max-w-[240px]"
              style={{
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: isHovered ? '100ms' : '0ms',
              }}
            >
              {/* Metric 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-sm bg-gray-100">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a1a1a]">10+</div>
                <p className="text-[10px] text-sierra-text-secondary text-center leading-tight">Años de Experiencia</p>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-sm bg-gray-100">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a1a1a]">100%</div>
                <p className="text-[10px] text-sierra-text-secondary text-center leading-tight">Compromiso con el Cliente</p>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 rounded-sm bg-gray-100">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1a1a1a]">24/7</div>
                <p className="text-[10px] text-sierra-text-secondary text-center leading-tight">Soporte Técnico</p>
              </div>
            </div>
          </div>

          {/* Right: Image Block */}
          <div
            className="relative transition-all duration-700"
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
            <div className="relative h-[280px] w-[260px] overflow-hidden sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[320px] lg:h-[420px] lg:w-[380px]">
              <div
                className="absolute -inset-1 transition-all duration-700"
                style={{
                  boxShadow: isHovered ? '0 24px 64px hsl(var(--foreground) / 0.1)' : '0 0 0 transparent',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
              <Image
                src="/images/Equipo Marca Fusión.jpg"
                alt="Equipo Marca Fusión"
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
    </section>
  );
}
