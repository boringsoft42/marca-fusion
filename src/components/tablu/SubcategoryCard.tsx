'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Subcategory Card with Image Carousel
 *
 * Features:
 * - Image carousel with navigation arrows
 * - Preview mode (carousel) without clicking
 * - Click to open full gallery modal
 * - Image count display
 * - Smooth transitions
 */

interface SubcategoryCardProps {
  subcategory: {
    id: string;
    name: string;
    images: string[];
  };
  categorySlug: string;
  onViewGallery?: () => void;
  className?: string;
}

export function SubcategoryCard({ subcategory, categorySlug, onViewGallery, className }: SubcategoryCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { name, images } = subcategory;

  if (!images || images.length === 0) {
    return null;
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn('group', className)}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Carousel Container */}
        <div className="relative aspect-square overflow-hidden bg-marca-beige/10">
          {/* Image Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${name} - ${currentImageIndex + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Always visible */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={cn(
                  'absolute left-2 top-1/2 -translate-y-1/2 z-20',
                  'w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg',
                  'flex items-center justify-center',
                  'hover:bg-white hover:scale-110 transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                )}
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6 text-marca-steel" strokeWidth={2.5} />
              </button>

              <button
                onClick={nextImage}
                className={cn(
                  'absolute right-2 top-1/2 -translate-y-1/2 z-20',
                  'w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg',
                  'flex items-center justify-center',
                  'hover:bg-white hover:scale-110 transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                )}
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6 text-marca-steel" strokeWidth={2.5} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Hover Overlay with "Ver Galería" */}
          <Link
            href={`/tablu/${categorySlug}/${subcategory.id}`}
            className={cn(
              'absolute inset-0 bg-marca-green/0 group-hover:bg-marca-green/20',
              'transition-all duration-300 cursor-pointer',
              'flex items-center justify-center opacity-0 group-hover:opacity-100'
            )}
          >
            <div className="bg-white rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Eye className="w-8 h-8 text-marca-green" strokeWidth={2} />
            </div>
          </Link>
        </div>

        {/* Card Info */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-marca-steel mb-2 group-hover:text-marca-green transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-marca-steel/60">{images.length} diseños</span>
            <Link
              href={`/tablu/${categorySlug}/${subcategory.id}`}
              className="text-marca-green font-medium hover:underline flex items-center gap-1"
            >
              Ver galería
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
