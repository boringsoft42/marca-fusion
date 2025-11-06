# Task List: Marca Fusión Corporate Website

**Source PRD**: `tasks/prd-marca-fusion-website.md`
**Project**: Marca Fusión SRL - Bilingual Corporate Website for Capstone Green Energy and Tablú Bolivia
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, React Hook Form, Zod
**Design Reference**: `STYLE-GUIDE.md`

---

## Relevant Files

### Configuration & Setup
- `package.json` - Add next-intl, resend/sendgrid dependencies
- `next.config.js` - Configure i18n routing and image domains
- `middleware.ts` - Implement i18n middleware for locale detection
- `src/i18n/config.ts` - i18n configuration with locale settings
- `src/i18n/request.ts` - Server-side i18n request handler

### Locales (Translations)
- `locales/es/common.json` - Spanish translations for all pages
- `locales/en/common.json` - English translations for all pages
- `locales/es/home.json` - Home page Spanish content
- `locales/en/home.json` - Home page English content
- `locales/es/about.json` - About page Spanish content
- `locales/en/about.json` - About page English content
- `locales/es/capstone.json` - Capstone page Spanish content
- `locales/en/capstone.json` - Capstone page English content
- `locales/es/tablu.json` - Tablú page Spanish content
- `locales/en/tablu.json` - Tablú page English content
- `locales/es/sectors.json` - Sectors page Spanish content
- `locales/en/sectors.json` - Sectors page English content
- `locales/es/partnerships.json` - Partnerships page Spanish content
- `locales/en/partnerships.json` - Partnerships page English content
- `locales/es/contact.json` - Contact page Spanish content
- `locales/en/contact.json` - Contact page English content

### Layout Components
- `src/components/layout/Header.tsx` - Main header with navigation
- `src/components/layout/Navigation.tsx` - Navigation menu with dropdown
- `src/components/layout/Footer.tsx` - Footer with contact info and social links
- `src/components/layout/LanguageSwitcher.tsx` - Language toggle component
- `src/components/layout/MobileMenu.tsx` - Mobile hamburger menu

### Shared Components
- `src/components/marca-fusion/Hero.tsx` - Reusable hero section component
- `src/components/marca-fusion/SectionTitle.tsx` - Styled section title component
- `src/components/marca-fusion/ClientLogo.tsx` - Client logo display component
- `src/components/marca-fusion/SectorCard.tsx` - Sector card component
- `src/components/marca-fusion/ValueCard.tsx` - Value/benefit card component
- `src/components/marca-fusion/AnimatedCounter.tsx` - Animated counter component
- `src/components/marca-fusion/WhatsAppButton.tsx` - WhatsApp CTA button with pre-filled message
- `src/components/marca-fusion/CTAButton.tsx` - Styled CTA button following design system

### Home Page Components
- `src/components/home/HeroSection.tsx` - Home hero with headline and CTAs
- `src/components/home/RepresentacionesBlock.tsx` - Capstone/Tablú summary block
- `src/components/home/CorporateGroupSection.tsx` - Marca Fusión + Altrix connection
- `src/components/home/MissionSection.tsx` - Company mission with values
- `src/components/home/SectorsCarousel.tsx` - Auto-rotating sectors carousel
- `src/components/home/ClientShowcase.tsx` - Client logos showcase

### About Us Page Components
- `src/components/about/AboutHero.tsx` - About page hero section
- `src/components/about/InstitutionalText.tsx` - Company presentation text
- `src/components/about/MissionVisionValues.tsx` - MVV structured display
- `src/components/about/TeamSection.tsx` - Team photo and description
- `src/components/about/CorporateGroupDetail.tsx` - Detailed corporate group section
- `src/components/about/PhilosophySection.tsx` - Company philosophy closing

### Capstone Page Components
- `src/components/capstone/CapstoneHero.tsx` - Capstone hero section
- `src/components/capstone/MicroturbineExplanation.tsx` - Technology explanation
- `src/components/capstone/ProductGrid.tsx` - Product models grid
- `src/components/capstone/ProductCard.tsx` - Individual product card with expand
- `src/components/capstone/ComparisonTable.tsx` - Product comparison table
- `src/components/capstone/ServicesSection.tsx` - Local services with icons
- `src/components/capstone/ImpactCounters.tsx` - Animated impact statistics
- `src/components/capstone/BenefitsSection.tsx` - Benefits list with icons
- `src/components/capstone/CapstoneCTA.tsx` - Final CTA section

