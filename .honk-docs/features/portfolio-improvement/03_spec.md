# Spec: Cinematic Portfolio Refactor

## Delta
| Type | Path | Description |
|------|------|-------------|
| ADDED | `src/components/Hero.jsx` | UI hook visual principal. |
| ADDED | `src/components/ProjectGrid.jsx` | Mapeo y layout de items portfolio. |
| ADDED | `src/components/ExperienceCard.jsx` | Items de línea de tiempo/CV. |
| ADDED | `src/data/portfolio.js` | Fuente única de contenido y assets. |
| MODIFIED | `melisa_quiroga_cinematic_portfolio_react.jsx` | Orquestador consume componentes y data. |

## CAs

### CA-001: Extracción de Hero
Given: `src/components/Hero.jsx` existe con props `{ videoSrc, title, subtitle }`
When: Componente renderiza en `melisa_quiroga_cinematic_portfolio_react.jsx`
Then: UI muestra video de fondo y textos recibidos por props.

### CA-002: Extracción de ProjectGrid
Given: `src/components/ProjectGrid.jsx` recibe lista `projects` desde data externa
When: Array de proyectos tiene items válidos
Then: Sistema renderiza grid con tarjetas de proyecto dinámicas.

### CA-003: Extracción de ExperienceCard
Given: `src/components/ExperienceCard.jsx` recibe objeto `experience`
When: Componente es invocado dentro de sección Timeline
Then: UI visualiza datos de experiencia laboral formateados.

### CA-004: Externalización de Datos
Given: `src/data/portfolio.js` exporta objeto con secciones (hero, projects, experience)
When: App inicia
Then: `melisa_quiroga_cinematic_portfolio_react.jsx` importa y usa objeto para inyectar en componentes.

### CA-005: Lazy Loading de Imágenes
Given: Tarjetas de proyecto en `ProjectGrid` tienen atributo `loading="lazy"`
When: Usuario hace scroll hacia abajo
Then: Assets de imagen cargan solo cuando entran en el viewport.

### CA-006: Manejo de Lista Vacía
Given: `src/data/portfolio.js` tiene array `projects` vacío
When: `ProjectGrid` intenta renderizar
Then: UI muestra mensaje "No projects found" o sección vacía sin romper app.

### CA-007: Asset Faltante
Given: Un item en `portfolio.js` referencia URL de imagen inexistente
When: Navegador intenta cargar asset
Then: UI muestra placeholder genérico o mantiene layout estable.

## Contracts
| Name | Method | Input | Output Success | Output Error |
|------|--------|-------|--------------|--------------|
| `getPortfolioData` | Import `portfolio.js` | N/A | `Object` (Portfolio schema) | Error de importación (Webpack) |

## Edge Cases
| Edge | Covered by CA |
|------|--------------|
| Lista de proyectos vacía | CA-006 |
| URL de imagen rota/inexistente | CA-007 |

## Restrictions
- Ninguna.

## Open Questions
- Ninguna.
