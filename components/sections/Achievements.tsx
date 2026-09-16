import { Shield, ArrowUpRight, Code2, LayoutPanelTop, Sparkles, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  shield: Shield,
  "arrow-up-right": ArrowUpRight,
  code: Code2,
  layout: LayoutPanelTop,
};

export function Achievements() {
  const [featured, ...rest] = profile.achievements;
  const FeaturedIcon = ICONS[featured.icon] ?? Sparkles;

  return (
    <section id="achievements" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Impacto" title="Logros" />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal className="md:row-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-text p-7 text-ink">
              <FeaturedIcon size={22} className="text-signal" aria-hidden />
              <div className="mt-8">
                <h3 className="font-heading text-xl font-medium">{featured.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">{featured.description}</p>
              </div>
            </div>
          </Reveal>

          {rest.map((achievement, index) => {
            const Icon = ICONS[achievement.icon] ?? Sparkles;
            return (
              <Reveal key={achievement.id} delay={0.06 * (index + 1)}>
                <div className="flex h-full gap-4 rounded-2xl bg-surface p-6 ring-1 ring-ink-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal-soft text-signal">
                    <Icon size={16} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text">{achievement.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">{achievement.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
