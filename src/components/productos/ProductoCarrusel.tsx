'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProductoCarruselProps {
  imagenes: string[];
  nombreProducto: string;
}

export function ProductoCarrusel({
  imagenes,
  nombreProducto,
}: ProductoCarruselProps) {
  const [imagenActual, setImagenActual] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false);

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  const irAImagen = (index: number) => {
    setImagenActual(index);
  };

  return (
    <>
      {/* Carrusel Principal */}
      <div className="space-y-4">
        {/* Imagen Principal con navegación */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-marca-beige/10 shadow-xl">
          <Image
            src={imagenes[imagenActual]}
            alt={`${nombreProducto} - Imagen ${imagenActual + 1}`}
            fill
            className="object-cover cursor-pointer"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            onClick={() => setMostrarModal(true)}
          />

          {/* Botones de navegación */}
          {imagenes.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-marca-steel p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={siguiente}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-marca-steel p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicador de posición */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                {imagenActual + 1} / {imagenes.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {imagenes.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {imagenes.map((imagen, index) => (
              <button
                key={index}
                onClick={() => irAImagen(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                  index === imagenActual
                    ? 'ring-4 ring-marca-green scale-105'
                    : 'ring-2 ring-marca-beige/30 hover:ring-marca-green/50 hover:scale-105'
                }`}
              >
                <Image
                  src={imagen}
                  alt={`${nombreProducto} - Miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Vista Completa */}
      {mostrarModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setMostrarModal(false)}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setMostrarModal(false)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-marca-steel p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Imagen ampliada */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenes[imagenActual]}
              alt={`${nombreProducto} - Imagen ${imagenActual + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {/* Navegación en modal */}
            {imagenes.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    anterior();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-marca-steel p-4 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    siguiente();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-marca-steel p-4 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Indicador de posición en modal */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-marca-steel px-6 py-3 rounded-full font-medium">
                  {imagenActual + 1} / {imagenes.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
