import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

// Shared full-width footer banner (birds).
export default function FooterBanner() {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-4">
      <motion.div className="overflow-hidden" {...fadeUp()}>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/eb8234c9ae7d41fb82b2c2ef34371d72cad9d170?width=2800"
          alt=""
          className="aspect-[175/31] w-full object-cover"
        />
      </motion.div>
      <motion.div
        className="flex items-center justify-center pb-4"
        {...fadeUp(0.1)}
      >
        <span className="font-heading font-[300] text-[12px] leading-[1.45] tracking-[1px] text-ink">
          +1-412-996-7352
        </span>
      </motion.div>
    </div>
  );
}
