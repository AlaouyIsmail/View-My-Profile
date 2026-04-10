import { useRef } from "react";

const techStack = ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "Docker", "js", "nest.js", "Mysql", "SQLite", "tailwindcss"];

export default function Hero() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-sm text-slate-300 font-medium">Available for freelance & contracts</span>
        </div>

        {/* Heading */}

       <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
  Ismail Alaouy{" "}
  
  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
      Building
    </span>
    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-70" />
  </span>

  <br />

  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
    Modern Web 
  </span>
</h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full-stack developer specializing in high-performance web applications. I turn complex
          problems into elegant, scalable solutions that users love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-200 w-full sm:w-auto"
          >
            View My Work →
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/20 transition-all duration-200 w-full sm:w-auto"
          >
            Let's Talk
          </button>
        </div>
 {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-20">
          {[
            { value: "10+", label: "Projects Built" },
            { value: "2 years", label: "Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Tech ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-4 bg-white/5 backdrop-blur-sm border-t border-white/5 overflow-hidden">
        <div ref={tickerRef} className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="text-slate-400 text-sm font-medium flex items-center gap-2">
              <span className="text-violet-400">✦</span> {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
