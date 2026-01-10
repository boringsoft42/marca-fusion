'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight, Factory, Building2, Heart, Briefcase, Home } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Sectors Accordion - Sierra Style
 *
 * Features:
 * - Sierra cream background
 * - Accordion-based feature section with images
 * - Dynamic image preview based on selected sector
 * - Unsplash images for each sector
 * - Follows STYLE-GUIDE-SIERRA.md
 */

interface SectorsCarouselProps {
  className?: string;
}

export function SectorsCarousel({ className }: SectorsCarouselProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const sectors = [
    {
      key: 'oilGas',
      icon: Factory,
      title: 'Petróleo y Gas',
      description: 'Soluciones energéticas de alta eficiencia.',
      image: '/images/Petroleo y gas.JPG',
      alt: 'Plataforma petrolera y equipos de gas natural',
    },
    {
      key: 'industrial',
      icon: Building2,
      title: 'Industrial',
      description: 'Generación limpia y continua.',
      image: '/images/Industrial.jpg',
      alt: 'Planta industrial de manufactura moderna',
    },
    {
      key: 'healthcare',
      icon: Heart,
      title: 'Hospitalario',
      description: 'Respaldo energético confiable.',
      image: '/images/Hospital.jpg',
      alt: 'Hospital moderno con tecnología de punta',
    },
    {
      key: 'commercial',
      icon: Briefcase,
      title: 'Comercial y Corporativo',
      description: 'Tecnología aplicada al día a día.',
      image: '/images/comercial.jpg',
      alt: 'Oficina comercial moderna con ambiente profesional',
    },
    {
      key: 'home',
      icon: Home,
      title: 'Hogar',
      description: 'Organización y planificación personal.',
      image: '/images/Hogar.jpg',
      alt: 'Casa residencial moderna y acogedora',
    },
  ];

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary">
            <span className="font-bold">Sectores</span> que Atendemos
          </h2>
        </motion.div>

        {/* Project Showcase Style Layout */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Floating Image Preview - Hidden on mobile */}
          <div
            className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden lg:block"
            style={{
              left: containerRef.current?.getBoundingClientRect().left ?? 0,
              top: containerRef.current?.getBoundingClientRect().top ?? 0,
              transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.8,
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="relative w-[320px] h-[240px] bg-secondary rounded-xl overflow-hidden">
              {sectors.map((sector, index) => (
                <Image
                  key={sector.key}
                  src={sector.image}
                  alt={sector.alt}
                  fill
                  className="object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 1.1,
                    filter: hoveredIndex === index ? 'none' : 'blur(10px)',
                  }}
                />
              ))}
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Sectors List - Project Showcase Style */}
          <div className="space-y-0">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.key}
                  className="group block"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="relative py-5 border-t border-[#e0e0e0] transition-all duration-300 ease-out">
                    {/* Background highlight on hover */}
                    <div
                      className={cn(
                        'absolute inset-0 -mx-4 px-4 bg-[#f9f9f9]/50 rounded-lg transition-all duration-300 ease-out',
                        hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      )}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Icon */}
                        <div
                          className={cn(
                            'p-3 rounded-sm transition-all duration-300 border',
                            hoveredIndex === index
                              ? 'bg-[#0D6832] border-white shadow-[0_4px_12px_rgba(13,104,50,0.3)]'
                              : 'bg-white border-transparent'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-6 w-6 transition-colors duration-300',
                              hoveredIndex === index ? 'text-white' : 'text-sierra-text-secondary'
                            )}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Title with animated underline */}
                          <div className="inline-flex items-center gap-2">
                            <h3 className="text-sierra-text-primary font-medium text-lg tracking-tight">
                              <span className="relative">
                                {sector.title}
                                {/* Animated underline */}
                                <span
                                  className={cn(
                                    'absolute left-0 -bottom-0.5 h-px bg-sierra-green transition-all duration-300 ease-out',
                                    hoveredIndex === index ? 'w-full' : 'w-0'
                                  )}
                                />
                              </span>
                            </h3>

                            {/* Arrow that slides in */}
                            <ArrowUpRight
                              className={cn(
                                'w-4 h-4 text-sierra-text-secondary transition-all duration-300 ease-out',
                                hoveredIndex === index
                                  ? 'opacity-100 translate-x-0 translate-y-0'
                                  : 'opacity-0 -translate-x-2 translate-y-2'
                              )}
                            />
                          </div>

                          {/* Description with fade effect */}
                          <p
                            className={cn(
                              'text-sierra-text-secondary text-sm mt-1 leading-relaxed transition-all duration-300 ease-out',
                              hoveredIndex === index ? 'text-sierra-text-primary/70' : 'text-sierra-text-secondary'
                            )}
                          >
                            {sector.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom border for last item */}
            <div className="border-t border-[#e0e0e0]" />
          </div>
        </div>

        {/* CTA Button - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/sectores"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase',
              'bg-[#0D6832] text-white',
              'transition-all duration-200',
              'hover:bg-[#0a5528]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2'
            )}
          >
            Ver todos los sectores
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
