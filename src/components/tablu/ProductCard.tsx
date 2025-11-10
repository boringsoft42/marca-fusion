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
    `Hola! Me interesa el producto: ${product.name}. ¿Podrías darme más información sobre precios y disponibilidad?`
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
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Name and Description */}
        <div>
          <h3 className="text-xl font-medium text-[#1a1a1a] mb-2 line-clamp-2 group-hover:text-[#5762A2] transition-colors">
            {product.name}
          </h3>
          <p className="text-[15px] text-[#6b6b6b] leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price Range */}
        <div className="pt-3 border-t border-[#e0e0e0]">
          <p className="text-[15px] font-medium text-[#6b6b6b] mb-1">Precio:</p>
          <p className="text-xl font-medium text-[#5762A2]">{product.priceRange}</p>
        </div>

        {/* Available Sizes */}
        <div>
          <p className="text-[15px] font-medium text-[#6b6b6b] mb-2">Tamaños disponibles:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <span
                key={index}
                className="px-3 py-1 text-[15px] font-normal rounded-full bg-[#ebe8e3] text-[#1a1a1a]"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="text-[15px] font-medium text-[#6b6b6b] mb-2">Características:</p>
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-[15px]">
                <Check className="h-4 w-4 text-[#5762A2] flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-[#6b6b6b]">{feature}</span>
              </li>
            ))}
          </ul>
          {product.features.length > 3 && (
            <p className="text-[15px] text-[#6b6b6b] mt-2 italic">
              +{product.features.length - 3} características más
            </p>
          )}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-auto pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium w-full',
              'bg-[#5762A2] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
              'transition-all duration-200',
              'hover:bg-[#4A5BA8] hover:shadow-lg',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5762A2] focus-visible:ring-offset-2'
            )}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            Consultar Disponibilidad
          </a>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#5762A2]/10 text-[#5762A2]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
