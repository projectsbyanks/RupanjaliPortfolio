import { ReactNode, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import Lightbox from "@/components/site/Lightbox";
import { useFadeUp } from "@/lib/reveal";

const INTRO =
  "She is a graphic designer based in Seattle, crafting thoughtful visuals where strategy meets artistic expression. Every project begins with an idea and evolves through exploration, intention, and craft.";

const DESC =
  "Every project begins with an idea and evolves through exploration, intention, and craft.";

const FRAMES = Array.from({ length: 10 }, (_, i) => `/assets/frame-${i + 1}.jpg`);
const MOSAIC = [...FRAMES, ...FRAMES];

interface Category {
  heading: ReactNode;
  feature: string | null;
}

const CATEGORIES: Category[] = [
  {
    heading: <span className="italic">Flower Art</span>,
    feature: "/assets/art-koi.jpg",
  },
  {
    heading: <span className="italic">Flower Art</span>,
    feature: "/assets/koi.jpg",
  },
  {
    heading: <span className="italic">Flower Art</span>,
    feature: null,
  },
];

function Mosaic({
  tiles = MOSAIC,
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
      className={`grid gap-2 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 237px)` }}
      {...fadeUp()}
    >
      {tiles.map((src, i) => (
        <div key={i} className="overflow-hidden">
          <img
            src={src}
            alt=""
            onClick={onImageClick ? () => onImageClick(src) : undefined}
            className={`h-[237px] w-[237px] object-cover transition-transform duration-500 ease-out hover:scale-110 ${onImageClick ? "cursor-zoom-in" : ""}`}
          />
        </div>
      ))}
    </motion.div>
  );
}

function FeatureBlock({
  image,
  onImageClick,
}: {
  image: string;
  onImageClick?: (src: string) => void;
}) {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        className="overflow-hidden"
        {...fadeUp()}
      >
        <img
          src={image}
          alt="Costal Manila"
          onClick={onImageClick ? () => onImageClick(image) : undefined}
          className={`h-[1521px] w-[1217px] object-cover transition-transform duration-700 ease-out hover:scale-[1.03] ${onImageClick ? "cursor-zoom-in" : ""}`}
        />
      </motion.div>
      <motion.div
        className="mx-auto flex w-full max-w-3xl flex-col justify-between gap-4 sm:flex-row"
        {...fadeUp(0.1)}
      >
        <div className="flex flex-col gap-1">
          <span className="t-label font-medium text-ink">Costal Manila</span>
          <span className="t-label-sub text-ink">2025</span>
        </div>
        <p className="t-body max-w-[394px] text-justify text-ink">{DESC}</p>
      </motion.div>
    </div>
  );
}

function LineArtSection({ onImageClick }: { onImageClick: (src: string) => void }) {
  const fadeUp = useFadeUp();
  return (
    <section className="flex flex-col gap-8 px-[92px]">
      <motion.h2
        className="font-display text-4xl leading-tight tracking-[-0.02em] text-ink sm:text-5xl"
        {...fadeUp()}
      >
        <span className="italic">Line Art</span>
      </motion.h2>
      <div className="flex flex-col gap-[207px] lg:flex-row lg:items-start">
        <motion.div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(2, 237px)" }}
          {...fadeUp()}
        >
          {FRAMES.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt=""
                onClick={() => onImageClick(src)}
                className="h-[237px] w-[237px] cursor-zoom-in object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
        <motion.p
          className="t-body max-w-[394px] text-justify text-ink"
          {...fadeUp(0.15)}
        >
          {INTRO}
        </motion.p>
      </div>
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
      <div className="flex flex-col gap-[242px] pt-[242px]">

        {/* 1. Hero: My Creative Archive + grid + feature image */}
        <section className="flex flex-col gap-[242px]">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-[224px]">
            <SectionHeading
              title={
                <>
                  My <span className="italic">Creative</span>
                  <br />
                  Archive
                </>
              }
            />
            <motion.p
              className="t-body max-w-[394px] text-justify text-ink lg:pt-4"
              {...fadeUp(0.15)}
            >
              {INTRO}
            </motion.p>
          </div>
          <div className="flex flex-col gap-[242px] px-[92px]">
            <Mosaic tiles={FRAMES} cols={5} onImageClick={openLightbox} />
            <FeatureBlock image="/assets/art-disco.jpg" onImageClick={openLightbox} />
          </div>
        </section>

        {/* 2. Line Art 1 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 3. Feature image (duplicate of hero's enlarged image) */}
        <section className="px-[92px]">
          <FeatureBlock image="/assets/art-disco.jpg" onImageClick={openLightbox} />
        </section>

        {/* 4. Line Art 2 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 5. Another feature image */}
        <section className="px-[92px]">
          <FeatureBlock image="/assets/art-koi.jpg" onImageClick={openLightbox} />
        </section>

        {/* 6. Line Art 3 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 7. Line Art 4 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 8. Archive */}
        <section className="flex flex-col gap-16 px-[92px]">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-[224px]">
            <SectionHeading title="Archive" />
            <motion.p
              className="t-body max-w-[394px] text-justify text-ink lg:pt-4"
              {...fadeUp(0.15)}
            >
              {INTRO}
            </motion.p>
          </div>
          <Mosaic tiles={FRAMES} cols={5} onImageClick={openLightbox} />
        </section>

        <StartConversation />
        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
