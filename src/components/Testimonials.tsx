const testimonials = [
  {
    quote:
      "Working with ArenaDev was an absolute game-changer. They delivered our platform on time, under budget, and it handled launch day traffic without breaking a sweat.",
    name: "Sarah Chen",
    role: "CTO, NexaCommerce",
    avatar: "SC",
    color: "bg-violet-500",
  },
  {
    quote:
      "The level of technical depth and attention to UX is rare. Our dashboard went from a clunky MVP to something our entire sales team actually loves using.",
    name: "Marcus Webb",
    role: "Product Lead, PulseAnalytics",
    avatar: "MW",
    color: "bg-cyan-500",
  },
  {
    quote:
      "Communication was top-notch throughout. They proactively flagged issues before they became problems and always had a thoughtful solution ready.",
    name: "Priya Anand",
    role: "Founder, FlowBoard",
    avatar: "PA",
    color: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed text-sm flex-1 mb-6">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
