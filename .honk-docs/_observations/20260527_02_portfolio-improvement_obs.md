---
concepts: [refactor, atomic-design, performance, code-quality]
---

## [propose] 20260527

### Observación

Propuesta generada: Atomic Refactor.
Motivo: Eliminar "God Component" y separar datos de UI.
Impacto: Alta mantenibilidad y mejor performance (lazy loading).

### Decisiones registradas

- **Enfoque**: Atomic Refactor (Alternativa A).
- **Estructura**: Carpeta `components/` para Hero, Grid y Cards.
- **Datos**: Archivo `data/portfolio.js` para desacoplar contenido.

### Patrones descartados

- **CSS-only polish**: Descartado por no atacar la deuda técnica estructural.

### Alertas para features similares

- **Prop drilling**: Vigilar el paso de datos al separar componentes.
- **Asset paths**: Asegurar rutas relativas consistentes al mover componentes.
