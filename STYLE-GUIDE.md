# Marca Fusion Design System & Style Guide

## Overview

Marca Fusion utilizes a comprehensive design system built on **Shadcn UI** (New York style variant) with **Tailwind CSS** for styling. The system emphasizes a modern, professional aesthetic with smooth animations, dark mode support, and accessibility-first principles. The design language features clean layouts, subtle gradients, and refined interactions that create a premium user experience.

**Key Technologies:**
- **Shadcn UI** (New York variant) - Component foundation
- **Tailwind CSS** - Utility-first styling framework
- **CSS Variables** - Dynamic theming with HSL color format
- **Framer Motion** - Advanced animations and transitions
- **Magic UI** - Custom animated components
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Consistent icon library

---

## Color Palette

The color system is built on **HSL CSS variables** for seamless dark/light mode switching. All colors are defined in `src/app/globals.css` and extended through `tailwind.config.ts`.

### Light Mode Colors

```css
--background: 0 0% 100%        /* Pure white backgrounds */
--foreground: 0 0% 3.9%        /* Near-black text */
--card: 0 0% 100%              /* White cards */
--card-foreground: 0 0% 3.9%   /* Card text */
--primary: 0 0% 9%             /* Dark primary (almost black) */
--primary-foreground: 0 0% 98% /* Light text on primary */
--secondary: 0 0% 96.1%        /* Light gray secondary */
--secondary-foreground: 0 0% 9% /* Dark text on secondary */
--muted: 0 0% 96.1%            /* Muted backgrounds */
--muted-foreground: 0 0% 45.1% /* Muted text (medium gray) */
--accent: 0 0% 96.1%           /* Accent backgrounds */
--accent-foreground: 0 0% 9%   /* Accent text */
--destructive: 0 84.2% 60.2%   /* Red for errors/destructive actions */
--destructive-foreground: 0 0% 98% /* Light text on destructive */
--border: 0 0% 89.8%           /* Light gray borders */
--input: 0 0% 89.8%            /* Input borders */
--ring: 0 0% 3.9%              /* Focus ring (dark) */
```

### Dark Mode Colors

```css
--background: 0 0% 8%          /* Dark background (near black) */
--foreground: 0 0% 95%         /* Light text */
--card: 0 0% 10%               /* Slightly lighter dark cards */
--card-foreground: 0 0% 95%    /* Light card text */
--primary: 0 0% 95%            /* Light primary (inverted) */
--primary-foreground: 0 0% 10% /* Dark text on primary */
--secondary: 0 0% 16%          /* Dark gray secondary */
--secondary-foreground: 0 0% 95% /* Light text on secondary */
--muted: 0 0% 16%              /* Muted dark backgrounds */
--muted-foreground: 0 0% 60%   /* Muted text (light gray) */
--accent: 0 0% 16%             /* Dark accent backgrounds */
--accent-foreground: 0 0% 95%  /* Light accent text */
--destructive: 0 62.8% 50%     /* Darker red for dark mode */
--destructive-foreground: 0 0% 98% /* Light text on destructive */
--border: 0 0% 18%             /* Dark borders */
--input: 0 0% 16%              /* Dark input borders */
--ring: 0 0% 83.1%             /* Light focus ring */
```

### Chart Colors

Used for data visualizations and charts:

**Light Mode:**
```css
--chart-1: 12 76% 61%    /* Warm orange */
--chart-2: 173 58% 39%   /* Teal */
--chart-3: 197 37% 24%   /* Deep blue */
--chart-4: 43 74% 66%    /* Yellow */
--chart-5: 27 87% 67%    /* Orange */
```

**Dark Mode:**
```css
--chart-1: 217 91% 60%   /* Bright blue */
--chart-2: 160 60% 45%   /* Green */
--chart-3: 30 80% 55%    /* Orange */
--chart-4: 280 65% 60%   /* Purple */
--chart-5: 340 75% 55%   /* Pink */
```

### Sidebar Colors

Dedicated color tokens for sidebar components:

