import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { useFadeUp } from "@/lib/reveal";

const PORTRAIT = "/assets/portrait.jpg";

const BIO = [
  "Hi, I'm an ML Applied Scientist at Microsoft and an artist working at the intersection of artificial intelligence and visual art.",
  "I moved into AI research at Carnegie Mellon University without a traditional computer science background—and without having written a line of Python before graduate school. What made the transition feel natural was something I had been doing for years: art.",
  "Art had already trained me to think about perception. How we separate an object from its surroundings, recognise something across different perspectives, combine multiple forms of information, and understand change without losing identity. As I moved deeper into AI, I began encountering formal versions of questions I had intuitively explored through visual art.",
  "That connection continues to shape my work. Alongside my research, I use art to explore many of the same questions from a different angle. Outside of work and the studio, I'm usually listening to music, boxing, or exploring my interest in health and wellness.",
];

const RECOGNITION = [
  {
    title:
      "IAF Mehar Baba Swarm Drone Competition (DTU-Flaire Unmanned Aerial Systems) (1st Prize)",
    subtexts: [
      "Times of India - News Article",
      "The Indian Express - News Article",
    ],
    date: "2020",
  },
  {
    title: "Drone Olympics (1st Prize in Formation Flying)",
    subtexts: [
      "Times of India - News Article",
      "University Social Media Article",
      "University Newspaper",
      "Rediff - News Article",
    ],
    date: "2019",
  },
  {
    title: "AUV SUAS (2nd Prize in Design Category)",
    subtexts: ["Design Paper"],
    date: "2018",
  },
  {
    title: "SAE INDIA (1st Prize Overall in Regular and Micro Category)",
    subtexts: [],
    date: "2018",
  },
  {
    title: "SAE INDIA (1st Prize in Regular Category)",
    subtexts: [],
    date: "2017",
  },
];

const bioClass = "font-heading font-[300] text-[12px] leading-[1.45] tracking-[1px] text-ink";

export default function About() {
  const fadeUp = useFadeUp();
  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[242px] lg:pt-20">
        {/* Artist Behind the Work */}
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          <motion.div className="overflow-hidden lg:w-2/5" {...fadeUp()}>
            <img
              src={PORTRAIT}
              alt="The Artist"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
          <motion.div className="flex flex-col gap-6 lg:w-2/5" {...fadeUp(0.15)}>
            <h1 className="font-display tracking-[-0.02em] text-ink text-6xl leading-[62px] sm:text-7xl sm:leading-[74px] md:text-8xl md:leading-[98px] xl:text-[96px] xl:leading-[98px]">
              <span className="italic">Artist</span> behind<br />the work
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-2">
                <span className="font-display leading-none shrink-0 text-6xl sm:text-7xl md:text-8xl xl:text-[96px]">H</span>
                <p className={bioClass}>{BIO[0].slice(1)}</p>
              </div>
              {BIO.slice(1).map((p, i) => (
                <p key={i} className={bioClass}>
                  {p}
                </p>
              ))}
              <p className={`${bioClass} italic`}>
                I build machines that learn to see.
                <br />
                I make art to understand what seeing means.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Recognition */}
        <section className="flex flex-col gap-16">
          <SectionHeading className="text-center" title="Recognition & Awards" />
          <div className="flex flex-col border-t border-neutral-200">
            {RECOGNITION.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 border-b border-neutral-200 py-6"
                {...fadeUp(Math.min(i * 0.04, 0.28))}
              >
                <span className="w-6 shrink-0 font-body font-light text-lg tracking-[-0.05em] text-neutral-400">
                  {i + 1}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-heading text-2xl font-normal tracking-[-0.05em] text-ink">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {item.subtexts.map((s) => (
                      <p key={s} className="font-heading font-normal text-[16px] tracking-[-0.05em] text-neutral-500">
                        {s}
                      </p>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 font-heading text-[14px] font-normal tracking-[-0.05em] text-neutral-400">
                  {item.date}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Start the Conversation + footer (shared) */}
        <StartConversation />
        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
