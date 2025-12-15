'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { InfiniteScrollLogos } from '@/components/ui/infinite-scroll-logos';

/**
 * Marca Fusión Client Showcase - Infinite Scroll Logo Carousel
 *
 * Features:
 * - Infinite horizontal scrolling logos
 * - Split sections for Capstone and Tablú clients
 * - Pause on hover
 * - Grayscale to color transition on hover
 * - Modern design similar to 21st.dev cases component
 */

interface ClientShowcaseProps {
  className?: string;
}

type Logo = {
  name: string;
  image: string;
  alt?: string;
};

export function ClientShowcase({ className }: ClientShowcaseProps) {
  const capstoneClients: Logo[] = [
    { name: 'YPFB', image: '/images/1.png', alt: 'YPFB Transporte' },
    { name: 'Petrobras', image: '/images/2.png', alt: 'Petrobras' },
    { name: 'Repsol', image: '/images/3.png', alt: 'Repsol' },
    { name: 'Total Energies', image: '/images/4.png', alt: 'Total Energies' },
    { name: 'Cliente 5', image: '/images/5.png', alt: 'Cliente Capstone 5' },
    { name: 'Cliente 6', image: '/images/6.png', alt: 'Cliente Capstone 6' },
  ];

  const tabluClients: Logo[] = [
    { name: 'Cliente Tablú 1', image: '/images/a.png', alt: 'Cliente Tablú 1' },
    { name: 'Cliente Tablú 2', image: '/images/b.png', alt: 'Cliente Tablú 2' },
    { name: 'Cliente Tablú 3', image: '/images/c.png', alt: 'Cliente Tablú 3' },
    { name: 'Cliente Tablú 4', image: '/images/d.jpg', alt: 'Cliente Tablú 4' },
    { name: 'Cliente Tablú 5', image: '/images/e.png', alt: 'Cliente Tablú 5' },
    { name: 'Cliente Tablú 6', image: '/images/f.jpg', alt: 'Cliente Tablú 6' },
  ];

  return (
    <section className={cn('bg-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-[#e0e0e0]', className)}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-widest">◆ Nuestros Clientes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1a1a1a] mb-3">
            Empresas líderes que <span className="font-bold">confían</span> en nosotros.
          </h2>
          <p className="text-sm md:text-[15px] text-[#716F6C] max-w-2xl leading-relaxed">
            Desde el sector energético hasta el corporativo, brindamos soluciones que generan valor.
          </p>
        </motion.div>

        {/* Capstone Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 pb-8 border-b border-[#e0e0e0]"
        >
          <div className="text-left mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-marca-green mb-2">
              Clientes Capstone
            </h3>
            <div className="w-12 h-1 bg-marca-green rounded-full" />
          </div>

          <InfiniteScrollLogos
            logos={capstoneClients}
            speed="normal"
            direction="left"
          />
        </motion.div>

        {/* Tablú Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-left mb-8">
            <h3 className="text-xl md:text-2xl font-medium text-[#716F6C] mb-2">
              Clientes Tablú
            </h3>
            <div className="w-12 h-1 bg-[#716F6C] rounded-full" />
          </div>

          <InfiniteScrollLogos
            logos={tabluClients}
            speed="normal"
            direction="left"
          />
        </motion.div>
      </div>
    </section>
  );
}
