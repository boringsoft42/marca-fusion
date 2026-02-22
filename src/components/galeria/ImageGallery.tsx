'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageModal } from '@/components/ui/ImageModal';

/**
 * Image Gallery Component with Lightbox
 *
 * Features:
 * - Grid layout of images
 * - Click to open in lightbox/modal
 * - Navigation between images in modal
 * - Responsive design
 */

interface ImageGalleryProps {
  images: string[];
  categoryName: string;
}

export function ImageGallery({ images, categoryName }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Grid de Imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {images.map((imagen, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="group relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <Image
              src={imagen}
              alt={`${categoryName} - Imagen ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Overlay en hover */}
            <div className="absolute inset-0 bg-marca-green/0 group-hover:bg-marca-green/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-bold text-lg bg-marca-green/80 px-4 py-2 rounded-full">
                Ver
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={closeModal}
          imageSrc={images[selectedImageIndex]}
          imageAlt={`${categoryName} - Imagen ${selectedImageIndex + 1}`}
          onNext={goToNext}
          onPrevious={goToPrevious}
          currentIndex={selectedImageIndex}
          totalImages={images.length}
        />
      )}
    </>
  );
}
