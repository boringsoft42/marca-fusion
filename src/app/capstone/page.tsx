import { BlurFade } from '@/components/magicui/blur-fade';
import { CapstoneHero } from '@/components/capstone/CapstoneHero';
import { MicroturbineExplanation } from '@/components/capstone/MicroturbineExplanation';
import { ProductGrid } from '@/components/capstone/ProductGrid';
import { ComparisonTable } from '@/components/capstone/ComparisonTable';
import { BenefitsSection } from '@/components/capstone/BenefitsSection';
import { CapstoneCTA } from '@/components/capstone/CapstoneCTA';
import { CorporateGroupSection } from '@/components/home/CorporateGroupSection';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión Capstone Green Energy Page
 *
 * Showcases:
 * - Microturbine technology and benefits
 * - Product lineup (C65, C200S, C600S, C800S, C1000S)
 * - Combined services and benefits section
 * - Call-to-action
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

      {/* Combined Services & Benefits Section - Animated */}
      <BlurFade delay={0.8} inView>
        <BenefitsSection />
      </BlurFade>

      {/* Final CTA - Animated */}
      <BlurFade delay={1.0} inView>
        <CapstoneCTA />
      </BlurFade>

      {/* Corporate Group Section - Animated */}
      <BlurFade delay={1.2} inView>
        <CorporateGroupSection />
      </BlurFade>
    </div>
  );
}
