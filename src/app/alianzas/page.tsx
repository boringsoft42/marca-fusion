import { BlurFade } from '@/components/magicui/blur-fade';
import { PartnershipsHero } from '@/components/partnerships/PartnershipsHero';
import { WhyChooseUs } from '@/components/partnerships/WhyChooseUs';
import { WhatWeSeek } from '@/components/partnerships/WhatWeSeek';
import { BackingSection } from '@/components/partnerships/BackingSection';
import { AltrixCollaboration } from '@/components/partnerships/AltrixCollaboration';
import { ClosingQuote } from '@/components/partnerships/ClosingQuote';

/**
 * Marca Fusión Alianzas (Partnerships) Page
 *
 * Showcases:
 * - Partnership opportunities
 * - Why choose us (5 trust points)
 * - What we seek in alliances
 * - Brand representations (Capstone, Tablú)
 * - Altrix Solutions international operations
 * - Inspirational closing quote with CTA
 */

export const metadata = {
  title: 'Alianzas Estratégicas | Marca Fusión - Crezcamos Juntos',
  description:
    'Buscamos alianzas estratégicas con marcas innovadoras. Representamos Capstone Green Energy y Tablú con respaldo de Altrix Solutions LLC. Confianza, innovación y resultados medibles.',
  openGraph: {
    title: 'Alianzas Estratégicas - Crezcamos Juntos | Marca Fusión',
    description:
      'Alianzas basadas en valores compartidos. Más de una década representando marcas globales en Bolivia con éxito comprobado.',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function AlianzasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <PartnershipsHero />

      {/* Why Choose Us - Animated */}
      <BlurFade delay={0.2} inView>
        <WhyChooseUs />
      </BlurFade>

      {/* What We Seek - Animated */}
      <BlurFade delay={0.4} inView>
        <WhatWeSeek />
      </BlurFade>

      {/* Backing/Brand Representations - Animated */}
      <BlurFade delay={0.6} inView>
        <BackingSection />
      </BlurFade>

      {/* Altrix Collaboration - Animated */}
      <BlurFade delay={0.8} inView>
        <AltrixCollaboration />
      </BlurFade>

      {/* Closing Quote - Animated */}
      <BlurFade delay={1.0} inView>
        <ClosingQuote />
      </BlurFade>
    </div>
  );
}
