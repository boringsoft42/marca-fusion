'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { CheckCircle2, MessageCircle } from 'lucide-react';

/**
 * Tablú Corporate Customization Section
 *
 * Features:
 * - Targeted at B2B/Corporate clients
 * - Professional, clean aesthetic (Light gray/Beige background)
 * - Corporate benefits list
 * - Direct sales contact CTA
 */

interface TabluCorporateSectionProps {
  className?: string;
}

export function TabluCorporateSection({ className }: TabluCorporateSectionProps) {
  const whatsappUrl = "https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?";

  const benefits = [
    "Regalos empresariales",
    "Branding interno",
    "Eventos corporativos",
    "Equipos de ventas y proyectos"
  ];

  return (
    <section className={cn('py-24 md:py-32 bg-[#F8F9FA]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
                Planners para <br className="hidden md:block" />
                <span className="font-kaushan text-[#5762A2] lowercase text-[0.85em] font-normal tracking-normal">empresas y equipos</span>
              </h2>
              <p className="text-lg md:text-xl text-[#555] leading-relaxed mb-8 max-w-lg">
                Ofrecemos soluciones corporativas elementales para oficinas, eventos o regalos institucionales.
                Personaliza cada detalle con el logo, colores y diseño exclusivo de tu empresa.
              </p>

              <div className="space-y-6 mb-10">
                <p className="font-bold text-[#1a1a1a] uppercase tracking-widest text-xs">IDEAL PARA:</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2ECC71]/10 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-[#2ECC71]" />
                      </div>
                      <span className="text-[#333] font-medium text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-bold',
                  'bg-[#5762A2] text-white shadow-xl shadow-[#5762A2]/20',
                  'transition-all duration-300',
                  'hover:bg-[#4A5BA8] hover:shadow-2xl hover:shadow-[#5762A2]/30 hover:-translate-y-1',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2'
                )}
              >
                <MessageCircle className="h-5 w-5" />
                Consultar por Tablú Corporativo
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative"
          >
            {/* Main Image Container - Ensuring 100% visibility */}
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-8 border-white ring-1 ring-black/5 p-8 md:p-14">
              
              <Image
                src="/images/Tablú MF.jpeg"
                alt="Oficina Corporativa Tablú"
                fill
                className="object-contain transition-all duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-[2.5rem] border-2 border-[#5762A2]/10" />
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
