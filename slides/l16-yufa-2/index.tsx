import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';


// Kai webfont (LXGW WenKai GB Screen) — renders 楷体 without a local install; local() used if present.
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-yufa-2';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 语法（二）  8/19  ·  就 + 才/就 对比
   白 + 深蓝　·　中文 LXGW WenKai　·　英文 Times New Roman
   三层鹰架 + 逐步揭示 + 打包练习　·　后设语言=English，教师话进 notes
   ═══════════════════════════════════════════════════════════════════════════ */

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#16273f', accent: '#1f4e9a' },
  fonts: {
    display: '"LXGW WenKai GB Screen", "LXGW WenKai", serif',
    body: '"Times New Roman", Times, "PingFang SC", serif',
  },
  typeScale: { hero: 128, body: 56 }, radius: 8,
};
const c = { bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', slate: '#41597c', muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea', good: '#1f4e9a', markHi: 'rgba(31,78,154,0.14)' };
const kai = 'var(--osd-font-display)';
const tnr = '"Times New Roman", Times, serif';
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };
const Frame = ({ children, tag = '语法（二）' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十六课 约会</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const Hl = ({ children }: { children: React.ReactNode }) => <span style={{ background: `linear-gradient(transparent 56%, ${c.markHi} 56%)`, padding: '0 3px' }}>{children}</span>;
const Blank = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.slate }}>{children}</span>;
const En = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: tnr, fontSize: 32, color: c.muted, fontStyle: 'italic', marginLeft: 22 }}>{children}</span>;
const EnTag = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 28, color: c.slate, marginBottom: 16 }}>{children}</div>;

const SBox = ({ en, zh, fixed = false, blank = false }: { en: string; zh: string; fixed?: boolean; blank?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
    <div style={{ fontFamily: tnr, fontSize: 24, color: fixed ? c.accent : c.muted, fontStyle: 'italic' }}>{en}</div>
    <div style={{ fontFamily: kai, fontSize: 52, fontWeight: 600, lineHeight: 1, color: fixed ? c.accent : (blank ? c.slate : c.ink), padding: '16px 26px', borderRadius: 12, minWidth: 96, textAlign: 'center', border: `2px solid ${fixed ? c.accent : c.line}`, background: fixed ? 'rgba(31,78,154,0.06)' : c.panel, borderStyle: blank ? 'dashed' : 'solid' }}>{zh}</div>
  </div>
);
const Plus = () => <div style={{ fontFamily: tnr, fontSize: 40, color: c.faint, paddingBottom: 14, alignSelf: 'flex-end' }}>+</div>;
const Diagram = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18 }}>{children}</div>;

const Sg = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Vv = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>{children}</svg>;
const icoBed = <Vv><g {...Sg}><path d="M16 44 V74 M84 56 V74 M16 56 H84" /><path d="M24 56 V46 a6 6 0 0 1 6 -6 H54 a6 6 0 0 1 6 6 V56" /><circle cx="36" cy="48" r="5" stroke={c.accent} /></g></Vv>;
const icoPaper = <Vv><g {...Sg}><rect x="26" y="16" width="42" height="60" rx="4" /><path d="M34 34 H60 M34 46 H60 M34 58 H50" strokeWidth={3.2} stroke={c.accent} /><path d="M60 70 L78 52 L84 58 L66 76 Z" /></g></Vv>;
const icoDumbbell = <Vv><g {...Sg}><path d="M28 40 V60 M72 40 V60 M20 46 V54 M80 46 V54" strokeWidth={5} /><path d="M28 50 H72" stroke={c.accent} /></g></Vv>;
const icoBowl = <Vv><g {...Sg}><path d="M18 50 H82 a32 32 0 0 1 -64 0 Z" /><path d="M42 32 q4 -8 0 -14 M54 32 q4 -8 0 -14" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoReading = <Vv><g {...Sg}><path d="M50 30 C41 24 24 24 15 30 L15 72 C24 66 41 66 50 72 C59 66 76 66 85 72 L85 30 C76 24 59 24 50 30 Z" /><path d="M50 30 L50 72" /></g></Vv>;
const icoSpeak = <Vv><g {...Sg}><path d="M20 22 H80 a8 8 0 0 1 8 8 V56 a8 8 0 0 1 -8 8 H44 L30 78 V64 H20 a8 8 0 0 1 -8 -8 V30 a8 8 0 0 1 8 -8 Z" /></g><text x="50" y="52" textAnchor="middle" fontSize="30" fontFamily='"LXGW WenKai GB Screen", "LXGW WenKai", serif' fill={c.accent}>中</text></Vv>;
const icoTeach = <Vv><g {...Sg}><rect x="18" y="20" width="64" height="44" rx="4" /><path d="M40 64 L34 80 M60 64 L66 80" /></g><text x="50" y="48" textAnchor="middle" fontSize="21" fontFamily="Times New Roman, serif" fontWeight="700" fill={c.accent}>ABC</text></Vv>;
const icoMoney = <Vv><g {...Sg}><circle cx="50" cy="52" r="30" /></g><text x="50" y="64" textAnchor="middle" fontSize="34" fontFamily="Times New Roman, serif" fontWeight="700" fill={c.accent}>￥</text></Vv>;
const icoPeople = <Vv><g {...Sg}><circle cx="36" cy="34" r="10" /><path d="M20 74 a16 16 0 0 1 32 0" /><circle cx="64" cy="34" r="10" stroke={c.accent} /><path d="M48 74 a16 16 0 0 1 32 0" stroke={c.accent} /></g></Vv>;
const icoFilm = <Vv><g {...Sg}><rect x="16" y="26" width="68" height="48" rx="5" /><path d="M30 26 L30 74 M70 26 L70 74" strokeWidth={3.2} /><path d="M16 40 H30 M70 40 H84 M16 60 H30 M70 60 H84" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoTicket = <Vv><g {...Sg}><path d="M18 34 H82 V50 a6 6 0 0 0 0 12 V78 H18 V62 a6 6 0 0 0 0 -12 Z" /><path d="M52 34 V78" strokeWidth={3} strokeDasharray="2 8" stroke={c.accent} /></g></Vv>;

