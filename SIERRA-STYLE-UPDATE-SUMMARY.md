# Sierra Style Update Summary

## ✅ COMPLETED COMPONENTS

### Tablu Components (Updated to Sierra Style)
1. **TabluHero.tsx** ✓
   - Added framer-motion animations
   - Updated to Sierra colors (#ebe8e3, #0d6832, #1a1a1a, #6b6b6b)
   - Professional Unsplash image (workspace/planning theme)
   - Typography: text-[48px] font-normal for H1, text-[15px] for body
   - Buttons: rounded-3xl, px-7 py-3, sierra-green background
   - Cards: rounded-2xl, shadow-[0_2px_8px_rgba(0,0,0,0.04)]
   - Spacing: py-16 md:py-20 lg:py-24, px-6 md:px-10 lg:px-20
   - Sequential animation delays

2. **CategoryCards.tsx** ✓
   - White background with sierra-green accents
   - Framer-motion with viewport once:true
   - H2: text-[48px] font-normal
   - Body: text-[15px]
   - Icons: strokeWidth={1.5}
   - Cards: rounded-full for circles, shadow-[0_2px_8px_rgba(0,0,0,0.04)]
   - Sequential delays (0.1s per item)

3. **PricingTables.tsx** ✓
   - Alternating backgrounds (white, sierra-cream)
   - Sierra colors for accents
   - H2: text-[48px] font-normal, H3: text-xl font-medium
   - rounded-2xl cards with shadow-[0_2px_8px_rgba(0,0,0,0.04)]
   - Check icons with strokeWidth={1.5}
   - Framer-motion animations

4. **TabluCTA.tsx** ✓
   - Sierra-green background (#0d6832) with white text
   - Good contrast as specified
   - rounded-3xl buttons
   - text-[48px] font-normal heading
   - Dual CTAs with proper spacing
   - Info cards with sierra-cream background

## 🔄 REMAINING COMPONENTS TO UPDATE

### Tablu Components (Need Sierra Style)
5. **ProductCard.tsx** - Apply same patterns as above
6. **ProductCatalog.tsx** - Maintain data structure, update styling only
7. **CorporateSection.tsx** - Add professional business/corporate Unsplash image
8. **IconRibbon.tsx** - Sierra colors and spacing
9. **SocialSection.tsx** - Social media icons with animations

### Landing Components (Need Sierra Style)
1. **hero-section.tsx**
2. **features-section.tsx**
3. **capabilities-section.tsx**
4. **how-it-works-section.tsx**
5. **testimonials-section.tsx**
6. **social-proof-section.tsx**
7. **faq-section.tsx**
8. **final-cta-section.tsx**

## 📋 SIERRA STYLE PATTERN TO FOLLOW

### 1. Colors
```typescript
// Primary colors
bg-[#ebe8e3]        // Sierra cream background
bg-[#0d6832]        // Sierra green (primary CTAs, accents)
hover:bg-[#0a5528]  // Sierra green hover
text-[#1a1a1a]      // Primary text
text-[#6b6b6b]      // Secondary text
bg-white            // White backgrounds for main sections
```

### 2. Typography
```typescript
// Headings
text-[48px] font-normal           // H2
text-xl font-medium              // H3
text-[15px]                      // Body text
```

### 3. Buttons
```typescript
className={cn(
  'inline-flex items-center justify-center gap-2',
  'rounded-3xl px-7 py-3 text-[15px] font-medium',
  'bg-[#0d6832] text-white',
  'shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
  'transition-all duration-200',
  'hover:bg-[#0a5528]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6832] focus-visible:ring-offset-2'
)}
```

### 4. Cards
```typescript
className={cn(
  'p-6 rounded-2xl',
  'bg-white',
  'shadow-[0_2px_8px_rgba(0,0,0,0.04)]',
  'border-2 border-[#e0e0e0]',
  'transition-all duration-300',
  'hover:shadow-lg hover:-translate-y-1'
)}
```

### 5. Spacing
```typescript
// Sections
py-16 md:py-20 lg:py-24

// Containers
px-6 md:px-10 lg:px-20
```

### 6. Icons (Lucide)
```typescript
<IconName className="h-4 w-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
```

### 7. Framer Motion Animations
```typescript
// Basic fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// With sequential delay
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

### 8. Background Alternation Pattern
```
Section 1: bg-white
Section 2: bg-[#ebe8e3]
Section 3: bg-white
Section 4: bg-[#ebe8e3]
... continue pattern
```

### 9. Professional Images (Unsplash)
For components needing images:
- **TabluHero**: Organized workspace/planning - `https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b`
- **CorporateSection**: Professional business/corporate meeting
- **ProductCatalog sections**: Product-specific imagery

Example:
```tsx
<img
  src="https://images.unsplash.com/photo-[ID]?w=800&q=80"
  alt="Descriptive alt text"
  className="w-full h-full object-cover rounded-xl"
/>
```

## 🔧 IMPLEMENTATION CHECKLIST

For each component, ensure:
- [ ] Import `motion` from 'framer-motion'
- [ ] Add framer-motion animations with viewport once:true
- [ ] Use Sierra colors (#ebe8e3, #0d6832, #1a1a1a, #6b6b6b, white)
- [ ] Typography: H2 text-[48px] font-normal, H3 text-xl font-medium, body text-[15px]
- [ ] Buttons: rounded-3xl, px-7 py-3, sierra-green background
- [ ] Cards: rounded-2xl, shadow-[0_2px_8px_rgba(0,0,0,0.04)]
- [ ] Icons: strokeWidth={1.5}
- [ ] Spacing: py-16 md:py-20 lg:py-24 for sections, px-6 md:px-10 lg:px-20 for containers
- [ ] Sequential animation delays (0.1s, 0.2s, 0.3s increments)
- [ ] Alternate backgrounds per section (white, sierra-cream pattern)
- [ ] Add professional Unsplash images where relevant

## 📝 EXAMPLE TRANSFORMATION

### Before (Old Style)
```tsx
<section className="py-20 md:py-28 bg-gradient-to-br from-marca-beige/30">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      Title
    </h2>
    <button className="px-8 py-3.5 rounded-md bg-marca-beige text-white">
      Click Me
    </button>
  </div>
</section>
```

### After (Sierra Style)
```tsx
<section className="py-16 md:py-20 lg:py-24 bg-white">
  <div className="container mx-auto px-6 md:px-10 lg:px-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-[48px] font-normal text-[#1a1a1a] mb-4"
    >
      Title
    </motion.h2>
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      href="#"
      className="inline-flex items-center justify-center gap-2 rounded-3xl px-7 py-3 text-[15px] font-medium bg-[#0d6832] text-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:bg-[#0a5528]"
    >
      Click Me
    </motion.a>
  </div>
</section>
```

## 🎯 NEXT STEPS

1. Apply the pattern above to the remaining Tablu components (ProductCard, ProductCatalog, CorporateSection, IconRibbon, SocialSection)
2. Apply the same pattern to all Landing components
3. Test all components for:
   - Visual consistency
   - Animation performance
   - Responsive behavior
   - Accessibility
4. Verify color contrast meets WCAG AA standards
5. Check that all Unsplash images load properly

## 📊 COMPLETION STATUS

**Completed:** 4/17 components (23.5%)
**Remaining:** 13/17 components (76.5%)

**Tablu Components:** 4/9 completed
**Landing Components:** 0/8 completed