### Tablú Page Components
- `src/components/tablu/TabluHero.tsx` - Tablú hero section
- `src/components/tablu/CategoryCards.tsx` - 8 category cards grid
- `src/components/tablu/PricingTables.tsx` - Acrylic and magnetic pricing tables
- `src/components/tablu/ProductCatalog.tsx` - Interactive catalog with filters
- `src/components/tablu/ProductCard.tsx` - Individual product card
- `src/components/tablu/CorporateSection.tsx` - Corporate customization section
- `src/components/tablu/IconRibbon.tsx` - Feature icons ribbon
- `src/components/tablu/SocialSection.tsx` - Social media section
- `src/components/tablu/TabluCTA.tsx` - Final invitation section

### Sectors Page Components
- `src/components/sectors/SectorsHero.tsx` - Sectors hero section
- `src/components/sectors/IndustrialBlock.tsx` - Capstone sectors block
- `src/components/sectors/PersonalBlock.tsx` - Tablú sectors block
- `src/components/sectors/UnifyingMessage.tsx` - Final unifying message

### Partnerships Page Components
- `src/components/partnerships/PartnershipsHero.tsx` - Partnerships hero
- `src/components/partnerships/WhyChooseUs.tsx` - Why choose section with 5 points
- `src/components/partnerships/WhatWeSeek.tsx` - What we seek in alliances
- `src/components/partnerships/BackingSection.tsx` - Backing/trajectory section
- `src/components/partnerships/AltrixCollaboration.tsx` - Altrix partnership section
- `src/components/partnerships/ClosingQuote.tsx` - Closing quote section

### Contact Page Components
- `src/components/contact/ContactHero.tsx` - Contact hero section
- `src/components/contact/ContactForm.tsx` - Main contact form with validation
- `src/components/contact/DirectContact.tsx` - Direct contact info block
- `src/components/contact/GoogleMapsEmbed.tsx` - Google Maps integration
- `src/components/contact/ClosingMessage.tsx` - Closing message section

### Forms & Validation
- `src/lib/validations/contact-schema.ts` - Zod schema for contact form
- `src/types/contact.ts` - TypeScript types for contact form
- `src/hooks/use-contact-form.ts` - Custom hook for contact form logic

### Email & Communication
- `src/lib/email/send-contact-email.ts` - Email sending utility (Resend/SendGrid)
- `src/lib/email/templates/contact-template.tsx` - Email template for contact submissions
- `src/lib/whatsapp/generate-link.ts` - WhatsApp link generator with pre-filled messages

### API Routes
- `src/app/api/contact/route.ts` - Contact form submission endpoint

### Pages (App Router)
- `src/app/[locale]/layout.tsx` - Root layout with i18n provider
- `src/app/[locale]/page.tsx` - Home page
- `src/app/[locale]/nosotros/page.tsx` - About Us page
- `src/app/[locale]/capstone/page.tsx` - Capstone Green Energy page
- `src/app/[locale]/tablu/page.tsx` - Tablú Bolivia page
- `src/app/[locale]/sectores/page.tsx` - Sectors page
- `src/app/[locale]/alianzas/page.tsx` - Partnerships page
- `src/app/[locale]/contacto/page.tsx` - Contact page
- `src/app/[locale]/not-found.tsx` - Custom 404 page
- `src/app/[locale]/error.tsx` - Custom error page

### SEO & Metadata
- `src/lib/seo/metadata.ts` - Metadata generation utilities
- `src/lib/seo/structured-data.ts` - JSON-LD structured data generators
- `src/app/sitemap.ts` - Dynamic sitemap generation
- `src/app/robots.ts` - Robots.txt configuration

