import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { metadata as metadataUtils } from '@/lib/seo/metadata';
import { cn } from '@/lib/utils';

/**
 * Custom 404 Not Found Page
 *
 * Features:
 * - Branded error message in Spanish
 * - Navigation links to main pages
 * - Search-friendly (noindex)
 * - Consistent brand styling
 */

export const metadata = metadataUtils.notFound();

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-marca-green/5 px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1
            className={cn(
              'text-[12rem] md:text-[16rem] font-bold leading-none',
              'bg-gradient-to-br from-marca-green to-marca-green/60',
              'bg-clip-text text-transparent',
              'select-none'
            )}
          >
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-marca-green" />
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Página No Encontrada
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida. Explora nuestro sitio
            para encontrar lo que necesitas.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
              'bg-marca-green text-white font-semibold',
              'hover:bg-marca-green/90 transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2',
              'shadow-lg hover:shadow-xl hover:scale-105'
            )}
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>

          <Link
            href="/contacto"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
              'border-2 border-marca-green text-marca-green font-semibold',
              'hover:bg-marca-green hover:text-white transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
            )}
          >
            <Search className="w-5 h-5" />
            Contáctanos
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">¿Buscas algo específico?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/capstone"
              className="text-sm text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Capstone Green Energy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/tablu"
              className="text-sm text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Tablú Bolivia
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/sectores"
              className="text-sm text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Sectores
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/alianzas"
              className="text-sm text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Alianzas
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/nosotros"
              className="text-sm text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
