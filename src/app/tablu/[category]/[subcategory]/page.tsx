'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import catalogData from '@/data/catalog-data.json';
import { useEffect } from 'react';

interface PageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

interface Subcategory {
  id: string;
  name: string;
  folderPath: string;
  images: string[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage?: string;
  subcategories: Subcategory[];
  directImages: string[];
  totalImages: number;
}

export default function SubcategoryGalleryPage({ params }: PageProps) {
  const categories = catalogData as Category[];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find category
  const category = categories.find(cat => cat.slug === params.category);
  if (!category) {
    notFound();
  }

  // Find subcategory
  const subcategory = category.subcategories.find(sub => sub.id === params.subcategory);
  if (!subcategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with transparent background */}
      <div className="bg-transparent sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/tablu#catalogo"
                className={cn(
                  'inline-flex items-center gap-2 text-black hover:text-marca-steel',
                  'font-medium transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-steel focus-visible:ring-offset-2 rounded-md px-2 py-1'
                )}
              >
                <ChevronLeft className="w-5 h-5" />
                Volver al catálogo
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-bold text-black">{subcategory.name}</h1>
            <p className="text-black/70 mt-1">
              {category.name} • {subcategory.images.length} diseños disponibles
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {subcategory.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`${subcategory.name} - Diseño ${index + 1}`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Image number overlay */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-marca-steel/70 mb-4 text-lg">¿Te gustó algún diseño?</p>
            <a
              href={`https://wa.me/59167710595?text=Hola! Me interesa el diseño de ${encodeURIComponent(subcategory.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white',
                'bg-[#25D366] hover:bg-[#20ba5a] shadow-lg hover:shadow-xl',
                'transition-all duration-300 hover:-translate-y-1',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
              )}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all subcategories
export async function generateStaticParams() {
  const categories = catalogData as Category[];
  const params: { category: string; subcategory: string }[] = [];

  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      params.push({
        category: category.slug,
        subcategory: subcategory.id,
      });
    });
  });

  return params;
}
