'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Tablú Customization Section
 *
 * Features:
 * - Exact replica of the provided design reference
 * - Custom SVG background shapes
 * - High contrast typography with drop shadows
 * - Dynamic collage layout
 * - Direct WhatsApp link
 */

interface TabluCustomSectionProps {
  className?: string;
}

export function TabluCustomSection({ className }: TabluCustomSectionProps) {
  const whatsappUrl = "https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?";

  return (
    <section className={cn('relative w-full overflow-hidden bg-white', className)}>
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="relative w-full">
        <Image
          src="/images/Personalizalo aqui.png"
          alt="Personaliza tu tablú"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ================= CTA BUTTON ================= */}
      <div className="absolute bottom-[8%] left-[2%] md:bottom-[10%] md:left-[3%] lg:bottom-[12%] lg:left-[4%] z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-block px-10 py-4 text-white text-lg font-bold tracking-wider uppercase rounded-sm shadow-[0_10px_20px_rgba(255,119,119,0.4)]",
              "bg-[#FF7777] hover:bg-[#ff6666]",
              "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              "border-b-4 border-[#D65A5A]"
            )}
          >
            PERSONALIZALO AQUÍ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
