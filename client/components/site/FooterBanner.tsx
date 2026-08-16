import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

// Shared full-width footer banner (birds).
export default function FooterBanner() {
  const fadeUp = useFadeUp();
  return (
    <motion.div className="overflow-hidden" {...fadeUp()}>
      <img
        src="/assets/Resources/Footer image.png"
        alt=""
        className="aspect-[175/31] w-full object-cover"
      />
    </motion.div>
  );
}
