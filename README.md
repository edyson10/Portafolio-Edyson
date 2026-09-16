# Edyson Leal — Portfolio

Next.js 15 (App Router), React, TypeScript, Tailwind CSS, Framer Motion.

## Instalación

```bash
npm install
npm run dev
```

> El build necesita acceso a `fonts.googleapis.com` (Outfit/Work Sans vía `next/font/google`).
> Automático en Vercel o con internet normal.

## Estado del contenido

`data/profile.ts` y `constants/site.ts` ya tienen el contenido real de Edyson
(experiencia completa, stack, foto, CV, redes, email de contacto). Pendiente opcional:

- **Capturas de los proyectos destacados**: los dos proyectos en `data/profile.ts`
  (migración SFC y sistema de pagos) son trabajos para clientes sin capturas públicas,
  por eso `ProjectMedia` muestra "Capturas próximamente". Si en algún momento hay
  material que se pueda mostrar (mockups, diagramas, capturas sin datos sensibles),
  completar `screenshotSrc` / `videoSrc` en cada proyecto.

> Nota: `_removed-third-party-assets/` (fuera de `public/`, no se sirve en el sitio)
> contiene fotos/capturas que pertenecían al proyecto de referencia original y no se
> usan. Podés borrar esa carpeta cuando quieras.

## Estructura

```
app/              rutas, layout, metadata, SEO
components/
  ui/             átomos (Button, Badge, Toast, Reveal, SectionHeading, icons custom)
  layout/         Navbar, Footer, ThemeToggle, ThemeProvider, ScrollProgress
  sections/       una sección del landing por archivo
  background/     fondo ambient (glows + ruido)
hooks/            scrollspy, contador animado, copiar al portapapeles
animations/       variants de Framer Motion centralizados
lib/              utils, ofuscación de contacto
data/profile.ts   única fuente de verdad de todo el contenido
types/profile.ts  tipos de dominio
public/tech/      íconos oficiales que no están en simple-icons (ej. Java, vía Devicon)
```

Para actualizar cualquier contenido (experiencia, stack, proyecto, logros), editá
únicamente `data/profile.ts`. Los íconos de tecnologías son oficiales: simple-icons
para la mayoría, y `public/tech/java.svg` (Devicon) para Java, que no está en simple-icons.
