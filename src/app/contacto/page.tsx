import { BlurFade } from '@/components/magicui/blur-fade';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { DirectContact } from '@/components/contact/DirectContact';
import { GoogleMapsEmbed } from '@/components/contact/GoogleMapsEmbed';
import { ClosingMessage } from '@/components/contact/ClosingMessage';

/**
 * Marca Fusión Contacto (Contact) Page
 *
 * Showcases:
 * - Contact hero with quick info
 * - Contact form with validation
 * - Direct contact information
 * - Google Maps location
 * - Closing message with CTAs
 */

export const metadata = {
  title: 'Contacto | Marca Fusión - Conversemos',
  description:
    'Contáctanos para asesoría técnica, cotizaciones o propuestas de alianza. Representantes de Capstone Green Energy y Tablú Bolivia en Santa Cruz. Email: info@marcafusion.com.bo, Tel: +591 72136767',
  openGraph: {
    title: 'Contacto - Conversemos | Marca Fusión',
    description:
      'Estamos aquí para responder tus preguntas y ayudarte a encontrar la solución perfecta. Múltiples canales de contacto disponibles.',
    type: 'website',
    locale: 'es_BO',
  },
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - No animation for immediate impact */}
      <ContactHero />

      {/* Contact Form Section - Animated */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <BlurFade delay={0.2} inView>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <ContactForm />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Direct Contact Info - Animated */}
      <BlurFade delay={0.6} inView>
        <DirectContact />
      </BlurFade>

      {/* Google Maps - Animated */}
      <BlurFade delay={0.8} inView>
        <GoogleMapsEmbed />
      </BlurFade>

      {/* Closing Message - Animated */}
      <BlurFade delay={1.0} inView>
        <ClosingMessage />
      </BlurFade>
    </div>
  );
}
