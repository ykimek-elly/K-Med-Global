# K-Med Global — Project Summary

> **Responsive** web mockups for **K-Med Global**, a medical tourism platform connecting international patients with trusted Korean hospitals. Built on the **5Medical Health Design System**.
>
> Coverage: Mobile (375) · Tablet (768) · Desktop (1440) for every page.

---

## 1. Brand & Design Foundation

- **Brand**: K-Med Global — clinical, trustworthy, internationally accessible.
- **Design system**: 5Medical Health (tokens imported from `/colors_and_type.css`).
- **Type**: Lato (display + UI), Roboto (body).
- **Color tokens used**:
  - Navy `#00579B` — primary brand / actions
  - Aqua `#69D2EC` / Aqua-soft — accents and links
  - Green `#4CAF50` / Green-dark — success, pricing highlights
  - Pink-warm — backgrounds, hero washes, CTA gradients
  - Warm canvas `#f0eee9` — design canvas backdrop

All component styling lives in `kmed.css` (≈22k chars). Shared chrome (header, footer, icons, page hero) lives in `kmed-shared.jsx`.

---

## 2. File Structure

```
/
├── index.html                       # Entry — DesignCanvas, 9 rows × 3 breakpoints
├── kmed.css                         # Desktop component styles
├── kmed-responsive.css              # Mobile/tablet reflow rules + tokens
├── kmed-responsive-2.css            # Mobile fix pack — width clamp, drawer overlay, reflow guards
├── kmed-responsive-3.css            # Padding fix pack — section gutters + tablet 2-col grids
├── home-visual.html                 # Tone-and-manner visual mockup (Home, Desktop 1440)
├── kmed-home-visual.jsx             # HomePageVisual + Hero illustration, treatment visuals, monograms, pattern avatars
├── kmed-shared.jsx                  # Desktop Header, Footer, Icon, Logo, NAV
├── kmed-home.jsx                    # Desktop Home
├── kmed-treatments.jsx              # Desktop Treatments list + Detail
├── kmed-forms.jsx                   # Desktop Get Matched + Contact
├── kmed-content.jsx                 # Desktop Why Korea + Stories
├── kmed-admin.jsx                   # Desktop Admin List + Detail
├── kmed-responsive-shell.jsx        # HeaderResponsive (drawer, closed by default) + FooterResponsive
├── kmed-responsive-pages.jsx        # M/T variants: Home, Treatments list
├── kmed-responsive-pages-2.jsx      # M/T variants: Detail, Get Matched, Why Korea, Stories, Contact
├── kmed-responsive-admin.jsx        # M/T variants: Admin list + detail (incl. bottom nav)
├── design-canvas.jsx                # Pan/zoom canvas starter component
└── ds/
    ├── colors_and_type.css          # 5Medical tokens
    └── assets/fonts/                # Lato, Roboto
```

---

## 3. Pages Delivered (9)

### Marketing site
| # | Page | Highlights |
|---|------|-----------|
| 01 | **Home** | Hero with circular pink/aqua wash, treatment chip grid, "How it works" 4-step, featured treatments, partner hospitals, story strip, CTA banner |
| 02 | **Treatments listing** | Left filter rail (category / price / region / language), card list with price + stay length |
| 03 | **Treatment detail** (Dermatology & K-Beauty) | Hero w/ breadcrumbs, compliance disclaimer, tabbed content (Overview / Procedures / What to expect / FAQs), itemized procedure pricing, "Request estimate" CTA |
| 05 | **Why Korea** | Trust pillars, accreditation logos placeholder, comparison stats, infrastructure callouts |
| 06 | **Stories** | Text-only patient quotes (no before/after imagery — compliance) |

### Conversion & contact
| # | Page | Highlights |
|---|------|-----------|
| 04 | **Get Matched** | 5-step form (Treatment → Case → Travel → Contact → Review), step bar, multi-select chips, summary review |
| 07 | **Contact** | Two-column form + sidebar with channels, hours (KST), office address, response SLA |

### Admin / Internal ops
| # | Page | Highlights |
|---|------|-----------|
| 08 | **Admin Lead List** | Sidebar nav (Workspace / Network / Reporting), 4 stat cards, filter bar, sortable table with status pills, pagination |
| 09 | **Admin Lead Detail** | Patient summary card, activity timeline, documents grid, right rail (assignment, matched hospitals, internal notes, consent) |

All artboards are sized to fit their full content (incl. footer).

Each page row in the canvas now contains **three artboards side-by-side** — Mobile 375, Tablet 768, Desktop 1440 — sharing identical components, tokens, and section order.

---

## 3a. Responsive System

Same components, colors, typography, and section order as desktop — pure reflow, no redesign.

