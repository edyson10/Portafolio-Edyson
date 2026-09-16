import { ImageOff } from "lucide-react";
import Image from "next/image";
import type { PersonalProject } from "@/types/profile";

interface ProjectMediaProps {
  project: PersonalProject;
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  if (project.videoSrc) {
    // Video vertical (grabación de pantalla del juego): no lo forzamos a un
    // recorte panorámico, lo mostramos con su proporción real, centrado.
    return (
      <div className="flex justify-center border-b border-ink-2 bg-ink py-6">
        <video
          src={project.videoSrc}
          poster={project.videoPosterSrc}
          autoPlay
          loop
          muted
          playsInline
          className="max-h-[420px] w-auto rounded-lg"
        />
      </div>
    );
  }

  if (project.screenshotSrc) {
    return (
      <div className="relative aspect-video w-full border-b border-ink-2 bg-ink">
        <Image
          src={project.screenshotSrc}
          alt={`Captura del proyecto ${project.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 border-b border-ink-2 bg-ink text-text-muted">
      <ImageOff size={22} strokeWidth={1.5} />
      <span className="text-xs">Capturas próximamente</span>
    </div>
  );
}
