
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import Problems from "./pages/Problems";
import ProblemDetail from "./pages/ProblemDetail";
import ProblemDiscoveryDetail from "./pages/ProblemDiscoveryDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import People from "./pages/People";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import EventSubmit from "./pages/EventSubmit";
import About from "./pages/About";
import CodeOfConduct from "./pages/CodeOfConduct";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";
import MyContributions from "./pages/MyContributions";
import CurationDashboard from "./pages/CurationDashboard";
import Profile from "./pages/Profile";

// Control whether to show the main app or just the landing page
const SHOW_FULL_APP = false;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {SHOW_FULL_APP ? (
            <>
              <Route path="/" element={<Index />} />
              <Route path="/problems" element={<Problems />} />
              <Route path="/problems/:id" element={<ProblemDetail />} />
              <Route path="/problems/discovery/:id" element={<ProblemDiscoveryDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/people" element={<People />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/events/submit" element={<EventSubmit />} />
              <Route path="/map" element={<Map />} />
              <Route path="/my-contributions" element={<MyContributions />} />
              <Route path="/curation" element={<CurationDashboard />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/code-of-conduct" element={<CodeOfConduct />} />
              {/* The landing page is still accessible */}
              <Route path="/landing" element={<LandingPage />} />
            </>
          ) : (
            <>
              {/* Only show the landing page in coming-soon mode */}
              <Route path="/" element={<LandingPage />} />
              {/* Redirect all other routes to the landing page */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
