---
name: CHIN 203 Grammar
description: Clean editorial deck for communicative Chinese grammar lessons — deep-blue accent, large 楷体 target text, English meta-language, contrasting grammar parts shown as tinted boxes.
mode: light
---

# CHIN 203 Grammar

A calm, reading-friendly teaching theme for CHIN 203 grammar decks (IC L16–L20, IC3 L1–L3). White canvas, one deep-blue accent, warm rose reserved for the *opposite pole* of a contrast. Big 楷体 for the target Chinese; italic Times for all meta-language. Contrasting grammar components (得/不, 就/才, 能/不能) are shown as **tinted slot boxes**, never colored stripes. Pages breathe: one idea per page, content vertically centered, generous even gaps.

**Language rule (non-negotiable):** everything the students must *produce or read as target language* is Chinese and stays within their current level; everything that is *meta-language* — slide titles, structure labels, task instructions, hints — is **English**. Never put an above-level Chinese sentence in a heading (no "快而容易，还是慢又费力？", no "说数目"). Headings are English functional questions.

## Palette

| Role        | Value     | Notes                                             |
| ----------- | --------- | ------------------------------------------------- |
| bg          | `#ffffff` | page background                                   |
| text        | `#16273f` | primary copy (ink)                                |
| accent      | `#1f4e9a` | target particle/structure highlight, eyebrow      |
| rose        | `#b23a48` | the *opposite* pole of a contrast (不 / 才 / 不能) |
| slate       | `#41597c` | English functional headings                       |
| muted       | `#6a768a` | pinyin, English glosses                           |
| faint       | `#aab4c3` | page number, corner tag, chip borders             |
| tint.target | `#eaf1f9` | box fill — target component (得, 就)               |
| tint.pos    | `#e9f3ec` | box fill — positive/able pole (能, 容易/早)        |
| tint.neg    | `#fbeceb` | box fill — negative/hard pole (不, 才, 难/晚)      |
| tint.neutral| `#eef2f8` | box fill — plain slot (动词, 〈结果〉)              |
| line        | `#d6deea` | box borders, dividers                             |

## Typography

- Display font (Chinese): `"LXGW WenKai GB Screen","LXGW WenKai",serif` — 楷体, weight 600–700. Primary is the **LXGW WenKai** webfont (loaded below) so 楷体 renders even when no matching local font is installed; if the user installs LXGW WenKai locally, `local()` in the webfont CSS uses it directly (no download). `serif` is the last-resort fallback.
- Body font (English / pinyin): `"Times New Roman",Times,serif` — italic for glosses and labels.
- Webfont import (Kai): `https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css` — family `LXGW WenKai GB Screen`, GB (simplified) screen-reading build, already unicode-range subsetted with `local()` first. Load it per `references/webfonts.md` using the module-top-level, slide-keyed injection in **Fixed components → Webfont loader** below.
- Type scale (**deliberately large + reading-friendly**; overrides `slide-authoring` defaults):
  - Cover title: 120 px · cover sub-topic: 84 px
  - English functional heading: 40 px (italic slate)
  - Target example sentence: **64 px**, line-height 1.45
  - Formula slot box (Chinese): 56 px · slot label (English): 26 px italic
  - Dialogue / practice sentence: 48–52 px
  - Pinyin & English gloss: 30 px italic muted
  - Chips / Use-strip items: 36 px
  - Corner tag & page number: 24 px

## Layout

- Canvas 1920 × 1080. Padding **120 px top/bottom, 108 px left/right**.
- **Vertically centered** content column (`justifyContent: 'center'`) so pages never crowd the top — this is the "even distribution" rule. Use gaps of 20–56 px between blocks; keep one clear focus per page.
- Left-aligned content; center only the cover title block if desired.
- Corner tag top-right (`语法（N）`); footer bottom with lesson label + page number.
- Contrast is carried by **box fill color** (tint.target / tint.pos / tint.neg), not by underlines or edge stripes.

## Fixed components

Paste-ready. Copy the shared consts plus the components into `slides/<id>/index.tsx`. Swap the Footer's lesson label (`CHIN 203 · 语法`) for the real one (`第十六课 · 约会`) per deck, and the corner `tag` for the right `语法（N）`.

```tsx
const KAI = '"LXGW WenKai GB Screen","LXGW WenKai",serif';
const TNR = '"Times New Roman",Times,serif';
const INK = '#16273f', ACCENT = '#1f4e9a', ROSE = '#b23a48', SLATE = '#41597c', MUTED = '#6a768a', FAINT = '#aab4c3';
const TONE: Record<string, { bg: string; border: string; text: string }> = {
  neutral: { bg: '#eef2f8', border: '#d6deea', text: INK },
  target:  { bg: '#eaf1f9', border: ACCENT,   text: ACCENT },
  pos:     { bg: '#e9f3ec', border: '#2f8f5b', text: '#1f6d43' },
  neg:     { bg: '#fbeceb', border: ROSE,     text: ROSE },
};
```

### Webfont loader

Paste at the **module top level** of `index.tsx` (not inside a component), and suffix the id with the slide's folder id so each slide loads its own copy (per `references/webfonts.md`).

```tsx
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-<slide-id>'; // e.g. osd-webfont-l17-yufa-1
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID;
  link.rel = 'stylesheet';
  link.href = FONT_HREF;
  document.head.appendChild(link);
}
```

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 style={{ fontFamily: KAI, fontSize: 120, fontWeight: 700, lineHeight: 1.1, margin: 0, color: INK }}>
    {children}
  </h1>
);
```

### Eyebrow

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: KAI, fontSize: 30, letterSpacing: '0.14em', color: ACCENT }}>{children}</div>
);
```

