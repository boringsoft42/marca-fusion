'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Capstone Impact Counters Section - Bar Style
 *
 * Features:
 * - Visual style matching reference image (black bar with dividers)
 * - Animated counters
 * - Clean typography with white text
 * - Vertical dividers
 */

interface CapstoneCTAProps {
  className?: string;
}

// Hook para animar números
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
}

export function CapstoneCTA({ className }: CapstoneCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const count1 = useCountUp(71, 2000, isVisible);
  // Para decimales manejamos la animación manualmente o simplificamos a entero en el hook y luego formateamos
  // Aquí el hook retorna entero, para 3.5 podemos animar hasta 35 y dividir por 10
  const count2Raw = useCountUp(35, 2000, isVisible);
  const count2 = (count2Raw / 10).toFixed(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={cn('py-16 md:py-24 bg-[#F5F5F0]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Optional Title outside the metric bar */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-normal text-[#1a1a1a] leading-tight max-w-4xl mx-auto">
              La tecnología <span className="text-[#2D5F3F] font-semibold">Capstone</span> está presente en Bolivia impulsando la eficiencia energética.
            </h2>
          </div>

          {/* Metrics Bar - Black Background with Dividers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-black text-white rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Metric 1 */}
              <div className="p-8 md:py-16 md:px-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  {count1}+
                </div>
                <p className="text-sm md:text-base text-white/70 max-w-[200px] leading-relaxed">
                  Microturbinas instaladas operando en Bolivia
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-8 md:py-16 md:px-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  {count2} <span className="text-xl md:text-2xl">MW</span>
                </div>
                <p className="text-sm md:text-base text-white/70 max-w-[200px] leading-relaxed">
                  De capacidad instalada y generación continua
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-8 md:py-16 md:px-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors duration-300">
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  100%
                </div>
                <p className="text-sm md:text-base text-white/70 max-w-[200px] leading-relaxed mb-1">
                  Energía limpia y eficiente
                </p>
                <p className="text-xs text-white/40 uppercase tracking-widest font-medium">
                  0 lubricantes • 0 refrigerantes
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
