'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Zap, TrendingUp, Leaf } from 'lucide-react';

/**
 * Capstone Impact Counters
 *
 * Features:
 * - Animated counter components
 * - Impact statistics (71+ installations, 3.5+ MW, 0 emissions baseline)
 * - Trigger animation on scroll into view
 * - Responsive design
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ImpactCountersProps {
  className?: string;
}

export function ImpactCounters({ className }: ImpactCountersProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Zap,
      value: 71,
      suffix: '+',
      label: 'Microturbinas Instaladas',
      description: 'En Bolivia desde 2010',
      color: 'marca-green',
    },
    {
      icon: TrendingUp,
      value: 3.5,
      suffix: '+ MW',
      label: 'Capacidad Total',
      description: 'De generación distribuida',
      color: 'marca-steel',
    },
    {
      icon: Leaf,
      value: 0,
      suffix: '',
      label: 'Emisiones Ultra Bajas',
      description: 'Tecnología limpia certificada',
      color: 'marca-green',
    },
  ];

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(value * percentage * 10) / 10);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, value, duration]);

    return <>{count}</>;
  };

  return (
    <section ref={sectionRef} className={cn('py-16 md:py-24 bg-marca-green text-white', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Impacto en Bolivia
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Resultados comprobados en generación de energía limpia y sostenible
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex mb-6">
                  <div className="p-4 rounded-full bg-white/20">
                    <stat.icon className="h-10 w-10 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mb-3">
                  <div className="text-5xl md:text-6xl font-bold text-white">
                    {isVisible ? (
                      <>
                        <AnimatedCounter value={stat.value} />
                        {stat.suffix}
                      </>
                    ) : (
                      <>0{stat.suffix}</>
                    )}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-white/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Context */}
          <div className="mt-12 text-center">
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Desde 2010, Marca Fusión ha liderado la implementación de tecnología Capstone en Bolivia,
              contribuyendo significativamente a la generación de energía limpia y eficiente en diversos sectores industriales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
