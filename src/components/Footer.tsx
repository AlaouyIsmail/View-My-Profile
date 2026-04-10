export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            ismail<span className="text-violet-400">Dev</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          © {year} ismail alaouy. Built with{" "}
          <span className="text-violet-400">♥</span>{" "}
          using React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
