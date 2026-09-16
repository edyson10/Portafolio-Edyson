"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { slideUp, reducedMotionVariants } from "@/animations/variants";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "span" | "li";
}

/** Envuelve cualquier bloque para animarlo cuando entra en viewport. */
export function Reveal({ children, className, variants, delay = 0, as = "div" }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const appliedVariants = prefersReducedMotion ? reducedMotionVariants : variants ?? slideUp;
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={appliedVariants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
