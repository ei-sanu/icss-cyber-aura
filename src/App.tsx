import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import Ambassadors from "@/pages/Ambassadors";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const RouteTransitionLoader = () => {
  const location = useLocation();
  const [routeLoading, setRouteLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setRouteLoading(true);
    const timer = setTimeout(() => setRouteLoading(false), 520);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {routeLoading && (
        <motion.div
          className="fixed inset-0 z-[90] pointer-events-none flex items-center justify-center bg-background/35 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className="relative w-20 h-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-forest/35 animate-spin-slow" />
            <div className="absolute inset-2 rounded-full border border-forest/55 animate-spin-reverse" />
            <div className="absolute inset-5 rounded-full bg-forest/15" />
            <motion.div
              className="absolute inset-0 rounded-full border border-forest/20"
              animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ambassadors" element={<Ambassadors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Loader isLoading={loading} />
        <BrowserRouter>
          {!loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <RouteTransitionLoader />
              <Navbar />
              <main className="min-h-screen">
                <AnimatedRoutes />
              </main>
              <Footer />
            </motion.div>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
