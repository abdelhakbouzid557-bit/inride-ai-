# INRIDE AI — Web Project Conventions

## Non-Negotiable Design Governance

> **Libraries are technical foundations.**
> **The INRIDE AI Design System controls the visual identity.**
> **Never allow a UI library's default appearance to define the INRIDE AI brand.**

- shadcn/ui, Radix, and any UI library are **headless / technical primitives only**.
- All visual styling (colors, radii, shadows, typography, spacing) MUST come from the INRIDE AI design tokens in `app/globals.css` — never from a library's default theme.
- If a component needs styling, restyle it with the tokens below. Do not ship default library colors.

## Brand Tokens (single source of truth: `app/globals.css` @theme)

| Token | Value |
|---|---|
| `primary` | `#4346EE` |
| `primary-strong` (hover) | `#3639D6` |
| `primary-soft` | `#F1F1FE` |
| `ink` (primary text) | `#15171E` |
| `ink-mute` (secondary text) | `#626775` |
| `ink-faint` | `#9CA3AF` |
| `bg-soft` | `#F8F9FC` |
| `border` | `#E8EAF0` |
| Success | `#16A34A` |
| Error | `#DC2626` |
| Warning | `#F59E0B` |

- **No violet / purple / indigo tones anywhere.** `#4346EE` must always read as pure blue.
- Semantic accents (green = success, amber = warning, red = error) are allowed for meanings only.

## Brand Logo (LOCKED ASSET)

- `public/LOGO5.png` is the single source of truth for the INRIDE AI brand mark.
- **Never redraw, recreate, modify, or re-color the logo.** Only control placement, scale, white-space, and contrast (prefer a light/white background behind it).
- Favicon and all logo references must point to `/LOGO5.png`.

## Fonts

- Inter (Latin) + Noto Sans Arabic per Google Fonts `display=swap`. No other font families.

## Tech Stack (Web)

- Next.js + TypeScript + Tailwind CSS v4
- Lucide React (icons) + Motion / framer-motion (animation)
- shadcn/ui + Radix / Base UI primitives = headless, styled strictly via the tokens above
- GSAP only when strictly necessary (advanced scroll choreography)

## Copy / Content

- Arabic-first, trilingual (AR / FR / EN), full RTL. Every string lives in `lib/translations.ts`.
- All user-facing content is Arabic unless otherwise specified.