# Configuración de EmailJS para Formulario de Contacto

EmailJS es **MUCHO MÁS FÁCIL** que Resend porque:
- ✅ No requiere verificación de dominio
- ✅ Plan gratuito: 200 emails/mes
- ✅ Setup en 5 minutos
- ✅ Usa tu propio Gmail u Outlook

---

## Paso 1: Crear Cuenta en EmailJS

1. Ve a **https://www.emailjs.com/**
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea una cuenta con tu email (puedes usar Gmail)
4. Verifica tu email

---

## Paso 2: Agregar Servicio de Email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado - más fácil)
   - Outlook
   - Yahoo
   - Otro
4. Sigue las instrucciones para conectar tu cuenta
5. **Copia el Service ID** que aparece (ejemplo: `service_abc123`)

---

## Paso 3: Crear Template de Email

1. Ve a **"Email Templates"** en el dashboard
2. Haz clic en **"Create New Template"**
3. **COPIA Y PEGA** este template exacto:

```
Asunto del Email:
Nuevo Contacto - {{motivo}} - {{from_name}}

Contenido del Email:
Has recibido un nuevo mensaje desde el formulario de contacto de Marca Fusión.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMACIÓN DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nombre: {{from_name}}
📧 Email: {{from_email}}
📱 Teléfono/WhatsApp: {{telefono}}
🏢 Empresa: {{empresa}}
🌆 Ciudad: {{ciudad}}
🌍 País: {{pais}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 MOTIVO DEL CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{motivo}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MENSAJE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{mensaje}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este mensaje fue enviado desde: https://www.marcafusion.com.bo/contacto

Para responder, simplemente responde a este email.
```

4. En **"To Email"**, pon: `{{to_email}}`
5. En **"From Name"**, pon: `Marca Fusión - Formulario Web`
6. En **"Reply To"**, pon: `{{reply_to}}`
7. Haz clic en **"Save"**
8. **Copia el Template ID** (ejemplo: `template_xyz789`)

---

## Paso 4: Obtener Public Key

1. Ve a **"Account"** en el menú
2. En la sección **"General"**, encontrarás tu **Public Key**
3. **Copia el Public Key** (ejemplo: `AbCdEfGhIjKlMnOp`)

---

## Paso 5: Actualizar Variables de Entorno

Abre el archivo `.env.local` y reemplaza los valores placeholder:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

**IMPORTANTE**: Estos son tus valores reales de EmailJS, no copies los ejemplos de arriba.

---

## Paso 6: Reiniciar el Servidor de Desarrollo

```bash
# Detén el servidor (Ctrl+C) y reinicia
npm run dev
```

---

## Paso 7: Probar el Formulario

1. Ve a http://localhost:3000/contacto
2. Llena el formulario con datos de prueba
3. Haz clic en "📩 Enviar mensaje"
4. Deberías ver el mensaje de éxito
5. Revisa tu email (el que configuraste en EmailJS)

---

## Enrutamiento de Emails

El sistema enviará automáticamente a:

- **ventas@marcafusion.com.bo** → Si el motivo es "Deseo una cotización"
- **info@marcafusion.com.bo** → Para todos los demás motivos

Para que esto funcione, asegúrate de que estas direcciones estén configuradas en `.env.local`:

```env
NEXT_PUBLIC_EMAIL_INFO=info@marcafusion.com.bo
NEXT_PUBLIC_EMAIL_VENTAS=ventas@marcafusion.com.bo
```

---

## Solución de Problemas

### ❌ El email no llega

1. Verifica que copiaste correctamente los 3 IDs
2. Revisa la carpeta de SPAM
3. Verifica que el servicio de email esté activo en EmailJS
4. Revisa la consola del navegador (F12) por errores

### ❌ Error "Email service not configured"

- Asegúrate de reiniciar el servidor después de editar `.env.local`
- Verifica que los nombres de las variables sean exactos (con NEXT_PUBLIC_)

### ❌ Límite de emails alcanzado

- Plan gratuito: 200 emails/mes
- Puedes actualizar a plan pagado si necesitas más

---

## ¿Necesitas Ayuda?

- Documentación oficial: https://www.emailjs.com/docs/
- Video tutorial: https://www.youtube.com/watch?v=dgcYOm8n8ME
- Soporte EmailJS: support@emailjs.com
