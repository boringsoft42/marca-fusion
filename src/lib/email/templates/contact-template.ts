import type { ContactFormData } from '@/lib/validations/contact-schema';
import { motivoOptions } from '@/lib/validations/contact-schema';

/**
 * Contact Form Email Template
 *
 * Features:
 * - Branded HTML email
 * - All form fields included
 * - Professional layout
 * - Responsive design
 */

export function contactEmailTemplate(data: ContactFormData): string {
  // Get motivo label
  const motivoLabel =
    motivoOptions.find((option) => option.value === data.motivo)?.label || data.motivo;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Contacto - Marca Fusión</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
      color: #ffffff;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .content {
      padding: 30px;
    }
    .badge {
      display: inline-block;
      padding: 6px 12px;
      background-color: #dcfce7;
      color: #15803d;
      border-radius: 999px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: #6b7280;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 16px;
      color: #111827;
      font-weight: 500;
    }
    .message-box {
      background-color: #f9fafb;
      border-left: 4px solid #16a34a;
      padding: 16px;
      border-radius: 4px;
      margin-top: 10px;
    }
    .message-box p {
      margin: 0;
      color: #374151;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      background-color: #f9fafb;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }
    .footer a {
      color: #16a34a;
      text-decoration: none;
    }
    .divider {
      height: 1px;
      background-color: #e5e7eb;
      margin: 24px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🔔 Nuevo Contacto</h1>
      <p style="margin: 8px 0 0; opacity: 0.9;">Marca Fusión - Formulario de Contacto</p>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Motivo Badge -->
      <div class="badge">
        ${motivoLabel}
      </div>

      <!-- Contact Information -->
      <div class="field">
        <div class="field-label">Nombre completo</div>
        <div class="field-value">${data.nombre}</div>
      </div>

      <div class="field">
        <div class="field-label">Correo electrónico</div>
        <div class="field-value">
          <a href="mailto:${data.email}" style="color: #16a34a; text-decoration: none;">${data.email}</a>
        </div>
      </div>

      ${
        data.telefono
          ? `
      <div class="field">
        <div class="field-label">Teléfono</div>
        <div class="field-value">
          <a href="tel:${data.telefono}" style="color: #16a34a; text-decoration: none;">${data.telefono}</a>
        </div>
      </div>
      `
          : ''
      }

      ${
        data.empresa
          ? `
      <div class="field">
        <div class="field-label">Empresa</div>
        <div class="field-value">${data.empresa}</div>
      </div>
      `
          : ''
      }

      ${
        data.ciudad || data.pais
          ? `
      <div class="field">
        <div class="field-label">Ubicación</div>
        <div class="field-value">
          ${[data.ciudad, data.pais].filter(Boolean).join(', ')}
        </div>
      </div>
      `
          : ''
      }

      <div class="divider"></div>

      <!-- Message -->
      <div class="field">
        <div class="field-label">Mensaje</div>
        <div class="message-box">
          <p>${data.mensaje}</p>
        </div>
      </div>

      <!-- Call to Action -->
      <div style="margin-top: 30px; padding: 16px; background-color: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
        <p style="margin: 0; color: #92400e; font-size: 14px;">
          <strong>⚡ Acción requerida:</strong> Por favor responde a este contacto a la brevedad.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p style="margin: 0 0 8px;">
        <strong>Marca Fusión SRL</strong>
      </p>
      <p style="margin: 0;">
        Santa Cruz de la Sierra, Bolivia
      </p>
      <p style="margin: 8px 0 0;">
        <a href="https://www.marcafusion.com.bo">www.marcafusion.com.bo</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
