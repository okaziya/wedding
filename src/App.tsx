import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import Vision from "./pages/Vision";
import Program from "./pages/Program";
import Maps from "./pages/Maps";
import Blog from "./pages/Blog";
import Participant from "./pages/Participant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/wedding">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/wedding/" replace />} />
          <Route path="/wedding" element={<Index />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/program" element={<Program />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/participants/:id" element={<Participant />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;