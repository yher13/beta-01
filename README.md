# beta-0.1 — Dark Streetwear Landing Page

Landing page prototype untuk brand streetwear "beta-0.1". Dibangun dengan Vite + React 19 + Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:5173)
npm run dev

# Production build (output ke dist/)
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config (base path, alias, build)
├── tailwind.config.js      # Tailwind theme (colors, fonts, shadows)
├── postcss.config.js       # PostCSS plugins (tailwind, autoprefixer)
├── .gitignore              # Ignored files/folders
├── public/                 # Static assets (copied as-is to dist/)
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Root component (renders HomePage)
    ├── index.css           # Global styles + Tailwind imports
    ├── components/         # Reusable UI components
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── ProductGrid.jsx
    │   ├── CollectionSection.jsx
    │   ├── BrandStory.jsx
    │   ├── CTASection.jsx
    │   └── Footer.jsx
    ├── pages/
    │   └── HomePage.jsx    # Landing page composition
    ├── data/               # Content/data (reusable JSON-like exports)
    │   ├── index.js        # Barrel export
    │   ├── navItems.js
    │   ├── heroContent.js
    │   ├── products.js
    │   ├── collections.js
    │   ├── brandStory.js
    │   ├── testimonials.js
    │   ├── ctaContent.js
    │   └── footerLinks.js
    ├── services/
    │   └── catalogService.js  # API layer (currently mock/local)
    └── lib/
        └── utils.js        # Helper: cn() className joiner
```

## Deployment (GitHub Pages)

Repo sudah dikonfigurasi `base: "/beta-01/"` di `vite.config.js` untuk GitHub Pages.

1. Push ke branch `main`
2. Aktifkan GitHub Pages di Settings → Pages
3. Source: "Deploy from a branch" → `main` → `/ (root)`
4. Atau pakai GitHub Actions untuk CI/CD otomatis (lihat `deploy.yml` jika tersedia)

Build output akan muncul di `https://yher13.github.io/beta-01/`

## Customization

- **Konten**: Edit file di `src/data/` (produk, koleksi, brand story, testimoni, CTA, footer)
- **Tema**: Edit `tailwind.config.js` (warna, font, shadow, spacing)
- **Komponen**: Edit file di `src/components/`

## Tech Stack

- **Framework**: React 19 (functional components, hooks)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3 (dark theme custom)
- **Icons**: Lucide React
- **Language**: JavaScript (ES Modules)

## Notes

- `node_modules/`, `dist/`, dan `.env*` di-ignore via `.gitignore`
- Gambar produk/koleksi saat ini pakai Unsplash (placeholder) — ganti ke asset lokal/CDN sendiri untuk produksi
- Form CTA (waitlist) masih dummy (`console.log`) — perlu integrasi backend nyata