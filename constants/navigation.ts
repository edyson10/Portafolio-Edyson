export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "technologies", label: "Tecnologías" },
  { id: "projects", label: "Proyectos" },
  { id: "achievements", label: "Logros" },
  { id: "contact", label: "Contacto" },
];
