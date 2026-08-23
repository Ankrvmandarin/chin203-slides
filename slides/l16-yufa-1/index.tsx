import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';


// Kai webfont (LXGW WenKai GB Screen) — renders 楷体 without a local install; local() used if present.
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-yufa-1';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 语法（一）  8/18
   得-complement (玩儿得很高兴) + potential V得/不 (六点半回不来)
   主题色：白 + 深蓝　·　中文=Kai（楷体）　·　英文/拼音=Times New Roman
   三层鹰架 + 逐步揭示　·　目标语言=中文；后设语言（结构标签/任务指示）=English
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
  bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', slate: '#41597c',
  muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea',
  good: '#1f4e9a', markHi: 'rgba(31,78,154,0.14)',
};
const kai = 'var(--osd-font-display)';        // 中文（楷体 Kai）
const tnr = '"Times New Roman", Times, serif'; // 英文 / 拼音
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };
const Frame = ({ children, tag = '语法（一）' }: { children: React.ReactNode; tag?: string }) => (
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

// ── structure diagram: labelled slot boxes (English caption over Chinese) ─────
const SBox = ({ en, zh, fixed = false, blank = false }: { en: string; zh: string; fixed?: boolean; blank?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
    <div style={{ fontFamily: tnr, fontSize: 24, color: fixed ? c.accent : c.muted, fontStyle: 'italic' }}>{en}</div>
    <div style={{
      fontFamily: kai, fontSize: 52, fontWeight: 600, lineHeight: 1,
      color: fixed ? c.accent : (blank ? c.slate : c.ink),
      padding: '16px 26px', borderRadius: 12, minWidth: 96, textAlign: 'center',
      border: `2px solid ${fixed ? c.accent : c.line}`,
      background: fixed ? 'rgba(31,78,154,0.06)' : c.panel,
      borderStyle: blank ? 'dashed' : 'solid',
    }}>{zh}</div>
  </div>
);
const Plus = () => <div style={{ fontFamily: tnr, fontSize: 40, color: c.faint, paddingBottom: 14, alignSelf: 'flex-end' }}>+</div>;
const Diagram = ({ children }: { children: React.ReactNode }) => <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18 }}>{children}</div>;

