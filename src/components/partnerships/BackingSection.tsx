'use client';

import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Backing Section (Partnerships)
 *
 * Features:
 * - Brand representation showcase
 * - Capstone and Tablú logos/mentions
 * - Trust indicators
 * - Professional presentation
 * - Follows STYLE-GUIDE-SIERRA.md design patterns
 */

interface BackingSectionProps {
  className?: string;
}

export function BackingSection({ className }: BackingSectionProps) {
  const brandRepresentations = [
    {
      name: 'Capstone Green Energy',
      description: 'Microturbinas de cogeneración y generación distribuida',
      region: 'Estados Unidos',
      since: '2010',
      link: 'https://www.capstonegreenenergy.com',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Tablú',
      description: 'Planificadores digitales en acrílico y magnéticos',
      region: 'Perú & Bolivia',
      since: '2020',
      link: 'https://tablu.com.pe',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-7 py-3 rounded-3xl bg-sierra-green/10 mb-6">
              <Award className="h-5 w-5 text-sierra-green" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[15px] font-medium text-sierra-green">Respaldo</span>
            </div>
            <h2 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              Marcas que Representamos
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Representamos marcas globales reconocidas por su innovación, calidad y compromiso con la excelencia.
            </p>
          </motion.div>

          {/* Brand Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {brandRepresentations.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-8 md:p-10 rounded-2xl bg-white border border-[#e0e0e0] hover:border-sierra-green/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Brand Image */}
                <div className="mb-6 h-40 relative rounded-xl overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-2xl font-normal text-white">
                    {brand.name}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] text-[#1a1a1a] mb-4 font-medium">{brand.description}</p>

                {/* Details */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-[15px] text-[#6b6b6b]">
                    <span className="font-medium text-[#1a1a1a]">Región:</span>
                    {brand.region}
                  </div>
                  <div className="flex items-center gap-2 text-[15px] text-[#6b6b6b]">
                    <span className="font-medium text-[#1a1a1a]">Desde:</span>
                    {brand.since}
                  </div>
                </div>

                {/* External Link */}
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-sierra-green hover:text-sierra-green/80 transition-colors duration-200"
                >
                  Visitar sitio oficial
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 rounded-2xl bg-sierra-cream shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿Tu Marca Puede Ser la Siguiente?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto leading-relaxed">
              Estamos siempre abiertos a evaluar nuevas representaciones que aporten valor al mercado boliviano
              y se alineen con nuestra filosofía de excelencia e innovación.
            </p>
            <a
              href="/contacto"
              className={cn(
                'inline-flex items-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                'bg-sierra-green text-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]',
                'transition-all duration-200',
                'hover:bg-[#0a5528]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sierra-green focus-visible:ring-offset-2'
              )}
            >
              Proponer Representación
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
