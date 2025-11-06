import { BlurFade } from '@/components/magicui/blur-fade';
import { SectorsHero } from '@/components/sectors/SectorsHero';
import { IndustrialBlock } from '@/components/sectors/IndustrialBlock';
import { PersonalBlock } from '@/components/sectors/PersonalBlock';
import { UnifyingMessage } from '@/components/sectors/UnifyingMessage';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión Sectores Page
 *
 * Showcases:
 * - Industrial sectors (Capstone): Oil & Gas, Industrial, Hospitalario, Comercial
 * - Personal profiles (Tablú): Corporativo, Profesionales, Hogares, Emprendedores
 * - Unifying institutional message
 * - CTAs to both product pages
 */

export const metadata = metadataUtils.sectors();

export default function SectoresPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <SectorsHero />

      {/* Industrial Sectors (Capstone) - Animated */}
      <BlurFade delay={0.2} inView>
        <IndustrialBlock />
      </BlurFade>

      {/* Personal Profiles (Tablú) - Animated */}
      <BlurFade delay={0.4} inView>
        <PersonalBlock />
      </BlurFade>

      {/* Unifying Message - Animated */}
      <BlurFade delay={0.6} inView>
        <UnifyingMessage />
      </BlurFade>
    </div>
  );
}
