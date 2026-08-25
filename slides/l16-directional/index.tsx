import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';

// 教师原有 pptx 的插图
import imgStairs from './assets/stairs.png';
import imgHouse from './assets/house.png';
import imgFigure from './assets/figure.png';
import imgRain from './assets/rain.png';
import imgUmbrella from './assets/umbrella.png';
import imgFire from './assets/fire.png';
import imgFirefighter from './assets/firefighter.png';
import imgCrowd from './assets/crowd.jpg';
import imgNo from './assets/no.png';
import imgHand from './assets/hand.png';
import imgWakeup from './assets/wakeup.jpg';
import imgChair from './assets/chair.png';
import imgRecycle from './assets/recycle.jpg';
import imgCans from './assets/cans.jpg';

// Kai webfont (LXGW WenKai GB Screen) — renders 楷体 without a local install; local() used if present.
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-directional';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 趋向补语（优化整合版）
   Directional Complements (II) — one systematic module, split into
   Part 1 简单趋向 (direction + 来/去) and Part 2 复合趋向 (verb + direction + 来/去)
   由浅入深 + 图表 + 逐步揭示　·　目标语言=中文；后设语言=English
   白 + 深蓝 · LXGW WenKai · Times New Roman
   ═══════════════════════════════════════════════════════════════════════════ */

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#16273f', accent: '#1f4e9a' },
  fonts: { display: '"LXGW WenKai GB Screen", "LXGW WenKai", serif', body: '"Times New Roman", Times, "PingFang SC", serif' },
  typeScale: { hero: 128, body: 56 }, radius: 8,
};
const c = { bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', slate: '#41597c', muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea', good: '#1f4e9a', markHi: 'rgba(31,78,154,0.14)' };
const kai = 'var(--osd-font-display)';
const tnr = '"Times New Roman", Times, serif';
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };
const Frame = ({ children, tag = '语法 · 趋向补语' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十六课 约会</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const Hl = ({ children }: { children: React.ReactNode }) => <span style={{ background: `linear-gradient(transparent 56%, ${c.markHi} 56%)`, padding: '0 3px' }}>{children}</span>;
const HlY = ({ children }: { children: React.ReactNode }) => <span style={{ background: 'linear-gradient(transparent 55%, rgba(242,199,54,0.55) 55%)', padding: '0 3px' }}>{children}</span>;
const Blank = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.slate }}>{children}</span>;
const En = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: tnr, fontSize: 30, color: c.muted, fontStyle: 'italic', marginLeft: 20 }}>{children}</span>;
const EnTag = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 28, color: c.slate, marginBottom: 16 }}>{children}</div>;

