import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { formatDateRange } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia" />

        <ol className="relative mt-14 space-y-10 border-l border-ink-2 pl-8">
          {profile.experience.map((role, index) => (
            <Reveal as="li" key={role.id} delay={index * 0.08} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-ink"
                aria-hidden
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-medium text-text-muted">
                  {formatDateRange(role.startDate, role.endDate)}
                </span>
                <Badge>{role.type}</Badge>
              </div>

              <h3 className="mt-2 font-heading text-xl font-medium text-text">{role.role}</h3>
              <p className="text-sm font-medium text-signal">{role.company}</p>

              <ul className="mt-4 space-y-1.5">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2 text-sm text-text-muted">
                    <span className="text-signal" aria-hidden>
                      →
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
