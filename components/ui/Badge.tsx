import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "signal" | "status-ok";
  className?: string;
}

const toneStyles: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-ink-2/60 text-text-muted",
  signal: "bg-signal-soft text-signal",
  "status-ok": "bg-status-ok-soft text-status-ok",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium", toneStyles[tone], className)}>
      {children}
    </span>
  );
}
