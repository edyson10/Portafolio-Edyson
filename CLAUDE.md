# CLAUDE.md

Contexto de proyecto para Claude Code. Leer esto y `progress.md` (historial de
decisiones y cambios, iteración por iteración) antes de revisar o ajustar cualquier
cosa en este repo — entre los dos dan la arquitectura completa y el por qué de las
decisiones ya tomadas, para no repetir trabajo ni deshacer algo a propósito.

## Qué es este proyecto

Portafolio personal de **Edyson Leal** (desarrollador Full-Stack / Tech Leader),
one-page en Next.js 15 (App Router). Todo el contenido visible (bio, experiencia,
stack, proyectos, logros, contacto) sale de un único archivo de datos tipado —
no hay CMS ni backend propio.

## Stack tecnológico

- **Next.js 15.5** (App Router, React 18.3, TypeScript 5, `strict: true`)
- **Tailwind CSS v4** — config "CSS-first" (`@theme inline` dentro de
  `app/globals.css`), **no hay `tailwind.config.js`**. No crear uno.
- **Framer Motion** para animaciones (scroll-reveal, transiciones, contador animado)
- **next-themes** para el toggle claro/oscuro (clase `.dark` en `<html>`)
- **simple-icons** (paquete npm) para los logos de tecnologías; unos pocos que no
  están en ese paquete (AWS, Azure, Oracle, Java) son SVG locales en `public/tech/`,
  sourceados de Devicon (mismo origen/licencia que ya traía el proyecto).
- **lucide-react** para iconografía de UI (ojo: esta versión del paquete **no**
  incluye logos de marca como Github/Linkedin — por eso existen
  `components/ui/icons.tsx` con esos dos a mano).
- Sin base de datos, sin API routes propias, sin autenticación.

## Arquitectura / flujo de datos

```
types/profile.ts   → contratos TypeScript de todo el contenido del sitio
data/profile.ts     → ÚNICA fuente de verdad del contenido (bio, experiencia,
                       tecnologías, proyectos, logros, stats, contacto, redes)
constants/site.ts   → metadata del sitio (nombre, título, descripción, dominio, keywords)
        ↓
components/sections/*  → cada sección del landing lee de `profile` (de data/profile.ts)
app/page.tsx            → ensambla las secciones en orden
app/layout.tsx           → fuentes, ThemeProvider, <head> (metadata + JSON-LD)
```

**Para cambiar contenido** (experiencia, stack, proyectos, logros, contacto, redes):
editar únicamente `data/profile.ts`. No hace falta tocar componentes para eso.

**Para cambiar estructura/diseño de una sección**: el componente correspondiente en
`components/sections/`.

## Estructura de carpetas

```
app/
  page.tsx            Ensambla todas las secciones del landing, en orden
  layout.tsx           Fuentes (Outfit + Work Sans vía next/font/google), ThemeProvider,
                        <Metadata> + JSON-LD (Person schema, generado desde `profile`)
  globals.css           Tokens de color (claro/oscuro), Tailwind v4 @theme inline
  icon.svg, favicon.ico  Favicon (convención de archivos especiales de Next — Next los
                          sirve solo, no tocar el objeto `metadata` para esto)
  opengraph-image.tsx    Imagen de OG dinámica (usa `profile.personal.name/role`)
  manifest.ts, robots.ts, sitemap.ts   SEO/PWA, generados desde `constants/site.ts`

components/
  sections/    Una sección del landing por archivo: Hero, Stats, HowIWork, About,
               ExperienceTimeline, TechStack, TechIcon, Projects, ProjectCard,
               ProjectMedia, Achievements, Contact, ProfilePhoto
  layout/      Navbar (logo + nav + toggle de tema), Footer, ThemeToggle, ThemeProvider,
               ScrollProgress
  ui/          Átomos reutilizables: Button, Badge, SectionHeading, Reveal (wrapper de
               scroll-animation con soporte prefers-reduced-motion), Toast, icons.tsx
               (Github/Linkedin a mano, ver nota de lucide-react arriba)
  background/  AmbientBackground (glows + ruido de fondo, decorativo)

data/profile.ts       Todo el contenido real del sitio (ver "Arquitectura" arriba)
types/profile.ts      Tipos de dominio para ese contenido
constants/
  site.ts              Metadata del sitio (SITE.name/title/description/url/keywords)
  navigation.ts         Items del navbar (debe seguir los mismos `id` que las secciones)

hooks/        useActiveSection (scrollspy), useAnimatedCounter, useCopyToClipboard,
              usePrefersReducedMotion
animations/   variants.ts — variants de Framer Motion centralizados (fadeIn, slideUp,
              staggerContainer, reducedMotionVariants)
lib/
  utils.ts          cn() (merge de clases), formatDateRange()
  obfuscation.ts     Ofuscación reversible del email de contacto (shift + reverse +
                      base64) — ver regla absoluta abajo

public/
  tech/        Íconos de tecnologías que no están en simple-icons (java, aws, azure, oracle)
  brand/       logo-mark.svg — marca "EL", usada en Navbar y en app/icon.svg
  projects/    Capturas/pósters reales de proyectos (referenciados desde data/profile.ts)
  CV_Edyson_Leal.pdf, profile-round.png   Foto y CV reales (no placeholders)

design-system/portafolio/MASTER.md   Sistema de diseño (paleta, tipografía, estilo) —
                                       fuente de verdad de las decisiones visuales
progress.md    Historial de cambios iteración por iteración, con el razonamiento
               detrás de cada decisión no obvia. Leer antes de asumir por qué algo
               está como está.
_removed-third-party-assets/   Fuera de `public/` (no se sirve). Fotos/capturas del
                                 proyecto de referencia original (Gastón Castro) que se
                                 sacaron del sitio real. Pendiente: borrar cuando el
                                 usuario confirme que no las necesita.
```

