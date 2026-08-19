import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

export default function FooterBanner() {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-3">
      <motion.img
        src="/assets/Resources/Footer%20image.png"
        alt=""
        className="w-full object-cover"
        {...fadeUp()}
      />
      <motion.p
        className="font-heading text-[14px] font-light text-ink text-center"
        {...fadeUp(0.1)}
      >
        Paintings on this portfolio are personal work and not available for sale. All rights reserved. © 2026 Rupanjali Kukal
      </motion.p>
    </div>
  );
}
