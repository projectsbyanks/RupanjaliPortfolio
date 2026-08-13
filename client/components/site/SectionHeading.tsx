import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { VIEWPORT } from "@/lib/reveal";

// Shared section title — Very Vogue display, emphasized word gets `.italic`.
export default function SectionHeading({
  title,
  className = "",
}: {
  title: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.h2
      className={`t-section text-ink ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
  );
}