// ── SVG illustration library ─────────────────────────────────────────────────
const Sg = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Vv = ({ children }: { children: React.ReactNode }) => <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ display: 'block' }}>{children}</svg>;
const icoReading = <Vv><g {...Sg}><path d="M50 30 C41 24 24 24 15 30 L15 72 C24 66 41 66 50 72 C59 66 76 66 85 72 L85 30 C76 24 59 24 50 30 Z" /><path d="M50 30 L50 72" /></g></Vv>;
const icoBooks = <Vv><g {...Sg}><rect x="20" y="58" width="60" height="15" rx="3" /><rect x="25" y="41" width="50" height="15" rx="3" /><rect x="30" y="24" width="40" height="15" rx="3" /><path d="M35 58 L35 73 M62 41 L62 56" stroke={c.accent} /></g></Vv>;
const icoTablet = <Vv><g {...Sg}><rect x="30" y="14" width="40" height="72" rx="7" /><path d="M38 32 H62 M38 44 H62 M38 56 H54" strokeWidth={3.4} stroke={c.accent} /><circle cx="50" cy="76" r="2.6" fill="currentColor" stroke="none" /></g></Vv>;
const icoRun = <Vv><g {...Sg}><circle cx="60" cy="24" r="8" /><path d="M60 34 L50 52 L64 60 L60 80" /><path d="M50 52 L34 46 M50 52 L40 70" /></g></Vv>;
const icoFilm = <Vv><g {...Sg}><rect x="16" y="26" width="68" height="48" rx="5" /><path d="M30 26 L30 74 M70 26 L70 74" strokeWidth={3.2} /><path d="M16 40 H30 M70 40 H84 M16 60 H30 M70 60 H84" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoPhone = <Vv><g {...Sg}><rect x="34" y="14" width="32" height="72" rx="7" /><path d="M44 74 H56" stroke={c.accent} /></g></Vv>;
const icoCook = <Vv><g {...Sg}><circle cx="43" cy="54" r="23" /><path d="M64 50 L90 45" /><path d="M38 50 q5 -6 10 0 M50 56 q5 -6 10 0" strokeWidth={3.4} stroke={c.accent} /></g></Vv>;
const icoSpeak = <Vv><g {...Sg}><path d="M20 22 H80 a8 8 0 0 1 8 8 V56 a8 8 0 0 1 -8 8 H44 L30 78 V64 H20 a8 8 0 0 1 -8 -8 V30 a8 8 0 0 1 8 -8 Z" /></g><text x="50" y="52" textAnchor="middle" fontSize="30" fontFamily='"LXGW WenKai GB Screen", "LXGW WenKai", serif' fill={c.accent}>中</text></Vv>;
const icoBowl = <Vv><g {...Sg}><path d="M18 50 H82 a32 32 0 0 1 -64 0 Z" /><path d="M42 30 q4 -8 0 -14 M54 30 q4 -8 0 -14" strokeWidth={3.2} stroke={c.accent} /></g></Vv>;
const icoTicket = <Vv><g {...Sg}><path d="M18 34 H82 V50 a6 6 0 0 0 0 12 V78 H18 V62 a6 6 0 0 0 0 -12 Z" /><path d="M52 34 V78" strokeWidth={3} strokeDasharray="2 8" stroke={c.accent} /></g></Vv>;
const icoShield = <Vv><g {...Sg}><path d="M50 16 L78 26 V52 C78 68 66 78 50 84 C34 78 22 68 22 52 V26 Z" /><path d="M40 50 L48 58 L62 40" stroke={c.accent} /></g></Vv>;
const icoPaper = <Vv><g {...Sg}><rect x="26" y="16" width="42" height="60" rx="4" /><path d="M34 34 H60 M34 46 H60 M34 58 H50" strokeWidth={3.2} stroke={c.accent} /><path d="M60 70 L78 52 L84 58 L66 76 Z" /></g></Vv>;
const icoClock = <Vv><g {...Sg}><circle cx="50" cy="52" r="30" /><path d="M50 34 V52 L64 60" stroke={c.accent} /></g></Vv>;

const Ill = ({ ico, zh, py, w, h }: { ico: React.ReactNode; zh: string; py: string; w: number; h: number }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{ width: w, height: h, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}>
      <div style={{ width: '60%', height: '60%' }}>{ico}</div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>{py}</div>
      <div style={{ fontFamily: kai, fontSize: 36, fontWeight: 600 }}>{zh}</div>
    </div>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 40, padding: '7px 24px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const DLine = ({ who, whoColor, size = 50, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, marginBottom: 24, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: whoColor, flex: '0 0 130px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.35 }}>{children}</span>
  </div>
);
const AltLine = ({ tag, tagEn, children, gloss }: { tag: string; tagEn: string; children: React.ReactNode; gloss: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginBottom: 20 }}>
    <span style={{ width: 160, display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontFamily: kai, fontSize: 34, fontWeight: 700, color: c.accent }}>{tag}</span>
      <span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic' }}>{tagEn}</span>
    </span>
    <span style={{ fontFamily: kai, fontSize: 56, fontWeight: 500 }}>{children}</span>
    <span style={{ fontFamily: tnr, fontSize: 30, color: c.muted, fontStyle: 'italic' }}>{gloss}</span>
  </div>
);

