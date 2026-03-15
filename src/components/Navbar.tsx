import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gfgLogo from "@/assets/gfg-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`floating-nav flex items-center gap-3 max-w-5xl transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img src={gfgLogo} alt="GfG Logo" className="h-8 w-auto" />
        <span className="font-display font-bold text-sm hidden sm:block text-foreground">
          GfG RIT
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 ml-auto lg:ml-0">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-xl hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link
          to="/join"
          className="hidden lg:block px-4 py-1.5 text-xs font-medium rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Join Club
        </Link>

        <button
          className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card p-4 flex flex-col gap-2 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground text-center"
            >
              Join Club
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
