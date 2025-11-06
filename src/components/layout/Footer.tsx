'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

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
  const params = useParams();
  const t = useTranslations('nav');
  const locale = params?.locale as string || 'es';

  const currentYear = new Date().getFullYear();

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      label: locale === 'es' ? 'Teléfono General' : 'General Phone',
      value: process.env.NEXT_PUBLIC_PHONE_GENERAL || '+591 72136767',
      href: `tel:${process.env.NEXT_PUBLIC_PHONE_GENERAL?.replace(/\s/g, '') || '+59172136767'}`,
    },
    {
      icon: Mail,
      label: locale === 'es' ? 'Correo Electrónico' : 'Email',
      value: process.env.NEXT_PUBLIC_EMAIL_INFO || 'info@marcafusion.com.bo',
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_INFO || 'info@marcafusion.com.bo'}`,
    },
    {
      icon: MapPin,
      label: locale === 'es' ? 'Ubicación' : 'Location',
      value: 'Santa Cruz, Bolivia',
      href: `/${locale}/contacto`,
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
      ariaLabel: locale === 'es' ? 'Visitar Facebook' : 'Visit Facebook',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
      ariaLabel: locale === 'es' ? 'Visitar Instagram' : 'Visit Instagram',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
      ariaLabel: locale === 'es' ? 'Visitar LinkedIn' : 'Visit LinkedIn',
    },
  ];

  // Quick links
  const quickLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/nosotros`, label: t('about') },
    { href: `/${locale}/capstone`, label: t('capstone') },
    { href: `/${locale}/tablu`, label: t('tablu') },
    { href: `/${locale}/sectores`, label: t('sectors') },
    { href: `/${locale}/contacto`, label: t('contact') },
  ];

  return (
    <footer
      className={cn(
        'w-full border-t border-border bg-muted/30',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-marca-green text-white font-bold text-lg">
                MF
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight">Marca Fusión</div>
                <p className="text-xs text-muted-foreground">Bolivia</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {locale === 'es'
                ? 'Representantes exclusivos de Capstone Green Energy y Tablú en Bolivia.'
                : 'Exclusive representatives of Capstone Green Energy and Tablú in Bolivia.'}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {locale === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-marca-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {locale === 'es' ? 'Contacto' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-marca-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    <item.icon className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media & CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {locale === 'es' ? 'Síguenos' : 'Follow Us'}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-marca-green hover:text-white hover:border-marca-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={`/${locale}/contacto`}
                className="inline-flex items-center justify-center rounded-md bg-marca-green px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-marca-green/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2"
              >
                {locale === 'es' ? 'Contáctanos ahora' : 'Contact us now'}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Marca Fusión SRL. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link
                href={`/${locale}/nosotros`}
                className="transition-colors hover:text-marca-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {locale === 'es' ? 'Sobre Nosotros' : 'About Us'}
              </Link>
              <Link
                href={`/${locale}/contacto`}
                className="transition-colors hover:text-marca-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {locale === 'es' ? 'Contacto' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
