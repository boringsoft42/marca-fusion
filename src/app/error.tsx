'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Custom Error Page
 *
 * Features:
 * - Catches runtime errors
 * - Branded error message in Spanish
 * - Reset functionality
 * - Contact information for support
 * - Client component for interactivity
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-red-500/5 px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-20 bg-red-500 rounded-full" />
            <div
              className={cn(
                'relative p-6 rounded-full',
                'bg-gradient-to-br from-red-100 to-red-50',
                'border-4 border-red-200'
              )}
            >
              <AlertTriangle className="w-16 h-16 text-red-500" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            ¡Algo salió mal!
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Ocurrió un error inesperado. Por favor intenta nuevamente o contáctanos si el problema
            persiste.
          </p>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700 font-mono break-words">{error.message}</p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button
            onClick={reset}
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
              'bg-marca-green text-white font-semibold',
              'hover:bg-marca-green/90 transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2',
              'shadow-lg hover:shadow-xl hover:scale-105'
            )}
          >
            <RefreshCw className="w-5 h-5" />
            Intentar Nuevamente
          </button>

          <Link
            href="/"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
              'border-2 border-marca-green text-marca-green font-semibold',
              'hover:bg-marca-green hover:text-white transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2'
            )}
          >
            <Home className="w-5 h-5" />
            Volver al Inicio
          </Link>
        </div>

        {/* Contact Support */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">¿Necesitas ayuda?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href="mailto:info@marcafusion.com.bo"
              className="text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              info@marcafusion.com.bo
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a
              href="tel:+59172136767"
              className="text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              +591 72136767
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link
              href="/contacto"
              className="text-marca-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marca-green focus-visible:ring-offset-2 rounded px-2 py-1"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
