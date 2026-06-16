# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

No test runner or linter is configured.

## Architecture

Single-page React 18 + Vite app. No routing — the entire site is one scrolling page.

**Render flow:**
`main.jsx` → `App.jsx` renders a `LoadingScreen` (unmounts after ~3.5 s) then the full page layout: `Nav → Hero → About → Services → Projects → Stats → Process → Quote → CTA → Footer`.

**`src/components/`** — page sections, each self-contained with no shared state between them.

**`src/ui/`** — reusable primitives:
- `RevealOnScroll` — wraps any children in a fade+slide-up on viewport entry via `IntersectionObserver`. Use `delay` prop (ms) to stagger siblings.
- `CountUp` — animates a number from 0 to `target` on viewport entry. Props: `target`, `prefix`, `suffix`.
- `PlaceholderImage` — placeholder UI for images not yet supplied.

## Styling conventions

**Hybrid approach** — inline styles and Tailwind coexist intentionally:
- Layout, positioning, and complex animations → inline `style={}`
- Spacing, responsive breakpoints, typography utilities → Tailwind classes

Custom Tailwind tokens (defined in `tailwind.config.js`):

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F2EBDF` | Page background |
| `espresso` | `#2A2018` | Primary text / dark overlays |
| `sable` | `#A8623C` | Accent (scrollbar, selection, CTA) |
| `sandcastle` | `#E3D2B0` | Secondary accent / buttons |
| `text-secondary` | `#6B5E4F` | Muted body text |
| `text-light` | `#F4EFE7` | Text on dark backgrounds |
| `text-light-secondary` | `#B6A88F` | Muted text on dark backgrounds |

Custom fonts loaded via Google Fonts in `index.html`:
- `font-marcellus` — headings / display (serif)
- `font-jost` — body text (sans-serif, set as default on `body`)
- `font-mono` / `"Space Mono"` — labels, tags, monospace accents

## Animation patterns

- **Hero initial load** — CSS `@keyframes fadeUp` defined in `index.css`, applied inline via the `FADEIN(delayMs)` helper inside `Hero.jsx`.
- **Scroll reveals** — use `<RevealOnScroll delay={ms}>` wrapper (IntersectionObserver, threshold 0.12, 2.5 s safety fallback).
- **Stat counters** — use `<CountUp target={n} suffix="+" />` (IntersectionObserver, threshold 0.5, ease-out cubic over 2.2 s).
- **Parallax** — Hero background uses `requestAnimationFrame` + passive scroll listener, translating at `scrollY * 0.22`.

## Public assets

Images are served from `public/images/`. Referenced as `/images/filename.jpg` (no import needed). The loading screen expects: `proj1.jpg`, `proj2.jpg`, `proj3.jpg`, `proj5.jpg`, `hero.jpg`, `logo.jpeg`.
