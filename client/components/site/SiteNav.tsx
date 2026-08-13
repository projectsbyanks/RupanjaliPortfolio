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
  return (
    <nav className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 sm:justify-between">
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
  );
}
