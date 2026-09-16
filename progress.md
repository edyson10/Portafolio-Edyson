# Progreso — Rediseño del portafolio

## Hallazgo inicial (bloqueante, resuelto con el usuario)

Antes de tocar cualquier código se detectó que `data/profile.ts`, `constants/site.ts`
y `README.md` contenían el contenido real de un tercero (Gastón Castro: nombre, email,
GitHub, LinkedIn, historial laboral, proyectos personales) — el mismo sitio que se dio
como referencia de diseño (`gaston-castro.vercel.app`), no contenido del usuario.

Se consultó al usuario. Decisión: **usar contenido de ejemplo genérico** en la vista
previa (no los datos de Gastón Castro, no datos inventados como si fueran reales). El
usuario reemplazará los placeholders por su información real más adelante.

## Iteración 1 — Vista previa inicial

- Ruta aislada creada: `app/preview-redesign/` (layout, page y componentes propios).
  No se tocó ningún archivo del sitio real (`data/profile.ts`, `app/page.tsx`,
  `app/globals.css`, componentes en `components/`, etc.).
- Skills aplicadas: `ui-ux-pro-max` (lectura de `design-system/portafolio/MASTER.md`,
  búsquedas de tipografía/paleta/landing) + `redesign-existing-projects` (auditoría del
  sitio actual y checklist de mejoras).
- Sistema de diseño: paleta monocromo + acento azul de `MASTER.md` (coincide con la
  escala `zinc` + `blue-600` de Tailwind), tipografía Outfit (headings) / Work Sans
  (body) — cargadas solo en `app/preview-redesign/layout.tsx`, sin afectar las fuentes
  Geist del sitio real.
- Estructura de secciones (igual al pedido del usuario, y ya alineada con el orden que
  el sitio real usa hoy): Hero → stats → Cómo trabajo → Sobre mí → Experiencia →
  Tecnologías (Frontend / Backend / Mobile / Bases de datos / Testing / Herramientas /
  IA) → Proyectos → Logros → Contacto.
- Ajustes de diseño respecto al sitio actual (auditoría `redesign-existing-projects`):
  - Cambio de fuente (Geist → Outfit/Work Sans) para una identidad propia.
  - "Cómo trabajo": de tarjetas con borde uniforme a un layout editorial con índice
    numerado y regla superior (rompe el patrón de "3 tarjetas iguales").
  - "Logros": de grilla 3 columnas iguales a un layout asimétrico con un logro
    destacado más grande.
  - "Proyectos": tarjetas en zig-zag (imagen/texto alternado) en vez de una columna
    única con borde + sombra genérica.
  - Nav: monograma "EL" en vez del prompt `~/gaston`, para una identidad neutral y no
    atada a un perfil solo-backend.
  - Sin fotos ni capturas reales de terceros: avatar y capturas de proyecto son
    placeholders explícitos ("Espacio para tu foto", "Captura de ejemplo").
  - Banner superior visible en toda la vista previa: "Vista previa de rediseño —
    contenido de ejemplo, no es tu información real", con link de vuelta a `/`.
- Checklist de calidad aplicado: sin emojis como iconos (Lucide + SVGs de marca
  propios), `cursor-pointer` en todo lo clickeable, hover/focus con transición
  (150–300ms), contraste verificado a ojo (zinc-500/zinc-400 sobre fondos claros/oscuros
  ≥ 4.5:1), responsive verificado en 1440px y 390px sin scroll horizontal,
  `prefers-reduced-motion` heredado del `Reveal` compartido del proyecto.
- Verificado con `tsc --noEmit` (sin errores) y con Playwright (capturas desktop
  claro/oscuro, mobile, menú móvil) — sin errores de consola ni de página.
- Sitio real verificado intacto (`GET /` sigue devolviendo 200 sin cambios).

**Vista previa disponible en:** `http://localhost:3000/preview-redesign`
(servidor corriendo en background durante esta sesión).

## Iteración 2 — Aplicado al sitio real (confirmado por el usuario: "me gusta el diseño")

El usuario confirmó la vista previa y pidió aplicarla al sitio real, dejando
placeholders (eligió no pasar su contenido real todavía).

- **Tipos** (`types/profile.ts`): agregada categoría `"Mobile"` a `TechCategory`;
  `Experience.badge` → `Experience.type` (modalidad); `PersonalProject.githubUrl` ahora
  opcional (evita links muertos `#`, se deshabilita visualmente si falta);
  `StorySection.focusAreas` nuevo (para el layout dividido de "Sobre mí").
