# Product Requirements Document (PRD)
## Marca Fusión SRL - Corporate Website

---

## 1. Introduction/Overview

### Problem Statement
Marca Fusión SRL, a Bolivian company representing national and international brands (Capstone Green Energy and Tablú), currently lacks a digital presence to showcase their products, services, and corporate values. This limits their ability to reach potential B2B and B2C customers, establish credibility, and facilitate business inquiries.

### Solution
Build a modern, bilingual (Spanish/English) corporate website that:
- Showcases the company's two main representations (Capstone and Tablú)
- Provides detailed product information and catalogs
- Enables customer inquiries through integrated contact forms and WhatsApp
- Establishes brand credibility through professional design and corporate messaging
- Serves both industrial/commercial clients (B2B) and individual consumers (B2C)

### Goal
Create a fully functional, production-ready website that serves as the primary digital touchpoint for Marca Fusión SRL, supporting lead generation, brand awareness, and customer education.

---

## 2. Goals

1. **Brand Presence**: Establish a professional online presence for Marca Fusión SRL in the Bolivian market
2. **Lead Generation**: Facilitate customer inquiries through contact forms and WhatsApp integration
3. **Product Showcase**: Provide comprehensive information about Capstone Green Energy and Tablú products
4. **Dual Market Focus**: Effectively serve both B2B (industrial/commercial) and B2C (personal/home) audiences
5. **International Connection**: Highlight the corporate relationship with Altrix Solutions LLC (USA)
6. **SEO Foundation**: Create an SEO-optimized structure for future organic traffic growth
7. **Performance**: Achieve fast load times and excellent Core Web Vitals scores
8. **Multilingual Support**: Support both Spanish (primary) and English languages

---

## 3. User Stories

### Primary Users: B2B (Industrial/Commercial Clients)

**US-B2B-01**: As an industrial operations manager, I want to learn about Capstone microturbines' technical specifications so that I can evaluate if they fit my energy needs.

**US-B2B-02**: As a procurement officer, I want to request a quote for Capstone equipment so that I can compare pricing with other energy solutions.

**US-B2B-03**: As a corporate administrator, I want to explore customized Tablú planners for my team so that I can improve office organization.

**US-B2B-04**: As a potential distributor, I want to understand Marca Fusión's partnership model so that I can evaluate a business collaboration.

### Secondary Users: B2C (Individual Consumers)

**US-B2C-01**: As a home user, I want to browse Tablú planner designs and sizes so that I can choose the best one for my personal organization needs.

**US-B2C-02**: As a student, I want to order a customized planner via WhatsApp so that I can organize my academic schedule.

**US-B2C-03**: As a gift buyer, I want to see corporate/personalized planner options so that I can purchase unique gifts for family or colleagues.

### Tertiary Users: Site Visitors (General Public)

**US-GEN-01**: As a visitor, I want to understand what Marca Fusión does so that I can determine if their services/products are relevant to me.

**US-GEN-02**: As a job seeker, I want to learn about the company's values and team so that I can assess if I'd like to work there.

**US-GEN-03**: As a researcher, I want to access contact information and location details so that I can reach out for inquiries.

---

## 4. Functional Requirements

### 4.1 Site Structure & Navigation

**FR-1.1**: The website must have a persistent header navigation bar with the following menu items:
- Home (Inicio)
- About Us (Nosotros)
- Representations (Representaciones) - dropdown with: Capstone Green Energy, Tablú Bolivia
- Sectors (Sectores)
- Partnerships (Alianzas)
- Contact (Contacto)

**FR-1.2**: The "Representations" menu item must NOT be clickable directly; it must only open a dropdown menu.

**FR-1.3**: The website must have a persistent footer across all pages containing:
- Company contact information (address, phone, email, website)
- Social media links (Facebook, Instagram, LinkedIn)
- Copyright notice mentioning both Marca Fusión SRL (Bolivia) and Altrix Solutions LLC (USA)
- CTA button "Contáctanos ahora" that opens the contact form

**FR-1.4**: The website must support language switching between Spanish (default) and English.

### 4.2 Home Page (Página Inicial)

**FR-2.1**: Must display a hero section with:
- Large headline: "Conectamos Bolivia con marcas nacionales e internacionales que impulsan innovación, sostenibilidad y confianza."
- Subtitle: "Representantes exclusivos de Capstone Green Energy y Tablú para Bolivia"
- Background image: modern industrial/clean energy plant with 40% green overlay
- Visual design must use corporate green and gray color palette

**FR-2.2**: Must display a "Representaciones" summary block with:
- Brief description of both Capstone Green Energy and Tablú
- Two CTA buttons: "Conocer Capstone" and "Ver Catálogo Tablú" linking to respective pages
- Split visual: left side showing industrial/energy equipment, right side showing planners

