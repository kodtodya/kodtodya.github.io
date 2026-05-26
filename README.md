# Avadhut Lele — Scrollytelling Portfolio

> High-end personal portfolio with scroll-linked canvas animation, parallax overlays, and glassmorphism project cards.

**Live site:** [kodtodya.github.io](https://kodtodya.github.io)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Canvas | HTML5 Canvas (150-frame WebP sequence) |
| Fonts | Inter + JetBrains Mono (via `next/font`) |
| Deploy | GitHub Pages (static export via GitHub Actions) |

---

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── ScrollyCanvas.tsx   ← 500vh sticky canvas + scroll-driven overlays
│   │   ├── Nav.tsx             ← Fixed nav with scroll-hide + mobile drawer
│   │   ├── Projects.tsx        ← Glassmorphism POC/project cards
│   │   ├── About.tsx           ← Bio, skills (8 categories), stats
│   │   ├── Experience.tsx      ← Career timeline (6 roles)
│   │   ├── Contact.tsx         ← Email copy + social links
│   │   └── Footer.tsx          ← Dark minimal footer
│   ├── globals.css             ← Dark theme (#121212), glass utilities
│   ├── layout.tsx              ← Metadata, fonts
│   └── page.tsx                ← Page assembly
├── public/
│   └── sequence/               ← 150 WebP frames (frame_000…frame_149)
├── .github/
│   └── workflows/
│       └── deploy.yml          ← CI/CD: build → GitHub Pages
├── next.config.mjs             ← output: 'export' (static)
└── tailwind.config.ts
```

---

## Local Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000). Hot-reload is enabled — edit any file under `app/` and the browser updates instantly.

> **Note:** If you see a white page after running `npm run build` followed by `npm run dev`, clear the stale cache first:
> ```bash
> rm -rf .next && npm run dev
> ```

---

## Deploy to GitHub Pages

This project is configured for **automated deployment** to GitHub Pages via GitHub Actions.

### One-time setup (do this once in the GitHub repo settings)

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under **Build and deployment**, set the **Source** to **`GitHub Actions`** (not the legacy `gh-pages` branch option)
4. Save

That's it. No branch configuration needed — the workflow handles everything.

### How it works

Every push to `master` (or `main`) triggers `.github/workflows/deploy.yml`:

```
Push to master
    ↓
GitHub Actions: ubuntu-latest
    ↓
npm ci
    ↓
npm run build          ← Next.js static export → /out directory
    ↓
actions/upload-pages-artifact   ← uploads /out
    ↓
actions/deploy-pages            ← deploys to https://kodtodya.github.io
```

### Manual trigger

You can also trigger a deploy manually from the **Actions** tab → select **"Deploy Next.js to GitHub Pages"** → **Run workflow**.

### Build locally (verify before pushing)

```bash
npm run build
# Static output will be in the /out directory
```

Verify the `/out` folder contains `index.html` before pushing.

---

## Key Architecture Notes

### Canvas Scrollytelling
- The `ScrollyCanvas` component creates a `500vh` container — 5x the viewport height gives a long, cinematic scroll
- `useScroll({ target: containerRef })` from Framer Motion tracks scroll progress (0 → 1)
- 150 WebP frames are preloaded in **batches** (10 → 40 → 100) to avoid blocking the browser
- Frame index = `Math.floor(progress × 149)` — quantized per scroll tick
- All canvas redraws go through `requestAnimationFrame` for 60fps performance
- **Cover-fit logic** replicates CSS `object-fit: cover` — image always fills the viewport regardless of aspect ratio

### Overlay Text Visibility
- Text overlays are driven by **imperative DOM manipulation** (`element.style.opacity`) via `scrollYProgress.on('change', ...)`
- `visibility: hidden` is set as soon as `opacity < 0.01` — prevents GPU compositing of invisible layers, zero bleed-through between sections

### Static Export
- `next.config.mjs` uses `output: 'export'` for GitHub Pages compatibility
- `images: { unoptimized: true }` — required for static export (no Next.js image optimization server)
- `trailingSlash: true` — required for gh-pages path resolution

---

## License

MIT
