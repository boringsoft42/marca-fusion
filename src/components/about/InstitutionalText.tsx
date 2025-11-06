'use client';

import { cn } from '@/lib/utils';
import { Lightbulb, Target, Heart } from 'lucide-react';

/**
 * Marca Fusión Institutional Text Section
 *
 * Features:
 * - Company origin story
 * - Belief statements
 * - Three-column layout with icons
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface InstitutionalTextProps {
  className?: string;
}

export function InstitutionalText({ className }: InstitutionalTextProps) {
  const beliefs = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Creemos en el poder transformador de la tecnología y la innovación para impulsar el desarrollo sostenible.',
    },
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Nos comprometemos a ofrecer soluciones de clase mundial con los más altos estándares de calidad.',
    },
    {
      icon: Heart,
      title: 'Compromiso Local',
      description: 'Arraigados en Bolivia, trabajamos para fortalecer la industria nacional con alcance global.',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        {/* Origin Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nuestra Historia
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Marca Fusión SRL nace con la visión de transformar el panorama empresarial boliviano, conectando industrias locales con tecnologías innovadoras de clase mundial. Nuestra historia comienza con el reconocimiento de una oportunidad única: servir como puente entre Bolivia y marcas internacionales líderes en sus respectivos sectores.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6">
              Como representantes exclusivos de <span className="font-semibold text-marca-green">Capstone Green Energy</span> y <span className="font-semibold text-marca-beige">Tablú</span>, nos posicionamos en la intersección entre la sostenibilidad energética y la organización profesional, dos pilares fundamentales para el desarrollo empresarial moderno.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Formamos parte de un grupo corporativo internacional que nos permite combinar experiencia local con alcance global, garantizando el soporte técnico, logístico y comercial que nuestros clientes necesitan para tener éxito.
            </p>
          </div>
        </div>

        {/* Belief Statements */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              En Qué Creemos
            </h3>
            <div className="w-20 h-1 bg-marca-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-lg bg-muted/30 border border-border hover:border-marca-green/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="inline-flex mb-4">
                  <div className="p-4 rounded-full bg-marca-green-light group-hover:bg-marca-green transition-colors duration-300">
                    <belief.icon
                      className="h-8 w-8 text-marca-green group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {belief.title}
                </h4>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
