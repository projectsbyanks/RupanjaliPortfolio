import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

const INTRO_1 =
  "Hi, I'm Rupali—a graphic designer based in Seattle with a deep appreciation for art and thoughtful design. I believe every visual has a story to tell, and my work is driven by curiosity, intention, and a passion for creating designs that feel both beautiful and meaningful.";

const INTRO_2 =
  "Apart from work, I am enthusiastic about art, fitness, and music.";

// NOTE: placeholder hero image (reused landing asset) — swap for the real one.
const HERO_IMAGE = "/assets/research-hero.png";

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
    <SiteLayout transparentNav>
      <div className="flex flex-col">
        {/* Full-bleed hero */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Research News"
            className="aspect-square w-full object-cover lg:aspect-[7/2]"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 pt-[40px] lg:flex-row lg:items-center lg:gap-16 lg:px-20">
            <motion.h1
              className="t-section shrink-0 leading-tight text-white lg:leading-[60px]"
              {...fadeUp()}
            >
              <span className="italic">Research</span>
              <br />
              News
            </motion.h1>
            <motion.div
              className="hidden max-w-[394px] flex-col gap-3 lg:flex"
              {...fadeUp(0.15)}
            >
              <p className="t-body font-light text-justify text-white">{INTRO_1}</p>
              <p className="t-body font-light text-justify text-white">{INTRO_2}</p>
            </motion.div>
          </div>
        </div>

        {/* Talks + Expertise + footer */}
        <div className="flex flex-col gap-12 pt-6 lg:gap-[242px] lg:pt-[40px]">
          {/* Talks / news list */}
          <section className="flex flex-col gap-12">
            {TALKS.map((talk, i) => (
              <motion.a
                key={i}
                href="#"
                className="group flex items-start justify-between gap-6"
                {...fadeUp(Math.min(i * 0.08, 0.4))}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="t-talk-title max-w-[72ch] leading-[40px] text-ink">
                    {talk.title}
                  </h3>
                  <span className="font-heading font-normal text-[16px] leading-none tracking-[-0.05em] text-neutral-500">
                    {talk.date}
                  </span>
                </div>
                <span className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowIcon />
                </span>
              </motion.a>
            ))}
          </section>

          {/* Research Expertise */}
          <section className="flex flex-col gap-16">
            <SectionHeading
              title={
                <>
                  <span className="italic">Research</span> Expertise
                </>
              }
            />
            <div className="flex flex-col gap-12 lg:pl-16">
              {EXPERTISE.map((block, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-4"
                  {...fadeUp(Math.min(i * 0.06, 0.3))}
                >
                  <h3 className="t-talk-title text-ink">{block.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body font-light text-[20px] leading-[20px] tracking-[-0.05em] text-ink"
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
      </div>
    </SiteLayout>
  );
}
