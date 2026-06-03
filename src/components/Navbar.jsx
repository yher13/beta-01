import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-void/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          className="text-lg font-black uppercase tracking-[-0.05em] text-bone"
          aria-label="beta-0.1 home"
        >
          beta-0.1
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.25em] text-ash transition hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#collection"
          className="hidden rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-bone transition hover:border-blood hover:bg-blood/20 md:inline-flex"
        >
          Explore
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-bone md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-void px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.25em] text-ash"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
