import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

export default function FooterBanner() {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-3">
      <motion.img
        src="/assets/Resources/Footer image.png"
        alt=""
        className="w-full object-cover"
        {...fadeUp()}
      />
      <motion.p
        className="font-heading text-[15px] font-normal text-ink text-center"
        {...fadeUp(0.1)}
      >
        An archive of visual work, experiments &amp; observations. Paintings are personal works and are not available for sale. All rights reserved. © 2026 Rupanjali Kukal
      </motion.p>
    </div>
  );
}
