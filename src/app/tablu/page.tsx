import { BlurFade } from '@/components/magicui/blur-fade';
import { TabluHero } from '@/components/tablu/TabluHero';
import { CategoryCards } from '@/components/tablu/CategoryCards';
import { PricingTables } from '@/components/tablu/PricingTables';
import { ProductCatalog } from '@/components/tablu/ProductCatalog';
import { CorporateSection } from '@/components/tablu/CorporateSection';
import { IconRibbon } from '@/components/tablu/IconRibbon';
import { SocialSection } from '@/components/tablu/SocialSection';
import { TabluCTA } from '@/components/tablu/TabluCTA';

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

export const metadata = {
  title: 'Tablú Bolivia | Marca Fusión - Planificadores Digitales',
  description: 'Representantes oficiales de Tablú en Bolivia. Planificadores digitales en acrílico y magnéticos. 8 categorías: Home, Hábitos, Niños, Jóvenes, Universidad, Emprendedores, Corporativo, Regalos. Diseños únicos para organizar tu vida con estilo.',
  openGraph: {
    title: 'Tablú Bolivia | Planificadores Digitales - Marca Fusión',
    description: 'Organiza tu vida con estilo. Planificadores en acrílico y magnéticos con diseños únicos. Envíos a todo Bolivia.',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function TabluPage() {
  return (
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
  );
}