## Sistema de diseño

- Tipografía: **Outfit** (headings, clase utilitaria `font-heading`) + **Work Sans**
  (body, default). Cargadas en `app/layout.tsx`.
- Paleta: monocromo + acento azul, vía tokens CSS en `app/globals.css`
  (`--ink`, `--surface`, `--ink-2`, `--text`, `--text-muted`, `--signal`,
  `--signal-soft`, `--status-ok`, `--status-ok-soft`), con variante `.dark`. Los
  componentes usan clases Tailwind generadas desde esos tokens
  (`bg-ink`, `text-text-muted`, `bg-signal`, etc.) — **no** usar colores Tailwind
  crudos (`zinc-500`, `blue-600`...) en componentes nuevos, usar los tokens.
- Sin mono/terminal aesthetic (se abandonó a propósito en el rediseño — no reintroducir
  `font-mono` salvo pedido explícito).
- Detalle completo + anti-patrones a evitar: `design-system/portafolio/MASTER.md`.

## Reglas importantes (no romper sin que el usuario lo pida explícitamente)

1. **No tocar la lógica de contacto** (`lib/obfuscation.ts`,
   `hooks/useCopyToClipboard.ts`, el handler de copiar email en `Contact.tsx`) al
   hacer cambios visuales — solo JSX/clases. El email real vive ofuscado en
   `data/profile.ts` (`contact.emailEncoded`); para generar uno nuevo:
   ```bash
   node -e "console.log(require('./lib/obfuscation').encodeContactValue('nuevo@email.com'))"
   ```
2. **No tocar el mecanismo de SEO/metadata** (`app/layout.tsx` → objeto `metadata` y
   JSON-LD, `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts`) — solo los datos que
   consumen (`SITE`, `profile`), nunca su estructura, salvo pedido explícito.
3. **No introducir contenido/fotos de terceros.** Todo lo que se muestra debe ser de
   Edyson. Si falta un dato real (foto, captura, link), usar el fallback existente
   (`ProfilePhoto` cae a iniciales si no hay imagen; `ProjectMedia` muestra "Capturas
   próximamente" si falta `screenshotSrc`; `Button` se deshabilita visualmente si falta
   `href`) en vez de inventar o reusar un asset ajeno.
4. **`npm run build` pisa el `.next` del `next dev` que esté corriendo** y lo deja
   sirviendo chunks JS/CSS inexistentes (sitio en blanco, 404 en todo). Si se corre un
   build para verificar, después hay que: matar el proceso en el puerto 3000, borrar
   `.next`, y recién ahí volver a levantar `npm run dev`.
5. **Verificación visual con Playwright**: los `Reveal` (scroll-animation,
   `viewport: { once: true }`) pueden aparecer en blanco en una captura si se
   hace `window.scrollTo()` directo a una posición sin haber scrolleado antes por el
   medio — no es un bug real. Para confirmar que algo realmente no renderiza, scrollear
   incrementalmente por toda la página antes de capturar, o verificar con
   `document.body.innerText`.
6. **Deshabilitar, no esconder, los dead links.** Si un proyecto no tiene
   `githubUrl`/`liveUrl`, el botón correspondiente se deshabilita visualmente
   (comportamiento ya implementado en `Button`/`ProjectCard`) — no poner `href="#"`.
