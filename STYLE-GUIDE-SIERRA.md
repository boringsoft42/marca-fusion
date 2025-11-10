# Sierra Speaks - Style Guide

## Overview

This style guide documents the design system used in the Sierra speaks voice communication interface. The design philosophy emphasizes clean, minimal aesthetics with a warm, approachable feel through the use of a soft beige background paired with professional green accents. The interface prioritizes readability, clear hierarchy, and smooth animations to create an engaging user experience.

### Design Principles
- **Clarity**: Clean layouts with ample white space
- **Warmth**: Soft, neutral background colors create an inviting atmosphere
- **Professionalism**: Balanced typography and subtle interactions
- **Responsiveness**: Fluid layouts that adapt to all screen sizes
- **Purposeful Animation**: Animations serve to draw attention and provide feedback

---

## Color Palette

### Primary Colors

**Background Cream/Beige**
- Hex: `#ebe8e3`
- RGB: `rgb(235, 232, 227)`
- Usage: Main body background
- Purpose: Creates a warm, sophisticated base that reduces eye strain

**Forest Green (Primary Action)**
- Hex: `#0d6832`
- RGB: `rgb(13, 104, 50)`
- Usage: Primary buttons, CTAs
- Hover state: `#0a5528`
- Purpose: Strong, trustworthy brand color that stands out against neutral backgrounds

**Pure White**
- Hex: `#ffffff`
- RGB: `rgb(255, 255, 255)`
- Usage: Card backgrounds, content containers
- Purpose: Creates clear content separation and emphasizes information hierarchy

### Text Colors

**Primary Text (Near Black)**
- Hex: `#1a1a1a`
- RGB: `rgb(26, 26, 26)`
- Usage: Headings, primary text, feature titles
- Purpose: High contrast for readability while softer than pure black

**Secondary Text (Medium Gray)**
- Hex: `#6b6b6b`
- RGB: `rgb(107, 107, 107)`
- Usage: Descriptions, subtitle text, body copy
- Purpose: Reduces visual weight for supporting content

### UI Element Colors

**Light Gray (Neutral)**
- Hex: `#e0e0e0`
- RGB: `rgb(224, 224, 224)`
- Usage: Waveform bars, dividers, inactive states
- Purpose: Subtle visual elements that don't compete with content

### Color Usage Guidelines

