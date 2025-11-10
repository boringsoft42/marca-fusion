import { BlurFade } from '@/components/magicui/blur-fade';
import { PartnershipsHero } from '@/components/partnerships/PartnershipsHero';
import { WhyChooseUs } from '@/components/partnerships/WhyChooseUs';
import { WhatWeSeek } from '@/components/partnerships/WhatWeSeek';
import { AltrixCollaboration } from '@/components/partnerships/AltrixCollaboration';
import { ClosingQuote } from '@/components/partnerships/ClosingQuote';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión Alianzas (Partnerships) Page
 *
 * Showcases:
 * - Partnership opportunities
 * - Why choose us (5 trust points)
 * - What we seek in alliances
 * - Brand representations (Capstone, Tablú)
 * - Altrix Solutions international operations
 * - Inspirational closing quote with CTA
 */

export const metadata = metadataUtils.partnerships();

export default function AlianzasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <PartnershipsHero />

      {/* Why Choose Us - Animated */}
      <BlurFade delay={0.2} inView>
        <WhyChooseUs />
      </BlurFade>

      {/* What We Seek - Animated */}
      <BlurFade delay={0.4} inView>
        <WhatWeSeek />
      </BlurFade>

      {/* Altrix Collaboration - Animated */}
      <BlurFade delay={0.6} inView>
        <AltrixCollaboration />
      </BlurFade>

      {/* Closing Quote - Animated */}
      <BlurFade delay={0.8} inView>
        <ClosingQuote />
      </BlurFade>
    </div>
  );
}