**FR-2.3**: Must display "Grupo Corporativo" section featuring:
- Explanation of the Marca Fusión - Altrix Solutions corporate relationship
- Both company logos displayed side by side
- Animated connection line/map showing USA-Bolivia connection
- CTA button linking to Altrix Solutions website (https://altrixsolutionsllc.com/)
- Metallic gray/steel blue background to differentiate from other sections

**FR-2.4**: Must display "Tu puente hacia la tecnología y la sostenibilidad" section with:
- Company mission statement text
- Three icons representing: Technology, Trust, Sustainability
- CTA button "Conócenos más" linking to About Us page
- Background: blurred Santa Cruz or Bolivia map with green/gray tones

**FR-2.5**: Must display "Sectores que atendemos" section as:
- Horizontal carousel (auto-rotating or click-through) with 5 sectors:
  - Oil & Gas
  - Industrial
  - Hospitalario
  - Comercial y Corporativo
  - Hogar
- Each sector must show icon and description on hover
- CTA button "Más Información" linking to Sectors page

**FR-2.6**: Must display "Clientes destacados" section with:
- Split layout: left half industrial (Capstone), right half lifestyle (Tablú)
- Logos of clients organized by brand representation
- Auto-scrolling or swipeable logo carousel

**FR-2.7**: All sections must have smooth scroll animations and responsive design.

### 4.3 About Us Page (Nosotros)

**FR-3.1**: Must display hero section with:
- Title: "¿QUIÉNES SOMOS?"
- Subtitle: "Construimos alianzas que impulsan la innovación, la confianza y el desarrollo sostenible en Bolivia."
- Background: blurred modern city image (Santa Cruz de la Sierra)

**FR-3.2**: Must display institutional presentation text describing:
- Company origin in Santa Cruz de la Sierra
- Core belief in innovation + trust
- Transparent, adaptable, committed management approach

**FR-3.3**: Must display Mission, Vision, and Values in structured format:
- **Mission**: text block
- **Vision**: text block
- **Values**: 5 value cards/blocks with icons:
  - Confianza (Trust)
  - Innovación (Innovation)
  - Transparencia (Transparency)
  - Adaptabilidad (Adaptability)
  - Compromiso (Commitment)

**FR-3.4**: Must display "Nuestro equipo humano" section with:
- Title: "Detrás de cada marca que representamos, hay un equipo comprometido."
- Descriptive text about the team
- Real team photo (horizontal format)
- Photo caption: "Equipo directivo – Marca Fusión SRL, Santa Cruz de la Sierra, Bolivia"

**FR-3.5**: Must display "Grupo Corporativo" detailed section with:
- Title: "Grupo Corporativo Marca Fusión – Altrix Solutions"
- Subtitle explaining local presence + international capacity
- Explanation of synergy and EXW modality
- Clickable Altrix logo linking to https://altrixsolutionsllc.com/
- World map visual with flags and connection arrows (USA ↔ Bolivia)

**FR-3.6**: Must display "Nuestra filosofía" closing section with philosophical statement text.

### 4.4 Capstone Green Energy Page

**FR-4.1**: Must display hero section with:
- Title: "Capstone Green Energy en Bolivia"
- Subtitle: "Tecnología en generación de energía limpia y confiable."
- Brief text: official representative description
- Panoramic image of Capstone microturbine installation

**FR-4.2**: Must display "Las microturbinas Capstone" section with:
- Explanation of microturbine technology
- Benefits text
- Grid of 4 product cards showing different models with:
  - Model image
  - Capacity in kW
  - Click to expand data sheet
- Design inspired by https://www.capstonegreenenergy.com/products and https://www.e-finity.com/products/

**FR-4.3**: Must display product comparison table with:
| Model | Capacity | Recommended Applications |
|-------|----------|-------------------------|
| C65 | 65 kW | Medium industries, hotels, hospitals |
| C200S | 200 kW | Industrial projects, Oil & Gas, continuous processes |
| C1000S/C800S/C600S | 600-1000 kW | Industrial plants, distributed generation, integrated systems |

**FR-4.4**: Must include CTA button "Conoce más sobre los productos Capstone" linking to https://www.capstonegreenenergy.com

**FR-4.5**: Must display "Capstone Bolivia – Servicios locales" section with:
- Title: "Soluciones integrales de energía limpia en Bolivia"
- List of services with icons:
  - Sale of Capstone microturbines (65 kW to 1 MW)
  - Provision of original spare parts
  - Preventive and corrective maintenance
  - Technical training and certifications
  - Technical consulting
  - After-sales assistance and remote support
- Text explaining Marca Fusión + Altrix Solutions collaboration
- Both logos displayed with connection icon
- Link to Altrix website on company name

**FR-4.6**: Must display "Capstone en Bolivia – Impacto y trayectoria" section with animated counters:
- +71 microturbines installed in Bolivia
- +3.5 MW installed capacity
- 0 lubricants, 0 refrigerants, 100% clean energy
- Counters must animate on scroll

**FR-4.7**: Must display "Beneficios" section listing:
- Continuous electrical generation
- High thermal efficiency
- Low emissions
- Low maintenance
- Smart connectivity and remote monitoring
- CTA button: "Solicitar asesoramiento técnico" linking to contact form/WhatsApp

**FR-4.8**: Must display final CTA section with:
- Title: "¿Quieres conocer cómo implementar tecnología Capstone en tu empresa?"
- Text about technical team readiness
- Disclaimer: "Todas las operaciones internacionales se gestionan a través de Altrix Solutions LLC (USA)"
- Two CTA buttons:
  - "Solicitar cotización" → form/email: ventas@marcafusion.com.bo
  - "Visitar web oficial Capstone" → https://www.capstonegreenenergy.com

### 4.5 Tablú Bolivia Page

**FR-5.1**: Must display hero section with:
- Title: "Planners personalizados que inspiran productividad y organización con estilo."
- Description of Tablú brand (Peru/Mexico presence, now in Bolivia via Marca Fusión)
- Product description: acrylic planners, formats (To Do List, weekly, monthly, annual, Kanban)
- Light background (beige/white with acrylic reflection)
- Central hero image: planners on desk
- Official Tablú logo with flags (Peru, Mexico, Bolivia)
- Two CTA buttons:
  - "Ver catálogo de planners" → anchor to catalog
  - "Consultar vía WhatsApp" → WhatsApp link

**FR-5.2**: Must display "Categorías Tablú" section with:
- Title: "Encuentra tu planner ideal según tu estilo de vida"
- 8 category cards with icons/images:
  - Hogar (Home)
  - Hábitos (Habits)
  - Niños (Kids)
  - Jóvenes y Estudiantes (Youth & Students)
  - Universitarios (University students)
  - Emprendedores (Entrepreneurs)
  - Corporativos (Corporate)
  - Regalos / Familiares (Gifts/Family)
- Circular icons or moodboard-style photos
- Neutral background with pastel accents

**FR-5.3**: Must display "Productos Disponibles" section with:
- Title: "Planificá con estilo: nuestros tamaños y formatos"
- Subtitle: "Disponibles en versión acrílica o imantada"

**Acrylic Planners Table:**
| Size | Format | Ideal For |
|------|--------|-----------|
| 30x20 cm | To Do List, habits, menu | Small desks, personal use |
| 40x30 cm | Weekly | Family or office planning |
| 60x40 cm | Monthly, weekly, tasks | Goal or project control |
| 70x45 cm | Monthly, weekly, tasks, Kanban | Goal or project control |
| 80x60 cm | Annual, all formats in 1 | Work teams or visual management |

**Magnetic Planners Table:**
| Model | Size | Use |
|-------|------|-----|
| 30x20 cm | Weekly menu, shopping list, tasks | Refrigerators, boards, kitchens |
| 40x30 cm | Weekly menu, monthly | Refrigerators, boards, kitchens |

- Note: "Tamaños personalizados son cotizados según la medida solicitada"
- Price sheet must be integrated showing prices by size

**FR-5.4**: Must display interactive catalog section with:
- Title: "Diseños disponibles en Bolivia"
- Text explaining selection and ordering process via WhatsApp
- Interactive grid/slider gallery with filter options:
  - Ver Todo
  - Home Office
  - Niños y Jóvenes
  - Hogar
  - Dark Style
  - To Do List
  - Colecciones Especiales
  - Accesorios
- Each product card must show:
  - Product image
  - Available sizes
  - Price
  - Click → show all format options for selected size/background
- "Consultar este modelo" button that opens WhatsApp with pre-filled message:
  "Hola, estoy interesado en el modelo [nombre] tamaño [XX]. ¿Podrían brindarme más información?"
- "Ver todos los diseños" button linking to full catalog

**FR-5.5**: Must display "Personalización Corporativa" section with:
- Title: "Planners personalizados para empresas y equipos"
- Description of corporate customization (logo, colors, exclusive design)
- List of ideal uses:
  - Corporate gifts
  - Internal branding
  - Corporate events
  - Sales and project teams
- CTA button: "Consultar por Tablú Corporativo" → WhatsApp (67710595) or ventas@marcafusion.com.bo
- Image: planners with corporate logos or elegant packaging
- Gray/beige background

**FR-5.6**: Must display icon ribbon (similar to main Tablú website) showing:
- Secure shipping to all departments and provinces
- Unique designs
- Gift Cards
- Excellent Quality

**FR-5.7**: Must display "Redes Sociales" section with:
- Title: "Seguinos en nuestras redes"
- Text about weekly designs, promotions, and organization tips
- Large animated social media icons:
  - Instagram: @tablubolivia
  - Facebook: Tablú Bolivia
  - WhatsApp: 67710595
- White background with green/beige accent line

**FR-5.8**: Must display final invitation section with:
- Title: "Organizá tu vida con estilo"
- Motivational text
- Two CTA buttons:
  - "Ver catálogo completo" → redirect to catalog section
  - "Contactar ventas por WhatsApp" → WhatsApp link
- Note: "Los productos Tablú Bolivia mantienen los mismos estándares de fabricación y garantía que en Perú y México. Distribuido oficialmente por Marca Fusión SRL – Representante exclusivo en Bolivia."
- Link: "Visitar Tablú Perú" → https://tablu.com.pe

### 4.6 Sectors Page (Sectores)

**FR-6.1**: Must display hero section with:
- Title: "Sectores a los que brindamos soluciones"
- Subtitle: "Entendemos las necesidades de cada industria y persona. Adaptamos nuestras soluciones para que cada cliente alcance eficiencia, sostenibilidad y bienestar."
- Collage image: half industry / half home

**FR-6.2**: Must be visually divided into two main blocks:

**Block A - Industrial & Commercial Sectors (Capstone):**
- Title: "Soluciones energéticas limpias y confiables para operaciones críticas"
- Intro text about Capstone representation
- 4 sector cards with icons/photos:
  - Oil & Gas: Continuous and efficient energy for plants and compression stations
  - Industrial: Microturbines for cogeneration processes
  - Hospitalario: Continuous operation or uninterrupted energy backup
  - Comercial: Microturbines for 24/7 processes
- CTA button: "Ver más sobre Capstone Green Energy" → Capstone page

**Block B - Personal & Corporate Sectors (Tablú):**
- Subtitle: "Organización y diseño para cada estilo de vida"
- Intro text about Tablú
- 4 profile cards with images:
  - Corporativo: Customized planners with brand
  - Profesionales y estudiantes: Weekly/monthly organization
  - Hogares: Daily family + productivity planning
  - Emprendedores: Visual tools for goals and sales
- CTA button: "Ver catálogo Tablú Bolivia" → Tablú page

**FR-6.3**: Must display final unifying message block with:
- Text: "En Marca Fusión, cada sector representa una oportunidad para impulsar el crecimiento sostenible de Bolivia. Conectamos tecnología, diseño y compromiso humano para ofrecer soluciones confiables y personalizadas."
- Institutional green background
- Panoramic photo of Santa Cruz or industrial projects
- CTA button: "Contáctanos" → Contact form

### 4.7 Partnerships Page (Alianzas / Por qué elegirnos)

**FR-7.1**: Must display hero section with:
- Title: "Alianzas que impulsan crecimiento"
- Subtitle: "Creemos en las alianzas estratégicas como el motor del progreso. En Marca Fusión, unimos la solidez empresarial boliviana con la innovación de marcas nacionales e internacionales."
- Image: professional handshake, meeting, connected global map, or collaboration network illustration

**FR-7.2**: Must display "Por qué elegirnos" section with:
- Title: "¿Por qué elegir a Marca Fusión como tu socio en Bolivia?"
- Main text explaining company base, representation model, B2B/B2C focus
- 5 icon-based points:
  - Confianza comprobada (Proven trust)
  - Conexión internacional (International connection)
  - Gestión integral (Comprehensive management)
  - Visión innovadora (Innovative vision)
  - Enfoque a resultados (Results-focused approach)

**FR-7.3**: Must display "Lo que buscamos en una alianza" section with:
- Title: "Construimos relaciones que impulsan el crecimiento"
- Text about openness to partnerships with entrepreneurs, manufacturers, distributors
- Image: diverse business people collaborating or network illustration

**FR-7.4**: Must display "Respaldo o trayectoria" section with:
- Title: "Respaldo que genera confianza"
- Text about representing international brands
- Visual: logos/icons of current brand representations

**FR-7.5**: Must display Altrix collaboration section with:
- Text: "Nuestra alianza con Altrix Solutions LLC fortalece nuestra capacidad operativa, asegurando el cumplimiento de los procesos de importación y exportación desde Estados Unidos hacia Bolivia. Juntos garantizamos logística segura, cumplimiento técnico y respaldo internacional en cada operación."
- Altrix logo with text "Partner Internacional – EE. UU."
- Icon: container or airplane symbolizing export

**FR-7.6**: Must display closing section with:
- Quote: "En Marca Fusión, cada alianza representa una oportunidad para construir juntos el futuro de la innovación en Bolivia."
- CTA button: "Conversemos sobre tu marca" → Contact form

### 4.8 Contact Page (Contacto)

**FR-8.1**: Must display hero section with:
- Title: "Estamos aquí para ayudarte"
- Subtitle: "En Marca Fusión, valoramos cada consulta y cada oportunidad de colaboración. Completa el formulario o escríbenos directamente: nuestro equipo responderá lo antes posible."
- Background: Santa Cruz cityscape or customer service representative image

**FR-8.2**: Must display contact form with the following fields:
- **Nombre completo** (required, text input)
- **Correo electrónico** (required, email input with validation)
- **Teléfono / WhatsApp** (required, phone input)
- **Empresa / Institución** (optional, text input)
- **Ciudad** (recommended, dropdown)
- **País** (auto-filled "Bolivia" or dropdown)
- **Motivo del contacto** (required, dropdown with options):
  - "Soy cliente y deseo atención o información"
  - "Deseo información sobre productos"
  - "Deseo una cotización"
  - "Deseo ser aliado comercial / distribuidor"
  - "Otro motivo"
- **Mensaje detallado** (required, textarea)

**FR-8.3**: Form submission behavior:
- If "Motivo del contacto" = "Deseo una cotización" → send to ventas@marcafusion.com.bo
- Otherwise → send to info@marcafusion.com.bo
- Use EmailJS, SendGrid, or Resend for email delivery

**FR-8.4**: Form validation and feedback:
- Display error message if required fields are missing: "⚠️ Por favor, completa todos los campos requeridos para poder procesar tu solicitud."
- Display success message on successful submission: "✓ Gracias por contactarte con Marca Fusión. Hemos recibido tu mensaje y un miembro de nuestro equipo se pondrá en contacto contigo en breve."

**FR-8.5**: Must display direct contact information block:
- Title: "También puedes comunicarte con nosotros directamente:"
- Address: Santa Cruz de la Sierra – Bolivia
- Phone/WhatsApp: +591 72136767 (with clickable WhatsApp button)
- Emails:
  - info@marcafusion.com.bo (información y consultas)
  - ventas@marcafusion.com.bo (cotizaciones y requerimientos comerciales)
- Website: www.marcafusion.com.bo
- Social media section with text:
  "Síguenos en nuestras redes y descubrí más sobre nuestras marcas, novedades y proyectos en Bolivia. ¡Sé parte de nuestra comunidad y acompáñanos en este crecimiento!"
- Clickable social media icons:
  - Facebook: https://www.facebook.com/share/14JB8uTEPY4/?mibextid=wwXIfr
  - Instagram: https://www.instagram.com/marcafusion?igsh=ZHNkZDF3bGtzZTN0
  - LinkedIn: https://www.linkedin.com/company/marcafusionsrl/

**FR-8.6**: Must display embedded Google Maps section:
- Title: "Encuéntranos"
- Description: "Nuestras oficinas están ubicadas en Santa Cruz de la Sierra."
- Interactive Google Maps embed with:
  - Fixed marker at Marca Fusión office location
  - Zoom and satellite view enabled

**FR-8.7**: Must display closing message:
- Quote: "En Marca Fusión, cada mensaje representa una oportunidad de conectar innovación, confianza y nuevas alianzas. ¡Gracias por comunicarte con nosotros!"
- Institutional green background with watermark logo
- CTA button: "Volver al inicio" → Home page

### 4.9 WhatsApp Integration

**FR-9.1**: All WhatsApp links must open with pre-filled messages based on context:
- **Capstone technical advisory**: "Hola, deseo asesoramiento técnico sobre microturbinas Capstone."
- **Capstone quote request**: "Hola, deseo solicitar una cotización para equipos Capstone Green Energy."
- **Tablú product inquiry**: "Hola, estoy interesado en el modelo [nombre] tamaño [XX]. ¿Podrían brindarme más información?"
- **Tablú corporate inquiry**: "Hola, deseo consultar sobre planners corporativos personalizados."
- **General inquiry**: "Hola, deseo más información sobre Marca Fusión."

**FR-9.2**: WhatsApp phone numbers:
- General/Capstone: +591 72136767
- Tablú sales: +591 67710595

**FR-9.3**: WhatsApp links must use the format: `https://wa.me/591XXXXXXXX?text=encoded_message`

### 4.10 Responsive Design

**FR-10.1**: The website must be fully responsive across:
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px, 1024px)
- Mobile (375px, 414px, 390px)