### Header
- **Desktop**: full nav inline + language switcher + Patient Login + primary CTA, sticky on scroll.
- **Mobile / Tablet**: nav collapses into a hamburger drawer; language switcher (EN / 日本 / 中文 / 한국) lives inside the drawer; “Talk to a Medical Guide” stays visible in the top bar — compact icon button on Mobile, short text button on Tablet. Sticky on scroll.

### Footer
- **Desktop**: 5-column grid (About + 4 link columns).
- **Tablet**: 2-column grid; About spans full width with logo + IMA registration card side-by-side.
- **Mobile**: accordion sections, IMA registration card surfaced at the top of About.

### Layout reflow rules
| Pattern | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero with side image | Image stacks below headline. No overlay cards. | Image stacks below headline. | Side-by-side (existing). |
| 5-card rows (treatments) | Horizontal swipe carousel + dot indicator | 2 per row | 3–5 per row |
| 4-step “How It Works” | Vertical stack with vertical connector rail | Horizontal 2×2 grid | Horizontal row |
| Testimonial cards | 1-up swipe carousel | 2-up grid | 3-up grid |
| Multi-column rows | Single column | 2 columns | Full multi-column |
| Filter rails | Inline chip row + sheet trigger | Horizontal chips | Left rail |
| Admin lead list | Lead-cards + bottom-tab nav | Condensed sidebar + 4-stat grid + table | Full sidebar + 4-stat row + 8-col table |
| Admin lead detail | Sticky bottom CTA bar | Sidebar + main column | 2-col main + right rail |

### Touch targets & typography
- All interactive elements ≥ **44 × 44px** on Mobile (drawer items, chips, buttons, form fields, social icons).
- Display heading scale:
  - Display: 56 → 48 (T) → 36 (M)
  - H1: 40 → 36 (T) → 28 (M)
  - H2: 32 → 28 (T) → 24 (M)
  - Body: 18 → 17 (T) → 16 (M); minimum 13px on dense data rows.

### Components added (responsive helpers)
- `HeaderResponsive` — hamburger + language drawer + compact CTA
- `FooterResponsive` — accordion (M) / 2-col (T)
- `TrustRow` — horizontally scrollable trust pills for narrow viewports
- `.swipe` / `.swipe-dots` — snap-scroll carousels
- `.steps-vert` — vertical “How It Works” connector
- `.lead-card` — mobile lead-row card replacing the desktop table
- `.sticky-cta-m` — sticky bottom CTA bar (treatment detail, admin detail)
- `AdmBottomNav` — mobile admin tab bar
- `AdmSideCompact` — narrowed sidebar for tablet admin

---

## 4. Compliance Choices Built In

K-Med Global is positioned as an **international patient agency**, not a clinical provider. The mockups reflect Korean Medical Tourism Promotion Act conventions:

- ✅ **No before/after imagery** anywhere in the site
- ✅ **No automated price calculators** — pricing shown as ranges with "Request estimate" CTA only
- ✅ **Disclaimer banner** on treatment detail (indicative ranges, doctor-issued estimates)
- ✅ **No superlative claims** ("best in Korea", "guaranteed results") — copy stays evidence-based
- ✅ **Footer space reserved** for IMA registration number
- ✅ **Consent log** referenced in admin lead detail (privacy / marketing opt-out tracked)

---

## 5. Design System Patterns Established

- **Section eyebrow** → 12px Lato 700, navy, 0.12em letter-spacing
- **Section title** → 52px Lato 900, -0.01em tracking
- **Stats** → green-dark numerals on warm-canvas card
- **Pills** → status colors (`new` aqua / `review` amber / `matched` green / `scheduled` pink / `closed` gray)
- **Cards** → 24px padding, 16px radius, hairline `--kmed-line` border
- **CTA banner** → diagonal navy→aqua gradient with white pill button
- **Page hero** → pink wash + aqua circular ring, breadcrumbs above title

---

## 6. Open Items / Next Steps

- [x] ~~Mobile / tablet breakpoints~~ — added 2026-05-09
- [ ] Real partner hospital logos & patient avatars (currently initials placeholders)
- [ ] Localized header (JP / CN / TW / RU language switching wired up)
- [ ] Real photography for hero & treatment detail (placeholder gradients in use)
- [ ] Tweaks panel for live brand color / type swaps if needed for stakeholder review
- [ ] Booking / scheduling flow (post-match) — not yet in scope
- [ ] Doctor profile detail page — referenced from treatments but not yet designed
- [ ] Intermediate breakpoints (480, 1024, 1280) if device QA surfaces gaps
- [ ] Motion / interaction spec for drawer open, accordion expand, swipe inertia

---

## 7. Changelog

