import SiteLayout from "@/components/site/SiteLayout";
import TestimonialCard from "@/components/site/TestimonialCard";
import GalleryCard from "@/components/site/GalleryCard";
import FooterBanner from "@/components/site/FooterBanner";
import StartConversation from "@/components/site/StartConversation";
import { ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
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

const ABOUT_ME_ITEMS = [
  { title: "Geo-R1 accepted at International Conference on Machine Learning (ICML)", year: "2026" },
  { title: "MARS accepted at International Conference on Learning Representations (ICLR)", year: "2026" },
  { title: "Click&Describe accepted at IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)", year: "2025" },
  { title: "Applied Scientist at Microsoft", year: "2023" },
  { title: "Masters of Science with thesis from Carnegie Mellon University", year: "2023" },
  { title: "Flaire Unmanned Systems acquired by Adani Defense Systems", year: "2019" },
  { title: "Vice President - Unmanned Aerial Systems, DTU", year: "2017–2019" },
  { title: "Design Lead - DTU Times", year: "2018–2019" },
];

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

const TESTIMONIAL_PLACEHOLDER = {
  avatar:
    "https://api.builder.io/api/v1/image/assets/TEMP/cb678df6fc237b45c984844b1b60ddc5cc139c87?width=120",
  name: "Anne Winslet",
  role: "Creative Director, House of OG",
  quote:
    "Here are a few words from the people I've had the pleasure of collaborating with along the way.",
};

const TESTIMONIALS = [
  {
    avatar: "/assets/Resources/Testimonial%201.png",
    name: "Nakull Wadhawan",
    role: "Founder, IndieAn",
    quote:
      "Rupanjali's work is genuinely thought-provoking. What I love about it is how naturally she connects technology with perception, creativity and art, and it doesn't feel forced.",
  },
];

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
              className="whitespace-nowrap font-sf text-[18px] tracking-[-0.05em] text-ink"
              {...fadeUp(0.15)}
            >
              By Rupanjali Kukal
            </motion.p>
          </div>
          <motion.div className="overflow-hidden" {...fadeUp(0.1)}>
            <img
              src="/assets/hero2.jpeg"
              alt="Rupanjali Kukal"
              className="w-full h-[70vh] object-cover lg:h-auto"
            />
          </motion.div>
        </section>

        {/* About / In Studio */}
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:-mt-[70px] lg:py-[80px]">
          <motion.h2
            className="text-center font-vogue text-[36px] leading-[0.9] tracking-[-0.04em] text-ink sm:text-[36px] md:text-[42px] lg:text-right lg:text-[56px] xl:text-[56px] xl:leading-[50px]"
            {...fadeUp()}
          >
            In Studio
            <br />
            with <span className="italic">Rupanjali Kukal</span>
          </motion.h2>
          <motion.p
            className="font-heading font-normal text-[15px] leading-[1.58] tracking-[0px] w-full lg:w-[600px] text-ink"
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

        {/* Epoch 0: POV */}
        <section className="flex flex-col gap-6 lg:-mt-[70px]">
          <SectionLabel text="Epoch 0: POV" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Left column */}
            <div className="flex flex-col gap-8 lg:w-1/2">
              <motion.h2
                className="t-section italic text-ink"
                {...fadeUp()}
              >
                Epoch 0: POV
              </motion.h2>
              {/* Image shown here on mobile only — sits between title and para */}
              <motion.div className="overflow-hidden lg:hidden" {...fadeUp(0.1)}>
                <img
                  src="/assets/Resources/Liliesimage.png"
                  alt="Epoch 0: POV"
                  className="w-full object-cover"
                />
              </motion.div>
              <motion.p
                className="font-heading font-normal text-[15px] leading-[1.58] tracking-[0px] text-left text-ink"
                {...fadeUp(0.1)}
              >
                Art and AI often ask similar questions: how we recognize, separate, interpret, and create what we see. Over the past four years, these questions have shaped my work at Carnegie Mellon and Microsoft—from my master's thesis to papers published at top-tier AI conferences to patents and ongoing research. Alongside that work, I continued exploring many of the same ideas through art. This collection brings those parallel threads together, placing the paintings and the research that evolved alongside them in conversation.
              </motion.p>
              <motion.div className="flex flex-col gap-1" {...fadeUp(0.15)}>
                {CAPABILITIES.map((item) => (
                  <Link
                    key={item}
                    to={`/epoch-0-pov#${item.toLowerCase()}`}
                    className="font-heading font-normal text-[18px] leading-[20px] tracking-[-0.05em] text-ink hover:opacity-60 transition-opacity flex items-center gap-3"
                  >
                    {item} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden className="h-[1em] w-auto shrink-0 fill-current"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                  </Link>
                ))}
              </motion.div>
            </div>
            {/* Right column — image on desktop only */}
            <motion.div className="hidden lg:block overflow-hidden lg:w-1/2" {...fadeUp(0.1)}>
              <img
                src="/assets/Resources/Liliesimage.png"
                alt="Epoch 0: POV"
                className="w-full object-cover"
              />
            </motion.div>
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
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {ABOUT_ME_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="shrink-0 w-[220px] flex flex-col gap-1"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: Math.min(i * 0.06, 0.36) }}
              >
                <span className="font-heading font-normal text-[15px] leading-[1.58] tracking-[0px] text-ink">{item.title}</span>
                <span className="font-heading text-[14px] font-normal tracking-[-0.02em] text-neutral-400">{item.year}</span>
              </motion.div>
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
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="shrink-0 w-[280px]">
                <TestimonialCard index={i} {...(TESTIMONIALS[i] ?? TESTIMONIAL_PLACEHOLDER)} />
              </div>
            ))}
          </div>
        </section>

        {/* Start the Conversation */}
        <div className="flex flex-col gap-[50px]">
          <StartConversation />
          <FooterBanner />
        </div>
      </div>
    </SiteLayout>
  );
}