### Data & Constants
- `src/data/capstone-products.ts` - Capstone product data
- `src/data/tablu-catalog.ts` - Tablú product catalog data
- `src/data/sectors.ts` - Sectors information
- `src/data/clients.ts` - Client logos and information
- `src/lib/constants/contact-info.ts` - Company contact information
- `src/lib/constants/social-media.ts` - Social media links

### Utilities
- `src/lib/utils/image-loader.ts` - Custom image loader for optimization
- `src/lib/utils/locale-utils.ts` - Locale detection and switching utilities
- `src/hooks/use-locale.ts` - Custom hook for locale management
- `src/hooks/use-scroll-animation.ts` - Custom hook for scroll-triggered animations

### Styles
- `src/app/globals.css` - Update with Marca Fusión brand colors (green palette)
- `tailwind.config.ts` - Extend with brand-specific colors and spacing

### Assets
- `public/images/logos/marca-fusion-logo.svg` - Company logo
- `public/images/logos/altrix-logo.svg` - Altrix Solutions logo
- `public/images/logos/capstone-logo.svg` - Capstone logo
- `public/images/logos/tablu-logo.svg` - Tablú logo
- `public/images/hero/home-hero.jpg` - Home hero background
- `public/images/hero/about-hero.jpg` - About hero background
- `public/images/team/team-photo.jpg` - Team photo
- `public/images/products/capstone-*.jpg` - Capstone product images
- `public/images/products/tablu-*.jpg` - Tablú product images
- `public/images/clients/*.svg` - Client logos
- `public/images/sectors/*.svg` - Sector icons

### Environment
- `.env.local` - Environment variables for email service, maps API key

### Notes
- All components should follow the design patterns from `STYLE-GUIDE.md`
- Use existing Shadcn UI components (Button, Card, Input, Dialog) for consistency
- Implement responsive design with mobile-first approach
- All forms must use React Hook Form with Zod validation
- Images must use Next.js Image component with optimization
- Animations should use Framer Motion with reduced motion support

---

## Tasks

- [ ] 1.0 Project Foundation & Setup
  - [x] 1.1 Install additional dependencies: `next-intl`, `resend` or `@sendgrid/mail`, `@googlemaps/js-api-loader`
  - [x] 1.2 Configure `next.config.js` with i18n settings (locales: es, en; defaultLocale: es)
  - [x] 1.3 Create `middleware.ts` for locale detection and routing
  - [x] 1.4 Set up i18n configuration files in `src/i18n/` (config.ts, request.ts)
  - [x] 1.5 Create directory structure: `locales/es/` and `locales/en/` for translation files
  - [x] 1.6 Create initial translation files for all pages (common.json, home.json, about.json, etc.)
  - [x] 1.7 Update `tailwind.config.ts` with Marca Fusión brand colors (primary green, steel blue, beige tones)
  - [x] 1.8 Update `src/app/globals.css` with brand-specific CSS variables following STYLE-GUIDE.md patterns
  - [x] 1.9 Create `.env.local` file with placeholder environment variables (RESEND_API_KEY, GOOGLE_MAPS_API_KEY)
  - [x] 1.10 Set up folder structure for components: `marca-fusion/`, `home/`, `about/`, `capstone/`, `tablu/`, `sectors/`, `partnerships/`, `contact/`

- [ ] 2.0 Shared Layout & Navigation Components
  - [ ] 2.1 Create `src/components/layout/Header.tsx` with sticky header behavior and brand logo
  - [ ] 2.2 Build `src/components/layout/Navigation.tsx` with dropdown for "Representaciones" (non-clickable parent, opens Capstone/Tablú sub-items)
  - [ ] 2.3 Implement `src/components/layout/LanguageSwitcher.tsx` with Spanish/English toggle, localStorage persistence
  - [ ] 2.4 Create `src/components/layout/MobileMenu.tsx` with hamburger icon, slide-in drawer, touch-swipeable
  - [ ] 2.5 Build `src/components/layout/Footer.tsx` with contact info, social media icons, copyright notice (Marca Fusión + Altrix)
  - [ ] 2.6 Add "Contáctanos ahora" CTA button in footer that opens contact modal or scrolls to contact section
  - [ ] 2.7 Create `src/app/[locale]/layout.tsx` as root layout with Header, Footer, and i18n provider
  - [ ] 2.8 Implement breadcrumbs component for internal pages (optional, if design requires)
  - [ ] 2.9 Add keyboard navigation support for header menu (Tab, Enter, Escape)
  - [ ] 2.10 Style all layout components following STYLE-GUIDE.md (colors, shadows, transitions)

