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
    <section className={cn('relative py-24 md:py-32 overflow-hidden bg-[#FCCC18]', className)}>
      {/* ================= BACKGROUND LAYERS ================= */}

        {/* 1. Large Blue Shape (Top Left) */}
        <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[60%] aspect-square z-0">
            <svg viewBox="0 0 500 500" className="w-full h-full">
                <path 
                    d="M0,0 L500,0 Q600,200 350,300 Q150,400 0,500 Z" 
                    fill="#58629F"
                />
                {/* Yellow Polka Dots */}
                <circle cx="200" cy="100" r="25" fill="#FCCC18" />
                <circle cx="350" cy="150" r="15" fill="#FCCC18" />
                <circle cx="100" cy="250" r="20" fill="#FCCC18" />
                <circle cx="250" cy="300" r="12" fill="#FCCC18" />
            </svg>
        </div>

        {/* 2. Pink Blob (Bottom Left) */}
        <div className="absolute bottom-[-15%] left-[-10%] w-[60%] md:w-[45%] aspect-square z-0">
             <svg viewBox="0 0 500 500" className="w-full h-full">
                 <path 
                    d="M0,500 L0,200 Q200,50 350,150 Q500,250 300,500 Z" 
                    fill="#FB7175" 
                 />
             </svg>
        </div>

        {/* 3. Green Leaves (Bottom Left Overlay) */}
        <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] z-10 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                 {/* Main Stem */}
                <path d="M0,200 Q80,140 160,40" stroke="#00897B" strokeWidth="6" strokeLinecap="round" fill="none"/>
                
                {/* Minimalist modern leaves to match reference */}
                <path d="M40,165 Q10,140 20,110 Q50,120 60,150 Z" fill="#00897B" />
                <path d="M70,145 Q80,100 120,90 Q90,120 75,135 Z" fill="#00897B" />
                <path d="M85,120 Q110,80 150,70 Q120,105 95,115 Z" fill="#00897B" />
                <path d="M50,185 Q10,160 25,130 Q60,140 70,170 Z" fill="#00897B" />
            </svg>
        </div>


      {/* ================= CONTENT ================= */}

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: Text & CTA */}
          <div className="flex-1 space-y-8 max-w-xl relative pt-10 md:pt-0">
            
            {/* Main Title with Heavy Text Shadow */}
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white"
                style={{
                    textShadow: '4px 4px 8px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.1)'
                }}
            >
              Aquí puedes<br/>
              <span className="font-kaushan md:mt-[-0.2em] md:mb-[-0.1em] lowercase text-[1.1em] block tracking-normal" style={{ color: 'white', textShadow: '4px 4px 8px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.1)' }}>personalizar</span>
              tu tablú
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-lg font-medium pr-8"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              (Los tablús personalizados no aplican al descuento de 10%)
            </motion.p>



            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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


          {/* RIGHT COLUMN: Single Image Slot */}
          <div className="flex-1 w-full relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full min-h-[400px] md:min-h-[500px] z-20"
             >
                {/* 
                  IMPORTANT: The user should upload their new banner graphic (without the left text) 
                  to the path specified below. It will replace the hardcoded UI elements cleanly.
                */}
                <Image 
                    src="/images/banner-tablu-nuevo.png" // User please place your exported image here
                    alt="Collage de tablús personalizados"
                    fill
                    className="object-contain object-center md:object-right"
                />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
