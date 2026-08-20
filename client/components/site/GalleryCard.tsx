import { motion, useReducedMotion } from "framer-motion";

interface GalleryCardProps {
  image?: string;
  title: string;
  year: string;
  description: string;
  className?: string;
  imageClassName?: string;
  descriptionClassName?: string;
  index?: number;
  showDescription?: boolean;
  showLabel?: boolean;
  onImageClick?: (src: string) => void;
}

export default function GalleryCard({
  image,
  title,
  year,
  description,
  className = "",
  imageClassName = "",
  descriptionClassName = "",
  index = 0,
  showDescription = true,
  showLabel = true,
  onImageClick,
}: GalleryCardProps) {
  const reduce = useReducedMotion();
  const hasText = showDescription || showLabel;
  return (
    <motion.div
      className={`flex flex-col ${className}`}
      initial={{ opacity: 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: reduce ? 0 : Math.min(index * 0.06, 0.36),
      }}
    >
      {image ? (
        <div className={`overflow-hidden ${hasText ? "mb-6" : ""}`}>
          <img
            src={image}
            alt={`${title} ${year}`}
            onClick={onImageClick ? () => onImageClick(image) : undefined}
            className={`w-full object-cover transition-transform duration-700 ease-out hover:scale-105 ${imageClassName} ${onImageClick ? "cursor-zoom-in" : ""}`}
          />
        </div>
      ) : null}
      {/* body → 16px → label → 4px → year (identical across every card) */}
      {showDescription ? (
        <p className={`font-heading font-normal text-[15px] leading-[1.58] tracking-[0px] text-neutral-400 ${descriptionClassName}`}>{description}</p>
      ) : null}
      {showLabel ? (
        <div className={`flex flex-col gap-1 ${showDescription ? "mt-4" : ""}`}>
          <span className="font-heading font-normal text-[18px] leading-[20px] tracking-[-0.05em] text-ink">{title}</span>
          <span className="font-heading text-[14px] font-normal tracking-[-0.02em] text-ink">{year}</span>
        </div>
      ) : null}
    </motion.div>
  );
}
