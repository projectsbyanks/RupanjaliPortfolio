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
      className={`grid grid-cols-3 gap-2 lg:gap-2 ${className}`}
      style={{ gridTemplateColumns: undefined }}
      // Use inline style only at desktop via a wrapper trick — Tailwind handles mobile cols
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
}: {
  image: string;
  onImageClick?: (src: string) => void;
}) {
  const fadeUp = useFadeUp();
  return (
    <div className="flex flex-col gap-6">
      <motion.div className="overflow-hidden" {...fadeUp()}>
        <img
          src={image}
          alt="Costal Manila"
          onClick={onImageClick ? () => onImageClick(image) : undefined}
          className={`w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out hover:scale-[1.03] lg:h-[1521px] lg:w-[1217px] lg:aspect-auto ${onImageClick ? "cursor-zoom-in" : ""}`}
        />
      </motion.div>
      <motion.div
        className="flex flex-col justify-between gap-4 sm:flex-row"
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
    <section className="flex flex-col gap-6 px-4 lg:gap-8 lg:px-[92px]">
      <motion.h2
        className="font-display text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl"
        {...fadeUp()}
      >
        <span className="italic">Line Art</span>
      </motion.h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[207px]">
        <motion.div
          className="grid grid-cols-2 gap-3 lg:w-1/2"
          {...fadeUp()}
        >
          {FRAMES.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={src}
                alt=""
                onClick={() => onImageClick(src)}
                className="aspect-square w-full cursor-zoom-in object-cover transition-transform duration-500 ease-out hover:scale-110 lg:h-[237px] lg:w-[237px]"
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
      <div className="flex flex-col gap-16 pt-16 lg:gap-[242px] lg:pt-20">

        {/* 1. Hero: My Creative Archive + grid + feature image */}
        <section className="flex flex-col gap-12 lg:gap-[242px]">
          <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-start lg:text-left lg:justify-center lg:gap-[224px]">
            <SectionHeading
              className="text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px]"
              title={
                <>
                  My <span className="italic">Creative</span> Archive
                </>
              }
            />
            <motion.p
              className="font-heading font-[300] text-[12px] leading-[1.45] tracking-[1px] text-ink max-w-[394px] lg:pt-[52px]"
              {...fadeUp(0.15)}
            >
              {INTRO}
            </motion.p>
          </div>
          <div className="flex flex-col gap-12 px-4 lg:gap-[242px] lg:px-[92px]">
            <Mosaic tiles={FRAMES} cols={5} onImageClick={openLightbox} />
            <FeatureBlock image="/assets/art-disco.jpg" onImageClick={openLightbox} />
          </div>
        </section>

        {/* 2. Line Art 1 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 3. Feature image (duplicate) */}
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/art-disco.jpg" onImageClick={openLightbox} />
        </section>

        {/* 4. Line Art 2 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 5. Another feature image */}
        <section className="px-4 lg:px-[92px]">
          <FeatureBlock image="/assets/art-koi.jpg" onImageClick={openLightbox} />
        </section>

        {/* 6. Line Art 3 */}
        <LineArtSection onImageClick={openLightbox} />

        {/* 7. Line Art 4 */}
        <LineArtSection onImageClick={openLightbox} />

        <StartConversation />
        <FooterBanner />
      </div>
    </SiteLayout>
  );
}
