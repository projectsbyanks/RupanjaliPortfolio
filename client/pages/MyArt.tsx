import { ReactNode, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import Lightbox from "@/components/site/Lightbox";
import { useFadeUp } from "@/lib/reveal";

const BIG_ART = [
  { title: "Daughter of an Angel", year: "2025", description: "A reflection on grief, loss, and the subtle ways connection endures." },
  { title: "A Quiet Forest", year: "2025", description: "My first 5ft × 4ft painting, born from emotions too powerful to remain contained" },
  { title: "Untamable", year: "2026", medium: "Acrylics with texture" },
  { title: "Microcosm / Macrocosm", year: "2023", medium: "Fluid Acrylics" },
  { title: "Golden", year: "2024", medium: "Acrylics infused with Watercolour" },
];

const FRAMES = [
  "/assets/header%20art%20finaL/1.jpeg",
  "/assets/header%20art%20finaL/2.jpeg",
  "/assets/header%20art%20finaL/3.jpg",
  "/assets/header%20art%20finaL/4.PNG",
  "/assets/header%20art%20finaL/5.JPG",
  "/assets/header%20art%20finaL/6-converted.jpg",
  "/assets/header%20art%20finaL/7.jpg",
  "/assets/header%20art%20finaL/8.png",
  "/assets/header%20art%20finaL/9.JPG",
  "/assets/header%20art%20finaL/10.JPG",
];

const LINE_ART_FRAMES = [
  "/assets/frame-1.jpg",
  "/assets/frame-6.jpg",
  "/assets/frame-2.jpg",
  "/assets/portrait.jpg",
  "/assets/frame-3.jpg",
  "/assets/frame-8.jpg",
  "/assets/frame-5.jpg",
  "/assets/frame-10.jpg",
];

const ABSTRACT_ART_FRAMES = [
  "/assets/Resources/abstract_art_FINAL/1.jpeg",
  "/assets/Resources/abstract_art_FINAL/2-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/3-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/4-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/5-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/6-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/7-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/8-converted.jpg",
  "/assets/Resources/abstract_art_FINAL/9.PNG",
  "/assets/Resources/abstract_art_FINAL/10-converted.jpg",
];

const LINE_ART_FINAL_FRAMES = [
  "/assets/Resources/line_art_FINAL/1.png",
  "/assets/Resources/line_art_FINAL/2.JPG",
  "/assets/Resources/line_art_FINAL/3.JPG",
  "/assets/Resources/line_art_FINAL/4.JPG",
  "/assets/Resources/line_art_FINAL/5-converted.jpg",
  "/assets/Resources/line_art_FINAL/6-converted.jpg",
  "/assets/Resources/line_art_FINAL/7.png",
  "/assets/Resources/line_art_FINAL/8.JPG",
  "/assets/Resources/line_art_FINAL/9-converted.jpg",
  "/assets/Resources/line_art_FINAL/10.JPG",
];

const SOM_ART_FRAMES = [
  "/assets/Resources/som_art_FINAL/1.JPG",
  "/assets/Resources/som_art_FINAL/2.png",
  "/assets/Resources/som_art_FINAL/3-converted.jpg",
  "/assets/Resources/som_art_FINAL/4.JPG",
  "/assets/Resources/som_art_FINAL/5-converted.jpg",
  "/assets/Resources/som_art_FINAL/6.jpg",
  "/assets/Resources/som_art_FINAL/7-converted.jpg",
  "/assets/Resources/som_art_FINAL/8.png",
  "/assets/Resources/som_art_FINAL/9.JPG",
  "/assets/Resources/som_art_FINAL/10-converted.jpg",
];

const FLOWER_ART_FRAMES = [
  "/assets/Resources/flower_art_FINAL/1.JPG",
  "/assets/Resources/flower_art_FINAL/2.jpg",
  "/assets/Resources/flower_art_FINAL/3.jpeg",
  "/assets/Resources/flower_art_FINAL/4.JPG",
  "/assets/Resources/flower_art_FINAL/5.jpeg",
  "/assets/Resources/flower_art_FINAL/6.png",
  "/assets/Resources/flower_art_FINAL/7.PNG",
  "/assets/Resources/flower_art_FINAL/8.jpeg",
  "/assets/Resources/flower_art_FINAL/9.png",
  "/assets/Resources/flower_art_FINAL/10-converted.jpg",
];

function Mosaic({
  tiles = FRAMES,
  cols = 5,
  className = "",
  onImageClick,
}: {
  tiles?: string[];
  cols?: number;
  className?: string;
  onImageClick?: (src: string) => void;
}) {
  const fadeUp = useFadeUp();
  return (
    <motion.div
      className={`grid grid-cols-3 gap-2 lg:grid-cols-5 lg:gap-2 ${className}`}
      {...fadeUp()}
    >
      {tiles.map((src, i) => (
        <div key={i} className="overflow-hidden">
          <img
            src={src}
            alt=""
            onClick={onImageClick ? () => onImageClick(src) : undefined}
            className={`aspect-square w-full object-cover transition-transform duration-500 ease-out hover:scale-110 lg:h-[237px] lg:w-[237px] ${onImageClick ? "cursor-zoom-in" : ""}`}
          />
        </div>
      ))}
    </motion.div>
  );
}

function FeatureBlock({
  image,
  onImageClick,
  natural = false,
  title,
  year,
  description,
  medium,
}: {
  image: string;
  onImageClick?: (src: string) => void;
  natural?: boolean;
  title?: string;
  year?: string;
  description?: string;
  medium?: string;
}) {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-6">
      <motion.div className="overflow-hidden" {...fadeUp()}>
        <img
          src={image}
          alt=""
          onClick={onImageClick ? () => onImageClick(image) : undefined}
          className={natural
            ? `w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${onImageClick ? "cursor-zoom-in" : ""}`
            : `w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:h-[1521px] lg:w-[1217px] lg:aspect-auto ${onImageClick ? "cursor-zoom-in" : ""}`}
        />
      </motion.div>
      {(title || description || medium) && (
        <motion.div
          className="flex flex-col justify-between gap-4 sm:flex-row"
          {...fadeUp(0.1)}
        >
          <div className="flex flex-col gap-1">
            {title && <span className="font-heading text-[16px] font-normal tracking-[-0.02em] text-ink">{title}</span>}
            {year && <span className="font-heading text-[14px] font-normal tracking-[-0.02em] text-neutral-500">{year}</span>}
          </div>
          {description && <p className="font-heading text-[16px] leading-[22px] tracking-[0px] max-w-[394px] text-justify text-ink">{description}</p>}
          {medium && <p className="font-heading text-[14px] leading-[22px] tracking-[0px] max-w-[394px] text-ink text-neutral-500">Medium: {medium}</p>}
        </motion.div>
      )}
    </div>
  );
}