// potential-form contrast table
const PotHead = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1fr', alignItems: 'center', gap: 20, paddingBottom: 12, borderBottom: `2px solid ${c.ink}` }}>
    <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic' }}>object&nbsp;·&nbsp;<span style={{ fontFamily: kai, fontStyle: 'normal' }}>东西</span></span>
    <span style={{ fontFamily: tnr, fontSize: 25, color: c.accent }}><span style={{ fontFamily: kai }}>能</span> can&nbsp;·&nbsp;V<span style={{ fontFamily: kai, color: c.accent }}>得</span>result</span>
    <span style={{ fontFamily: tnr, fontSize: 25, color: c.muted }}><span style={{ fontFamily: kai }}>不能</span> can't&nbsp;·&nbsp;V<span style={{ fontFamily: kai, color: c.accent }}>不</span>result</span>
  </div>
);
const PotRow = ({ ico, obj, py, v, res }: { ico: React.ReactNode; obj: string; py: string; v: string; res: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1fr', alignItems: 'center', gap: 20, padding: '13px 0', borderBottom: `1px solid ${c.line}` }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 68, height: 50, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.ink }}><div style={{ width: '62%', height: '62%' }}>{ico}</div></div>
      <div><div style={{ fontFamily: tnr, fontSize: 21, color: c.muted, fontStyle: 'italic' }}>{py}</div><div style={{ fontFamily: kai, fontSize: 34, fontWeight: 600 }}>{obj}</div></div>
    </div>
    <span style={{ fontFamily: kai, fontSize: 46, fontWeight: 600, color: c.accent }}>{v}<span style={{ color: c.accent }}>得</span>{res}</span>
    <span style={{ fontFamily: kai, fontSize: 46, color: c.muted }}>{v}<span style={{ color: c.accent }}>不</span>{res}</span>
  </div>
);

// role card + required-language strip (for 打包练习 packaged task)
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

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 语法（一）</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 116, fontWeight: 700, lineHeight: 1.1, color: c.ink }}>玩儿得很高兴</div>
      <div style={{ fontFamily: kai, fontSize: 84, fontWeight: 600, color: c.accent, marginTop: 8 }}>六点半回不来</div>
      <div style={{ fontFamily: tnr, fontSize: 34, color: c.slate, marginTop: 40, fontStyle: 'italic' }}>How well you do something · whether you can or can't do it</div>
    </div>
  </Frame>
);

const G1Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 132, left: PAD, right: PAD }}>
      <EnTag>How well is the action done?</EnTag>
      <Diagram>
        <SBox en="Verb" zh="动词" />
        <Plus />
        <SBox en="particle" zh="得" fixed />
        <Plus />
        <SBox en="how well" zh="＜怎么样＞" blank />
      </Diagram>
      <div style={{ marginTop: 46 }}>
        <Steps>
          <Step><div style={{ fontFamily: kai, fontSize: '126px', fontWeight: 500, marginBottom: 22 }}>他跑<T>得</T>很快。<En>He runs fast.</En></div></Step>
          <Step><div style={{ fontFamily: kai, fontSize: '116px', fontWeight: 500 }}>我们玩儿<T>得</T>很高兴。<En>We had a great time.</En></div></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G1Model: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 132, left: PAD, right: PAD }}>
      <div style={{ display: 'flex', gap: 64 }}>
        <div style={{ flex: '0 0 auto' }}><Ill ico={icoReading} zh="看书" py="kàn shū" w={350} h={270} /></div>
        <div style={{ flex: 1, paddingTop: 8 }}>
          <Steps>
            <Step><div style={{ fontFamily: kai, fontSize: 64, fontWeight: 600, marginBottom: 32 }}>她看书看<T>得</T><Hl>很多</Hl>。</div></Step>
            <Step><div style={{ fontFamily: kai, fontSize: 48, color: c.slate, marginBottom: 36 }}>她看书看得<T>多不多</T>？</div></Step>
            <Step>
              <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 28px' }}>
                <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
                  <Ill ico={icoBooks} zh="纸本书" py="zhǐběn shū" w={130} h={100} />
                  <Ill ico={icoTablet} zh="电子书" py="diànzǐ shū" w={130} h={100} />
                  <div style={{ flex: 1, fontFamily: kai, fontSize: 37, lineHeight: 1.45 }}>你看<T>电子书</T>看得多，<br />还是看<T>纸本书</T>看得多？</div>
                </div>
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </div>
  </Frame>
);

