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

### Pendiente (resuelto en la Iteración 3)
- ~~Que el usuario reemplace el contenido de ejemplo por el suyo real~~ → hecho.
- Opcional: borrar `_removed-third-party-assets/` cuando el usuario confirme que no lo
  necesita (sigue sin borrarse).

## Iteración 3 — Contenido real a partir del CV (`CV_Edyson_Leal.pdf`)

El usuario compartió su CV real y pidió reemplazar el contenido de ejemplo, con una
regla clara: en experiencia, incluir **todas** las posiciones del CV pero con los
puntos más relevantes de cada una (no pegar el CV completo), y no tocar lo que él ya
había editado a mano en `data/profile.ts` / `constants/site.ts` (nombre, rol,
ubicación, tagline, bio, `story.focusAreas`, redes, dominio).

- **`types/profile.ts`**: agregada categoría `"Cloud"` a `TechCategory` (AWS/Azure/GCP
  no tenían dónde mostrarse); `PersonalProject.githubUrl` ya era opcional (sin cambios
  nuevos acá).
- **`data/profile.ts`**:
  - `experience`: las 10 posiciones reales del CV (Freelance actual → Amaris → GFT
    Technologies → Linktic → Periferia IT Group → Consultec TI → TUR Colombia → WPOSS →
    HI-TECH → WIFIX), orden cronológico descendente, 2–4 logros por rol reescritos de
    forma directa en vez de copiar el texto largo "medido por X, haciendo Y" del CV.
  - `technologies`: reemplazado el stack de ejemplo por el stack real (Java, Kotlin,
    Spring Boot, Node.js, Python, Django, PHP, Go, Angular, AWS, Azure, GCP, Android
    Studio, Ionic, MySQL, PostgreSQL, Oracle PL/SQL, H2, JUnit, Postman, Git, GitHub,
    Bitbucket, Docker, Kubernetes, Apache Kafka, Gradle, Maven).
  - `projects`: el CV no menciona proyectos personales, así que esta sección pasó a
    mostrar 2 **casos de estudio reales** de su trabajo (migración SFC vía Linktic;
    sistema de pagos vía GFT/Pexto Cobre) — sin `githubUrl`/`liveUrl` por ser trabajo de
    cliente confidencial (los botones quedan deshabilitados, `ProjectMedia` muestra
    "Capturas próximamente"). Eyebrow de la sección cambiado de "Proyectos personales"
    a "Casos destacados" para que no sea engañoso.
  - `achievements`, `stats`, `personal.yearsOfExperience` (3→7): actualizados con datos
    reales del CV.
  - `contact.emailEncoded`: regenerado a partir del email real
    (`edysonleal3@gmail.com`) con `lib/obfuscation.ts` (sin tocar esa lógica) —
    verificado con Playwright que el botón "Copiar email" copia el email real al
    portapapeles.
- **`components/sections/TechIcon.tsx`**: se agregaron los nuevos slugs de simple-icons
  usados (Node.js, Express, Flutter, Kotlin, Swift, Android, Expo, PostgreSQL, MongoDB,
  Firebase, Jest, Cypress, Docker, Figma, GitHub, Vercel, Angular, JavaScript, Python,
  Django, PHP, Go, Bitbucket, Kubernetes, Apache Kafka, Gradle, Apache Maven,
  Android Studio, Ionic, H2 Database).
- **Íconos locales nuevos en `public/tech/`**: `aws.svg`, `azure.svg`, `oracle.svg` —
  ninguno de los tres existe en el paquete `simple-icons` instalado, así que se
  descargaron (vía `curl`) los SVG oficiales de Devicon (mismo origen/licencia MIT que
  ya se usaba para `java.svg`).
- **`components/sections/TechStack.tsx`**: agregada `"Cloud"` al `CATEGORY_ORDER`.
- **`README.md`**: reescrito — ya no dice "contenido de ejemplo", documenta que los
  casos destacados son trabajo de cliente sin capturas públicas.
- Verificación: `tsc --noEmit` limpio, `npm run build` limpio, Playwright en
  claro/oscuro/mobile sin errores de consola ni HTTP, prueba funcional de copiar email
  real exitosa.
- **Bug real encontrado y corregido durante esta iteración** (no por mí, por el
  proceso de verificación con Playwright): un `npm run build` ejecutado mientras el
  `next dev` seguía corriendo pisa el `.next` del servidor dev y lo deja sirviendo
  chunks JS/CSS que ya no existen (404 en todo) — el sitio se ve en blanco. Desde
  entonces, cada vez que se corre `npm run build` para verificar, el siguiente paso
  obligatorio es: matar el proceso en el puerto 3000, borrar `.next`, y recién ahí
  volver a levantar `npm run dev`. **Ver nota en `CLAUDE.md`.**

