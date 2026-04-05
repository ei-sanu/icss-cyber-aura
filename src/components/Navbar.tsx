import { AnimatePresence, motion } from "framer-motion";
import { Settings, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Events", path: "/events" },
  { label: "Ambassadors", path: "/ambassadors" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`relative w-full max-w-5xl rounded-full transition-all duration-500 ${scrolled ? "bg-forest shadow-lg shadow-forest-deep/40" : "bg-forest"
          } backdrop-blur-xl border border-forest-light/20 px-5 sm:px-6 py-3`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <Shield className="w-5 h-5 text-golden transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-heading text-xl tracking-wider text-golden">
              ICSS <span className="text-primary-foreground/90 font-body text-sm italic">CAN</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-[0_10px_28px_hsl(0_0%_0%/0.18)]">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 lg:px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 overflow-hidden ${active ? "text-forest" : "text-primary-foreground/90 hover:text-white"
                    }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-island"
                      className="absolute inset-0 rounded-full bg-background border border-background/80 shadow-[0_6px_20px_hsl(0_0%_100%/0.45)]"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button className="text-sm text-primary-foreground/80 hover:text-golden transition-colors duration-300">
              Sign in
            </button>
            <button className="text-sm font-semibold px-5 py-2 rounded-full bg-white text-forest border border-white/70 hover:bg-background hover:shadow-[0_0_20px_hsl(0_0%_100%/0.45)] transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-1 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 180 : 0, scale: mobileOpen ? 1.08 : 1 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Settings size={24} className="text-white" />
            </motion.span>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ scaleY: 0.2, opacity: 0, y: -12 }}
              animate={{ scaleY: 1, opacity: 1, y: 0 }}
              exit={{ scaleY: 0.2, opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 top-full mt-3 origin-top overflow-hidden rounded-b-[30px] rounded-t-none border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_24px_60px_hsl(0_0%_0%/0.16)]"
            >
              <div className="flex flex-col items-center gap-1 p-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`w-full text-center text-sm px-4 py-3 rounded-xl transition-all duration-200 ${location.pathname === item.path
                      ? "text-red-700 font-semibold bg-red-50 border border-red-200"
                      : "text-foreground/80 hover:text-red-700 hover:bg-red-50"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col items-center gap-3 px-2 pt-3 border-t border-forest/10 mt-2 w-full">
                  <button className="text-sm text-forest text-center hover:text-forest-deep transition-colors duration-200">
                    Sign in
                  </button>
                  <button className="text-sm font-semibold px-5 py-2 rounded-full bg-forest text-white border border-forest/20 shadow-[0_8px_20px_hsl(0_0%_0%/0.12)]">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
