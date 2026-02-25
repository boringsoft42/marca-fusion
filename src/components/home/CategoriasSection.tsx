'use client';

import { useState } from 'react';
import Image from 'next/image';
import catalogData from '@/data/catalog-data.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  folder: string;
  coverImage?: string;
  subcategories: unknown[];
  directImages: string[];
  totalImages: number;
}

export function CategoriasSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categorias = catalogData as Category[];

  // Configuración del carrusel - mostrar 4 items en desktop, 2 en tablet, 1 en mobile
  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  };

  const siguiente = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView.desktop >= categorias.length ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, categorias.length - itemsPerView.desktop) : prev - 1
    );
  };

  // Obtener las categorías visibles
  const categoriasVisibles = categorias.slice(
    currentIndex,
    currentIndex + itemsPerView.desktop
  );

  return (
    <section className="py-16 md:py-24 bg-white" id="categorias">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marca-steel mb-4">
            Encuentra tu planner ideal según tu estilo de vida
          </h2>
          <p className="text-lg text-marca-steel/70">
            Porque cada persona, hogar o empresa tiene una forma única de organizarse,
            diseñamos planners pensados para cada etapa y necesidad.
          </p>
        </div>

        {/* Subtítulo explicativo */}
        <div className="text-center mb-8">
          <p className="text-marca-green font-bold text-lg uppercase tracking-wide">
            Cada carpeta es una categoría, dentro se encuentra la subcategoría
          </p>
        </div>

        {/* Carrusel de Categorías */}
        <div className="relative">
          {/* Botón Anterior */}
          {currentIndex > 0 && (
            <button
              onClick={anterior}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-marca-green hover:text-white transition-all hover:scale-110"
              aria-label="Categorías anteriores"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Grid de Categorías */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categoriasVisibles.map((categoria) => (
              <a
                key={categoria.id}
                href={`#catalogo`}
                onClick={(e) => {
                  e.preventDefault();
                  const catalogSection = document.getElementById('catalogo');
                  if (catalogSection) {
                    catalogSection.scrollIntoView({ behavior: 'smooth' });
                    // Trigger category click after scroll
                    setTimeout(() => {
                      const categoryButton = document.querySelector(`[data-category-id="${categoria.id}"]`) as HTMLButtonElement;
                      if (categoryButton) {
                        categoryButton.click();
                      }
                    }, 500);
                  }
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Imagen de Categoría */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={categoria.coverImage || '/placeholder.jpg'}
                      alt={categoria.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Botón de categoría superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className="bg-marca-green text-white px-6 py-3 rounded-xl font-bold text-lg text-center shadow-lg transition-all group-hover:scale-105 uppercase tracking-wide"
                    >
                      {categoria.name}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Botón Siguiente */}
          {currentIndex + itemsPerView.desktop < categorias.length && (
            <button
              onClick={siguiente}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-marca-green hover:text-white transition-all hover:scale-110"
              aria-label="Categorías siguientes"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Indicadores de paginación */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({
            length: Math.ceil(categorias.length / itemsPerView.desktop),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView.desktop)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerView.desktop) === index
                  ? 'w-8 bg-marca-green'
                  : 'w-2 bg-marca-steel/30 hover:bg-marca-steel/50'
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>

        {/* Link para ver todas las categorías */}
        <div className="text-center mt-12">
          <p className="text-marca-steel/70 mb-4">
            ¿Quieres explorar todas nuestras categorías?
          </p>
          <button
            onClick={() => {
              // Scroll suave hacia arriba de la sección para mostrar todas
              const section = document.getElementById('categorias');
              if (section) {
                window.scrollTo({
                  top: section.offsetTop - 100,
                  behavior: 'smooth',
                });
              }
            }}
            className="inline-flex items-center gap-2 text-marca-green font-bold hover:underline text-lg group"
          >
            Desliza para ver todas las categorías
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