const SBox = ({ en, zh, fixed = false, blank = false }: { en: string; zh: string; fixed?: boolean; blank?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
    <div style={{ fontFamily: tnr, fontSize: 23, color: fixed ? c.accent : c.muted, fontStyle: 'italic' }}>{en}</div>
    <div style={{ fontFamily: kai, fontSize: 46, fontWeight: 600, lineHeight: 1, color: fixed ? c.accent : (blank ? c.slate : c.ink), padding: '15px 22px', borderRadius: 12, minWidth: 88, textAlign: 'center', border: `2px solid ${fixed ? c.accent : c.line}`, background: fixed ? 'rgba(31,78,154,0.06)' : c.panel, borderStyle: blank ? 'dashed' : 'solid' }}>{zh}</div>
  </div>
);
const Plus = () => <div style={{ fontFamily: tnr, fontSize: 38, color: c.faint, paddingBottom: 12, alignSelf: 'flex-end' }}>+</div>;
const Diagram = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>{children}</div>;

const Sg = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Vv = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>{children}</svg>;
const icoCoffee = <Vv><g {...Sg}><path d="M24 40 H70 V60 a16 16 0 0 1 -16 16 H40 a16 16 0 0 1 -16 -16 Z" /><path d="M70 44 H80 a8 8 0 0 1 0 16 H70" /><path d="M36 30 q4 -6 0 -12 M50 30 q4 -6 0 -12" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoFruit = <Vv><g {...Sg}><path d="M50 32 C40 22 24 28 26 44 C28 62 42 78 50 80 C58 78 72 62 74 44 C76 28 60 22 50 32 Z" /><path d="M50 32 V22 M50 24 q8 -6 14 -2" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoSheet = <Vv><g {...Sg}><path d="M30 16 H62 L74 30 V84 H30 Z" /><path d="M62 16 V30 H74" /><path d="M40 46 H64 M40 58 H64 M40 70 H56" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoBook = <Vv><g {...Sg}><path d="M28 20 H68 a6 6 0 0 1 6 6 V80 H34 a6 6 0 0 1 -6 -6 Z" /><path d="M34 74 H74" /><path d="M40 34 H62 M40 46 H62" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoBox = <Vv><g {...Sg}><path d="M20 38 L50 26 L80 38 V70 L50 82 L20 70 Z" /><path d="M20 38 L50 50 L80 38 M50 50 V82" strokeWidth={3.2} /><path d="M35 32 L65 44" stroke={c.accent} /></g></Vv>;

const Ill = ({ ico, zh, py, w, h }: { ico: React.ReactNode; zh: string; py: string; w: number; h: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{ width: w, height: h, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}><div style={{ width: '58%', height: '58%' }}>{ico}</div></div>
    <div style={{ textAlign: 'center' }}><div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{py}</div><div style={{ fontFamily: kai, fontSize: 34, fontWeight: 600 }}>{zh}</div></div>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 40, padding: '7px 24px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const DLine = ({ who, whoColor, size = 46, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, marginBottom: 22, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: whoColor, flex: '0 0 120px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.35 }}>{children}</span>
  </div>
);
const QNum = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
    <span style={{ fontFamily: tnr, fontSize: 32, color: c.accent }}>{n}</span>
    <span style={{ fontFamily: kai, fontSize: 42, lineHeight: 1.35 }}>{children}</span>
  </div>
);
const RoleCard = ({ label, lines }: { label: string; lines: React.ReactNode[] }) => (
  <div style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '26px 30px' }}>
    <div style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic', marginBottom: 18 }}>{label}</div>
    {lines.map((l, i) => <div key={i} style={{ fontFamily: kai, fontSize: 36, lineHeight: 1.45, marginBottom: 12, color: c.ink }}>{l}</div>)}
  </div>
);
const UseStrip = ({ items }: { items: string[] }) => (
  <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
    <span style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic' }}>Use&nbsp;↓</span>
    {items.map((w, i) => <span key={i} style={{ fontFamily: kai, fontSize: 34, padding: '6px 20px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>)}
  </div>
);

// ── NEW: reference grid (direction × 来/去) ──────────────────────────────────
const RefTable = ({ rows }: { rows: { dir: string; en: string; lai: string; qu: string }[] }) => {
  const cell = { padding: '14px 8px', textAlign: 'center' as const, borderTop: `1px solid ${c.line}` };
  return (
    <div style={{ border: `2px solid ${c.line}`, borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: c.panel }}>
        <div style={{ padding: '14px 20px', fontFamily: tnr, fontSize: 26, fontStyle: 'italic', color: c.slate }}>direction</div>
        <div style={{ padding: '14px 8px', textAlign: 'center', fontFamily: tnr, fontSize: 26, color: c.accent }}><span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700 }}>来</span> toward me</div>
        <div style={{ padding: '14px 8px', textAlign: 'center', fontFamily: tnr, fontSize: 26, color: c.slate }}><span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700 }}>去</span> away from me</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', alignItems: 'center' }}>
          <div style={{ padding: '14px 20px', borderTop: `1px solid ${c.line}`, display: 'flex', alignItems: 'baseline', gap: 14 }}>
            <span style={{ fontFamily: kai, fontSize: 40, fontWeight: 700 }}>{r.dir}</span>
            <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{r.en}</span>
          </div>
          <div style={{ ...cell, fontFamily: kai, fontSize: 40 }}>{r.lai === 'x' ? <span style={{ fontSize: 28, color: c.faint }}>不说</span> : <>{r.dir}<T>来</T></>}</div>
          <div style={{ ...cell, fontFamily: kai, fontSize: 40 }}>{r.qu === 'x' ? <span style={{ fontSize: 28, color: c.faint }}>不说</span> : <>{r.dir}<T>去</T></>}</div>
        </div>
      ))}
    </div>
  );
};

// ── NEW: word bank + numbered gap-fill line with Steps answer reveal ─────────
const Bank = ({ words }: { words: string[] }) => (
  <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 22px', display: 'flex', flexWrap: 'wrap', gap: '10px 20px' }}>
    <span style={{ fontFamily: tnr, fontSize: 24, color: c.accent, fontStyle: 'italic', alignSelf: 'center' }}>word bank</span>
    {words.map((w, i) => <span key={i} style={{ fontFamily: kai, fontSize: 34, color: c.slate }}>{w}</span>)}
  </div>
);
const Gap = ({ n, pre, ans, post, gloss }: { n: number; pre: string; ans: string; post?: string; gloss?: string }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', whiteSpace: 'nowrap' }}>
    <span style={{ fontFamily: tnr, fontSize: 28, color: c.accent }}>{n}</span>
    <span style={{ fontFamily: kai, fontSize: 40, lineHeight: 1.3 }}>
      {pre}
      <span style={{ display: 'inline-block', minWidth: 150, textAlign: 'center', borderBottom: `2px solid ${c.faint}`, margin: '0 6px', verticalAlign: 'baseline' }}>
        <Step><span style={{ color: c.accent, fontWeight: 700 }}><HlY>{ans}</HlY></span></Step>
      </span>
      {post}
      {gloss && <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginLeft: 12 }}>{gloss}</span>}
    </span>
  </div>
);

