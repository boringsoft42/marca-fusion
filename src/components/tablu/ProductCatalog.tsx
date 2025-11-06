'use client';

import { useState } from 'react';
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
 * - Follows STYLE-GUIDE.md design patterns
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
    <section id="catalogo" className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Catálogo de Productos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Explora nuestra colección completa de planificadores digitales. Filtra por categoría para encontrar el ideal para ti.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {filterCategories.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    'px-5 py-2.5 rounded-full text-sm font-semibold',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2',
                    activeFilter === filter.id
                      ? 'bg-marca-beige text-white shadow-lg scale-105'
                      : 'bg-muted text-muted-foreground border border-border hover:bg-marca-beige/10 hover:text-marca-beige hover:border-marca-beige/30 hover:scale-105'
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              Mostrando{' '}
              <span className="font-semibold text-foreground">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'producto' : 'productos'}
              {activeFilter !== 'all' && (
                <>
                  {' '}en{' '}
                  <span className="font-semibold text-marca-beige">
                    {filterCategories.find((f) => f.id === activeFilter)?.label}
                  </span>
                </>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="inline-flex p-6 rounded-full bg-muted mb-4">
                <svg
                  className="h-16 w-16 text-muted-foreground"
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
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No se encontraron productos
              </h3>
              <p className="text-muted-foreground mb-6">
                No hay productos disponibles en esta categoría en este momento.
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                  'bg-marca-beige text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-marca-beige/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                )}
              >
                Ver Todos los Productos
              </button>
            </div>
          )}

          {/* Bottom Info */}
          <div className="mt-16 p-6 md:p-8 rounded-lg bg-gradient-to-br from-marca-beige/10 to-background border border-marca-beige/30 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿No encuentras el diseño perfecto?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
              Ofrecemos diseños 100% personalizados para individuos, emprendedores y empresas.
              Trabajamos contigo para crear el planificador ideal que se adapte a tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/59167710595?text=Hola!%20Necesito%20un%20diseño%20personalizado%20de%20planificador"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                  'bg-[#25D366] text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-[#25D366]/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
                )}
              >
                Solicitar Diseño Personalizado
              </a>
              <a
                href="#corporativo"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                  'bg-marca-beige text-white shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-marca-beige/90 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-beige focus-visible:ring-offset-2'
                )}
              >
                Ver Soluciones Corporativas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
