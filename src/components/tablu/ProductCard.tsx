'use client';

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
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ProductCardProps {
  product: TabluProduct;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const whatsappNumber = '59167710595';
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name}. ¿Podrías darme más información sobre precios y disponibilidad?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-lg border border-border bg-background overflow-hidden',
        'transition-all duration-300',
        'hover:shadow-xl hover:-translate-y-1 hover:border-marca-beige/50',
        className
      )}
    >
      {/* Material Badge */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-marca-beige/30 shadow-md">
        {product.material === 'acrylic' && (
          <>
            <Sparkles className="h-3.5 w-3.5 text-marca-beige" aria-hidden="true" />
            <span className="text-xs font-semibold text-marca-beige">Acrílico</span>
          </>
        )}
        {product.material === 'magnetic' && (
          <>
            <Magnet className="h-3.5 w-3.5 text-marca-steel" aria-hidden="true" />
            <span className="text-xs font-semibold text-marca-steel">Magnético</span>
          </>
        )}
        {product.material === 'both' && (
          <>
            <Sparkles className="h-3.5 w-3.5 text-marca-beige" aria-hidden="true" />
            <Magnet className="h-3.5 w-3.5 text-marca-steel" aria-hidden="true" />
            <span className="text-xs font-semibold text-foreground">Ambos</span>
          </>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-marca-beige/20 to-marca-beige/5 overflow-hidden">
        {/* Placeholder gradient with icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-3 p-6">
            <div className="inline-flex p-4 rounded-full bg-marca-beige/10">
              <Sparkles className="h-12 w-12 text-marca-beige/60" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">{product.name}</p>
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
        <div className="absolute inset-0 bg-marca-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-5 space-y-4">
        {/* Name and Description */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-marca-beige transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price Range */}
        <div className="pt-3 border-t border-border">
          <p className="text-sm font-semibold text-muted-foreground mb-1">Precio:</p>
          <p className="text-xl font-bold text-marca-beige">{product.priceRange}</p>
        </div>

        {/* Available Sizes */}
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-2">Tamaños disponibles:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground border border-border"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-2">Características:</p>
          <ul className="space-y-1.5">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-marca-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          {product.features.length > 3 && (
            <p className="text-xs text-muted-foreground mt-2 italic">
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
              'flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold w-full',
              'bg-[#25D366] text-white shadow-md',
              'transition-all duration-200',
              'hover:bg-[#25D366]/90 hover:shadow-lg hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Consultar Disponibilidad
          </a>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-marca-beige/10 text-marca-beige"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
