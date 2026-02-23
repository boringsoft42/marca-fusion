import { HeroSection } from '@/components/home/HeroSection';
import { RepresentacionesBlock } from '@/components/home/RepresentacionesBlock';
import { CorporateGroupSection } from '@/components/home/CorporateGroupSection';
import { MissionSection } from '@/components/home/MissionSection';
import { SectorsCarousel } from '@/components/home/SectorsCarousel';
import { ClientShowcase } from '@/components/home/ClientShowcase';
import { BlurFade } from '@/components/magicui/blur-fade';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión Home Page - Sierra Style
 *
 * Main landing page showcasing:
 * - Hero section with company tagline (Sierra style)
 * - Representations block (Capstone & Tablú)
 * - Corporate group section (Marca Fusión + Altrix)
 * - Mission and values
 * - Sectors carousel
 * - Client showcase
 *
 * All components follow STYLE-GUIDE-SIERRA.md design system
 */

export const metadata = metadataUtils.home();

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Sierra Style */}
      <HeroSection />

      {/* Representations Block - Animated */}
      <BlurFade delay={0.2} inView>
        <RepresentacionesBlock />
      </BlurFade>

      {/* Corporate Group Section - Animated */}
      <BlurFade delay={0.3} inView>
        <CorporateGroupSection />
      </BlurFade>

      {/* Mission Section - Animated */}
      <BlurFade delay={0.4} inView>
        <MissionSection />
      </BlurFade>

      {/* Sectors Carousel - Animated */}
      <BlurFade delay={0.6} inView>
        <SectorsCarousel />
      </BlurFade>

      {/* Client Showcase - Animated */}
      <BlurFade delay={0.8} inView>
        <ClientShowcase />
      </BlurFade>
    </div>
  );
}
