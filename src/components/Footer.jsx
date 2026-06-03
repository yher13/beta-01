import { footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <a
            href="#home"
            className="text-xl font-black uppercase tracking-[-0.05em] text-bone"
          >
            beta-0.1
          </a>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ash">
            Dark streetwear system / first public prototype
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.22em] text-ash transition hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
