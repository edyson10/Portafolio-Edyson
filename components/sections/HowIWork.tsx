import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowIWork() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Forma de trabajo" title="Cómo trabajo" />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {profile.workingStyle.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06}>
              <div className="border-t border-ink-2 pt-5">
                <span className="font-heading text-sm text-text-muted/40">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-heading text-lg font-medium text-text">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
