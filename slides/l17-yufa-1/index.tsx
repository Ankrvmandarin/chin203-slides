import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';


// Kai webfont (LXGW WenKai GB Screen) — renders 楷体 without a local install; local() used if present.
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l17-yufa-1';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十七课 租房子 · 语法（一）  8/28（一天一份，内部分段 Gr.1–3）
   Gr.1 V了+数量+了（住了两个学期了）· Gr.2 连…都/也 · Gr.3 V得下/不下（容量）
   主题色：白 + 深蓝　·　中文=Kai（楷体）　·　英文/拼音=Times New Roman
   三层鹰架 + 逐步揭示　·　目标语言=中文；后设语言（结构标签/任务指示）=English
   一页一个目标输出句；对比用 tint 方框（得下=蓝 / 不下=玫红）承担，不用破折号
   ═══════════════════════════════════════════════════════════════════════════ */

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#16273f', accent: '#1f4e9a' },
  fonts: {
    display: '"LXGW WenKai GB Screen", "LXGW WenKai", serif',
    body: '"Times New Roman", Times, "PingFang SC", serif',
  },
  typeScale: { hero: 128, body: 56 },
  radius: 8,
};
const c = {
  bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', rose: '#b23a48', slate: '#41597c',
  muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea',
  tgtBg: '#eaf1f9', negBg: '#fbeceb',
  markHi: 'rgba(31,78,154,0.14)', markY: 'rgba(245,205,66,0.6)',
};
const kai = 'var(--osd-font-display)';        // 中文（楷体 Kai）
const tnr = '"Times New Roman", Times, serif'; // 英文 / 拼音
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };

const Frame = ({ children, tag = '语法（一）' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十七课 租房子</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const O = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.rose, fontWeight: 700 }}>{children}</span>;
const Hl = ({ children }: { children: React.ReactNode }) => <span style={{ background: `linear-gradient(transparent 56%, ${c.markHi} 56%)`, padding: '0 3px' }}>{children}</span>;
const HlY = ({ children }: { children: React.ReactNode }) => <span style={{ background: `linear-gradient(transparent 54%, ${c.markY} 54%)`, padding: '0 4px', fontWeight: 700 }}>{children}</span>;
const Blank = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.slate }}>{children}</span>;
const Under = ({ w = 150 }: { w?: number }) => <span style={{ display: 'inline-block', width: w, borderBottom: `3px solid ${c.faint}`, margin: '0 6px' }} />;
const En = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: tnr, fontSize: 32, color: c.muted, fontStyle: 'italic', marginLeft: 22 }}>{children}</span>;
const EnTag = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 28, color: c.slate, marginBottom: 16 }}>{children}</div>;

// ── structure diagram: labelled slot boxes (English caption over Chinese) ─────
const TONE = {
  neutral: { bg: c.panel, border: c.line, text: c.ink },
  target: { bg: c.tgtBg, border: c.accent, text: c.accent },
  neg: { bg: c.negBg, border: c.rose, text: c.rose },
} as const;
const SBox = ({ en, zh, tone = 'neutral', blank = false }: { en: string; zh: React.ReactNode; tone?: keyof typeof TONE; blank?: boolean }) => {
  const t = TONE[tone];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ fontFamily: tnr, fontSize: 24, color: tone === 'neutral' ? c.muted : t.text, fontStyle: 'italic' }}>{en}</div>
      <div style={{
        fontFamily: kai, fontSize: 50, fontWeight: 600, lineHeight: 1,
        color: blank ? c.slate : t.text,
        padding: '16px 26px', borderRadius: 12, minWidth: 96, textAlign: 'center',
        border: `2px solid ${t.border}`, background: blank ? c.panel : t.bg,
        borderStyle: blank ? 'dashed' : 'solid',
      }}>{zh}</div>
    </div>
  );
};
const Plus = () => <div style={{ fontFamily: tnr, fontSize: 40, color: c.faint, paddingBottom: 14, alignSelf: 'flex-end' }}>+</div>;
const Diagram = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>{children}</div>;

