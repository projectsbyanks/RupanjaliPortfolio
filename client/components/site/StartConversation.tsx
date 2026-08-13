import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ContactDetails from "./ContactDetails";
import { useFadeUp } from "@/lib/reveal";

// Shared "Start the Conversation" contact section (used on every page).
export default function StartConversation() {
  const fadeUp = useFadeUp();
  return (
    <section className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
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
        className="t-body max-w-[22ch] text-center text-ink lg:pt-4"
        {...fadeUp()}
      >
        If you have questions or you need to contact me to discuss ideas or art.
      </motion.p>
      <motion.div className="w-full max-w-xs" {...fadeUp(0.1)}>
        <ContactDetails />
      </motion.div>
    </section>
  );
}
