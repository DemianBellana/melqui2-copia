# Design: Cinematic Portfolio Refactor

## 1. Complexity
- **Level**: Simple
- **Scope**: Extraction of 5 components, 1 data source, 7 CAs.

## 2. Components

| Component | Responsibility | Props |
| :--- | :--- | :--- |
| `Portfolio` | Main orchestrator. Layout manager. | None |
| `Hero` | Visual hook. Video background handler. | `videoSrc`, `title`, `subtitle` |
| `ProjectGrid` | Layout for works. Empty state logic. | `projects` |
| `ProjectCard` | Item detail. Lazy loading. Error fallback. | `project` |
| `ExperienceCard` | Timeline/Resume item. | `experience` |

## 3. DAs (Decision Architectural)

| ID | Decision | Rationale |
| :--- | :--- | :--- |
| **DA-001** | **Atomic File Structure** | Kill God Component. Move pieces to `src/components/`. |
| **DA-002** | **Static Data Source** | Decouple content from UI logic in `src/data/portfolio.js`. |
| **DA-003** | **Native Lazy Loading** | Use `loading="lazy"` on cards for simple perf gains without deps. |

## 4. Mapping (CAs -> Design)

| CA ID | Component / DA | Implementation Note |
| :--- | :--- | :--- |
| **CA-001** | `Hero` | Extract video logic and Tailwind overlays. |
| **CA-002** | `ProjectGrid` | Map over projects array from props. |
| **CA-003** | `ExperienceCard` | Vertical timeline item layout. |
| **CA-004** | **DA-002** | Centralized JS object with all text/links. |
| **CA-005** | `ProjectCard` | Apply `loading="lazy"` to `img` tags. |
| **CA-006** | `ProjectGrid` | Conditional rendering if `projects.length === 0`. |
| **CA-007** | `ProjectCard` | `onError` handler for broken image URLs. |

## 5. Structure

```text
src/
├── components/
│   ├── Hero.jsx
│   ├── ProjectGrid.jsx
│   ├── ProjectCard.jsx
│   └── ExperienceCard.jsx
├── data/
│   └── portfolio.js
└── melisa_quiroga_cinematic_portfolio_react.jsx  <-- Orchestrator
```
