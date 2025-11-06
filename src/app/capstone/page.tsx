import { BlurFade } from '@/components/magicui/blur-fade';
import { CapstoneHero } from '@/components/capstone/CapstoneHero';
import { MicroturbineExplanation } from '@/components/capstone/MicroturbineExplanation';

/**
 * Marca Fusión Capstone Green Energy Page
 *
 * Showcases:
 * - Microturbine technology and benefits
 * - Product lineup (C65, C200S, C600S, C800S, C1000S)
 * - Services and support
 * - Impact statistics
 * - Benefits and call-to-action
 */

export const metadata = {
  title: 'Capstone Green Energy | Marca Fusión - Microturbinas en Bolivia',
  description: 'Representantes exclusivos de Capstone Green Energy en Bolivia. Microturbinas de alta eficiencia para generación de energía limpia, cogeneración y respaldo energético. 71+ instalaciones, 3.5+ MW de capacidad.',
  openGraph: {
    title: 'Capstone Green Energy | Microturbinas - Marca Fusión Bolivia',
    description: 'Tecnología de microturbinas para energía limpia y eficiente. Soluciones para Oil & Gas, Industrial, Hospitalario y más.',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function CapstonePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <CapstoneHero />

      {/* Technology Explanation - Animated */}
      <BlurFade delay={0.2} inView>
        <MicroturbineExplanation />
      </BlurFade>

      {/* Additional sections will be added in subsequent tasks */}
    </div>
  );
}