const Ill = ({ ico, zh, py, w, h }: { ico: React.ReactNode; zh: string; py: string; w: number; h: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{ width: w, height: h, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}><div style={{ width: '60%', height: '60%' }}>{ico}</div></div>
    <div style={{ textAlign: 'center' }}><div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{py}</div><div style={{ fontFamily: kai, fontSize: 34, fontWeight: 600 }}>{zh}</div></div>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 40, padding: '7px 24px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const DLine = ({ who, whoColor, size = 48, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, marginBottom: 22, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: whoColor, flex: '0 0 130px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.35 }}>{children}</span>
  </div>
);
const QNum = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
    <span style={{ fontFamily: tnr, fontSize: 32, color: c.accent }}>{n}</span>
    <span style={{ fontFamily: kai, fontSize: 44, lineHeight: 1.35 }}>{children}</span>
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
// 才 / 就 contrast row
const CJRow = ({ ico, tagZh, tagEn, children }: { ico: React.ReactNode; tagZh: string; tagEn: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginBottom: 26 }}>
    <div style={{ width: 150, height: 100, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink, flex: '0 0 auto' }}><div style={{ width: '55%', height: '55%' }}>{ico}</div></div>
    <div style={{ width: 150, flex: '0 0 auto' }}>
      <div style={{ fontFamily: kai, fontSize: 40, fontWeight: 700, color: c.accent }}>{tagZh}</div>
      <div style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{tagEn}</div>
    </div>
    <div style={{ fontFamily: kai, fontSize: 52, fontWeight: 500 }}>{children}</div>
  </div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 语法（二）</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 116, fontWeight: 700, lineHeight: 1.1, color: c.ink }}>就我们俩</div>
      <div style={{ fontFamily: kai, fontSize: 76, fontWeight: 600, color: c.accent, marginTop: 8 }}>费了很大的力气才买到</div>
      <div style={{ fontFamily: tnr, fontSize: 34, color: c.slate, marginTop: 40, fontStyle: 'italic' }}>only how few · with effort (才) vs easily (就)</div>
    </div>
  </Frame>
);