// ── NEW: three-column sentence builder (verb + direction + 来/去) ────────────
const BuildCard = ({ zh, py, en }: { zh: string; py: string; en: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '10px 14px', border: `1.5px solid ${c.line}`, borderRadius: 14, background: c.bg, minWidth: 130 }}>
    <span style={{ fontFamily: kai, fontSize: 56, fontWeight: 700, lineHeight: 1.05, color: c.ink }}>{zh}</span>
    <span style={{ fontFamily: tnr, fontSize: 23, fontStyle: 'italic', color: c.accent }}>{py}</span>
    <span style={{ fontFamily: tnr, fontSize: 20, fontStyle: 'italic', color: c.muted }}>{en}</span>
  </div>
);
const BuildCol = ({ label, en, cards, color }: { label: string; en: string; cards: { zh: string; py: string; en: string }[]; color: string }) => (
  <div style={{ flex: 1, border: `2px solid ${c.line}`, borderRadius: 16, padding: '20px 16px 24px', background: c.panel }}>
    <div style={{ textAlign: 'center', marginBottom: 16 }}>
      <div style={{ fontFamily: kai, fontSize: 40, fontWeight: 700, color }}>{label}</div>
      <div style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{en}</div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
      {cards.map((cd, i) => <BuildCard key={i} {...cd} />)}
    </div>
  </div>
);

// ── 圖片元件 ────────────────────────────────────────────────────────────────
const Pic = ({ src, h, alt = '' }: { src: string; h: number; alt?: string }) => (
  <img src={src} alt={alt} style={{ height: h, width: 'auto', objectFit: 'contain', display: 'block' }} />
);

// 空間圖示：一張情境圖 ＋「我在哪裡」對應的兩句話
const SpatialCard = ({ img, imgH, where, lines }: { img: string; imgH: number; where: string; lines: React.ReactNode[] }) => (
  <div style={{ flex: 1, border: `2px solid ${c.line}`, borderRadius: 16, background: c.bg, padding: '22px 26px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
    <div style={{ height: imgH, display: 'flex', alignItems: 'center' }}><Pic src={img} h={imgH} /></div>
    <div style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: c.accent, background: 'rgba(31,78,154,0.08)', border: `1.5px solid ${c.accent}`, borderRadius: 40, padding: '6px 26px' }}>{where}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
      {lines.map((l, i) => <div key={i} style={{ fontFamily: kai, fontSize: 48, lineHeight: 1.3 }}>{l}</div>)}
    </div>
  </div>
);

