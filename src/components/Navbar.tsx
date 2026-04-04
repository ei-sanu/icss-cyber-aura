import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
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

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 ${
        scrolled ? "bg-forest/90 backdrop-blur-2xl shadow-lg" : "bg-forest/70 backdrop-blur-xl"
      } rounded-full px-6 py-3 border border-forest-light/20`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <Shield className="w-5 h-5 text-golden transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-heading text-sm font-bold tracking-wider text-golden">
            ICSS <span className="text-primary-foreground/70 font-body italic">ARC</span>
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  active ? "text-golden" : "text-primary-foreground/70 hover:text-golden"
                }`}
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-golden"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <button className="text-sm text-primary-foreground/60 hover:text-golden transition-colors duration-300">
            Sign in
          </button>
          <button className="text-sm font-semibold px-5 py-2 rounded-full bg-golden text-forest hover:shadow-[0_0_20px_hsl(47_100%_50%/0.4)] transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-golden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <div className="flex flex-col gap-3 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm px-4 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-golden bg-golden/10"
                      : "text-primary-foreground/70 hover:text-golden"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 px-4 pt-2">
                <button className="text-sm text-primary-foreground/60">Sign in</button>
                <button className="text-sm font-semibold px-5 py-2 rounded-full bg-golden text-forest">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