const WarmUp: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <EnTag>Warm-up · Ask a partner: how well did you do these yesterday?</EnTag>
      <div style={{ fontFamily: kai, fontSize: 54, fontWeight: 700, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 34px', display: 'inline-block' }}>你昨天　<Blank>＿＿＿</Blank>　<T>得</T>　怎么样？</div>
      <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', gap: 18 }}>
        <Ill ico={icoBed} zh="睡觉" py="shuì jiào" w={196} h={126} />
        <Ill ico={icoPaper} zh="功课" py="gōngkè" w={196} h={126} />
        <Ill ico={icoDumbbell} zh="运动" py="yùndòng" w={196} h={126} />
        <Ill ico={icoBowl} zh="吃饭" py="chī fàn" w={196} h={126} />
        <Ill ico={icoReading} zh="看书" py="kàn shū" w={196} h={126} />
        <Ill ico={icoSpeak} zh="说中文" py="shuō Zhōngwén" w={196} h={126} />
      </div>
      <div style={{ marginTop: 26 }}><Chips words={['很好', '很累', '很快', '很晚', '不错']} /></div>
    </div>
  </Frame>
);

const G1Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 132, left: PAD, right: PAD }}>
      <EnTag>只有这么少 —— just / only this few</EnTag>
      <Diagram>
        <SBox en="just" zh="就" fixed />
        <Plus />
        <SBox en="how few" zh="＜很少＞" blank />
      </Diagram>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: 56, fontWeight: 500, marginBottom: 20 }}>我们班人很少，<T>就</T>七个学生。<En>just seven</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 56, fontWeight: 500, marginBottom: 20 }}>还有别人(bie2ren2, other people)吗？<br />{'没有，就我们俩。          '}<T>{''}</T>{''}<En>just the two of us</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: 56, fontWeight: 500 }}>今天功课很少，<T>就</T>写五个汉字。<En>only write five</En></div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G1Pattern: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 138, left: PAD, right: PAD }}>
      <EnTag>就 goes right before the small amount　·　就放在「很少」的词前面</EnTag>
      <Diagram>
        <SBox en="just" zh="就" fixed />
        <Plus />
        <SBox en="amount / people / action" zh="七个学生" blank />
      </Diagram>
      <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontFamily: kai, fontSize: 48 }}><T>就</T>七个学生　<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>+ amount</span></div>
        <div style={{ fontFamily: kai, fontSize: 48 }}><T>就</T>我们俩　<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>+ people</span></div>
        <div style={{ fontFamily: kai, fontSize: 48 }}><T>就</T>写五个汉字　<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>+ action</span></div>
      </div>
    </div>
  </Frame>
);

const G1Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 112, left: PAD, right: PAD }}>
      <EnTag>{'Ask a partner  what do you have very little of? '}</EnTag>
      <div style={{ fontFamily: kai, fontSize: 54, fontWeight: 700, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 34px', display: 'inline-block' }}>我　<Blank>＿＿＿</Blank>　很少，<T>就</T>　<Blank>＿＿＿</Blank>　。</div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 18 }}>
        <Ill ico={icoTeach} zh="今天的课" py="kè" w={196} h={126} />
        <Ill ico={icoMoney} zh="这个月的钱" py="qián" w={196} h={126} />
        <Ill ico={icoPeople} zh="宿舍的人" py="shìyǒu" w={196} h={126} />
        <Ill ico={icoPaper} zh="今天的功课" py="gōngkè" w={196} h={126} />
        <Ill ico={icoFilm} zh="看过的电影" py="diànyǐng" w={196} h={126} />
      </div>
      <div style={{ marginTop: 26 }}><Chips words={['一节', '两个人', '五十块', '写十个字', '一部']} /></div>
    </div>
  </Frame>
);

const G2Contrast: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 130, left: PAD, right: PAD }}>
      <EnTag>Same result, two feelings — hard &amp; late (才) vs easy &amp; soon (就)</EnTag>
      <div style={{ marginTop: 26 }}>
        <Steps>
          <Step><CJRow ico={icoTicket} tagZh="才" tagEn="only then · hard">票很难买，我费了很大的力气　<T>才</T>　买到。</CJRow></Step>
          <Step><CJRow ico={icoTicket} tagZh="就" tagEn="right away · easy">票很好买，我很容易　<T>就</T>　买到了。</CJRow></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G2Practice: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 132, left: PAD, right: PAD }}>
      <EnTag>Choose 才 or 就 — and say why. (hard/slow → 才 · easy/soon → 就)</EnTag>
      <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80, rowGap: 26 }}>
        <QNum n={1}>我等了他两个小时，他<Blank>＿</Blank>来。</QNum>
        <QNum n={2}>我八点上课，七点<Blank>＿</Blank>到教室了。</QNum>
        <QNum n={3}>这个字很难，我写了十次<Blank>＿</Blank>写对。</QNum>
        <QNum n={4}>这本书很有意思，一个晚上<Blank>＿</Blank>看完了。</QNum>
        <QNum n={5}>他费了很大的力气<Blank>＿</Blank>买到票。</QNum>
        <QNum n={6}>你费了很大力气<Blank>＿</Blank>做完什么事？</QNum>
      </div>
    </div>
  </Frame>
);

