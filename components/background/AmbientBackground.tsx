"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Fondo fijo, detrás de todo el contenido. Combina glows animados muy lentos
 * con una textura de ruido SVG casi imperceptible. Nunca debe competir con
 * el contenido: opacidades bajas, movimiento lento, sin bordes duros.
 */
export function AmbientBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: parallaxY }}
        animate={prefersReducedMotion ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-signal/20 blur-[120px]"
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-status-ok/10 blur-[130px]"
      />
      <motion.div
        animate={prefersReducedMotion ? undefined : { x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-12rem] left-1/4 h-[24rem] w-[24rem] rounded-full bg-signal/10 blur-[110px]"
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.025]">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