const G1Pattern: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 120, left: PAD, right: PAD }}>
      <EnTag>With an object, repeat the verb　·　有宾语 → 动词说两次</EnTag>
      <Diagram>
        <SBox en="Subject" zh="他" />
        <Plus />
        <SBox en="Verb+Object" zh="打球" />
        <Plus />
        <SBox en="Verb" zh="打" />
        <Plus />
        <SBox en="particle" zh="得" fixed />
        <Plus />
        <SBox en="how well" zh="很累" blank />
      </Diagram>
      <div style={{ marginTop: 40, fontFamily: kai, fontSize: 54, fontWeight: 500 }}>他打球打<T>得</T>很累。<En>He was worn out from playing ball.</En></div>
      <div style={{ marginTop: 26, fontFamily: kai, fontSize: 54, fontWeight: 500 }}>我们玩儿<T>得</T>很高兴。<span style={{ fontFamily: tnr, fontSize: 30, color: c.muted, fontStyle: 'italic', marginLeft: 18 }}>(no object → one verb)</span></div>
      <div style={{ marginTop: 24, fontFamily: kai, fontSize: 32, color: c.slate }}>形容词前常加「很」：玩儿<T>得</T><Hl>很</Hl>高兴。</div>
    </div>
  </Frame>
);

const G1Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 112, left: PAD, right: PAD }}>
      <EnTag>Ask a partner — how well do you do these?</EnTag>
      <div style={{ fontFamily: kai, fontSize: 54, fontWeight: 700, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '16px 34px', display: 'inline-block' }}>
        你　<Blank>＿＿＿</Blank>　<T>得</T>　<Blank>＜怎么样＞</Blank>？
      </div>
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', gap: 18 }}>
        <Ill ico={icoRun} zh="跑步" py="pǎo bù" w={196} h={126} />
        <Ill ico={icoReading} zh="看书" py="kàn shū" w={196} h={126} />
        <Ill ico={icoSpeak} zh="说中文" py="shuō Zhōngwén" w={196} h={126} />
        <Ill ico={icoCook} zh="做饭" py="zuò fàn" w={196} h={126} />
        <Ill ico={icoFilm} zh="看电影" py="kàn diànyǐng" w={196} h={126} />
        <Ill ico={icoPhone} zh="打电话" py="dǎ diànhuà" w={196} h={126} />
      </div>
      <div style={{ marginTop: 26 }}>
        <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 14 }}>fill the ＜how well＞ slot ↓</div>
        <Chips words={['很高兴', '很累', '很好', '很快', '不错', '很晚']} />
      </div>
    </div>
  </Frame>
);

const G2Overview: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 126, left: PAD, right: PAD }}>
      <EnTag>Can you, or can't you, reach the result?</EnTag>
      <Diagram>
        <SBox en="Verb" zh="动词" />
        <Plus />
        <SBox en="can / can't" zh="得 / 不" fixed />
        <Plus />
        <SBox en="result" zh="＜结果＞" blank />
      </Diagram>
      <div style={{ marginTop: 44 }}>
        <Steps>
          <Step><AltLine tag="能" tagEn="can" gloss="I can finish it today.">这本书我今天看<T>得</T>完。</AltLine></Step>
          <Step><AltLine tag="不能" tagEn="can't" gloss="I can't finish it today.">这本书我今天看<T>不</T>完。</AltLine></Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

