'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { SierraWaveform } from './SierraWaveform';
import { SierraFeatureList } from './SierraFeatureList';

/**
 * Sierra Hero Section Component
 *
 * Pixel-perfect implementation of Sierra speaks design following STYLE-GUIDE-SIERRA.md:
 * - Beige/cream background (#ebe8e3)
 * - 48px hero title with font-weight 400
 * - Green CTA button (#0d6832) with rounded-3xl (24px)
 * - White card with 16px border radius and subtle shadow
 * - Two-column grid layout (waveform + features)
 * - Responsive: single column on tablet/mobile
 * - All text colors meet WCAG AA contrast requirements
 */

interface SierraHeroSectionProps {
  className?: string;
}

export function SierraHeroSection({ className }: SierraHeroSectionProps) {
  return (
    <section
      className={cn('bg-sierra-cream', className)}
    >
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Header: Title + Button */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-normal text-sierra-text-primary mb-3 leading-tight">
              Sierra speaks
            </h1>
            <p className="text-base text-sierra-text-secondary">
              Introducing voice, a new way to communicate with your customers.
            </p>
          </div>

          <Link
            href="/contacto"
            className={cn(
              'inline-flex items-center justify-center gap-2',
              'bg-[#0D6832] text-white',
              'px-6 py-3',
              'rounded-sm',
              'text-sm font-semibold uppercase tracking-wide',
              'transition-colors duration-200',
              'hover:bg-[#0a5528]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2',
              'self-start md:self-auto'
            )}
          >
            Learn more
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        {/* Main Card */}
        <div
          className={cn(
            'bg-white rounded-2xl',
            'shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
            'p-10 md:p-16 lg:p-20'
          )}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Waveform Visualization */}
            <div className="flex items-center justify-center">
              <SierraWaveform />
            </div>

            {/* Right: Features List */}
            <div className="flex items-center">
              <SierraFeatureList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