// ── SVG illustration library ─────────────────────────────────────────────────
const Sg = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Vv = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>{children}</svg>;
const icoBuilding = <Vv><g {...Sg}><rect x="26" y="18" width="48" height="66" rx="3" /><path d="M36 30 H44 M56 30 H64 M36 44 H44 M56 44 H64 M36 58 H44 M56 58 H64" strokeWidth={3.2} stroke={c.accent} /><path d="M44 72 H56 V84 H44 Z" /></g></Vv>;
const icoBed = <Vv><g {...Sg}><path d="M16 46 v30 M84 52 v24 M16 60 H84" /><path d="M16 60 v-10 a6 6 0 0 1 6 -6 H54 a10 10 0 0 1 10 10 v6" /><rect x="24" y="44" width="20" height="12" rx="4" stroke={c.accent} strokeWidth={3.2} /></g></Vv>;
const icoSofa = <Vv><g {...Sg}><path d="M18 52 v-8 a8 8 0 0 1 8 -8 H74 a8 8 0 0 1 8 8 v8" /><path d="M14 52 a6 6 0 0 1 6 6 v10 H80 v-10 a6 6 0 0 1 6 -6 a6 6 0 0 1 6 6 v14 H8 v-14 a6 6 0 0 1 6 -6 Z" /><path d="M30 68 v8 M70 68 v8" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoFridge = <Vv><g {...Sg}><rect x="32" y="14" width="36" height="72" rx="6" /><path d="M32 44 H68" /><path d="M40 26 v8 M40 54 v10" strokeWidth={3.4} stroke={c.accent} /></g></Vv>;
const icoComputer = <Vv><g {...Sg}><rect x="18" y="22" width="64" height="42" rx="4" /><path d="M40 64 L36 78 H64 L60 64" /><path d="M30 78 H70" /><path d="M28 32 H60" strokeWidth={3} stroke={c.accent} /></g></Vv>;
const icoBox = <Vv><g {...Sg}><path d="M20 38 L50 26 L80 38 L50 50 Z" /><path d="M20 38 V70 L50 82 V50 M80 38 V70 L50 82" /><path d="M50 50 V82" strokeWidth={3} stroke={c.accent} /></g></Vv>;
const icoCalendar = <Vv><g {...Sg}><rect x="20" y="24" width="60" height="56" rx="5" /><path d="M20 40 H80 M36 18 V30 M64 18 V30" /><path d="M34 54 H46 M54 54 H66 M34 66 H46" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoClock = <Vv><g {...Sg}><circle cx="50" cy="52" r="30" /><path d="M50 34 V52 L64 60" stroke={c.accent} /></g></Vv>;
const icoSpeak = <Vv><g {...Sg}><path d="M20 22 H80 a8 8 0 0 1 8 8 V56 a8 8 0 0 1 -8 8 H44 L30 78 V64 H20 a8 8 0 0 1 -8 -8 V30 a8 8 0 0 1 8 -8 Z" /></g><text x="50" y="52" textAnchor="middle" fontSize="30" fontFamily='"LXGW WenKai GB Screen", "LXGW WenKai", serif' fill={c.accent}>中</text></Vv>;
const icoCar = <Vv><g {...Sg}><path d="M16 60 L24 40 H76 L84 60" /><path d="M12 60 H88 V72 H80 M20 72 H12 V60" /><circle cx="30" cy="72" r="7" /><circle cx="70" cy="72" r="7" /><path d="M34 40 L38 54 H62 L66 40" strokeWidth={3} stroke={c.accent} /></g></Vv>;
const icoKey = <Vv><g {...Sg}><circle cx="34" cy="42" r="16" /><path d="M46 54 L78 86 M66 74 L74 66 M58 66 L66 58" stroke={c.accent} /></g></Vv>;
const icoBowl = <Vv><g {...Sg}><path d="M18 50 H82 a32 32 0 0 1 -64 0 Z" /><path d="M42 30 q4 -8 0 -14 M54 30 q4 -8 0 -14" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoPaper = <Vv><g {...Sg}><rect x="22" y="18" width="56" height="64" rx="4" /><path d="M30 32 H70 M30 44 H70 M30 56 H58 M30 68 H50" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoWatermelon = <Vv><g {...Sg}><path d="M20 42 a30 30 0 0 1 60 0 Z" /><path d="M32 42 a18 18 0 0 1 36 0" strokeWidth={3} stroke={c.accent} /></g></Vv>;

const Ill = ({ ico, zh, py, w, h }: { ico: React.ReactNode; zh: string; py: string; w: number; h: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{ width: w, height: h, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}>
      <div style={{ width: '58%', height: '58%' }}>{ico}</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{py}</div>
      <div style={{ fontFamily: kai, fontSize: 34, fontWeight: 600 }}>{zh}</div>
    </div>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 40, padding: '7px 24px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const DLine = ({ who, whoColor, size = 50, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, marginBottom: 22, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: whoColor, flex: '0 0 150px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.35 }}>{children}</span>
  </div>
);
const AltLine = ({ tag, tagEn, children, gloss }: { tag: string; tagEn: string; children: React.ReactNode; gloss: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginBottom: 20 }}>
    <span style={{ width: 168, display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: c.accent }}>{tag}</span>
      <span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{tagEn}</span>
    </span>
    <span style={{ fontFamily: kai, fontSize: 56, fontWeight: 500 }}>{children}</span>
    <span style={{ fontFamily: tnr, fontSize: 30, color: c.muted, fontStyle: 'italic' }}>{gloss}</span>
  </div>
);