const G2Model: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 130, left: PAD, right: PAD }}>
      <div style={{ display: 'flex', gap: 60 }}>
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 26 }}>
          <Ill ico={icoClock} zh="六点半" py="liù diǎn bàn" w={220} h={150} />
          <Ill ico={icoPhone} zh="打电话" py="dǎ diànhuà" w={220} h={130} />
        </div>
        <div style={{ flex: 1 }}>
          <Steps>
            <Step><DLine who="张小姐" whoColor={c.accent}>你晚上六点半能回来吗？</DLine></Step>
            <Step><DLine who="王先生" whoColor={c.slate}>我得开会，六点半<T>回不来</T>。</DLine></Step>
            <Step>
              <div style={{ marginTop: 10, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 30px', fontFamily: kai, fontSize: 34, color: c.slate, lineHeight: 1.5 }}>
                <span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic' }}>why not 不能?　</span>开会这件事让他<Hl>做不到</Hl> —— 说<T>回不来</T>。
              </div>
            </Step>
          </Steps>
        </div>
      </div>
    </div>
  </Frame>
);

const G2Board: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <EnTag>Ask a partner — can you? · 今天的＿＿，你＿得完吗？</EnTag>
      <div style={{ fontFamily: kai, fontSize: 44, color: c.slate, marginBottom: 20 }}>今天的功课，你做<T>得</T>完吗？<span style={{ fontFamily: tnr, fontSize: 28, color: c.muted, fontStyle: 'italic', marginLeft: 16 }}>Can you finish today's homework?</span></div>
      <PotHead />
      <PotRow ico={icoPaper} obj="功课" py="gōngkè" v="做" res="完" />
      <PotRow ico={icoFilm} obj="中国电影" py="diànyǐng" v="看" res="懂" />
      <PotRow ico={icoBowl} obj="饺子" py="jiǎozi" v="吃" res="完" />
      <PotRow ico={icoTicket} obj="电影票" py="piào" v="买" res="到" />
      <PotRow ico={icoShield} obj="健康保险" py="jiànkāng bǎoxiǎn" v="买" res="起" />
    </div>
  </Frame>
);

const Roleplay: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 128, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 60, fontWeight: 700, marginBottom: 12 }}>我很想去，可是……</div>
      <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, marginBottom: 30, lineHeight: 1.45, fontStyle: 'italic' }}>{'Pair work · A invites B out this weekend. B is busy  '}<br />decline politely and suggest another time.</div>
      <div style={{ display: 'flex', gap: 60 }}>
        <div style={{ flex: '1 1 64%', borderLeft: `5px solid ${c.line}`, paddingLeft: 42 }}>
          <DLine who="A" whoColor={c.accent} size={46}>这个周末学校演一个中国电影，一起去看，好吗？</DLine>
          <DLine who="B" whoColor={c.slate} size={46}>我很想去，可是这个周末我<T>＿＿＿</T>。</DLine>
          <DLine who="A" whoColor={c.accent} size={46}>那后天晚上怎么样？</DLine>
          <DLine who="B" whoColor={c.slate} size={46}>好，<T>一言为定</T>！</DLine>
        </div>
        <div style={{ flex: '1 1 36%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '28px 32px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, marginBottom: 16, fontStyle: 'italic' }}>Use ↓</div>
          <div style={{ fontFamily: kai, fontSize: 36, lineHeight: 1.75 }}>V ＋ 得/不 ＋Result<br />我很想…，可是…<br />一言为定</div>
        </div>
      </div>
    </div>
  </Frame>
);

