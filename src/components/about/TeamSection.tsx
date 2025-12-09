'use client';

import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';

/**
 * Marca Fusión Team Section
 *
 * Features:
 * - Team photo display
 * - Caption with team description
 * - Professional presentation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-marca-green-light border border-marca-green/30">
              <Users className="h-4 w-4 text-marca-green" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-green uppercase tracking-wider">
                Nuestro Equipo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1A1A1A] mb-4">
              El Talento Detrás de Marca Fusión
            </h2>
          </div>

          {/* Team Photo and Description - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Left: Team Photo - Square */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border">
              <div className="relative aspect-square">
                <img
                  src="/images/Equipo Marca Fusión.jpg"
                  alt="Equipo Marca Fusión"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Team Description Text */}
            <div className="space-y-6">
              <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                En Marca Fusión creemos que las marcas no se representan solo con contratos, sino con personas que comparten una misma visión de crecimiento y excelencia.
              </p>
              <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                Nuestro equipo directivo y operativo combina experiencia en gestión de negocios internacionales, conocimiento del mercado boliviano, y un profundo sentido de responsabilidad profesional.
              </p>
              <p className="text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                Cada proyecto es una oportunidad para demostrar que la confianza se construye con resultados.
              </p>
            </div>
          </div>

          {/* Team Metrics - Minimalist Design */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {/* Metric 1 */}
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gray-100">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1a1a1a]">10+</div>
              <p className="text-sm text-sierra-text-secondary">Años de Experiencia</p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gray-100">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1a1a1a]">100%</div>
              <p className="text-sm text-sierra-text-secondary">Compromiso con el Cliente</p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-gray-100">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1a1a1a]">24/7</div>
              <p className="text-sm text-sierra-text-secondary">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
