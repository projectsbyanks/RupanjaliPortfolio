import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ContactDetails from "./ContactDetails";
import { useFadeUp } from "@/lib/reveal";

// Shared "Start the Conversation" contact section (used on every page).
export default function StartConversation() {
  const fadeUp = useFadeUp();
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
      <div className="flex flex-col gap-2">
        <SectionHeading
          title={
            <>
              Start the
              <br />
              <span className="italic">Conversation</span>
            </>
          }
        />
        <motion.p
          className="font-heading font-[300] text-[12px] leading-[1.45] tracking-[1px] whitespace-nowrap text-left text-ink lg:pt-4"
          {...fadeUp()}
        >
          Let's chat! Feel free to contact me.
        </motion.p>
      </div>
      <motion.div className="w-full max-w-xs" {...fadeUp(0.1)}>
        <ContactDetails />
      </motion.div>
    </section>
  );
}
