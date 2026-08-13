import { useReducedMotion } from "framer-motion";

// Shared scroll-reveal config so every page animates identically.
export const VIEWPORT = { once: true, amount: 0.2 } as const;

export function useFadeUp() {
  const reduce = useReducedMotion();
  return (delay = 0, y = 32) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: reduce ? 0 : delay,
    },
  });
}
