import { HeroSection } from '@/components/home/HeroSection';
import { RepresentacionesBlock } from '@/components/home/RepresentacionesBlock';
import { CorporateGroupSection } from '@/components/home/CorporateGroupSection';
import { MissionSection } from '@/components/home/MissionSection';
import { SectorsCarousel } from '@/components/home/SectorsCarousel';
import { ClientShowcase } from '@/components/home/ClientShowcase';
import { BlurFade } from '@/components/magicui/blur-fade';

/**
 * Marca Fusión Home Page
 *
 * Main landing page showcasing:
 * - Hero section with company tagline
 * - Representations block (Capstone & Tablú)
 * - Corporate group section (Marca Fusión + Altrix)
 * - Mission and values
 * - Sectors carousel
 * - Client showcase
 */

export const metadata = {
  title: 'Inicio | Marca Fusión - Representaciones en Bolivia',
  description: 'Representantes exclusivos de Capstone Green Energy y Tablú en Bolivia. Conectamos Bolivia con marcas internacionales que impulsan innovación, sostenibilidad y confianza.',
  openGraph: {
    title: 'Marca Fusión SRL - Representaciones Capstone y Tablú en Bolivia',
    description: 'Representantes exclusivos de Capstone Green Energy y Tablú en Bolivia',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <HeroSection />

      {/* Representations Block - Animated */}
      <BlurFade delay={0.2} inView>
        <RepresentacionesBlock />
      </BlurFade>

      {/* Corporate Group Section - Animated */}
      <BlurFade delay={0.4} inView>
        <CorporateGroupSection />
      </BlurFade>

      {/* Mission Section - Animated */}
      <BlurFade delay={0.6} inView>
        <MissionSection />
      </BlurFade>

      {/* Sectors Carousel - Animated */}
      <BlurFade delay={0.8} inView>
        <SectorsCarousel />
      </BlurFade>

      {/* Client Showcase - Animated */}
      <BlurFade delay={1.0} inView>
        <ClientShowcase />
      </BlurFade>
    </div>
  );
}