**FR-10.2**: Navigation must collapse to hamburger menu on mobile devices (<768px).

**FR-10.3**: All carousels/sliders must be touch-swipeable on mobile.

**FR-10.4**: Images must use responsive srcset for optimal loading.

### 4.11 Multilingual (i18n)

**FR-11.1**: The website must support Spanish (primary) and English languages.

**FR-11.2**: Language switcher must be visible in the header navigation.

**FR-11.3**: Language preference must be stored in browser localStorage.

**FR-11.4**: URL structure for languages:
- Spanish: `/` (default)
- English: `/en/`

**FR-11.5**: All static text, navigation labels, form labels, buttons, and messages must be translatable.

**FR-11.6**: Use Next.js internationalization (next-i18next) or similar solution.

### 4.12 Performance & SEO

**FR-12.1**: The website must achieve Lighthouse scores:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

**FR-12.2**: All images must be optimized using Next.js Image component with:
- WebP format with fallback
- Lazy loading below the fold
- Proper alt text for accessibility

**FR-12.3**: Each page must have unique, SEO-optimized:
- `<title>` tag (50-60 characters)
- `<meta name="description">` (150-160 characters)
- Open Graph tags for social sharing
- Canonical URLs

**FR-12.4**: Implement structured data (JSON-LD) for:
- Organization schema
- LocalBusiness schema
- Product schema (for Tablú products)

