import { Resend } from 'resend';
import type { ContactFormData } from '@/lib/validations/contact-schema';
import { getEmailRecipient } from '@/lib/validations/contact-schema';
import { contactEmailTemplate } from './templates/contact-template';

/**
 * Send Contact Form Email using Resend
 *
 * Features:
 * - Conditional email routing based on motivo
 * - HTML email template
 * - Error handling
 * - Environment variable configuration
 */

export interface SendContactEmailOptions {
  data: ContactFormData;
}

export interface SendContactEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendContactEmail({
  data,
}: SendContactEmailOptions): Promise<SendContactEmailResult> {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return {
        success: false,
        error: 'Email service not configured. Please contact support.',
      };
    }

    // Initialize Resend client (lazy initialization to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Determine recipient based on motivo
    const recipient = getEmailRecipient(data.motivo);

    // Generate email HTML
    const htmlContent = contactEmailTemplate(data);

    // Send email using Resend
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'contacto@marcafusion.com.bo',
      to: recipient,
      replyTo: data.email,
      subject: `Nuevo contacto: ${data.motivo.charAt(0).toUpperCase() + data.motivo.slice(1)} - ${data.nombre}`,
      html: htmlContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return {
        success: false,
        error: 'Failed to send email. Please try again.',
      };
    }

    return {
      success: true,
      messageId: result.data?.id,
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
