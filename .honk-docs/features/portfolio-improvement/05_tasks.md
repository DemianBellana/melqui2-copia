# Tasks: Cinematic Portfolio Refactor

## Phase 1: Fundación
| ID | Task | CA-ID | DA-ID | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TSK-001** | Create directory structure: `src/components/` and `src/data/` | - | **DA-001** | 🔲 |
| **TSK-002** | Initialize `src/data/portfolio.js` with static content (text, links, assets) | **CA-004** | **DA-002** | 🔲 |

## Phase 2: Core
| ID | Task | CA-ID | DA-ID | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TSK-003** | Extract `Hero.jsx`: Implement background video and title overlays | **CA-001** | **DA-001** | 🔲 |
| **TSK-004** | Extract `ExperienceCard.jsx`: Layout for laboral timeline items | **CA-003** | **DA-001** | 🔲 |
| **TSK-005** | Extract `ProjectCard.jsx`: Add lazy loading and `onError` placeholder | **CA-005, CA-007** | **DA-001, DA-003** | 🔲 |
| **TSK-006** | Extract `ProjectGrid.jsx`: Add `projects.length === 0` conditional rendering | **CA-002, CA-006** | **DA-001** | 🔲 |
| **TSK-007** | Refactor main orchestrator: Connect components and data source | **CA-001, CA-002, CA-003, CA-004** | **DA-001, DA-002** | 🔲 |

## Phase 3: Validación
| ID | Task | CA-ID | DA-ID | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TSK-008** | Manual verification: Hero visuals and video playback | **CA-001** | - | 🔲 |
| **TSK-009** | Manual verification: Grid rendering and empty state fallback | **CA-002, CA-006** | - | 🔲 |
| **TSK-010** | Manual verification: Experience items in timeline | **CA-003** | - | 🔲 |
| **TSK-011** | Perf Audit: Verify `loading="lazy"` in DevTools Network tab | **CA-005** | **DA-003** | 🔲 |
| **TSK-012** | Resilience Test: Force broken image URL to trigger placeholder | **CA-007** | - | 🔲 |
