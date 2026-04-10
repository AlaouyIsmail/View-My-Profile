const timeline = [
  {
    year: "2025",
    role: "Developer",
    company: "INFO DIX  : 1 month",
    desc: "Lead developer for a  platform ECOMMERCE .",
    color: "bg-violet-500",
  },
  {
    year: "2026",
    role: "Full-Stack Developer",
    company: "NEW DEV MAROC : 2 months",
    desc: "Built 20+ client projects ranging from e-commerce platforms to fintech dashboards. Introduced CI/CD pipelines that cut deployment time by 70%.",
    color: "bg-indigo-500",
  },
  // {
  //   year: "2020",
  //   role: "Frontend Developer",
  //   company: "Startup Foundry",
  //   desc: "Joined as employee #4, shipped the MVP React app that helped secure $2M seed funding. Grew the engineering team from 2 to 12.",
  //   color: "bg-cyan-500",
  // },
  // {
  //   year: "2019",
  //   role: "Junior Developer",
  //   company: "FreeLance",
  //   desc: "Started freelancing while finishing my CS degree. Built websites, WordPress themes, and small React apps for local businesses.",
  //   color: "bg-emerald-500",
  // },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: About text */}
          <div>
            <span className="inline-block text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Crafting code that{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                matters
              </span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I'm a full-stack developer with 2+ years of experience building web applications
                that are fast, accessible, and a joy to use. My approach combines strong engineering
                fundamentals with a designer's eye for detail.
              </p>
              <p>
                I believe the best software is built at the intersection of clean architecture,
                thoughtful UX, and relentless performance optimization. I've worked with startups
                in their earliest days and scaled systems to hundreds of thousands of users.
              </p>
            
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "20+", label: "Projects" },
                { value: "3+", label: "Clients" },
                { value: "2k+", label: "Users Served" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold text-white mb-1">{m.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: "GitHub", href: "https://github.com/AlaouyIsmail", color: "hover:bg-slate-700" },
                { icon: "LinkedIn", href: "https://www.linkedin.com/in/alaouy-ismail-2147093a9", color: "hover:bg-blue-700" },
                { icon: "Twitter", href: "https://x.com/Ismail_dev2", color: "hover:bg-sky-500" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className={`px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-medium border border-white/10 ${social.color} transition-colors`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8">MY STAGE</h3>
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-white/10 rounded-full" />

              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center shadow-lg z-10 relative`}>
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <div className="text-white font-bold">{item.role}</div>
                        <div className="text-violet-400 text-sm font-medium">{item.company}</div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-slate-300">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
