'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { categoriasConImagenes } from '@/data/categorias-imagenes';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Tablú Product Catalog
 *
 * Features:
 * - Interactive category filters
 * - Dynamic product grid
 * - Filter by category (Ver Todo, Home Office, Niños, etc.)
 * - Smooth transitions
 * - Responsive grid layout
 * - Product count display
 * - Follows Sierra style guide
 */

interface ProductCatalogProps {
  className?: string;
}

export function ProductCatalog({ className }: ProductCatalogProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter categories based on active filter
  const filteredCategorias = activeFilter === 'all'
    ? categoriasConImagenes
    : categoriasConImagenes.filter((cat) => cat.slug === activeFilter);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <section id="catalogo" className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Catálogo de <span className="font-kaushan text-[#0D6832] lowercase text-[0.85em] font-normal tracking-normal">diseños exclusivos</span>
            </h2>
            <p className="text-base md:text-lg text-[#555] max-w-3xl mx-auto leading-relaxed mb-8">
              Elegí tu modelo, tamaño y estilo favorito del catálogo y realizá tu pedido directamente por WhatsApp.
            </p>
            
            <a
              href="https://wa.me/59167710595"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white',
                'bg-[#25D366] hover:bg-[#20ba5a] shadow-lg hover:shadow-xl',
                'transition-all duration-300 hover:-translate-y-1',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
              )}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Pedido por WhatsApp
            </a>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                onClick={() => handleFilterChange('all')}
                className={cn(
                  'px-7 py-3 rounded-3xl text-[15px] font-medium',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2',
                  activeFilter === 'all'
                    ? 'bg-[#5762A2] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                    : 'bg-[#ebe8e3] text-[#1a1a1a] hover:bg-[#5762A2] hover:text-white'
                )}
              >
                Ver Todo
              </motion.button>
              {categoriasConImagenes.map((categoria, index) => (
                <motion.button
                  key={categoria.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index + 1) * 0.05 }}
                  onClick={() => handleFilterChange(categoria.slug)}
                  className={cn(
                    'px-7 py-3 rounded-3xl text-[15px] font-medium',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2',
                    activeFilter === categoria.slug
                      ? 'bg-[#5762A2] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                      : 'bg-[#ebe8e3] text-[#1a1a1a] hover:bg-[#5762A2] hover:text-white'
                  )}
                >
                  {categoria.nombre}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Categories Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCategorias.map((categoria, catIndex) => (
              <motion.div
                key={categoria.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <Link
                  href={`/galeria/${categoria.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    {/* Category Image Preview - Grid of 4 images */}
                    <div className="relative aspect-square overflow-hidden bg-marca-beige/10">
                      <div className="grid grid-cols-2 gap-0.5 h-full">
                        {categoria.todasLasImagenes.slice(0, 4).map((imagen, imgIndex) => (
                          <div key={imgIndex} className="relative">
                            <Image
                              src={imagen}
                              alt={`${categoria.nombre} - Preview ${imgIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-marca-green/0 group-hover:bg-marca-green/10 transition-colors duration-300" />

                      {/* Overlay con información */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <p className="font-bold text-lg">Ver Galería</p>
                          <p className="text-sm">{categoria.todasLasImagenes.length} imágenes</p>
                        </div>
                      </div>
                    </div>

                    {/* Category Info */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-marca-steel mb-2 group-hover:text-marca-green transition-colors">
                        {categoria.nombre}
                      </h3>
                      <p className="text-sm text-marca-steel/70 line-clamp-2 mb-3">
                        {categoria.descripcion}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-marca-steel/60">
                          {categoria.todasLasImagenes.length} diseños
                        </span>
                        <span className="text-marca-green font-medium group-hover:underline">
                          Ver galería →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
