'use client';

import Image from 'next/image';
import catalogData from '@/data/catalog-data.json';

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
  const categorias = catalogData as Category[];

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

        {/* Grid de Categorías - Todas visibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categorias.map((categoria) => (
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
      </div>
    </section>
  );
}
