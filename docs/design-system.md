# Design system: Pirchei HaGefen

## Concept

A herbarium in a Jerusalem flower studio. The business name means "flowers of the vine", so the palette
comes from the grapevine: grape purple, vine-leaf green and the pale chartreuse of a young tendril. The
one memorable element is the hero: a large dark photo of a real bouquet where the flowers are labeled like
botanical specimens (Hebrew name, Latin name), and each label links to that flower's season. The same
"specimen label" idea carries into the catalog cards, where every bouquet has a number, a flower list, a
size and a price in a small labeled table. Everything else stays quiet.

This is deliberately different from the earlier demo sites (industrial blueprint for the plumber, a
fuse-box concept for the electrician): serif editorial type, no rounded card kit, no gradients as
decoration.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| grape | `#3a1b3d` | Headings, primary buttons, dark sections |
| grapeDeep | `#27112a` | Hero, footer, status strip |
| grapeSoft | `#5a3159` | Button hover |
| vine | `#3f5a26` | Links, focus ring, in-season cells, small data |
| tendril | `#cfe07a` | Accent on dark backgrounds only (buttons, dots, current month) |
| paper | `#f6f2f5` | Page background (a lilac-tinted white, not cream) |
| blush | `#ecdfe8` | Alternate sections |
| text / muted | `#241427` / `#62536a` | Body and secondary text |
| whatsapp | `#17784a` | WhatsApp buttons (darkened for 4.5:1 with white text) |

All text pairs pass WCAG AA (checked with axe on every page, desktop and mobile).

## Type

- **Frank Ruhl Libre** (variable, self-hosted): headings and body. A classic Hebrew newspaper serif, set
  large and light for headings (weight 350-450) and at 17px / 1.75 for body.
- **IBM Plex Sans Hebrew** (400/500/600): interface only: buttons, form fields, tables, prices, labels.
- Scale: major third (1.25) from 17px. No all-caps labels, no single-word accents in headlines.

## Layout

- Right-aligned (RTL) text, 76rem container, line length under ~70 characters.
- Section heads: heading and short intro on a two-column grid on wide screens.
- Lists of services, areas and FAQs are rows separated by hairlines, not card grids. Cards are used only
  for bouquets, where each one is a real product.
- Numbers appear only where content is a sequence (ordering steps) or a real code (bouquet numbers).

## Motion

Almost none. The status dot, FAQ plus/minus, and hover color changes. `prefers-reduced-motion` disables
all transitions.
