interface TestimonialCardProps {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-1 min-w-[260px] flex-col gap-16 bg-cream p-4">
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1.5">
          <div className="font-display text-2xl italic tracking-[-0.02em] text-ink">
            {name}
          </div>
          <div className="font-serif text-sm tracking-[-0.05em] text-ink">
            {role}
          </div>
        </div>
      </div>
      <p className="font-serif text-lg tracking-[-0.05em] text-ink">
        {quote}
      </p>
    </div>
  );
}
