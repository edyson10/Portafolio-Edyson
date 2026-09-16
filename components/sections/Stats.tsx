"use client";

import { profile } from "@/data/profile";
import type { Stat } from "@/types/profile";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

function CounterStat({ stat }: { stat: Extract<Stat, { kind: "counter" }> }) {
  const { ref, value } = useAnimatedCounter(stat.value);
  return (
    <div>
      <p className="font-heading text-2xl font-semibold text-text sm:text-3xl">
        <span ref={ref}>{value}</span>
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-sm text-text-muted">{stat.label}</p>
    </div>
  );
}

function TextStat({ stat }: { stat: Extract<Stat, { kind: "text" }> }) {
  return (
    <div>
      <p className="font-heading text-2xl font-semibold text-text sm:text-3xl">{stat.display}</p>
      <p className="mt-1.5 text-sm text-text-muted">{stat.label}</p>
    </div>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  return stat.kind === "counter" ? <CounterStat stat={stat} /> : <TextStat stat={stat} />;
}

export function Stats() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 border-y border-ink-2 py-10 sm:grid-cols-4">
            {profile.stats.map((stat) => (
              <StatItem key={stat.id} stat={stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
