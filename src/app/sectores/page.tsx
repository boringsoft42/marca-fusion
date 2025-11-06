import { BlurFade } from '@/components/magicui/blur-fade';
import { SectorsHero } from '@/components/sectors/SectorsHero';
import { IndustrialBlock } from '@/components/sectors/IndustrialBlock';
import { PersonalBlock } from '@/components/sectors/PersonalBlock';
import { UnifyingMessage } from '@/components/sectors/UnifyingMessage';

/**
 * Marca Fusión Sectores Page
 *
 * Showcases:
 * - Industrial sectors (Capstone): Oil & Gas, Industrial, Hospitalario, Comercial
 * - Personal profiles (Tablú): Corporativo, Profesionales, Hogares, Emprendedores
 * - Unifying institutional message
 * - CTAs to both product pages
 */

export const metadata = {
  title: 'Sectores | Marca Fusión - Soluciones Industriales y Personales',
  description:
    'Soluciones para cada sector. Energía industrial con Capstone Green Energy (Oil & Gas, Industrial, Hospitalario, Comercial) y organización personal con Tablú Bolivia (Corporativo, Profesionales, Hogares, Emprendedores).',
  openGraph: {
    title: 'Sectores - Soluciones Industriales y Personales | Marca Fusión',
    description:
      'Desde grandes industrias hasta espacios personales. Conectamos tecnología y organización para impulsar el éxito en cada ámbito.',
    type: 'website',
    locale: 'es_BO',
  },
};

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
