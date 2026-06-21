import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Certificate Sections
import CertificatePage from "./sections/Certificates/CertificatePage";
import BloodDonation from "./sections/Certificates/BloodDonation";
import Marathon from "./sections/Certificates/Marathon";
import TechnicalParticipation from "./sections/Certificates/TechnicalParticipation";
import NCC from "./sections/Certificates/NCC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Index />} />

          {/* Certificates Main Page */}
          <Route path="/certificates" element={<CertificatePage />} />

          {/* Sub Certificate Pages */}
          <Route path="/certificates/blood-donation" element={<BloodDonation />} />
          <Route path="/certificates/marathon" element={<Marathon />} />
          <Route
            path="/certificates/technical"
            element={<TechnicalParticipation />}
          />
          <Route path="/certificates/ncc" element={<NCC />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
