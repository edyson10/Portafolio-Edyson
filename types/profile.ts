// Tipos de dominio. Todo el contenido del sitio se tipa desde acá
// y se implementa una única vez en `data/profile.ts`.

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Cloud"
  | "Mobile"
  | "Bases de datos"
  | "Testing"
  | "Herramientas"
  | "IA";

/** Ícono oficial de una tecnología: simple-icons (bundled) o un SVG local en /public/tech */
export type TechIcon = { source: "simple-icons"; slug: string } | { source: "local"; src: string };

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  tagline: string;
  shortBio: string;
  availability: "available" | "unavailable";
  yearsOfExperience: number;
}

export interface StoryFocusArea {
  label: string;
  detail: string;
}

export interface StorySection {
  heading: string;
  paragraphs: string[];
  focusAreas: StoryFocusArea[];
}

export interface WorkingStylePoint {
  id: string;
  icon: "rocket" | "wrench" | "handshake" | "book-open";
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Modalidad, ej. "Tiempo completo", "Freelance", "Part-time" */
  type: string;
  startDate: string; // "2022-08"
  endDate: string | null; // null = presente
  achievements: string[];
  technologies: string[];
}

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  icon: TechIcon;
}

export interface PersonalProject {
  id: string;
  name: string;
  tagline: string;
  objective: string;
  features: string[];
  role: string;
  stack: string[];
  /** Repo público, si existe */
  githubUrl?: string;
  /** URL del proyecto desplegado, si existe */
  liveUrl?: string;
  /** Ruta a una captura real en /public/projects, si ya existe */
  screenshotSrc?: string;
  /** Ruta a un video de demo en /public/projects (mudo, loop, autoplay) */
  videoSrc?: string;
  /** Poster/fallback del video, y dimensiones para reservar el layout correcto */
  videoPosterSrc?: string;
  videoAspect?: "portrait" | "landscape";
}

export interface Achievement {
  id: string;
  icon: "shield" | "arrow-up-right" | "code" | "layout";
  title: string;
  description: string;
}

export type Stat =
  | { id: string; kind: "counter"; value: number; suffix: string; label: string }
  | { id: string; kind: "text"; display: string; label: string };

export interface ContactInfo {
  /** Fragmentos ofuscados, nunca el valor plano */
  emailEncoded: string;
  /** Opcional: se agrega con el mismo algoritmo cuando haya un número a publicar */
  phoneEncoded?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "linkedin" | "github" | "download";
}

export interface Profile {
  personal: PersonalInfo;
  story: StorySection;
  workingStyle: WorkingStylePoint[];
  experience: Experience[];
  technologies: Technology[];
  projects: PersonalProject[];
  achievements: Achievement[];
  stats: Stat[];
  contact: ContactInfo;
  socials: SocialLink[];
}
