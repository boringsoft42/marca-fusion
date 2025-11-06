import { BlurFade } from '@/components/magicui/blur-fade';
import { CapstoneHero } from '@/components/capstone/CapstoneHero';
import { MicroturbineExplanation } from '@/components/capstone/MicroturbineExplanation';
import { ProductGrid } from '@/components/capstone/ProductGrid';
import { ComparisonTable } from '@/components/capstone/ComparisonTable';
import { ServicesSection } from '@/components/capstone/ServicesSection';
import { ImpactCounters } from '@/components/capstone/ImpactCounters';
import { BenefitsSection } from '@/components/capstone/BenefitsSection';
import { CapstoneCTA } from '@/components/capstone/CapstoneCTA';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión Capstone Green Energy Page
 *
 * Showcases:
 * - Microturbine technology and benefits
 * - Product lineup (C65, C200S, C600S, C800S, C1000S)
 * - Services and support
 * - Impact statistics
 * - Benefits and call-to-action
 */

export const metadata = metadataUtils.capstone();

export default function CapstonePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <CapstoneHero />

      {/* Technology Explanation - Animated */}
      <BlurFade delay={0.2} inView>
        <MicroturbineExplanation />
      </BlurFade>

      {/* Product Grid - Animated */}
      <BlurFade delay={0.4} inView>
        <ProductGrid />
      </BlurFade>

      {/* Comparison Table - Animated */}
      <BlurFade delay={0.6} inView>
        <ComparisonTable />
      </BlurFade>

      {/* Services Section - Animated */}
      <BlurFade delay={0.8} inView>
        <ServicesSection />
      </BlurFade>

      {/* Impact Counters - Animated */}
      <BlurFade delay={1.0} inView>
        <ImpactCounters />
      </BlurFade>

      {/* Benefits Section - Animated */}
      <BlurFade delay={1.2} inView>
        <BenefitsSection />
      </BlurFade>

      {/* Final CTA - Animated */}
      <BlurFade delay={1.4} inView>
        <CapstoneCTA />
      </BlurFade>
    </div>
  );
}
