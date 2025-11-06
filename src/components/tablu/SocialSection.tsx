'use client';

import { cn } from '@/lib/utils';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

/**
 * Tablú Social Section
 *
 * Features:
 * - Animated social media icons
 * - Instagram, Facebook, WhatsApp links
 * - Social handles display
 * - Hover animations
 * - Call to follow
 * - Follows STYLE-GUIDE.md design patterns
 */

interface SocialSectionProps {
  className?: string;
}

export function SocialSection({ className }: SocialSectionProps) {
  // Environment variables for social media URLs (can be configured)
  const instagramUrl = process.env.NEXT_PUBLIC_TABLU_INSTAGRAM || 'https://www.instagram.com/tablu.bolivia';
  const instagramHandle = process.env.NEXT_PUBLIC_TABLU_INSTAGRAM_HANDLE || '@tablu.bolivia';

  const facebookUrl = process.env.NEXT_PUBLIC_TABLU_FACEBOOK || 'https://www.facebook.com/tablu.bolivia';
  const facebookHandle = process.env.NEXT_PUBLIC_TABLU_FACEBOOK_HANDLE || 'Tablú Bolivia';

  const whatsappNumber = '59167710595';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      handle: instagramHandle,
      url: instagramUrl,
      color: 'from-purple-600 via-pink-500 to-orange-400',
      hoverColor: 'hover:from-purple-700 hover:via-pink-600 hover:to-orange-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      handle: facebookHandle,
      url: facebookUrl,
      color: 'from-blue-600 to-blue-500',
      hoverColor: 'hover:from-blue-700 hover:to-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      handle: '+591 67710595',
      url: whatsappUrl,
      color: 'from-green-600 to-green-500',
      hoverColor: 'hover:from-green-700 hover:to-green-600',
    },
  ];

  return (
    <section className={cn('py-16 md:py-24 bg-gradient-to-br from-marca-beige/5 via-background to-marca-beige/10', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con nuestros nuevos diseños, promociones especiales y contenido inspirador
              para organizar tu vida con estilo.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Card */}
                <div
                  className={cn(
                    'relative p-8 rounded-lg border-2 border-border bg-background overflow-hidden',
                    'transition-all duration-300',
                    'hover:border-transparent hover:shadow-2xl hover:-translate-y-2'
                  )}
                >
                  {/* Gradient Background (visible on hover) */}
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                      social.color
                    )}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Icon */}
                    <div className="inline-flex">
                      <div
                        className={cn(
                          'p-5 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110',
                          social.color
                        )}
                      >
                        <social.icon className="h-10 w-10 text-white" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </h3>

                    {/* Handle */}
                    <p className="text-sm font-medium text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                      {social.handle}
                    </p>

                    {/* CTA Text */}
                    <p className="text-xs font-semibold text-marca-beige group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                      Síguenos →
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div
                    className={cn(
                      'absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-300',
                      social.color
                    )}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center p-8 rounded-lg bg-muted/50 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-3">
              ¿Tienes preguntas?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-xl mx-auto">
              Nuestro equipo está disponible para ayudarte a elegir el planificador perfecto
              o resolver cualquier consulta sobre nuestros productos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-base font-semibold',
                'bg-[#25D366] text-white shadow-lg',
                'transition-all duration-200',
                'hover:bg-[#25D366]/90 hover:shadow-xl hover:scale-105',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
              )}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chatea con Nosotros
            </a>
          </div>

          {/* Testimonial or Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Únete a nuestra comunidad de más de <span className="font-bold text-foreground">5,000+</span> personas organizadas
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Basado en reseñas de nuestros clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
