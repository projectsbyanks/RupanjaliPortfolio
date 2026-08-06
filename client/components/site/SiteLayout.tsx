import { ReactNode } from "react";
import SiteNav from "./SiteNav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white px-4 pt-5 sm:px-9">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        <SiteNav />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
