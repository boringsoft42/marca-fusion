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
    <section className={cn('relative py-24 md:py-32 overflow-hidden bg-[#FFFDE7]', className)}>
      {/* ================= BACKGROUND LAYERS ================= */}

        {/* 1. Yellow Wave (Right Side) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <svg 
                viewBox="0 0 1440 900" 
                className="w-full h-full absolute top-0 left-0"
                preserveAspectRatio="none"
            >
                <path 
                    d="M600,0 C750,0 800,200 650,450 C500,700 800,900 1440,900 L1440,0 Z" 
                    fill="#FFC107" // Deep yellow
                    className="md:block hidden"
                />
                 {/* Mobile version simple background */}
                <rect width="100%" height="100%" fill="#FFC107" className="md:hidden" />
            </svg>
        </div>

        {/* 2. Blue Abstract Shape (Top Left) */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[45%] aspect-square z-1">
            <svg viewBox="0 0 500 500" className="w-full h-full">
                <path 
                    d="M0,0 L400,0 Q450,200 300,350 Q150,500 0,400 Z" 
                    fill="#5762A2"
                />
                {/* Yellow Polka Dots */}
                <circle cx="50" cy="50" r="15" fill="#FFC107" />
                 <circle cx="150" cy="80" r="20" fill="#FFC107" />
                 <circle cx="300" cy="60" r="15" fill="#FFC107" />
                 <circle cx="80" cy="180" r="12" fill="#FFC107" />
                 <circle cx="220" cy="200" r="25" fill="#FFC107" />
                 <circle cx="350" cy="180" r="10" fill="#FFC107" />
                 <circle cx="50" cy="300" r="18" fill="#FFC107" />
                 <circle cx="180" cy="320" r="15" fill="#FFC107" />
            </svg>
        </div>

        {/* 3. Pink Blob (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] md:w-[35%] aspect-square z-1">
             <svg viewBox="0 0 500 500" className="w-full h-full">
                 <path 
                    d="M0,500 L0,200 Q200,100 350,250 Q500,400 300,500 Z" 
                    fill="#FF7777" 
                 />
             </svg>
        </div>

        {/* 4. Green Leaves (Bottom Left Overlay) */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] z-10 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
                 {/* Main Stem */}
                <path d="M0,200 Q50,150 100,50" stroke="#00897B" strokeWidth="3" fill="none"/>
                
                {/* Leaves */}
                <path d="M40,160 Q10,140 20,120 Q50,130 60,150" fill="#00897B" />
                <path d="M50,140 Q80,110 70,90 Q40,110 30,130" fill="#00897B" />
                <path d="M60,110 Q90,80 110,90 Q90,120 60,120" fill="#00897B" />
                <path d="M80,80 Q50,60 60,40 Q90,50 90,80" fill="#00897B" />
                <path d="M90,60 Q120,40 130,60 Q110,90 90,70" fill="#00897B" />
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
                className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] text-white"
                style={{
                    textShadow: '4px 4px 8px rgba(0,0,0,0.4), 0 0 20px rgba(0,0,0,0.1)'
                }}
            >
              Aquí<br/>
              puedes<br/>
              personalizar<br/>
              tu tablú
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-white font-medium max-w-md"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
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


          {/* RIGHT COLUMN: Collage Images */}
          <div className="flex-1 w-full relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
             
             {/* 1. Family Calendar (Top Center/Left) */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                transition={{ duration: 0.7 }}
                className="absolute top-0 left-[15%] w-[65%] z-20 shadow-2xl rounded-sm overflow-hidden border-[6px] border-white/50 backdrop-blur-sm bg-white/30"
             >
                <div className="relative aspect-[4/3]">
                     {/* Using a specific family-like image */}
                    <Image 
                        src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=800&q=80" 
                        alt="Family Planner Custom" 
                        fill
                        className="object-cover opacity-90"
                    />
                    {/* Overlay Grid lines to simulate planner */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 border-2 border-white/40 m-4 rounded">
                         <div className="border-r border-b border-white/40 bg-white/10"></div>
                         <div className="border-r border-b border-white/40 bg-white/10"></div>
                         <div className="border-r border-b border-white/40 bg-white/10"></div>
                         <div className="border-b border-white/40 bg-white/10"></div>
                    </div>
                    <div className="absolute top-2 w-full text-center font-bold text-white text-xl drop-shadow-md font-handwriting">Mi Semana</div>
                </div>
             </motion.div>

             {/* 2. Dog To Do List (Top Right) */}
             <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute top-[-20px] right-[5%] w-[40%] z-30 shadow-2xl rounded-sm overflow-hidden border-[5px] border-white"
             >
                 <div className="relative aspect-[3/5] bg-[#5FB4E5]">
                    <Image 
                        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80"
                        alt="Dog Planner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-4 w-full text-center text-white font-bold text-lg drop-shadow-md">To do list</div>
                    {/* Lines */}
                    <div className="absolute bottom-4 left-4 right-4 space-y-3">
                         <div className="h-0.5 bg-white/60 w-full mb-2"></div>
                         <div className="h-0.5 bg-white/60 w-full mb-2"></div>
                         <div className="h-0.5 bg-white/60 w-full mb-2"></div>
                    </div>
                 </div>
             </motion.div>

             {/* 3. Small Tablu Pad (Bottom Center) */}
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute bottom-[20%] left-[20%] w-[50%] z-40 bg-white p-1 shadow-xl rounded-md border border-gray-200 transform -rotate-2"
             >
                 <div className="border border-gray-100 p-2 rounded relative">
                     <span className="absolute top-0 right-2 text-red-500 font-bold text-xs">TABLÚ</span>
                     <div className="space-y-2 mt-4">
                         <div className="flex gap-2"><div className="w-4 h-4 border rounded"></div><div className="h-4 bg-gray-100 w-full rounded"></div></div>
                         <div className="flex gap-2"><div className="w-4 h-4 border rounded"></div><div className="h-4 bg-gray-100 w-full rounded"></div></div>
                         <div className="flex gap-2"><div className="w-4 h-4 border rounded"></div><div className="h-4 bg-gray-100 w-full rounded"></div></div>
                     </div>
                 </div>
             </motion.div>

             {/* 4. Laptop (Bottom Right) */}
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute bottom-0 right-0 w-[55%] z-10"
             >
                 <Image 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                    alt="Laptop Workspace"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-xl"
                 />
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
