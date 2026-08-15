import { ReactNode, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import GalleryCard from "@/components/site/GalleryCard";
import StartConversation from "@/components/site/StartConversation";
import FooterBanner from "@/components/site/FooterBanner";
import Lightbox from "@/components/site/Lightbox";
import { useFadeUp } from "@/lib/reveal";

const HERO_LEAD =
  "Where art and artificial intelligence become two ways of asking the same questions. The materials in Machine Language and Art are different—code and data in one, color and form in the other—but look closely at how meaning is constructed.";

const HERO_PARAS = [
  "In machine language, we teach systems to separate objects from their surroundings, recognize them across changing perspectives, connect information from different sources, follow an identity through time, and generate something new from what they have learned. In art, one can return to those same ideas intuitively.",
  "Hidden Layers is where I attempt to bring those two practices together.",
  "Rather than using AI to create the artwork, I use art to think through AI: taking concepts that usually live inside papers, models, and equations and translating them into visual questions about perception, identity, memory, ambiguity, and change.",
];

// Borrowed from the landing "Impact & Recognition" gallery
const GALLERY = [
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/5d820eb73b3a3d42a90521ef20a62783906d0748?width=572", year: "01", title: "Detection", description: "What's something worth noticing?" },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/5d820eb73b3a3d42a90521ef20a62783906d0748?width=572", year: "02", title: "Segmentation", description: "Defining boundaries." },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/42dc83651317bb4c34563b428894009e9bacf4f1?width=574", year: "03", title: "Tracking", description: "Changes through time." },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/ef7cd05697d7568c77b1fa2062b355e339168a55?width=572", year: "04", title: "Multimodality", description: "One thing, many meanings." },
  { image: "https://api.builder.io/api/v1/image/assets/TEMP/f35815cd67848505377f43866438c9e2d562a59e?width=564", year: "05", title: "Generation", description: "Creation from existence." },
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
    image: "/assets/fan.jpg",
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
    image: "/assets/koi.jpg",
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
    image: "/assets/fan.jpg",
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
    image: "/assets/fan.jpg",
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
    image: "/assets/fan.jpg",
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
    <section className="flex flex-col gap-6 px-4 lg:gap-8 lg:px-[154px]">
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
          <h3 className="font-display text-3xl leading-[1.05] tracking-[-0.02em] text-ink text-left sm:text-[40px] lg:pl-[100px]">
            {feature.label}
          </h3>
          <p className="font-heading text-[16px] leading-[22px] tracking-[0px] max-w-md pl-0 text-justify text-ink lg:pl-[100px]">{feature.body}</p>
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

  return (
    <SiteLayout transparentNav>
      {lbSrc && <Lightbox src={lbSrc} onClose={closeLightbox} />}
      <div className="flex flex-col">
        {/* Full-bleed hero */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <img
            src="/assets/hidden-hero.jpg"
            alt="Hidden Layers"
            onClick={() => openLightbox("/assets/hidden-hero.jpg")}
            className="aspect-[3/4] w-full cursor-zoom-in object-cover lg:aspect-[16/9]"
          />
          {/* Left-side gradient overlay — black/30 on left, fades to transparent at center */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center px-4 pt-[40px] lg:px-20">
            <div className="flex max-w-[640px] flex-col gap-6">
              <motion.h1
                className="font-display text-6xl leading-[61px] sm:text-7xl sm:leading-[73px] md:text-8xl md:leading-[97px] xl:text-[96px] tracking-[-0.02em] text-white pl-4 lg:pl-[72px]"
                {...fadeUp()}
              >
                Hidden <span className="italic">Layers</span>
              </motion.h1>
              <motion.div className="flex flex-col gap-[15px] pl-4 lg:pl-[72px]" {...fadeUp(0.15)}>
                <p className="font-heading font-[250] text-[12px] leading-[1.45] tracking-[1px] text-white">{HERO_LEAD}</p>
                <div className="hidden flex-col gap-[15px] lg:flex">
                  {HERO_PARAS.map((p, i) => (
                    <p key={i} className="font-heading font-[250] text-[12px] leading-[1.45] tracking-[1px] text-white">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Rest of page with normal padding and spacing */}
        <div className="flex flex-col gap-12 pt-6 lg:gap-[242px] lg:pt-[40px]">
          {/* Gallery cards */}
          <section className="flex flex-col gap-12">
            <div className="grid grid-cols-2 items-start gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {GALLERY.map((item, i) => (
                <GalleryCard
                  key={i}
                  index={i}
                  image={item.image}
                  imageClassName="aspect-[3/4]"
                  title={item.title}
                  year={item.year}
                  description={item.description}
                  descriptionClassName={i === 0 ? "!text-left" : ""}
                  onImageClick={openLightbox}
                />
              ))}
            </div>
          </section>

          {/* Feature sections — mobile divider before each */}
          {FEATURES.flatMap((feature, i) => [
            <div key={`hr-${feature.label}`} className="h-[0.5px] w-full bg-neutral-300" />,
            <FeatureSection
              key={feature.label}
              feature={feature}
              index={i}
              onImageClick={openLightbox}
            />,
          ])}

          {/* Start the Conversation + footer (shared) */}
          <div className="h-[0.5px] w-full bg-neutral-300" />
          <StartConversation />
          <FooterBanner />
        </div>
      </div>
    </SiteLayout>
  );
}
