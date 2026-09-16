"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-300",
        scrolled ? "pt-3" : "pt-5"
      )}
    >
      <nav
        className={cn(
          "flex w-full max-w-3xl items-center justify-between rounded-full border px-3 py-2 backdrop-blur-xl transition-colors duration-300",
          scrolled ? "border-ink-2 bg-surface/80" : "border-transparent bg-surface/40"
        )}
        aria-label="Navegación principal"
      >
        <button
          onClick={() => handleNavClick("hero")}
          className="flex cursor-pointer items-center rounded-full py-1 pl-1 pr-1"
          aria-label="Ir al inicio"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-mark.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-lg" />

        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "relative cursor-pointer rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
                  activeId === item.id ? "text-text" : "text-text-muted hover:text-text"
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-ink-2"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-text-muted transition-colors duration-200 hover:bg-ink-2 hover:text-text md:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-16 flex flex-col gap-1 rounded-2xl border border-ink-2 bg-surface p-2 shadow-xl md:hidden"
          >
            {NAV_ITEMS.slice(1).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "block w-full cursor-pointer rounded-xl px-4 py-2.5 text-left text-sm transition-colors duration-200",
                    activeId === item.id ? "bg-ink-2 text-text" : "text-text-muted hover:text-text"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
