'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Factory, Building2, Heart, Briefcase, Home, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Marca Fusión Sectors Carousel - Sierra Style
 *
 * Features:
 * - Sierra cream background
 * - White card carousel with Sierra styling
 * - Auto-rotate every 5 seconds
 * - Touch-swipe support
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface SectorsCarouselProps {
  className?: string;
}

export function SectorsCarousel({ className }: SectorsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sectors = [
    {
      key: 'oilGas',
      icon: Factory,
      title: 'Petróleo y Gas',
      description: 'Soluciones energéticas eficientes y confiables para operaciones en el sector de hidrocarburos, reduciendo costos y emisiones.',
    },
    {
      key: 'industrial',
      icon: Building2,
      title: 'Industrial',
      description: 'Sistemas de cogeneración y energía de respaldo para manufactura, procesamiento y producción continua.',
    },
    {
      key: 'healthcare',
      icon: Heart,
      title: 'Salud',
      description: 'Energía confiable 24/7 para hospitales y centros médicos que requieren suministro eléctrico ininterrumpido.',
    },
    {
      key: 'commercial',
      icon: Briefcase,
      title: 'Comercial',
      description: 'Organización profesional con planificadores y agendas diseñadas para empresas y profesionales modernos.',
    },
    {
      key: 'home',
      icon: Home,
      title: 'Hogar',
      description: 'Planificadores personales que te ayudan a organizar tu vida diaria con estilo y funcionalidad.',
    },
  ];

  // Auto-rotate functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sectors.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, sectors.length]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) goToNext();
    if (touchStart - touchEnd < -75) goToPrevious();
  };

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % sectors.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  const currentSector = sectors[currentIndex];

  return (
    <section className={cn('bg-sierra-cream py-16 md:py-20 lg:py-24', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            Sectores que Servimos
          </h2>
        </div>

        {/* Carousel Container - Sierra Style */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Carousel Card - Sierra Style */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="p-12 md:p-16 lg:p-20 text-center min-h-[400px] flex flex-col items-center justify-center">
              {/* Icon */}
              <div className="inline-flex p-6 rounded-2xl mb-8 bg-sierra-green/10">
                <currentSector.icon
                  className="h-12 w-12 md:h-16 md:w-16 text-sierra-green"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-sierra-text-primary mb-4">
                {currentSector.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] md:text-base text-sierra-text-secondary max-w-2xl leading-relaxed">
                {currentSector.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 text-sierra-text-primary" strokeWidth={1.5} aria-hidden="true" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6 text-sierra-text-primary" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green',
                  index === currentIndex
                    ? 'w-8 bg-sierra-green'
                    : 'w-2.5 bg-sierra-gray-light hover:bg-sierra-text-secondary/50'
                )}
                aria-label={`Ir a sector ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button - Sierra Style */}
        <div className="flex justify-center mt-12">
          <Link
            href="/sectores"
            className={cn(
              'inline-flex items-center gap-2 px-7 py-3 rounded-3xl text-[15px] font-medium',
              'bg-sierra-green text-white',
              'transition-colors duration-200',
              'hover:bg-sierra-green-hover',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
            )}
          >
            Ver todos los sectores
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