// capacity table: object · V得下 (room enough) / V不下 (not enough)
const CapHead = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', alignItems: 'center', gap: 20, paddingBottom: 12, borderBottom: `2px solid ${c.ink}` }}>
    <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>space&nbsp;·&nbsp;<span style={{ fontFamily: kai, fontStyle: 'normal' }}>地方</span></span>
    <span style={{ fontFamily: tnr, fontSize: 25, color: c.accent }}>room enough&nbsp;·&nbsp;V<span style={{ fontFamily: kai }}>得下</span></span>
    <span style={{ fontFamily: tnr, fontSize: 25, color: c.rose }}>not enough&nbsp;·&nbsp;V<span style={{ fontFamily: kai }}>不下</span></span>
  </div>
);
const CapRow = ({ ico, obj, py, v, q }: { ico: React.ReactNode; obj: string; py: string; v: string; q: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', alignItems: 'center', gap: 20, padding: '12px 0', borderBottom: `1px solid ${c.line}` }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 66, height: 50, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}><div style={{ width: '60%', height: '60%' }}>{ico}</div></div>
      <div><div style={{ fontFamily: tnr, fontSize: 21, color: c.muted, fontStyle: 'italic' }}>{py}</div><div style={{ fontFamily: kai, fontSize: 32, fontWeight: 600 }}>{obj}</div></div>
    </div>
    <span style={{ fontFamily: kai, fontSize: 42, fontWeight: 600, color: c.accent }}>{v}<T>得下</T>{q}</span>
    <span style={{ fontFamily: kai, fontSize: 42, color: c.rose }}>{v}<O>不下</O>{q}</span>
  </div>
);

// role card + required-language strip (打包练习)
const RoleCard = ({ label, lines }: { label: string; lines: React.ReactNode[] }) => (
  <div style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '26px 30px' }}>
    <div style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic', marginBottom: 18 }}>{label}</div>
    {lines.map((l, i) => <div key={i} style={{ fontFamily: kai, fontSize: 35, lineHeight: 1.45, marginBottom: 12, color: c.ink }}>{l}</div>)}
  </div>
);
const UseStrip = ({ items }: { items: string[] }) => (
  <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
    <span style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic' }}>Use&nbsp;↓</span>
    {items.map((w, i) => <span key={i} style={{ fontFamily: kai, fontSize: 34, padding: '6px 20px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>)}
  </div>
);
// section divider eyebrow (internal Gr.1 / Gr.2 / Gr.3 marker)
const Seg = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14 }}>
    <span style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontWeight: 700, letterSpacing: '0.08em' }}>{n}</span>
    <span style={{ fontFamily: tnr, fontSize: 28, color: c.slate, fontStyle: 'italic' }}>{children}</span>
  </div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 140, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十七课 租房子  语法（一）</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '28px 0 32px' }} />
      <div style={{ fontFamily: kai, fontSize: 96, fontWeight: 700, lineHeight: 1.12, color: c.ink }}>住了两个学期了</div>
      <div style={{ fontFamily: kai, fontSize: 74, fontWeight: 600, color: c.accent, marginTop: 6 }}>连电脑都放不下</div>
      <div style={{ fontFamily: kai, fontSize: 74, fontWeight: 600, color: c.rose, marginTop: 2 }}>坐不下二十个人</div>
      <div style={{ fontFamily: tnr, fontSize: 33, color: c.slate, marginTop: 36, fontStyle: 'italic' }}>How long it's been going on · not even X · is there room for it?</div>
    </div>
  </Frame>
);

/* ── Gr.1 : V 了 + 数量 + 了 (duration / quantity, still ongoing) ─────────── */
const G1Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <Seg n="Gr. 1">How long has it been going on, and still is?</Seg>
      <Diagram>
        <SBox en="Verb" zh="动词" />
        <Plus />
        <SBox en="了" zh="了" tone="target" />
        <Plus />
        <SBox en="amount / time" zh="＜两个学期＞" blank />
        <Plus />
        <SBox en="了 = up to now" zh="了" tone="target" />
      </Diagram>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 60, fontWeight: 500, marginBottom: 24 }}>王朋在宿舍住<T>了</T>两个学期<T>了</T>。<br />{''}<En>Wang Peng has been living in the dorm for two semesters (and still is).</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 60, fontWeight: 500 }}>他找房子找<T>了</T>一个多月<T>了</T>。<br />{''}<En>He's been apartment-hunting for over a month now.</En></div></Step>
        </Steps>
      </div>
      <div style={{ marginTop: 34, fontFamily: kai, fontSize: 30, color: c.slate }}>有宾语 → 动词说两次：找房子 <Hl>找</Hl>了一个月了。<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 14 }}>with an object, repeat the verb</span></div>
    </div>
  </Frame>
);

