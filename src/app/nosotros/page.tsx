import { BlurFade } from '@/components/magicui/blur-fade';
import { AboutHero } from '@/components/about/AboutHero';
import { InstitutionalText } from '@/components/about/InstitutionalText';
import { MissionVisionValues } from '@/components/about/MissionVisionValues';
import { TeamSection } from '@/components/about/TeamSection';
import { CorporateGroupDetail } from '@/components/about/CorporateGroupDetail';
import { metadata as metadataUtils } from '@/lib/seo/metadata';

/**
 * Marca Fusión About Us Page
 *
 * Showcases:
 * - Company origin and history
 * - Mission, vision, and values
 * - Team introduction
 * - Corporate group details (Marca Fusión + Altrix)
 * - Company philosophy
 */

export const metadata = metadataUtils.about();

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* About Hero - No animation for immediate impact */}
      <AboutHero />

      {/* Institutional Text - Animated */}
      <BlurFade delay={0.2} inView>
        <InstitutionalText />
      </BlurFade>

      {/* Mission, Vision & Values - Animated */}
      <BlurFade delay={0.4} inView>
        <MissionVisionValues />
      </BlurFade>

      {/* Team Section - Animated */}
      <BlurFade delay={0.6} inView>
        <TeamSection />
      </BlurFade>

      {/* Corporate Group Detail - Animated */}
      <BlurFade delay={0.8} inView>
        <CorporateGroupDetail />
      </BlurFade>
    </div>
  );
}