**FR-12.5**: Generate and submit sitemap.xml and robots.txt.

**FR-12.6**: Implement proper heading hierarchy (H1 → H2 → H3).

### 4.13 Animations & Interactions

**FR-13.1**: Implement smooth scroll animations using Framer Motion or similar:
- Fade-in on scroll
- Slide-in from sides
- Counter animations (Capstone impact section)

**FR-13.2**: Hover effects on:
- Navigation menu items
- Buttons (scale, color change)
- Product cards (lift, shadow)
- Social media icons

**FR-13.3**: Auto-rotating carousels must:
- Pause on hover
- Show navigation dots
- Allow manual navigation (arrows or swipe)

**FR-13.4**: Loading states for:
- Form submissions
- Image loading (skeleton screens)

### 4.14 Accessibility

**FR-14.1**: The website must comply with WCAG 2.1 Level AA standards:
- Proper color contrast ratios (4.5:1 for normal text)
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels where necessary

**FR-14.2**: All forms must have:
- Properly associated labels
- Error messages announced to screen readers
- Clear validation feedback

**FR-14.3**: Images must have descriptive alt text or be marked decorative.

**FR-14.4**: Skip-to-content link for keyboard users.

---

## 5. Non-Goals (Out of Scope)

**NG-1**: E-commerce functionality (shopping cart, payment gateway) - Phase 2
- Tablú orders will be handled via WhatsApp in Phase 1