const G1Contrast: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 128, left: PAD, right: PAD }}>
      <EnTag>One little 了 changes everything · finished, or still going?</EnTag>
      <Steps>
        <Step><AltLine tag="finished" tagEn="病了三天" gloss="was sick 3 days, better now.">他病<T>了</T>三天。</AltLine></Step>
        <Step><AltLine tag="still going" tagEn="病了三天了" gloss="has been sick 3 days, still is.">他病<T>了</T>三天<T>了</T>。</AltLine></Step>
        <Step><AltLine tag="a habit" tagEn="不加了 · 每天都这样" gloss="I walk half an hour every day.">我每天走路走半个钟头。</AltLine></Step>
        <Step>
          <div style={{ marginTop: 20, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 30px', fontFamily: kai, fontSize: 34, color: c.slate, lineHeight: 1.5 }}>
            <span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>the final 了 says it continues：</span>他找房子找了一个月<T>了</T>，可是还没找到。
          </div>
        </Step>
      </Steps>
    </div>
  </Frame>
);

// ── 時間軸圖解：把「加起來到現在」畫出來（教師講義的招牌設計）─────────────
const TlSeg = ({ when, amt, formula }: { when: string; amt: string; formula?: boolean }) => (
  <div style={{ flex: 1, position: 'relative', paddingTop: formula ? 0 : 44 }}>
    {formula && (
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <span style={{ fontFamily: tnr, fontSize: 22, color: c.accent, border: `1px solid ${c.accent}`, background: c.tgtBg, borderRadius: 6, padding: '4px 12px', letterSpacing: '0.04em' }}>
          S&nbsp;&nbsp;V&nbsp;<span style={{ fontFamily: kai, fontWeight: 700 }}>了</span>&nbsp;NU-M&nbsp;O
        </span>
      </div>
    )}
    <div style={{ textAlign: 'center', fontFamily: kai, fontSize: 34, fontWeight: 700 }}>{when}</div>
    <div style={{ position: 'relative', height: 26, margin: '10px 0 6px' }}>
      <div style={{ position: 'absolute', top: 11, left: 0, right: 0, height: 3, background: c.ink }} />
      <div style={{ position: 'absolute', top: 5, left: 0, width: 15, height: 15, borderRadius: '50%', background: c.ink }} />
    </div>
    <div style={{ textAlign: 'center', fontFamily: kai, fontSize: 30, color: c.accent, fontWeight: 700 }}>{amt}</div>
  </div>
);
const Timeline = ({ a, b }: { a: { when: string; amt: string }; b: { when: string; amt: string } }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
    <TlSeg when={a.when} amt={a.amt} formula />
    <TlSeg when={b.when} amt={b.amt} formula />
    <div style={{ flex: '0 0 190px', paddingTop: 74 }}>
      <div style={{ position: 'relative', height: 26 }}>
        <div style={{ position: 'absolute', top: 11, left: 0, right: 22, height: 3, background: c.faint, borderTop: `3px dashed ${c.faint}`, backgroundColor: 'transparent' }} />
        <div style={{ position: 'absolute', top: 3, right: 0, width: 0, height: 0, borderLeft: `18px solid ${c.faint}`, borderTop: '10px solid transparent', borderBottom: '10px solid transparent' }} />
      </div>
      <div style={{ textAlign: 'right', fontFamily: kai, fontSize: 30, color: c.muted, marginTop: 6 }}>现在</div>
    </div>
  </div>
);

const G1Timeline: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>Add the two together · that total, up to now, is the double 了</EnTag>
      <Timeline a={{ when: '上个月', amt: '看了三个房子' }} b={{ when: '这个月', amt: '看了两个房子' }} />
      <div style={{ marginTop: 30 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 42, marginBottom: 14 }}><Hl>上个月</Hl>我看<T>了</T>三个房子。</div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 42, marginBottom: 20 }}><Hl>这个月</Hl>我看<T>了</T>两个房子。</div></Step>
          <Step>
            <div style={{ background: c.tgtBg, border: `2px solid ${c.accent}`, borderRadius: 14, padding: '20px 30px' }}>
              <div style={{ fontFamily: kai, fontSize: 46, fontWeight: 600 }}>这两个月，我<T>已经</T>看<T>了</T>五个房子<T>了</T>。</div>
              <div style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginTop: 8 }}>five so far, and I am still looking</div>
            </div>
          </Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

// ── 散詞造句：給打散的成分，學生排出語序 ───────────────────────────────
const ScrambleLine = ({ n, parts }: { n: number; parts: string[] }) => (
  <div style={{ marginBottom: 22 }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
      <span style={{ fontFamily: tnr, fontSize: 28, color: c.accent, fontWeight: 700 }}>{n}</span>
      <span style={{ fontFamily: kai, fontSize: 36, color: c.ink }}>{parts.join('、')}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginLeft: 44, marginTop: 4 }}>
      <span style={{ fontFamily: tnr, fontSize: 30, color: c.faint }}>→</span>
      <span style={{ flex: 1, borderBottom: `2px solid ${c.line}`, height: 22 }} />
    </div>
  </div>
);

const G1Scramble: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 92, left: PAD, right: PAD }}>
      <EnTag>Put the pieces in order · say the whole sentence, then write it</EnTag>
      <div style={{ marginBottom: 18, display: 'inline-block', fontFamily: tnr, fontSize: 26, color: c.accent, border: `1px solid ${c.accent}`, background: c.tgtBg, borderRadius: 8, padding: '8px 20px' }}>
        S&nbsp;&nbsp;+&nbsp;&nbsp;(past time)&nbsp;&nbsp;+&nbsp;&nbsp;V&nbsp;<span style={{ fontFamily: kai, fontSize: 30, fontWeight: 700 }}>了</span>&nbsp;&nbsp;+&nbsp;&nbsp;NU-M&nbsp;&nbsp;+&nbsp;&nbsp;O
      </div>
      <div style={{ marginTop: 6 }}>
        <ScrambleLine n={1} parts={['王朋', '上个星期', '看房子', '三个']} />
        <ScrambleLine n={2} parts={['我', '昨天', '打电话', '五通 tōng']} />
        <ScrambleLine n={3} parts={['李友', '去年', '搬家', '两次']} />
        <ScrambleLine n={4} parts={['我们', '这个月', '付房租 fù fángzū', '一次']} />
      </div>
    </div>
  </Frame>
);

