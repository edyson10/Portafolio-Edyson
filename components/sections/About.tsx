import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const { story } = profile;

  return (
    <section id="about" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Quién soy" title={story.heading} />

        <div className="mt-10 grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {story.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p className="text-lg leading-relaxed text-text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="space-y-5 border-l border-ink-2 pl-6">
              {story.focusAreas.map((area) => (
                <div key={area.label}>
                  <p className="font-heading text-sm font-semibold text-text">{area.label}</p>
                  <p className="mt-1 text-sm text-text-muted">{area.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
