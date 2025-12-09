'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import { motion, type HTMLMotionProps } from 'framer-motion';

/**
 * Marca Fusión Client Showcase - Logo Cloud Style
 *
 * Features:
 * - Logo Cloud grid layout with 21st.dev style
 * - Split sections for Capstone and Tablú clients
 * - Clean,minimal design with borders and grid
 * - Framer Motion animations
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
    <section className={cn('bg-white py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
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
            Nuestros Clientes
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
          className="mb-16"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-medium text-marca-green mb-2">
              Clientes Capstone
            </h3>
            <div className="w-16 h-1 bg-marca-green mx-auto rounded-full" />
          </div>

          <div className="relative grid grid-cols-2 border-x md:grid-cols-3 max-w-5xl mx-auto rounded-lg overflow-hidden">
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[#e0e0e0]" />

            {capstoneClients.map((client, index) => (
              <LogoCard
                key={index}
                className={cn(
                  'border-b border-r',
                  (index + 1) % 2 === 0 && 'md:border-r',
                  (index + 1) % 3 === 0 && 'md:border-r-0',
                  index % 2 === 1 && 'border-r-0 md:border-r',
                  index === 0 && 'bg-[#f9f9f9]',
                  index === 2 && 'md:bg-[#f9f9f9]',
                  index === 4 && 'md:bg-[#f9f9f9]'
                )}
                logo={client}
                index={index}
              >
                {index === 0 && (
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#e0e0e0]"
                    strokeWidth={1}
                  />
                )}
                {index === 2 && (
                  <>
                    <PlusIcon
                      className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#e0e0e0]"
                      strokeWidth={1}
                    />
                    <PlusIcon
                      className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-[#e0e0e0]"
                      strokeWidth={1}
                    />
                  </>
                )}
                {index === 4 && (
                  <>
                    <PlusIcon
                      className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-[#e0e0e0]"
                      strokeWidth={1}
                    />
                    <PlusIcon
                      className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-[#e0e0e0]"
                      strokeWidth={1}
                    />
                  </>
                )}
              </LogoCard>
            ))}

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[#e0e0e0]" />
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

          <div className="relative grid grid-cols-2 border-x md:grid-cols-3 max-w-5xl mx-auto rounded-lg overflow-hidden">
            <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-[#e0e0e0]" />

            {tabluClients.map((client, index) => (
              <LogoCard
                key={index}
                className={cn(
                  'border-b border-r',
                  (index + 1) % 2 === 0 && 'md:border-r',
                  (index + 1) % 3 === 0 && 'md:border-r-0',
                  index % 2 === 1 && 'border-r-0 md:border-r',
                  index === 1 && 'bg-[#f9f9f9]',
                  index === 3 && 'md:bg-[#f9f9f9]',
                  index === 5 && 'md:bg-[#f9f9f9]'
                )}
                logo={client}
                index={index}
              />
            ))}

            <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-[#e0e0e0]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type LogoCardProps = Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> & {
  logo: Logo;
  index: number;
  children?: React.ReactNode;
};

function LogoCard({ logo, className, children, index, ...props }: LogoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'flex items-center justify-center bg-white px-4 py-8 md:p-10 relative',
        className
      )}
      {...props}
    >
      {logo.image ? (
        <div className="relative w-full h-20 md:h-24">
          <Image
            src={logo.image}
            alt={logo.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ) : (
        <span className="text-sm md:text-base font-medium text-[#1a1a1a] text-center">
          {logo.name}
        </span>
      )}
      {children}
    </motion.div>
  );
}
