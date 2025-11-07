'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProductCard } from './ProductCard';
import { tabluCatalog, filterCategories } from '@/data/tablu-catalog';

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

  // Filter products based on active filter
  const filteredProducts = tabluCatalog.filter((product) => {
    if (activeFilter === 'all') return true;

    // Check if product belongs to the selected category
    if (activeFilter === 'dark') {
      return product.tags.includes('dark');
    }

    return product.categories.includes(activeFilter);
  });

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
            <h2 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              Catálogo de Productos
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Explora nuestra colección completa de planificadores digitales. Filtra por categoría para encontrar el ideal para ti.
            </p>
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
              {filterCategories.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    'px-7 py-3 rounded-3xl text-[15px] font-medium',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2',
                    activeFilter === filter.id
                      ? 'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                      : 'bg-[#ebe8e3] text-[#1a1a1a] hover:bg-[#0d6832] hover:text-white'
                  )}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <p className="text-[15px] text-[#6b6b6b]">
              Mostrando{' '}
              <span className="font-medium text-[#1a1a1a]">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'producto' : 'productos'}
              {activeFilter !== 'all' && (
                <>
                  {' '}en{' '}
                  <span className="font-medium text-[#0d6832]">
                    {filterCategories.find((f) => f.id === activeFilter)?.label}
                  </span>
                </>
              )}
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="inline-flex p-6 rounded-full bg-[#ebe8e3] mb-4">
                <svg
                  className="h-16 w-16 text-[#6b6b6b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">
                No se encontraron productos
              </h3>
              <p className="text-[15px] text-[#6b6b6b] mb-6">
                No hay productos disponibles en esta categoría en este momento.
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#0a5528]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                )}
              >
                Ver Todos los Productos
              </button>
            </motion.div>
          )}

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 p-8 md:p-10 rounded-2xl bg-[#ebe8e3] text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
              ¿No encuentras el diseño perfecto?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos diseños 100% personalizados para individuos, emprendedores y empresas.
              Trabajamos contigo para crear el planificador ideal que se adapte a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/59167710595?text=Hola!%20Necesito%20un%20diseño%20personalizado%20de%20planificador"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#0a5528]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                )}
              >
                Solicitar Diseño Personalizado
              </a>
              <a
                href="#corporativo"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#0a5528]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                )}
              >
                Ver Soluciones Corporativas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