// 情境卡：圖 ＋ 一句挖空的話（答案逐步揭示）
const SitCard = ({ imgs, imgH, pre, ans, post }: { imgs: string[]; imgH: number; pre: string; ans: string; post: string }) => (
  <div style={{ flex: 1, border: `2px solid ${c.line}`, borderRadius: 16, background: c.bg, padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    <div style={{ height: imgH, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 10 }}>
      {imgs.map((s, i) => <Pic key={i} src={s} h={imgH} />)}
    </div>
    <div style={{ fontFamily: kai, fontSize: 34, lineHeight: 1.35, textAlign: 'center' }}>
      {pre}
      <span style={{ display: 'inline-block', minWidth: 116, textAlign: 'center', borderBottom: `2px solid ${c.faint}`, margin: '0 6px' }}>
        <Step><span style={{ color: c.accent, fontWeight: 700 }}><HlY>{ans}</HlY></span></Step>
      </span>
      {post}
    </div>
  </div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

// 1 · Cover
const Cover: Page = () => (
  <Frame tag="语法 · 趋向补语">
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 语法</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 116, fontWeight: 700, lineHeight: 1.1, color: c.ink }}>趋向补语</div>
      <div style={{ fontFamily: kai, fontSize: 72, fontWeight: 600, color: c.accent, marginTop: 8 }}>她走下楼来</div>
      <div style={{ fontFamily: tnr, fontSize: 34, color: c.slate, marginTop: 40, fontStyle: 'italic' }}>Directional complements · which way someone or something moves, toward me (来) or away (去)</div>
    </div>
  </Frame>
);

// 2 · Big picture — the three layers
const BigPicture: Page = () => (
  <Frame tag="语法 · 趋向补语">
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <EnTag>Three building blocks, from simple to full</EnTag>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          { n: '1', tag: '来 / 去', en: 'come / go', ex: <>他<T>来</T>了。他<T>去</T>了。</>, g: 'He came. He went.', note: undefined as string | undefined },
          { n: '2', tag: '方向 + 来/去', en: 'direction + 来/去', ex: <>他<T>进来</T>了。他<T>出去</T>了。</>, g: 'came in / went out', note: '上　下　进　出　回　过　起　开　到' },
          { n: '3', tag: '动词 + 方向 + 来/去', en: 'verb + direction + 来/去', ex: <>他<T>走进来</T>了。他<T>搬回去</T>了。</>, g: 'walked in / moved back', note: undefined as string | undefined },
        ].map((r) => (
          <div key={r.n} style={{ display: 'flex', alignItems: 'center', gap: 28, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: '18px 28px' }}>
            <div style={{ fontFamily: tnr, fontSize: 40, color: c.accent, fontWeight: 700, width: 40 }}>{r.n}</div>
            <div style={{ width: 400 }}>
              <div style={{ fontFamily: kai, fontSize: 42, fontWeight: 700 }}>{r.tag}</div>
              <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{r.en}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: kai, fontSize: 44 }}>{r.ex}<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 16 }}>{r.g}</span></div>
              {r.note && <div style={{ fontFamily: kai, fontSize: 30, color: c.accent, marginTop: 8, letterSpacing: '0.04em' }}><span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic', marginRight: 14 }}>e.g.</span>{r.note}</div>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, fontFamily: tnr, fontSize: 28, color: c.slate, fontStyle: 'italic' }}>Today: block 2 (Part 1) and block 3 (Part 2).</div>
    </div>
  </Frame>
);

// 3 · Core concept — 来/去 = where is the speaker?
const Concept: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 120, left: PAD, right: PAD }}>
      <EnTag>The key question: where is the speaker? 来 = toward me · 去 = away from me</EnTag>
      <Diagram>
        <SBox en="Verb" zh="动词" />
        <Plus />
        <SBox en="place / thing" zh="地方 / 东西" blank />
        <Plus />
        <SBox en="toward / away" zh="来 / 去" fixed />
      </Diagram>
      <div style={{ marginTop: 40 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 54, fontWeight: 500, marginBottom: 20 }}>她下楼<T>来</T>。<En>comes down 【I am downstairs】</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 54, fontWeight: 500, marginBottom: 20 }}>她上楼<T>去</T>。<En>goes up 【I am downstairs】</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 54, fontWeight: 500 }}>请你买一些水果<T>来</T>。<En>bring some fruit here (课文)</En></div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

// NEW · 上/下 空間圖示（樓梯）
const StairsSpatial: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <EnTag>Same action, different word · it depends on where I am standing</EnTag>
      <div style={{ display: 'flex', gap: 40, marginTop: 8 }}>
        <SpatialCard img={imgStairs} imgH={250} where="我在楼下" lines={[
          <>她下楼<T>来</T>。</>,
          <>她上楼<T>去</T>。</>,
        ]} />
        <SpatialCard img={imgStairs} imgH={250} where="我在楼上" lines={[
          <>她上楼<T>来</T>。</>,
          <>她下楼<T>去</T>。</>,
        ]} />
      </div>
      <div style={{ marginTop: 24, fontFamily: tnr, fontSize: 28, color: c.slate, fontStyle: 'italic' }}>
        来 = the person moves toward me　·　去 = the person moves away from me
      </div>
    </div>
  </Frame>
);

// 4 · Reference table 1 — direction + 来/去
const Table1: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>Reference · direction word + 来/去　·　把方向字加上来／去</EnTag>
      <RefTable rows={[
        { dir: '上', en: 'up', lai: '上来', qu: '上去' },
        { dir: '下', en: 'down', lai: '下来', qu: '下去' },
        { dir: '进', en: 'in', lai: '进来', qu: '进去' },
        { dir: '出', en: 'out', lai: '出来', qu: '出去' },
        { dir: '回', en: 'back', lai: '回来', qu: '回去' },
        { dir: '过', en: 'over', lai: '过来', qu: '过去' },
        { dir: '起', en: 'up (rise)', lai: '起来', qu: 'x' },
      ]} />
    </div>
  </Frame>
);

