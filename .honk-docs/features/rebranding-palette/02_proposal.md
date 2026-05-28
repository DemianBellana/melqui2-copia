# Proposal: rebranding-palette

## Problem
Hardcoded hex codes spread across components → high maintenance cost + branding inconsistency.

## Alternatives
| Alt | Pros | Contras | Why |
|-----|------|---------|-----|
| Config-driven (A) | Single source of truth; semantic naming; future-proof. | Requires `tailwind.config.js` setup. | Selected: Best maintainability. |
| String Replace (B) | Quick execution; zero new files. | Brittle; prone to omissions; no semantic context. | Descartada: Technical debt. |

## Selected
Alternative A: Config-driven rebrand → centralizes the design system and ensures consistency across the cinematic portfolio.

## Scope
**IN:**
- ✅ Create `tailwind.config.js` with custom theme colors.
- ✅ Define `brand-rosa` (#8B6D62), `brand-white` (#F2F0ED), `brand-green` (#748471).
- ✅ Update `App.jsx`, `Hero.jsx`, `ExperienceCard.jsx`, `ProjectCard.jsx`, `ProjectGrid.jsx` classes.
- ✅ Apply 60/30/10 distribution rule to background and accents.

**OUT:**
- ❌ Component structural changes or new feature development.
- ❌ Replacement of grain/noise textures (assets remain).

## Rollback
Git Revert → `git checkout .` to discard changes or `git revert {commit_hash}` to undo the config and replacements.

## Impact
mod:6 new:1 tests:0
