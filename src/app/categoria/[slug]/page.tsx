import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoriaBySlug } from '@/data/productos-catalog';
import { ChevronRight } from 'lucide-react';

interface CategoriaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params;
  const categoria = getCategoriaBySlug(slug);

  if (!categoria) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-marca-beige/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-sm text-marca-steel">
          <Link href="/" className="hover:text-marca-green transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-marca-green font-medium">{categoria.nombre}</span>
        </nav>
      </div>

      {/* Header de Categoría */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-marca-steel mb-4">
            {categoria.nombre}
          </h1>
          <p className="text-lg text-marca-steel/80">{categoria.descripcion}</p>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categoria.productos.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${slug}/${producto.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Imagen del Producto */}
                <div className="relative aspect-square overflow-hidden bg-marca-beige/10">
                  <Image
                    src={producto.imagenes[0]}
                    alt={producto.nombre}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-marca-green/0 group-hover:bg-marca-green/10 transition-colors duration-300" />
                </div>

                {/* Info del Producto */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-marca-steel mb-2 group-hover:text-marca-green transition-colors">
                    {producto.nombre}
                  </h3>

                  {/* Tamaños Disponibles */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {producto.tamaños.map((tamaño, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-marca-beige/30 text-marca-steel text-sm rounded-full font-medium"
                      >
                        {tamaño}
                      </span>
                    ))}
                  </div>

                  {/* Descripción corta si existe */}
                  {producto.descripcion && (
                    <p className="text-sm text-marca-steel/70 line-clamp-2 mb-3">
                      {producto.descripcion}
                    </p>
                  )}

                  {/* Badge de cantidad de imágenes */}
                  <div className="flex items-center justify-between pt-3 border-t border-marca-beige/30">
                    <span className="text-sm text-marca-steel/60">
                      {producto.imagenes.length} fotos
                    </span>
                    <ChevronRight className="w-5 h-5 text-marca-green group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón para volver */}
        <div className="mt-16 text-center">
          <Link
            href="/#categorias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-marca-green text-white rounded-full font-medium hover:bg-marca-green/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Ver todas las categorías
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  const { categorias } = await import('@/data/productos-catalog');

  return categorias.map((categoria) => ({
    slug: categoria.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoriaPageProps) {
  const { slug } = await params;
  const categoria = getCategoriaBySlug(slug);

  if (!categoria) {
    return {
      title: 'Categoría no encontrada',
    };
  }

  return {
    title: `${categoria.nombre} - Marca Fusión Tablú`,
    description: categoria.descripcion,
    openGraph: {
      title: `${categoria.nombre} - Marca Fusión Tablú`,
      description: categoria.descripcion,
      images: [categoria.imagen],
    },
  };
}