// NEW · 进/出 空間圖示（房子）
const HouseSpatial: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <EnTag>Inside or outside? The house shows where I am</EnTag>
      <div style={{ display: 'flex', gap: 40, marginTop: 8 }}>
        <SpatialCard img={imgHouse} imgH={250} where="我在里面" lines={[
          <>他<T>进来</T>了。</>,
          <>他<T>出去</T>了。</>,
        ]} />
        <SpatialCard img={imgHouse} imgH={250} where="我在外面" lines={[
          <>他<T>进去</T>了。</>,
          <>他<T>出来</T>了。</>,
        ]} />
      </div>
      <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 22 }}>
        <Pic src={imgFigure} h={72} />
        <div style={{ fontFamily: kai, fontSize: 34, color: c.slate }}>
          先想「<Hl>我站在哪里</Hl>」，再决定用<T>来</T>还是<T>去</T>。
        </div>
      </div>
    </div>
  </Frame>
);

// NEW · 三個真實情境（下雨 / 失火 / 不要进去）
const SituationTrio: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 104, left: PAD, right: PAD }}>
      <EnTag>Read the picture, then say the word. The teacher will reveal each answer.</EnTag>
      <Steps>
        <div style={{ display: 'flex', gap: 30, marginTop: 6 }}>
          <SitCard imgs={[imgRain, imgUmbrella]} imgH={186} pre="外面下雨了，快" ans="进来" post="！" />
          <SitCard imgs={[imgFire, imgFirefighter]} imgH={186} pre="失火了，里面的人快" ans="出来" post="！" />
          <SitCard imgs={[imgCrowd, imgNo]} imgH={186} pre="失火了，大家不要" ans="进去" post="！" />
        </div>
      </Steps>
      <div style={{ marginTop: 22, fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>
        失火 shīhuǒ, a fire breaks out
      </div>
    </div>
  </Frame>
);

// 5 · Situation drill (simple) — gap-fill with Steps reveal
const Drill1: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>Which word fits? Read the situation. The teacher will reveal each answer.</EnTag>
      <div style={{ marginBottom: 22 }}><Bank words={['进来', '进去', '出来', '出去', '回来', '回去', '过来', '过去', '上来', '下去']} /></div>
      <Steps>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Gap n={1} pre="外面下雨了，快" ans="进来" post="！" gloss="I am inside" />
          <Gap n={2} pre="失火了，里面的人快" ans="出来" post="！" gloss="失火 shīhuǒ, fire breaks out" />
          <Gap n={3} pre="失火了，大家不要" ans="进去" post="！" />
          <Gap n={4} pre="他给你打电话，要你现在" ans="过去" post="。" gloss="go over to him" />
          <Gap n={5} pre="你几点" ans="回来" post="？我等你吃饭。" />
          <Gap n={6} pre="我在三楼，你" ans="上来" post="吧，我不下去。" />
        </div>
      </Steps>
    </div>
  </Frame>
);

// 6 · Pattern A1 — place/thing goes BEFORE 来/去
const PatternA1: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 128, left: PAD, right: PAD }}>
      <EnTag>Word order · the place or thing goes BEFORE 来/去</EnTag>
      <Diagram>
        <SBox en="Verb" zh="下 / 买" />
        <Plus />
        <SBox en="place / thing" zh="楼 / 水果" blank />
        <Plus />
        <SBox en="toward / away" zh="来 / 去" fixed />
      </Diagram>
      <div style={{ marginTop: 38, borderLeft: `5px solid ${c.accent}`, paddingLeft: 44, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}><span style={{ fontSize: 42, fontWeight: 800, color: c.good }}>✓</span><span style={{ fontFamily: kai, fontSize: 50 }}>她　下　楼　<T>来</T>。</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}><span style={{ fontSize: 42, fontWeight: 800, color: c.good }}>✓</span><span style={{ fontFamily: kai, fontSize: 50 }}>请你　买　一些水果　<T>来</T>。</span><span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>(课文)</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}><span style={{ fontSize: 42, fontWeight: 800, color: c.faint }}>✗</span><span style={{ fontFamily: kai, fontSize: 50, color: c.slate }}>她下<T>来</T>楼。</span><span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>place can't go after 来/去</span></div>
      </div>
    </div>
  </Frame>
);

