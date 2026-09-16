"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  show: boolean;
}

export function Toast({ message, show }: ToastProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center px-4" aria-live="polite" role="status">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 rounded-full border border-ink-2 bg-surface px-4 py-2.5 text-sm text-text shadow-lg shadow-black/20"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-status-ok-soft text-status-ok">
              <Check size={12} strokeWidth={3} />
            </span>
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
