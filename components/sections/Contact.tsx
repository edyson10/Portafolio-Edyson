"use client";

import { useState } from "react";
import { Mail, Download } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { decodeContactValue } from "@/lib/obfuscation";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Toast } from "@/components/ui/Toast";

const SOCIAL_ICONS = { linkedin: LinkedinIcon, github: GithubIcon, download: Download };

export function Contact() {
  const { copy } = useCopyToClipboard();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    // El email nunca existe como texto plano hasta este click.
    const email = decodeContactValue(profile.contact.emailEncoded);
    const ok = await copy(email);
    if (ok) {
      setToastMessage("Email copiado");
      setTimeout(() => setToastMessage(null), 2000);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading
          eyebrow="Contacto"
          align="center"
          title="Hablemos"
          description="Disponible para roles backend, móvil, frontend, full-stack o lider técnico. Respondo rápido."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-2 bg-surface/60 px-3 py-1 text-xs font-medium text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-status-ok" aria-hidden />
              Disponible para nuevos proyectos
            </span>

            <button
              onClick={handleCopyEmail}
              className="group flex cursor-pointer items-center gap-2 rounded-lg bg-text px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              <Mail size={16} aria-hidden />
              Copiar email
            </button>

            <div className="mt-4 flex items-center gap-2">
              {profile.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.icon === "download" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-text-muted ring-1 ring-ink-2 transition-colors duration-200 hover:text-text hover:ring-signal/40"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <Toast message={toastMessage ?? ""} show={Boolean(toastMessage)} />
    </section>
  );
}
