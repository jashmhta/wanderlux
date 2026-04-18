# Wanderlux — Curated Journeys for the Discerning Traveler

A cinematic, editorial-style travel website with full-bleed video hero, infinite marquee, word-reveal manifesto, asymmetric destination grid, parallax strips, auto-looping video reels, split-story layouts, testimonials, and GSAP/Lenis-powered smooth scrolling animations.

**Live site:** [https://c-rho-green.vercel.app](https://c-rho-green.vercel.app)

## Architecture

- **Single-page static site** — no build step, no framework, pure HTML/CSS/JS
- **Dynamic media fetching** — all Pexels photo and video URLs are fetched at runtime from the Pexels API and cached in `sessionStorage`, so URLs never expire
- **GSAP + ScrollTrigger + Lenis** — smooth scroll, word reveal, parallax, staggered entrances, counter animations
- **Responsive** — mobile-first with breakpoints at 640/768/1024px, hamburger menu, adapted grids
- **Distinctive design** — Gloock + Epilogue fonts, terracotta/ocean-blue/amber palette, film grain texture, topographic patterns, compass rose, GPS coordinates, wave dividers

## Sections

1. **Hero** — Full-bleed video with text overlay, fallback image, scroll hint
2. **Infinite Marquee** — Horizontal scrolling typography
3. **Manifesto** — Word-by-word scroll reveal
4. **Curated Destinations** — 8-card asymmetric grid with Pexels API images, GPS coords, 3D tilt
5. **Parallax Strip** — Full-viewport image with slow parallax
6. **Stats Band** — Animated counters on ocean-blue background
7. **Culture & Culinary Masonry** — Tall/short image cards
8. **Cinematic Reels** — 10 auto-looping video cards in horizontal scroll track
9. **Split Stories** — 3 story/video pairs with scroll-driven reveals
10. **Testimonials** — 3 quote cards
11. **Experiences** — 3 feature cards with accent bars
12. **CTA** — Terracotta call-to-action
13. **Footer** — 4-column layout with social links

## Deployment

Deployed on [Vercel](https://vercel.com) as a static site. Just connect the repo and deploy — zero configuration needed.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## ⚠️ Pexels API Key

This project uses a Pexels API key in client-side JavaScript to dynamically fetch photos and videos. This is a known security limitation of a purely static site with no backend — the key is visible in browser source. 

**Recommendations for production:**
- Use a backend proxy (Vercel Serverless Function, Netlify Function, etc.) to keep the API key server-side
- Rotate the key if it becomes compromised
- Set up Pexels API rate limit monitoring

## Tech Stack

- **Fonts:** [Gloock](https://fonts.google.com/specimen/Gloock) (display) + [Epilogue](https://fonts.google.com/specimen/Epilogue) (body)
- **Animations:** [GSAP 3.12](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) + [Lenis](https://github.com/darkroomengineering/lenis)
- **Media:** [Pexels API](https://www.pexels.com/api/) (photos + videos)
- **Hosting:** [Vercel](https://vercel.com)

## License

All rights reserved. Media assets sourced from Pexels under their [license](https://www.pexels.com/license/).