// 7 · Board — 请你 __ __ 来 (favor)
const Board1: Page = () => (
  <Frame tag="语法 · 趋向（一）">
    <div style={{ position: 'absolute', top: 112, left: PAD, right: PAD }}>
      <EnTag>Ask a partner for a favor. Bring it here (来) or take it there (去).</EnTag>
      <div style={{ fontFamily: kai, fontSize: 52, fontWeight: 700, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 32px', display: 'inline-block' }}>请你给sb. V.  num. measure word + 来/去<Blank>{''}</Blank>{''}<Blank>{''}</Blank>{''}<T>{''}</T>。</div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 16 }}>
        <Ill ico={icoCoffee} zh="一杯 咖啡" py="kāfēi" w={190} h={122} />
        <Ill ico={icoFruit} zh="一个/一些 水果" py="shuǐguǒ" w={190} h={122} />
        <Ill ico={icoBook} zh="一本 书" py="shū" w={190} h={122} />
        <Ill ico={icoSheet} zh="一张纸" py="zhǐ" w={190} h={122} />
        <Ill ico={icoBox} zh="一个 箱子" py="xiāngzi" w={190} h={122} />
      </div>
      <div style={{ marginTop: 24 }}>
        <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 12 }}>verbs ↓</div>
        <Chips words={['买', '拿', '送', '带', '给']} />
      </div>
    </div>
  </Frame>
);

// 8 · Compound overview — verb + direction + place + 来/去
const Compound: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <EnTag>Part 2 · add a verb in front to show HOW · the speaker rule is the same</EnTag>
      <Diagram>
        <SBox en="Verb (how)" zh="走 / 跑 / 搬" />
        <Plus />
        <SBox en="direction" zh="上/下/进/出/回" fixed />
        <Plus />
        <SBox en="place / thing" zh="楼 / 东西" blank />
        <Plus />
        <SBox en="to / from me" zh="来 / 去" fixed />
      </Diagram>
      <div style={{ marginTop: 36 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 50, fontWeight: 500, marginBottom: 18 }}>她<T>走</T>下楼<T>来</T>。<En>walks down 【I am downstairs】(课文)</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 50, fontWeight: 500, marginBottom: 18 }}>老师<T>走</T>进教室<T>来</T>。<En>【I am in the room】</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 50, fontWeight: 500 }}>请你<T>搬</T>回一些椅子<T>来</T>。<En>carry some chairs back here</En></div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

// 9 · Builder — verb + direction + 来/去
const Builder: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 104, left: PAD, right: PAD }}>
      <EnTag>Build one from each box　·　从每一栏选一个，组成一个词</EnTag>
      <div style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
        <BuildCol label="动词" en="how (verb)" color={c.ink} cards={[
          { zh: '走', py: 'zǒu', en: 'walk' }, { zh: '跑', py: 'pǎo', en: 'run' }, { zh: '拿', py: 'ná', en: 'take' }, { zh: '搬', py: 'bān', en: 'carry' }, { zh: '带', py: 'dài', en: 'bring' }, { zh: '坐', py: 'zuò', en: 'sit' }, { zh: '站', py: 'zhàn', en: 'stand' },
        ]} />
        <div style={{ fontFamily: tnr, fontSize: 44, color: c.faint, alignSelf: 'center' }}>+</div>
        <BuildCol label="方向" en="direction" color={c.ink} cards={[
          { zh: '上', py: 'shàng', en: 'up' }, { zh: '下', py: 'xià', en: 'down' }, { zh: '进', py: 'jìn', en: 'in' }, { zh: '出', py: 'chū', en: 'out' }, { zh: '回', py: 'huí', en: 'back' }, { zh: '过', py: 'guò', en: 'over' }, { zh: '起', py: 'qǐ', en: 'rise' },
        ]} />
        <div style={{ fontFamily: tnr, fontSize: 44, color: c.faint, alignSelf: 'center' }}>+</div>
        <BuildCol label="来 / 去" en="to / from me" color={c.accent} cards={[
          { zh: '来', py: 'lái', en: 'toward me' }, { zh: '去', py: 'qù', en: 'away' },
        ]} />
      </div>
      <div style={{ marginTop: 28, fontFamily: kai, fontSize: 48 }}>
        <span style={{ color: c.muted, fontFamily: tnr, fontSize: 26, fontStyle: 'italic', marginRight: 16 }}>for example</span>
        <span style={{ fontWeight: 700 }}><HlY>走过来</HlY>　·　<HlY>搬回去</HlY>　·　<HlY>拿起来</HlY>　·　<HlY>站起来</HlY></span>
      </div>
    </div>
  </Frame>
);

