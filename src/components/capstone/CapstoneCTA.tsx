'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

/**
 * Capstone Impact Counters Section
 *
 * Features:
 * - Animated counters that count up on scroll
 * - Impact statistics for Bolivia
 * - Dark card design
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
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
  const count2 = useCountUp(3.5, 2000, isVisible);

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
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Card - Dark Background */}
          <div className="p-8 md:p-12 rounded-2xl bg-[#1a1a1a] shadow-2xl">
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white leading-tight">
                La tecnología <span className="text-[#2D5F3F] font-semibold">Capstone</span> está presente en Bolivia impulsando la eficiencia energética
              </h2>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Counter 1 - Microturbinas */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-3">
                  +{count1}
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  Microturbinas instaladas en Bolivia
                </p>
              </div>

              {/* Counter 2 - Capacidad */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-3">
                  +{count2.toFixed(1)} MW
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  De capacidad instalada
                </p>
              </div>

              {/* Counter 3 - Energía Limpia */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#2D5F3F] mb-3">
                  100%
                </div>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  Energía limpia
                </p>
                <p className="text-xs md:text-sm text-white/70 mt-1">
                  0 lubricantes, 0 refrigerantes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
