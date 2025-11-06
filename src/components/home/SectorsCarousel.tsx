'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Factory, Building2, Heart, Briefcase, Home, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Marca Fusión Sectors Carousel
 *
 * Features:
 * - 5 sectors with icons and descriptions
 * - Auto-rotate every 5 seconds
 * - Pause on hover
 * - Touch-swipe support
 * - Navigation dots and arrow controls
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface SectorsCarouselProps {
  className?: string;
}

export function SectorsCarousel({ className }: SectorsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const sectors = [
    {
      key: 'oilGas',
      icon: Factory,
      title: 'Petróleo y Gas',
      description: 'Soluciones energéticas eficientes y confiables para operaciones en el sector de hidrocarburos, reduciendo costos y emisiones.',
      color: 'marca-green',
    },
    {
      key: 'industrial',
      icon: Building2,
      title: 'Industrial',
      description: 'Sistemas de cogeneración y energía de respaldo para manufactura, procesamiento y producción continua.',
      color: 'marca-steel',
    },
    {
      key: 'healthcare',
      icon: Heart,
      title: 'Salud',
      description: 'Energía confiable 24/7 para hospitales y centros médicos que requieren suministro eléctrico ininterrumpido.',
      color: 'marca-green',
    },
    {
      key: 'commercial',
      icon: Briefcase,
      title: 'Comercial',
      description: 'Organización profesional con planificadores y agendas diseñadas para empresas y profesionales modernos.',
      color: 'marca-steel',
    },
    {
      key: 'home',
      icon: Home,
      title: 'Hogar',
      description: 'Planificadores personales que te ayudan a organizar tu vida diaria con estilo y funcionalidad.',
      color: 'marca-beige',
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
    if (touchStart - touchEnd > 75) {
      // Swipe left - next
      goToNext();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous
      goToPrevious();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSector = sectors[currentIndex];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/30', className)}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Sectores que Servimos
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Carousel Card */}
          <div className="relative overflow-hidden rounded-lg bg-background border border-border shadow-lg">
            <div className="p-8 md:p-12 lg:p-16 text-center min-h-[400px] flex flex-col items-center justify-center">
              {/* Icon */}
              <div
                className={cn(
                  'inline-flex p-6 rounded-full mb-6 shadow-md transition-all duration-500',
                  currentSector.color === 'marca-green' && 'bg-marca-green-light',
                  currentSector.color === 'marca-steel' && 'bg-marca-steel-light',
                  currentSector.color === 'marca-beige' && 'bg-marca-beige-light'
                )}
              >
                <currentSector.icon
                  className={cn(
                    'h-12 w-12 md:h-16 md:w-16 transition-all duration-500',
                    currentSector.color === 'marca-green' && 'text-marca-green',
                    currentSector.color === 'marca-steel' && 'text-marca-steel',
                    currentSector.color === 'marca-beige' && 'text-marca-beige'
                  )}
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {currentSector.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {currentSector.description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" aria-hidden="true" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6 text-foreground" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  index === currentIndex
                    ? 'w-8 bg-marca-green'
                    : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Ir a sector ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/sectores"
            className={cn(
              'inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
              'bg-marca-green text-white shadow-md',
              'transition-all duration-200',
              'hover:bg-marca-green/90 hover:shadow-lg hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
            )}
          >
            Ver todos los sectores
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