- [ ] 3.0 Home & About Us Pages
  - [ ] 3.1 Create `src/app/[locale]/page.tsx` for Home page with metadata
  - [ ] 3.2 Build `src/components/home/HeroSection.tsx` with gradient headline, subtitle, industrial background with green overlay (40%)
  - [ ] 3.3 Implement `src/components/home/RepresentacionesBlock.tsx` with split visual (Capstone left, Tablú right), two CTAs
  - [ ] 3.4 Create `src/components/home/CorporateGroupSection.tsx` with animated USA-Bolivia connection line, Altrix logo, metallic gray background
  - [ ] 3.5 Build `src/components/home/MissionSection.tsx` with three icons (Technology, Trust, Sustainability), blurred map background
  - [ ] 3.6 Implement `src/components/home/SectorsCarousel.tsx` with 5 sectors, auto-rotate with pause on hover, touch-swipe support
  - [ ] 3.7 Create `src/components/home/ClientShowcase.tsx` with split layout (Capstone clients left, Tablú clients right), auto-scrolling logos
  - [ ] 3.8 Add BlurFade animations (from existing codebase) to all Home sections with staggered delays
  - [ ] 3.9 Create `src/app/[locale]/nosotros/page.tsx` for About Us page
  - [ ] 3.10 Build `src/components/about/AboutHero.tsx` with blurred Santa Cruz cityscape background
  - [ ] 3.11 Create `src/components/about/InstitutionalText.tsx` with company origin and belief statements
  - [ ] 3.12 Implement `src/components/about/MissionVisionValues.tsx` with 5 value cards (icons: Trust, Innovation, Transparency, Adaptability, Commitment)
  - [ ] 3.13 Build `src/components/about/TeamSection.tsx` with team photo and caption
  - [ ] 3.14 Create `src/components/about/CorporateGroupDetail.tsx` with world map visual, USA-Bolivia arrows, clickable Altrix logo
  - [ ] 3.15 Add `src/components/about/PhilosophySection.tsx` with closing philosophical statement
  - [ ] 3.16 Ensure all About sections have smooth scroll animations and responsive grid layouts

