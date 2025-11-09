import { BlurFade } from '@/components/magicui/blur-fade';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { metadata as metadataUtils } from '@/lib/seo/metadata';
import { structuredData } from '@/lib/seo/structured-data';

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

export const metadata = metadataUtils.contact();

export default function ContactoPage() {
  // Generate LocalBusiness structured data for local SEO
  const localBusinessSchema = structuredData.localBusiness();

  return (
    <>
      {/* LocalBusiness Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: structuredData.toScript(localBusinessSchema),
        }}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Form Section - Reduced spacing */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <BlurFade delay={0.2} inView>
                <div className="text-center mb-8">
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
      </div>
    </>
  );
}
