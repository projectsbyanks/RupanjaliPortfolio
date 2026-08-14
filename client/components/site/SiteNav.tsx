import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Research News", to: "/research-news" },
  { label: "Hidden Layers", to: "/hidden-layers" },
  { label: "My Art", to: "/my-art" },
  { label: "About Me", to: "/about" },
  { label: "Contact Me", to: "/contact" },
];

export default function SiteNav({ linkClassName }: { linkClassName?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav — hidden on mobile */}
      <nav className="hidden w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 sm:justify-between lg:flex">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              cn(
                "font-sf text-base tracking-[-0.05em] text-ink transition-opacity hover:opacity-70",
                isActive ? "font-bold" : "font-normal",
                linkClassName,
              )
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile nav — hamburger on the right */}
      <div className="flex items-center justify-end py-3 lg:hidden">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={cn("flex flex-col gap-[5px]", linkClassName ? "text-white" : "text-ink")}
        >
          <span className={cn("block h-[1.5px] w-6 bg-current")} />
          <span className={cn("block h-[1.5px] w-6 bg-current")} />
          <span className={cn("block h-[1.5px] w-6 bg-current")} />
        </button>
      </div>

      {/* Right-side drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Drawer panel */}
          <div
            className="absolute right-0 top-0 flex h-full w-64 flex-col bg-background px-8 py-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="mb-10 self-end text-2xl leading-none text-ink"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70",
                      isActive ? "font-bold" : "font-normal",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