- [ ] 4.0 Product Pages - Capstone Green Energy & Tablú Bolivia
  - [ ] 4.1 Create `src/app/[locale]/capstone/page.tsx` for Capstone page
  - [ ] 4.2 Build `src/components/capstone/CapstoneHero.tsx` with panoramic microturbine installation image
  - [ ] 4.3 Create `src/components/capstone/MicroturbineExplanation.tsx` with technology description and benefits text
  - [ ] 4.4 Implement `src/components/capstone/ProductGrid.tsx` with 4 product cards (C65, C200S, C600S, C800S, C1000S models)
  - [ ] 4.5 Build `src/components/capstone/ProductCard.tsx` with expandable data sheet (Dialog component from Shadcn UI)
  - [ ] 4.6 Create `src/components/capstone/ComparisonTable.tsx` with responsive table showing Model | Capacity | Applications
  - [ ] 4.7 Add external link button to https://www.capstonegreenenergy.com (opens in new tab)
  - [ ] 4.8 Build `src/components/capstone/ServicesSection.tsx` with 6 service items (icons + text)
  - [ ] 4.9 Implement `src/components/capstone/ImpactCounters.tsx` with AnimatedCounter component (71+ microturbines, 3.5+ MW, 0 emissions)
  - [ ] 4.10 Create `src/components/capstone/BenefitsSection.tsx` with icon list and WhatsApp CTA
  - [ ] 4.11 Build `src/components/capstone/CapstoneCTA.tsx` with two CTAs (Quote form + External Capstone website)
  - [ ] 4.12 Add disclaimer text about Altrix handling international operations
  - [ ] 4.13 Create `src/app/[locale]/tablu/page.tsx` for Tablú page
  - [ ] 4.14 Build `src/components/tablu/TabluHero.tsx` with light beige background, acrylic reflection effect, product image, Tablú logo with flags
  - [ ] 4.15 Create `src/components/tablu/CategoryCards.tsx` with 8 circular icon cards (Home, Habits, Kids, Youth, University, Entrepreneurs, Corporate, Gifts)
  - [ ] 4.16 Implement `src/components/tablu/PricingTables.tsx` with two tables (Acrylic planners, Magnetic planners) showing sizes and ideal uses
  - [ ] 4.17 Build `src/components/tablu/ProductCatalog.tsx` with filter buttons (Ver Todo, Home Office, Niños, Hogar, Dark Style, etc.)
  - [ ] 4.18 Create `src/components/tablu/ProductCard.tsx` with image, sizes, price, WhatsApp CTA with pre-filled message template
  - [ ] 4.19 Add `src/components/tablu/CorporateSection.tsx` with corporate customization description, gray/beige background
  - [ ] 4.20 Build `src/components/tablu/IconRibbon.tsx` with 4 feature icons (Secure shipping, Unique designs, Gift Cards, Quality)
  - [ ] 4.21 Create `src/components/tablu/SocialSection.tsx` with animated social icons (Instagram, Facebook, WhatsApp) and handles
  - [ ] 4.22 Implement `src/components/tablu/TabluCTA.tsx` with two CTAs (Catalog + WhatsApp), link to https://tablu.com.pe
  - [ ] 4.23 Add WhatsApp number +591 67710595 for Tablú-specific inquiries
  - [ ] 4.24 Create `src/data/capstone-products.ts` with product model data (capacities, applications, images)
  - [ ] 4.25 Create `src/data/tablu-catalog.ts` with product catalog data (designs, sizes, prices, categories)

- [ ] 5.0 Sectors & Partnerships Pages
  - [ ] 5.1 Create `src/app/[locale]/sectores/page.tsx` for Sectors page
  - [ ] 5.2 Build `src/components/sectors/SectorsHero.tsx` with collage image (industry + home split)
  - [ ] 5.3 Implement `src/components/sectors/IndustrialBlock.tsx` with 4 sector cards (Oil & Gas, Industrial, Hospitalario, Comercial)
  - [ ] 5.4 Create `src/components/sectors/PersonalBlock.tsx` with 4 profile cards (Corporativo, Profesionales, Hogares, Emprendedores)
  - [ ] 5.5 Build `src/components/sectors/UnifyingMessage.tsx` with institutional green background, panoramic Santa Cruz photo
  - [ ] 5.6 Add CTAs linking back to Capstone and Tablú pages
  - [ ] 5.7 Create `src/app/[locale]/alianzas/page.tsx` for Partnerships page
  - [ ] 5.8 Build `src/components/partnerships/PartnershipsHero.tsx` with handshake/collaboration image
  - [ ] 5.9 Implement `src/components/partnerships/WhyChooseUs.tsx` with 5 icon-based points (Trust, International connection, Management, Innovation, Results)
  - [ ] 5.10 Create `src/components/partnerships/WhatWeSeek.tsx` with partnership criteria text and diverse collaboration image
  - [ ] 5.11 Build `src/components/partnerships/BackingSection.tsx` with brand representation logos/icons
  - [ ] 5.12 Implement `src/components/partnerships/AltrixCollaboration.tsx` with Altrix logo, container/airplane icon
  - [ ] 5.13 Add `src/components/partnerships/ClosingQuote.tsx` with inspirational quote and contact CTA
  - [ ] 5.14 Create `src/data/sectors.ts` with sector descriptions and icon mappings

