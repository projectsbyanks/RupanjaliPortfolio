import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

const TALKS = [
  { date: "Mar '26", title: 'Talk on "Data Propagation Techniques for tracking objects in Aerial and Maritime Applications" at NAML (Naval Applications of Machine Learning) 2026' },
  { date: "Mar '26", title: "Promotion at Microsoft as an ML Applied Scientist II." },
  { date: "Feb '26", title: '"MARS-A Foundational Map Auto-Regressor" accepted at ICLR 2026!' },
  { date: "Jan '26", title: 'Submitted "Greedy Centroid Weighted Boxes Fusion for Object Detection" patent with Microsoft' },
  { date: "Nov '25", title: 'Submitted "Hierarchical Weighted Non-Maximum Suppression for Multi-Class Object Detection" patent with Microsoft' },
  { date: "Sept '25", title: 'Posted "Geo-R1: Unlocking VLM Geospatial Reasoning with Cross-View Reinforcement Learning" on Arxiv' },
  { date: "Jun '25", title: 'Submitted "MARS-A Foundational Map Auto-Regressor" patent with Microsoft!' },
  { date: "Oct '24", title: '"Click&Describe: Multimodal Aerial Grounding and Tracking" accepted at WACV 2025!' },
  { date: "Oct '24", title: '"Multimodal Aerial Grounding and Tracking" short paper accepted at NeurIPS 2024: Workshop on Video Language Models!' },
  { date: "Aug '24", title: 'Submitted "Click&Describe: Multimodal Aerial Grounding and Tracking" patent with Microsoft' },
  { date: "Jul '23", title: "Started role as ML Applied Scientist at Microsoft." },
  { date: "May '23", title: "Finished master's program at Carnegie Mellon University." },
  { date: "Mar '23", title: 'Published master\'s thesis on "Real Time Off-Road Semantic Segmentation" with DARPA and Robotics Institute at Carnegie Mellon.' },
  { date: "May '22", title: "Working with Sebastian Scherer at AirLab on off-road semantic segmentation for the summer." },
  { date: "Aug '21", title: "Started graduate school at Carnegie Mellon University." },
];

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
      <div className="flex flex-col gap-12 pt-16 lg:gap-16 lg:pt-20">
        {/* Page title — large, no hero image */}
        <motion.h1
          className="t-section text-ink lg:pl-16 text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px]"
          {...fadeUp()}
        >
          <span className="italic">Research</span> News
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
                <h3 className="t-talk-title max-w-[72ch] text-[18px] leading-[20px] text-ink">
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
            className="text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px]"
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
                <h3 className="t-talk-title text-[18px] leading-[20px] text-ink">{block.title}</h3>
                <ul className="flex flex-col gap-1">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-heading font-light text-[14px] leading-[15px] tracking-[-0.05em] text-ink"
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
