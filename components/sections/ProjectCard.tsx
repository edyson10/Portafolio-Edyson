import { ExternalLink } from "lucide-react";
import type { PersonalProject } from "@/types/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectMedia } from "@/components/sections/ProjectMedia";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PersonalProject;
  reversed?: boolean;
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <article className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className={cn("overflow-hidden rounded-2xl border border-ink-2", reversed && "md:order-2")}>
        <ProjectMedia project={project} />
      </div>

      <div className={cn(reversed && "md:order-1")}>
        <h3 className="font-heading text-2xl font-medium text-text">{project.name}</h3>
        <p className="mt-1 text-sm text-text-muted">{project.tagline}</p>

        <div className="mt-5 space-y-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted">Objetivo</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{project.objective}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted">Mi participación</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{project.role}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted">Funcionalidades</h4>
            <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-signal" aria-hidden>
                    →
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={project.liveUrl} disabled={!project.liveUrl} icon={<ExternalLink size={16} aria-hidden />}>
            Ver proyecto
          </Button>
          <Button
            variant="secondary"
            href={project.githubUrl}
            disabled={!project.githubUrl}
            icon={<GithubIcon size={16} />}
          >
            Ver en GitHub
          </Button>
        </div>
      </div>
    </article>
  );
}
