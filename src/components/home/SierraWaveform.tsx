'use client';

import { cn } from '@/lib/utils';

/**
 * Sierra Waveform Visualization Component
 *
 * Animated waveform display following Sierra design system specifications:
 * - 12px width bars and dots
 * - #e0e0e0 color (sierra-gray-light)
 * - 8px gap between elements
 * - Staggered animation with varying heights
 * - 1.2s animation cycle with ease-in-out
 * - Mix of bars (rounded rectangles) and dots (circles)
 */

interface SierraWaveformProps {
  className?: string;
}

export function SierraWaveform({ className }: SierraWaveformProps) {
  // Define the pattern: true = bar, false = dot
  // Heights for bars (as percentage of container)
  const elements = [
    { type: 'bar', height: 35, delay: 0 },
    { type: 'bar', height: 55, delay: 0.1 },
    { type: 'bar', height: 85, delay: 0.2 },
    { type: 'dot', height: 12, delay: 0 },
    { type: 'bar', height: 45, delay: 0.3 },
    { type: 'bar', height: 95, delay: 0.4 },
    { type: 'dot', height: 12, delay: 0 },
    { type: 'bar', height: 65, delay: 0.5 },
    { type: 'bar', height: 35, delay: 0.6 },
    { type: 'bar', height: 75, delay: 0.7 },
    { type: 'dot', height: 12, delay: 0 },
    { type: 'bar', height: 55, delay: 0.8 },
    { type: 'bar', height: 45, delay: 0.9 },
    { type: 'dot', height: 12, delay: 0 },
    { type: 'bar', height: 85, delay: 1.0 },
    { type: 'dot', height: 12, delay: 0 },
    { type: 'bar', height: 65, delay: 1.1 },
    { type: 'bar', height: 55, delay: 1.15 },
    { type: 'dot', height: 12, delay: 0 },
  ];

  return (
    <div
      className={cn(
        'flex items-center justify-center p-10',
        className
      )}
    >
      <div className="flex items-center justify-center gap-2 h-[200px]">
        {elements.map((element, index) => (
          element.type === 'bar' ? (
            <div
              key={index}
              className={cn(
                'w-3 bg-sierra-gray-light rounded-md transition-all duration-300',
                'animate-wave'
              )}
              style={{
                height: `${element.height}%`,
                animationDelay: `${element.delay}s`,
              }}
            />
          ) : (
            <div
              key={index}
              className="w-3 h-3 bg-sierra-gray-light rounded-full flex-shrink-0"
            />
          )
        ))}
      </div>
    </div>
  );
}
