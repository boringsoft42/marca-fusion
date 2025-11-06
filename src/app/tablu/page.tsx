import { BlurFade } from '@/components/magicui/blur-fade';
import { TabluHero } from '@/components/tablu/TabluHero';
import { CategoryCards } from '@/components/tablu/CategoryCards';
import { PricingTables } from '@/components/tablu/PricingTables';
import { ProductCatalog } from '@/components/tablu/ProductCatalog';
import { CorporateSection } from '@/components/tablu/CorporateSection';
import { IconRibbon } from '@/components/tablu/IconRibbon';
import { SocialSection } from '@/components/tablu/SocialSection';
import { TabluCTA } from '@/components/tablu/TabluCTA';
import { metadata as metadataUtils } from '@/lib/seo/metadata';
import { structuredData } from '@/lib/seo/structured-data';
import { tabluCatalog } from '@/data/tablu-catalog';

/**
 * Marca Fusión Tablú Bolivia Page
 *
 * Showcases:
 * - Digital planners (acrylic and magnetic)
 * - 8 product categories (Home, Habits, Kids, Youth, University, Entrepreneurs, Corporate, Gifts)
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

      {/* Category Cards - Animated */}
      <BlurFade delay={0.2} inView>
        <CategoryCards />
      </BlurFade>

      {/* Pricing Tables - Animated */}
      <BlurFade delay={0.4} inView>
        <PricingTables />
      </BlurFade>

      {/* Product Catalog - Animated */}
      <BlurFade delay={0.6} inView>
        <ProductCatalog />
      </BlurFade>

      {/* Icon Ribbon - Animated */}
      <BlurFade delay={0.8} inView>
        <IconRibbon />
      </BlurFade>

      {/* Corporate Section - Animated */}
      <BlurFade delay={1.0} inView>
        <CorporateSection />
      </BlurFade>

      {/* Social Section - Animated */}
      <BlurFade delay={1.2} inView>
        <SocialSection />
      </BlurFade>

      {/* Final CTA - Animated */}
      <BlurFade delay={1.4} inView>
        <TabluCTA />
      </BlurFade>
      </div>
    </>
  );
}