// 打包练习 — integrated pair task (degree + potential together)
const Baobao: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 60, fontWeight: 700, marginBottom: 8 }}>打包练习：约人过周末</div>
      <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', marginBottom: 26 }}>Pair work · Find a partner for a weekend activity — ask how well they do it and whether they're free, then make a date (or turn it down and rebook).</div>
      <div style={{ display: 'flex', gap: 40 }}>
        <RoleCard label="Student A · 你来约" lines={[
          <>问：你<T>游泳／做饭</T>得怎么样？</>,
          <>问：这个周末，功课你<T>做得完</T>吗？</>,
          <>约他一起去，说好时间：<T>一言为定</T>！</>,
        ]} />
        <RoleCard label="Student B · 同学答" lines={[
          <>答：我…得<Blank>怎么样</Blank>。</>,
          <>做<T>得完</T> → 答应；做<T>不完</T> → 婉转拒绝。</>,
          <><T>我很想去，可是……</T>，那后天呢？</>,
        ]} />
      </div>
      <UseStrip items={['V 得 怎么样', 'V 得/不 结果', '我很想…可是…', '一言为定']} />
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 152, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 84, fontWeight: 700, marginBottom: 44 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 58%' }}>
          <div style={{ fontFamily: kai, fontSize: '77px', lineHeight: 1.5 }}>说一件你今天<T>做得完</T>的事，<br />和一件你<T>做不完</T>的事。</div>
        </div>
        <div style={{ flex: '1 1 42%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '30px 38px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, marginBottom: 18, fontStyle: 'italic' }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 32, color: c.ink, lineHeight: 1.7 }}>L16-1 · Reading B<br />L16-1 · Grammar &amp; Writing C, F</div>
        </div>
      </div>
    </div>
  </Frame>
);

// ── 课本 Language Practice A（描述补语 V得）──────────────────────────────
const ActFeel: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 116, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 4 }}>How did you feel?</div>
      <EnTag>Textbook A · In pairs, ask each other how these activities affected you.</EnTag>
      <div style={{ borderLeft: `5px solid ${c.line}`, paddingLeft: 40, margin: '12px 0 30px' }}>
        <DLine who="A" whoColor={c.accent} size={44}>你昨天晚上写汉字写<T>得</T>累不累？</DLine>
        <DLine who="B" whoColor={c.slate} size={44}>我写<T>得</T>很累／不累。你呢？</DLine>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {[['1', '你每天上课上得累不累？'], ['2', '你昨天晚上睡觉睡得舒服不舒服？'], ['3', '你上个周末玩儿得高兴不高兴？']].map(([n, q]) => (
          <div key={n} style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
            <span style={{ fontFamily: tnr, fontSize: 32, color: c.accent }}>{n}</span>
            <span style={{ fontFamily: kai, fontSize: 46 }}>{q}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

// ── 课本 Language Practice B（可能补语 V得/不）─────────────────────────────
const ActFirstDay: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 116, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 4 }}>First day</div>
      <EnTag>Textbook B · Ask about your partner’s first day of school. Use 得 (de) / 不 (bu).</EnTag>
      <div style={{ borderLeft: `5px solid ${c.line}`, paddingLeft: 40, margin: '12px 0 30px' }}>
        <DLine who="Q" whoColor={c.accent} size={44}>你找<T>得</T>到找<T>不</T>到你的教室？</DLine>
        <DLine who="A" whoColor={c.slate} size={44}>我找得到／找不到我的教室。</DLine>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {[['1', '你买得到买不到你要的书？'], ['2', '你听得懂听不懂中文老师说的话？'], ['3', '你看得清楚看不清楚老师写的字？']].map(([n, q]) => (
          <div key={n} style={{ display: 'flex', gap: 22, alignItems: 'baseline' }}>
            <span style={{ fontFamily: tnr, fontSize: 32, color: c.accent }}>{n}</span>
            <span style={{ fontFamily: kai, fontSize: 46 }}>{q}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

// ── 课本 Language Practice C（可能补语 V得/不 · 数量）──────────────────────
const ActBringItOn: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 112, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 58, fontWeight: 700, marginBottom: 4 }}>Bring it on</div>
      <EnTag>Textbook C · Could you take on an eating / drinking challenge? Use 得 (de) / 不 (bu).</EnTag>
      <div style={{ borderLeft: `5px solid ${c.line}`, paddingLeft: 40, margin: '12px 0 30px' }}>
        <DLine who="Q" whoColor={c.accent} size={44}>你吃<T>得</T>完吃<T>不</T>完三十个热狗？</DLine>
        <DLine who="A" whoColor={c.slate} size={44}>我吃得完／吃不完三十个热狗。</DLine>
      </div>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'space-between' }}>
        {[['饺子', '100'], ['米饭', '10'], ['可乐', '15'], ['汤', '20'], ['冰茶', '25']].map(([zh, n]) => (
          <div key={zh} style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '24px 10px', textAlign: 'center' }}>
            <div style={{ fontFamily: kai, fontSize: 46, fontWeight: 600 }}>{zh}</div>
            <div style={{ fontFamily: tnr, fontSize: 32, color: c.accent, marginTop: 10 }}>× {n}</div>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '语法（一）玩儿得很高兴／六点半回不来', createdAt: '2026-08-16T16:00:00.000Z' };

