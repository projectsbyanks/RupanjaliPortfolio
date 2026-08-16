import SiteLayout from "@/components/site/SiteLayout";
import TestimonialCard from "@/components/site/TestimonialCard";
import GalleryCard from "@/components/site/GalleryCard";
import FooterBanner from "@/components/site/FooterBanner";
import StartConversation from "@/components/site/StartConversation";
import { ReactNode, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CAPABILITIES = [
  "Detection",
  "Segmentation",
  "Tracking",
  "Multimodality",
  "Generation",
];

const MOMENTS_DESC =
  "Every project begins with an idea and evolves through exploration, intention, and craft. ";

const MOMENTS_IN_TECH = Array.from({ length: 5 }).map(() => ({
  title: "Costal Manila",
  year: "2025",
  description: MOMENTS_DESC,
}));

const IMPACT_GALLERY = [
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5db1216421a406ad3e28781fa5ce6045e61fe966?width=578",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5d820eb73b3a3d42a90521ef20a62783906d0748?width=572",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42dc83651317bb4c34563b428894009e9bacf4f1?width=574",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/ef7cd05697d7568c77b1fa2062b355e339168a55?width=572",
  },
  {
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/f35815cd67848505377f43866438c9e2d562a59e?width=564",
  },
].map((item) => ({
  ...item,
  title: "Costal Manila",
  year: "2025",
  description: MOMENTS_DESC,
}));

const RECOGNITION_IMAGE =
  "https://api.builder.io/api/v1/image/assets/TEMP/e99f12f8eaed9fefb8a132e3fbf8031d07a72d90?width=884";

const ACHIEVEMENT = {
  title:
    "Co-Founder Flaire Unmanned Systems which is acquired by Adani Defense Systems",
  year: "2019",
  description: MOMENTS_DESC,
};

const VIEWPORT = { once: true, amount: 0.2 } as const;

