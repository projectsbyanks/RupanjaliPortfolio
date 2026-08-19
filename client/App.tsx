import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import Index from "./pages/Index";
import ResearchNews from "./pages/ResearchNews";
import HiddenLayers from "./pages/HiddenLayers";
import MyArt from "./pages/MyArt";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research-news" element={<ResearchNews />} />
          <Route path="/epoch-0-pov" element={<HiddenLayers />} />
          <Route path="/art-archive" element={<MyArt />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
