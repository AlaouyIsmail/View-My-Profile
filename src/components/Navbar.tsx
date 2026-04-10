import { useState, useEffect } from "react";
import { cn } from "../utils/cn";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("Home", "#home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-110 transition-transform">
            <span className="text-white text-sm font-bold">IA</span>
          </div>
          <span className="font-bold text-blue-900 text-lg tracking-tight ">
            ismail<span className="text-violet-600">Dev</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                active === link.label
                  ? "text-violet-600 bg-violet-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-indigo-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={cn(
                "block h-0.5 bg-slate-700 rounded transition-all duration-200",
                menuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-slate-700 rounded transition-all duration-200",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-slate-700 rounded transition-all duration-200",
                menuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-slate-100",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={cn(
                "px-4 py-3 rounded-lg text-sm font-medium text-left transition-all",
                active === link.label
                  ? "text-violet-600 bg-violet-50"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-semibold"
          >
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
}
