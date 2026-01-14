'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { contactSchema, motivoOptions, type ContactFormData } from '@/lib/validations/contact-schema';

/**
 * Contact Form Component
 *
 * Features:
 * - React Hook Form with Zod validation
 * - Dropdown for "Motivo del contacto"
 * - Sends form data directly to WhatsApp (no email integration needed)
 * - Inline error messages
 * - Success message
 * - Honeypot anti-spam field
 * - Follows STYLE-GUIDE.md design patterns
 */

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formState, setFormState] = useState({
    isSuccess: false,
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

  const motivoLabels: Record<string, string> = {
    cliente: 'Soy cliente y deseo atención o información',
    informacion: 'Deseo información sobre productos',
    cotizacion: 'Deseo una cotización',
    otro: 'Otro motivo',
  };

  const onSubmit = (data: ContactFormData) => {
    // Check honeypot
    if (data._honeypot) {
      return;
    }

    // Build WhatsApp message
    const motivoText = motivoLabels[data.motivo] || data.motivo;
    const message = `*CONTACTO DESDE WEB - MARCA FUSIÓN*

👤 *Nombre:* ${data.nombre}
📧 *Email:* ${data.email}
📱 *Teléfono:* ${data.telefono}
${data.empresa ? `🏢 *Empresa:* ${data.empresa}` : ''}
🌆 *Ciudad:* ${data.ciudad}
🌍 *País:* ${data.pais}

📋 *Motivo:* ${motivoText}

💬 *Mensaje:*
${data.mensaje}`;

    // Determine WhatsApp number based on motivo
    const whatsappNumber = data.motivo === 'cotizacion'
      ? process.env.NEXT_PUBLIC_WHATSAPP_GENERAL || '59172136767'
      : process.env.NEXT_PUBLIC_WHATSAPP_GENERAL || '59172136767';

    // Build WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Show success message
    setFormState({ isSuccess: true });
    reset();

    // Open WhatsApp in new tab after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setFormState({ isSuccess: false });
    }, 5000);
  };

  return (
    <div className={cn('', className)}>
      {/* Success Message */}
      {formState.isSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-marca-green/10 border border-marca-green/30 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-marca-green flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="font-semibold text-marca-green mb-1">✅ Abriendo WhatsApp...</h4>
            <p className="text-sm text-muted-foreground">
              Tu mensaje será enviado por WhatsApp a nuestro equipo. Si no se abre automáticamente, por favor verifica tu navegador.
            </p>
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

          {/* Teléfono / WhatsApp */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
              Teléfono / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              id="telefono"
              type="tel"
              {...register('telefono')}
              className={cn(
                'w-full px-4 py-3 rounded-md border bg-background text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
                errors.telefono ? 'border-red-500' : 'border-border'
              )}
              placeholder="+591 72136767"
            />
            {errors.telefono && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {errors.telefono.message}
              </p>
            )}
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
              Ciudad <span className="text-red-500">*</span>
            </label>
            <input
              id="ciudad"
              type="text"
              {...register('ciudad')}
              className={cn(
                'w-full px-4 py-3 rounded-md border bg-background text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
                errors.ciudad ? 'border-red-500' : 'border-border'
              )}
              placeholder="Santa Cruz"
            />
            {errors.ciudad && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {errors.ciudad.message}
              </p>
            )}
          </div>

          {/* País */}
          <div>
            <label htmlFor="pais" className="block text-sm font-semibold text-foreground mb-2">
              País <span className="text-red-500">*</span>
            </label>
            <input
              id="pais"
              type="text"
              {...register('pais')}
              className={cn(
                'w-full px-4 py-3 rounded-md border bg-background text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-marca-green focus:border-transparent',
                errors.pais ? 'border-red-500' : 'border-border'
              )}
              placeholder="Bolivia"
            />
            {errors.pais && (
              <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {errors.pais.message}
              </p>
            )}
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
            className={cn(
              'w-full inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide',
              'bg-[#0D6832] text-white',
              'transition-all duration-200',
              'hover:bg-[#0a5528]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D6832] focus-visible:ring-offset-2'
            )}
          >
            💬 Enviar por WhatsApp
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
