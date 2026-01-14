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
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter products based on active filter
  const filteredProducts = tabluCatalog.filter((product) => {
    if (activeFilter === 'all') return true;

    // Check if product belongs to the selected category
    if (activeFilter === 'dark') {
      return product.tags.includes('dark');
    }

    return product.categories.includes(activeFilter);
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleCount(6); // Reset visible count on filter change
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
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
            <h2 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              Catálogo de Productos
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-8">
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
              {filterCategories.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleFilterChange(filter.id)}
                  className={cn(
                    'px-7 py-3 rounded-3xl text-[15px] font-medium',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2',
                    activeFilter === filter.id
                      ? 'bg-[#5762A2] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                      : 'bg-[#ebe8e3] text-[#1a1a1a] hover:bg-[#5762A2] hover:text-white'
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
              <span className="font-medium text-[#1a1a1a]">{displayedProducts.length}</span>
              {' '}de{' '}
              <span className="font-medium text-[#1a1a1a]">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'producto' : 'productos'}
              {activeFilter !== 'all' && (
                <>
                  {' '}en{' '}
                  <span className="font-medium text-[#5762A2]">
                    {filterCategories.find((f) => f.id === activeFilter)?.label}
                  </span>
                </>
              )}
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {displayedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>

              {/* Show More Button */}
              {filteredProducts.length > visibleCount && (
                <div className="text-center">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={handleShowMore}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-3xl px-8 py-3 text-[15px] font-medium',
                      'bg-white text-[#5762A2] border-2 border-[#5762A2]',
                      'transition-all duration-200',
                      'hover:bg-[#5762A2] hover:text-white hover:shadow-lg',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2'
                    )}
                  >
                    Ver todos los diseños
                  </motion.button>
                </div>
              )}
            </>
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
                onClick={() => handleFilterChange('all')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-[#5762A2] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#4A5BA8]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2'
                )}
              >
                Ver Todos los Productos
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