const G1Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 92, left: PAD, right: PAD }}>
      <EnTag>Ask a partner · how long have you been doing these (and still are)?</EnTag>
      <Diagram>
        <SBox en="you" zh="你" />
        <SBox en="do what (Verb+Object)" zh="＜学中文＞" blank />
        <SBox en="say the verb again" zh="＜学＞" blank />
        <SBox en="了" zh="了" tone="target" />
        <SBox en="how long" zh="多久" blank />
        <SBox en="了" zh="了" tone="target" />
      </Diagram>
      <div style={{ fontFamily: kai, fontSize: 42, color: c.slate, margin: '16px 0 8px' }}>e.g.　你<Hl>学中文</Hl><Hl>学</Hl>了多久了？<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 14 }}>an object → say the verb again before 了</span></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 18 }}>
        {[['学中文', '学'], ['开车', '开'], ['找房子', '找'], ['做饭', '做'], ['打工', '打']].map(([vo, v], i) => (
          <div key={i} style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 10px', textAlign: 'center' }}>
            <div style={{ fontFamily: kai, fontSize: 40, fontWeight: 600 }}>{vo}</div>
            <div style={{ fontFamily: tnr, fontSize: 23, color: c.accent, fontStyle: 'italic', marginTop: 10 }}>v: 打<span style={{ fontFamily: kai, fontStyle: 'normal', fontWeight: 700 }}>{v}</span></div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, display: 'flex', gap: 40, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 auto' }}>
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 12 }}>answer with a length of time ↓</div>
          <Chips words={['一年多了', '两个学期了', '三个月了', '半年了', '很久了']} />
        </div>
        <div style={{ flex: '0 0 470px', background: c.tgtBg, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 22px' }}>
          <div style={{ fontFamily: kai, fontSize: 30, color: c.ink, lineHeight: 1.4 }}>Topic sentencs<br />你在这儿住了多久了？<br />中文你学了多久了？{''}<T>{''}</T>{''}<span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{''}</span></div>
        </div>
      </div>
      <div style={{ marginTop: 16, fontFamily: tnr, fontSize: 23, color: c.muted, fontStyle: 'italic' }}>打工 dǎ gōng, work a part-time job · 做饭 zuò fàn, cook</div>
    </div>
  </Frame>
);

/* ── Gr.2 : 连 … 都 / 也 … (even) ──────────────────────────────────────────── */
const MwWarm: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 100, left: PAD, right: PAD }}>
      <EnTag>Before the next pattern · say the measure word out loud</EnTag>
      <div style={{ fontFamily: kai, fontSize: 54, fontWeight: 700, marginBottom: 26 }}>一＿什么？</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Chips words={['一支笔', '一件衣服', '一条裤子', '一封信']} />
        <Chips words={['一张床', '一把椅子', '一套沙发', '一个书架']} />
      </div>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 46, color: c.slate, marginBottom: 16 }}>我平常都用电脑打字，不用笔写字。</div></Step>
          <Step>
            <div style={{ background: c.tgtBg, border: `2px solid ${c.accent}`, borderRadius: 14, padding: '20px 30px', display: 'inline-block' }}>
              <span style={{ fontFamily: kai, fontSize: 52, fontWeight: 600 }}>我<T>连</T>一支笔<T>都</T>没有。</span>
            </div>
          </Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G2Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <Seg n="Gr. 2">Even the smallest thing · pushing an extreme</Seg>
      <Diagram>
        <SBox en="连 = even" zh="连" tone="target" />
        <Plus />
        <SBox en="extreme item" zh="＜电脑＞" blank />
        <Plus />
        <SBox en="都 / 也" zh="都 / 也" tone="target" />
        <Plus />
        <SBox en="(usually) not V" zh="放不下" />
      </Diagram>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 58, fontWeight: 500, marginBottom: 24 }}>房间太小了，<T>连</T>电脑<T>都</T>放不下。<En>The room's so small it can't even fit a computer.</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 58, fontWeight: 500 }}>他的公寓<T>连</T>一件家具<T>也</T>没有。<En>His apartment doesn't have even a single piece of furniture.</En></div></Step>
        </Steps>
      </div>
      <div style={{ marginTop: 30, fontFamily: kai, fontSize: 30, color: c.slate }}>连 + 最小/最基本的一个 → 暗示整体（太小、太空、太厉害）。<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 12 }}>the extreme case implies the whole.</span></div>
    </div>
  </Frame>
);

