'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactSchema, motivoOptions, type ContactFormData } from '@/lib/validations/contact-schema';
import type { ContactFormResponse } from '@/types/contact';

/**
 * Contact Form Component
 *
 * Features:
 * - React Hook Form with Zod validation
 * - Dropdown for "Motivo del contacto"
 * - Conditional email routing (cotización → ventas@, else → info@)
 * - Inline error messages
 * - Success/error toast
 * - Loading spinner
 * - Honeypot anti-spam field
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      ciudad: '',
      pais: '',
      motivo: undefined,
      mensaje: '',
      _honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState({ isSubmitting: true, isSuccess: false, isError: false, errorMessage: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ContactFormResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Error al enviar el formulario');
      }

      setFormState({ isSubmitting: false, isSuccess: true, isError: false, errorMessage: '' });
      reset();

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Error desconocido. Por favor intente nuevamente.',
      });
    }
  };

  return (
    <div className={cn('', className)}>
      {/* Success Message */}
      {formState.isSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-marca-green/10 border border-marca-green/30 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-marca-green flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="font-semibold text-marca-green mb-1">¡Gracias por contactarte!</h4>
            <p className="text-sm text-muted-foreground">
              Hemos recibido tu mensaje. Nuestro equipo te responderá a la brevedad.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {formState.isError && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="font-semibold text-red-700 mb-1">Error al enviar</h4>
            <p className="text-sm text-red-600">{formState.errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Grid Layout - 2 columns on md+ */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              id="nombre"
              type="text"
              {...register('nombre')}
              className={cn(
                'w-full px-4 py-3 rounded-md border bg-background text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
                errors.nombre ? 'border-red-500' : 'border-border'
              )}
              placeholder="Juan Pérez"
            />
            {errors.nombre && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={cn(
                'w-full px-4 py-3 rounded-md border bg-background text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
                errors.email ? 'border-red-500' : 'border-border'
              )}
              placeholder="juan@ejemplo.com"
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              {...register('telefono')}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent transition-colors duration-200"
              placeholder="+591 72136767"
            />
          </div>

          {/* Empresa */}
          <div>
            <label htmlFor="empresa" className="block text-sm font-semibold text-foreground mb-2">
              Empresa
            </label>
            <input
              id="empresa"
              type="text"
              {...register('empresa')}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent transition-colors duration-200"
              placeholder="Nombre de la empresa"
            />
          </div>

          {/* Ciudad */}
          <div>
            <label htmlFor="ciudad" className="block text-sm font-semibold text-foreground mb-2">
              Ciudad
            </label>
            <input
              id="ciudad"
              type="text"
              {...register('ciudad')}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent transition-colors duration-200"
              placeholder="Santa Cruz"
            />
          </div>

          {/* País */}
          <div>
            <label htmlFor="pais" className="block text-sm font-semibold text-foreground mb-2">
              País
            </label>
            <input
              id="pais"
              type="text"
              {...register('pais')}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent transition-colors duration-200"
              placeholder="Bolivia"
            />
          </div>
        </div>

        {/* Motivo del contacto - Full width */}
        <div>
          <label htmlFor="motivo" className="block text-sm font-semibold text-foreground mb-2">
            Motivo del contacto <span className="text-red-500">*</span>
          </label>
          <select
            id="motivo"
            {...register('motivo')}
            className={cn(
              'w-full px-4 py-3 rounded-md border bg-background text-foreground',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
              errors.motivo ? 'border-red-500' : 'border-border'
            )}
          >
            <option value="">Seleccionar motivo...</option>
            {motivoOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.motivo && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.motivo.message}
            </p>
          )}
        </div>

        {/* Mensaje - Full width */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-foreground mb-2">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            {...register('mensaje')}
            rows={6}
            className={cn(
              'w-full px-4 py-3 rounded-md border bg-background text-foreground resize-none',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
              errors.mensaje ? 'border-red-500' : 'border-border'
            )}
            placeholder="Describe tu consulta o solicitud..."
          />
          {errors.mensaje && (
            <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              {errors.mensaje.message}
            </p>
          )}
        </div>

        {/* Honeypot - Hidden field for spam prevention */}
        <input
          type="text"
          {...register('_honeypot')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className={cn(
              'w-full inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide',
              'bg-[#0D6832] text-white',
              'transition-all duration-200',
              'hover:bg-[#0a5528]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            {formState.isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </div>

        {/* Form Footer */}
        <p className="text-sm text-muted-foreground text-center">
          Al enviar este formulario, aceptas que procesemos tus datos para responder a tu consulta.
        </p>
      </form>
    </div>
  );
}
