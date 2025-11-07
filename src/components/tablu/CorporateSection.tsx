'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Building2, Users, Palette, Package, Trophy, Handshake } from 'lucide-react';
import Image from 'next/image';

/**
 * Tablú Corporate Section
 *
 * Features:
 * - Corporate customization description
 * - Benefits for businesses
 * - Feature cards
 * - Professional Unsplash image
 * - CTA for corporate inquiries
 * - Follows Sierra style guide
 */

interface CorporateSectionProps {
  className?: string;
}

export function CorporateSection({ className }: CorporateSectionProps) {
  const corporateFeatures = [
    {
      icon: Palette,
      title: 'Diseños Personalizados',
      description: 'Creamos planificadores únicos con tu identidad corporativa, colores y logo de marca.',
    },
    {
      icon: Package,
      title: 'Pedidos al Por Mayor',
      description: 'Precios especiales para compras corporativas y pedidos de gran volumen.',
    },
    {
      icon: Users,
      title: 'Soluciones para Equipos',
      description: 'Tableros de coordinación, OKRs, sprints y gestión de proyectos colaborativos.',
    },
    {
      icon: Trophy,
      title: 'Calidad Premium',
      description: 'Materiales de primera calidad con acabados profesionales y durabilidad garantizada.',
    },
    {
      icon: Handshake,
      title: 'Asesoría Personalizada',
      description: 'Te ayudamos a diseñar la solución perfecta para tu empresa u organización.',
    },
    {
      icon: Building2,
      title: 'Entrega Corporativa',
      description: 'Logística especializada para entregas corporativas a oficinas y sucursales.',
    },
  ];

  const useCases = [
    'Tableros de planificación para salas de reuniones',
    'Sistemas de gestión visual (Kanban, Scrum, OKRs)',
    'Planificadores personalizados para equipos',
    'Calendarios corporativos con identidad de marca',
    'Regalos empresariales personalizados para clientes',
    'Herramientas de productividad para empleados',
  ];

  return (
    <section id="corporativo" className={cn('py-16 md:py-20 lg:py-24 bg-white', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative h-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80"
              alt="Professional corporate office environment"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d6832]/10 mb-4">
              <Building2 className="h-5 w-5 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[15px] font-medium text-[#0d6832]">Soluciones Corporativas</span>
            </div>
            <h2 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              Planificadores Personalizados para tu Empresa
            </h2>
            <p className="text-[15px] text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
              Potencia la productividad de tu equipo con herramientas visuales de planificación diseñadas
              específicamente para tu organización. Logo, colores y diseños 100% personalizados.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {corporateFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white border border-[#e0e0e0] hover:border-[#0d6832]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                {/* Icon */}
                <div className="inline-flex mb-4">
                  <div className="p-4 rounded-full bg-[#0d6832]/10 group-hover:bg-[#0d6832] transition-colors duration-300">
                    <feature.icon
                      className="h-7 w-7 text-[#0d6832] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-[15px] text-[#6b6b6b] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Use Cases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 p-8 md:p-10 rounded-2xl bg-[#ebe8e3] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-[48px] font-normal text-[#1a1a1a] mb-6 text-center">
              Casos de Uso Corporativos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#0d6832]/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#0d6832]">✓</span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#1a1a1a]">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-[48px] font-normal text-[#1a1a1a] mb-8 text-center">
              Nuestro Proceso Corporativo
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Consulta', description: 'Conversamos sobre tus necesidades y objetivos' },
                { step: '2', title: 'Diseño', description: 'Creamos mockups con tu identidad corporativa' },
                { step: '3', title: 'Producción', description: 'Fabricamos con materiales premium' },
                { step: '4', title: 'Entrega', description: 'Entregamos e instalamos en tu oficina' },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0d6832] text-white text-2xl font-medium mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    {process.step}
                  </div>
                  {/* Arrow (hidden on last item on desktop) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#e0e0e0]" />
                  )}
                  {/* Title and Description */}
                  <h4 className="text-xl font-medium text-[#1a1a1a] mb-2">{process.title}</h4>
                  <p className="text-[15px] text-[#6b6b6b]">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center p-10 md:p-12 rounded-2xl bg-[#ebe8e3] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <h3 className="text-[48px] font-normal text-[#1a1a1a] mb-4">
              ¿Listo para Transformar tu Espacio de Trabajo?
            </h3>
            <p className="text-[15px] text-[#6b6b6b] mb-6 max-w-2xl mx-auto leading-relaxed">
              Solicita una cotización sin compromiso. Nuestro equipo te contactará para entender tus
              necesidades y ofrecerte la mejor solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59167710595?text=Hola!%20Necesito%20una%20cotización%20para%20soluciones%20corporativas%20Tablú"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#0a5528]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                )}
              >
                <Building2 className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                Solicitar Cotización Corporativa
              </a>
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium',
                  'bg-white text-[#1a1a1a] border border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
                  'transition-all duration-200',
                  'hover:bg-[#0d6832] hover:text-white hover:border-[#0d6832]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
                )}
              >
                Formulario de Contacto
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-[15px] text-[#6b6b6b] mb-4">Empresas que confían en Tablú:</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-lg font-medium text-[#6b6b6b]">
                [Logo Empresa 1]
              </div>
              <div className="text-lg font-medium text-[#6b6b6b]">
                [Logo Empresa 2]
              </div>
              <div className="text-lg font-medium text-[#6b6b6b]">
                [Logo Empresa 3]
              </div>
              <div className="text-lg font-medium text-[#6b6b6b]">
                [Logo Empresa 4]
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
