import { profile } from "@/data/profile";
import type { TechCategory } from "@/types/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/sections/TechIcon";

const CATEGORY_ORDER: TechCategory[] = [
  "Frontend",
  "Backend",
  "Cloud",
  "Mobile",
  "Bases de datos",
  "Testing",
  "Herramientas",
  "IA",
];

export function TechStack() {
  return (
    <section id="technologies" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Stack" title="Tecnologías" />

        <div className="mt-14 space-y-10">
          {CATEGORY_ORDER.map((category) => {
            const items = profile.technologies.filter((tech) => tech.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {items.map((tech, index) => (
                    <Reveal key={tech.id} delay={index * 0.03}>
                      <div className="flex items-center gap-2.5 rounded-lg bg-surface px-3.5 py-2 shadow-sm ring-1 ring-ink-2 transition-shadow duration-200 hover:shadow-md">
                        <TechIcon icon={tech.icon} size={18} />
                        <span className="text-sm text-text">{tech.name}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