// NEW · 每天都會用到的四個（过来 / 起来 / 坐下来 / 站起来）＋ 回收情境
const Everyday: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 100, left: PAD, right: PAD }}>
      <EnTag>You will hear these every day in class</EnTag>
      <div style={{ display: 'flex', gap: 24, marginTop: 6 }}>
        {[
          { img: imgHand, h: 128, zh: <>请你<T>过来</T>。</>, en: 'come over here' },
          { img: imgWakeup, h: 128, zh: <>快<T>起来</T>！</>, en: 'get up' },
          { img: imgChair, h: 128, zh: <>请<T>坐下来</T>。</>, en: 'sit down' },
          { img: imgChair, h: 128, zh: <>请<T>站起来</T>。</>, en: 'stand up' },
        ].map((it, i) => (
          <div key={i} style={{ flex: 1, border: `2px solid ${c.line}`, borderRadius: 16, background: c.bg, padding: '18px 14px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ height: it.h, display: 'flex', alignItems: 'center' }}><Pic src={it.img} h={it.h} /></div>
            <div style={{ fontFamily: kai, fontSize: 36, textAlign: 'center' }}>{it.zh}</div>
            <div style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{it.en}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 26, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: '18px 26px' }}>
        <Pic src={imgCans} h={104} />
        <Pic src={imgRecycle} h={104} />
        <div style={{ fontFamily: kai, fontSize: 38, lineHeight: 1.4 }}>
          请你把空罐子<T>拿出来</T>，<T>放进</T>回收桶<T>去</T>。
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginTop: 6 }}>空罐子 kōng guànzi, empty can　·　回收桶 huíshōutǒng, recycling bin</div>
        </div>
      </div>
    </div>
  </Frame>
);

// 10 · Situation drill (compound)
const Drill2: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>Which word fits? Verb + direction + 来/去. The teacher will reveal each answer.</EnTag>
      <div style={{ marginBottom: 22 }}><Bank words={['坐下来', '站起来', '走过来', '走回去', '拿过来', '搬回来', '搬上去', '带回去', '跑回来', '拿起来']} /></div>
      <Steps>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Gap n={1} pre="上课了，请大家" ans="坐下来" post="。" />
          <Gap n={2} pre="老师问问题，请你" ans="站起来" post="回答。" />
          <Gap n={3} pre="我看不清楚，你能不能" ans="走过来" post="一点儿？" />
          <Gap n={4} pre="这本书是我的，请你帮我" ans="拿过来" post="。" />
          <Gap n={5} pre="东西太多了，你先" ans="搬上去" post="，我再拿。" gloss="upstairs" />
          <Gap n={6} pre="放假回家，我想" ans="带回去" post="很多东西。" />
        </div>
      </Steps>
    </div>
  </Frame>
);

// 11 · Where is the speaker? — check activity
const WhereSpeaker: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <EnTag>Where is "I"? Read the direction and 来/去, then tell me where the speaker is.</EnTag>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80, rowGap: 26 }}>
        <QNum n={1}>老师走进教室<T>来</T>。</QNum>
        <QNum n={2}>老师走进教室<T>去</T>。</QNum>
        <QNum n={3}>弟弟跳上床<T>来</T>。</QNum>
        <QNum n={4}>她走下楼<T>来</T>。</QNum>
        <QNum n={5}>请你买回一些梨<T>来</T>。</QNum>
        <QNum n={6}>你想请谁走进你的宿舍<T>来</T>？</QNum>
      </div>
    </div>
  </Frame>
);

// 12 · You'll also see both (recognition of completed-action order)
const AlsoBoth: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 120, left: PAD, right: PAD }}>
      <EnTag>Good to recognize · when the action is finished, you will see 来/去 pulled in</EnTag>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontFamily: kai, fontSize: 48 }}>妈妈买<Hl>回来</Hl>了一些水果。<En>Mom bought some fruit back.</En></div>
        <div style={{ fontFamily: kai, fontSize: 48 }}>妹妹拿<Hl>出来</Hl>一件新买的衣服。<En>My sister took out a new jacket.</En></div>
      </div>
      <div style={{ marginTop: 30, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 30px' }}>
        <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', lineHeight: 1.5 }}>Failsafe · when in doubt, put the place or thing BEFORE 来/去 (她下楼来 / 买一些水果来). That order is always correct.</div>
      </div>
    </div>
  </Frame>
);

// 13 · Packaging pair task
const Package: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 8 }}>帮我搬进来</div>
      <div style={{ fontFamily: tnr, fontSize: 29, color: c.slate, fontStyle: 'italic', marginBottom: 22, lineHeight: 1.45 }}>Pair work · A is moving into a new dorm, B is helping.<br />1. A tells B where each thing should go. 2. B answers and asks about the next thing. 3. Swap roles.</div>
      <div style={{ display: 'flex', gap: 40 }}>
        <RoleCard label="Student A · 你搬家，你指挥" lines={[
          <>请你把箱子<T>搬上楼来</T>。</>,
          <>这些书，拿<T>进房间去</T>。</>,
          <>再帮我买一些水果<T>回来</T>，好吗？</>,
        ]} />
        <RoleCard label="Student B · 你来帮忙" lines={[
          <>好，我先<T>搬上来</T>。</>,
          <>这个呢？要<T>放进去</T>吗？</>,
          <>没问题，我马上<T>回来</T>。</>,
        ]} />
      </div>
      <UseStrip items={['V + 方向 + 来/去', '搬上来', '拿进去', '买回来']} />
    </div>
  </Frame>
);

