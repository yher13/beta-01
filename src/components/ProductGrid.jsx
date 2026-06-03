import { ArrowUpRight } from "lucide-react";

export default function ProductGrid({ products = [] }) {
  return (
    <section id="collection" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured Products</p>
            <h2 className="editorial-title mt-4 text-5xl leading-none sm:text-7xl">
              First pieces.
              <br />
              No apology.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-ash">
            Produk masih dummy dari array lokal. Nanti tinggal ganti service
            layer ke API/database tanpa ubah struktur komponen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group card-border overflow-hidden rounded-[1.6rem]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover opacity-75 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-95"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-bone backdrop-blur">
                  {product.tag}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blood">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-tight text-bone">
                      {product.name}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="mt-1 text-ash transition group-hover:text-bone"
                  />
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-silver">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
