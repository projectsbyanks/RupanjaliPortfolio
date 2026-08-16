import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

export default function FooterBanner() {
  const fadeUp = useFadeUp();
  return (
    <motion.div className="relative overflow-hidden" {...fadeUp()}>
      <img
        src="/assets/Resources/Footer image.png"
        alt=""
        className="aspect-[175/31] w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-end justify-end pb-3 pr-6 sm:pb-4 sm:pr-8">
        <p className="text-right font-body text-[11px] italic leading-[1.6] text-ink sm:text-[12px]">
          An archive of visual work, experiments &amp; observations.<br />
          Paintings are personal works and are not available for sale.
        </p>
        <p className="mt-1 text-right font-sf text-[11px] font-bold text-ink sm:text-[12px]">
          All rights reserved.&nbsp;&nbsp;&nbsp;© 2026 Rupanjali Kukal
        </p>
      </div>
    </motion.div>
  );
}