const ACHIEVEMENT_MOTION = (reduce: boolean, index: number) => ({
  initial: { opacity: 0, y: reduce ? 0 : 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: {
    duration: 0.6,
    ease: "easeOut" as const,
    delay: reduce ? 0 : Math.min(index * 0.08, 0.4),
  },
});

// Text card — bold serif title → year → gray body (matches ref)
function AchievementText({ index = 0 }: { index?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex flex-1 flex-col"
      {...ACHIEVEMENT_MOTION(!!reduce, index)}
    >
      <h4 className="font-body text-[26px] font-bold leading-tight tracking-[-0.05em] text-ink">
        {ACHIEVEMENT.title}
      </h4>
      <div className="mt-2 font-body text-2xl font-light tracking-[-0.05em] text-ink">{ACHIEVEMENT.year}</div>
      <p className="t-body mt-6 text-neutral-400">{ACHIEVEMENT.description}</p>
    </motion.div>
  );
}

// Image card — portrait → "Costal Manila" (SF Pro semibold) → year → gray body
function AchievementImage({ index = 0 }: { index?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex flex-1 flex-col"
      {...ACHIEVEMENT_MOTION(!!reduce, index)}
    >
      <div className="mb-6 overflow-hidden">
        <img
          src={RECOGNITION_IMAGE}
          alt="Costal Manila"
          className="aspect-[34/35] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
      <span className="t-label font-medium text-ink">Costal Manila</span>
      <div className="mt-2 font-body text-2xl font-light tracking-[-0.05em] text-ink">{ACHIEVEMENT.year}</div>
      <p className="t-body mt-6 text-neutral-400">{MOMENTS_DESC}</p>
    </motion.div>
  );
}

const TESTIMONIAL = {
  avatar:
    "https://api.builder.io/api/v1/image/assets/TEMP/cb678df6fc237b45c984844b1b60ddc5cc139c87?width=120",
  name: "Anne Winslet",
  role: "Creative Director, House of OG",
  quote:
    "Here are a few words from the people I've had the pleasure of collaborating with along the way.",
};

const CANVAS_GALLERY = [
  "https://api.builder.io/api/v1/image/assets/TEMP/8e5a2f36b0bbdb01eca558a2f5cb39a4d19eb6d4?width=760",
  "https://api.builder.io/api/v1/image/assets/TEMP/36f51dff6ba0f0cd29c4bcd878184212313abc58?width=760",
  "https://api.builder.io/api/v1/image/assets/TEMP/0c761543be1bd995fac05c51483c672b199a8be5?width=760",
  "https://api.builder.io/api/v1/image/assets/TEMP/b18e71b95e4cac22c69d65b3d6ebc0d2ea68b3e1?width=760",
].map((image) => ({
  image,
  title: "Costal Manila",
  year: "2025",
  description: MOMENTS_DESC,
}));

// Deliberate varying widths from the design (≈ 1 : 1 : 1.4 : 0.5), fixed for
// the horizontal-scroll row
const CANVAS_WIDTHS = ["w-[340px]", "w-[340px]", "w-[476px]", "w-[170px]"];

function SectionHeading({
  title,
  className = "",
}: {
  title: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.h2
      className={`t-section text-ink ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-sf text-[11px] tracking-[0.18em] text-ink uppercase whitespace-nowrap">
        {text}
      </span>
      <div className="h-[0.5px] bg-neutral-300 max-w-[40%] flex-1" />
    </div>
  );
}

function ScrollButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
      className="flex h-7 w-7 items-center justify-center border border-neutral-300 text-ink hover:bg-neutral-50 transition-colors"
    >
      <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

export default function Index() {
  const reduce = useReducedMotion();
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const scrollSection = (ref: React.RefObject<HTMLDivElement>, dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const fadeUp = (delay = 0, y = 32) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: reduce ? 0 : delay },
  });

  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[150px] lg:pt-[80px]">
        {/* Hero */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <motion.h1
              className="max-w-3xl font-vogue text-6xl leading-[0.9] tracking-[-0.04em] text-ink sm:text-7xl md:text-8xl xl:text-[96px] xl:leading-[90px]"
              {...fadeUp()}
            >
              Between <span className="italic">Art</span>
              <br />
              and Intelligence
            </motion.h1>
            <motion.p
              className="whitespace-nowrap font-sf text-xl tracking-[-0.05em] text-ink"
              {...fadeUp(0.15)}
            >
              By Rupanjali Kukal
            </motion.p>
          </div>
          <motion.div className="overflow-hidden" {...fadeUp(0.1)}>
            <img
              src="/assets/hero2.jpeg"
              alt="Rupanjali Kukal"
              className="h-[460px] w-full object-contain"
            />
          </motion.div>
        </section>

        {/* About / In Studio */}
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:-mt-[70px]">
          <motion.h2
            className="text-right font-vogue text-2xl leading-[0.9] tracking-[-0.04em] text-ink sm:text-3xl md:text-[36px] lg:text-[48px] xl:text-[48px] xl:leading-[46px]"
            {...fadeUp()}
          >
            In Studio
            <br />
            with <span className="italic">Rupanjali Kukal</span>
          </motion.h2>
          <motion.p
            className="font-heading font-[300] text-[15px] leading-[1.58] tracking-[-0.01em] max-w-md text-ink"
            {...fadeUp(0.15)}
          >
            Hi, I'm an AI scientist at Microsoft, and art has long been a
            personal way for me to make sense of the world around me. It has
            stayed with me through different phases of my life, helping me
            navigate change and express ideas that are not always easy to put
            into words. Over time, I began to notice subtle connections between
            the way I approach research and the way I create. This website is
            an attempt to explore that intersection through the work, ideas,
            and experiences that have shaped me.
          </motion.p>
        </section>

        {/* Hidden Layers */}
        <section className="flex flex-col gap-6 lg:-mt-[70px]">
          <SectionLabel text="Epoch 0: POV" />
          <motion.div className="relative overflow-hidden" {...fadeUp()}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5bcfc09b640e04a7e7f3d84268d95c19be51d014?width=2800"
              alt="Hidden Layers"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:aspect-[175/69]"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:block lg:left-12 lg:top-12 lg:max-w-md">
              <h3 className="t-hero text-white">
                Epoch 0: POV
              </h3>
              <p className="mt-5 max-w-[34ch] t-body text-justify text-white">
                Where the language of artificial intelligence becomes a lens
                for exploring perception, identity, and creation through art.
              </p>
            </div>
          </motion.div>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
            <motion.div
              className="flex flex-col items-center gap-2"
              {...fadeUp()}
            >
              {CAPABILITIES.map((item) => (
                <div key={item} className="t-capability text-center text-ink">
                  {item}
                </div>
              ))}
            </motion.div>
            <motion.p
              className="t-body max-w-[34ch] text-justify text-ink"
              {...fadeUp(0.15)}
            >
              Art and AI often ask surprisingly similar questions: how we
              recognize, separate, combine, and interpret what we see. Long
              before I knew their technical names, I had been exploring many
              of the same ideas through paint. My work now brings those two
              ways of thinking into conversation.
            </motion.p>
          </div>
        </section>

        {/* About Me */}
        <section className="flex flex-col gap-8">
          <SectionLabel text="Highlights" />
          <div className="flex items-center justify-between">
            <SectionHeading
              title={
                <>
                  <span className="italic">About</span> Me
                </>
              }
            />
            <div className="flex gap-2">
              <ScrollButton dir="left" onClick={() => scrollSection(aboutMeRef, "left")} />
              <ScrollButton dir="right" onClick={() => scrollSection(aboutMeRef, "right")} />
            </div>
          </div>
          <div
            ref={aboutMeRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...MOMENTS_IN_TECH, ...MOMENTS_IN_TECH].map((item, i) => (
              <GalleryCard
                key={i}
                index={i}
                title={item.title}
                year={item.year}
                description={item.description}
                className="shrink-0 w-[200px]"
              />
            ))}
          </div>
        </section>

        {/* In Their Words */}
        <section className="flex flex-col gap-8">
          <SectionLabel text="Testimonials" />
          <div className="flex items-center justify-between">
            <SectionHeading
              title={
                <>
                  In Their <span className="italic">Words</span>
                </>
              }
            />
            <div className="flex gap-2">
              <ScrollButton dir="left" onClick={() => scrollSection(testimonialsRef, "left")} />
              <ScrollButton dir="right" onClick={() => scrollSection(testimonialsRef, "right")} />
            </div>
          </div>
          <div
            ref={testimonialsRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="shrink-0 w-[280px]">
                <TestimonialCard index={i} {...TESTIMONIAL} />
              </div>
            ))}
          </div>
        </section>

        {/* Start the Conversation */}
        <StartConversation />

        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
