import { brandStory, testimonials } from "../data";

export default function BrandStory() {
  return (
    <section id="story" className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="sticky top-24">
          <p className="eyebrow">{brandStory.eyebrow}</p>

          <h2 className="editorial-title mt-4 text-5xl leading-none sm:text-7xl">
            {brandStory.title}
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-bone sm:text-2xl">
            {brandStory.body}
          </p>

          <div className="mt-8 grid gap-3">
            {brandStory.points.map((point) => (
              <div
                key={point}
                className="card-border rounded-2xl px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-silver"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.id}
                className="card-border rounded-2xl p-5"
              >
                <blockquote className="text-sm leading-7 text-ash">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-bone">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blood">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
