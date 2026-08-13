import { ReactNode, useEffect, useRef, useState } from "react";
import SiteNav from "./SiteNav";

// Height of the sticky nav strip (py-2 + ~24px text = ~40px)
const NAV_HEIGHT = 40;

export default function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  const mainRef = useRef<HTMLElement>(null);
  // Start transparent if transparentNav is requested
  const [isTransparent, setIsTransparent] = useState(transparentNav);

  useEffect(() => {
    if (!transparentNav) return;

    const update = () => {
      // Hero element = firstElementChild of firstElementChild of main
      const hero = mainRef.current?.firstElementChild
        ?.firstElementChild as HTMLElement | null;
      if (!hero) return;
      // Transparent while hero's bottom edge is still below the nav bottom
      setIsTransparent(hero.getBoundingClientRect().bottom > NAV_HEIGHT);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [transparentNav]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white">
      {/* Sticky nav strip */}
      <div
        className={`sticky top-0 z-40 px-5 transition-colors duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <SiteNav linkClassName={isTransparent ? "text-white" : undefined} />
        </div>
      </div>
      {/* Page content — pull up behind nav on transparent-nav pages */}
      <div
        className={`flex flex-1 flex-col px-5 pb-5 ${
          transparentNav ? "-mt-[40px]" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
          <main ref={mainRef} className="flex flex-1 flex-col">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
