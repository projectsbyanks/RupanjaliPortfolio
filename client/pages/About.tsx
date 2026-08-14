import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { useFadeUp } from "@/lib/reveal";

const PORTRAIT = "/assets/portrait.jpg";

const BIO = [
  "Hi, I'm an ML Applied Scientist at Microsoft and artist working at the intersection of artificial intelligence, computer vision, and visual storytelling.",
  "I came to AI through an unconventional path. I arrived at Carnegie Mellon studying mechanical engineering and business, then changed direction after taking my first artificial intelligence course. I moved into AI research without a traditional computer science background—and without having written a line of Python before graduate school.",
  "What made the transition feel natural was something I had been doing for years: painting.",
  "Art had already trained me to think about perception—how we separate an object from its surroundings, recognize something from different perspectives, combine multiple forms of information, and understand change without losing identity. As I moved deeper into AI, I began encountering formal versions of questions I had intuitively explored through visual art.",
  "That connection has continued to shape my work.",
  "My research spans computer vision, segmentation, multimodal AI, generative modeling, and visual tracking. My work has included research at Carnegie Mellon and with DARPA-supported projects, publications at venues including ICLR, NeurIPS, and WACV, and three patent filings through my work at Microsoft.",
  "Alongside research, I continue to create art as a way of exploring the same questions from another direction.",
  "This portfolio brings those two parts of my life together.",
  "I'm interested not only in what AI can create, but in what studying intelligence—human and artificial—can teach us about perception, identity, interpretation, and the way we make sense of the world.",
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
            <h1 className="t-section text-ink text-6xl leading-[62px] sm:text-7xl sm:leading-[74px] md:text-8xl md:leading-[98px] xl:text-[96px] xl:leading-[98px]">
              <span className="italic">Artist</span> behind the work
            </h1>
            <div className="flex flex-col gap-3">
              <p className={`${bioClass} first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] sm:first-letter:text-7xl md:first-letter:text-8xl xl:first-letter:text-[96px]`}>
                {BIO[0]}
              </p>
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
