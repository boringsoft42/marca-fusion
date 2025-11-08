'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight, Factory, Building2, Heart, Briefcase, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  const [activeSector, setActiveSector] = useState('oilGas');

  const sectors = [
    {
      key: 'oilGas',
      icon: Factory,
      title: 'Petróleo y Gas',
      description: 'Soluciones energéticas eficientes y confiables para operaciones en el sector de hidrocarburos, reduciendo costos y emisiones.',
      image: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?auto=format&fit=crop&w=800&q=80',
      alt: 'Plataforma petrolera y equipos de gas natural',
    },
    {
      key: 'industrial',
      icon: Building2,
      title: 'Industrial',
      description: 'Sistemas de cogeneración y energía de respaldo para manufactura, procesamiento y producción continua.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      alt: 'Planta industrial de manufactura moderna',
    },
    {
      key: 'healthcare',
      icon: Heart,
      title: 'Salud',
      description: 'Energía confiable 24/7 para hospitales y centros médicos que requieren suministro eléctrico ininterrumpido.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      alt: 'Pasillo de hospital moderno con iluminación profesional',
    },
    {
      key: 'commercial',
      icon: Briefcase,
      title: 'Comercial',
      description: 'Organización profesional con planificadores y agendas diseñadas para empresas y profesionales modernos.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      alt: 'Oficina comercial moderna con ambiente profesional',
    },
    {
      key: 'home',
      icon: Home,
      title: 'Hogar',
      description: 'Planificadores personales que te ayudan a organizar tu vida diaria con estilo y funcionalidad.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
      alt: 'Casa residencial moderna y acogedora',
    },
  ];

  const currentSector = sectors.find((s) => s.key === activeSector) || sectors[0];

  return (
    <section className={cn('bg-sierra-cream py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
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
            Sectores que Servimos
          </h2>
        </motion.div>

        {/* Accordion + Image Grid - Sierra Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Left: Accordion */}
          <div className="order-2 lg:order-1">
            <Accordion
              type="single"
              collapsible
              value={activeSector}
              onValueChange={(value) => value && setActiveSector(value)}
              className="space-y-4"
            >
              {sectors.map((sector) => {
                const Icon = sector.icon;
                return (
                  <AccordionItem
                    key={sector.key}
                    value={sector.key}
                    className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-0 overflow-hidden transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left">
                        <div
                          className={cn(
                            'p-3 rounded-xl transition-colors',
                            activeSector === sector.key
                              ? 'bg-sierra-green/10'
                              : 'bg-sierra-gray-light group-hover:bg-sierra-green/5'
                          )}
                        >
                          <Icon
                            className={cn(
                              'h-6 w-6 transition-colors',
                              activeSector === sector.key
                                ? 'text-sierra-green'
                                : 'text-sierra-text-secondary group-hover:text-sierra-green'
                            )}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </div>
                        <span
                          className={cn(
                            'text-lg font-medium transition-colors',
                            activeSector === sector.key
                              ? 'text-sierra-green'
                              : 'text-sierra-text-primary group-hover:text-sierra-green'
                          )}
                        >
                          {sector.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-0">
                      <p className="text-[15px] text-sierra-text-secondary leading-relaxed pl-[52px]">
                        {sector.description}
                      </p>
                      {/* Mobile Image - Shown only on small screens */}
                      <div className="mt-4 lg:hidden pl-[52px]">
                        <div className="relative aspect-video rounded-xl overflow-hidden">
                          <Image
                            src={sector.image}
                            alt={sector.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Right: Image Preview - Hidden on mobile */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-8">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <Image
                  key={currentSector.key}
                  src={currentSector.image}
                  alt={currentSector.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

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
        </motion.div>
      </div>
    </section>
  );
}
