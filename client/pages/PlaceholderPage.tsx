import SiteLayout from "@/components/site/SiteLayout";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <SiteLayout>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
        <h1 className="font-vogue text-5xl italic text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="max-w-md font-serif text-lg text-ink/60">
          This page is coming soon. Keep chatting with Fusion to fill in this
          section of the site.
        </p>
      </div>
    </SiteLayout>
  );
}
