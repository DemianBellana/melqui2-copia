# Explore: rebranding-cinematic-portfolio

## Req
Rebrand the cinematic portfolio with a new color palette based on a client-provided image. 
- **Rosa**: 60%
- **Blanco suave**: 30%
- **Verde**: 10%

## Colors (Identified)
Based on the visual description:
- **Primary (60%)**: `#8B6D62` (Dusty Pink / Terracotta) - A warm, muted pink that maintains cinematic depth.
- **Secondary (30%)**: `#F2F0ED` (Soft White / Light Cream) - A gentle off-white for contrast and backgrounds.
- **Accent (10%)**: `#748471` (Sage Green / Olive) - A natural green for labels and interactive details.

## Analysis of current implementation
- **Hardcoded Hex Codes**: Current colors (`#F7F3EF`, `#161616`, `#D8B7B0`, `#7C8F7A`) are hardcoded directly in Tailwind classes across all components.
- **Background Heavy**: The current design relies on `#F7F3EF` (Light) and `#161616` (Dark) section alternating.
- **Components Affected**:
    - `App.jsx`: Main layout, loader, and section containers.
    - `Hero.jsx`: Gradients and buttons.
    - `ExperienceCard.jsx`: Timeline indicators.
    - `ProjectCard.jsx`: Overlays and metadata.
    - `ProjectGrid.jsx`: Container styles.

## Proposed Distribution (60/30/10 Rule)
To respect the "60% Rosa" directive while maintaining a high-end cinematic UX:

| Element | Color | Role |
| ------- | ----- | ---- |
| **Main Backgrounds** | `#8B6D62` (Rosa) | 60% - Applied to global container and majority of sections (Reels, Timeline, About). |
| **Contrast Sections** | `#F2F0ED` (White) | 30% - Applied to Hero transition, Photography section, and card backgrounds. |
| **Text & Accents** | `#F2F0ED` / `#748471` | Used for readability on dark backgrounds and status indicators. |
| **Labels & Buttons** | `#748471` (Verde) | 10% - Applied to tags, pulse dots, and secondary buttons. |

## Strategy
1. **Theming**: Create a `tailwind.config.js` (currently missing) to define these colors as theme variables. This will make the rebranding easier to manage and future-proof.
2. **Global Refactor**: Replace hardcoded hex values with the new theme variables.
3. **Contrast Verification**: Ensure that white text (`#F2F0ED`) is used over the pink background (`#8B6D62`) to maintain WCAG accessibility and a premium feel.

## Risks
- **Over-saturation**: Using 60% of a terracotta pink can feel "heavy". We must use gradients and grain textures (already present) to break the flat color.
- **Dark Mode loss**: Removing `#161616` completely might reduce "cinematic" contrast. We will keep `#161616` for critical low-light elements or as a "blackest" accent if needed, but the primary 60/30/10 will be respected.

## Next Steps
- Create `02_proposal.md` with the technical approach for the Tailwind configuration.
- Plan the component-by-component replacement.
