import { motion, useReducedMotion } from "framer-motion";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  quote: string;
  index?: number;
}

export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
  index = 0,
}: TestimonialCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex min-h-[220px] flex-col bg-cream p-5"
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: reduce ? 0 : Math.min(index * 0.08, 0.4),
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <div className="t-testimonial-name text-ink">{name}</div>
          <div className="t-caption text-ink">{role}</div>
        </div>
      </div>
      <p className="t-body [font-size:clamp(0.76rem,calc(2.5vw-3px),1.0625rem)] mt-auto pt-6 text-left text-ink">{quote}</p>
    </motion.div>
  );
}
