import { z } from 'zod';

/**
 * Contact Form Validation Schema
 *
 * Fields:
 * - nombre: Full name (required, min 2 chars)
 * - email: Valid email address (required)
 * - telefono: Phone number (optional)
 * - empresa: Company name (optional)
 * - ciudad: City (optional)
 * - pais: Country (optional)
 * - motivo: Contact reason (required, dropdown)
 * - mensaje: Message (required, min 10 chars)
 * - honeypot: Anti-spam field (should be empty)
 */

export const motivoOptions = [
  { value: 'cotizacion', label: 'Deseo una cotización' },
  { value: 'informacion', label: 'Deseo información sobre productos' },
] as const;

export type MotivoValue = (typeof motivoOptions)[number]['value'];

export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),

  email: z
    .string()
    .email('Ingrese un correo electrónico válido')
    .toLowerCase()
    .trim(),

  telefono: z
    .string()
    .min(1, 'El teléfono/WhatsApp es requerido')
    .trim(),

  empresa: z
    .string()
    .optional()
    .transform((val) => val?.trim()),

  ciudad: z
    .string()
    .min(1, 'La ciudad es requerida')
    .trim(),

  pais: z
    .string()
    .min(1, 'El país es requerido')
    .trim(),

  motivo: z.enum(['cotizacion', 'informacion'], {
    errorMap: () => ({ message: 'Seleccione un motivo de contacto' }),
  }),

  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres')
    .trim(),

  // Honeypot field for spam prevention (should always be empty)
  _honeypot: z.string().max(0, 'Spam detected').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Determine email routing based on motivo
 * - cotizacion → ventas@marcafusion.com.bo
 * - informacion → info@marcafusion.com.bo
 */
export function getEmailRecipient(motivo: MotivoValue): string {
  if (motivo === 'cotizacion') {
    return process.env.NEXT_PUBLIC_EMAIL_VENTAS || 'ventas@marcafusion.com.bo';
  }
  return process.env.NEXT_PUBLIC_EMAIL_INFO || 'info@marcafusion.com.bo';
}
