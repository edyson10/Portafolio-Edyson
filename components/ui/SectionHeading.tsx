import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-signal">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={eyebrow ? 0.05 : 0}>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
