import { ArrowUpRight } from "lucide-react";
import { heroContent } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:min-h-screen lg:pb-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blood/20 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="section-shell grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="eyebrow">{heroContent.eyebrow}</p>

          <h1 className="editorial-title heading-hero mt-6">
            {heroContent.headline}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-ash sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-void transition hover:bg-silver"
            >
              {heroContent.primaryCta.label}
              <ArrowUpRight
                size={18}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.22em] text-bone transition hover:border-blood hover:bg-blood/20"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="card-border relative overflow-hidden rounded-[2rem] p-5 shadow-brutal">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-obsidian">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
              alt="Dark streetwear editorial look"
              className="h-full w-full object-cover opacity-80 grayscale"
            />
          </div>

          <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-black/60 p-5 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-ash">
              Release Status
            </p>
            <p className="mt-2 text-2xl font-black uppercase tracking-tight text-bone">
              Prototype Live
            </p>
          </div>
        </div>
      </div>

      <div className="section-shell mt-16 grid gap-4 sm:grid-cols-3">
        {heroContent.stats.map((stat) => (
          <div key={stat.label} className="card-border rounded-2xl p-5">
            <p className="text-3xl font-black uppercase tracking-tight text-bone">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-ash">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