## Iteración 4 — Ícono de marca ("EL") para favicon y navbar

El usuario pidió usar un ícono de marca (cuadrado azul degradado con "EL" en blanco,
mostrado como imagen pegada en el chat, sin ruta de archivo accesible) en dos lugares:
la pestaña del navegador y el logo del navbar.

- Como la imagen pegada no tenía ruta de archivo accesible, se recreó como SVG propio
  (`public/brand/logo-mark.svg`): cuadrado redondeado, degradado azul diagonal, brillo
  glossy superior, "EL" en blanco bold — visualmente muy cercano al original.
- `app/icon.svg`: copia del mismo SVG, usando la convención de Next.js App Router para
  favicon (Next la sirve automáticamente en `<link rel="icon">`, sin tocar el objeto
  `metadata` de `app/layout.tsx`).
- `app/favicon.ico`: regenerado desde cero (antes era el ícono genérico original del
  template). Se renderizó el SVG a PNG en 16/32/48/64px con Playwright (Chromium
  headless) y se empaquetó a mano en un contenedor ICO válido (formato documentado,
  PNG embebido — soportado desde Windows Vista) con un script de Node ad-hoc, sin
  dependencias nuevas.
- `components/layout/Navbar.tsx`: el logo dejó de ser un `<span>` con iniciales
  calculadas por CSS (`getInitials(profile.personal.name)`) y ahora es
  `<img src="/brand/logo-mark.svg">`.
- Verificado: `<link rel="icon">` resuelve a `favicon.ico` e `icon.svg` (200 en ambos),
  `npm run build` limpio, captura de navbar en claro/oscuro.

## Iteración 5 — Proyecto "HW Collections"

El usuario pidió agregar un proyecto propio (app móvil para coleccionistas de
vehículos a escala, publicada en Google Play), con una instrucción explícita: **no**
poner link de GitHub, usar el link de la landing page en su lugar. Adjuntó un póster
promocional de la app (esta vez con ruta de archivo accesible en
`...\images\1.png`, a diferencia del ícono de la Iteración 4).

- **`data/profile.ts`** → `projects`: nuevo proyecto `proj-hwcollections`, primero en
  el array (es el único con link público real, a diferencia de los dos casos de
  estudio de cliente). `liveUrl` apunta a
  `https://landing-page-hwcollections.edysonfabian.workers.dev/`; `githubUrl` se dejó
  sin definir a propósito → el botón "Ver en GitHub" queda deshabilitado
  automáticamente (comportamiento ya existente en `ProjectCard`/`Button`, sin tocar
  lógica). Stack: Ionic, Spring Boot, PostgreSQL, Flyway. Rol: líder técnico y único
  desarrollador. Funcionalidades extraídas del póster (gestión de colección,
  estadísticas, logros/XP, lista de deseos, organización por series/años, privacidad
  on-device).
- **`public/projects/hw-collections-poster.png`**: copia directa del póster
  proporcionado por el usuario (archivo real, no recreado).
- **Cambio de tipo/componente necesario**: el póster es una imagen promocional
  vertical (1145×1374), no una captura de pantalla horizontal — forzarla al recorte
  `aspect-video`/`object-cover` que usa el resto de las tarjetas la hubiera cortado
  mal (perdiendo los mockups de teléfono). Se agregó
  `PersonalProject.screenshotAspect?: "portrait" | "landscape"` en `types/profile.ts`
  (mismo patrón que ya existía para video con `videoAspect`), y
  `components/sections/ProjectMedia.tsx` ahora, cuando `screenshotAspect === "portrait"`,
  muestra la imagen completa sin recortar (mismo tratamiento `object-contain` centrado
  que ya se usaba para el video), en vez del recorte 16:9 por defecto. Comportamiento
  por defecto sin cambios para proyectos que no seteen este campo.
- Verificado: `tsc --noEmit` limpio, `npm run build` limpio, Playwright en
  claro/oscuro/mobile (390px, sin scroll horizontal) — el póster se ve completo, sin
  recortes, y el botón "Ver proyecto" lleva a la landing page real.

### Pendiente
- Opcional: borrar `_removed-third-party-assets/` cuando el usuario confirme que no lo
  necesita.
- Opcional: cuando el usuario tenga capturas reales (no confidenciales) de los dos
  casos de estudio de cliente, completar `screenshotSrc` en esos proyectos.
