import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact-schema';
import { sendContactEmail } from '@/lib/email/send-contact-email';
import type { ContactFormResponse } from '@/types/contact';

/**
 * Contact Form API Route
 *
 * POST /api/contact
 *
 * Features:
 * - Validates form data with Zod
 * - Honeypot spam prevention
 * - Sends email via Resend
 * - Conditional email routing
 * - Error handling
 * - Rate limiting (TODO: implement)
 */

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest): Promise<NextResponse<ContactFormResponse>> {
  try {
    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Datos de formulario inválidos',
          error: validationResult.error.errors.map((e) => e.message).join(', '),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot check - if filled, it's spam
    if (data._honeypot && data._honeypot.length > 0) {
      console.warn('Honeypot triggered - potential spam');
      // Return success to not reveal the honeypot
      return NextResponse.json({
        success: true,
        message: 'Gracias por tu mensaje',
      });
    }

    // Send email
    const emailResult = await sendContactEmail({ data });

    if (!emailResult.success) {
      console.error('Failed to send contact email:', emailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: 'Error al enviar el mensaje',
          error: emailResult.error || 'Error desconocido',
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Gracias por contactarte. Te responderemos a la brevedad.',
    });
  } catch (error) {
    console.error('Contact form API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor',
        error: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}

// Only allow POST method
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
    },
    { status: 405 }
  );
}
