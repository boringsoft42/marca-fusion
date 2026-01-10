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
          className="group relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Flex Layout: Text left, Image right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left: Text Content */}
            <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left flex-1">
              {/* Label with diamond bullet */}
              <div className="mb-6 md:mb-8">
                <span className="text-sm uppercase tracking-wider font-medium text-[#1a1a1a]">
                  ◆ Equipo
                </span>
              </div>

              {/* Title - large, bold, black */}
              <h2 className="relative mb-6">
                <span className="block text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                  El Talento Detrás de Marca Fusión
                </span>
              </h2>

              {/* Description - medium size, normal weight, grey */}
              <div className="mt-6 text-base md:text-lg leading-relaxed text-[#666] space-y-4 md:mt-8 lg:mt-10">
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

              {/* Team Metrics - Below text content */}
              <div
                className="mt-8 md:mt-10 grid grid-cols-3 gap-4 w-full max-w-md"
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
              className="relative transition-all duration-700 w-full md:w-auto md:shrink-0 flex justify-center md:justify-end"
              style={{
                transform: isHovered ? 'translateX(4px) translateY(-4px)' : 'translateX(0) translateY(0)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Image container - responsive sizing */}
              <div className="relative h-[320px] w-full max-w-[320px] overflow-hidden md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src="/images/Equipo Marca Fusión.jpg"
                  alt="Equipo Marca Fusión"
                  fill
                  className="object-cover transition-all duration-1000 rounded-sm"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