- [ ] 6.0 Contact Page & Form Integration
  - [ ] 6.1 Create `src/app/[locale]/contacto/page.tsx` for Contact page
  - [ ] 6.2 Build `src/components/contact/ContactHero.tsx` with Santa Cruz cityscape background
  - [ ] 6.3 Implement `src/components/contact/ContactForm.tsx` with React Hook Form + Zod validation
  - [ ] 6.4 Create `src/lib/validations/contact-schema.ts` with Zod schema (nombre, email, teléfono, empresa, ciudad, país, motivo, mensaje)
  - [ ] 6.5 Add dropdown for "Motivo del contacto" with 5 options (Cliente, Información, Cotización, Aliado, Otro)
  - [ ] 6.6 Implement conditional email routing logic (if "Cotización" → ventas@marcafusion.com.bo, else → info@marcafusion.com.bo)
  - [ ] 6.7 Create `src/app/api/contact/route.ts` API endpoint for form submission
  - [ ] 6.8 Set up email service with Resend or SendGrid in `src/lib/email/send-contact-email.ts`
  - [ ] 6.9 Create `src/lib/email/templates/contact-template.tsx` with branded email template
  - [ ] 6.10 Add form validation error messages (inline, red text) and success toast (green, "Gracias por contactarte...")
  - [ ] 6.11 Build `src/components/contact/DirectContact.tsx` with address, phone, emails, website, social media icons
  - [ ] 6.12 Create `src/components/contact/GoogleMapsEmbed.tsx` with Google Maps integration (Santa Cruz office location)
  - [ ] 6.13 Add `src/components/contact/ClosingMessage.tsx` with institutional message and "Volver al inicio" button
  - [ ] 6.14 Implement `src/lib/whatsapp/generate-link.ts` utility for WhatsApp link generation with context-specific messages
  - [ ] 6.15 Create `src/components/marca-fusion/WhatsAppButton.tsx` reusable component with hover effects
  - [ ] 6.16 Add WhatsApp buttons throughout site with correct pre-filled messages (Capstone advisory, Tablú inquiry, general)
  - [ ] 6.17 Configure Google Maps API key in environment variables
  - [ ] 6.18 Add loading spinner to form submit button while processing
  - [ ] 6.19 Implement retry mechanism for failed form submissions
  - [ ] 6.20 Add honeypot field to prevent spam submissions

- [ ] 7.0 SEO, Performance, Accessibility & Deployment
  - [ ] 7.1 Create `src/lib/seo/metadata.ts` with metadata generation utilities for all pages
  - [ ] 7.2 Add unique title, description, and Open Graph tags to each page (50-60 char titles, 150-160 char descriptions)
  - [ ] 7.3 Implement `src/lib/seo/structured-data.ts` with JSON-LD generators for Organization, LocalBusiness, Product schemas
  - [ ] 7.4 Add Organization structured data to root layout with contact info, address, social media links
  - [ ] 7.5 Add LocalBusiness structured data to Contact page with Santa Cruz location
  - [ ] 7.6 Add Product structured data to Tablú catalog items
  - [ ] 7.7 Create `src/app/sitemap.ts` for dynamic sitemap generation (both locales, all pages)
  - [ ] 7.8 Create `src/app/robots.ts` for robots.txt configuration
  - [ ] 7.9 Optimize all images: convert to WebP with PNG/JPG fallback, use Next.js Image component with `priority` for hero images
  - [ ] 7.10 Add proper alt text to all images for accessibility
  - [ ] 7.11 Implement lazy loading for below-fold images
  - [ ] 7.12 Add `loading="lazy"` and responsive srcset to all images
  - [ ] 7.13 Audit heading hierarchy (H1 → H2 → H3) on all pages
  - [ ] 7.14 Ensure all interactive elements have focus states (follow STYLE-GUIDE.md focus ring patterns)
  - [ ] 7.15 Add ARIA labels to navigation, carousels, and interactive components
  - [ ] 7.16 Test keyboard navigation (Tab, Enter, Escape) across all components
  - [ ] 7.17 Run axe DevTools accessibility audit and fix critical violations
  - [ ] 7.18 Ensure color contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
  - [ ] 7.19 Add skip-to-content link for keyboard users
  - [ ] 7.20 Implement reduced motion support for all Framer Motion animations (check `prefers-reduced-motion`)
  - [ ] 7.21 Create custom 404 page (`src/app/[locale]/not-found.tsx`) with navigation links
  - [ ] 7.22 Create custom error page (`src/app/[locale]/error.tsx`) with contact information
  - [ ] 7.23 Configure Vercel deployment settings (environment variables, domain)
  - [ ] 7.24 Set up custom domain www.marcafusion.com.bo in Vercel
  - [ ] 7.25 Run Lighthouse audit on all pages, ensure Performance ≥90, Accessibility ≥95, SEO ≥95, Best Practices ≥95
  - [ ] 7.26 Optimize Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
  - [ ] 7.27 Submit sitemap to Google Search Console
  - [ ] 7.28 Test website on multiple devices (mobile, tablet, desktop) and browsers (Chrome, Firefox, Safari, Edge)
  - [ ] 7.29 Verify all external links open in new tabs (_blank with noopener noreferrer)
  - [ ] 7.30 Test all WhatsApp links on mobile devices to ensure they open WhatsApp app correctly

