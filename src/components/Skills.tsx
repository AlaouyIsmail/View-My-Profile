import { useState } from "react";
import { cn } from "../utils/cn";
import { skills, skillCategories } from "../data/skills";

function SkillBar({ name, level, icon }: { name: string; level: number; icon: string }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-semibold text-slate-700">{name}</span>
        </div>
        <span className="text-xs font-bold text-slate-500 group-hover:text-violet-600 transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

const techBadges = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", color: "from-orange-500 to-blue-700" },
  { name: "Node.js", color: "from-green-500 to-emerald-600" },
  { name: "Next.js", color: "from-slate-600 to-slate-800" },
  { name: "Nest.js", color: "from-blue-400 to-indigo-600" },
  { name: "Docker", color: "from-sky-400 to-blue-600" },
  { name: "MYSQL", color: "from-orange-400 to-amber-500" },
  { name: "SQLite", color: "from-pink-500 to-rose-600" },
  // { name: "Redis", color: "from-red-500 to-rose-600" },
  // { name: "Go", color: "from-cyan-500 to-teal-600" }, 
  { name: "Tailwind", color: "from-teal-400 to-cyan-600" },
  { name: "Git", color: "from-orange-500 to-red-500" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Years of hands-on experience across the full stack — from pixel-perfect frontends to
            battle-tested backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Skill bars */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === cat.key
                      ? `${cat.color} ${cat.bg} font-bold`
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              {filtered.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Right: Tech cloud + info cards */}
          <div className="space-y-8">
            {/* Tech badges */}
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech.name}
                    className={cn(
                      "px-4 py-2 rounded-xl text-white text-sm font-semibold bg-gradient-to-r shadow-sm hover:scale-105 transition-transform cursor-default",
                      tech.color
                    )}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  emoji: "🎓",
                  title: "Ecole Supérieure de Technologie de Fès",
                  subtitle: "Software Engineering, 2026",
                  bg: "bg-violet-50",
                  border: "border-violet-100",
                },
                // {
                //   emoji: "🏆",
                //   title: "AWS Certified",
                //   subtitle: "Solutions Architect",
                //   bg: "bg-amber-50",
                //   border: "border-amber-100",
                // },
                // {
                //   emoji: "📖",
                //   title: "Open Source",
                //   subtitle: "500+ contributions",
                //   bg: "bg-emerald-50",
                //   border: "border-emerald-100",
                // },
                // {
                //   emoji: "🌍",
                //   title: "Remote First",
                //   subtitle: "5+ countries, 3 continents",
                //   bg: "bg-cyan-50",
                //   border: "border-cyan-100",
                // },
              ].map((card) => (
                <div
                  key={card.title}
                  className={cn(
                    "p-4 rounded-xl border",
                    card.bg,
                    card.border,
                    "hover:scale-105 transition-transform cursor-default"
                  )}
                >
                  <div className="text-2xl mb-2">{card.emoji}</div>
                  <div className="text-sm font-bold text-slate-800">{card.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{card.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
