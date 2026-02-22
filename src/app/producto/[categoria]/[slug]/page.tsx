import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductoBySlug, getCategoriaBySlug, getAllProductos } from '@/data/productos-catalog';
import { ProductoCarrusel } from '@/components/productos/ProductoCarrusel';
import { ChevronRight, Ruler, Package, Phone } from 'lucide-react';

interface ProductoPageProps {
  params: Promise<{
    categoria: string;
    slug: string;
  }>;
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { categoria: categoriaSlug, slug } = await params;
  const producto = getProductoBySlug(categoriaSlug, slug);
  const categoria = getCategoriaBySlug(categoriaSlug);

  if (!producto || !categoria) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-marca-beige/20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-sm text-marca-steel flex-wrap">
          <Link href="/" className="hover:text-marca-green transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/categoria/${categoriaSlug}`}
            className="hover:text-marca-green transition-colors"
          >
            {categoria.nombre}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-marca-green font-medium">{producto.nombre}</span>
        </nav>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Carrusel de Imágenes */}
          <div>
            <ProductoCarrusel
              imagenes={producto.imagenes}
              nombreProducto={producto.nombre}
            />
          </div>

          {/* Información del Producto */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marca-steel mb-4">
                {producto.nombre}
              </h1>
              {producto.descripcion && (
                <p className="text-lg text-marca-steel/80 leading-relaxed">
                  {producto.descripcion}
                </p>
              )}
            </div>

            {/* Tamaños Disponibles */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-marca-beige/20">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="w-6 h-6 text-marca-green" />
                <h2 className="text-xl font-bold text-marca-steel">
                  Tamaños Disponibles
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {producto.tamaños.map((tamaño, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 bg-marca-green/10 border-2 border-marca-green text-marca-steel rounded-lg font-semibold text-lg hover:bg-marca-green hover:text-white transition-colors cursor-pointer"
                  >
                    {tamaño} cm
                  </div>
                ))}
              </div>
            </div>

            {/* Galería de Imágenes */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-marca-beige/20">
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-marca-green" />
                <h2 className="text-xl font-bold text-marca-steel">
                  Galería de Imágenes
                </h2>
              </div>
              <p className="text-marca-steel/70">
                {producto.imagenes.length} fotos disponibles mostrando diferentes diseños y ángulos del producto
              </p>
            </div>

            {/* Información de Categoría */}
            <div className="bg-marca-beige/20 rounded-xl p-6 border border-marca-beige/40">
              <h3 className="text-sm font-semibold text-marca-steel/60 mb-2">
                CATEGORÍA
              </h3>
              <Link
                href={`/categoria/${categoriaSlug}`}
                className="text-lg font-bold text-marca-green hover:underline"
              >
                {categoria.nombre}
              </Link>
            </div>

            {/* Call to Action - Contacto */}
            <div className="bg-gradient-to-r from-marca-green to-marca-green/90 rounded-xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-3">
                ¿Te interesa este producto?
              </h3>
              <p className="mb-5 text-white/90">
                Contáctanos para conocer precios, disponibilidad y realizar tu pedido
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-white text-marca-green px-6 py-3 rounded-full font-bold hover:bg-marca-beige transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>

        {/* Productos Relacionados de la misma categoría */}
        {categoria.productos.length > 1 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-marca-steel mb-8 text-center">
              Más productos de {categoria.nombre}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoria.productos
                .filter((p) => p.id !== producto.id)
                .slice(0, 4)
                .map((productoRelacionado) => (
                  <Link
                    key={productoRelacionado.id}
                    href={`/producto/${categoriaSlug}/${productoRelacionado.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <div className="relative aspect-square overflow-hidden bg-marca-beige/10">
                        <img
                          src={productoRelacionado.imagenes[0]}
                          alt={productoRelacionado.nombre}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-marca-steel group-hover:text-marca-green transition-colors">
                          {productoRelacionado.nombre}
                        </h3>
                        <p className="text-sm text-marca-steel/60 mt-1">
                          {productoRelacionado.tamaños.join(', ')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Botón para volver a la categoría */}
        <div className="mt-12 text-center">
          <Link
            href={`/categoria/${categoriaSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-marca-steel text-white rounded-full font-medium hover:bg-marca-steel/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Ver todos los productos de {categoria.nombre}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  const productos = getAllProductos();

  return productos.map((producto) => ({
    categoria: producto.categoria,
    slug: producto.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductoPageProps) {
  const { categoria: categoriaSlug, slug } = await params;
  const producto = getProductoBySlug(categoriaSlug, slug);
  const categoria = getCategoriaBySlug(categoriaSlug);

  if (!producto || !categoria) {
    return {
      title: 'Producto no encontrado',
    };
  }

  return {
    title: `${producto.nombre} - ${categoria.nombre} - Marca Fusión Tablú`,
    description:
      producto.descripcion ||
      `${producto.nombre} disponible en tamaños: ${producto.tamaños.join(', ')}`,
    openGraph: {
      title: `${producto.nombre} - Marca Fusión Tablú`,
      description: producto.descripcion,
      images: [producto.imagenes[0]],
    },
  };
}
