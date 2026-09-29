# Florist website template (demo: Pirchei HaGefen, Jerusalem)

Static Astro site, Hebrew RTL, built so the same code can be offered to another florist by editing one file.

## New client in 4 steps

1. **Edit `src/config/site.config.ts`** - identity, owner story, phone/WhatsApp, opening hours and same-day
   cutoff times, delivery rules, theme colors, sizes and prices, flowers and their months, bouquet catalog,
   color palettes, services (one page each), delivery neighborhoods (one page each, with content written for
   that neighborhood), reviews, event gallery, FAQ, builder occasions and card ideas, form destinations and
   legal details. Nothing client-specific is typed into pages or components.
2. **Replace images** in `src/assets/img/` (same file names, or update the imports at the top of the config).
   See `CREDITS.md` for the current demo stock photos. If the hero photo changes, update `heroSpecimens`
   (the point on the photo each flower label marks, in percent).
3. **Set `site.url`** and **`site.isDemo: false`**. Demo mode adds `noindex` to every page, sends
   `X-Robots-Tag: noindex` from `dist/_headers`, blocks everything in `robots.txt`, and shows a demo note.
4. **Regenerate icons** after a color change: `npm run icons`, then `npm run build`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Serve the built site |
| `npm run check` | Type-check Astro and TypeScript files |
| `npm run audit` | Check the build: broken links, orphans, titles, descriptions, H1, canonical, JSON-LD, alt, em dashes |
| `npm run icons` | Rebuild favicon and app icons from the theme colors |
| `npm run checklist` | Write the progress file for the Website Build Checklist |

## What is on the site

- **Hero with specimen labels:** the flowers in the hero photo are labeled with their Hebrew and Latin names,
  and each label links to that flower on the seasons page.
- **Live delivery status** (Israel time) in a strip on every page: time left for same-day delivery, or when
  the next delivery goes out.
- **Bouquet catalog** with numbered bouquets, palette filter and a prefilled WhatsApp order per bouquet.
- **Bouquet builder:** occasion, palette, size, neighborhood, date (blocks Saturday and past cutoffs) and card
  text with ideas per occasion. Suggests in-season flowers and builds a full WhatsApp order with the total.
- **Delivery checker:** neighborhood + day gives the fee, window and order cutoff.
- **Season calendar:** 15 flowers x 12 months, current month highlighted in the browser, plus a flower glossary.
- Schema: `Florist` with hours, areas, rating and offer catalog; `Product` list for the catalog; `Service`,
  `FAQPage`, `BreadcrumbList`, `Review`, `Person`, `Article`.

## Contact form

`form.destinations` in the config. Every lead goes to every destination in parallel; use two
(email via Web3Forms + a webhook to a Google Sheet) so no lead is lost. Empty list = demo mode.
Analytics (GA4) loads only after cookie consent; set `analytics.ga4`.

## Hosting

Built for Cloudflare Pages (any static host works). `public/_headers` holds security and cache headers.
