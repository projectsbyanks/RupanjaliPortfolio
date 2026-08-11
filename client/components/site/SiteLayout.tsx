import { ReactNode } from "react";
import SiteNav from "./SiteNav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white p-5">
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        <SiteNav />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
