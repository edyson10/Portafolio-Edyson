"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfilePhotoProps {
  name: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Espacio de foto en tarjeta redondeada. Espacio preparado para /public/profile-round.png.
 * Si no existe (o falla la carga), cae a un fallback con iniciales en vez de un ícono roto.
 */
export function ProfilePhoto({ name }: ProfilePhotoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xs">
      <div className="absolute inset-0 rounded-[2rem] bg-signal/20 blur-2xl" aria-hidden />

      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink-2 bg-surface">
        {!imageFailed ? (
          <Image
            src="/profile-round.png"
            alt={name}
            fill
            sizes="(max-width: 768px) 60vw, 320px"
            className="object-cover"
            priority
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="font-heading text-6xl font-semibold text-text-muted/30">{getInitials(name)}</span>
            <span className="rounded-full bg-ink-2/60 px-3 py-1 text-[11px] text-text-muted">Espacio para tu foto</span>
          </div>
        )}
      </div>
    </div>
  );
}
