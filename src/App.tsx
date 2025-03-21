import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import Vision from "./pages/Vision";
import Schedule from "./pages/Schedule.tsx";
import Map from "./pages/Map.tsx";
import Blog from "./pages/Blog";
import Participant from "./pages/Participant";
import { BuildInfoFooter } from "@/components/BuildInfoFooter.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/wedding">
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/participants/:id" element={<Participant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BuildInfoFooter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
