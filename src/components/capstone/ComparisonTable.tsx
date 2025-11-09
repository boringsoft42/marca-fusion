'use client';

import { cn } from '@/lib/utils';

/**
 * Capstone Comparison Table
 *
 * Features:
 * - Side-by-side model comparison
 * - Responsive table design
 * - Key specifications display
 * - Horizontal scroll on mobile
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ComparisonTableProps {
  className?: string;
}

export function ComparisonTable({ className }: ComparisonTableProps) {
  const models = [
    {
      model: 'C65',
      capacity: '65 kW',
      efficiency: '28%',
      applications: 'Comercial, Pequeña Industria',
      fuel: 'Gas Natural, Propano',
      emissions: 'Ultra Bajas',
    },
    {
      model: 'C200S',
      capacity: '200 kW',
      efficiency: '33%',
      applications: 'Industrial, Cogeneración',
      fuel: 'Gas Natural, Biogás',
      emissions: 'Ultra Bajas',
    },
    {
      model: 'C600S',
      capacity: '600 kW',
      efficiency: '33%',
      applications: 'Gran Industria, Oil & Gas',
      fuel: 'Gas Natural, Gas de Proceso',
      emissions: 'Ultra Bajas',
    },
    {
      model: 'C800S',
      capacity: '800 kW',
      efficiency: '33%',
      applications: 'Industrial Pesada, Procesamiento',
      fuel: 'Gas Natural, Gases Múltiples',
      emissions: 'Ultra Bajas',
    },
    {
      model: 'C1000S',
      capacity: '1 MW',
      efficiency: '33%',
      applications: 'Mega Industria, Utilities',
      fuel: 'Gas Natural, Configuración Flexible',
      emissions: 'Ultra Bajas',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-background', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-sierra-text-primary mb-6">
              Comparación de Modelos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Encuentra el modelo ideal para tu aplicación
            </p>
          </div>

          {/* Table Container - Horizontal Scroll on Mobile */}
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-lg border border-border shadow-lg">
                <table className="min-w-full divide-y divide-border">
                  {/* Table Header */}
                  <thead className="bg-muted">
                    <tr>
                      <th
                        scope="col"
                        className="sticky left-0 z-10 bg-muted px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Modelo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Capacidad
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Eficiencia
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Aplicaciones Principales
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Combustible
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wider"
                      >
                        Emisiones
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="bg-background divide-y divide-border">
                    {models.map((model, index) => (
                      <tr
                        key={index}
                        className="hover:bg-muted/30 transition-colors duration-150"
                      >
                        <td className="sticky left-0 z-10 bg-background hover:bg-muted/30 transition-colors duration-150 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-marca-green" />
                            <span className="text-base font-bold text-foreground">
                              {model.model}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-semibold text-marca-green">
                            {model.capacity}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-foreground">
                            {model.efficiency}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-muted-foreground">
                            {model.applications}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-muted-foreground">
                            {model.fuel}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-3 py-1 rounded-full bg-marca-green-light text-xs font-semibold text-marca-green">
                            {model.emissions}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              * Especificaciones técnicas detalladas disponibles bajo solicitud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
