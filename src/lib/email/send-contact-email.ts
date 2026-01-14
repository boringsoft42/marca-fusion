import nodemailer from 'nodemailer';
import type { ContactFormData } from '@/lib/validations/contact-schema';
import { getEmailRecipient } from '@/lib/validations/contact-schema';

/**
 * Send Contact Form Email using Nodemailer + SMTP
 *
 * VENTAJAS:
 * - ✅ SIN crear cuentas externas
 * - ✅ USA el servidor de email que YA TIENEN (marcafusion.com.bo)
 * - ✅ Solo necesitas usuario y contraseña del email corporativo
 * - ✅ Gratis y sin límites (usa tu propio servidor)
 *
 * CONFIGURACIÓN REQUERIDA EN .env.local:
 * - SMTP_HOST: mail.marcafusion.com.bo (o el que te dé tu proveedor)
 * - SMTP_PORT: 465 (SSL) o 587 (TLS)
 * - SMTP_USER: info@marcafusion.com.bo (email existente)
 * - SMTP_PASS: contraseña del email
 */

export interface SendContactEmailOptions {
  data: ContactFormData;
}

export interface SendContactEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

const motivoLabels: Record<string, string> = {
  cliente: 'Soy cliente y deseo atención o información',
  informacion: 'Deseo información sobre productos',
  cotizacion: 'Deseo una cotización',
  otro: 'Otro motivo',
};

export async function sendContactEmail({
  data,
}: SendContactEmailOptions): Promise<SendContactEmailResult> {
  try {
    // Validate SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('SMTP is not configured. Missing environment variables.');
      return {
        success: false,
        error: 'Email service not configured. Please contact support.',
      };
    }

    // Determine recipient based on motivo
    const recipient = getEmailRecipient(data.motivo);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email HTML template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0D6832; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0D6832; }
    .value { margin-top: 5px; }
    .footer { background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px; }
    .divider { border-top: 2px solid #0D6832; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Nuevo Mensaje de Contacto</h1>
      <p style="margin: 5px 0 0 0;">Formulario Web - Marca Fusión</p>
    </div>

    <div class="content">
      <div class="field">
        <div class="label">👤 Nombre:</div>
        <div class="value">${data.nombre}</div>
      </div>

      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>

      <div class="field">
        <div class="label">📱 Teléfono/WhatsApp:</div>
        <div class="value"><a href="https://wa.me/${data.telefono.replace(/\D/g, '')}">${data.telefono}</a></div>
      </div>

      ${data.empresa ? `
      <div class="field">
        <div class="label">🏢 Empresa:</div>
        <div class="value">${data.empresa}</div>
      </div>
      ` : ''}

      <div class="field">
        <div class="label">🌆 Ciudad:</div>
        <div class="value">${data.ciudad}</div>
      </div>

      <div class="field">
        <div class="label">🌍 País:</div>
        <div class="value">${data.pais}</div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <div class="label">📋 Motivo del Contacto:</div>
        <div class="value">${motivoLabels[data.motivo] || data.motivo}</div>
      </div>

      <div class="field">
        <div class="label">💬 Mensaje:</div>
        <div class="value" style="background: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.mensaje}</div>
      </div>
    </div>

    <div class="footer">
      <p>Este mensaje fue enviado desde el formulario de contacto en <a href="https://www.marcafusion.com.bo/contacto">marcafusion.com.bo</a></p>
      <p>Para responder, simplemente responde a este email.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Formulario Web Marca Fusión" <${smtpUser}>`,
      to: recipient,
      replyTo: data.email,
      subject: `Nuevo Contacto - ${motivoLabels[data.motivo]} - ${data.nombre}`,
      html: htmlContent,
      text: `
Nuevo mensaje de contacto desde Marca Fusión

Nombre: ${data.nombre}
Email: ${data.email}
Teléfono/WhatsApp: ${data.telefono}
${data.empresa ? `Empresa: ${data.empresa}` : ''}
Ciudad: ${data.ciudad}
País: ${data.pais}

Motivo: ${motivoLabels[data.motivo]}

Mensaje:
${data.mensaje}

---
Enviado desde: https://www.marcafusion.com.bo/contacto
      `.trim(),
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
