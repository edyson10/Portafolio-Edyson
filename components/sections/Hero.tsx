"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProfilePhoto } from "@/components/sections/ProfilePhoto";

const DISCIPLINES = ["Frontend", "Backend", "Mobile"];

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-16 md:grid-cols-[1.35fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-2 bg-surface/60 px-3 py-1 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-status-ok" aria-hidden />
            Disponible para nuevas oportunidades
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-text sm:text-6xl">
            {profile.personal.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-signal">{profile.personal.role}</p>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-text-muted">
            {profile.personal.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {DISCIPLINES.map((d) => (
              <Badge key={d}>{d}</Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollTo("experience")} icon={<ArrowRight size={16} aria-hidden />}>
              Ver experiencia
            </Button>
            <Button onClick={() => scrollTo("contact")} variant="secondary" icon={<Mail size={16} aria-hidden />}>
              Contactarme
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex justify-center"
        >
          <ProfilePhoto name={profile.personal.name} />
        </motion.div>
      </div>
    </section>
  );
}
