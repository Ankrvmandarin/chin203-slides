import { type Page, useSlidePageNumber } from '@open-slide/core';

/* ═══════════════════════════════════════════════════════════════════════════
   Theme: CHIN 203 Grammar (溝通式語法簡報)
   白底 · 深藍主色 · 楷體中文（LXGW WenKai）· Times 英文/拼音
   目標語言 = 中文（程度內）；後設語言（標題/標籤/指示）= English
   對比語法成分 → 不同底色框（藍=目標、綠=正/能、玫瑰=反/不）
   ═══════════════════════════════════════════════════════════════════════════ */

// Load a real Kai webfont so 楷体 renders regardless of local install.
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-chin203-grammar';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID;
  link.rel = 'stylesheet';
  link.href = FONT_HREF;
  document.head.appendChild(link);
}

const KAI = '"LXGW WenKai GB Screen","LXGW WenKai",serif';
const TNR = '"Times New Roman",Times,serif';
const INK = '#16273f', ACCENT = '#1f4e9a', ROSE = '#b23a48', SLATE = '#41597c', MUTED = '#6a768a', FAINT = '#aab4c3';

const TONE: Record<string, { bg: string; border: string; text: string }> = {
  neutral: { bg: '#eef2f8', border: '#d6deea', text: INK },
  target: { bg: '#eaf1f9', border: ACCENT, text: ACCENT },
  pos: { bg: '#e9f3ec', border: '#2f8f5b', text: '#1f6d43' },
  neg: { bg: '#fbeceb', border: ROSE, text: ROSE },
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: KAI, fontSize: 30, letterSpacing: '0.14em', color: ACCENT }}>{children}</div>
);
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 style={{ fontFamily: KAI, fontSize: 120, fontWeight: 700, lineHeight: 1.1, margin: 0, color: INK }}>{children}</h1>
);
const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: 108, right: 108, bottom: 52, display: 'flex', justifyContent: 'space-between', fontFamily: KAI, fontSize: 24, color: FAINT }}>
      <span>CHIN 203 · 语法</span>
      <span style={{ fontFamily: TNR }}>{current} / {total}</span>
    </div>
  );
};
const Frame = ({ children, tag }: { children: React.ReactNode; tag?: string }) => (
  <div style={{ width: '100%', height: '100%', background: '#ffffff', color: INK, position: 'relative', overflow: 'hidden', padding: '120px 108px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    {tag && <div style={{ position: 'absolute', top: 52, right: 108, fontFamily: KAI, fontSize: 24, letterSpacing: '0.1em', color: FAINT }}>{tag}</div>}
    {children}
    <Footer />
  </div>
);
const FnHeading = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: TNR, fontSize: 40, color: SLATE, fontStyle: 'italic', marginBottom: 36 }}>{children}</div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: ACCENT, fontWeight: 700 }}>{children}</span>;
const O = ({ children }: { children: React.ReactNode }) => <span style={{ color: ROSE, fontWeight: 700 }}>{children}</span>;
const En = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: TNR, fontSize: 30, color: MUTED, fontStyle: 'italic', marginLeft: 20 }}>{children}</span>;
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

const Structure: Page = () => (
  <Frame tag="语法（一）">
    <FnHeading>How well is the action done?</FnHeading>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 22, marginBottom: 56 }}>
      <SBox en="Verb" zh="动词" />
      <Plus />
      <SBox en="particle" zh="得" tone="target" />
      <Plus />
      <SBox en="how well" zh="〈怎么样〉" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <Example zh={<>他跑<T>得</T>很快。</>} en="He runs fast." />
      <Example zh={<>我们玩儿<T>得</T>很高兴。</>} en="We had a great time." />
    </div>
    <div style={{ display: 'flex', gap: 40, marginTop: 60 }}>
      <SBox en="easy · early" zh="就" tone="pos" />
      <SBox en="hard · late" zh="才" tone="neg" />
    </div>
  </Frame>
);

const Packaged: Page = () => (
  <Frame tag="语法（一）">
    <FnHeading>Pair work · make a small, easy plan</FnHeading>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 56 }}>
      <Example zh={<>别人都不去，<T>就</T>我们俩去。</>} en="Just the two of us are going." />
      <Example zh={<>我没费什么力气，<T>就</T>买到票了。</>} en="I got the tickets easily." />
      <Example zh={<>这本书我看了一个星期，<O>才</O>看完。</>} en="It took me a whole week to finish." />
    </div>
    <UseStrip items={['别人都…就…', '没费力就…', '费了力才…', '一言为定']} />
  </Frame>
);

export default [Cover, Structure, Packaged];