function LineArtSection({
  onImageClick,
  title = "Line Art",
  tiles = FRAMES,
}: {
  onImageClick: (src: string) => void;
  title?: string;
  tiles?: string[];
}) {
  const fadeUp = useFadeUp();
  return (
    <section className="flex flex-col gap-6 px-4 lg:gap-8 lg:px-[92px]">
      <motion.h2
        className="font-display text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl"
        {...fadeUp()}
      >
        <span className="italic">{title}</span>
      </motion.h2>
      <Mosaic tiles={tiles} onImageClick={onImageClick} />
    </section>
  );
}

export default function MyArt() {
  const fadeUp = useFadeUp();
  const [lbSrc, setLbSrc] = useState<string | null>(null);
  const openLightbox = useCallback((src: string) => setLbSrc(src), []);
  const closeLightbox = useCallback(() => setLbSrc(null), []);

  return (
    <SiteLayout>
      {lbSrc && <Lightbox src={lbSrc} onClose={closeLightbox} />}
      <div className="flex flex-col gap-16 pt-16 lg:gap-[150px] lg:pt-20">

        {/* 1. Hero: My Creative Archive + grid + feature image */}
        <section className="flex flex-col gap-16 lg:gap-20">
          <div className="flex flex-col items-center text-center gap-6 px-4 lg:items-start lg:text-left lg:px-[92px]">
            <SectionHeading
              className="text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px]"
              title={
                <>
                  My <span className="italic">Creative</span> Archive
                </>
              }
            />
          </div>
          <div className="flex flex-col gap-12 px-4 lg:gap-[150px] lg:px-[92px]">
            <Mosaic tiles={FRAMES} cols={5} onImageClick={openLightbox} />
            <FeatureBlock image="/assets/Resources/big%20art/1-converted.jpg" natural onImageClick={openLightbox} {...BIG_ART[0]} />
          </div>
        </section>

        {/* 2. Abstract Art */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <LineArtSection title="Abstract Art" tiles={ABSTRACT_ART_FRAMES} onImageClick={openLightbox} />

        {/* 3. Feature image 2 */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/Resources/big%20art/2-converted.jpg" natural onImageClick={openLightbox} {...BIG_ART[1]} />
        </section>

        {/* 4. State of Mind */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <LineArtSection title="State of Mind" tiles={SOM_ART_FRAMES} onImageClick={openLightbox} />

        {/* 5. Feature image 3 */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/Resources/big%20art/3-converted.jpg" natural onImageClick={openLightbox} {...BIG_ART[2]} />
        </section>

        {/* 5b. Feature image 4 */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/Resources/big%20art/4-converted.jpg" natural onImageClick={openLightbox} {...BIG_ART[3]} />
        </section>

        {/* 6. Line Art */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <LineArtSection title="Line Art" tiles={LINE_ART_FINAL_FRAMES} onImageClick={openLightbox} />

        {/* 6b. Feature image 5 */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/Resources/big%20art/5-converted.jpg" natural onImageClick={openLightbox} {...BIG_ART[4]} />
        </section>

        {/* 7. Flower Art */}
        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <LineArtSection title="Flower Art" tiles={FLOWER_ART_FRAMES} onImageClick={openLightbox} />

        <div className="h-[0.5px] w-[40%] mx-auto bg-neutral-300" />
        <div className="flex flex-col gap-[50px]">
          <StartConversation />
          <FooterBanner />
        </div>
      </div>
    </SiteLayout>
  );
}
