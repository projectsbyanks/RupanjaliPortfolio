interface GalleryCardProps {
  image?: string;
  title: string;
  year: string;
  description: string;
  className?: string;
}

export default function GalleryCard({
  image,
  title,
  year,
  description,
  className = "",
}: GalleryCardProps) {
  return (
    <div className={`flex flex-1 min-w-[200px] flex-col gap-6 ${className}`}>
      {image ? (
        <img
          src={image}
          alt={`${title} ${year}`}
          className="w-full object-cover"
        />
      ) : null}
      <div className="font-serif text-2xl tracking-[-0.05em] text-ink">
        <span className="font-bold">{title}</span> {year}
      </div>
      <p className="font-serif text-2xl leading-tight tracking-[-0.05em] text-neutral-400">
        {description}
      </p>
    </div>
  );
}
