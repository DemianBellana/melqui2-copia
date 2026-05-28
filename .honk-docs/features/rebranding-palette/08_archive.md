# Archive: rebranding-palette

## Summary
The `rebranding-palette` feature centralized the project's color scheme into a Tailwind configuration. This allows for rapid brand adjustments and eliminates technical debt from hardcoded hex values.

## Key Changes
- **Infrastructure**: Added `tailwind.config.js` with `brand-rosa`, `brand-white`, and `brand-green`.
- **Global**: Updated `App.jsx` background and text colors.
- **Components**: Synchronized `Hero`, `ExperienceCard`, `ProjectCard`, and `ProjectGrid` with the new palette.

## ADRs Promoted
- **Theme Extension (DA-001)**: Decoupled design tokens from utility classes.
- **60/30/10 Rule (DA-002)**: Standardized visual hierarchy for branding.

## Post-Mortem
- **What went well**: Tailwind theme extension allowed for a surgical update with minimal regressions.
- **Challenges**: Ensuring consistent text contrast across all sections required a global text color update in `App.jsx`.
- **Lessons**: Semantic naming is superior to color-based naming for future rebrands.

## Final Status: CLOSED