1. **Contrast Ratios**:
   - Primary text (#1a1a1a) on white background: 15.3:1 (AAA)
   - Secondary text (#6b6b6b) on white background: 5.74:1 (AA)

2. **Accessibility**: All color combinations meet WCAG 2.1 Level AA standards

3. **Color Distribution**:
   - 70% neutral (beige/white)
   - 20% text (black/gray)
   - 10% accent (green)

---

## Typography

### Font Stack

**Primary Font Family**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

This system font stack ensures:
- Native appearance on all platforms
- Optimal rendering performance
- Consistent experience across devices
- No external font loading required

### Type Scale

**Heading 1 (Hero)**
- Font size: `48px`
- Font weight: `400` (Regular)
- Color: `#1a1a1a`
- Line height: Default (approximately 1.2)
- Usage: Main page title
- Responsive: `36px` on tablets, `32px` on mobile

**Feature Title (H3)**
- Font size: `18px`
- Font weight: `500` (Medium)
- Color: `#1a1a1a`
- Usage: Feature headings, sub-sections

**Body Text (Base)**
- Font size: `16px`
- Font weight: `400` (Regular)
- Color: `#6b6b6b`
- Line height: `1.6`
- Usage: Subtitles, main descriptive text

**Feature Description**
- Font size: `15px`
- Font weight: `400` (Regular)
- Color: `#6b6b6b`
- Line height: `1.7`
- Usage: Secondary descriptions, feature explanations

**Button Text**
- Font size: `15px`
- Font weight: `500` (Medium)
- Color: `#ffffff`
- Usage: Call-to-action buttons

### Typography Guidelines

1. **Font Weight Strategy**: Use weight to create hierarchy
   - Regular (400): Body text, hero titles (minimalist approach)
   - Medium (500): Feature titles, button text, emphasis

2. **Line Height**:
   - Headings: Tight (1.2-1.3) for impact
   - Body text: Generous (1.6-1.7) for readability

3. **Letter Spacing**: Default spacing maintained throughout for clarity

4. **Text Rendering**: Browser default for system fonts ensures optimal rendering

---

## Spacing System

### Base Unit
The spacing system uses pixel values with a consistent scale for predictability.

### Spacing Scale

**Micro Spacing**
- `8px` - Gap between icon and text in features
- `12px` - Padding in buttons (vertical), gap between title and description

**Small Spacing**
- `16px` - Bottom margin for title
- `24px` - Mobile padding
- `28px` - Button horizontal padding

**Medium Spacing**
- `40px` - Tablet padding, waveform container padding
- `48px` - Gap between feature items

**Large Spacing**
- `60px` - Desktop body padding (vertical), card padding (tablet)
- `80px` - Desktop body padding (horizontal), card padding (desktop)

**Extra Large Spacing**
- `100px` - Grid gap between waveform and features on desktop

### Spacing Patterns

**Vertical Rhythm**
```
Page padding: 60px (top/bottom)
Section margin: 40px
Component gap: 48px
Element gap: 12px
```

**Horizontal Rhythm**
```
Page padding: 80px (desktop) → 40px (tablet) → 24px (mobile)
Card padding: 80px (desktop) → 60px → 40px (tablet) → 40px 24px (mobile)
Grid gap: 100px (desktop) → 60px (tablet/mobile)
```

### Layout Principles

1. **Proportional Scaling**: Spacing reduces proportionally on smaller screens
2. **Breathing Room**: Generous padding in cards and containers
3. **Content-First**: Spacing adapts to content, not arbitrary values
4. **Consistency**: Same spacing values reused across similar contexts

---

## Component Styles

### Buttons

#### Primary Button (Call-to-Action)

**Visual Properties**
```css
background-color: #0d6832;
color: white;
border: none;
padding: 12px 28px;
border-radius: 24px;
font-size: 15px;
font-weight: 500;
cursor: pointer;
transition: background-color 0.2s;
```

**States**
- Default: `#0d6832`
- Hover: `#0a5528` (darker green)
- Active: (same as hover)
- Disabled: Not defined (would use opacity: 0.5)

**Usage Guidelines**
- Use for primary actions only
- Maximum one per section
- Sufficient padding for touch targets (44px min height)

### Cards

#### Content Card

**Visual Properties**
```css
background-color: white;
border-radius: 16px;
padding: 80px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
```

**Responsive Padding**
- Desktop: `80px`
- Tablet: `60px 40px`
- Mobile: `40px 24px`

**Usage Guidelines**
- Contains main content sections
- Uses subtle shadow for depth
- White background for maximum contrast against page background

### Feature List Item

**Structure**
```
[Icon] [Title]
       [Description]
```

**Visual Properties**
- Gap between features: `48px`
- Icon-title gap: `12px`
- Title-description gap: `12px`
- Description left padding: `32px` (aligns with title start)

**Icon Styling**
- Font size: `20px`
- Color: `#1a1a1a`
- Uses emoji/unicode characters for simplicity

### Waveform Visualization

**Bar Properties**
```css
width: 12px;
background-color: #e0e0e0;
border-radius: 6px;
gap: 8px between bars;
```

**Dot Properties**
```css
width: 12px;
height: 12px;
background-color: #e0e0e0;
border-radius: 50%;
```

**Animation Pattern**
- Uses varying heights (35%, 45%, 55%, 65%, 75%, 85%, 95%)
- Staggered animation delays (0s to 1.1s in 0.1s increments)
- Duration: 1.2s per cycle
- Easing: ease-in-out

---

## Shadows & Elevation

### Shadow System

**Level 1: Card Shadow (Subtle)**
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
```
- Y-offset: 2px
- Blur: 8px
- Opacity: 4%
- Usage: Main content cards
- Purpose: Gentle lift without harsh contrast

### Elevation Guidelines

1. **Single Level System**: This design uses only one elevation level
2. **Philosophy**: Minimal depth creates clean, flat aesthetic
3. **Purpose**: Shadow indicates interactivity and importance, not hierarchy

### Shadow Usage Patterns

- **Cards**: Subtle shadow for gentle separation from background
- **Buttons**: No shadow (color change provides feedback)
- **Interactive Elements**: Rely on color changes rather than shadow effects

---

## Animations & Transitions

### Transition Properties

**Button Hover Transition**
```css
transition: background-color 0.2s;
```
- Property: background-color only
- Duration: 200ms (0.2s)
- Easing: Default (ease)
- Purpose: Smooth color change on hover

**Waveform Bar Transition**
```css
transition: all 0.3s ease;
```
- Property: all (for potential interactions)
- Duration: 300ms (0.3s)
- Easing: ease
- Purpose: Smooth property changes if interactive

### Animation Keyframes

**Wave Animation**
```css
@keyframes wave {
    0%, 100% { height: 20%; }
    50% { height: 100%; }
}
```

**Animation Properties**
```css
animation: wave 1.2s ease-in-out infinite;
```
- Duration: 1.2 seconds per cycle
- Easing: ease-in-out (smooth acceleration and deceleration)
- Iteration: infinite
- Delays: Staggered by 0.1s across bars

### Animation Guidelines

1. **Purpose-Driven**: Every animation serves a functional purpose
2. **Performance**: Use transform and opacity when possible (GPU accelerated)
3. **Subtlety**: Gentle movements, not distracting
4. **Duration**: Quick transitions (200-300ms), longer animations (1-2s)
5. **Easing**: Natural curves (ease-in-out) for organic feel

### Motion Patterns

- **Micro-interactions**: 200ms (button hovers)
- **Component Transitions**: 300ms (state changes)
- **Decorative Animations**: 1200ms (waveform)
- **No Animation**: Prefer instant changes for text content

---

## Border Radius

### Radius Scale

**Extra Large (Pill Shape)**
- Value: `24px`
- Usage: Primary buttons
- Effect: Creates pill-shaped buttons with fully rounded ends

**Large (Rounded Corners)**
- Value: `16px`
- Usage: Main content cards
- Effect: Friendly, modern appearance without being overly rounded

**Small (Subtle Rounding)**
- Value: `6px`
- Usage: Waveform bars
- Effect: Gentle rounding on small elements

**Circle**
- Value: `50%`
- Usage: Waveform dots
- Effect: Perfect circles

### Border Radius Guidelines

1. **Hierarchy**: Larger elements = larger radius for proportionality
2. **Consistency**: Same radius for similar element types
3. **Visual Softness**: Rounded corners create approachable feel
4. **Touch-Friendly**: Rounded buttons feel more natural to tap

---

## Opacity & Transparency

### Opacity Values

**Shadow Opacity**
```css
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
```
- Opacity: 4% (0.04)
- Usage: Card shadows
- Purpose: Extremely subtle depth

### Transparency Guidelines

1. **Minimal Use**: Design relies on solid colors rather than transparency
2. **Shadows Only**: Transparency primarily used for shadow effects
3. **No Overlays**: No transparent overlays or backdrop filters
4. **Accessibility**: Maintains high contrast by avoiding transparency on text

---

## Responsive Design

### Breakpoints

**Desktop (Default)**
- Min width: 1200px+
- Body padding: 60px 80px
- Card padding: 80px
- Grid: 2 columns
- H1 size: 48px

**Tablet**
- Max width: 1200px
- Body padding: 40px
- Card padding: 60px 40px
- Grid: 1 column
- H1 size: 36px

**Mobile**
- Max width: 768px
- Body padding: 24px
- Card padding: 40px 24px
- Grid: 1 column
- H1 size: 32px
- Header: Stacked layout

### Responsive Patterns

1. **Fluid Typography**: Font sizes reduce at breakpoints
2. **Flexible Grids**: 2-column → 1-column layout
3. **Proportional Spacing**: Padding scales down with screen size
4. **Stack Navigation**: Header elements stack vertically on mobile

---

## Grid & Layout

### Grid System

**Two-Column Content Grid**
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 100px;
align-items: center;
```

**Properties**
- Columns: Equal width (1fr each)
- Gap: 100px on desktop, 60px on tablet/mobile
- Alignment: Vertically centered
- Responsive: Switches to single column below 1200px

### Flexbox Patterns

**Header Layout**
```css
display: flex;
justify-content: space-between;
align-items: flex-start;
```

**Feature Items**
```css
display: flex;
flex-direction: column;
gap: 48px;
```

**Feature Header**
```css
display: flex;
align-items: center;
gap: 12px;
```

### Layout Guidelines

1. **Grid for Major Layout**: Use CSS Grid for main content sections
2. **Flexbox for Components**: Use Flexbox for component-level layouts
3. **Centering**: Combine justify-content and align-items for centering
4. **Gaps**: Prefer gap property over margins for consistency

---

## Common Tailwind CSS Usage in Project

While this project uses vanilla CSS, here's how it would translate to Tailwind CSS classes for future development:

### Colors
```
bg-[#ebe8e3]        → Body background
bg-white            → Card background
bg-[#0d6832]        → Button background
hover:bg-[#0a5528]  → Button hover
text-[#1a1a1a]      → Primary text
text-[#6b6b6b]      → Secondary text
```

### Typography
```
text-5xl            → H1 (48px)
text-lg             → Feature titles (18px)
text-base           → Body/subtitle (16px)
font-normal         → Font weight 400
font-medium         → Font weight 500
```

### Spacing
```
p-20                → Card padding (80px)
px-7 py-3           → Button padding
gap-24              → Feature gap (96px ≈ 48px*2)
mb-10               → Large margins
```

### Layout
```
grid grid-cols-2    → Two-column grid
flex                → Flexbox containers
items-center        → Vertical centering
justify-between     → Space between
```

### Effects
```
rounded-2xl         → Card radius (16px)
rounded-3xl         → Button radius (24px)
shadow-sm           → Card shadow
transition-colors   → Color transitions
duration-200        → 200ms transitions
```

### Responsive
```
md:grid-cols-1      → Single column on tablet
md:text-4xl         → Smaller heading on tablet
md:p-10             → Reduced padding
```

---

## Example Component Reference

### Sierra Hero Section Component

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sierra Hero Component</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #ebe8e3; margin: 0; padding: 60px 80px; line-height: 1.6;">

    <!-- Header Section -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; flex-wrap: wrap; gap: 20px;">
        <div>
            <h1 style="font-size: 48px; font-weight: 400; color: #1a1a1a; margin: 0 0 12px 0;">Sierra speaks</h1>
            <p style="font-size: 16px; color: #6b6b6b; margin: 0;">Introducing voice, a new way to communicate with your customers.</p>
        </div>
        <button style="background-color: #0d6832; color: white; border: none; padding: 12px 28px; border-radius: 24px; font-size: 15px; font-weight: 500; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='#0a5528'" onmouseout="this.style.backgroundColor='#0d6832'">
            Learn more
        </button>
    </div>

    <!-- Main Card -->
    <div style="background-color: white; border-radius: 16px; padding: 80px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center;">

            <!-- Waveform Visualization -->
            <div style="display: flex; justify-content: center; align-items: center; padding: 40px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 8px; height: 200px;">
                    <div style="width: 12px; height: 35%; background-color: #e0e0e0; border-radius: 6px;"></div>
                    <div style="width: 12px; height: 55%; background-color: #e0e0e0; border-radius: 6px;"></div>
                    <div style="width: 12px; height: 85%; background-color: #e0e0e0; border-radius: 6px;"></div>
                    <div style="width: 12px; height: 12px; background-color: #e0e0e0; border-radius: 50%;"></div>
                    <div style="width: 12px; height: 45%; background-color: #e0e0e0; border-radius: 6px;"></div>
                    <div style="width: 12px; height: 95%; background-color: #e0e0e0; border-radius: 6px;"></div>
                </div>
            </div>

            <!-- Features List -->
            <div style="display: flex; flex-direction: column; gap: 48px;">

                <!-- Feature 1 -->
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 20px; color: #1a1a1a;">🎧</span>
                        <h3 style="font-size: 18px; font-weight: 500; color: #1a1a1a; margin: 0;">Engage with faster, better phone calls</h3>
                    </div>
                    <p style="font-size: 15px; color: #6b6b6b; line-height: 1.7; margin: 0; padding-left: 32px;">
                        Your agent delivers delightful and personalized conversations. Always available, endlessly patient, and able to reason, predict, and act in real-time.
                    </p>
                </div>

                <!-- Feature 2 -->
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 20px; color: #1a1a1a;">🌐</span>
                        <h3 style="font-size: 18px; font-weight: 500; color: #1a1a1a; margin: 0;">Connect to your call center ecosystem</h3>
                    </div>
                    <p style="font-size: 15px; color: #6b6b6b; line-height: 1.7; margin: 0; padding-left: 32px;">
                        Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required.
                    </p>
                </div>

                <!-- Feature 3 -->
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 20px; color: #1a1a1a;">📊</span>
                        <h3 style="font-size: 18px; font-weight: 500; color: #1a1a1a; margin: 0;">Scale consistent experiences on every channel</h3>
                    </div>
                    <p style="font-size: 15px; color: #6b6b6b; line-height: 1.7; margin: 0; padding-left: 32px;">
                        Use Agent OS to build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes.
                    </p>
                </div>

            </div>
        </div>
    </div>

    <!-- Responsive Styles -->
    <style>
        @media (max-width: 1200px) {
            body {
                padding: 40px !important;
            }
            body > div:last-of-type {
                padding: 60px 40px !important;
            }
            body > div:last-of-type > div {
                grid-template-columns: 1fr !important;
                gap: 60px !important;
            }
            h1 {
                font-size: 36px !important;
            }
        }
        @media (max-width: 768px) {
            body {
                padding: 24px !important;
            }
            body > div:first-child {
                flex-direction: column !important;
            }
            body > div:last-of-type {
                padding: 40px 24px !important;
            }
            h1 {
                font-size: 32px !important;
            }
        }
    </style>

</body>
</html>
```

---

## AI Design Prompt Integration

When using AI tools to generate components in this style, use the following prompt:

**AI Design Generation Prompt:**

Only code in HTML/Tailwind in a single code block. Any CSS styles should be in the style attribute. Start with a response, then code and finish with a response. Don't mention tokens, Tailwind or HTML. Always include the html, head and body tags. Use lucide icons for javascript, 1.5 strokewidth. Unless style is specified by user, design in the style of Linear, Stripe, Vercel, Tailwind UI (IMPORTANT: don't mention names). Checkboxes, sliders, dropdowns, toggles should be custom (don't add, only include if part of the UI). Be extremely accurate with fonts. For font weight, use one level thinner: for example, Bold should be Semibold. Titles above 20px should use tracking-tight. Make it responsive. Avoid setting tailwind config or css classes, use tailwind directly in html tags. If there are charts, use chart.js for charts (avoid bug: if your canvas is on the same level as other nodes: h2 p canvas div = infinite grows. h2 p div>canvas div = as intended.). Add subtle dividers and outlines where appropriate. Don't put tailwind classes in the html tag, put them in the body tags. If no images are specified, use these Unsplash images like faces, 3d, render, etc. Be creative with fonts, layouts, be EXTREMELY detailed and make it functional. If design, code or html is provided, IMPORTANT: respect the original design, fonts, colors, style as much as possible. Don't use javascript for animations, use tailwind instead. Add hover color and outline interactions. For tech, cool, futuristic, favor dark mode unless specified otherwise. For modern, traditional, professional, business, favor light mode unless specified otherwise. Use 1.5 strokewidth for lucide icons and avoid gradient containers for icons. Use subtle contrast. For logos, use letters only with tight tracking. Avoid a bottom right floating DOWNLOAD button.

---

## Implementation Checklist

When implementing components in this style:

- [ ] Use system font stack for optimal performance
- [ ] Apply #ebe8e3 background to body
- [ ] Use #0d6832 for primary action buttons
- [ ] Ensure all text meets WCAG AA contrast requirements
- [ ] Implement 48px hero titles with font-weight 400
- [ ] Use generous padding (80px on desktop cards)
- [ ] Apply 16px border radius to cards
- [ ] Include subtle shadow (0 2px 8px rgba(0,0,0,0.04))
- [ ] Implement responsive breakpoints at 1200px and 768px
- [ ] Use 200ms transitions for hover states
- [ ] Ensure minimum 44px touch targets for mobile
- [ ] Test animations for performance (60fps target)
- [ ] Validate responsive layout on mobile devices
- [ ] Check color contrast with accessibility tools

---

## File Structure

```
project/
├── prueba1.html          # Main implementation
├── STYLE-GUIDE-SIERRA.md # This style guide
└── assets/               # (Future: Images, icons)
```

---

## Version History

**Version 1.0** - Initial style guide creation
- Documented all colors, typography, spacing
- Defined component styles and patterns
- Included responsive design guidelines
- Added AI prompt for future development

---

## Credits & References

**Design Inspiration:** Modern SaaS interfaces with emphasis on clarity and professionalism

**Accessibility Standards:** WCAG 2.1 Level AA

**Browser Support:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge)

---