const G2Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 104, left: PAD, right: PAD }}>
      <EnTag>Work with a partner · complain about a tiny or bare place</EnTag>
      <div style={{ fontFamily: kai, fontSize: 50, fontWeight: 700, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 34px', display: 'inline-block' }}>
        这个　<Blank>＿＿</Blank>　太　<Blank>＿＿</Blank>　了，<T>连</T>　<Blank>＿＿</Blank>　<T>都</T>　<Blank>＿＿</Blank>。
      </div>
      <div style={{ marginTop: 32, display: 'flex', gap: 46 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 12 }}>place &amp; problem ↓</div>
          <Chips words={['房间 / 小', '公寓 / 旧', '厨房 / 脏']} />
          <div style={{ height: 20 }} />
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 12 }}>even this ↓</div>
          <Chips words={['电脑', '一张床', '一件家具', '一个人']} />
        </div>
        <div style={{ flex: '0 0 300px', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 26px' }}>
          <div style={{ fontFamily: tnr, fontSize: 25, color: c.accent, fontStyle: 'italic', marginBottom: 12 }}>example</div>
          <div style={{ fontFamily: kai, fontSize: 34, lineHeight: 1.5, color: c.ink }}>这个厨房太小了，<T>连</T>一个人<T>都</T>站不下。</div>
        </div>
      </div>
      <div style={{ marginTop: 24, fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>脏 zāng, dirty · 旧 jiù, old · 床 chuáng, bed</div>
    </div>
  </Frame>
);

/* ── Gr.3 : V 得下 / 不下 (whether a space has room) ──────────────────────── */
const G3Bridge: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 116, left: PAD, right: PAD }}>
      <EnTag>You already know this shape · 得 = can, 不 = cannot</EnTag>
      <div style={{ border: `2px solid ${c.line}`, borderRadius: 14, padding: '26px 34px', marginBottom: 30 }}>
        <div style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginBottom: 12 }}>Lesson 16 · 第十六课</div>
        <div style={{ fontFamily: kai, fontSize: 48, lineHeight: 1.5 }}>
          听<T>得</T>懂 / 听<O>不</O>懂　　看<T>得</T>完 / 看<O>不</O>完
        </div>
      </div>
      <Steps>
        <Step>
          <div style={{ border: `2px solid ${c.accent}`, background: c.tgtBg, borderRadius: 14, padding: '26px 34px' }}>
            <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 12 }}>Lesson 17 · 这一课：够不够地方</div>
            <div style={{ fontFamily: kai, fontSize: 48, lineHeight: 1.5 }}>
              坐<T>得</T>下 / 坐<O>不</O>下　　放<T>得</T>下 / 放<O>不</O>下
            </div>
          </div>
        </Step>
        <Step><div style={{ marginTop: 26, fontFamily: kai, fontSize: 40, color: c.slate }}>一样的位置，只换最后一个字。<T>下</T>说的是「装不装得进去」。</div></Step>
      </Steps>
    </div>
  </Frame>
);

const G3Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <Seg n="Gr. 3">Is there room for it · can it fit, or not?</Seg>
      <Diagram>
        <SBox en="Verb" zh="坐 / 住 / 放 / 写" />
        <Plus />
        <SBox en="room / no room" zh={<span><T>得下</T> / <O>不下</O></span>} />
        <Plus />
        <SBox en="how many" zh="＜二十个人＞" blank />
      </Diagram>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><AltLine tag="room enough" tagEn="得下 = fits" gloss="fits twenty people.">这个客厅坐<T>得下</T>二十个人。</AltLine></Step>
          <Step><AltLine tag="not enough" tagEn="不下 = won't fit" gloss="can't fit twenty people.">这个客厅坐<O>不下</O>二十个人。</AltLine></Step>
          <Step><div style={{ marginTop: 8, fontFamily: kai, fontSize: 44, color: c.slate }}>这个冰箱放<O>不下</O>两个西瓜。<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 14 }}>冰箱 bīngxiāng, fridge · 西瓜 xīguā, watermelon</span></div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G3Table: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>得下 = there's room · 不下 = no room · one row, both sides</EnTag>
      <CapHead />
      <CapRow ico={icoSofa} obj="客厅" py="kètīng" v="坐" q="二十个人" />
      <CapRow ico={icoBuilding} obj="教室" py="jiàoshì" v="坐" q="三十个学生" />
      <CapRow ico={icoBed} obj="公寓" py="gōngyù" v="住" q="六个人" />
      <CapRow ico={icoFridge} obj="冰箱" py="bīngxiāng" v="放" q="两个西瓜" />
      <CapRow ico={icoPaper} obj="这张纸" py="zhǐ" v="写" q="八百个字" />
    </div>
  </Frame>
);

const G3Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 104, left: PAD, right: PAD }}>
      <EnTag>Ask a partner · is there room? Answer 得下 or 不下.</EnTag>
      <div style={{ borderLeft: `5px solid ${c.line}`, paddingLeft: 40, margin: '10px 0 26px' }}>
        <DLine who="Q" whoColor={c.accent} size={46}>这个教室坐<T>得下</T>三十个学生吗？</DLine>
        <DLine who="A" whoColor={c.slate} size={46}>这个教室坐<T>得下</T> / 坐<O>不下</O>三十个学生。</DLine>
      </div>
      <div style={{ display: 'flex', gap: 18, justifyContent: 'space-between' }}>
        {[[icoSofa, '你的客厅 · 坐 · 十个人'], [icoFridge, '你的冰箱 · 放 · 一个大西瓜'], [icoBox, '你的房间 · 放 · 三个大箱子'], [icoBed, '你的宿舍 · 住 · 三个人']].map(([ico, txt], i) => (
          <div key={i} style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '20px 14px', textAlign: 'center' }}>
            <div style={{ width: 60, height: 46, margin: '0 auto 10px', color: c.ink }}>{ico as React.ReactNode}</div>
            <div style={{ fontFamily: kai, fontSize: 30, lineHeight: 1.4, color: c.slate }}>{txt as string}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 22, fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>箱子 xiāngzi, box/case</div>
    </div>
  </Frame>
);

