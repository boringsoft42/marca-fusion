'use client';

import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

/**
 * Direct Contact Information Section
 *
 * Features:
 * - Address, phone, emails, website
 * - Social media links
 * - Office hours
 * - Organized in cards
 * - Follows STYLE-GUIDE.md design patterns
 */

interface DirectContactProps {
  className?: string;
}

export function DirectContact({ className }: DirectContactProps) {
  const contactInfo = {
    address: {
      street: 'Av. San Martín',
      city: 'Santa Cruz de la Sierra',
      country: 'Bolivia',
    },
    phones: [
      { label: 'General', number: '+591 72136767', whatsapp: true },
      { label: 'Tablú', number: '+591 67710595', whatsapp: true },
    ],
    emails: [
      { label: 'Información', address: 'info@marcafusion.com.bo' },
      { label: 'Ventas', address: 'ventas@marcafusion.com.bo' },
    ],
    website: 'www.marcafusion.com.bo',
    hours: 'Lunes a Viernes: 8:30 - 18:00',
  };

  const socialMedia = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com',
      color: 'hover:text-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
      color: 'hover:text-blue-700',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-muted/20', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Información de Contacto Directo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Múltiples canales para que puedas comunicarte con nosotros
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Address Card */}
            <div className="p-6 rounded-lg bg-background border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-marca-green/10">
                    <MapPin className="h-6 w-6 text-marca-green" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Dirección</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                    <br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-lg bg-background border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-marca-green/10">
                    <Phone className="h-6 w-6 text-marca-green" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">Teléfonos</h3>
                  <div className="space-y-2">
                    {contactInfo.phones.map((phone, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">{phone.label}</p>
                          <a
                            href={`tel:${phone.number}`}
                            className="text-sm font-medium text-foreground hover:text-marca-green transition-colors"
                          >
                            {phone.number}
                          </a>
                        </div>
                        {phone.whatsapp && (
                          <a
                            href={`https://wa.me/${phone.number.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:text-[#25D366]/80 transition-colors"
                            title="WhatsApp"
                          >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-lg bg-background border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-marca-green/10">
                    <Mail className="h-6 w-6 text-marca-green" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">Correos Electrónicos</h3>
                  <div className="space-y-2">
                    {contactInfo.emails.map((email, index) => (
                      <div key={index}>
                        <p className="text-xs text-muted-foreground">{email.label}</p>
                        <a
                          href={`mailto:${email.address}`}
                          className="text-sm font-medium text-foreground hover:text-marca-green transition-colors break-all"
                        >
                          {email.address}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Website & Hours Card */}
            <div className="p-6 rounded-lg bg-background border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-marca-green/10">
                    <Globe className="h-6 w-6 text-marca-green" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Sitio Web</h3>
                  <a
                    href={`https://${contactInfo.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-marca-green hover:underline mb-4 block"
                  >
                    {contactInfo.website}
                  </a>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Horario de atención:</h4>
                  <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center p-8 rounded-lg bg-background border border-border shadow-md">
            <h3 className="text-xl font-bold text-foreground mb-4">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center gap-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'p-3 rounded-full bg-muted transition-all duration-200',
                    'hover:scale-110 hover:shadow-lg',
                    social.color
                  )}
                  title={social.name}
                >
                  <social.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
