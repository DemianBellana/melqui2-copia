# Spec: rebranding-palette

## Delta
| Type | Path | Description |
|------|------|-------------|
| ADDED | tailwind.config.js | Define custom theme variables: brand-rosa (#8B6D62), brand-white (#F2F0ED), brand-green (#748471). |
| MODIFIED | App.jsx | Update background classes to use brand-rosa as primary (60%). |
| MODIFIED | Hero.jsx | Apply brand-white (30%) for contrast and brand-green for secondary accents. |
| MODIFIED | ExperienceCard.jsx | Use brand-green (10%) for timeline indicators and accents. |
| MODIFIED | ProjectCard.jsx | Replace hardcoded hex values with brand-white for overlays and metadata text. |
| MODIFIED | ProjectGrid.jsx | Update container background and spacing using the new palette. |

## CAs
### CA-001: 60% Rosa Background
Given: Cinematic portfolio landing page
When: User navigates through the main sections (Reels, Timeline, About)
Then: System displays brand-rosa (#8B6D62) as the dominant background color (approx. 60% of surface area).

### CA-002: 30% White Contrast
Given: Hero transition and Photography section
When: User views section backgrounds and card containers
Then: System displays brand-white (#F2F0ED) as the secondary contrast color (approx. 30% of surface area).

### CA-003: 10% Green Accents
Given: Interactive elements and status indicators
When: User views tags, pulse dots, and secondary buttons
Then: System displays brand-green (#748471) for accent details (approx. 10% of surface area).

### CA-004: Tailwind Config existence
Given: Project root directory
When: Build process or tailwind compiler runs
Then: System resolves custom colors via `tailwind.config.js` using `brand-rosa`, `brand-white`, and `brand-green` aliases.

### CA-005: Text Readability (Contrast)
Given: Sections with brand-rosa (#8B6D62) background
When: Text content is rendered
Then: System uses brand-white (#F2F0ED) for text to ensure accessible contrast and readability.

## Contracts
| Name | Method | Input | Output Success | Output Error |
|------|--------|-------|--------------|--------------|
| Theme Definition | tailwind.config.js | colors object | { 'brand-rosa': '#8B6D62', ... } | n/a |

## Edge Cases
| Edge | Covered by CA |
|------|--------------|
| Over-saturation on large viewports | CA-001 |
| Low contrast in text-heavy sections | CA-005 |

## Restrictions
- Minimum contrast ratio for text on brand-rosa background must be verified for readability.
- Grain/noise textures must remain active over the new palette.

## Open Questions
- None.