**Light Mode:**
```css
--sidebar-background: 0 0% 98%         /* Off-white */
--sidebar-foreground: 240 5.3% 26.1%   /* Dark gray text */
--sidebar-primary: 240 5.9% 10%        /* Almost black */
--sidebar-primary-foreground: 0 0% 98% /* Light text */
--sidebar-accent: 240 4.8% 95.9%       /* Very light gray */
--sidebar-accent-foreground: 240 5.9% 10% /* Dark text */
--sidebar-border: 220 13% 91%          /* Light blue-gray border */
--sidebar-ring: 217.2 91.2% 59.8%      /* Blue focus ring */
```

**Dark Mode:**
```css
--sidebar-background: 0 0% 6%          /* Very dark */
--sidebar-foreground: 0 0% 90%         /* Light text */
--sidebar-primary: 217 91% 60%         /* Bright blue */
--sidebar-primary-foreground: 0 0% 100% /* White text */
--sidebar-accent: 0 0% 12%             /* Dark accent */
--sidebar-accent-foreground: 0 0% 90%  /* Light text */
--sidebar-border: 0 0% 14%             /* Dark border */
--sidebar-ring: 217 91% 60%            /* Blue focus ring */
```

### Brand Accent Colors

Throughout the project, **blue** is used as the primary accent color:

- **Blue-500** (`#3b82f6`): Primary interactive elements, hover states
- **Purple-500/600** (`#a855f7` / `#9333ea`): Gradient backgrounds, decorative elements
- **Pink-500** (`#ec4899`): Accent gradients, decorative backgrounds

These colors are typically used with opacity modifiers (e.g., `blue-500/10`, `purple-500/20`).

---

## Typography

### Font Families

The project uses **Geist** fonts from Next.js Google Fonts:

```typescript
// Primary Sans-Serif Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace Font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

**Usage:**
- `font-geist-sans`: Default font for all text
- `font-geist-mono`: Code blocks, technical content

Body tag applies: `antialiased` for smoother font rendering.

### Font Sizes & Weights

#### Headings

```css
/* Hero Headlines (H1) */
text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight
/* 36px → 60px → 72px, Bold (700), Tight letter spacing */

/* Section Headings (H2) */
text-3xl sm:text-5xl font-bold tracking-tight
/* 30px → 48px, Bold (700) */

/* Subsection Headings (H3) */
text-xl font-semibold tracking-tight
/* 20px, Semi-Bold (600) */

/* Card Titles */
text-lg font-semibold leading-none tracking-tight
/* 18px, Semi-Bold (600), No line height adjustment */
```

#### Body Text

```css
/* Large Body */
text-lg sm:text-xl leading-8
/* 18px → 20px, Line height 32px */

/* Default Body */
text-base (16px), text-sm (14px)
/* Standard sizes for paragraphs */

/* Small Text */
text-xs (12px)
/* Captions, metadata, helper text */
```

#### Font Weights

- `font-bold` (700): Headlines, primary CTAs
- `font-semibold` (600): Subheadings, card titles, buttons
- `font-medium` (500): Emphasized body text, navigation items
- `font-normal` (400): Default body text

### Text Colors

```css
/* Primary Text */
text-foreground          /* Default text color */

/* Secondary Text */
text-muted-foreground    /* Lower emphasis text */

/* Semantic Colors */
text-primary-foreground  /* Text on primary backgrounds */
text-destructive         /* Error messages */
text-green-500          /* Success states (+12% indicators) */
text-red-500            /* Negative states */

/* Gradient Text */
bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent
bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent
```

---

## Spacing System

The project follows Tailwind's default spacing scale with common patterns:

### Padding

**Card Padding:**
```css
p-6     /* 24px - Standard card content */
p-4     /* 16px - Compact cards, mobile */
```

**Button Padding:**
```css
px-8 py-4    /* 32px × 16px - Large CTAs */
px-4 py-2    /* 16px × 8px - Default buttons */
px-3 py-1    /* 12px × 4px - Small buttons */
```

**Section Padding:**
```css
py-20 sm:py-32 lg:py-40    /* Vertical section spacing */
/* 80px → 128px → 160px */

