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

// Reuse the My Art thumbnails for the inspiration mosaic (15 tiles, 3 rows).
const FRAMES = Array.from({ length: 10 }, (_, i) => `/assets/frame-${i + 1}.jpg`);
const INSPIRE = [...FRAMES, ...FRAMES.slice(0, 5)];

const bioClass = "t-body text-justify text-ink";

export default function About() {
  const fadeUp = useFadeUp();
  return (
    <SiteLayout>
      <div className="flex flex-col gap-[242px] pt-[242px]">
        {/* The Artist Behind the Work */}
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          <motion.div className="overflow-hidden lg:w-2/5" {...fadeUp()}>
            <img
              src={PORTRAIT}
              alt="The Artist"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>
          <motion.div className="flex flex-col gap-6 lg:w-2/5" {...fadeUp(0.15)}>
            <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] text-ink sm:text-6xl">
              The <span className="italic">Artist</span>
              <br />
              Behind the Work
            </h1>
            <div className="flex flex-col gap-3">
              <p
                className={`${bioClass} first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-5xl first-letter:leading-[0.7] sm:first-letter:text-6xl`}
              >
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
                      <p key={s} className="t-body text-neutral-500">
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

        {/* What Inspires Me */}
        <section className="flex flex-col gap-16">
          <SectionHeading
            className="text-center"
            title={
              <>
                What <span className="italic">Inspires</span> Me
              </>
            }
          />
          <motion.div
            className="grid grid-cols-3 gap-4 px-[90px] sm:grid-cols-4 lg:grid-cols-5"
            {...fadeUp()}
          >
            {INSPIRE.map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="aspect-square w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* Start the Conversation + footer (shared) */}
        <StartConversation />
        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
