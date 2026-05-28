# Tasks: rebranding-palette

Status: ✅ DONE

## Task List

| ID | Phase | Description | Refs | Status |
|----|-------|-------------|------|--------|
| T-01 | Phase 1 | Create/Update `tailwind.config.js` with the brand palette (rosa, white, green). | CA-004, DA-001, DA-002 | ✅ |
| T-02 | Phase 2 | Update main background and global text colors in `App.jsx`. | CA-001, CA-005, DA-003.1 | ✅ |
| T-03 | Phase 2 | Update pulse bar loader colors in `App.jsx`. | CA-003, DA-003.1 | ✅ |
| T-04 | Phase 3 | Update `Hero.jsx` transition gradient, pulse dot, and action button colors. | CA-001, CA-002, CA-003, DA-003.2 | ✅ |
| T-05 | Phase 3 | Update `ExperienceCard.jsx` timeline dots, year tags, and text contrast. | CA-003, CA-005, DA-003.3 | ✅ |
| T-06 | Phase 3 | Update `ProjectCard.jsx` and Photography section backgrounds and metadata overlays. | CA-002, DA-003.4 | ✅ |
| T-07 | Phase 3 | Update `ProjectGrid.jsx` container backgrounds and empty state text colors. | CA-001, CA-003, DA-003.5 | ✅ |
| T-08 | Phase 4 | Verify custom theme variables resolution in the build process. | CA-004 | ✅ |
| T-09 | Phase 4 | Perform accessibility contrast audit for brand-white text on brand-rosa background. | CA-005 | ✅ |
| T-10 | Phase 4 | Visual validation of 60/30/10 color distribution across the landing page. | CA-001, CA-002, CA-003 | ✅ |

## Checklist

### Phase 1: Infrastructure (Tailwind Config)
- [x] T-01: Ensure `tailwind.config.js` exists and correctly extends the `brand` color object.

### Phase 2: Global Styling (App.jsx)
- [x] T-02: Replace `bg-[#F7F3EF]` with `bg-brand-rosa` and `text-[#161616]` with `text-brand-white`.
- [x] T-03: Update the loader pulse bar to `bg-brand-green`.

### Phase 3: Component Styling (Hero, Cards, Grid)
- [x] T-04: Modify `Hero.jsx` to use `brand-rosa`, `brand-white`, and `brand-green` classes.
- [x] T-05: Update `ExperienceCard.jsx` with the new palette and ensure `CA-005` compliance.
- [x] T-06: Replace photography background `bg-[#EFE7E2]` with `bg-brand-white`.
- [x] T-07: Update `ProjectGrid.jsx` spacing and background using the rebranding colors.

### Phase 4: Validation
- [x] T-08: Confirm Tailwind successfully resolves `brand-*` classes.
- [x] T-10: Verify the visual distribution meets the 60% Rosa, 30% White, 10% Green goal.
