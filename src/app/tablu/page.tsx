import { BlurFade } from '@/components/magicui/blur-fade';
import { TabluHero } from '@/components/tablu/TabluHero';
import { CategoryCarousel } from '@/components/tablu/CategoryCarousel';
import { PricingTables } from '@/components/tablu/PricingTables';
import { ProductCatalog } from '@/components/tablu/ProductCatalog';
import { SocialSection } from '@/components/tablu/SocialSection';
import { TabluCTA } from '@/components/tablu/TabluCTA';
import { TabluCustomSection } from '@/components/tablu/TabluCustomSection';
import { TabluCorporateSection } from '@/components/tablu/TabluCorporateSection';
import { TabluFeaturesBanner } from '@/components/tablu/TabluFeaturesBanner';
import { metadata as metadataUtils } from '@/lib/seo/metadata';
import { structuredData } from '@/lib/seo/structured-data';
import { tabluCatalog } from '@/data/tablu-catalog';

/**
 * Marca Fusión Tablú Bolivia Page
 *
 * Showcases:
 * - Digital planners (acrylic and magnetic)
 * - Product catalog with filtering
 * - Pricing tables for different sizes
 * - Corporate customization solutions
 * - Social media integration
 */

export const metadata = metadataUtils.tablu();

export default function TabluPage() {
  // Generate Product Catalog structured data for SEO
  const productCatalogSchema = structuredData.productCatalog(tabluCatalog);

  return (
    <>
      {/* Product Catalog Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: structuredData.toScript(productCatalogSchema),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section - No animation for immediate impact */}
        <TabluHero />

      {/* Category Carousel - Animated */}
      <BlurFade delay={0.1} inView>
        <CategoryCarousel />
      </BlurFade>

      {/* Pricing Tables - Animated */}
      <BlurFade delay={0.2} inView>
        <PricingTables />
      </BlurFade>

      {/* Product Catalog - Animated */}
      <BlurFade delay={0.4} inView>
        <ProductCatalog />
      </BlurFade>

      {/* Customization Section - Animated */}
      <BlurFade delay={0.5} inView>
        <TabluCustomSection />
      </BlurFade>

      {/* Corporate Section - Animated */}
      <BlurFade delay={0.6} inView>
        <TabluCorporateSection />
      </BlurFade>

      {/* Features Banner */}
      <BlurFade delay={0.65} inView>
        <TabluFeaturesBanner />
      </BlurFade>

      {/* Social Section - Animated */}
      <BlurFade delay={0.7} inView>
        <SocialSection />
      </BlurFade>

      {/* Final CTA - Animated */}
      <BlurFade delay={0.8} inView>
        <TabluCTA />
      </BlurFade>
      </div>
    </>
  );
}
