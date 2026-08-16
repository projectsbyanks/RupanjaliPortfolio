import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ART_LINKS = [
  { label: "Epoch 0: POV", to: "/epoch-0-pov" },
  { label: "Art Archive", to: "/art-archive" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-2.5 w-2.5 transition-transform duration-200", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <NavLink to="/" className={cn("shrink-0", className)}>
      <img
        src="/assets/Frame 156.jpg"
        alt="Rupanjali Kukal"
        className="h-8 w-auto object-contain"
      />
    </NavLink>
  );
}

function DesktopArtMenu({ linkClassName }: { linkClassName?: string }) {
  const { pathname } = useLocation();
  const isActive = ART_LINKS.some((l) => l.to === pathname);

  return (
    <div className="relative group">
      <span
        className={cn(
          "flex items-center gap-1 font-sf text-base tracking-[-0.05em] text-ink transition-opacity hover:opacity-70 cursor-default select-none",
          isActive ? "font-bold" : "font-normal",
          linkClassName,
        )}
      >
        Art
        <ChevronDown className="group-hover:rotate-180" />
      </span>
      {/* Dropdown — left-aligned to "Art", no gap so hover stays continuous */}
      <div className="absolute top-full left-0 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150">
        <div className="flex flex-col bg-background border border-neutral-200 shadow-lg rounded-sm py-1 min-w-[168px]">
          {ART_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-sf text-sm tracking-[-0.05em] text-ink px-4 py-2.5 hover:opacity-70 transition-opacity whitespace-nowrap",
                  isActive ? "font-bold" : "font-normal",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SiteNav({ linkClassName }: { linkClassName?: string }) {
  const [open, setOpen] = useState(false);
  const [artOpen, setArtOpen] = useState(false);
  const { pathname } = useLocation();
  const isArtActive = ART_LINKS.some((l) => l.to === pathname);

  const linkClass = (isActive: boolean) =>
    cn(
      "font-sf text-base tracking-[-0.05em] text-ink transition-opacity hover:opacity-70",
      isActive ? "font-bold" : "font-normal",
      linkClassName,
    );

  return (
    <>
      {/* Desktop nav: logo left | center links | contact right */}
      <nav className="hidden w-full items-center py-2 lg:flex">
        {/* Logo — left */}
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        {/* Center links */}
        <div className="flex items-center gap-x-8">
          <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/research-news" className={({ isActive }) => linkClass(isActive)}>
            Research News
          </NavLink>
          <DesktopArtMenu linkClassName={linkClassName} />
          <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
            About
          </NavLink>
        </div>

        {/* Contact — right */}
        <div className="flex flex-1 justify-end">
          <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Mobile bar — logo left, hamburger right */}
      <div className="flex items-center justify-between py-3 lg:hidden">
        <Logo />
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={cn("flex flex-col gap-[5px]", linkClassName ? "text-white" : "text-ink")}
        >
          <span className="block h-[1.5px] w-6 bg-current" />
          <span className="block h-[1.5px] w-6 bg-current" />
          <span className="block h-[1.5px] w-6 bg-current" />
        </button>
      </div>

      {/* Right-side drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
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
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70", isActive ? "font-bold" : "font-normal")
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/research-news"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70", isActive ? "font-bold" : "font-normal")
                }
              >
                Research News
              </NavLink>

              {/* Art accordion */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setArtOpen(!artOpen)}
                  className={cn(
                    "flex items-center gap-1.5 font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70 text-left",
                    isArtActive ? "font-bold" : "font-normal",
                  )}
                >
                  Art
                  <ChevronDown className={artOpen ? "rotate-180" : ""} />
                </button>
                {artOpen && (
                  <div className="flex flex-col gap-3 pl-4 border-l border-neutral-200">
                    {ART_LINKS.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "font-sf text-base tracking-[-0.05em] text-ink transition-opacity hover:opacity-70",
                            isActive ? "font-bold" : "font-normal",
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70", isActive ? "font-bold" : "font-normal")
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn("font-sf text-lg tracking-[-0.05em] text-ink transition-opacity hover:opacity-70", isActive ? "font-bold" : "font-normal")
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
