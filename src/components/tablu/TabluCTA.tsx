'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ShoppingBag, MessageCircle, Sparkles, Star } from 'lucide-react';

/**
 * Tablú Final Call to Action
 *
 * "Invitación a compra" - Encourages final conversion.
 * Redesigned to match the Tablú aesthetic (Teal/Purple/Cream colors + Handwriting).
 */

interface TabluCTAProps {
  className?: string;
}

export function TabluCTA({ className }: TabluCTAProps) {
  const whatsappUrl = "https://wa.me/59167710595?text=Hola,%20quiero%20realizar%20un%20pedido%20de%20[modelo],%20tama%C3%B1o%20[XX],%20cantidad%20[X].%20%C2%BFPodr%C3%ADan%20confirmarme%20disponibilidad?";

  return (
    <section className={cn('py-24 bg-white relative overflow-hidden', className)}>
      {/* Background decoration for the section itself to blend with previous/next sections */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-[10%] left-[5%] text-[#2d8d7b]/10 rotate-12">
            <Star className="w-12 h-12" />
          </div>
          <div className="absolute bottom-[10%] right-[5%] text-[#5762A2]/10 -rotate-12">
            <Star className="w-16 h-16" />
          </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#2d8d7b] to-[#1e6f60] text-white p-10 md:p-24 shadow-2xl text-center isolate"
        >
           {/* Detailed Card Decor */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               {/* Large soft glow top-left */}
               <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[70%] bg-[#5762A2] rounded-full blur-[100px] opacity-40 mix-blend-overlay" />
               {/* Warm accent bottom-right */}
               <div className="absolute bottom-[-30%] right-[-20%] w-[70%] h-[70%] bg-[#FFD700] rounded-full blur-[100px] opacity-20 mix-blend-soft-light" />
               
               {/* Pattern overlay */}
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
           </div>

           <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner mb-2"
              >
                  <Sparkles className="h-5 w-5 text-yellow-200" />
                  <span className="font-handwriting text-xl tracking-wide pt-1">Tu organización empieza aquí</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm">
                Organizá tu vida <span className="text-[#FFFDE7] italic font-handwriting">con estilo</span>
              </h2>
              
              <div className="space-y-4 text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
                 <p>Tablú Bolivia te acompaña en cada meta, proyecto o idea. Diseños prácticos, elegantes y 100% personalizables.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 items-center">
                <a
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-3 bg-[#FFFDE7] text-[#2d8d7b] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 group"
                >
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Ver catálogo completo
                </a>
                
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg hover:-translate-y-1 group"
                >
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Contactar ventas
                </a>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
