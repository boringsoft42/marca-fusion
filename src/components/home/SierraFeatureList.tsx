'use client';

import { cn } from '@/lib/utils';
import { Headphones, Globe, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Sierra Feature List Component
 *
 * Displays three features with icons following Sierra design system:
 * - Icons with text alignment
 * - 48px gap between features
 * - 12px gap between icon and title
 * - 32px left padding for descriptions (aligned with title)
 * - Typography: 18px/500 for titles, 15px/400 for descriptions
 * - Colors: #1a1a1a for titles, #6b6b6b for descriptions
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SierraFeatureListProps {
  className?: string;
}

export function SierraFeatureList({ className }: SierraFeatureListProps) {
  const features: Feature[] = [
    {
      icon: <Headphones className="h-5 w-5" strokeWidth={1.5} />,
      title: 'Engage with faster, better phone calls',
      description:
        'Your agent delivers delightful and personalized conversations. Always available, endlessly patient, and able to reason, predict, and act in real-time.',
    },
    {
      icon: <Globe className="h-5 w-5" strokeWidth={1.5} />,
      title: 'Connect to your call center ecosystem',
      description:
        'Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />,
      title: 'Scale consistent experiences on every channel',
      description:
        'Use Agent OS to build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes.',
    },
  ];

  return (
    <div className={cn('flex flex-col gap-12', className)}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="flex flex-col gap-3"
        >
          {/* Icon + Title Row */}
          <div className="flex items-center gap-3">
            <span className="text-sierra-text-primary flex-shrink-0">
              {feature.icon}
            </span>
            <h3 className="text-lg font-medium text-sierra-text-primary">
              {feature.title}
            </h3>
          </div>

          {/* Description with left padding to align with title */}
          <p className="text-[15px] leading-relaxed text-sierra-text-secondary pl-8">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