px-6 lg:px-8               /* Horizontal container padding */
/* 24px → 32px */
```

### Margins & Gaps

**Vertical Spacing:**
```css
mt-6    /* 24px - Paragraph spacing */
mt-10   /* 40px - Section element spacing */
mt-16   /* 64px - Large section spacing */
mt-20   /* 80px - Between major sections */
mb-4    /* 16px - Small bottom margin */
mb-6    /* 24px - Medium bottom margin */
mb-16   /* 64px - Large bottom margin */
```

**Grid Gaps:**
```css
gap-3 sm:gap-4              /* 12px → 16px - Tight grids */
gap-4                       /* 16px - Standard grid gap */
gap-6                       /* 24px - Loose grid gap */
gap-x-6                     /* 24px - Horizontal gap only */
space-y-1.5                 /* 6px - Stack spacing (CardHeader) */
space-y-4                   /* 16px - Card content spacing */
```

### Layout Containers

```css
/* Max Width Containers */
max-w-7xl    /* 1280px - Main content width */
max-w-5xl    /* 1024px - Centered hero content */
max-w-3xl    /* 768px - Narrow content (headers) */
max-w-lg     /* 512px - Dialog/Modal width */

/* Centering */
mx-auto      /* Horizontal center */
```

---

## Component Styles

### Buttons

Defined in `src/components/ui/button.tsx`:

#### Button Variants

```typescript
// Default - Primary action
variant="default"
bg-primary text-primary-foreground shadow hover:bg-primary/90

// Destructive - Dangerous actions
variant="destructive"
bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90

// Outline - Secondary action
variant="outline"
border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground

// Secondary - Tertiary action
variant="secondary"
bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80

// Ghost - Minimal interaction
variant="ghost"
hover:bg-accent hover:text-accent-foreground

// Link - Text link style
variant="link"
text-primary underline-offset-4 hover:underline
```

#### Button Sizes

```typescript
// Default
size="default"
h-9 px-4 py-2 (height: 36px, padding: 16px × 8px)

// Small
size="sm"
h-8 rounded-md px-3 text-xs (height: 32px, text: 12px)

// Large
size="lg"
h-10 rounded-md px-8 (height: 40px, padding: 32px)

// Icon
size="icon"
h-9 w-9 (36px × 36px square)
```

#### Button Base Styles

```css
inline-flex items-center justify-center gap-2
whitespace-nowrap rounded-md text-sm font-medium
transition-colors
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
disabled:pointer-events-none disabled:opacity-50
[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
```

### Cards

Defined in `src/components/ui/card.tsx`:

```typescript
// Card Container
Card:
rounded-xl border bg-card text-card-foreground shadow

// Card Header
CardHeader:
flex flex-col space-y-1.5 p-6

// Card Title
CardTitle:
font-semibold leading-none tracking-tight

// Card Description
CardDescription:
text-sm text-muted-foreground

// Card Content
CardContent:
p-6 pt-0 (padding: 24px, no top padding)

// Card Footer
CardFooter:
flex items-center p-6 pt-0
```

#### Card Hover Effects (Common Pattern)

```css
group hover:shadow-lg transition-shadow duration-300
hover:border-blue-500/50 hover:shadow-blue-500/10
hover:scale-105
```

### Badges

Defined in `src/components/ui/badge.tsx`:

```typescript
// Default Badge
variant="default"
border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80

// Secondary Badge
variant="secondary"
border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80

// Destructive Badge
variant="destructive"
border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80

// Outline Badge
variant="outline"
text-foreground (border visible)

// Base Styles
inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold
transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
```

### Inputs

Defined in `src/components/ui/input.tsx`:

```css
flex h-9 w-full rounded-md border border-input bg-transparent
px-3 py-1 text-base md:text-sm shadow-sm
transition-colors
file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
placeholder:text-muted-foreground
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
disabled:cursor-not-allowed disabled:opacity-50
```

### Dialogs

Defined in `src/components/ui/dialog.tsx`:

```css
/* Dialog Overlay */
DialogOverlay:
fixed inset-0 z-50 bg-black/80
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0

/* Dialog Content */
DialogContent:
fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg
translate-x-[-50%] translate-y-[-50%]
gap-4 border bg-background p-6 shadow-lg sm:rounded-lg
duration-200
data-[state=open]:animate-in data-[state=closed]:animate-out
data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]
data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]