const Roleplay: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 130, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 60, fontWeight: 700, marginBottom: 12 }}>这张票怎么来的？</div>
      <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', marginBottom: 28 }}>Pair work · A got a ticket, B didn't. Tell each other how it went.</div>
      <div style={{ display: 'flex', gap: 60 }}>
        <div style={{ flex: '1 1 64%', borderLeft: `5px solid ${c.line}`, paddingLeft: 42 }}>
          <DLine who="A" whoColor={c.accent}>你买到票了吗？</DLine>
          <DLine who="B" whoColor={c.slate}>没有，我<T>＿＿＿</T>。你呢？</DLine>
          <DLine who="A" whoColor={c.accent}>我费了很大的力气<T>才</T>买到。</DLine>
          <DLine who="B" whoColor={c.slate}>太好了！那一言为定，后天一起去。</DLine>
        </div>
        <div style={{ flex: '1 1 36%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '28px 32px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 16 }}>Use ↓</div>
          <div style={{ fontFamily: kai, fontSize: 34, lineHeight: 1.75 }}>费了很大力气才…<br />很容易就…<br />买得到 / 买不到</div>
        </div>
      </div>
    </div>
  </Frame>
);

// 两种状态示意（结构分层：问句在上，两种情况在下）
const StateCol = ({ label, en, accent, lines }: { label: string; en: string; accent?: boolean; lines: React.ReactNode[] }) => (
  <div style={{ flex: 1, background: accent ? 'rgba(31,78,154,0.06)' : c.panel, border: `2px solid ${accent ? c.accent : c.line}`, borderRadius: 14, padding: '24px 30px' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
      <span style={{ fontFamily: kai, fontSize: 40, fontWeight: 700, color: accent ? c.accent : c.slate }}>{label}</span>
      <span style={{ fontFamily: tnr, fontSize: 25, color: c.muted, fontStyle: 'italic' }}>{en}</span>
    </div>
    {lines.map((l, i) => <div key={i} style={{ fontFamily: kai, fontSize: 44, marginBottom: i === lines.length - 1 ? 0 : 12 }}>{l}</div>)}
  </div>
);

const Baobao: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 6 }}>两两互问：你有多少？</div>
      <div style={{ fontFamily: tnr, fontSize: 28, color: c.slate, fontStyle: 'italic', marginBottom: 22 }}>Pair work · Ask a classmate. If the amount feels small, answer with 就; if not, just use 有 — no 就.</div>
      {/* 上层：互问的问句 */}
      <div style={{ display: 'flex', gap: 50, marginBottom: 22 }}>
        <span style={{ fontFamily: kai, fontSize: 40 }}><span style={{ fontFamily: tnr, color: c.accent, marginRight: 10 }}>1</span>你今天有几节课？</span>
        <span style={{ fontFamily: kai, fontSize: 40 }}><span style={{ fontFamily: tnr, color: c.accent, marginRight: 10 }}>2</span>你们宿舍住几个人？</span>
      </div>
      {/* 分层箭头 */}
      <div style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', margin: '0 0 16px 4px' }}>↓ answer depends on your situation · 看你的情况</div>
      {/* 下层：两种状态 */}
      <div style={{ display: 'flex', gap: 34 }}>
        <StateCol label="很少" en="few → 就 + amount" accent lines={[<>我今天<T>就</T>一节课。</>, <><T>就</T>我们俩。</>]} />
        <StateCol label="不少" en="more → 有 + amount (no 就)" lines={[<>我今天<Blank>有</Blank>四节课。</>, <>我们<Blank>住</Blank>四个人。</>]} />
      </div>
      <UseStrip items={['就 + 数量（很少时）', '有 + 数量（不少时）', '就我们俩']} />
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 152, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 84, fontWeight: 700, marginBottom: 44 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 60%' }}>
          <div style={{ fontFamily: kai, fontSize: 48, lineHeight: 1.5 }}>用「<T>就</T>{'」说一句你fall 2026 / spring '}<br />2026学期怎么样，<br />再说一件你最近{''}<T>费了很大的力气才</T>做完的事。</div>
        </div>
        <div style={{ flex: '1 1 40%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '30px 38px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 18 }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: '56px', color: c.ink, lineHeight: 1.7 }}>L16-2 · Reading B</div>
        </div>
      </div>
    </div>
  </Frame>
);

