import SiteLayout from "@/components/site/SiteLayout";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import { motion } from "framer-motion";
import { useFadeUp } from "@/lib/reveal";

const TALKS = [
  { date: "May '26", location: "Seoul, South Korea", title: '"Geo-R1: Unlocking VLM Geospatial Reasoning with Cross-View Reinforcement Learning" accepted at ICML 2026!', href: "https://icml.cc/virtual/2026/poster/64548" },
  { date: "Mar '26", location: "San Diego, USA", title: 'Talk on "Data Propagation Techniques for tracking objects in Aerial and Maritime Applications" at NAML (Naval Applications of Machine Learning) 2026', href: "https://naml2026.org/" },
  { date: "Mar '26", location: "Seattle, USA", title: "Promotion at Microsoft as an ML Applied Scientist II." },
  { date: "Feb '26", location: "Rio de Janeiro, Brazil", title: '"MARS-A Foundational Map Auto-Regressor" accepted at ICLR 2026!', href: "https://iclr.cc/virtual/2026/poster/10009581" },
  { date: "Jan '26", location: "Seattle, USA", title: 'Submitted "Greedy Centroid Weighted Boxes Fusion for Object Detection" patent with Microsoft' },
  { date: "Nov '25", location: "Seattle, USA", title: 'Submitted "Hierarchical Weighted Non-Maximum Suppression for Multi-Class Object Detection" patent with Microsoft' },
  { date: "Sept '25", location: "Seattle, USA", title: 'Posted "Geo-R1: Unlocking VLM Geospatial Reasoning with Cross-View Reinforcement Learning" on Arxiv', href: "https://arxiv.org/abs/2510.00072" },
  { date: "Jun '25", location: "Seattle, USA", title: 'Submitted "MARS-A Foundational Map Auto-Regressor" patent with Microsoft!' },
  { date: "Oct '24", location: "Tucson, USA", title: '"Click&Describe: Multimodal Aerial Grounding and Tracking" accepted at WACV 2025!', href: "https://ieeexplore.ieee.org/abstract/document/10943911" },
  { date: "Oct '24", location: "Vancouver, Canada", title: '"Multimodal Aerial Grounding and Tracking" short paper accepted at NeurIPS 2024: Workshop on Video Language Models!', href: "https://neurips.cc/virtual/2024/103550" },
  { date: "Aug '24", location: "Seattle, USA", title: 'Submitted "Click&Describe: Multimodal Aerial Grounding and Tracking" patent with Microsoft' },
  { date: "Jul '23", location: "Seattle, USA", title: "Started role as ML Applied Scientist at Microsoft." },
  { date: "May '23", location: "Pittsburgh, USA", title: "Finished master's program at Carnegie Mellon University." },
  { date: "Mar '23", location: "Pittsburgh, USA", title: 'Published master\'s thesis on "Real Time Off-Road Semantic Segmentation" with DARPA and Robotics Institute at Carnegie Mellon.', href: "https://theairlab.org/team/alumni/rupanjali/" },
  { date: "May '22", location: "Pittsburgh, USA", title: "Working with Sebastian Scherer at AirLab on off-road semantic segmentation for the summer.", href: "https://theairlab.org/team/alumni/rupanjali/" },
  { date: "Aug '21", location: "Pittsburgh, USA", title: "Started graduate school at Carnegie Mellon University." },
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
      <div className="flex flex-col gap-12 pt-16 lg:gap-[242px] lg:pt-20">
        {/* Page title + list grouped — preserves original title→list gap */}
        <div className="flex flex-col gap-12 lg:gap-16">
          <motion.h1
            className="t-section text-ink lg:pl-16 text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px]"
            {...fadeUp()}
          >
            <span className="italic">Research</span> News
          </motion.h1>

          {/* Talks / news list with dividers */}
          <section className="flex flex-col divide-y divide-neutral-200 lg:px-16">
          {TALKS.map((talk, i) => {
            const Tag = talk.href ? motion.a : motion.div;
            const linkProps = talk.href ? { href: talk.href, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Tag
                key={i}
                {...(linkProps as any)}
                className="group flex items-start justify-between gap-6 py-6"
                {...fadeUp(Math.min(i * 0.08, 0.4))}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="t-talk-title max-w-[72ch] text-[18px] leading-[20px] text-ink">
                    {talk.title}
                  </h3>
                  <span className="font-heading font-normal text-[14px] leading-none tracking-[-0.05em] text-neutral-500">
                    {talk.location ? `${talk.location} | ${talk.date}` : talk.date}
                  </span>
                </div>
                {talk.href && (
                  <span className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowIcon />
                  </span>
                )}
              </Tag>
            );
          })}
        </section>
        </div>

        {/* Start the Conversation + footer (shared) */}
        <div className="flex flex-col gap-[50px]">
          <StartConversation />
          <FooterBanner />
        </div>
      </div>
    </SiteLayout>
  );
}