/* Dialog Title */
DialogTitle:
text-lg font-semibold leading-none tracking-tight

/* Dialog Description */
DialogDescription:
text-sm text-muted-foreground
```

---

## Shadows & Elevation

### Standard Shadows

```css
/* Subtle Shadow - Cards */
shadow         /* 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06) */

/* Small Shadow - Interactive elements */
shadow-sm      /* 0 1px 2px rgba(0,0,0,0.05) */

/* Medium Shadow - Elevated cards */
shadow-md      /* 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06) */

/* Large Shadow - Hero elements */
shadow-lg      /* 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) */

/* Extra Large - Modal/Prominent elements */
shadow-2xl     /* 0 25px 50px rgba(0,0,0,0.25) */
```

### Colored Shadows (Glow Effects)

Used extensively for interactive elements:

```css
/* Blue Glow - Primary interactions */
hover:shadow-blue-500/10
shadow-lg shadow-blue-500/10

/* Inset Shadows - Button depth */
shadow-[inset_0_-8px_10px_#ffffff1f]
group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]
group-active:shadow-[inset_0_-10px_10px_#ffffff3f]
```

### Blur Effects (Decorative Backgrounds)

```css
blur-2xl     /* 40px blur - Small decorative orbs */
blur-3xl     /* 64px blur - Large background gradients */
```

**Common Pattern:**
```css
/* Decorative background orb */
<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
```

---

## Animations & Transitions

### Tailwind CSS Animations

Defined in `tailwind.config.ts`:

```typescript
animation: {
  'shiny-text': 'shiny-text 8s infinite',
  'shine': 'shine var(--duration) infinite linear',
  'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out'
}
```

#### Keyframe Definitions

```typescript
// Shiny Text - Gradient text shimmer
'shiny-text': {
  '0%, 90%, 100%': { 'background-position': 'calc(-100% - var(--shiny-width)) 0' },
  '30%, 60%': { 'background-position': 'calc(100% + var(--shiny-width)) 0' }
}

// Shine - Background gradient movement
'shine': {
  '0%': { 'background-position': '0% 0%' },
  '50%': { 'background-position': '100% 100%' },
  'to': { 'background-position': '0% 0%' }
}

// Shimmer Slide - Horizontal shimmer effect
'shimmer-slide': {
  'to': { transform: 'translate(calc(100cqw - 100%), 0)' }
}

// Spin Around - Stepped rotation animation
'spin-around': {
  '0%': { transform: 'translateZ(0) rotate(0)' },
  '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
  '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
  '100%': { transform: 'translateZ(0) rotate(360deg)' }
}

// Accordion Down/Up - Height animations
'accordion-down': {
  from: { height: '0' },
  to: { height: 'var(--radix-accordion-content-height)' }
}
```

### Framer Motion Patterns

Used extensively throughout landing and dashboard components:

#### Fade In From Bottom

```typescript
// Standard pattern
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.4 }}
```

#### Scale + Fade In

```typescript
// Button/Card entrance
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.3, delay: 0.9 }}
```

#### Scroll-triggered Animation

```typescript
// Appear on scroll into view
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.5, delay: idx * 0.1 }}
```

#### Spring Animation

```typescript
// Smooth, natural motion
transition={{
  duration: 0.4,
  type: "spring",
  stiffness: 300,
  damping: 30
}}
```

### BlurFade Component (Magic UI)

Custom component for staggered fade-in effects:

```typescript
<BlurFade delay={0} duration={0.6}>
  <h1>Content</h1>
</BlurFade>

<BlurFade delay={0.2} duration={0.6}>
  <p>Delayed content</p>
</BlurFade>
```

### Transition Classes

```css
/* Standard duration */
transition-colors           /* 150ms ease-in-out */
transition-all duration-300 /* 300ms all properties */
transition-shadow duration-300
transition-transform duration-300

/* Hover scale */
hover:scale-105 transition-all duration-300

