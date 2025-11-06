import { HeroSection } from '@/components/home/HeroSection';
import { RepresentacionesBlock } from '@/components/home/RepresentacionesBlock';
import { CorporateGroupSection } from '@/components/home/CorporateGroupSection';
import { MissionSection } from '@/components/home/MissionSection';
import { SectorsCarousel } from '@/components/home/SectorsCarousel';
import { ClientShowcase } from '@/components/home/ClientShowcase';

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
      {/* Hero Section */}
      <HeroSection />

      {/* Representations Block */}
      <RepresentacionesBlock />

      {/* Corporate Group Section */}
      <CorporateGroupSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Sectors Carousel */}
      <SectorsCarousel />

      {/* Client Showcase */}
      <ClientShowcase />
    </div>
  );
}
