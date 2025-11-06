import { BlurFade } from '@/components/magicui/blur-fade';
import { AboutHero } from '@/components/about/AboutHero';
import { InstitutionalText } from '@/components/about/InstitutionalText';
import { MissionVisionValues } from '@/components/about/MissionVisionValues';
import { TeamSection } from '@/components/about/TeamSection';
import { CorporateGroupDetail } from '@/components/about/CorporateGroupDetail';
import { PhilosophySection } from '@/components/about/PhilosophySection';

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

export const metadata = {
  title: 'Nosotros | Marca Fusión - Quiénes Somos',
  description: 'Conoce a Marca Fusión SRL, representantes exclusivos de Capstone Green Energy y Tablú en Bolivia. Nuestra misión es conectar Bolivia con innovación y sostenibilidad.',
  openGraph: {
    title: 'Sobre Nosotros | Marca Fusión SRL',
    description: 'Representantes exclusivos de tecnologías innovadoras en Bolivia. Conoce nuestra historia, misión y valores.',
    type: 'website',
    locale: 'es_BO',
  },
};

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

      {/* Philosophy Section - Animated */}
      <BlurFade delay={1.0} inView>
        <PhilosophySection />
      </BlurFade>
    </div>
  );
}
