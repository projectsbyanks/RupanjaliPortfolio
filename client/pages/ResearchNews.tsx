import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

const TALK_TITLE =
  'Talk on "Data Propagation Techniques for tracking objects in Aerial and Maritime Applications" at NAML (Naval Applications of Machine Learning) 2026';

const TALKS = Array.from({ length: 4 }).map(() => ({
  title: TALK_TITLE,
  date: "March 26, 2026",
}));

const EXPERTISE = Array.from({ length: 5 }).map(() => ({
  title: "Multi-Modal Foundational Model",
  items: ["Vision Language Modelling", "Cross-Modality Model Development"],
}));

function ArrowIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H8M17 7V16" />
    </svg>
  );
}

export default function ResearchNews() {
  const fadeUp = useFadeUp();

  return (
    <SiteLayout>
      <div className="flex flex-col gap-12 pt-16 lg:gap-24 lg:pt-20">
        {/* Page title — large, no hero image */}
        <motion.h1
          className="t-section text-ink lg:text-[80px] lg:leading-[0.9]"
          {...fadeUp()}
        >
          <span className="italic">Research</span>
          <br />
          News
        </motion.h1>

        {/* Talks / news list with dividers */}
        <section className="flex flex-col divide-y divide-neutral-200 lg:px-16">
          {TALKS.map((talk, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-start justify-between gap-6 py-6"
              {...fadeUp(Math.min(i * 0.08, 0.4))}
            >
              <div className="flex flex-col gap-2">
                <h3 className="t-talk-title max-w-[72ch] leading-[40px] text-ink">
                  {talk.title}
                </h3>
                <span className="font-heading font-normal text-[14px] leading-none tracking-[-0.05em] text-neutral-500">
                  {talk.date}
                </span>
              </div>
              <span className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowIcon />
              </span>
            </motion.a>
          ))}
        </section>

        {/* Research Expertise with dividers */}
        <section className="flex flex-col gap-8 lg:px-16">
          <SectionHeading
            title={
              <>
                <span className="italic">Research</span> Expertise
              </>
            }
          />
          <div className="flex flex-col divide-y divide-neutral-200">
            {EXPERTISE.map((block, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 py-6"
                {...fadeUp(Math.min(i * 0.06, 0.3))}
              >
                <h3 className="t-talk-title text-ink">{block.title}</h3>
                <ul className="flex flex-col gap-1">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-body font-light text-[14px] leading-[15px] tracking-[-0.05em] text-ink"
                    >
                      <span aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Start the Conversation (shared) */}
        <StartConversation />

        {/* Footer banner (shared) */}
        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