---

## Implementation Notes

### Design System Adherence
All components must follow `STYLE-GUIDE.md` patterns:
- **Colors**: Use brand green as primary, steel blue/metallic for Altrix sections, beige/pastel for Tablú
- **Typography**: Geist Sans for body, font weights: bold (700) for headlines, semibold (600) for subheadings, medium (500) for emphasis
- **Spacing**: Follow 8px base unit system (p-6 for cards, gap-4 for grids, mt-10 between sections)
- **Shadows**: Use `shadow-lg` for elevated cards, `hover:shadow-blue-500/10` for glow effects
- **Animations**: Framer Motion with BlurFade, staggered delays (0.1s increments), reduced motion support
- **Border Radius**: `rounded-xl` for cards, `rounded-md` for buttons, `rounded-full` for icons
- **Buttons**: Follow existing buttonVariants (default, outline, ghost) from Shadcn UI

### Component Reusability
Leverage existing Shadcn UI components:
- Button, Card, Input, Dialog, Dropdown, Accordion, Tabs, Toast
- Extend with custom variants as needed for brand consistency

### Internationalization Best Practices
- Store ALL user-facing text in locale files (no hardcoded strings in components)
- Use `useTranslations()` hook from next-intl in components
- Test language switching on all pages
- Ensure date/number formatting respects locale

### Form Validation
- Use Zod schemas for type-safe validation
- Provide Spanish error messages (translated in locale files)
- Show inline errors below fields with red text and icon
- Disable submit button while processing

### WhatsApp Integration
Format: `https://wa.me/591XXXXXXXX?text=URL_ENCODED_MESSAGE`
- General: +591 72136767
- Tablú: +591 67710595
- Pre-fill messages based on context (product inquiry, quote request, technical advisory)

### Image Strategy
Use AI-generated placeholders or high-quality stock photos:
- Industrial/energy plants for Capstone
- Lifestyle/desk setups for Tablú
- Santa Cruz cityscape for backgrounds
- Professional team photos

### Email Service Setup
Choose Resend (recommended) or SendGrid:
- Resend: simpler, modern API
- SendGrid: more features, established
- Store API key in `.env.local`
- Test email delivery in development

### Performance Optimization
- Dynamic imports for heavy components (Maps, carousels)
- Next.js Image component for all images
- Font optimization (Geist Sans subset to Latin + Spanish characters)
- Static generation where possible (all pages are static except contact form)

### Testing Checklist Before Deployment
- [ ] All pages load without console errors
- [ ] Navigation works (dropdown, mobile menu)
- [ ] Language switching persists preference
- [ ] Contact form submits successfully and routes emails correctly
- [ ] WhatsApp links open with correct messages
- [ ] All external links work (Capstone, Altrix, Tablú Peru, social media)
- [ ] Carousels auto-rotate and pause on hover
- [ ] Animations trigger on scroll
- [ ] Form validation shows errors
- [ ] Responsive on mobile, tablet, desktop
- [ ] Lighthouse scores meet targets
- [ ] Accessibility audit passes

---

**Status**: ✅ All tasks generated with detailed sub-tasks.

**Estimated Timeline**: 6-8 weeks for full implementation (1 developer)

**Priority Order**:
1. Foundation & Setup (1.0)
2. Shared Layout (2.0)
3. Home Page (3.0 first half)
4. About & Product Pages (3.0 second half, 4.0)
5. Remaining Pages (5.0, 6.0)
6. SEO & Deployment (7.0)