// ── 课本 Language Practice D（就 · 表例外「只有…」）────────────────────────
// 人物按课本 Cast of Characters 的专属颜色标色（书上把答案人物用该色标出）
const CAST: [string, string, string][] = [
  ['王朋', 'Wáng Péng', '#2E6FB0'],
  ['李友', 'Lǐ Yǒu', '#D14C97'],
  ['白英爱', "Bái Yīng'ài", '#D2352C'],
  ['高文中', 'Gāo Wénzhōng', '#5AA43C'],
  ['高小音', 'Gāo Xiǎoyīn', '#E08A1E'],
  ['常老师', 'Cháng lǎoshī', '#7A3C9C'],
];
const Face = ({ col }: { col: string }) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%"><g fill="none" stroke={col} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round"><circle cx="50" cy="38" r="17" /><path d="M22 84 a28 28 0 0 1 56 0" /></g></svg>
);
const ActFanQuiz: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 88, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 54, fontWeight: 700, marginBottom: 2 }}>IC fan quiz</div>
      <EnTag>Textbook D · The book marks each answer in that character’s color. Match it here, then answer with 就 (jiù).</EnTag>
      <div style={{ display: 'flex', gap: 14, margin: '10px 0 22px' }}>
        {CAST.map(([zh, py, col]) => (
          <div key={zh} style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '12px 6px', textAlign: 'center' }}>
            <div style={{ width: 58, height: 58, margin: '0 auto 6px' }}><Face col={col} /></div>
            <div style={{ fontFamily: kai, fontSize: 30, fontWeight: 700, color: col }}>{zh}</div>
            <div style={{ fontFamily: tnr, fontSize: 19, color: c.muted, fontStyle: 'italic' }}>{py}</div>
          </div>
        ))}
      </div>
      <div style={{ borderLeft: `5px solid ${c.line}`, paddingLeft: 38, margin: '0 0 20px' }}>
        <DLine who="Q" whoColor={c.accent}>他们都有弟弟吗？</DLine>
        <DLine who="A" whoColor={c.slate}>不，<T>就</T>高小音一个人有弟弟。</DLine>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80, rowGap: 20 }}>
        <QNum n={1}>他们都会滑冰吗？</QNum>
        <QNum n={2}>他们都吃素吗？</QNum>
        <QNum n={3}>他们都爱吃蛋糕吗？</QNum>
        <QNum n={4}>他们都不会说英文吗？</QNum>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '语法（二）就我们俩／才就对比', createdAt: '2026-08-16T16:05:00.000Z' };

export const notes: (string | undefined)[] = [
  '课堂节奏：暖身 3′ · 复习 10′ · 讲练 22′ · 对比 10′ · 收尾 5′（Caldwell 0103）。今天：就（数量少）＋ 才/就 对比。',
  '暖身：用上一课的得-补语两两问「你昨天＿得怎么样？」，热身兼复习。老师先示范。',
  '揭题：就 = 说数量很少。带三句：就七个学生（数量）、就我们俩（人）、就写五个汉字（动作）。让学生看例句归纳。',
  '结构图：就 + 数量／人／动作；就放在要说「很少」的那个词前面。',
  '放手产出：我＿很少，就＿。看图＋下方数量自由组句。先两两，再抽点。',
  '课本活动 D「IC fan quiz」：就＝表例外。人像顺序＝书上颜色：王朋(蓝)、李友(粉)、白英爱(红·韩国)、高文中(绿·英国)、高小音(橙·高文中的姐姐)、常老师(紫)。答案(书按颜色标出，用「不，就＿(一个人)＿」)：例·有弟弟→就高小音；1 会滑冰→就白英爱和高文中(红+绿,两个人)；2 吃素→就李友(粉)；3 爱吃蛋糕→就白英爱(红)；4 不会说英文→书标常老师(紫)。注：常老师在美国教书其实会说英文，第4题语意偏趣味/或书本设定，上课前可自行确认。学生指着人像回答。',
  '对比揭题：同一件事两种说法。难/慢/不容易 → 才（费了很大力气才买到）；快/容易/早 → 就（很容易就买到）。',
  '控制练习：才还是就？先各自想，再两两对答、说理由。抽点。答案：1才 2就 3才 4就 5才 6开放。',
  '两两对话（这张票怎么来的，示范/控制）：两人一组 · 6 分钟 · 换角色 · 请 2 组上台。',
  '两两互问（就，分两种状态）：先问「你今天有几节课？你们宿舍住几个人？」，再看自己的情况回答——觉得少 → 就+数量（我今天就一节课／就我们俩）；不少 → 有+数量、不用就（我有四节课）。上层问句、下层两种状态。两人一组互问互答，抽点分享。（关键：就只用在「少」的情况。）',
  '收尾：用就说一句真实情况，再说一件费了很大力气才做完的事。作业：L16-2 Reading-B。（回家准备 L16-D2 生词小考，星期五考。）',
];

export default [Cover, WarmUp, G1Overview, G1Pattern, G1Board, ActFanQuiz, G2Contrast, G2Practice, Roleplay, Baobao, Closing] satisfies Page[];
