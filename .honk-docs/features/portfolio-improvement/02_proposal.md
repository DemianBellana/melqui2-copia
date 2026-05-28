# Proposal: Cinematic Portfolio Improvement

## 1. Problem Identification
- **God Component Chaos**: Single file `melisa_quiroga_cinematic_portfolio_react.jsx` contains all logic, styles, and content.
- **Hardcoded Assets/Data**: Content management requires code changes; slow iteration and high maintenance.
- **Performance**: Heavy video/image assets without optimization/lazy loading.

## 2. Technical Alternatives

| Alternative | Pros | Cons |
| :--- | :--- | :--- |
| **A. Atomic Refactor** (Recommended) | Decouples UI from Data. Improves maintainability. Scalable. | Higher initial setup time. |
| **B. CSS/Visual Polish** | Quick visual wins. Minimal effort. | Leaves technical debt. Harder to maintain long-term. |

## 3. Recommended Approach: Atomic Refactor
Fix root causes by modularizing the codebase and externalizing data.

## 4. Scope

### IN
- **Modularization**: Create `components/` directory.
- **Component Extraction**:
  - `Hero`: Video backgrounds and main headlines.
  - `ProjectGrid`: Portfolio item mapping and layout.
  - `ExperienceCard`: Resume/Timeline items.
- **Data Externalization**: Create `data/portfolio.js` (or `.json`) for content.
- **Performance**: Implement Image Lazy Loading and optimized asset loading strategies.

### OUT
- **Backend Integration**: Keep project static for now.
- **SEO Optimization**: Outside current visual/structural improvement scope.

## 5. Rollback Plan
- Revert to original `melisa_quiroga_cinematic_portfolio_react.jsx` file.
- Keep original file as `MelisaQuirogaPortfolio.old.jsx` during transition.

## 6. Effort Estimate
- **Modularization**: 2-3 hours.
- **Refactoring components**: 4-5 hours.
- **Data Integration**: 1 hour.
- **Total**: ~8 hours.
