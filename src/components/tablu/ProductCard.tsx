'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MessageCircle, Sparkles, Magnet, Check } from 'lucide-react';
import type { TabluProduct } from '@/data/tablu-catalog';

/**
 * Tablú Product Card
 *
 * Features:
 * - Product image display
 * - Name, description, and pricing
 * - Available sizes
 * - Key features list
 * - WhatsApp CTA with pre-filled message
 * - Material badge (Acrylic/Magnetic)
 * - Hover effects
 * - Follows Sierra style guide
 */

interface ProductCardProps {
  product: TabluProduct;
  className?: string;
  index?: number;
}

export function ProductCard({ product, className, index = 0 }: ProductCardProps) {
  const whatsappNumber = '59167710595';
  const whatsappMessage = encodeURIComponent(
    `Hola, quiero realizar un pedido de ${product.name}, tamaño [XX], cantidad [X]. ¿Podrían confirmarme disponibilidad?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        'group relative flex flex-col rounded-2xl bg-white overflow-hidden',
        'shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
        'transition-all duration-300',
        'hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1',
        className
      )}
    >
      {/* Material Badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
        {product.material === 'acrylic' && (
          <>
            <Sparkles className="h-3.5 w-3.5 text-[#5762A2]" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs font-medium text-[#1a1a1a]">Acrílico</span>
          </>
        )}
        {product.material === 'magnetic' && (
          <>
            <Magnet className="h-3.5 w-3.5 text-[#5762A2]" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs font-medium text-[#1a1a1a]">Magnético</span>
          </>
        )}
        {product.material === 'both' && (
          <>
            <Sparkles className="h-3.5 w-3.5 text-[#5762A2]" strokeWidth={1.5} aria-hidden="true" />
            <Magnet className="h-3.5 w-3.5 text-[#5762A2]" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs font-medium text-[#1a1a1a]">Ambos</span>
          </>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-[#ebe8e3]/30 to-[#ebe8e3]/10 overflow-hidden">
        {/* Placeholder gradient with icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-3 p-6">
            <div className="inline-flex p-4 rounded-full bg-[#5762A2]/10">
              <Sparkles className="h-12 w-12 text-[#5762A2]/60" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <p className="text-[15px] font-medium text-[#6b6b6b]">{product.name}</p>
          </div>
        </div>

        {/* If you have actual product images: */}
        {/* {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )} */}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#5762A2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-6">
        {/* Name Only */}
        <div className="flex items-center justify-center h-full">
          <h3 className="text-xl font-medium text-[#1a1a1a] text-center group-hover:text-[#5762A2] transition-colors">
            {product.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
