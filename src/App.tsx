import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Testimonials from "./pages/Testimonials";
import Certificates from "./pages/Certificates";
import OneToOneSession from "./pages/OneToOneSession";
import SportsNutrition from "./pages/SportsNutrition";
import YogaNaturopathy from "./pages/YogaNaturopathy";
import TarotDowsing from "./pages/TarotDowsing";
import ReikiHealing from "./pages/ReikiHealing";
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
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services/one-to-one-session" element={<OneToOneSession />} />
          <Route path="/services/sports-nutrition" element={<SportsNutrition />} />
          <Route path="/services/yoga-naturopathy" element={<YogaNaturopathy />} />
          <Route path="/services/tarot-dowsing" element={<TarotDowsing />} />
          <Route path="/services/reiki-healing" element={<ReikiHealing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