- **Contenido** (`data/profile.ts`, `constants/site.ts`): reemplazado el contenido real
  de Gastón Castro por el mismo contenido de ejemplo aprobado en la vista previa.
  `emailEncoded` regenerado con `lib/obfuscation.ts` (sin tocar esa lógica) a partir de
  `tu@email.com` — verificado que decodifica correctamente.
- **Fuentes y paleta** (`app/layout.tsx`, `app/globals.css`): Geist/Geist Mono → Outfit
  (heading) / Work Sans (body); tokens de color (`--ink`, `--surface`, `--signal`, etc.)
  recoloreados a monocromo + azul (`MASTER.md`) — se mantuvieron los mismos nombres de
  variable para no tener que tocar cada componente. Metadata/JSON-LD de `layout.tsx` no
  se tocó (mecanismo intacto, solo cambian los datos que ya venían de `SITE`/`profile`).
- **Componentes reales actualizados** (mismo alcance que la vista previa): `Navbar`
  (monograma dinámico en vez de `~/gaston`), `Footer`, `ProfilePhoto` (tarjeta
  redondeada en vez de círculo), `Hero`, `Stats` (reordenado justo después del Hero en
  `app/page.tsx`), `HowIWork` (layout numerado), `About` (split con áreas de foco),
  `ExperienceTimeline`, `TechStack` (+ categoría Mobile, íconos nuevos agregados a
  `TechIcon.tsx`), `Projects`/`ProjectCard` (zig-zag, botones deshabilitados sin link),
  `Achievements` (destacado asimétrico). `Button`/`Badge`/`SectionHeading` actualizados
  en su lugar (misma API, nuevo estilo). **`Contact.tsx` — solo se tocó JSX/clases; la
  lógica de `decodeContactValue`, `useCopyToClipboard` y el handler de copiar email
  quedó exactamente igual** (regla absoluta respetada).
- **Assets de terceros removidos de `public/`**: `profile-round.png` (foto real de
  Gastón Castro) y las capturas/video de sus proyectos (Mocanna, Tetris) se movieron a
  `_removed-third-party-assets/` (fuera de `public/`, ya no se sirven). Se detectó y
  corrigió un bug real durante la verificación: el caché de optimización de imágenes de
  Next (`.next/cache/images`) seguía sirviendo la foto real desde una request anterior
  aunque el archivo ya no existía — se limpió el caché y se confirmó que ahora cae
  correctamente al fallback de iniciales.
- **`app/opengraph-image.tsx`**: el `alt` y el texto "GET /gaston-castro" estaban
  hardcodeados con la identidad de Gastón — se reemplazó por texto dinámico
  (`profile.personal.name/role`) y colores de la nueva paleta. Es el mismo tipo de
  corrección de contenido que `data/profile.ts`, no un cambio de mecanismo SEO.
- **`package.json`/`package-lock.json`**: `name` de `"gaston-portfolio"` a
  `"portafolio-edydev"`.
- **`README.md`**: reescrito para reflejar el estado real (contenido de ejemplo,
  checklist de qué reemplazar antes de publicar, nota sobre los assets removidos).
- Ruta `app/preview-redesign/` eliminada.
- Verificación: `tsc --noEmit` limpio, `npm run build` (producción) limpio, ESLint sin
  errores nuevos (los 16 errores preexistentes son de scripts en `.claude/skills/` y un
  hook no tocado, ajenos a este trabajo). Playwright: hero/stats/cómo trabajo/sobre
  mí/experiencia/tecnologías/proyectos/logros/contacto verificados en claro, oscuro y
  mobile (390px, sin scroll horizontal); menú móvil probado; **botón "Copiar email"
  probado de punta a punta con permiso de portapapeles otorgado — copia
  `tu@email.com` correctamente y muestra el toast**, confirmando que la lógica de
  contacto sigue intacta.
- Nota para el usuario: el JSON-LD (SEO) en `app/layout.tsx` ya no tiene datos de
  Gastón — ahora usa `profile.personal.name/role` y `SITE`, que son placeholders. Sigue
  sin tocarse el mecanismo, solo hereda el contenido actualizado.

### Pendiente
- Que el usuario reemplace el contenido de ejemplo por el suyo real en
  `data/profile.ts` / `constants/site.ts` (ver checklist en `README.md`).
- Opcional: borrar `_removed-third-party-assets/` cuando el usuario confirme que no lo
  necesita.