/* Hover effects */
group-hover:scale-110 transition-transform duration-300
group-hover:text-blue-500 transition-colors duration-300
```

### Reduced Motion Support

The project respects user motion preferences:

```typescript
const prefersReducedMotion = useReducedMotion();

// Conditional animation
initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
```

---

## Border Radius

Border radius is systematically defined using CSS variables:

```css
/* CSS Variable Definition */
--radius: 0.5rem /* 8px base radius */
```

### Tailwind Radius System

```typescript
borderRadius: {
  lg: 'var(--radius)',           // 8px - Cards, dialogs
  md: 'calc(var(--radius) - 2px)', // 6px - Buttons, inputs
  sm: 'calc(var(--radius) - 4px)'  // 4px - Small elements
}
```

### Common Usage

```css
rounded-md    /* 6px - Buttons, badges, inputs */
rounded-lg    /* 8px - Cards, dialogs */
rounded-xl    /* 12px - Large cards, hero elements */
rounded-2xl   /* 16px - Extra rounded elements */
rounded-full  /* 9999px - Circles, pills */
```

### Component-Specific Patterns

```css
/* Cards */
Card: rounded-xl

/* Buttons */
Button: rounded-md (default)
ShimmerButton: border-radius via CSS variable (0.5rem default)

/* Inputs */
Input: rounded-md

/* Badges */
Badge: rounded-md

/* Decorative Elements (orbs) */
rounded-full (perfect circles)
```

---

## Opacity & Transparency

Opacity is used extensively for layering and subtle effects:

### Background Opacity

```css
/* Ultra-light overlays */
bg-blue-500/5   /* 5% opacity - Subtle background tints */
bg-blue-500/10  /* 10% opacity - Card hover states */
bg-purple-500/20 /* 20% opacity - Decorative gradients */

/* Medium opacity */
bg-blue-500/30  /* 30% opacity */
bg-blue-500/50  /* 50% opacity - Semi-transparent elements */

/* Strong opacity */
bg-black/80     /* 80% opacity - Dialog overlays */
bg-primary/90   /* 90% opacity - Button hover states */
```

### Border Opacity

```css
border-border/40     /* 40% opacity - Subtle borders */
border-white/10      /* 10% white border - Glass effects */
border-blue-500/50   /* 50% opacity - Hover borders */
```

### Text Opacity

```css
to-foreground/70     /* 70% opacity - Gradient text fade */
to-gray-400          /* Fixed opacity via color */
```

### Hover State Opacity

```css
opacity-0 group-hover:opacity-100  /* Fade in on hover */
opacity-70 hover:opacity-100       /* Close button hover */
disabled:opacity-50                /* Disabled state */
```

### Backdrop Effects

```css
backdrop-blur          /* Blur background behind element */
backdrop-blur-sm       /* Small blur (frosted glass) */
```

**Common Pattern:**
```css
bg-card/80 backdrop-blur-sm /* Semi-transparent card with blur */
```

---

## Common Shadcn CSS Usage in Project

### Utility Function: `cn()`

All Shadcn components use the `cn()` utility from `@/lib/utils` for conditional class merging:

```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  conditionalClasses && "conditional",
  className // User override
)} />
```

### CSS Variables Pattern

Shadcn UI relies heavily on CSS variables for theming:

```css
/* Color application */
bg-primary              → hsl(var(--primary))
text-primary-foreground → hsl(var(--primary-foreground))
border-border           → hsl(var(--border))

/* Radius application */
rounded-lg              → var(--radius)
```

### Dark Mode Implementation

Dark mode uses the `class` strategy:

```html
<html lang="en" suppressHydrationWarning>
  <!-- .dark class toggles theme -->
</html>
```

```typescript
// Theme Provider
<ThemeProvider defaultTheme="dark" storageKey="app-theme">
  {children}
</ThemeProvider>
```

### Radix UI Integration

Shadcn components wrap Radix UI primitives with consistent styling:

```typescript
import * as DialogPrimitive from "@radix-ui/react-dialog"

