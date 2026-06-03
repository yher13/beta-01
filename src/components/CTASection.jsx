import { ArrowUpRight } from "lucide-react";
import { ctaContent } from "../data";

export default function CTASection() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    console.log("Waitlist email:", email);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-bone p-6 text-void sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blood/25 blur-[80px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blood">
                {ctaContent.eyebrow}
              </p>

              <h2 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-none tracking-editorial sm:text-7xl">
                {ctaContent.title}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/65">
                {ctaContent.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={ctaContent.placeholder}
                className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-void outline-none placeholder:text-black/35 focus:border-blood"
              />

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-void px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-bone transition hover:bg-blood"
              >
                {ctaContent.buttonLabel}
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="px-2 text-xs leading-6 text-black/45">
                Dummy form only. Nanti bisa disambungkan ke service API,
                Supabase, Firebase, atau backend sendiri.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
