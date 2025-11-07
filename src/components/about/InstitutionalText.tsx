'use client';

import { cn } from '@/lib/utils';
import { Lightbulb, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Marca Fusión Institutional Text Section - Sierra Style with Animations
 *
 * Features:
 * - Sierra white background with professional business image
 * - Company origin story with animations
 * - Belief statements with animated cards
 * - Follows STYLE-GUIDE-SIERRA.md
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
    <section className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Origin Story with Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
                Nuestra Historia
              </h2>

              <div className="space-y-6 text-[15px] md:text-base text-sierra-text-secondary leading-relaxed">
                <p>
                  Marca Fusión SRL nace con la visión de transformar el panorama empresarial boliviano, conectando industrias locales con tecnologías innovadoras de clase mundial. Nuestra historia comienza con el reconocimiento de una oportunidad única: servir como puente entre Bolivia y marcas internacionales líderes en sus respectivos sectores.
                </p>

                <p>
                  Como representantes exclusivos de <span className="font-medium text-sierra-green">Capstone Green Energy</span> y <span className="font-medium text-marca-beige-500">Tablú</span>, nos posicionamos en la intersección entre la sostenibilidad energética y la organización profesional, dos pilares fundamentales para el desarrollo empresarial moderno.
                </p>

                <p>
                  Formamos parte de un grupo corporativo internacional que nos permite combinar experiencia local con alcance global, garantizando el soporte técnico, logístico y comercial que nuestros clientes necesitan para tener éxito.
                </p>
              </div>
            </motion.div>

            {/* Professional Business Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Professional business workspace"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Belief Statements */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-medium text-sierra-text-primary mb-4">
              En Qué Creemos
            </h3>
            <div className="w-20 h-1 bg-sierra-green mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center p-10 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="inline-flex mb-6">
                  <div className="p-4 rounded-2xl bg-sierra-green/10">
                    <belief.icon
                      className="h-8 w-8 text-sierra-green"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-medium text-sierra-text-primary mb-3">
                  {belief.title}
                </h4>

                {/* Description */}
                <p className="text-[15px] text-sierra-text-secondary leading-relaxed">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