**NG-2**: User authentication/login system - Not required for MVP

**NG-3**: Blog/News section - Phase 2

**NG-4**: Live chat widget - Phase 2 (WhatsApp links sufficient for MVP)

**NG-5**: Advanced analytics dashboards - Phase 2

**NG-6**: Customer portal for tracking orders/service requests - Phase 2

**NG-7**: Integration with Tablú Peru inventory API - Phase 1 (hardcoded catalog)

**NG-8**: Video backgrounds or complex 3D animations - Keep performance optimal

**NG-9**: Third-party review integrations (Google Reviews widget) - Phase 2

**NG-10**: Email newsletter subscription system - Phase 2

---

## 6. Design Considerations

### 6.1 Design System

**Color Palette:**
- **Primary Green**: Corporate institutional green (to be defined from brand guidelines)
- **Gray Scale**: Light gray (#F5F5F5), Medium gray (#A0A0A0), Dark gray (#2D2D2D)
- **Accent Colors**:
  - Steel blue/metallic (for Altrix collaboration sections)
  - Beige/pastel tones (for Tablú sections)
- **Semantic Colors**:
  - Success: Green
  - Error: Red
  - Warning: Yellow

**Typography:**
- **Headings**: Sans-serif (e.g., Inter, Poppins, or Montserrat)
- **Body Text**: Sans-serif (e.g., Inter, Open Sans)
- **Font Sizes**: Mobile-first responsive scale
  - H1: 32px mobile / 48px desktop
  - H2: 28px mobile / 36px desktop
  - H3: 24px mobile / 28px desktop
  - Body: 16px mobile / 18px desktop

**Spacing:**
- Use 8px base unit system (8, 16, 24, 32, 48, 64, 96, 128)

**Components:**
- Buttons: Primary (filled green), Secondary (outlined), Ghost
- Cards: Shadow elevation, border-radius: 8px
- Form inputs: Border-radius: 4px, focus state with green accent
- Icons: Use react-icons or Lucide icons (line style)

### 6.2 Visual References

**Capstone Sections:**
- Reference: https://www.capstonegreenenergy.com/products
- Reference: https://www.e-finity.com/products/
- Style: Industrial, modern, clean, technical

**Tablú Sections:**
- Reference: https://tablu.com.pe
- Style: Lifestyle, pastel colors, organized, inspiring

**Corporate Sections (Home, About, Partnerships):**
- Style: Professional, trustworthy, modern corporate

### 6.3 Image Requirements

**Placeholder Generation Strategy:**
All images must use realistic AI-generated placeholders or high-quality stock photos with proper attribution:

**Hero Images:**
- Clean energy plant / modern industrial facility
- Santa Cruz de la Sierra cityscape
- Professional team photos (diverse, modern office setting)

**Product Images:**
- Capstone microturbines (various models in installation settings)
- Tablú planners (on desks, in offices, in homes)

**Iconography:**
- Sector icons: Oil rig, factory, hospital, office building, home
- Service icons: Tools, support, training, consulting
- Values icons: Handshake, lightbulb, transparency, adaptability, commitment

**Background Images:**
- World map with connection lines
- Blurred industrial/office backgrounds for text overlays
- Texture overlays (subtle grid, geometric patterns)

**Social Proof:**
- Client logos (to be provided or simulated)
- Team photos (professional headshots)

**Tools for Placeholder Generation:**
- Use `@vercel/og` for dynamic Open Graph images
- Use blurhash for image loading placeholders
- Reference Unsplash API or Pexels API for stock imagery

### 6.4 UI/UX Patterns

**Navigation:**
- Sticky header on scroll
- Dropdown mega-menu for Representations (if needed)
- Breadcrumbs on internal pages

**Calls-to-Action (CTAs):**
- Primary: Green filled button (high contrast)
- Secondary: Outlined button
- Consistent CTA text: action-oriented verbs ("Solicitar", "Ver", "Conocer", "Contactar")

**Forms:**
- Inline validation
- Clear error states with icons
- Success confirmation modals

**Loading States:**
- Skeleton screens for content
- Spinner for form submissions
- Progressive image loading (blur-up)

**Carousels:**
- Infinite loop
- Auto-play with pause on hover/focus
- Touch-swipe enabled
- Navigation dots + arrows

---

## 7. Technical Considerations

### 7.1 Tech Stack

**Frontend Framework:**
- **Next.js 14+** (App Router)
- **TypeScript** for type safety
- **React 18+**

**Styling:**
- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-scoped styles (if needed)
- **Framer Motion** for animations

**State Management:**
- React Context API (for language switching, theme)
- No complex state management needed for MVP

**Form Handling:**
- **React Hook Form** for form validation
- **Zod** for schema validation

**Email Service:**
- **EmailJS**, **SendGrid**, or **Resend** for contact form submissions

**Internationalization:**
- **next-i18next** or **next-intl** for i18n support

**Icons:**
- **react-icons** or **Lucide React**

**Maps:**
- **Google Maps Embed API** (free tier)

### 7.2 File Structure

```
marca-fusion/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── nosotros/
│   │   │   └── page.tsx
│   │   ├── capstone/
│   │   │   └── page.tsx
│   │   ├── tablu/
│   │   │   └── page.tsx
│   │   ├── sectores/
│   │   │   └── page.tsx
│   │   ├── alianzas/
│   │   │   └── page.tsx
│   │   └── contacto/
│   │       └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Representaciones.tsx
│   │   ├── Sectores.tsx
│   │   └── ...
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── email.ts
│   ├── validations.ts
│   └── utils.ts
├── locales/
│   ├── es/
│   │   └── common.json
│   └── en/
│       └── common.json
├── public/
│   ├── images/
│   ├── logos/
│   └── icons/
├── types/
│   └── index.ts
└── tailwind.config.ts
```

### 7.3 Deployment

**Platform:**
- **Vercel** (recommended for Next.js)
- Automatic deployments from `main` branch
- Preview deployments for pull requests

**Domain:**
- www.marcafusion.com.bo (to be configured)

**Environment Variables:**
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

### 7.4 Performance Optimizations

**Image Optimization:**
- Use Next.js `<Image>` component
- Convert all images to WebP with PNG/JPG fallback
- Implement lazy loading for below-fold images
- Use responsive image sizes with `srcset`

**Code Splitting:**
- Dynamic imports for heavy components (e.g., Maps, carousels)
- Route-based code splitting (automatic with Next.js App Router)

**Caching:**
- Static page generation where possible
- CDN caching via Vercel Edge Network
- Browser caching for static assets

**Font Optimization:**
- Use Next.js font optimization
- Preload critical fonts
- Subset fonts to required characters (Latin + Spanish)

### 7.5 SEO Implementation

**Metadata Strategy:**
Each page must have:
```typescript
export const metadata = {
  title: "Page Title | Marca Fusión",
  description: "Page description...",
  openGraph: {
    title: "Page Title",
    description: "Page description...",
    images: ["/og-image.jpg"],
    locale: "es_BO",
  },
  alternates: {
    canonical: "https://www.marcafusion.com.bo/page",
    languages: {
      "es": "/page",
      "en": "/en/page",
    },
  },
}
```

**Structured Data Example (Organization):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marca Fusión SRL",
  "url": "https://www.marcafusion.com.bo",
  "logo": "https://www.marcafusion.com.bo/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+591-72136767",
    "contactType": "Customer Service",
    "areaServed": "BO",
    "availableLanguage": ["Spanish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santa Cruz de la Sierra",
    "addressCountry": "BO"
  },
  "sameAs": [
    "https://www.facebook.com/share/14JB8uTEPY4/",
    "https://www.instagram.com/marcafusion",
    "https://www.linkedin.com/company/marcafusionsrl/"
  ]
}
```

### 7.6 Error Handling

**404 Page:**
- Custom 404 page with navigation back to home
- "Página no encontrada" message
- Links to main sections

**500 Page:**
- Generic error page
- "Algo salió mal" message
- Contact information

**Form Errors:**
- Inline validation errors
- Toast notifications for network errors
- Retry mechanism for failed submissions

### 7.7 Analytics (Future Phase)

Note: Analytics not required for MVP (per FR-6.E), but structure should support easy integration:
- Google Analytics 4
- Meta Pixel
- LinkedIn Insight Tag

Prepare `gtag` script loading mechanism for Phase 2.

---

## 8. Success Metrics

### 8.1 Technical Metrics

**Performance (Measurable via Lighthouse):**
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- Lighthouse Performance Score: ≥ 90

**Accessibility:**
- Lighthouse Accessibility Score: ≥ 95
- Zero critical accessibility violations (via axe DevTools)

**SEO:**
- All pages indexed in Google within 2 weeks of launch
- Sitemap successfully submitted to Google Search Console
- No SEO errors in Google Search Console

### 8.2 User Engagement Metrics (Post-Launch)

**Lead Generation:**
- Contact form submissions: Track weekly/monthly
- WhatsApp clicks: Track via event listeners
- Quote requests: Monitor email inbox

**Traffic:**
- Unique visitors: Baseline established in first month
- Pages per session: Target ≥ 3
- Average session duration: Target ≥ 2 minutes
- Bounce rate: Target < 60%

**Conversion Goals:**
- Contact form completion rate: Target ≥ 30% of users who land on /contacto
- Capstone quote requests: Track monthly volume
- Tablú product inquiries via WhatsApp: Track monthly volume

### 8.3 Business Metrics

**Brand Awareness:**
- Website establishes credible online presence
- Positive feedback from stakeholders on design and content

**Customer Acquisition:**
- Number of qualified B2B leads per month
- Number of B2C Tablú orders per month

**Operational Efficiency:**
- Reduced time spent answering basic product questions (self-service info available)
- Structured lead capture via form (vs. unstructured emails/calls)

---

## 9. Open Questions

### 9.1 Content & Assets

**Q1**: What is the exact physical address for the Santa Cruz office (for Google Maps embed)?

**Q2**: Will client logos for the "Clientes destacados" section be provided, or should we use placeholder icons?

**Q3**: Is there a preferred team photo available, or should we use a professional stock photo?

**Q4**: Are there existing brand guidelines (color codes, logo files, typography) to reference?

**Q5**: For Tablú products, do we have access to high-quality product photos, or should we reference images from https://tablu.com.pe?

**Q6**: What is the exact pricing structure for Tablú products by size? Should prices be displayed publicly or only provided upon quote request?

### 9.2 Technical Integrations

**Q7**: Do we have API access to Tablú Peru's inventory system, or is all catalog data hardcoded for Phase 1? (Assumed hardcoded based on FR-4.B)

**Q8**: Which email service provider (EmailJS, SendGrid, or Resend) is preferred for the contact form?

**Q9**: Is there an existing Google Maps API key, or should a new one be created?

**Q10**: Should the website integrate with any CRM system (e.g., HubSpot, Salesforce) for lead capture, or is email-only sufficient for MVP?

### 9.3 Business Logic

**Q11**: For the contact form routing logic (ventas@ vs info@), are there any other routing rules based on "Motivo del contacto" options?

**Q12**: Should there be any automated email responses (auto-responders) when users submit the contact form?

**Q13**: For Tablú customization requests, what is the current process? Should the website collect custom design details, or is WhatsApp conversation sufficient?

**Q14**: Are there any specific compliance requirements (data privacy, GDPR, Bolivia-specific regulations) for form data collection?

### 9.4 Future Roadmap

**Q15**: What is the timeline for Phase 2 features (e-commerce, blog, analytics)?

**Q16**: Is there a plan for expanding to additional brand representations beyond Capstone and Tablú?

**Q17**: Should the architecture support multiple language additions beyond Spanish/English in the future?

---

## 10. Appendix

### 10.1 Key URLs Referenced

- Capstone Green Energy: https://www.capstonegreenenergy.com
- Capstone Products (reference): https://www.e-finity.com/products/
- Tablú Peru: https://tablu.com.pe
- Altrix Solutions LLC: https://altrixsolutionsllc.com/
- Marca Fusión Facebook: https://www.facebook.com/share/14JB8uTEPY4/?mibextid=wwXIfr
- Marca Fusión Instagram: https://www.instagram.com/marcafusion?igsh=ZHNkZDF3bGtzZTN0
- Marca Fusión LinkedIn: https://www.linkedin.com/company/marcafusionsrl/

### 10.2 Contact Information

- **Company**: Marca Fusión SRL
- **Location**: Santa Cruz de la Sierra, Bolivia
- **General Phone/WhatsApp**: +591 72136767
- **Tablú Sales WhatsApp**: +591 67710595
- **General Email**: info@marcafusion.com.bo
- **Sales Email**: ventas@marcafusion.com.bo
- **Website**: www.marcafusion.com.bo

### 10.3 Development Phases

**Phase 1 (MVP - Current PRD):**
- All 6 main pages fully functional
- Hardcoded content (no CMS)
- Email-based contact form
- WhatsApp integration with pre-filled messages
- Spanish + English support
- Responsive design
- SEO optimization
- Realistic placeholder images

**Phase 2 (Future):**
- Headless CMS integration for easier content management
- E-commerce functionality for Tablú (cart, checkout, payment gateway)
- Blog/news section
- Customer testimonials/reviews
- Advanced analytics implementation
- Email newsletter subscription
- Live chat widget or chatbot
- Video content integration

**Phase 3 (Future):**
- Customer portal (order tracking, service requests)
- Multi-brand expansion support
- Advanced filtering for Tablú catalog
- Integration with Tablú Peru inventory API
- CRM integration (HubSpot, Salesforce)
- Additional language support

---

## 11. Acceptance Criteria Summary

The website will be considered complete and ready for launch when:

**AC-1**: All 6 pages (Home, About, Capstone, Tablú, Sectors, Partnerships, Contact) are implemented with content matching `guia-web.md` specifications.

**AC-2**: Navigation menu functions correctly with dropdown for Representations (non-clickable parent).

**AC-3**: Contact form routes emails correctly (ventas@ for quotes, info@ for general inquiries) and displays proper success/error messages.

**AC-4**: All WhatsApp links open with correct pre-filled messages and phone numbers.

**AC-5**: Website is fully responsive (mobile, tablet, desktop) with no layout breaks.

**AC-6**: Language switcher toggles between Spanish and English, persisting preference.

**AC-7**: All images load properly with realistic placeholders, proper alt text, and optimized formats.

**AC-8**: Footer displays on all pages with correct contact info, social links, and copyright.

**AC-9**: Lighthouse scores meet targets: Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥95.

**AC-10**: All external links (Capstone website, Altrix website, Tablú Peru, social media) open in new tabs and function correctly.

**AC-11**: Animated counters (Capstone section) trigger on scroll and count up correctly.

**AC-12**: All carousels auto-rotate, pause on hover, and allow manual navigation.

**AC-13**: Google Maps embed displays correctly with zoom/satellite functionality.

**AC-14**: Form validation prevents submission with missing required fields and displays inline errors.

**AC-15**: Website passes WCAG 2.1 AA accessibility audit (zero critical violations).

**AC-16**: Sitemap.xml and robots.txt are generated and accessible.

**AC-17**: Structured data (JSON-LD) for Organization and LocalBusiness is implemented and validates.

**AC-18**: All pages have unique, SEO-optimized titles, descriptions, and Open Graph tags.

**AC-19**: No console errors or warnings in browser developer tools.

**AC-20**: Website deploys successfully to Vercel with custom domain (www.marcafusion.com.bo).

---

**Document Version**: 1.0
**Date**: 2025-01-06
**Author**: AI Assistant (based on client specifications in `guia-web.md`)
**Status**: Draft - Pending client review and clarification of Open Questions

---

**Next Steps:**
1. Review and answer Open Questions (Section 9)
2. Provide brand assets (logos, color codes, photos)
3. Confirm technical integration preferences (email service, maps API)
4. Approve PRD for development kickoff
