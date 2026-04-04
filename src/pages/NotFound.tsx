import { ArrowLeft, Home, Shield } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(47_100%_50%/0.35),transparent_35%),linear-gradient(180deg,hsl(47_100%_50%/0.18),hsl(161_96%_14%/0.08))]" />
      <div className="relative z-10 max-w-2xl w-full green-card p-8 sm:p-10 text-center glow-forest">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-golden/15 mb-5">
          <Shield className="w-8 h-8 text-golden" />
        </div>
        <p className="text-xs tracking-[0.3em] uppercase text-golden/70 mb-3">404</p>
        <h1 className="mb-4 font-heading text-4xl sm:text-6xl text-golden">Page not found</h1>
        <p className="mb-8 text-sm sm:text-base text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
          The route you tried to open does not exist. Use the links below to get back to the main site or continue exploring.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-golden px-6 py-3 font-heading text-lg tracking-wider text-forest transition-all duration-300">
            <Home size={16} />
            Go Home
          </a>
          <a href="/about" className="inline-flex items-center justify-center gap-2 rounded-full border border-golden/40 px-6 py-3 font-heading text-lg tracking-wider text-golden transition-all duration-300 hover:bg-golden/10">
            <ArrowLeft size={16} />
            Explore About
          </a>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 font-heading text-lg tracking-wider text-primary-foreground/80 transition-all duration-300 hover:border-golden/40 hover:text-golden">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
