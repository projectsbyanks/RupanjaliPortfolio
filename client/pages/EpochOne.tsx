import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import { useFadeUp } from "@/lib/reveal";

export default function EpochOne() {
  const fadeUp = useFadeUp();
  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[150px] lg:pt-20">
        <section className="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh]">
          <motion.h1
            className="font-display text-[60px] leading-[0.92] tracking-[-0.02em] text-ink sm:text-[80px] lg:text-[96px]"
            {...fadeUp()}
          >
            Epoch 1: <span className="italic">State of Mind</span>
          </motion.h1>
          <motion.p
            className="font-sf text-[18px] tracking-[-0.05em] text-ink"
            {...fadeUp(0.1)}
          >
            Coming soon, November 2026
          </motion.p>
        </section>

      </div>
    </SiteLayout>
  );
}
