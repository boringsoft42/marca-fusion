'use client';

import { cn } from '@/lib/utils';
import { Globe, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Marca Fusión Corporate Group Detail Section
 *
 * Features:
 * - World map visual representation
 * - USA-Bolivia connection arrows
 * - Clickable Altrix logo
 * - Corporate group explanation
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface CorporateGroupDetailProps {
  className?: string;
}

export function CorporateGroupDetail({ className }: CorporateGroupDetailProps) {
  const altrixUrl = process.env.NEXT_PUBLIC_ALTRIX_URL || 'https://altrixsolutionsllc.com/';

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-marca-steel-light border border-marca-steel/30">
              <Globe className="h-4 w-4 text-marca-steel" aria-hidden="true" />
              <span className="text-sm font-semibold text-marca-steel uppercase tracking-wider">
                Alcance Global
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1A1A1A] mb-4">
              Parte de un Grupo Corporativo Internacional
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestra alianza estratégica con Altrix Solutions LLC nos permite combinar experiencia local con capacidad operativa internacional.
            </p>
          </div>

          {/* World Map Visual */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-lg bg-background border border-border shadow-lg p-8 md:p-12">
              {/* Map background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                      linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                {/* USA - Altrix Solutions */}
                <div className="text-center">
                  <a
                    href={altrixUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <div className="p-6 rounded-lg bg-marca-steel-light border-2 border-marca-steel/30 hover:border-marca-steel transition-all duration-300 hover:shadow-lg">
                      {/* Altrix logo placeholder */}
                      <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-md bg-marca-steel text-white font-bold text-xl md:text-2xl mx-auto mb-4">
                        AS
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        Altrix Solutions LLC
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
                        <span className="text-lg">🇺🇸</span>
                        Estados Unidos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Operaciones Internacionales
                      </p>
                    </div>
                  </a>
                </div>

                {/* Animated Connection Line - Data Transfer Visual */}
                <div className="flex items-center justify-center relative">
                  <div className="relative w-full h-16 flex items-center">
                    {/* Base Line */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-[2px] bg-gradient-to-r from-marca-steel via-marca-green to-marca-green opacity-30" />
                    </div>

                    {/* Animated Light Bits - Going Right (USA -> Bolivia) */}
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-marca-green shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]"
                      initial={{ left: '0%', opacity: 0 }}
                      animate={{
                        left: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-marca-green shadow-[0_0_10px_2px_rgba(16,185,129,0.8)]"
                      initial={{ left: '0%', opacity: 0 }}
                      animate={{
                        left: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0.7,
                      }}
                    />

                    {/* Animated Light Bits - Going Left (Bolivia -> USA) */}
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-marca-steel shadow-[0_0_10px_2px_rgba(100,116,139,0.8)]"
                      initial={{ left: '100%', opacity: 0 }}
                      animate={{
                        left: ['100%', '0%'],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0.35,
                      }}
                    />
                    <motion.div
                      className="absolute h-3 w-3 rounded-full bg-marca-steel shadow-[0_0_10px_2px_rgba(100,116,139,0.8)]"
                      initial={{ left: '100%', opacity: 0 }}
                      animate={{
                        left: ['100%', '0%'],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 1.05,
                      }}
                    />

                    {/* Center Icon - Data Transfer */}
                    <div className="relative flex justify-center w-full">
                      <motion.div
                        className="px-4 py-2 bg-background rounded-full border border-border shadow-md"
                        animate={{
                          boxShadow: [
                            '0 2px 8px rgba(0,0,0,0.1)',
                            '0 2px 12px rgba(16,185,129,0.3)',
                            '0 2px 8px rgba(0,0,0,0.1)',
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Building2 className="h-5 w-5 text-marca-green" aria-hidden="true" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bolivia - Marca Fusión */}
                <div className="text-center">
                  <div className="p-6 rounded-lg bg-marca-green-light border-2 border-marca-green/30">
                    {/* Marca Fusión logo */}
                    <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-md bg-marca-green text-white font-bold text-xl md:text-2xl mx-auto mb-4">
                      MF
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      Marca Fusión SRL
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-1">
                      <span className="text-lg">🇧🇴</span>
                      Bolivia
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Representaciones Locales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
