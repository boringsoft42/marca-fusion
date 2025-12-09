'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

/**
 * Capstone Product Grid - Tab Navigation with Product Details
 *
 * Features:
 * - Tab navigation for all Capstone models
 * - Selected product displays full details below
 * - Left: Image carousel
 * - Right: Specifications and information
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ProductGridProps {
  className?: string;
}

interface Product {
  model: string;
  capacity: string;
  efficiency: string;
  applications: string[];
  description: string;
  keyFeatures: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  images: string[]; // Placeholder for now
}

export function ProductGrid({ className }: ProductGridProps) {
  const [selectedModel, setSelectedModel] = useState<string>('C65');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const products: Product[] = [
    {
      model: 'C65',
      capacity: '65 kW',
      efficiency: 'Hasta 28%',
      applications: ['Pequeña Industria', 'Comercial', 'Respaldo'],
      description: 'Solución compacta ideal para aplicaciones comerciales y pequeñas industrias que requieren generación distribuida confiable.',
      keyFeatures: [
        'Diseño compacto y modular',
        'Operación con múltiples combustibles',
        'Bajo nivel de ruido',
        'Instalación simplificada',
      ],
      technicalSpecs: [
        { label: 'Potencia', value: '65 kW' },
        { label: 'Eficiencia Eléctrica LHV', value: '28%' },
        { label: 'Eficiencia Combinada de Calor y Energía', value: 'Hasta 90%' },
        { label: 'Voltaje', value: '400-480 VAC' },
        { label: 'Frecuencia', value: '50/60 Hz' },
        { label: 'Servicio Eléctrico', value: '3 Fases, 4 Hilos Wye' },
        { label: 'Ancho', value: '0.76 m (30 in)' },
        { label: 'Profundidad', value: '1.95 m (77 in)' },
        { label: 'Altura', value: '1.91 m (75 in)' },
        { label: 'Peso', value: 'Conexión a Red - 758 kg (1,671 lb); Modo Dual - 1,121 kg (2,471 lb)' },
        { label: 'Tasa de Calor Neta LHV', value: '12.4 MJ/kWh (11,800 BTU/kWh)' },
        { label: 'Temperatura de Escape', value: '309°C (588°F)' },
        { label: 'Flujo de Gas de Escape', value: '0.49 kg/s (1.08 lbm/s)' },
        { label: 'Combustibles Compatibles', value: 'Gas Natural, Diésel Ultra Bajo en Azufre #2, Biogás (Vertedero, Digestor), Gas Asociado, Gas Ácido, Gas Propano' },
      ],
      images: [
        '/images/C65 (2).png',
        '/images/C65 (4).png',
        '/images/C65 (5).png',
        '/images/C65 (2).jpg',
      ],
    },
    {
      model: 'C200S',
      capacity: '200 kW',
      efficiency: 'Hasta 33%',
      applications: ['Industrial', 'Cogeneración', 'Hospitalario'],
      description: 'Modelo versátil para aplicaciones industriales medianas, ideal para cogeneración y respaldo crítico.',
      keyFeatures: [
        'Alta eficiencia eléctrica',
        'Capacidad de cogeneración',
        'Ultra bajas emisiones',
        'Operación continua 24/7',
      ],
      technicalSpecs: [
        { label: 'Potencia', value: '200 kW Eléctricos' },
        { label: 'Eficiencia Eléctrica LHV', value: '33%' },
        { label: 'Eficiencia Combinada de Calor y Energía', value: 'Hasta 90%' },
        { label: 'Voltaje', value: '400-480 VAC' },
        { label: 'Frecuencia', value: '50/60 Hz, Conexión a Red' },
        { label: 'Servicio Eléctrico', value: '3 Fases, 4 Hilos Wye' },
        { label: 'Ancho', value: '3.0 m (117 in)' },
        { label: 'Profundidad', value: '2.5 m (100 in)' },
        { label: 'Altura', value: '3.03 m (119 in)' },
        { label: 'Peso', value: 'Conexión a Red – 5,200 kg (11,400 lbs); Modo Dual – 5,850 kg (12,900 lbs)' },
        { label: 'Tasa de Calor Neta LHV', value: '10.9 MJ/kWh (10,300 BTU/kWh)' },
        { label: 'Temperatura de Escape', value: '280 °C (535°F)' },
        { label: 'Flujo de Gas de Escape', value: '1.3 kg/s (2.9 lbm/s)' },
        { label: 'Combustibles Compatibles', value: 'Gas Natural de Tubería, Biogás (Vertedero, Digestor), Gas Natural Crudo (Ácido, Gas Asociado)' },
      ],
      images: [
        '/images/C200S (2).png',
        '/images/C200S (3).png',
        '/images/C200S (4).png',
        '/images/C200S (7).png',
      ],
    },
    {
      model: 'C600S',
      capacity: '600 kW',
      efficiency: 'Hasta 33%',
      applications: ['Gran Industria', 'Oil & Gas', 'Minería'],
      description: 'Potencia robusta para aplicaciones industriales exigentes con alta demanda energética.',
      keyFeatures: [
        'Alta capacidad de generación',
        'Ideal para instalaciones remotas',
        'Configuración en paralelo disponible',
        'Mínimo mantenimiento',
      ],
      technicalSpecs: [
        { label: 'Potencia', value: '600 kW' },
        { label: 'Eficiencia Eléctrica LHV', value: '33%' },
        { label: 'Eficiencia Combinada de Calor y Energía', value: 'Hasta 90%' },
        { label: 'Voltaje', value: '400-480 VAC' },
        { label: 'Frecuencia', value: '50/60 Hz' },
        { label: 'Servicio Eléctrico', value: '3 Fases, 4 Hilos Wye' },
        { label: 'Ancho', value: '3.0 m (117 in)' },
        { label: 'Profundidad', value: '5.8 m (230 in)' },
        { label: 'Altura', value: '3.03 m (119 in)' },
        { label: 'Peso', value: 'Conexión a Red – 13,300 kg (29,300 lbs); Modo Dual – 15,400 kg (33,900 lbs)' },
        { label: 'Tasa de Calor Neta LHV', value: '10.9 MJ/kWh (10,300 BTU/kWh)' },
        { label: 'Temperatura de Escape', value: '280 °C (535°F)' },
        { label: 'Flujo de Gas de Escape', value: '4.0 kg/s (8.8 lbm/s)' },
        { label: 'Combustibles Compatibles', value: 'Gas Natural de Tubería, Biogás (Vertedero, Digestor), GLP, Gas Natural Crudo (Ácido, Gas Asociado)' },
      ],
      images: [
        '/images/C600S (2).png',
        '/images/C600S (4).png',
        '/images/C600S (6).png',
        '/images/C600S (8).png',
      ],
    },
    {
      model: 'C800S',
      capacity: '800 kW',
      efficiency: 'Hasta 33%',
      applications: ['Oil & Gas', 'Industrial Pesada', 'Procesamiento'],
      description: 'Solución de alta potencia para operaciones industriales de gran escala y procesos continuos.',
      keyFeatures: [
        'Máxima potencia en formato compacto',
        'Operación con gas de proceso',
        'Alta disponibilidad',
        'Recuperación de calor eficiente',
      ],
      technicalSpecs: [
        { label: 'Potencia', value: '800 kW' },
        { label: 'Eficiencia Eléctrica LHV', value: '33%' },
        { label: 'Eficiencia Combinada de Calor y Energía', value: 'Hasta 90%' },
        { label: 'Voltaje', value: '400-480 VAC' },
        { label: 'Frecuencia', value: '50/60 Hz' },
        { label: 'Servicio Eléctrico', value: '3 Fases, 4 Hilos Wye' },
        { label: 'Ancho', value: '3.0 m (117 in)' },
        { label: 'Profundidad', value: '7.5 m (295 in)' },
        { label: 'Altura', value: '3.03 m (119 in)' },
        { label: 'Peso', value: 'Conexión a Red – 15,200 kg (33,500 lbs); Modo Dual – 18,000 kg (39,700 lbs)' },
        { label: 'Tasa de Calor Neta LHV', value: '10.9 MJ/kWh (10,300 BTU/kWh)' },
        { label: 'Temperatura de Escape', value: '280 °C (535°F)' },
        { label: 'Flujo de Gas de Escape', value: '5.3 kg/s (11.7 lbm/s)' },
        { label: 'Combustibles Compatibles', value: 'Gas Natural de Tubería, Biogás (Vertedero, Digestor), GLP, Gas Natural Crudo (Ácido, Gas Asociado)' },
      ],
      images: [
        '/images/C800S (2).png',
        '/images/C800S (4).png',
        '/images/C800S (5).png',
        '/images/C800S (6).png',
      ],
    },
    {
      model: 'C1000S',
      capacity: '1 MW',
      efficiency: 'Hasta 33%',
      applications: ['Mega Industria', 'Utilities', 'Grandes Instalaciones'],
      description: 'La solución más potente de Capstone, diseñada para las aplicaciones industriales más demandantes.',
      keyFeatures: [
        'Máxima capacidad de generación',
        'Configuración modular escalable',
        'Eficiencia óptima en cogeneración',
        'Control avanzado y monitoreo remoto',
      ],
      technicalSpecs: [
        { label: 'Potencia', value: '1,000 kW' },
        { label: 'Eficiencia Eléctrica LHV', value: '33%' },
        { label: 'Eficiencia Combinada de Calor y Energía', value: 'Hasta 90%' },
        { label: 'Voltaje', value: '400-480 VAC' },
        { label: 'Frecuencia', value: '50/60 Hz' },
        { label: 'Servicio Eléctrico', value: '3 Fases, 4 Hilos Wye' },
        { label: 'Ancho', value: '3.0 m (117 in)' },
        { label: 'Profundidad', value: '9.1 m (360 in)' },
        { label: 'Altura', value: '3.03 m (119 in)' },
        { label: 'Peso', value: 'Conexión a Red – 17,100 kg (37,700 lbs); Modo Dual – 20,650 kg (45,500 lbs)' },
        { label: 'Tasa de Calor Neta LHV', value: '10.9 MJ/kWh (10,300 BTU/kWh)' },
        { label: 'Temperatura de Escape', value: '280 °C (535°F)' },
        { label: 'Flujo de Gas de Escape', value: '6.7 kg/s (14.7 lbm/s)' },
        { label: 'Combustibles Compatibles', value: 'Gas Natural de Tubería, Biogás (Vertedero, Digestor), GLP, Gas Natural Crudo (Ácido, Gas Asociado)' },
      ],
      images: [
        '/images/C1000S (2).png',
        '/images/C1000S (3).png',
        '/images/C1000S (5).png',
        '/images/C1000S (8).png',
      ],
    },
  ];

  const selectedProduct = products.find((p) => p.model === selectedModel) || products[0];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  // Reset image index when changing product
  const handleTabChange = (model: string) => {
    setSelectedModel(model);
    setCurrentImageIndex(0);
  };

  return (
    <section className={cn('py-16 md:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-4">
              Línea de Productos <span className="text-[#2D5F3F] font-semibold">Capstone</span>
            </h2>
            <p className="text-base md:text-lg text-sierra-text-secondary max-w-3xl mx-auto">
              Soluciones de microturbinas desde 65 kW hasta 1 MW para diversas aplicaciones industriales y comerciales
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-gray-200">
            {products.map((product) => (
              <button
                key={product.model}
                onClick={() => handleTabChange(product.model)}
                className={cn(
                  'px-6 py-4 font-semibold text-base transition-all duration-300 relative',
                  selectedModel === product.model
                    ? 'text-[#2D5F3F]'
                    : 'text-sierra-text-secondary hover:text-sierra-text-primary'
                )}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-lg font-bold">{product.model}</span>
                  <span className="text-xs opacity-90">
                    {selectedModel === product.model ? product.efficiency : product.capacity}
                  </span>
                </div>
                {/* Top border indicator */}
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-1 transition-all duration-300',
                    selectedModel === product.model ? 'bg-[#2D5F3F]' : 'bg-transparent'
                  )}
                />
              </button>
            ))}
          </div>

          {/* Product Details - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 py-8">
            {/* Left: Image Carousel */}
            <div className="relative">
              <div className="relative aspect-square">
                <Image
                  src={selectedProduct.images[currentImageIndex]}
                  alt={`${selectedProduct.model} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Carousel Controls - Bottom with Indicators */}
              {selectedProduct.images.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  {/* Previous Button */}
                  <button
                    onClick={handlePrevImage}
                    className="p-2 rounded-full bg-white border-2 border-gray-200 hover:border-[#2D5F3F] hover:bg-[#2D5F3F]/5 transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#2D5F3F]" />
                  </button>

                  {/* Carousel Indicators */}
                  <div className="flex gap-2">
                    {selectedProduct.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          'h-2 rounded-full transition-all duration-300',
                          currentImageIndex === index
                            ? 'w-8 bg-[#2D5F3F]'
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        )}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextImage}
                    className="p-2 rounded-full bg-white border-2 border-gray-200 hover:border-[#2D5F3F] hover:bg-[#2D5F3F]/5 transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-[#2D5F3F]" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Product Information */}
            <div className="space-y-6">
              {/* Model Title */}
              <div>
                <h3 className="text-4xl font-bold text-sierra-text-primary mb-2">
                  {selectedProduct.model}
                </h3>
                <p className="text-lg text-[#2D5F3F] font-semibold">
                  {selectedProduct.efficiency}
                </p>
              </div>

              {/* Description */}
              <p className="text-base text-sierra-text-secondary leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Applications */}
              <div>
                <h4 className="text-sm font-bold text-sierra-text-primary mb-3 uppercase tracking-wider">
                  Aplicaciones:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((app, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-[#2D5F3F]/10 text-sm font-medium text-[#2D5F3F] border border-[#2D5F3F]/20"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-sm font-bold text-sierra-text-primary mb-6 uppercase tracking-wider">
                  Especificaciones Técnicas
                </h4>
                <div className="space-y-4">
                  {selectedProduct.technicalSpecs.map((spec, index) => (
                    <div key={index} className="group">
                      <div className="text-xs font-bold text-sierra-text-primary mb-1">
                        {spec.label}:
                      </div>
                      <div className="text-sm text-sierra-text-secondary">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold text-sierra-text-primary mb-3 uppercase tracking-wider">
                  Características Clave:
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-sierra-text-secondary">
                      <span className="text-[#2D5F3F] font-bold mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