### Footer

Pull the page number from `useSlidePageNumber()` — never hardcode it.

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 108, right: 108, bottom: 52, display: 'flex', justifyContent: 'space-between', fontFamily: KAI, fontSize: 24, color: FAINT }}>
      <span>第十六课 · 约会</span>
      <span style={{ fontFamily: TNR }}>{current} / {total}</span>
    </div>
  );
};
```

### Frame

Vertically-centered white sheet with corner tag + footer.

```tsx
const Frame = ({ children, tag }: { children: React.ReactNode; tag?: string }) => (
  <div style={{ width: '100%', height: '100%', background: '#ffffff', color: INK, position: 'relative', overflow: 'hidden', padding: '120px 108px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    {tag && <div style={{ position: 'absolute', top: 52, right: 108, fontFamily: KAI, fontSize: 24, letterSpacing: '0.1em', color: FAINT }}>{tag}</div>}
    {children}
    <Footer />
  </div>
);
```

### Functional heading + glosses + target highlight

Headings are English. `T` highlights the target particle in accent; `O` marks the opposite pole in rose.

```tsx
const FnHeading = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: TNR, fontSize: 40, color: SLATE, fontStyle: 'italic', marginBottom: 36 }}>{children}</div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: ACCENT, fontWeight: 700 }}>{children}</span>;
const O = ({ children }: { children: React.ReactNode }) => <span style={{ color: ROSE, fontWeight: 700 }}>{children}</span>;
const En = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: TNR, fontSize: 30, color: MUTED, fontStyle: 'italic', marginLeft: 20 }}>{children}</span>;
```

### SBox — tinted grammar slot (the contrast device)

`tone` picks the fill: `neutral` plain slot, `target` the taught particle, `pos`/`neg` the two poles of a contrast. This is how contrasting components read at a glance.

```tsx
const SBox = ({ en, zh, tone = 'neutral' }: { en: string; zh: string; tone?: keyof typeof TONE }) => {
  const t = TONE[tone];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ fontFamily: TNR, fontSize: 26, color: MUTED, fontStyle: 'italic' }}>{en}</div>
      <div style={{ fontFamily: KAI, fontSize: 56, fontWeight: 600, lineHeight: 1, color: t.text, padding: '18px 30px', borderRadius: 14, minWidth: 120, textAlign: 'center', background: t.bg, border: `2px solid ${t.border}` }}>{zh}</div>
    </div>
  );
};
const Plus = () => <div style={{ fontFamily: TNR, fontSize: 44, color: FAINT, alignSelf: 'center', paddingTop: 30 }}>+</div>;
```

### Example sentence & Use-strip

```tsx
const Example = ({ zh, en }: { zh: React.ReactNode; en: string }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', fontFamily: KAI, fontSize: 64, lineHeight: 1.45, color: INK }}>
    <span>{zh}</span><En>{en}</En>
  </div>
);
const UseStrip = ({ items }: { items: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
    <span style={{ fontFamily: TNR, fontSize: 28, color: ACCENT, fontStyle: 'italic' }}>Use ↓</span>
    {items.map((w, i) => (
      <span key={i} style={{ fontFamily: KAI, fontSize: 36, padding: '8px 22px', border: `1.5px solid ${FAINT}`, borderRadius: 44, color: SLATE }}>{w}</span>
    ))}
  </div>
);
```

## Motion

- Philosophy: **subtle** — content is already dense with meaning; motion only helps guided reveal.
- Prefer the framework's `<Steps>` / `<Step>` to reveal examples one line at a time while the teacher drills (逐步揭示). Fall back to this fade for entrance only:

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

Clean bilingual textbook, not a pitch deck. One deep blue does the teaching work; warm rose appears *only* as the far side of a contrast so 得/不, 就/才, 能/不能 separate at a glance through box color. Big 楷体 target text with a quiet italic-Times English gloss beside it. Whitespace is a feature: vertically centered columns, even gaps, one focus per page. Avoid — colored stripes/bars, underlined titles, gradients, decorative emoji, and any Chinese meta-language above the students' level.

**Page structure for a grammar deck (communicative "present → drill → package"):**

1. Cover — Chinese topic (Title) + English functional line + `语法（N）` tag.
2. Structure — English `FnHeading`, a row of `SBox` (`+` `Plus`), 2 big `Example`s with `T` highlight and `En` gloss.
3. Concept clarify (if needed) — two/three `SBox` in `pos`/`neg` tones side by side, or a small tinted table.
4. Guided practice — one target sentence, image slot + option box, verb menu.
5. Pair / info-gap — sentence frame + menu, or a two-column able/unable table, or a dialogue model with `UseStrip`.
6. Packaging — Student A / Student B role cards + `UseStrip` of every target pattern; mirror the textbook Language Practice activity.
7. Talk about yourself — 6 personalized questions in the target structure + teacher-flow footer.
8. Exit ticket + homework — one production prompt + a homework box (from the schedule's assignment column).

## Example usage

```tsx
const Cover: Page = () => (
  <Frame tag="语法（一）">
    <Eyebrow>第十六课　约会 · 语法（一）</Eyebrow>
    <div style={{ height: 32 }} />
    <Title>玩儿得很高兴</Title>
    <div style={{ fontFamily: KAI, fontSize: 84, fontWeight: 600, color: ACCENT, marginTop: 8 }}>六点半回不来</div>
    <div style={{ fontFamily: TNR, fontSize: 34, color: SLATE, fontStyle: 'italic', marginTop: 44 }}>
      How well you do something · whether you can or can’t do it
    </div>
  </Frame>
);
```