/* ── Check question (创意检核) · fill in, reveal answers line by line ──────── */
const Check: Page = () => {
  const tagY = { fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' as const, marginLeft: 16 };
  return (
    <Frame>
      <div style={{ position: 'absolute', top: 100, left: PAD, right: PAD }}>
        <EnTag>One 了 or two? Mark each spot with a caret ^ (one ^ = one 了)</EnTag>
        <div style={{ fontFamily: kai, fontSize: 40, lineHeight: 1.85, color: c.ink }}>
          <div>1. 王朋在宿舍住两个学期，还想再住一个学期。</div>
          <div>2. 他上个星期病三天，现在好了。</div>
          <div>3. 他找房子找一个多月，还没找到。</div>
          <div>4. 我昨天看电视看三个钟头。</div>
        </div>
        <div style={{ marginTop: 26, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '20px 30px' }}>
          <div style={{ fontFamily: tnr, fontSize: 25, color: c.accent, fontStyle: 'italic', marginBottom: 12 }}>Answer key</div>
          <div style={{ fontFamily: kai, fontSize: 38, lineHeight: 1.7 }}>
            <Steps>
              <Step><div>1. 住<HlY>^</HlY>两个学期<HlY>^</HlY><span style={tagY}>two 了</span></div></Step>
              <Step><div>2. 病<HlY>^</HlY>三天<span style={tagY}>one 了</span></div></Step>
              <Step><div>3. 找<HlY>^</HlY>一个多月<HlY>^</HlY><span style={tagY}>two 了</span></div></Step>
              <Step><div>4. 看电视看<HlY>^</HlY>三个钟头<span style={tagY}>one 了</span></div></Step>
            </Steps>
          </div>
        </div>
      </div>
    </Frame>
  );
};

/* ── Package (打包练习) · apartment hunting, all three patterns ──────────── */
const Baobao: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 8 }}>打包练习：找房子</div>
      <div style={{ fontFamily: tnr, fontSize: 29, color: c.slate, fontStyle: 'italic', marginBottom: 24, lineHeight: 1.4 }}>Pair work · A wants to rent a place, B is the landlord. A asks how long it's been for rent and whether it fits everyone and their stuff. B answers, then A says whether it's right for them.</div>
      <div style={{ display: 'flex', gap: 40 }}>
        <RoleCard label="Student A · 找房子" lines={[
          <>这套公寓出租<T>了</T>多久<T>了</T>？</>,
          <>客厅坐<T>得下</T>几个人？住<T>得下</T>四个人吗？</>,
          <>房间大不大？<T>连</T>书桌<T>都</T>放得下吗？</>,
        ]} />
        <RoleCard label="Student B · 房东" lines={[
          <>这套公寓出租<T>了</T>半年<T>了</T>。</>,
          <>客厅大，坐<T>得下</T>；可是卧室小，<T>连</T>大书桌<T>都</T>放<O>不下</O>。</>,
          <>你们四个人，这儿住<T>得下</T> / 住<O>不下</O>。</>,
        ]} />
      </div>
      <UseStrip items={['V 了…了', '连…都/也', 'V 得下 / 不下', '合适']} />
    </div>
  </Frame>
);

