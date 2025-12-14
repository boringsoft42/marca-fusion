'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

/**
 * Marca Fusión Client Showcase - Animated Logo Grid
 *
 * Features:
 * - Clean logo grid without borders
 * - Smooth hover animations (21st.dev logos3 style)
 * - Larger logos for better visibility
 * - Split sections for Capstone and Tablú clients
 */

interface ClientShowcaseProps {
  className?: string;
}

type Logo = {
  name: string;
  image: string;
  type: 'capstone' | 'tablu';
};

export function ClientShowcase({ className }: ClientShowcaseProps) {
  const capstoneClients: Logo[] = [
    { name: 'YPFB', image: '/images/1.png', type: 'capstone' },
    { name: 'Petrobras', image: '/images/2.png', type: 'capstone' },
    { name: 'Repsol', image: '/images/3.png', type: 'capstone' },
    { name: 'Total Energies', image: '/images/4.png', type: 'capstone' },
    { name: 'Cliente 5', image: '/images/5.png', type: 'capstone' },
    { name: 'Cliente 6', image: '/images/6.png', type: 'capstone' },
  ];

  const tabluClients: Logo[] = [
    { name: 'Cliente Tablú 1', image: '/images/a.png', type: 'tablu' },
    { name: 'Cliente Tablú 2', image: '/images/b.png', type: 'tablu' },
    { name: 'Cliente Tablú 3', image: '/images/c.png', type: 'tablu' },
    { name: 'Cliente Tablú 4', image: '/images/d.jpg', type: 'tablu' },
    { name: 'Cliente Tablú 5', image: '/images/e.png', type: 'tablu' },
    { name: 'Cliente Tablú 6', image: '/images/f.jpg', type: 'tablu' },
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-normal text-[#1a1a1a] mb-3">
            Nuestros <span className="font-bold">Clientes</span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#716F6C] max-w-2xl mx-auto">
            Empresas líderes que confían en nuestras soluciones
          </p>
        </motion.div>

        {/* Capstone Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 pb-6 border-b border-[#e0e0e0]"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-medium text-marca-green mb-2">
              Clientes Capstone
            </h3>
            <div className="w-16 h-1 bg-marca-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto">
            {capstoneClients.map((client, index) => (
              <LogoCard
                key={index}
                logo={client}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Tablú Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-medium text-[#716F6C] mb-2">
              Clientes Tablú
            </h3>
            <div className="w-16 h-1 bg-[#716F6C] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto">
            {tabluClients.map((client, index) => (
              <LogoCard
                key={index}
                logo={client}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type LogoCardProps = Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> & {
  logo: Logo;
  index: number;
};

function LogoCard({ logo, index, ...props }: LogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group flex items-center justify-center relative"
      {...props}
    >
      {logo.image ? (
        <motion.div
          className="relative w-full h-40 md:h-48 lg:h-56"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={logo.image}
            alt={logo.name}
            fill
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
        </motion.div>
      ) : (
        <span className="text-sm md:text-base font-medium text-[#1a1a1a] text-center">
          {logo.name}
        </span>
      )}
    </motion.div>
  );
}
