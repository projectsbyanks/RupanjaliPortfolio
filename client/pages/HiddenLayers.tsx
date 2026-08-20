import { ReactNode, useState, useCallback, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import GalleryCard from "@/components/site/GalleryCard";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import Lightbox from "@/components/site/Lightbox";
import { useFadeUp } from "@/lib/reveal";

const HERO_SUBTITLE = "Same Point,\nMade Twice";

const HERO_BODY = [
  "Machine perception and painting are built from different materials — code and data in one, color and form in the other — but I keep finding the same questions underneath both. How do you separate a thing from its background? How do you recognize it again from a different angle, in different light? How do you follow its identity as it moves through time, or fuse what you're seeing with what you already know? In my research, I teach systems to do this formally. In my paintings, I've been doing it intuitively for years without naming it — and putting the two side by side is how I noticed they were the same inquiry.",
  "This collection puts the painting next to the paper. If you're technical, it's a different way of seeing concepts you already know formally. If not, I attempt to explain how perception — machine or human — actually works.",
];

const BTS_IMAGES = [
  "/assets/bottom%20strip/bts-1.jpg",
  "/assets/bottom%20strip/bts-2.jpg",
  "/assets/bottom%20strip/bts-3.jpg",
  "/assets/bottom%20strip/bts-4.jpg",
  "/assets/bottom%20strip/bts-5.jpg",
  "/assets/bottom%20strip/bts-6.jpg",
  "/assets/bottom%20strip/bts-7.jpg",
  "/assets/bottom%20strip/bts-8.jpg",
  "/assets/bottom%20strip/bts-9.jpg",
  "/assets/bottom%20strip/bts-10.jpg",
  "/assets/bottom%20strip/bts-11.jpg",
  "/assets/bottom%20strip/bts-12.jpg",
];

// Borrowed from the landing "Impact & Recognition" gallery
const GALLERY = [
  { image: "/assets/detection.jpg", year: "01", title: "Detection", description: "What's something worth noticing?" },
  { image: "/assets/segmentation.jpg", year: "02", title: "Segmentation", description: "Defining boundaries." },
  { image: "/assets/tracking.jpg", year: "03", title: "Tracking", description: "Changes through time." },
  { image: "/assets/multimodal.jpg", year: "04", title: "Multimodality", description: "One thing, many meanings." },
  { image: "/assets/generation.jpg", year: "05", title: "Generation", description: "Creation from existence." },
];

interface Feature {
  label: string;
  heading: ReactNode;
  body: string;
  image: string;
}

const FEATURES: Feature[] = [
  {
    label: "Detection",
    heading: (
      <>
        Detection begins
        <br />
        with <span className="italic">noticing</span>
      </>
    ),
    body: "Before we can understand something, we first have to register that it is there. In AI, detection means identifying an object within a larger visual field. In human perception, noticing is more subjective. Our attention is shaped by context, memory, expectation, and experience. Two people can look at the same scene and register completely different things. This work explores that space between what is present and what becomes visible to us—and how the act of noticing shapes everything that follows.",
    image: "/assets/detection.jpg",
  },
  {
    label: "Segmentation",
    heading: (
      <>
        Segmentation begins where
        <br />
        attention becomes <span className="italic">structure</span>
      </>
    ),
    body: "In artificial intelligence, it defines the boundaries of a scene—deciding what belongs together, what remains separate, and where one form gives way to another. Humans make these distinctions almost instinctively, but our boundaries are influenced by far more than edges or color; they shift with context, memory, and what we are looking for. This work explores how both human and machine perception turn a continuous world into distinct forms, and how the boundaries we create shape what we understand.",
    image: "/assets/segmentation.jpg",
  },
  {
    label: "Tracking",
    heading: (
      <>
        Tracking is about
        <br />
        <span className="italic">continuity</span>
      </>
    ),
    body: "In artificial intelligence, it means following the same subject as it moves through time, changes position, disappears from view, or is seen from a different angle. Human perception does something similar—we recognize people, places, and objects even as their appearance changes. This work explores what allows identity to remain consistent through movement and transformation, and how we know that something changing is still the same thing.",
    image: "/assets/tracking.jpg",
  },
  {
    label: "Multimodality",
    heading: (
      <>
        Multimodality is about understanding
        <br />
        through more than one <span className="italic">language</span>
      </>
    ),
    body: "AI systems can combine images, words, sound, clicks, and other signals to build a richer understanding than any one source can provide alone. Human perception is similarly layered: what we see is continually shaped by what we hear, read, touch, remember, and already know. This work explores how different forms of information can describe the same subject—and how meaning becomes fuller when those perspectives come together.",
    image: "/assets/multimodal.jpg",
  },
  {
    label: "Generation",
    heading: (
      <>
        Generation begins with
        <br />
        what already <span className="italic">exists</span>
      </>
    ),
    body: "Generative AI learns patterns, relationships, and structures from existing information, then uses them to produce something new. Artistic creation is different, but it also draws from accumulated experience—images we have seen, memories, influences, techniques, and ideas recombined into forms that did not exist before. This work explores that relationship between learning and making, and the space between what we inherit and what we create.",
    image: "/assets/generation.jpg",
  },
];

function FeatureSection({
  feature,
  index,
  onImageClick,
}: {
  feature: Feature;
  index: number;
  onImageClick: (src: string) => void;
}) {
  const fadeUp = useFadeUp();
  return (
    <section id={feature.label.toLowerCase()} className="flex flex-col gap-6 px-4 lg:gap-8 lg:px-[154px]">
      <span className="font-heading text-[20px] font-normal tracking-[-0.02em] text-ink">
        {feature.label}
      </span>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <motion.div className="overflow-hidden lg:w-2/5" {...fadeUp()}>
          <img
            src={feature.image}
            alt={feature.label}
            onClick={() => onImageClick(feature.image)}
            className="w-full cursor-zoom-in object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-6 text-left lg:flex-1"
          {...fadeUp(0.15)}
        >
          <h3 className="font-display text-[34px] leading-[1.05] tracking-[-0.02em] text-ink text-left sm:text-[40px] lg:pl-[100px]">
            {feature.label}
          </h3>
          <p className="font-heading text-[16px] leading-[22px] tracking-[0px] max-w-md pl-0 text-justify text-ink lg:pl-[100px]">{feature.body}</p>
          <p className="font-heading text-[14px] leading-[20px] tracking-[0px] max-w-md pl-0 text-neutral-400 lg:pl-[100px]">
            Links to my technical work on perception can be found{" "}
            <Link
              to="/research-news"
              className="underline underline-offset-2 hover:text-neutral-600 transition-colors"
            >
              here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HiddenLayers() {
  const fadeUp = useFadeUp();
  const [lbSrc, setLbSrc] = useState<string | null>(null);
  const openLightbox = useCallback((src: string) => setLbSrc(src), []);
  const closeLightbox = useCallback(() => setLbSrc(null), []);
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (dir: "left" | "right") => {
    galleryRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    // Wait for layout to settle (hero image load affects positions)
    const t1 = setTimeout(scrollToEl, 300);
    const t2 = setTimeout(scrollToEl, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [hash]);

  return (
    <SiteLayout>
      {lbSrc && <Lightbox src={lbSrc} onClose={closeLightbox} />}
      <div className="flex flex-col">
        {/* Hero — title, image, subtitle, body */}
        <div className="flex flex-col gap-8 pt-16 lg:pt-20">
          {/* Title row: "Epoch 0: POV" left, "by Rupanjali Kukal" right */}
          <div className="flex items-end justify-between gap-4 px-5">
            <motion.h1
              className="font-display text-[60px] leading-[0.92] tracking-[-0.02em] text-ink sm:text-[80px] lg:text-[96px]"
              {...fadeUp()}
            >
              Epoch 0: <span className="italic">POV</span>
            </motion.h1>
            <motion.span
              className="font-sf text-[18px] tracking-[-0.05em] text-ink pb-1 shrink-0 whitespace-nowrap"
              {...fadeUp(0.1)}
            >
              by Rupanjali Kukal
            </motion.span>
          </div>

          {/* Hero image — always 20px margin each side */}
          <motion.div className="mx-5 overflow-hidden" {...fadeUp(0.15)}>
            <img
              src="/assets/Resources/Hidden%20layers%20hero%20image.png"
              alt="Epoch 0: POV"
              className="w-full object-cover"
            />
          </motion.div>

          {/* "Same Point, Made Twice" + body — same layout as homepage "In Studio" section */}
          <section className="flex flex-col items-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-center lg:py-[80px] lg:px-[154px]">
            <motion.h2
              className="text-center font-vogue text-[36px] leading-[0.9] tracking-[-0.04em] text-ink sm:text-[36px] md:text-[42px] lg:text-right lg:text-[56px] xl:text-[56px] xl:leading-[50px] shrink-0"
              {...fadeUp(0.2)}
            >
              Same Point,
              <br />
              Made Twice
            </motion.h2>
            <motion.div className="flex flex-col gap-4 w-full lg:w-[600px]" {...fadeUp(0.25)}>
              {HERO_BODY.map((p, i) => (
                <p key={i} className="font-heading font-[300] text-[15px] leading-[1.58] tracking-[-0.01em] text-ink">
                  {p}
                </p>
              ))}
            </motion.div>
          </section>
        </div>

        {/* Rest of page with normal padding and spacing */}
        <div className="flex flex-col gap-12 pt-12 lg:gap-[142px] lg:pt-[60px]">
          {/* Gallery cards */}
          <section className="flex flex-col gap-4 lg:gap-12">
            {/* Mobile: horizontal scroll, 2 cards visible at a time */}
            <div ref={galleryRef} className="flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
              {GALLERY.map((item, i) => (
                <div
                  key={i}
                  className="w-[45vw] shrink-0 cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById(item.title.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <GalleryCard
                    index={i}
                    image={item.image}
                    imageClassName="aspect-[3/4]"
                    title={item.title}
                    year={item.year}
                    description={item.description}
                    descriptionClassName={i === 0 ? "!text-left" : ""}
                  />
                </div>
              ))}
            </div>
            {/* Mobile scroll arrows — below the scroll strip */}
            <div className="flex justify-end gap-2 px-4 lg:hidden">
              {(["left", "right"] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => scrollGallery(dir)}
                  aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
                  className="flex h-7 w-7 items-center justify-center border border-neutral-300 text-ink hover:bg-neutral-50 transition-colors"
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              ))}
            </div>
            {/* Desktop: grid */}
            <div className="hidden lg:grid lg:grid-cols-5 items-start gap-6">
              {GALLERY.map((item, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById(item.title.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <GalleryCard
                    index={i}
                    image={item.image}
                    imageClassName="aspect-[3/4]"
                    title={item.title}
                    year={item.year}
                    description={item.description}
                    descriptionClassName={i === 0 ? "!text-left" : ""}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Feature sections — mobile divider before each */}
          {FEATURES.flatMap((feature, i) => [
            <div key={`hr-${feature.label}`} className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />,
            <FeatureSection
              key={feature.label}
              feature={feature}
              index={i}
              onImageClick={openLightbox}
            />,
          ])}

          {/* BTS */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-4 px-4 lg:px-[154px]">
              <span className="font-sf text-[11px] tracking-[0.18em] text-ink uppercase whitespace-nowrap">Behind The Scenes</span>
              <div className="h-[0.5px] bg-neutral-300 max-w-[40%] flex-1" />
            </div>
            <div className="overflow-hidden">
              <div className="flex gap-4 animate-marquee w-max">
                {[...BTS_IMAGES, ...BTS_IMAGES].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-[300px] w-[300px] object-cover shrink-0"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Start the Conversation + footer (shared) */}
          <div className="flex flex-col gap-[50px]">
            <StartConversation />
            <FooterBanner />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
