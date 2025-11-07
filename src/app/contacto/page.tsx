import { BlurFade } from '@/components/magicui/blur-fade';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { metadata as metadataUtils } from '@/lib/seo/metadata';
import { structuredData } from '@/lib/seo/structured-data';
import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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

        {/* Map and Closing Message Grid - Compressed */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Map Column */}
                <BlurFade delay={0.6} inView>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Encuéntranos
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Visítanos en nuestra oficina en Santa Cruz de la Sierra
                    </p>

                    {/* Map Container - Smaller */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl border border-border">
                      <div className="relative w-full" style={{ paddingTop: '75%' }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30528.15!2d-63.1812!3d-17.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c7f6f9f5e5%3A0x5d4e5e5e5e5e5e5e!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                          className="absolute top-0 left-0 w-full h-full"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Ubicación de Marca Fusión en Santa Cruz de la Sierra, Bolivia"
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        <a
                          href="https://maps.google.com/?q=Santa+Cruz+de+la+Sierra,Bolivia"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-marca-green hover:underline font-medium"
                        >
                          Abrir en Google Maps
                        </a>
                        {' '}para obtener direcciones desde tu ubicación
                      </p>
                    </div>
                  </div>
                </BlurFade>

                {/* Closing Message Column */}
                <BlurFade delay={0.8} inView>
                  <div className="lg:pl-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Gracias por tu Interés en Marca Fusión
                    </h2>
                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                      <p>
                        En <span className="font-bold text-foreground">Marca Fusión</span>, creemos que cada
                        conversación es el inicio de una gran alianza. Ya sea que busques soluciones energéticas
                        con <span className="font-semibold">Capstone Green Energy</span> o herramientas de
                        organización con <span className="font-semibold">Tablú Bolivia</span>, estamos aquí
                        para escucharte y ayudarte.
                      </p>
                      <p>
                        Nuestro equipo se pondrá en contacto contigo a la brevedad. Mientras tanto, te invitamos
                        a explorar más sobre nuestras soluciones y lo que nos hace diferentes.
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                      <Link
                        href="/"
                        className={cn(
                          'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold',
                          'bg-marca-green text-white shadow-lg',
                          'transition-all duration-200',
                          'hover:bg-marca-green/90 hover:shadow-xl hover:scale-105',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                        )}
                      >
                        <Home className="h-4 w-4" aria-hidden="true" />
                        Volver al Inicio
                      </Link>
                      <Link
                        href="/nosotros"
                        className={cn(
                          'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold',
                          'bg-background text-foreground border-2 border-marca-green/30',
                          'transition-all duration-200',
                          'hover:bg-marca-green/5 hover:border-marca-green/50 hover:scale-105',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
                        )}
                      >
                        Conocer más sobre nosotros
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Trust Indicator */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-bold text-foreground">Marca Fusión SRL</span> • Santa Cruz de la Sierra, Bolivia
                        <br />
                        Representantes oficiales de Capstone Green Energy y Tablú Bolivia
                      </p>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
