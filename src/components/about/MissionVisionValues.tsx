'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck, Lightbulb, Eye, Repeat, Award, Target, Rocket } from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

/**
 * Marca Fusión Mission, Vision & Values Section - Bento Grid Dark Theme
 *
 * Features:
 * - Bento Grid layout with Mission, Vision, and Values
 * - Dark background (#1a1a1a)
 * - Condensed, impactful content
 * - Responsive grid with varying card sizes
 * - Follows dark theme pattern from Footer and CorporateGroupSection
 */

interface MissionVisionValuesProps {
  className?: string;
}

export function MissionVisionValues({ className }: MissionVisionValuesProps) {
  const features = [
    {
      Icon: Target,
      name: 'Misión',
      description: 'Conectar Bolivia con tecnologías innovadoras que impulsen desarrollo sostenible y competitividad.',
      href: '#mision',
      cta: 'Conocer más',
      className: 'col-span-3 lg:col-span-1',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-marca-green/20 to-marca-green/5" />
      ),
    },
    {
      Icon: Rocket,
      name: 'Visión',
      description: 'Ser el referente en Bolivia como representantes de marcas internacionales, reconocidos por excelencia e innovación.',
      href: '#vision',
      cta: 'Ver más',
      className: 'col-span-3 lg:col-span-2',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-marca-steel-500/20 to-marca-steel-500/5" />
      ),
    },
    {
      Icon: ShieldCheck,
      name: 'Confianza',
      description: 'Relaciones duraderas basadas en transparencia e integridad.',
      href: '#valores',
      cta: 'Leer',
      className: 'col-span-3 lg:col-span-1',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-marca-green/10 to-transparent" />
      ),
    },
    {
      Icon: Lightbulb,
      name: 'Innovación',
      description: 'Nuevas soluciones y tecnologías que generan valor real.',
      href: '#valores',
      cta: 'Leer',
      className: 'col-span-3 lg:col-span-1',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent" />
      ),
    },
    {
      Icon: Eye,
      name: 'Transparencia',
      description: 'Honestidad y claridad en todas nuestras operaciones.',
      href: '#valores',
      cta: 'Leer',
      className: 'col-span-3 lg:col-span-1',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
      ),
    },
    {
      Icon: Repeat,
      name: 'Adaptabilidad',
      description: 'Ajuste ágil a necesidades cambiantes del mercado.',
      href: '#valores',
      cta: 'Leer',
      className: 'col-span-3 md:col-span-3 lg:col-span-1',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
      ),
    },
    {
      Icon: Award,
      name: 'Compromiso',
      description: 'Dedicación al éxito de clientes y desarrollo de Bolivia.',
      href: '#valores',
      cta: 'Leer',
      className: 'col-span-3 md:col-span-3 lg:col-span-2',
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-marca-green/10 to-transparent" />
      ),
    },
  ];

  return (
    <section className={cn('py-12 md:py-16 lg:py-20 bg-[#1a1a1a]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-white mb-3">
            Misión, Visión y Valores
          </h2>
          <p className="text-sm md:text-[15px] text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed">
            Los fundamentos que guían nuestras acciones y decisiones cada día
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
