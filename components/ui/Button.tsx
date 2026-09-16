"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-text text-ink hover:opacity-90",
  secondary: "bg-surface text-text border border-ink-2 hover:border-signal/50",
  ghost: "text-text-muted hover:text-text hover:bg-ink-2",
};

export function Button({
  children,
  onClick,
  href,
  variant = "primary",
  icon,
  className,
  ariaLabel,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-200",
    variantStyles[variant],
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    className
  );

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {children}
        {icon}
      </span>
    );
  }

  const content = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.15 }}
      className={classes}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
}
