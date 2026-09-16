import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Casos destacados" title="Proyectos" />

        <div className="mt-14 space-y-16">
          {profile.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} reversed={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
