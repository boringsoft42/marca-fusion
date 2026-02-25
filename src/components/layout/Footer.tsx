'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

/**
 * Marca Fusión Footer Component
 *
 * Features:
 * - Multi-column layout (desktop) / stacked (mobile)
 * - Contact information with icons
 * - Social media links
 * - Quick navigation links
 * - "Contáctanos ahora" CTA button
 * - Copyright notice
 * - Follows STYLE-GUIDE.md design patterns
 */

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Contact information
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_GENERAL || '+591 72136767';
  const whatsappNumber = phoneNumber.replace(/\s/g, '');

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: phoneNumber,
      href: `tel:${whatsappNumber}`,
      whatsapp: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: Mail,
      label: 'Correo Electrónico',
      value: process.env.NEXT_PUBLIC_EMAIL_INFO || 'info@marcafusion.com.bo',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_INFO || 'info@marcafusion.com.bo'}`,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Santa Cruz, Bolivia',
      href: '/contacto',
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/share/14JB8uTEPY4/?mibextid=wwXIfr',
      ariaLabel: 'Visitar Facebook',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/marcafusion?igsh=ZHNkZDF3bGtzZTN0',
      ariaLabel: 'Visitar Instagram',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/marcafusionsrl/',
      ariaLabel: 'Visitar LinkedIn',
    },
  ];

  // Quick links
  const quickLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/capstone', label: 'Capstone' },
    { href: '/tablu', label: 'Tablú' },
    { href: '/sectores', label: 'Sectores' },
    { href: '/alianzas', label: 'Alianzas' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer
      className={cn(
        'w-full bg-[#0D6832] text-white',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/images/Logo_Marca_Fusión_Transparente.png"
                  alt="Marca Fusión"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="text-base font-bold tracking-tight text-white">Marca Fusión</div>
                <p className="text-xs text-white/70">Bolivia</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Representantes exclusivos de Capstone Green Energy y Tablú en Bolivia.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <div className="flex items-start gap-2 text-sm">
                    <item.icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-white/90" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="font-medium text-white mb-1">{item.label}</div>
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                      {item.whatsapp && (
                        <a
                          href={item.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 mt-2 text-white/80 hover:text-white transition-colors"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          <span className="text-xs">WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media & CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Síguenos
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition-all hover:bg-white hover:text-marca-green hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-marca-green"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-xs text-white/90 max-w-3xl leading-relaxed">
              © {currentYear} Marca Fusión SRL – Todos los derechos reservados. Parte del grupo corporativo <span className="font-semibold text-white">Marca Fusión SRL – Bolivia</span> | <span className="font-semibold text-white">Altrix Solutions LLC – USA</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
