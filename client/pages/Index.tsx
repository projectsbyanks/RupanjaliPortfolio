import SiteLayout from "@/components/site/SiteLayout";
import TestimonialCard from "@/components/site/TestimonialCard";
import GalleryCard from "@/components/site/GalleryCard";
import FooterBanner from "@/components/site/FooterBanner";
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
      <div className="flex flex-col gap-[242px] pt-[242px]">
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
              className="aspect-[175/69] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            <div className="absolute left-6 top-6 max-w-[240px] sm:left-12 sm:top-12 sm:max-w-md">
              <h3 className="t-hero text-white">
                <span className="italic">Hidden</span>
                <br />
                Layers
              </h3>
              <p className="mt-6 max-w-[34ch] t-body text-justify text-white">
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

        {/* Impact & Recognition */}
        <section className="flex flex-col gap-16">
          <SectionHeading
            title={
              <>
                Impact & <span className="italic">Recognition</span>
              </>
            }
          />
          <div className="grid grid-cols-2 items-start gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {IMPACT_GALLERY.map((item, i) => (
              <GalleryCard
                key={i}
                index={i}
                image={item.image}
                imageClassName="aspect-[3/4]"
                title={item.title}
                year={item.year}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Recognition & Volunteering */}
        <section className="flex flex-col gap-16">
          <SectionHeading
            className="text-center"
            title={
              <>
                <span className="italic">Recognition</span>
                <br />& Volunteering
              </>
            }
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-8 lg:flex-row">
              <AchievementText index={0} />
              <AchievementImage index={1} />
              <AchievementText index={2} />
            </div>
            <div className="flex flex-col items-start gap-8 lg:flex-row">
              <AchievementImage index={0} />
              <AchievementText index={1} />
              <AchievementImage index={2} />
            </div>
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
        <section className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            title={
              <>
                Start the
                <br />
                <span className="italic">Conversation</span>
              </>
            }
          />
          <motion.p
            className="t-body max-w-[22ch] text-center text-ink lg:pt-4"
            {...fadeUp()}
          >
            If you have questions or you need to contact me to discuss ideas
            or art.
          </motion.p>
          <motion.div
            className="flex w-full max-w-xs flex-col items-start gap-8 text-left"
            {...fadeUp(0.1)}
          >
            <div className="t-label font-medium text-[21px] text-ink">Rupanjali Kukal</div>
            <div className="flex flex-col gap-1">
              <div className="font-heading text-base font-normal text-ink">
                Phone
              </div>
              <div className="t-label font-medium text-[21px] text-ink">+91 9026736177</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-heading text-base font-normal text-ink">
                Email
              </div>
              <div className="t-label font-medium text-[21px] text-ink">
                rupanjali.kukal.rk@gmail.com
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_343)">
                    <path
                      d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                      fill="#BE8855"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_343">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_344)">
                    <path
                      d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                      fill="#BE8855"
                    />
                    <path
                      d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                      fill="#BE8855"
                    />
                    <path
                      d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z"
                      fill="#BE8855"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_344">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