// Data attributes for animations
data-[state=open]:animate-in
data-[state=closed]:animate-out
```

### Focus States

Consistent focus ring styling across all interactive elements:

```css
focus-visible:outline-none
focus-visible:ring-1
focus-visible:ring-ring
focus:ring-2
focus:ring-ring
focus:ring-offset-2
```

### Disabled States

```css
disabled:pointer-events-none
disabled:opacity-50
disabled:cursor-not-allowed
```

---

## Example Component Reference Design Code

### Stat Card Component (Dashboard)

From `src/components/dashboard/stats-overview.tsx`:

```typescript
<Card className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  <div className="p-6 relative">
    {/* Icon + Change indicator row */}
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
        <Phone className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-1 text-sm font-medium text-green-500">
        <ArrowUpRight className="h-4 w-4" />
        +12%
      </div>
    </div>

    {/* Stat content */}
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground font-medium">Total Agents</p>
      <p className="text-3xl font-bold tracking-tight">24</p>
      <p className="text-xs text-muted-foreground">8 active, 16 inactive</p>
    </div>
  </div>
</Card>
```

**Key Patterns:**
- Card with hover shadow elevation
- Gradient overlay on `group-hover`
- Icon in colored background circle (`bg-blue-500/10`)
- Semantic color indicators (`text-green-500`, `text-red-500`)
- Typography hierarchy: `text-sm` → `text-3xl` → `text-xs`

### Hero Section Pattern

From `src/components/landing/hero-section.tsx`:

```typescript
<section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-20 sm:py-32 lg:py-40">
  {/* Background decorative orbs */}
  <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute left-1/2 top-0 -translate-x-1/2">
      <div className="h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2">
      <div className="h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl" />
    </div>
  </div>

  {/* Content */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-5xl text-center">
      {/* Gradient headline */}
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight">
        Transform Your Business with AI Automation
      </h1>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
        <ShimmerButton
          className="px-8 py-4 text-base font-semibold shadow-lg"
          shimmerColor="#60a5fa"
          shimmerSize="0.1em"
          background="linear-gradient(to right, #2563eb, #1d4ed8)"
          borderRadius="0.5rem"
        >
          <span className="flex items-center gap-2">
            Start for Free
            <ArrowRight className="w-4 h-4" />
          </span>
        </ShimmerButton>

        <Button
          size="lg"
          variant="outline"
          className="border-2 hover:bg-accent/10 font-semibold"
        >
          Book a Demo
        </Button>
      </div>
    </div>
  </div>
</section>
```

**Key Patterns:**
- Gradient background: `from-background to-background/50`
- Decorative blur orbs: `blur-3xl` with low opacity colors
- Gradient text: `bg-gradient-to-r` + `bg-clip-text` + `text-transparent`
- Responsive typography: `text-4xl sm:text-6xl lg:text-7xl`
- Icon in button: `flex items-center gap-2`
- ShimmerButton with custom gradient background

### Feature Card Pattern

From `src/components/landing/features-section.tsx`:

```typescript
<Card className="group h-full border-2 border-border bg-card hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
  <CardContent className="p-6 space-y-4">
    {/* Icon container */}
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
      <Icon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    </div>

    {/* Title */}
    <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-500 transition-colors duration-300">
      {feature.title}
    </h3>

    {/* Description */}
    <p className="text-muted-foreground leading-relaxed">
      {feature.description}
    </p>
  </CardContent>
</Card>
```

**Key Patterns:**
- Double border hover: `border-border` → `hover:border-blue-500/50`
- Glow effect: `hover:shadow-blue-500/10`
- Lift on hover: `hover:scale-105`
- Icon background hover: `bg-blue-500/10` → `group-hover:bg-blue-500/20`
- Icon scale: `group-hover:scale-110`
- Text color transition: `group-hover:text-blue-500`

### ShimmerButton Component

From `src/components/magicui/shimmer-button.tsx`:

```typescript
<button
  style={{
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as CSSProperties}
  className={cn(
    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
    "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
    className,
  )}
>
  {/* Shimmer effect layers */}
  <div className="absolute inset-0 overflow-visible [container-type:size]">
    <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1]">
      <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
    </div>
  </div>

  {children}

  {/* Highlight layer */}
  <div className="insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />

  {/* Backdrop */}
  <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
</button>
```

**Key Patterns:**
- CSS custom properties for dynamic theming
- Multiple layered divs for complex animations
- `animate-shimmer-slide` + `animate-spin-around` for shimmer effect
- Inset shadows for depth: `shadow-[inset_0_-8px_10px_#ffffff1f]`
- GPU acceleration: `transform-gpu`
- Active state: `active:translate-y-px` (button press effect)

### Use Case Selector Pattern

From `src/components/landing/hero-section.tsx`:

```typescript
<motion.button
  key={useCase.id}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, delay: 0.9 + idx * 0.05 }}
  onClick={() => setSelectedUseCase(useCase)}
  aria-pressed={selectedUseCase.id === useCase.id}
  className={`group relative rounded-lg border-2 p-4 text-left transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    selectedUseCase.id === useCase.id
      ? "border-blue-500 bg-blue-500/10 shadow-md"
      : "border-border bg-card hover:bg-card/80"
  }`}
>
  <Icon className={`h-8 w-8 mb-2 transition-all duration-300 ${
    selectedUseCase.id === useCase.id
      ? "text-blue-500 scale-110"
      : "text-muted-foreground group-hover:text-blue-500 group-hover:scale-110"
  }`} />

  <p className={`text-xs sm:text-sm font-medium transition-colors ${
    selectedUseCase.id === useCase.id
      ? "text-foreground"
      : "text-muted-foreground group-hover:text-foreground"
  }`}>
    {useCase.label}
  </p>
</motion.button>
```

**Key Patterns:**
- Staggered animations: `delay: 0.9 + idx * 0.05`
- Conditional styling with ternary operators
- Active state: `border-blue-500 bg-blue-500/10 shadow-md`
- Icon and text color sync
- Accessibility: `aria-pressed`, focus rings
- Hover lift: `hover:scale-105`

---

## Additional Design Patterns

### Glass Morphism

Used in product showcase and card overlays:

```css
bg-gradient-to-b from-card/50 to-background/80 backdrop-blur
border border-border/40
```

### Icon Patterns

Icons are always wrapped with color and size utilities:

```typescript
// Standard icon
<Icon className="h-5 w-5" />

// Icon with hover scale
<Icon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />

// Icon in colored circle
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
  <Icon className="h-5 w-5" />
</div>
```

### Responsive Design Patterns

```css
/* Mobile-first approach */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
text-4xl sm:text-6xl lg:text-7xl
py-20 sm:py-32 lg:py-40
flex-col sm:flex-row

/* Container responsiveness */
max-w-7xl px-6 lg:px-8
```

### Accessibility Patterns

```html
<!-- Semantic landmarks -->
<section aria-label="Features and benefits">

<!-- Hidden decorative elements -->
<div aria-hidden="true">

<!-- Icon accessibility -->
<Icon aria-hidden="true" />
<span className="sr-only">Close</span>

<!-- Interactive state -->
<button aria-pressed={isSelected}>

<!-- Live regions -->
<div role="status" aria-live="polite">
```

---

## Best Practices Summary

1. **Always use semantic color tokens** (`bg-primary`, `text-muted-foreground`) instead of hardcoded colors
2. **Prefer `group` + `group-hover` patterns** for coordinated hover effects
3. **Use Framer Motion for complex animations**, Tailwind classes for simple transitions
4. **Implement reduced motion support** for accessibility
5. **Use `cn()` utility** for all conditional className merging
6. **Apply consistent spacing**: `p-6` for cards, `gap-4` for grids, `mt-10` between sections
7. **Leverage opacity modifiers** (`/10`, `/20`, `/50`) for layering effects
8. **Include focus states** on all interactive elements
9. **Use `backdrop-blur` with semi-transparent backgrounds** for modern glass effects
10. **Apply consistent border radius**: `rounded-xl` for cards, `rounded-md` for buttons

---

This style guide represents the comprehensive design system of Marca Fusion as implemented across all components, pages, and UI elements in the project.
