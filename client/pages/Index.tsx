import SiteLayout from "@/components/site/SiteLayout";
import TestimonialCard from "@/components/site/TestimonialCard";
import GalleryCard from "@/components/site/GalleryCard";
import FooterBanner from "@/components/site/FooterBanner";
import StartConversation from "@/components/site/StartConversation";
import { ReactNode } from "react";
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

export default function Index() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0, y = 32) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: reduce ? 0 : delay },
  });

  return (
    <SiteLayout>
      <div className="flex flex-col gap-16 pt-16 lg:gap-[100px] lg:pt-[100px]">
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
              src="https://api.builder.io/api/v1/image/assets/TEMP/8e5aa3d0a748ecc7c8d780bd01e944fc6e1d6364?width=2800"
              alt="Rupanjali Kukal"
              className="aspect-[175/94] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </motion.div>
        </section>

        {/* About / In Studio */}
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center">
          <motion.p
            className="t-body max-w-md text-justify text-ink"
            {...fadeUp()}
          >
            Art and AI often ask surprisingly similar questions: how we
            recognize, separate, combine, and interpret what we see. My work
            moves between AI research and visual art, bringing the two into
            conversation rather than treating them as separate disciplines.
            I'm interested in what each way of thinking can reveal about the
            other.
          </motion.p>
          <motion.h2
            className="text-left font-vogue text-5xl leading-[0.9] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] xl:leading-[86px]"
            {...fadeUp(0.15)}
          >
            In Studio
            <br />
            with <span className="italic">Rupanjali Kukal</span>
          </motion.h2>
        </section>

        {/* Hidden Layers */}
        <section className="flex flex-col gap-16">
          <motion.div className="relative overflow-hidden" {...fadeUp()}>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5bcfc09b640e04a7e7f3d84268d95c19be51d014?width=2800"
              alt="Hidden Layers"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:aspect-[175/69]"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:block lg:left-12 lg:top-12 lg:max-w-md">
              <h3 className="t-hero text-white">
                <span className="italic">Hidden</span>
                <br />
                Layers
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

        {/* Moments in Tech */}
        <section className="flex flex-col gap-16">
          <SectionHeading
            title={
              <>
                <span className="italic">Moments</span> in Tech
              </>
            }
          />
          <div className="grid grid-cols-2 items-start gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {MOMENTS_IN_TECH.map((item, i) => (
              <GalleryCard
                key={i}
                index={i}
                title={item.title}
                year={item.year}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* In Their Words */}
        <section className="flex flex-col gap-16">
          <SectionHeading
            title={
              <>
                In Their <span className="italic">Words</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <TestimonialCard key={i} index={i} {...TESTIMONIAL} />
            ))}
          </div>
        </section>

        {/* A Canvas of Intent */}
        <section className="flex flex-col gap-16">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
            <SectionHeading
              title={
                <>
                  A Canvas of <span className="italic">Intent</span>
                </>
              }
            />
            <motion.p
              className="t-body max-w-[48ch] text-justify text-ink lg:pt-4"
              {...fadeUp(0.15)}
            >
              Every project begins with an idea and evolves through
              exploration, intention, and craft. These selected works reflect
              a balance of strategy and artistic expression—each designed to
              tell a story, solve a problem, and create a lasting visual
              impression.
            </motion.p>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {CANVAS_GALLERY.map((item, i) => (
              <GalleryCard
                key={i}
                index={i}
                image={item.image}
                imageClassName="h-[320px] w-full object-cover md:h-[520px]"
                title={item.title}
                year={item.year}
                description={item.description}
                showDescription={false}
                showLabel={false}
                className={`shrink-0 ${CANVAS_WIDTHS[i]}`}
              />
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
