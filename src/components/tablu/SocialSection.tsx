'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

/**
 * Tablú Social Section
 *
 * Promotes social media engagement and direct sales contact.
 */

interface SocialSectionProps {
  className?: string;
}

export function SocialSection({ className }: SocialSectionProps) {
  const whatsappUrl = "https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?";

  const socials = [
    {
      name: 'Instagram',
      handle: '@tablubolivia',
      url: 'https://www.instagram.com/tablu.bo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: Instagram,
      color: 'hover:text-[#E1306C]'
    },
    {
      name: 'Facebook',
      handle: 'Tablú Bolivia',
      url: 'https://www.facebook.com/profile.php?id=61568877125876',
      icon: Facebook,
      color: 'hover:text-[#4267B2]'
    },
    {
      name: 'WhatsApp Ventas',
      handle: 'Haz tu pedido aquí 67710595',
      url: whatsappUrl,
      icon: MessageCircle,
      color: 'hover:text-[#25D366]'
    }
  ];

  return (
    <section className={cn('py-20 bg-[#5762A2] text-white overflow-hidden', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Seguinos en nuestras <span className="font-kaushan text-[#FFD166] lowercase text-[0.85em] font-normal tracking-normal">redes</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Descubrí nuevos diseños, promociones y tips de organización cada semana.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4 mt-12 mb-16">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={cn("p-4 rounded-full bg-white/10 group-hover:bg-white text-white transition-colors duration-300", social.color)}>
                  <social.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-1">{social.name}</h3>
                  <p className="text-sm text-white/80 group-hover:text-white transition-colors">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quality & Representation Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto italic">
              Los productos Tablú Bolivia mantienen los mismos estándares de fabricación y garantía que en Perú y México.
              <br />
              <span className="font-bold text-white/90 focus:not-italic">Distribuido oficialmente por Marca Fusión SRL – Representante exclusivo para Bolivia</span>
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