export const notes: (string | undefined)[] = [
  '课堂节奏：小考 10′ · 用法 10′ · 讲练 22′ · 收尾 8′（Murphey 0220）。今天两个句式：得-程度补语、V得/不-可能补语。',
  '揭题（结构图＋英文标签）：Verb + 得 + how well。得是固定枢纽，动词和「怎么样」可换。带例句他跑得很快、我们玩儿得很高兴；形容词前常加「很」。',
  '看图（看书）导入目标句「她看书看得很多」（有宾语→动词说两次）。老师示范问「看得多不多？」，再用电子书／纸本书延伸问，然后两人一组互问互答。',
  '结构图（双动词规则）：主语＋(V O)＋V＋得＋how。有宾语时动词说两次（打球打得很累）；没宾语只说一次（玩儿得很高兴）。',
  '放手产出：看图＋把「怎么样」这一格填进去。先两两多说，再抽点。',
  '课本活动 A「How did you feel?」：得-程度补语两两互问。示范「你昨天晚上写汉字写得累不累？」，学生用上课/睡觉/玩儿三题互问互答。',
  '第二个句式（结构图＋能/不能对照）：Verb + 得/不 + result——做得到／做不到。看得完 vs 看不完。得/不是同一格的正反两面。',
  '导入回不来：为什么不说「不能回来」？因为开会让他做不到。示范后学生练。',
  '产出（得/不对照表）：五组成对可能补语——做得完/做不完、看得懂/看不懂、吃得完/吃不完、买得到/买不到、买得起/买不起。图＝要谈的东西，左栏能（得）、右栏不能（不），一格对一格。先两两，再抽点。',
  '课本活动 B「First day」：可能补语两两问答。示范「你找得到找不到你的教室？」，再用买得到、听得懂、看得清楚三题互问。',
  '课本活动 C「Bring it on」：可能补语＋数量挑战。示范「你吃得完吃不完三十个热狗？」，用饺子×100、米饭×10、可乐×15、汤×20、冰茶×25 互问，答得完/不完。',
  '两两对话（婉转拒绝＋改约，示范/控制）：两人一组共 10 组 · 6 分钟 · 换角色 · 请 2 组上台。要用上 V不结果、我很想…可是…、一言为定。',
  '打包练习（整合两个句式，freer）：A 约 B 周末一起做事——A 问「V得怎么样」「做得完吗」，B 视忙不忙答应或婉转拒绝改约。两人一组，A/B 各拿一张角色卡（信息差），5–6 分钟后换角色，请 2 组上台示范。要用上 V得怎么样、V得/不结果、我很想…可是…、一言为定。',
  '收尾 exit ticket：说一件做得完、一件做不完的事。作业：L16-1 Reading-B、Grammar&Writing-C(1,2)、F(3)。（明天：复习两个句式，再学「就」；生词小考发还。）',
];

export default [Cover, G1Overview, G1Model, G1Pattern, G1Board, ActFeel, G2Overview, G2Model, G2Board, ActFirstDay, ActBringItOn, Roleplay, Baobao, Closing] satisfies Page[];