// 14 · Closing
const Closing: Page = () => (
  <Frame tag="语法 · 趋向（二）">
    <div style={{ position: 'absolute', top: 152, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 84, fontWeight: 700, marginBottom: 44 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 60%' }}>
          <div style={{ fontFamily: kai, fontSize: 50, lineHeight: 1.5 }}>说两句话：一句用<T>来</T>、一句用<T>去</T>，<br />并说说你在哪里。</div>
        </div>
        <div style={{ flex: '1 1 40%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '30px 38px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 18 }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 32, color: c.ink, lineHeight: 1.7 }}>L16-2 · Grammar &amp; Writing D<br />L16-2 · Listening B</div>
        </div>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '趋向补语（图解版）她走下楼来／搬进来', createdAt: '2026-08-23T16:00:00.000Z' };

export const notes: (string | undefined)[] = [
  '图解版（本机教学用，含教师旧 pptx 的插图，不发布到学生网站）。整合了你 pptx 的顺序（空间图示 → 参考表 → 情境操练 → 三层总览 → 填空）＋课本 Pattern A1/A2/B。可分两天教：Part 1（简单趋向，第 2 至 10 页）8/24；Part 2（复合趋向，第 11 至 18 页）8/25。',
  '大图：三层积木——来/去、方向+来/去、动词+方向+来/去。让学生先看到整体，知道今天走到哪一层。',
  '核心概念：来/去看「说话的人在哪里」。她下楼来【我在楼下】、她上楼去。请你买水果来＝拿到我这里（连到课文）。多用手势指方向。',
  '空间图示（楼梯）：同一个动作，因为「我」站的位置不同，用词就不同。左卡我在楼下、右卡我在楼上，两边对着念。老师可站到教室前后示范。',
  '参考表（简单趋向）：上下进出回过起＋来/去。带学生念一遍，注意「起去」不说（只有起来）。',
  '空间图示（房子）：里外对照。他进来/出去【我在里面】；他进去/出来【我在外面】。提醒学生先想「我站在哪里」。',
  '三个真实情境（图）：下雨快进来、失火快出来、大家不要进去。看图说词，逐步揭示答案（空白键）。失火 shīhuǒ 先讲。',
  '情境填空（简单趋向）：读情境选词，逐步揭示答案。学生在学习单上做，老师在投影幕上对答案。',
  '语序（Pattern A1）：动词＋地方/东西＋来/去；地方一定在来/去前面。「她下来楼」是错的。这是最保险的语序。',
  '放手产出：请你＿＿＿来。看图（咖啡/水果/书/纸/箱子）＋动词（买/拿/送/带/给）自由组句，先两两，再抽点。',
  'Part 2 复合趋向：动词放前面说「怎么移动」，说话人规则不变。她走下楼来【我在楼下】、走进教室来/去看我在里还是外。（连到课文「她走下楼来」）',
  '造词器：从三栏各选一个——动词（走跑拿搬带坐站）＋方向（上下进出回过起）＋来/去。示范走过来、搬回去、拿起来、站起来。',
  '每天都会用到的四个（图）：过来、起来、坐下来、站起来——这些是课堂指令，学生天天听到。下面回收情境练「拿出来、放进…去」，可请学生实际做动作。',
  '情境填空（复合趋向）：读情境选词，逐步揭示。坐下来/站起来/走过来/拿过来/搬上去/带回去。',
  '说话人在哪里：读方向和来/去判断「我」的位置。先两两，再抽点，第 6 题开放个人化。',
  '认得就好（不必操练）：动作完成时会看到「买回来了水果、拿出来一件衣服」，来/去被拉到东西前面。告诉学生：不确定时，把东西放在来/去前面最保险。',
  '打包练习（搬家指挥，示范/控制）：两人一组共 10 组 · 6 分钟 · A 指挥 B 搬东西、说清楚往哪去，换角色，请 2 组上台。要用上 V＋方向＋来/去。',
  '收尾 exit ticket：说两句一句来一句去，并说你在哪里。作业：L16-2 Grammar&Writing-D、Listening-B。',
];

export default [
  Cover, BigPicture, Concept, StairsSpatial, Table1, HouseSpatial, SituationTrio, Drill1, PatternA1, Board1,
  Compound, Builder, Everyday, Drill2, WhereSpeaker, AlsoBoth, Package, Closing,
] satisfies Page[];
