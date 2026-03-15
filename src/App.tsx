import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<ComingSoon title="Events & Workshops" />} />
          <Route path="/leaderboard" element={<ComingSoon title="Leaderboard" />} />
          <Route path="/resources" element={<ComingSoon title="Learning Resources" />} />
          <Route path="/team" element={<ComingSoon title="Our Team" />} />
          <Route path="/about" element={<ComingSoon title="About the Club" />} />
          <Route path="/join" element={<ComingSoon title="Join Community" />} />
          <Route path="/dashboard" element={<ComingSoon title="Student Dashboard" />} />
          <Route path="/admin" element={<ComingSoon title="Admin Panel" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