const TalkSelf: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 110, left: PAD, right: PAD }}>
      <EnTag>Talk about yourself · answer in full sentences</EnTag>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {[
          ['1', '你在现在住的地方住了多久了？'],
          ['2', '你学中文学了多久了？'],
          ['3', '你的房间放得下一张大床吗？'],
          ['4', '你的宿舍住得下三个人吗？'],
          ['5', '你的房间小不小？连什么都放不下？'],
          ['6', '你找房子（或找室友）找了多久了？'],
        ].map(([n, q]) => (
          <div key={n} style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
            <span style={{ fontFamily: tnr, fontSize: 32, color: c.accent }}>{n}</span>
            <span style={{ fontFamily: kai, fontSize: 44 }}>{q}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 140, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 80, fontWeight: 700, marginBottom: 40 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 60%' }}>
          <div style={{ fontFamily: kai, fontSize: 60, lineHeight: 1.5 }}>说一件事：你的房间<T>连</T>什么<T>都</T>放<O>不下</O>？<br />再说你在这儿住<T>了</T>多久<T>了</T>。</div>
        </div>
        <div style={{ flex: '1 1 40%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '28px 36px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, marginBottom: 16, fontStyle: 'italic' }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 29, color: c.ink, lineHeight: 1.65 }}>L17-1 · Grammar &amp; Writing E (1, 2)<br />L17-1 · Grammar &amp; Writing F (1, 2)<br />L17-1 · Grammar &amp; Writing G (1)</div>
        </div>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: 'L17_语法（一）住了…了 · 连…都 · V得/不下', createdAt: '2026-08-24T12:00:00.000Z' };

export const notes: (string | undefined)[] = [
  '8/28（周五 · Caldwell 0103 · 50′）。今天先考 L17-D1 生词小考（约10′），再上三个语法点：Gr.1 V了…了（时量/数量，持续到现在）· Gr.2 连…都/也 · Gr.3 V得下/不下（容量）。一天一份、内部分三段；进度慢就把没讲完的段留到 8/31 复习课。全课主题：租房子。',
  'Gr.1 揭题（结构图＋逐步例句）：动词＋了＋数量＋了。第二个「了」＝持续到现在、还会继续。住了两个学期了、找房子找了一个多月了（有宾语动词说两次）。',
  'Gr.1 对比（病了三天 vs 病了三天了 vs 每天走半个钟头）：有没有句末「了」＝已结束 vs 仍持续；第三行是不带「了」的习惯性时段（教师手册提醒三种要循序渐进，别漏第三种）。逐步揭示；最后点出「找了一个月了，可是还没找到」的延续义。',
  '时间轴（讲义招牌设计）：上个月看了三个、这个月看了两个，画在同一条线上，箭头指向现在。逐步揭示三句，最后一句「已经…了…了」＝两段加起来、到现在为止的总数，而且还在继续。可请学生自己举一个「到现在为止已经…了」的例子。',
  '散词造句：给打散的成分，学生先口头说出整句再写下来，逼语序（S＋过去时间＋V了＋数量＋宾语）。难词已标拼音（通 tōng、付房租 fù fángzū）。先两两说，再抽点写在白板上。',
  'Gr.1 放手产出：结构框把「说什么（V+O）＋再说一次动词＋了＋多久＋了」六格标清楚，学生一格一格代入。菜单全是 V+O（学中文→学、开车→开、找房子→找、做饭→做、打工→打），一条规则：有宾语就把动词说两次。右边蓝框提醒例外：住＋地方不重复（你在这儿住了多久了）。先示范一题，再两两互问，用 chips 答一段时间。',
  '量词复习（教师手册指定：练「连…都/也」之前先复习量词）：两行 chips 带全班快速说一遍，第一行是教师手册举的四个（一支笔、一件衣服、一条裤子、一封信），第二行接本课家具。最后两步用情境把句型引出来：我平常用电脑打字 → 我连一支笔都没有。学生这时已经准备好接 Gr.2。',
  'Gr.2 揭题（结构图＋逐步例句）：连＋极端项＋都/也＋（多为否定）。连电脑都放不下、连一件家具也没有。连最小/最基本的一个 → 暗示整体太小/太空。',
  'Gr.2 放手产出：句框「这个＿太＿了，连＿都＿」。两栏 chips（地方+问题 / 连什么）＋一个范例框。两人一组抱怨住处，鼓励夸张。脏/旧/床 已加拼音。',
  '从第十六课接进来（教师手册指定：先从上一课的可能补语引入）：听得懂/听不懂、看得完/看不完 是学生已经会的形状，只是把中间的字换掉。揭示第二格后强调「下」问的是装不装得进去，不是听得懂听不懂。三十秒的桥，学生就不会觉得这是全新的东西。',
  'Gr.3 揭题（结构图＋逐步例句＋能/不能对照）：坐/住/放/写 ＋ 得下（有空间）/不下（没空间）＋ 数量。坐得下 vs 坐不下二十个人；冰箱放不下两个西瓜。得下=蓝、不下=玫红，用方框颜色区分。',
  'Gr.3 容量表：一行一物、左得下右不下（客厅坐/教室坐/公寓住/冰箱放/纸写）。带学生一格一格念。对应课本练习「这个教室坐得下三十个学生吗」。',
  'Gr.3 两两问答：句框「这个＿＿得下＿吗？」答 得下/不下。四张情境卡（客厅坐十人/冰箱放大西瓜/房间放三个箱子/宿舍住三人）。先示范再两两。',
  '创意检核（判断一个了还是两个了）：直接给句子，学生判断这句需要一个还是两个「了」，并用 ^ 标插入位置（一个 ^ 代表一个了）。跟学习单 2A 同一做法。学生先在学习单上做，老师用 Steps 逐行揭示答案（^ 加黄色底线），并说出 one/two。已完成用一个了、还在持续用两个了。',
  '打包练习（整合三点 · 找房子 · 信息差）：A 找房子、B 房东。A 问「出租了多久了」「坐得下/住得下几个人」「连书桌都放得下吗」，B 用三种句式答。A/B 各一张角色卡，5–6 分钟后换角色，抽 1–2 组上台。要用上 V了…了、连…都/也、V得下/不下、合适。',
  'Talk about yourself：6 题个人化提问（住多久了/学中文多久了/房间放得下大床吗/宿舍住得下三人吗/连什么放不下/找房子找了多久了）。老师先示范 → 两两互问 → 换人。',
  '收尾 exit ticket：说房间连什么都放不下 + 在这儿住了多久了。作业：L17-1 Grammar & Writing E(1,2)、F(1,2)、G(1)。',
];

export default [
  Cover,
  G1Overview, G1Contrast, G1Timeline, G1Scramble, G1Board,
  MwWarm, G2Overview, G2Board,
  G3Bridge, G3Overview, G3Table, G3Board,
  Check,
  Baobao, TalkSelf, Closing,
] satisfies Page[];
