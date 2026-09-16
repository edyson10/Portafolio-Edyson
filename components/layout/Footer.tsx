import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-2 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <p className="text-sm text-text-muted">Construyendo software con foco en el detalle.</p>
        <p className="text-xs text-text-muted/70">
          © {year} {profile.personal.name} — {profile.personal.location}
        </p>
      </div>
    </footer>
  );
}
