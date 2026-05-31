# Feature Explore: Social Icon Buttons

## Objetivo
Reemplazar los botones de texto ("INSTAGRAM", "TIKTOK", "WHATSAPP", "BEHANCE", "EMAIL") en la sección de Contacto de `App.jsx` por botones circulares que contengan iconos. Se debe implementar un efecto de "slide up" de fondo al hacer hover y los iconos deben rotar 360 grados de manera fluida, traduciendo CSS crudo proporcionado por el usuario a clases de Tailwind CSS y JSX.

## Estado Actual
- **Ubicación:** `src/App.jsx` en la sección Contacto (aprox. línea 229).
- **Estructura de Datos:** La lista se alimenta del array de strings `socials` (`['Instagram', 'TikTok', 'WhatsApp', 'Behance', 'Email']`) definido en `src/data/portfolio.js`.
- **Renderizado Actual:** Se mapea el array y se pinta un `<button>` horizontal tipo píldora (`px-7 py-4 rounded-full`) conteniendo el texto de la red social.
- **Dependencias:** `react-icons` no se encuentra en `package.json`.

## Requisitos y Estrategia Técnica

1. **Gestión de Iconos (React Icons):** 
   - Se debe evitar el uso de enlaces a CDN (ej. FontAwesome en el `<head>`).
   - La estrategia correcta en el ecosistema React es utilizar la librería `react-icons` para un mejor rendimiento y bundle size. 

2. **Adaptación de los Datos (`portfolio.js`):**
   - El array de strings `socials` no es suficiente para contener iconos y colores de marca. 
   - Solución: Transformar `socials` de un array de strings a un array de objetos con `name`, `href` y mapear los iconos dinámicamente en `App.jsx`, o incluir la referencia del icono y color directamente en la estructura.

3. **Estructura HTML y Tailwind CSS para Efectos Visuales:**
   - **Forma Circular:** El botón debe cambiar de padding de texto (`px-7 py-4`) a proporciones cuadradas/circulares (ej. `w-14 h-14 rounded-full`), empleando Flexbox para centrar el contenido.
   - **Container:** El botón principal debe actuar como contenedor (`relative overflow-hidden group`).
   - **Fondo Animado (Slide-Up):** Recrear la animación CSS de `top: 100%` a `top: 0%` en Tailwind usando un `div` posicionado absolutamente.
     ```jsx
     <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" style={{ background: colorBrand }}></div>
     ```
   - **Rotación 360° del Icono:** El icono (o su contenedor) debe aplicar la clase `group-hover:rotate-[360deg] transition-transform duration-500 z-10 relative`. Al tener un contenedor que lo envuelve, el icono girará suavemente mientras el fondo sube.

## Próximos Pasos (Implementación)
1. Instalar `react-icons` (`npm install react-icons`).
2. Actualizar el esquema de datos en `src/data/portfolio.js` para la propiedad `socials`.
3. Importar los iconos correspondientes en `App.jsx` (ej. `FaInstagram`, `FaTiktok`, `FaWhatsapp`, etc.).
4. Modificar el JSX de la iteración `socials.map` en `App.jsx` introduciendo la nueva estructura de botón circular y efectos Tailwind.

*Nota: No se han realizado modificaciones en el código fuente, respetando la instrucción de solo explorar y preparar el terreno.*