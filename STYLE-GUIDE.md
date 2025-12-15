# Marca Fusión - Guía de Estilo Visual

**Versión:** 1.0
**Actualizado:** Diciembre 2025
**Estado:** ✅ Sistema Completo

---

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Sistema de Espaciado](#sistema-de-espaciado)
5. [Estilos de Componentes](#estilos-de-componentes)
6. [Sombras y Elevación](#sombras-y-elevación)
7. [Animaciones y Transiciones](#animaciones-y-transiciones)
8. [Border Radius](#border-radius)
9. [Opacidad y Transparencia](#opacidad-y-transparencia)
10. [Patrones Comunes Tailwind](#patrones-comunes-tailwind)
11. [Ejemplos de Componentes](#ejemplos-de-componentes)

---

## Descripción General

Sistema de diseño completo para **Marca Fusión**, basado en:
- **Framework UI:** Shadcn UI (New York variant)
- **Librería CSS:** Tailwind CSS
- **Tipografía:** Geist Sans / Inter
- **Filosofía:** Minimalista, profesional, accesible (WCAG AA)
- **Inspiración:** Linear, Vercel, Stripe, Tailwind UI

### Principios de Diseño

1. **Consistencia:** Usar siempre tokens del sistema (colores, espaciado, tipografía)
2. **Jerarquía Visual:** Clara diferenciación entre elementos mediante tamaño, peso, color
3. **Espaciado Generoso:** Respiración visual con white-space abundante
4. **Accesibilidad:** Contraste mínimo 4.5:1 (AA), focus states visibles, keyboard navigation
5. **Responsividad:** Mobile-first, breakpoints estándar (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
6. **Micro-interacciones:** Transiciones suaves (150-300ms) para mejorar UX

---

## Paleta de Colores

### Marca Green (Color Primario)

**Uso:** CTAs, enlaces activos, estados de éxito, brand identity principal
**Significado:** Crecimiento, confianza, sostenibilidad

| Tono | Hex | HSL | Uso |
|------|-----|-----|-----|
| 50 | `#f0fdf4` | `142 71% 97%` | Fondos sutiles, hover states ligeros |
| 100 | `#dcfce7` | `142 71% 93%` | Fondos de badges, notificaciones success |
| 200 | `#bbf7d0` | `142 71% 85%` | Bordes de focus, estados activos suaves |
| 300 | `#86efac` | `142 71% 74%` | Iconos secundarios, decoraciones |
| 400 | `#4ade80` | `142 71% 59%` | Hover states de botones primarios |
| **500** | `#22c55e` | `142 71% 45%` | **⭐ Base primaria - Botones, enlaces** |
| 600 | `#16a34a` | `142 71% 36%` | Active states, borders primarios |
| 700 | `#15803d` | `142 71% 29%` | Texto sobre fondos claros |
| 800 | `#166534` | `142 71% 24%` | Textos de énfasis fuerte |
| 900 | `#14532d` | `142 71% 20%` | Headings oscuros |
| 950 | `#052e16` | `142 71% 10%` | Fondos oscuros extremos |

**Clase Tailwind:** `bg-marca-green-500`, `text-marca-green-600`, `border-marca-green-400`

---

### Marca Steel (Color Secundario - Altrix)

**Uso:** Texto secundario, bordes, fondos sutiles, componentes tecnológicos
**Significado:** Profesionalismo, tecnología, precisión

| Tono | Hex | HSL | Uso |
|------|-----|-----|-----|
| 50 | `#f8fafc` | `215 16% 98%` | Fondos de página, backgrounds |
| 100 | `#f1f5f9` | `215 16% 96%` | Hover states sutiles |
| 200 | `#e2e8f0` | `215 16% 91%` | Bordes por defecto |
| 300 | `#cbd5e1` | `215 16% 84%` | Dividers, separadores |
| 400 | `#94a3b8` | `215 16% 65%` | Texto deshabilitado |
| **500** | `#64748b` | `215 16% 47%` | **⭐ Texto secundario principal** |
| 600 | `#475569` | `215 16% 35%` | Texto body oscuro |
| 700 | `#334155` | `215 16% 27%` | Headings secundarios |
| 800 | `#1e293b` | `215 16% 17%` | Texto principal oscuro |
| 900 | `#0f172a` | `215 16% 11%` | Fondos dark mode |
| 950 | `#020617` | `215 16% 5%` | Backgrounds más oscuros |

**Clase Tailwind:** `text-marca-steel-600`, `bg-marca-steel-100`, `border-marca-steel-300`

---

### Marca Beige (Color Terciario - Tablú)

**Uso:** Fondos alternativos, divisores, variaciones neutras cálidas
**Significado:** Calidez, elegancia, tradición

| Tono | Hex | HSL | Uso |
|------|-----|-----|-----|
| 50 | `#fafaf9` | `20 6% 98%` | Fondos cálidos sutiles |
| 100 | `#f5f5f4` | `20 6% 96%` | Backgrounds de secciones |
| 200 | `#e7e5e4` | `20 6% 90%` | Bordes neutros |
| 300 | `#d6d3d1` | `20 6% 82%` | Dividers, líneas |
| 400 | `#a8a29e` | `20 6% 64%` | Texto muted |
| **500** | `#78716c` | `20 6% 45%` | **⭐ Texto neutro cálido** |
| 600 | `#57534e` | `20 6% 33%` | Texto párrafos |
| 700 | `#44403c` | `20 6% 25%` | Headings cálidos |
| 800 | `#292524` | `20 6% 15%` | Texto principal |
| 900 | `#1c1917` | `20 6% 10%` | Headings principales |
| 950 | `#0c0a09` | `20 6% 4%` | Backgrounds oscuros |

**Clase Tailwind:** `text-marca-beige-700`, `bg-marca-beige-50`, `border-marca-beige-200`

---

### Colores de Sistema

| Color | Uso | Clase Tailwind |
|-------|-----|----------------|
| **Background** | `#ffffff` (light), `#0f172a` (dark) | `bg-background` |
| **Foreground** | `#1c1917` (light), `#f5f5f4` (dark) | `text-foreground` |
| **Muted** | `#f5f5f4` (light), `#292524` (dark) | `bg-muted` |
| **Border** | `#e7e5e4` (light), `#44403c` (dark) | `border-border` |
| **Ring** | `#22c55e` (focus) | `ring-ring` |
| **Destructive** | `#dc2626` (errores) | `bg-destructive` |

---

## Tipografía

### Font Family

```css
font-family: 'Inter', 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Pesos disponibles:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

---

### Escala Tipográfica

#### Display Styles (Títulos Hero)

| Nombre | Tamaño | Line Height | Peso | Tracking | Uso | Clase Tailwind |
|--------|--------|-------------|------|----------|-----|----------------|
| Display XL | 72px (4.5rem) | 1.0 | 600 | -0.02em | Hero sections, landing pages | `text-[4.5rem] font-semibold leading-none tracking-tighter` |
| Display LG | 60px (3.75rem) | 1.0 | 600 | -0.02em | Primary headlines | `text-6xl font-semibold leading-none tracking-tighter` |
| Display MD | 48px (3rem) | 1.1 | 600 | -0.02em | Section headers | `text-5xl font-semibold leading-tight tracking-tight` |
| Display SM | 36px (2.25rem) | 1.2 | 600 | -0.01em | Subsection titles | `text-4xl font-semibold leading-tight tracking-tight` |

**Regla:** Títulos >20px usan `tracking-tight` o `tracking-tighter`

---

#### Heading Styles

| Nombre | Tamaño | Line Height | Peso | Tracking | Uso | Clase Tailwind |
|--------|--------|-------------|------|----------|-----|----------------|
| Heading XL | 30px (1.875rem) | 1.3 | 600 | -0.01em | Card titles, feature headings | `text-3xl font-semibold tracking-tight` |
| Heading LG | 24px (1.5rem) | 1.4 | 600 | -0.005em | Component headers | `text-2xl font-semibold tracking-tight` |
| Heading MD | 20px (1.25rem) | 1.5 | 600 | 0 | Small sections | `text-xl font-semibold` |
| Heading SM | 16px (1rem) | 1.5 | 600 | 0 | List headers, accordions | `text-base font-semibold` |

---

#### Body Styles

| Nombre | Tamaño | Line Height | Peso | Uso | Clase Tailwind |
|--------|--------|-------------|------|-----|----------------|
| Body LG | 18px (1.125rem) | 1.7 | 400 | Intro paragraphs, featured content | `text-lg leading-relaxed` |
| Body MD | 16px (1rem) | 1.6 | 400 | Default body text, descriptions | `text-base leading-normal` |
| Body SM | 14px (0.875rem) | 1.6 | 400 | Captions, helper text | `text-sm leading-normal` |

---

#### Label Styles

| Nombre | Tamaño | Line Height | Peso | Uso | Clase Tailwind |
|--------|--------|-------------|------|-----|----------------|
| Label LG | 14px (0.875rem) | 1.4 | 500 | Buttons, badges, tabs | `text-sm font-medium` |
| Label MD | 13px (0.8125rem) | 1.4 | 500 | Input labels, small buttons | `text-[0.8125rem] font-medium` |
| Label SM | 12px (0.75rem) | 1.4 | 500 | Timestamps, metadata, status | `text-xs font-medium` |

---

### Ejemplos de Uso

```tsx
// Display XL - Hero
<h1 className="text-[4.5rem] font-semibold leading-none tracking-tighter text-marca-beige-900">
  Bienvenido a Marca Fusión
</h1>

// Heading LG - Section
<h2 className="text-2xl font-semibold tracking-tight text-marca-beige-900">
  Nuestros Servicios
</h2>

// Body MD - Paragraph
<p className="text-base leading-normal text-marca-beige-600">
  Soluciones integrales para empresas en crecimiento.
</p>

// Label LG - Button
<button className="text-sm font-medium">
  Contactar
</button>
```

---

## Sistema de Espaciado

**Base:** Escala de 4px
**Rango:** 0.5 (2px) → 64 (256px)

### Tokens de Espaciado

| Token | Valor | Uso Principal |
|-------|-------|---------------|
| `0.5` | 2px | Dividers finos, bordes mínimos |
| `1` | 4px | Icon-text gaps, tight spacing |
| `1.5` | 6px | Pequeños gaps inline |
| `2` | 8px | Padding vertical de botones pequeños |
| `3` | 12px | Padding interno de componentes |
| **`4`** | **16px** | **⭐ Default padding de cards** |
| `5` | 20px | Padding mediano |
| **`6`** | **24px** | **⭐ Padding de secciones pequeñas** |
| `8` | 32px | Padding de containers, column gaps |
| `10` | 40px | Margin entre secciones |
| **`12`** | **48px** | **⭐ Spacing entre secciones grandes** |
| `16` | 64px | Hero sections, page sections |
| `20` | 80px | Extra large gaps |
| `24` | 96px | Section separators principales |
| `32` | 128px | Page-level spacing |
| `40` | 160px | Hero padding top/bottom |
| `48` | 192px | Extra large sections |
| `64` | 256px | Maximum spacing |

---

### Patrones de Espaciado Común

```tsx
// Container con padding responsivo
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Card con padding estándar
<div className="p-6">

// Section spacing (vertical)
<section className="py-12 lg:py-16">

// Grid gaps
<div className="grid grid-cols-3 gap-6 lg:gap-8">

// Stack spacing (vertical)
<div className="space-y-4">

// Inline spacing (horizontal)
<div className="flex gap-3 items-center">
```

---

## Estilos de Componentes

### Botones

#### Primary Button

**Uso:** CTAs principales (Submit, Continuar, Comprar)

```tsx
<button className="px-5 py-2.5 bg-marca-green-500 text-white rounded-lg font-medium text-sm hover:bg-marca-green-600 active:bg-marca-green-700 focus:ring-2 focus:ring-marca-green-100 focus:ring-offset-2 transition-all duration-150 shadow-sm hover:shadow-md">
  Primary Button
</button>
```

**Estados:**
- Default: `bg-marca-green-500`
- Hover: `bg-marca-green-600` + `shadow-md`
- Active: `bg-marca-green-700`
- Focus: `ring-2 ring-marca-green-100`
- Disabled: `opacity-50 cursor-not-allowed`

---

#### Secondary Button

**Uso:** Acciones alternativas (Cancelar, Volver, Más Info)

```tsx
<button className="px-5 py-2.5 bg-transparent text-marca-green-600 border border-marca-green-500 rounded-lg font-medium text-sm hover:bg-marca-green-50 active:bg-marca-green-100 focus:ring-2 focus:ring-marca-green-100 transition-all duration-150">
  Secondary Button
</button>
```

---

#### Tertiary Button

**Uso:** Acciones sutiles, navegación secundaria

```tsx
<button className="px-5 py-2.5 bg-marca-steel-100 text-marca-steel-700 rounded-lg font-medium text-sm hover:bg-marca-steel-200 active:bg-marca-steel-300 transition-all duration-150">
  Tertiary Button
</button>
```

---

#### Ghost Button

**Uso:** Navegación inline, acciones no críticas

```tsx
<button className="px-5 py-2.5 bg-transparent text-marca-beige-600 hover:bg-marca-beige-100 active:bg-marca-beige-200 rounded-lg font-medium text-sm transition-all duration-150">
  Ghost Button
</button>
```

---

#### Tamaños de Botones

```tsx
// Small
<button className="px-4 py-2 text-sm rounded">Small</button>

// Medium (default)
<button className="px-5 py-2.5 text-sm rounded-lg">Medium</button>

// Large
<button className="px-6 py-3 text-base rounded-lg">Large</button>
```

---

### Cards

#### Default Card

```tsx
<div className="bg-white border border-marca-beige-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
  {/* Card content */}
</div>
```

**Especificaciones:**
- Border: `1px` solid `marca-beige-200`
- Border radius: `0.75rem` (12px)
- Padding: `1.5rem` (24px)
- Hover: `shadow-md` + `translateY(-2px)`

---

#### Elevated Card

**Uso:** Contenido destacado, featured items

```tsx
<div className="bg-white border border-marca-beige-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
  {/* Card content */}
</div>
```

---

#### Branded Card (Green)

**Uso:** CTAs especiales, promociones

```tsx
<div className="bg-gradient-to-br from-marca-green-50 to-marca-green-100 border border-marca-green-200 rounded-lg p-6">
  {/* Card content */}
</div>
```

---

### Form Inputs

#### Text Input

```tsx
<input
  type="text"
  className="w-full px-3.5 py-2.5 bg-white border border-marca-beige-200 rounded-lg text-sm text-marca-beige-900 placeholder:text-marca-beige-400 focus:border-marca-green-500 focus:ring-2 focus:ring-marca-green-100 focus:outline-none transition-all duration-150"
  placeholder="Enter text..."
/>
```

**Estados:**
- Default: `border-marca-beige-200`
- Hover: `border-marca-steel-300`
- Focus: `border-marca-green-500` + `ring-2 ring-marca-green-100`
- Error: `border-red-500` + `ring-2 ring-red-100`
- Disabled: `bg-marca-beige-50 opacity-50 cursor-not-allowed`

---

#### Textarea

```tsx
<textarea
  className="w-full px-3.5 py-2.5 bg-white border border-marca-beige-200 rounded-lg text-sm text-marca-beige-900 placeholder:text-marca-beige-400 focus:border-marca-green-500 focus:ring-2 focus:ring-marca-green-100 focus:outline-none resize-vertical min-h-[6rem] transition-all duration-150"
  placeholder="Enter message..."
/>
```

---

#### Select

```tsx
<select className="w-full px-3.5 py-2.5 bg-white border border-marca-beige-200 rounded-lg text-sm text-marca-beige-900 focus:border-marca-green-500 focus:ring-2 focus:ring-marca-green-100 focus:outline-none transition-all duration-150">
  <option>Select option</option>
</select>
```

---

### Badges

#### Success Badge

```tsx
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-marca-green-50 text-marca-green-700 border border-marca-green-200 rounded-full text-xs font-medium">
  <div className="w-1.5 h-1.5 bg-marca-green-500 rounded-full" />
  Active
</span>
```

---

#### Neutral Badge

```tsx
<span className="px-2.5 py-1 bg-marca-beige-50 text-marca-beige-700 border border-marca-beige-200 rounded-full text-xs font-medium">
  Neutral
</span>
```

---

#### Warning Badge

```tsx
<span className="px-2.5 py-1 bg-yellow-50 text-yellow-800 border border-yellow-200 rounded-full text-xs font-medium">
  Warning
</span>
```

---

#### Error Badge

```tsx
<span className="px-2.5 py-1 bg-red-50 text-red-800 border border-red-200 rounded-full text-xs font-medium">
  Error
</span>
```

---

## Sombras y Elevación

### Niveles de Sombra

| Nivel | Clase | Uso |
|-------|-------|-----|
| XS | `shadow-xs` | Bordes sutiles, dividers elevados |
| SM | `shadow-sm` | Botones, inputs en hover |
| Default | `shadow` | Cards por defecto |
| MD | `shadow-md` | Cards elevadas, hover states |
| LG | `shadow-lg` | Dropdowns, tooltips |
| XL | `shadow-xl` | Modals, drawers |
| Inner | `shadow-inner` | Inputs pressed, inset effects |

---

### Sombras Personalizadas

```tsx
// Green Glow (brand focus)
className="shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-marca-green-200"

// Steel Glow (secondary focus)
className="shadow-[0_0_20px_rgba(100,116,139,0.3)] border border-marca-steel-200"
```

---

### Patrones de Elevación

```tsx
// Card hover effect
<div className="shadow-sm hover:shadow-md transition-shadow duration-200">

// Button press effect
<button className="shadow-sm active:shadow-inner">

// Modal overlay
<div className="shadow-xl">
```

---

## Animaciones y Transiciones

### Duraciones

| Nombre | Valor | Uso |
|--------|-------|-----|
| Micro | `150ms` | Botones, hover states rápidos |
| Default | `200ms` | Transiciones generales |
| Smooth | `300ms` | Modals, page transitions |
| Slow | `500ms` | Animaciones complejas |

---

### Easing Functions

- **Default:** `ease-in-out` (suave entrada/salida)
- **Enter:** `ease-out` (elementos que aparecen)
- **Exit:** `ease-in` (elementos que desaparecen)

---

### Transiciones Comunes

#### Fade In

```tsx
className="opacity-0 animate-in fade-in duration-300"
// O con Tailwind básico:
className="opacity-100 transition-opacity duration-300"
```

---

#### Scale Up (Hover)

```tsx
className="hover:scale-105 transition-transform duration-200 ease-out"
```

---

#### Slide Up (Enter)

```tsx
className="translate-y-4 opacity-0 animate-in slide-in-from-bottom-4 fade-in duration-300"
```

---

#### Color Transition

```tsx
className="bg-marca-green-500 hover:bg-marca-green-600 transition-colors duration-150"
```

---

### Patrones de Componentes

```tsx
// Button - All properties
<button className="transition-all duration-150 hover:scale-[1.02]">

// Card - Shadow + Transform
<div className="transition-[shadow,transform] duration-200 hover:shadow-md hover:-translate-y-0.5">

// Modal - Opacity + Scale
<div className="opacity-0 scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 transition-all duration-200">
```

---

## Border Radius

### Escalas de Redondeo

| Nivel | Valor | Uso | Clase Tailwind |
|-------|-------|-----|----------------|
| None | 0 | Sharp corners, modern aesthetic | `rounded-none` |
| SM | 4px | Inputs pequeños, badges | `rounded-sm` |
| Default | 6px | Elementos generales | `rounded` |
| **MD** | **8px** | **⭐ Botones, cards pequeñas** | `rounded-md` |
| **LG** | **12px** | **⭐ Cards, containers** | `rounded-lg` |
| XL | 16px | Cards grandes, hero sections | `rounded-xl` |
| 2XL | 24px | Feature blocks, extra soft | `rounded-2xl` |
| Full | 9999px | Pills, badges, avatars | `rounded-full` |

---

### Variable CSS

```css
--radius: 0.5rem; /* 8px - Default */
```

Uso en componentes:
```tsx
className="rounded-[var(--radius)]"
```

---

## Opacidad y Transparencia

### Escalas de Opacidad

| Nivel | Valor | Uso | Clase Tailwind |
|-------|-------|-----|----------------|
| 0 | 0% | Invisible | `opacity-0` |
| 5 | 5% | Overlay muy sutil | `opacity-5` |
| 10 | 10% | Overlay sutil | `opacity-10` |
| 20 | 20% | Disabled states leves | `opacity-20` |
| 40 | 40% | Muted elements | `opacity-40` |
| **50** | **50%** | **⭐ Disabled standard** | `opacity-50` |
| 60 | 60% | Hover states | `opacity-60` |
| 80 | 80% | Semi-transparent | `opacity-80` |
| 90 | 90% | Casi opaco | `opacity-90` |
| 100 | 100% | Completamente opaco | `opacity-100` |

---

### Backdrop Blur

```tsx
// Sticky header con blur
<header className="sticky top-0 bg-white/80 backdrop-blur-md">

// Modal overlay
<div className="bg-black/40 backdrop-blur-sm">
```

---

## Patrones Comunes Tailwind

### Layout Container

```tsx
// Max-width container con padding responsivo
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Contenido */}
</div>
```

**Breakpoints:**
- Mobile: `px-4` (16px)
- Tablet: `sm:px-6` (24px)
- Desktop: `lg:px-8` (32px)

---

### Responsive Grid

```tsx
// 1 col móvil, 2 tablet, 3 desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Grid items */}
</div>
```

---

### Section Spacing

```tsx
// Padding vertical responsivo
<section className="py-12 lg:py-16">
  {/* Contenido */}
</section>
```

---

### Flex Center

```tsx
// Centrado perfecto
<div className="flex items-center justify-center">

// Con gap
<div className="flex items-center gap-3">
```

---

### Sticky Header

```tsx
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-marca-beige-200">
  {/* Navigation */}
</header>
```

---

### Gradient Background

```tsx
// Gradient sutil
<div className="bg-gradient-to-b from-white to-marca-beige-50">

// Gradient verde
<div className="bg-gradient-to-br from-marca-green-50 to-marca-green-100">
```

---

### Text Truncate

```tsx
// Single line
<p className="truncate">

// Multiple lines (3)
<p className="line-clamp-3">
```

---

### Aspect Ratio

```tsx
// 16:9
<div className="aspect-video">

// Square
<div className="aspect-square">
```

---

## Ejemplos de Componentes

### Feature Card Completo

```tsx
<div className="group bg-white border border-marca-beige-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
  {/* Icon Container */}
  <div className="w-12 h-12 bg-gradient-to-br from-marca-green-50 to-marca-green-100 border border-marca-green-200 rounded-lg flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-marca-green-600" />
  </div>

  {/* Title */}
  <h3 className="text-2xl font-semibold tracking-tight text-marca-beige-900 mb-3">
    Crecimiento Sostenible
  </h3>

  {/* Description */}
  <p className="text-base leading-normal text-marca-beige-600 mb-4">
    Estrategias institucionales para expandir tu negocio con responsabilidad.
  </p>

  {/* CTA Link */}
  <div className="flex items-center gap-2 text-sm font-medium text-marca-green-600 group-hover:gap-3 transition-all duration-150">
    <span>Ver más</span>
    <svg className="w-4 h-4" />
  </div>
</div>
```

---

### Hero Section

```tsx
<section className="relative py-20 lg:py-32 overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-marca-beige-50 to-white" />

  {/* Content Container */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Badge */}
    <div className="flex justify-center mb-6">
      <span className="inline-flex items-center gap-2 px-4 py-2 bg-marca-green-50 border border-marca-green-200 rounded-full text-sm font-medium text-marca-green-700">
        <div className="w-1.5 h-1.5 bg-marca-green-500 rounded-full animate-pulse" />
        Nuevo: Actualización 2025
      </span>
    </div>

    {/* Heading */}
    <h1 className="text-center text-5xl lg:text-7xl font-semibold leading-none tracking-tighter text-marca-beige-900 mb-6">
      Innovación que <br className="hidden lg:block" />
      <span className="bg-gradient-to-r from-marca-green-600 to-marca-green-400 bg-clip-text text-transparent">
        transforma negocios
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-center text-lg lg:text-xl leading-relaxed text-marca-beige-600 max-w-3xl mx-auto mb-10">
      Soluciones integrales para empresas en crecimiento. Tecnología, estrategia y diseño en un solo lugar.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="w-full sm:w-auto px-8 py-4 bg-marca-green-500 text-white rounded-lg font-medium text-base hover:bg-marca-green-600 active:bg-marca-green-700 focus:ring-2 focus:ring-marca-green-100 focus:ring-offset-2 shadow-sm hover:shadow-md transition-all duration-150">
        Comenzar Ahora
      </button>
      <button className="w-full sm:w-auto px-8 py-4 bg-white text-marca-green-600 border border-marca-green-500 rounded-lg font-medium text-base hover:bg-marca-green-50 transition-all duration-150">
        Ver Demo
      </button>
    </div>
  </div>
</section>
```

---

### Navigation Header

```tsx
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-marca-beige-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-marca-green-500 to-marca-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">MF</span>
        </div>
        <span className="text-lg font-semibold tracking-tight text-marca-beige-900">
          Marca Fusión
        </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        <a href="#" className="px-3 py-2 text-sm font-medium text-marca-beige-600 hover:text-marca-green-600 hover:bg-marca-green-50 rounded-lg transition-colors duration-150">
          Inicio
        </a>
        <a href="#" className="px-3 py-2 text-sm font-medium text-marca-beige-600 hover:text-marca-green-600 hover:bg-marca-green-50 rounded-lg transition-colors duration-150">
          Servicios
        </a>
        <a href="#" className="px-3 py-2 text-sm font-medium text-marca-beige-600 hover:text-marca-green-600 hover:bg-marca-green-50 rounded-lg transition-colors duration-150">
          Nosotros
        </a>
        <a href="#" className="px-3 py-2 text-sm font-medium text-marca-beige-600 hover:text-marca-green-600 hover:bg-marca-green-50 rounded-lg transition-colors duration-150">
          Contacto
        </a>
      </nav>

      {/* CTA Button */}
      <button className="px-5 py-2.5 bg-marca-green-500 text-white rounded-lg font-medium text-sm hover:bg-marca-green-600 shadow-sm hover:shadow-md transition-all duration-150">
        Empezar
      </button>
    </div>
  </div>
</header>
```

---

### Stats Section

```tsx
<section className="py-12 lg:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Stat Card */}
      <div className="bg-marca-green-50 border border-marca-green-200 rounded-lg p-6">
        <div className="text-4xl font-semibold tracking-tight text-marca-green-600 mb-2">
          250+
        </div>
        <div className="text-sm font-medium text-marca-green-700">
          Proyectos Completados
        </div>
        <div className="text-xs text-marca-green-600 mt-1">
          Desde 2015
        </div>
      </div>

      <div className="bg-marca-steel-50 border border-marca-steel-200 rounded-lg p-6">
        <div className="text-4xl font-semibold tracking-tight text-marca-steel-600 mb-2">
          98%
        </div>
        <div className="text-sm font-medium text-marca-steel-700">
          Satisfacción del Cliente
        </div>
        <div className="text-xs text-marca-steel-600 mt-1">
          Basado en reviews
        </div>
      </div>

      <div className="bg-marca-beige-50 border border-marca-beige-200 rounded-lg p-6">
        <div className="text-4xl font-semibold tracking-tight text-marca-beige-700 mb-2">
          50+
        </div>
        <div className="text-sm font-medium text-marca-beige-700">
          Empresas Atendidas
        </div>
        <div className="text-xs text-marca-beige-600 mt-1">
          En 12 países
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### CTA Section

```tsx
<section className="relative py-16 lg:py-24 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-marca-green-50 via-marca-green-100 to-marca-green-50" />

  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-marca-green-300 rounded-full text-sm font-medium text-marca-green-700 mb-6">
      <svg className="w-4 h-4" />
      <span>Sistema Completo</span>
    </div>

    {/* Heading */}
    <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-marca-beige-900 mb-6">
      ¿Listo para comenzar tu proyecto?
    </h2>

    {/* Description */}
    <p className="text-lg leading-relaxed text-marca-green-700 max-w-2xl mx-auto mb-10">
      Aplica este sistema de diseño en todos tus componentes para crear interfaces profesionales y consistentes.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="w-full sm:w-auto px-8 py-4 bg-marca-green-500 text-white rounded-lg font-medium text-base hover:bg-marca-green-600 shadow-md hover:shadow-lg transition-all duration-150">
        Contactar Ahora
      </button>
      <button className="w-full sm:w-auto px-8 py-4 bg-white text-marca-green-600 border border-marca-green-400 rounded-lg font-medium text-base hover:bg-marca-green-50 transition-all duration-150">
        Ver Portfolio
      </button>
    </div>
  </div>
</section>
```

---

## Checklist de Implementación

Al crear nuevos componentes, verifica:

- [ ] **Colores:** Solo uso de tokens del sistema (`marca-green`, `marca-steel`, `marca-beige`)
- [ ] **Tipografía:** Escalas correctas (Display/Heading/Body/Label), tracking en títulos grandes
- [ ] **Espaciado:** Múltiplos de 4px, padding/margin consistente
- [ ] **Border Radius:** `rounded-lg` para cards, `rounded-md` para botones
- [ ] **Sombras:** Niveles apropiados (sm/md/lg), hover states con shadow
- [ ] **Transiciones:** 150-300ms, `ease-out` para hover, `ease-in-out` para transiciones
- [ ] **Accesibilidad:** Contraste 4.5:1+, focus states visibles, keyboard navigation
- [ ] **Responsividad:** Mobile-first, breakpoints en sm/md/lg/xl
- [ ] **Hover States:** Todos los elementos interactivos tienen feedback visual
- [ ] **Dark Mode:** (Opcional) Variables CSS para light/dark variants

---

## Recursos Adicionales

### Archivos del Sistema

- `tailwind.config.ts` - Configuración de Tailwind con tokens
- `globals.css` - Variables CSS y clases utility custom
- `components/ui/` - Librería de componentes Shadcn

### Referencias Externas

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Última actualización:** Diciembre 2025
**Versión:** 1.0
**Mantenedor:** Equipo Marca Fusión
