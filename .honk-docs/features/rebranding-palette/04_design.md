# Design: rebranding-palette

This document describes the technical architecture and implementation strategy for the new rebranding palette, ensuring consistency across the cinematic portfolio through a central design system.

## Decisions

### DA-001: Tailwind Config Architecture (Theme Extension)
To ensure a single source of truth and avoid hardcoded hex values, we will implement a Tailwind configuration file. Instead of overriding the entire color palette, we will extend the `theme` to include a `brand` namespace.

**Technical approach:**
- Create `tailwind.config.js` in the project root.
- Utilize `theme.extend.colors` to inject the new palette.
- This allows using classes like `bg-brand-rosa` while keeping standard Tailwind utility classes.

### DA-002: Semantic Naming Convention
We adopt a semantic naming strategy for the brand colors to decouple the implementation from the specific hex values.

| Name | Hex | Role | Mapping |
|------|-----|------|---------|
| `brand-rosa` | `#8B6D62` | Primary | 60% Dominant (Main Backgrounds) |
| `brand-white` | `#F2F0ED` | Secondary | 30% Contrast (Section Breaks, Text) |
| `brand-green` | `#748471` | Accent | 10% Details (Tags, Indicators) |

### DA-003: Component Mapping & CSS Strategy
The implementation will replace existing hardcoded hex codes with the new semantic classes.

#### 1. Global Container (`App.jsx`)
- **Background:** `bg-[#F7F3EF]` → `bg-brand-rosa` (CA-001).
- **Text:** `text-[#161616]` → `text-brand-white` (CA-005) for accessibility on dark rosa.
- **Loader:** Pulse bar `bg-[#D8B7B0]` → `bg-brand-green` (CA-003).

#### 2. Hero Section (`Hero.jsx`)
- **Transition Gradient:** `to-[#F7F3EF]` → `to-brand-rosa`.
- **Pulse Dot:** `bg-[#7C8F7A]` → `bg-brand-green` (CA-003).
- **Action Button:** `bg-[#D8B7B0]` → `bg-brand-white` (CA-002).

#### 3. Experience & Timeline (`ExperienceCard.jsx`)
- **Timeline Dot:** `bg-[#D8B7B0]` → `bg-brand-green` (CA-003).
- **Year Tag:** `text-[#7C8F7A]` → `text-brand-green`.
- **Text:** Ensure readability using `brand-white` on `brand-rosa` containers.

#### 4. Photography & Cards (`ProjectCard.jsx`, `Photography Section`)
- **Photography BG:** `bg-[#EFE7E2]` → `bg-brand-white` (CA-002).
- **Card Accents:** Use `brand-white` for metadata overlays.

#### 5. Project Grid (`ProjectGrid.jsx`)
- **Empty State Text:** `text-[#7C8F7A]` → `text-brand-green`.

## Infrastructure
```javascript
// tailwind.config.js implementation
/** @type {import('tailwind-css').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rosa: '#8B6D62',
          white: '#F2F0ED',
          green: '#748471',
        },
      },
    },
  },
  plugins: [],
}
```

## Validation Plan
- **Static Analysis:** Verify `tailwind.config.js` successfully exports the `brand` object (CA-004).
- **Visual Regression:** Manually check that `brand-rosa` covers approx. 60% of the viewport area during scroll (CA-001).
- **Accessibility Check:** Run contrast ratio tests for `brand-white` text over `brand-rosa` background (CA-005).
