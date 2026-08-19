import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { useFadeUp } from "@/lib/reveal";

const PORTRAIT = "/assets/Resources/about_1%201.png";

const EXPERTISE = [
  {
    title: "Multi-Modal Foundational Model",
    items: ["Vision Language Modelling", "Cross-Modality Model Development"],
  },
  {
    title: "Geospatial Modelling",
    items: ["Geospatial Map Generation", "Human in the loop map generation and correction"],
  },
  {
    title: "Perception",
    items: ["End-to-end Tracking Systems", "Track Linking, Track Fragment Association"],
  },
  {
    title: "Real-Time Deep Learning Systems",
    items: ["High-Speed Off-road Segmentation", "Aerial Detection and Tracking"],
  },
  {
    title: "AI Optimization",
    items: ["NNI", "ONNX Modelling", "TensorRT"],
  },
];

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
      { label: "Times of India - News Article", href: "https://timesofindia.indiatimes.com/city/bengaluru/bluru-firm-2-others-win-iaf-swarm-drone-challenge/articleshow/87245855.cms" },
      { label: "The Indian Express - News Article", href: "https://indianexpress.com/article/cities/bangalore/iaf-announces-winners-mehar-baba-swarm-drone-competition-7588658/" },
    ],
    date: "2020",
  },
  {
    title: "Drone Olympics (1st Prize in Formation Flying)",
    subtexts: [
      { label: "Times of India - News Article", href: "https://timesofindia.indiatimes.com/city/bengaluru/drone-olympics-15-of-17-finalists-bag-prizes/articleshow/68105834.cms" },
      { label: "University Social Media Article", href: "https://www.instagram.com/p/C4_EHfEJPci/?img_index=1" },
      { label: "University Newspaper", href: "https://dtutimes.dtu.ac.in/blog/uas-dtu-wins-the-drone-olympics-at-aero-india19-856" },
      { label: "Rediff - News Article", href: "https://www.rediff.com/money/report/drones-steal-the-show-at-aero-india-2019/20190222.htm" },
    ],
    date: "2019",
  },
  {
    title: "AUV SUAS (2nd Prize in Design Category)",
    subtexts: [{ label: "Design Paper", href: "https://drive.google.com/drive/folders/1OBSPKXaNaMzeNuZETj2ZkcuBc8K-a2vH" }],
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

const VOLUNTEERING = [
  {
    title: "Teaching Assistant at CMU",
    subtexts: [{ label: "Design for Manufacture and the Environment", href: "https://www.meche.engineering.cmu.edu/education/courses/24-683.html" }],
    date: "2021",
  },
  {
    title: "Co-Founder which is acquired by Adani Defense Systems",
    subtexts: [{ label: "Flaire Unmanned Systems", href: "https://www.adtl.co.in/categories/flaire-unmanned-systems" }],
    date: "2019",
  },
  {
    title: "Vice President",
    subtexts: [{ label: "Unmanned Aerial Systems, DTU(DCE)", href: "https://uasdtu.com/" }],
    date: "2017–2020",
  },
  {
    title: "Design Lead, DTU (DCE)",
    subtexts: [{ label: "DTU Times", href: "https://dtutimes.dtu.ac.in/" }],
    date: "2018–2019",
  },
];

const bioClass = "font-heading font-[300] text-[15px] leading-[1.58] tracking-[-0.01em] text-ink";

export default function About() {
  const fadeUp = useFadeUp();
  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[150px] lg:pt-20">
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
            <h1 className="font-display tracking-[-0.02em] text-ink text-6xl leading-[54px] sm:text-7xl sm:leading-[66px] md:text-8xl md:leading-[90px] xl:text-[96px] xl:leading-[90px]">
              <span className="italic">Artist</span> behind<br />the work
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-2">
                <span className="font-display leading-none shrink-0 translate-y-[12%] text-6xl sm:text-7xl md:text-8xl xl:text-[96px]">H</span>
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
                  <h3 className="font-heading text-[18px] leading-[20px] font-normal tracking-[-0.05em] text-ink">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {item.subtexts.map((s) => (
                      s.href ? (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                          className="font-heading font-normal text-[16px] tracking-[-0.05em] text-neutral-500 hover:text-ink underline underline-offset-2 transition-colors">
                          {s.label}
                        </a>
                      ) : (
                        <p key={s.label} className="font-heading font-normal text-[16px] tracking-[-0.05em] text-neutral-500">
                          {s.label}
                        </p>
                      )
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

        {/* Research Expertise */}
        <section className="flex flex-col gap-16">
          <SectionHeading className="text-center" title={<><span className="italic">Research</span> Expertise</>} />
          <div className="flex flex-col border-t border-neutral-200">
            {EXPERTISE.map((block, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 border-b border-neutral-200 py-6"
                {...fadeUp(Math.min(i * 0.06, 0.3))}
              >
                <span className="w-6 shrink-0 font-body font-light text-lg tracking-[-0.05em] text-neutral-400">
                  {i + 1}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-heading text-[18px] leading-[20px] font-normal tracking-[-0.05em] text-ink">{block.title}</h3>
                  <div className="flex flex-col gap-1">
                    {block.items.map((item) => (
                      <p key={item} className="font-heading font-normal text-[16px] tracking-[-0.05em] text-ink flex items-start gap-2">
                        <span aria-hidden="true">•</span><span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteering */}
        <section className="flex flex-col gap-16">
          <SectionHeading className="text-center" title="Volunteering" />
          <div className="flex flex-col border-t border-neutral-200">
            {VOLUNTEERING.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-6 border-b border-neutral-200 py-6"
                {...fadeUp(Math.min(i * 0.04, 0.28))}
              >
                <span className="w-6 shrink-0 font-body font-light text-lg tracking-[-0.05em] text-neutral-400">
                  {i + 1}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-heading text-[18px] leading-[20px] font-normal tracking-[-0.05em] text-ink">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {item.subtexts.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="font-heading font-normal text-[16px] tracking-[-0.05em] text-neutral-500 hover:text-ink underline underline-offset-2 transition-colors">
                        {s.label}
                      </a>
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
        <div className="flex flex-col gap-[50px]">
          <StartConversation />
          <FooterBanner />
        </div>
      </div>
    </SiteLayout>
  );
}
