'use client';

import { cn } from '@/lib/utils';
import { Building2, Users, Palette, Package, Trophy, Handshake } from 'lucide-react';

/**
 * Tablú Corporate Section
 *
 * Features:
 * - Corporate customization description
 * - Benefits for businesses
 * - Feature cards
 * - Gray/beige professional background
 * - CTA for corporate inquiries
 * - Follows STYLE-GUIDE.md design patterns
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
    <section id="corporativo" className={cn('py-16 md:py-24 bg-gradient-to-br from-muted/40 via-muted/20 to-marca-beige/10', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marca-steel/10 border border-marca-steel/20 mb-4">
              <Building2 className="h-5 w-5 text-marca-steel" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-steel">Soluciones Corporativas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planificadores Personalizados para tu Empresa
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Potencia la productividad de tu equipo con herramientas visuales de planificación diseñadas
              específicamente para tu organización. Logo, colores y diseños 100% personalizados.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {corporateFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-background border border-border hover:border-marca-steel/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="inline-flex mb-4">
                  <div className="p-4 rounded-full bg-marca-steel/10 group-hover:bg-marca-steel transition-colors duration-300">
                    <feature.icon
                      className="h-7 w-7 text-marca-steel group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Use Cases Section */}
          <div className="mb-12 p-8 md:p-10 rounded-lg bg-background border border-border shadow-md">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Casos de Uso Corporativos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-marca-green/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-marca-green">✓</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-foreground">{useCase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nuestro Proceso Corporativo
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Consulta', description: 'Conversamos sobre tus necesidades y objetivos' },
                { step: '2', title: 'Diseño', description: 'Creamos mockups con tu identidad corporativa' },
                { step: '3', title: 'Producción', description: 'Fabricamos con materiales premium' },
                { step: '4', title: 'Entrega', description: 'Entregamos e instalamos en tu oficina' },
              ].map((process, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-marca-steel text-white text-2xl font-bold mb-4 shadow-lg">
                    {process.step}
                  </div>
                  {/* Arrow (hidden on last item on desktop) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-marca-steel/30" />
                  )}
                  {/* Title and Description */}
                  <h4 className="text-lg font-bold text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 md:p-12 rounded-lg bg-gradient-to-br from-marca-steel to-marca-steel/80 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para Transformar tu Espacio de Trabajo?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Solicita una cotización sin compromiso. Nuestro equipo te contactará para entender tus
              necesidades y ofrecerte la mejor solución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/59167710595?text=Hola!%20Necesito%20una%20cotización%20para%20soluciones%20corporativas%20Tablú"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-white text-marca-steel shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/95 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-steel'
                )}
              >
                <Building2 className="h-5 w-5" aria-hidden="true" />
                Solicitar Cotización Corporativa
              </a>
              <a
                href="/contacto"
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-base font-semibold',
                  'bg-white/10 text-white border-2 border-white/30 backdrop-blur-sm shadow-lg',
                  'transition-all duration-200',
                  'hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:scale-105',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2'
                )}
              >
                Formulario de Contacto
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Empresas que confían en Tablú:</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-lg font-semibold text-muted-foreground">
                [Logo Empresa 1]
              </div>
              <div className="text-lg font-semibold text-muted-foreground">
                [Logo Empresa 2]
              </div>
              <div className="text-lg font-semibold text-muted-foreground">
                [Logo Empresa 3]
              </div>
              <div className="text-lg font-semibold text-muted-foreground">
                [Logo Empresa 4]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
