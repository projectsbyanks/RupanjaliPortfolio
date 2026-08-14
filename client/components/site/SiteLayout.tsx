import { ReactNode, useEffect, useRef, useState } from "react";
import SiteNav from "./SiteNav";

export default function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(40);
  const [isTransparent, setIsTransparent] = useState(transparentNav);

  // Measure actual nav height (handles 1-row vs 2-row wrapping on mobile)
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setNavHeight(el.offsetHeight);
    });
    ro.observe(el);
    setNavHeight(el.offsetHeight);
    return () => ro.disconnect();
  }, []);

  // Transparent nav: turn white once hero scrolls past
  useEffect(() => {
    if (!transparentNav) return;
    const update = () => {
      const hero = mainRef.current?.firstElementChild
        ?.firstElementChild as HTMLElement | null;
      if (!hero) return;
      setIsTransparent(hero.getBoundingClientRect().bottom > navHeight);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [transparentNav, navHeight]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-background">
      {/* Sticky nav strip */}
      <div
        ref={navRef}
        className={`sticky top-0 z-40 px-5 transition-colors duration-300 ${
          isTransparent ? "bg-transparent" : "bg-background"
        }`}
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <SiteNav linkClassName={isTransparent ? "text-white" : undefined} />
        </div>
      </div>
      {/* Pull content up behind nav on transparent-nav pages */}
      <div
        className="flex flex-1 flex-col px-5 pb-5"
        style={transparentNav ? { marginTop: `-${navHeight}px` } : undefined}
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
