export default function CollectionSection({ items = [] }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12">
          <p className="eyebrow">Collection Highlight</p>
          <h2 className="editorial-title heading-section mt-4 max-w-4xl">
            Built as a system, not a season.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((collection) => (
            <article
              key={collection.id}
              className="card-border group overflow-hidden rounded-[2rem]"
            >
              <div className="aspect-[16/11] overflow-hidden bg-obsidian">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-blood">
                  {collection.subtitle}
                </p>

                <h3 className="heading-card mt-3 text-bone">
                  {collection.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-ash">
                  {collection.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {collection.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-silver"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