- **2026-05-09 · Tone & manner visual mockup (Home / Desktop 1440)**
  - New file `kmed-home-visual.jsx` exporting `HomePageVisual` — drop-in replacement for the desktop Home with all placeholders upgraded to inline SVG illustration. No real photos, no faces, no before/after, no superlatives.
  - **Hero illustration** — editorial side-view scene (window with abstract Korean modernist skyline, soft pink curtain, side table with tea, document folder with ECG line, glasses, bud vase, plant, drifting paper plane). Conveys concierge welcome / calm care without depicting people.
  - **Treatment card visuals (×6)** — each category gets a distinct SVG motif on a brand-token gradient: Dermatology = pearl/dewdrop circles · Health Screening = concentric rings + pulse line · Orthopedics = articulated spine curve · Plastic Surgery = φ golden-ratio grid + spiral · Oncology = molecular network nodes · Dental = arch + tooth ticks (no face).
  - **Partner hospital monograms (×8)** — custom geometric marks on token-color tiles (peak, diamond, open book, S-rod, K, wave, stethoscope loops, vertical beads). Section now carries an italic disclaimer noting these are representative monograms / placeholders for real partner logos.
  - **Patient story avatars (×3)** — abstract pattern circles (ripple / dot grid / arc) replace letter initials. No faces.
  - Standalone preview page: `home-visual.html` renders `HomePageVisual` at Desktop 1440px on a centered stage card.
  - Compliance re-verified: zero before/after, zero faces, zero superlatives, pricing remains "range + Request estimate" only.
  - Verifier subagent confirmed: hero illustration framed correctly, 6/6 treatment cards distinct, 8/8 hospital monograms rendered, 3/3 pattern avatars rendered.

- **2026-05-09 · Padding & tablet grid fix pack**
  - Added `kmed-responsive-3.css` to enforce horizontal section gutters across all responsive pages — Mobile **16px**, Tablet **28px** — fixing flush-to-edge content on hero, cards, forms, filter rails, and admin tables.
  - Forced `box-sizing: border-box` on all section/card/grid descendants so width clamps don't get blown out by inner padding.
  - Tablet Home now shows **all 6 treatments** (was sliced to 4) and **all stories** (was sliced to 2) in a proper **2-col grid** — matches reflow rules table.
  - Linked `kmed-responsive-3.css` from both `index.html` and `index-print.html`.
  - Verifier subagent confirmed: 16px/28px gutters present, tablet grids reflowing 2-up.

- **2026-05-09 · Mobile fix pack**
  - Root cause: responsive components rendered class `.kmed-page--m` / `.kmed-page--t` but the CSS targeted `[data-bp="mobile"]` / `[data-bp="tablet"]`, so the base `.kmed-page { width: 1440px }` was winning on every breakpoint and content was bleeding ~1065px past the right edge of every Mobile artboard.
  - Patched both `kmed-responsive.css` and `kmed-responsive-2.css` to also target the actual class names (`.kmed-page--m` / `.kmed-page--t` / `.adm--m` / `.adm--t`).
  - Added `kmed-responsive-2.css` mobile fix pack:
    - Hard 375px width clamp + `box-sizing: border-box` + `overflow: hidden` on page root.
    - Forces all `.row` / `.grid-2/3/4` / `.form-row` / `.stats-row` to single column on Mobile; stats use 2×2.
    - Hero overlays (Trust pills, lang strip, hero stats) forced to `position: static` and stacked below hero.
    - Form fields and inputs forced to 100% width with min-height 44px.
    - Chip rows scroll horizontally instead of overflowing.
  - Refactored `HeaderResponsive` — drawer is now an overlay panel rendered ONLY when `drawerOpen={true}`. Default state is just the bar (logo · CTA · hamburger). Drawer overlay adds scrim + slide-in panel + close button + language chips + nav + footer CTA.
  - `index.html` now picks the proper component per breakpoint: `*Responsive` for Mobile and Tablet, original full-fidelity desktop page for Desktop. Previously Mobile and Tablet were also feeding the desktop component into a 375/768 frame.
  - Fixed Get Matched "Back" button — `transform: scaleX(-1)` is now wrapped only around the arrow `<Icon>`, never the "Back" text. Button reads correctly LTR with arrow pointing left.
  - Verified: `getComputedStyle(.kmed-page--m).width === "375px"`, content overflow = 0px on Mobile artboards.

- **2026-05-09 · Responsive set added**
  - 9 pages × 3 breakpoints (375 / 768 / 1440) laid out in the design canvas.
  - Hamburger drawer header with in-drawer language switcher.
  - Footer accordion (M) / 2-col (T) / full grid (D).
  - Carousel, vertical-step, lead-card, sticky CTA, and bottom-nav patterns introduced — all using existing design system tokens.
  - 44px minimum touch targets across all interactive elements on Mobile.
- **2026-05-08 · Initial desktop set**
  - 9 desktop mockups (Home, Treatments, Detail, Get Matched, Why Korea, Stories, Contact, Admin List, Admin Detail).
  - Compliance constraints baked in (no before/after, no automated pricing, IMA registration footer slot).

---

*Last updated: 2026-05-09*
