import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';

const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-d2-kewen';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 课文（二）Turning Down an Invitation  8/25
   读后理解（事实→推论→个人）＋ 配对检核（逐步揭示）＋ 仿写婉拒对话 ＋ 好好儿用法
   学生看得到的只有：简单英文指示＋目标中文（程度内）。教师用语进 notes。
   ═══════════════════════════════════════════════════════════════════════════ */

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#16273f', accent: '#1f4e9a' },
  fonts: { display: '"LXGW WenKai GB Screen", "LXGW WenKai", serif', body: '"Times New Roman", Times, "PingFang SC", serif' },
  typeScale: { hero: 128, body: 56 }, radius: 8,
};
const c = { bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', slate: '#41597c', muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea', rose: '#b23a48' };
const kai = 'var(--osd-font-display)';
const tnr = '"Times New Roman", Times, serif';
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };
const Frame = ({ children, tag = '课文（二）' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十六课 约会</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const Blank = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.slate }}>{children}</span>;
const G = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', margin: '0 2px' }}>（{children}）</span>;
const Task = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', marginBottom: 26 }}>{children}</div>;
const DLine = ({ who, whoColor, size = 44, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 24, marginBottom: 18, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 30, fontWeight: 700, color: whoColor, flex: '0 0 150px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const QNum = ({ n, children }: { n: number | string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'baseline', marginBottom: 26 }}>
    <span style={{ fontFamily: tnr, fontSize: 34, color: c.accent, fontWeight: 700, flex: '0 0 34px' }}>{n}</span>
    <span style={{ fontFamily: kai, fontSize: 46, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 36, padding: '7px 20px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const UseStrip = ({ items }: { items: string[] }) => (
  <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
    <span style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic' }}>Use&nbsp;↓</span>
    {items.map((w, i) => <span key={i} style={{ fontFamily: kai, fontSize: 32, padding: '6px 18px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>)}
  </div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 170, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 课文（二）· Dialogue 2</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 108, fontWeight: 700, lineHeight: 1.12, color: c.ink }}>这个周末不行</div>
      <div style={{ fontFamily: tnr, fontSize: 42, fontWeight: 600, color: c.slate, marginTop: 18, fontStyle: 'italic' }}>Turning Down an Invitation</div>
    </div>
  </Frame>
);

const PreRead: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 130, left: PAD, right: PAD }}>
      <Task>Talk with a partner.</Task>
      <QNum n="1">有人请你去跳舞，可是你没空儿<G>méi kòngr, not free</G>，你会怎么说？</QNum>
      <QNum n="2">你想不起来<G>can’t recall</G>一个人的名字的时候，会说什么？</QNum>
      <QNum n="3">你想，李友会不会跟费先生去跳舞？为什么？</QNum>
    </div>
  </Frame>
);

const CompFact: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <QNum n="1">谁给李友打电话？</QNum>
      <QNum n="2">李友一开始<G>at first</G>记得费先生吗？</QNum>
      <QNum n="3">费先生是怎么知道李友的电话号码的？</QNum>
      <QNum n="4">费先生想请李友做什么？</QNum>
    </div>
  </Frame>
);

const CompThink: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <QNum n="5">李友这个周末、下个周末、下下个周末，各有什么事？</QNum>
      <QNum n="6">你想，李友是真的没空儿，还是不想去？为什么？</QNum>
      <QNum n="7">最后李友说「我的手机<T>没电了</T>」，你想是真的吗？她为什么这么说？</QNum>
    </div>
  </Frame>
);

const EXCUSES: [string, string][] = [
  ['a', '要跟男朋友去纽约旅行'],
  ['b', '有三个考试'],
  ['c', '要从宿舍搬出去，打扫、整理房间'],
];
const TIMES: [string, string][] = [
  ['这个周末', 'b'],
  ['下个周末', 'c'],
  ['下下个周末', 'a'],
];
const Match: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <Task>Match each time to Li You’s excuse. Write a, b, or c. (Teacher reveals the answers.)</Task>
      <div style={{ display: 'flex', gap: 8, marginBottom: 30, flexWrap: 'wrap' }}>
        {EXCUSES.map(([k, v]) => (
          <div key={k} style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '12px 20px', marginRight: 16 }}>
            <span style={{ fontFamily: tnr, fontSize: 30, fontWeight: 700, color: c.accent, marginRight: 12 }}>{k}</span>
            <span style={{ fontFamily: kai, fontSize: 36 }}>{v}</span>
          </div>
        ))}
      </div>
      <Steps>
        {TIMES.map(([t, ans], i) => (
          <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 22 }}>
            <span style={{ fontFamily: kai, fontSize: 46, flex: '0 0 320px' }}>{t}</span>
            <span style={{ fontFamily: tnr, fontSize: 36, color: c.faint }}>→</span>
            <div style={{ width: 66, height: 58, borderRadius: 12, border: `2px solid ${c.line}`, background: c.panel, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Step><span style={{ fontFamily: tnr, fontSize: 34, fontWeight: 700, color: c.accent }}>{ans}</span></Step>
            </div>
          </div>
        ))}
      </Steps>
    </div>
  </Frame>
);

const Mimic: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 56, fontWeight: 700, marginBottom: 6 }}>请你，可是我没空儿</div>
      <Task>Work with a partner. A invites, B says no politely and gives a reason. Swap the underlined parts, then act it out.</Task>
      <div style={{ display: 'flex', gap: 50 }}>
        <div style={{ flex: '1 1 62%', borderLeft: `5px solid ${c.line}`, paddingLeft: 40 }}>
          <DLine who="A" whoColor={c.accent} size={38}>这个周末你有空儿吗？我想请你去<Blank>＿＿</Blank>。</DLine>
          <DLine who="B" whoColor={c.slate} size={38}>这个周末不行，我要<Blank>＿＿＿</Blank>。</DLine>
          <DLine who="A" whoColor={c.accent} size={38}>没关系，下个周末怎么样？</DLine>
          <DLine who="B" whoColor={c.slate} size={38}>下个周末也不行，我要<Blank>＿＿＿</Blank>。</DLine>
          <DLine who="A" whoColor={c.accent} size={38}>那……</DLine>
          <DLine who="B" whoColor={c.slate} size={38}>对不起，<T>我的手机没电了</T>。再见！</DLine>
        </div>
        <div style={{ flex: '1 1 38%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '18px 22px' }}>
            <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 10 }}>invite to</div>
            <Chips words={['跳舞', '看电影', '吃饭', '看球赛']} />
          </div>
          <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '18px 22px' }}>
            <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 10 }}>reason (excuse)</div>
            <Chips words={['有考试', '搬家、打扫房间', '去旅行', '得打工']} />
          </div>
        </div>
      </div>
      <UseStrip items={['你有空儿吗', '这个周末不行', '我要…', '没关系，…怎么样', '对不起']} />
    </div>
  </Frame>
);

const Usage: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 110, left: PAD, right: PAD }}>
      <Task>Two useful expressions from the text.</Task>
      <div style={{ display: 'flex', gap: 34 }}>
        <div style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: '26px 30px' }}>
          <div style={{ fontFamily: kai, fontSize: 52, fontWeight: 700, color: c.accent }}>好好儿<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 12 }}>hǎohāor, all out</span></div>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.slate, margin: '10px 0 16px', fontStyle: 'italic' }}>好好儿 ＋ Verb</div>
          <div style={{ fontFamily: kai, fontSize: 40, lineHeight: 1.55 }}>考完试，我们<T>好好儿</T>玩儿玩儿。<br />你<T>好好儿</T>想想，想起来了吗？</div>
        </div>
        <div style={{ flex: 1, background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: '26px 30px' }}>
          <div style={{ fontFamily: kai, fontSize: 52, fontWeight: 700, color: c.accent }}>搬出去<span style={{ fontFamily: tnr, fontSize: 26, color: c.muted, fontStyle: 'italic', marginLeft: 12 }}>move out</span></div>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.slate, margin: '10px 0 16px', fontStyle: 'italic' }}>Verb ＋ 出去 / 出来 / 进来 …</div>
          <div style={{ fontFamily: kai, fontSize: 40, lineHeight: 1.55 }}>我要从宿舍<T>搬出去</T>。<br />他<T>搬进来</T>了。</div>
        </div>
      </div>
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 80, fontWeight: 700, marginBottom: 40 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 58%' }}>
          <div style={{ fontFamily: kai, fontSize: 56, lineHeight: 1.55 }}>同学请你去跳舞，你没空儿。<br />用「<T>对不起，我要……</T>」<br />婉转地拒绝他。</div>
        </div>
        <div style={{ flex: '1 1 42%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '30px 36px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 16 }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 32, color: c.ink, lineHeight: 1.7 }}>L16-2 · Listening B</div>
        </div>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '课文（二）这个周末不行 Turning Down an Invitation', createdAt: '2026-08-20T16:30:00.000Z', theme: 'chin203-grammar' };

export const notes: (string | undefined)[] = [
  '课堂节奏（Murphey 0220，8/25）：暖身5′ · 用法5′ · 复习Gr.4 10′ · D2课文25′ · 收尾5′。今天完成 D2《这个周末不行》。',
  '读前暖身（教师用语，不上投影片）：两两说三题，第3题预测李友会不会去。带着问题去读，读的动作在课本，老师带读一次。',
  '理解·事实：答案：1 费先生（高小音的中学同学）；2 一开始不记得、想不起来，费先生提醒后……她还是想不起来；3 是高小音告诉他的；4 请李友去跳舞。',
  '理解·推论+个人：5 这个周末有三个考试；下个周末要从宿舍搬出去、打扫整理房间；下下个周末要跟男朋友去纽约旅行。6/7 推论：李友一直找理由、最后说「手机没电了」挂电话，多半是委婉拒绝、不想去。谈中文里婉拒的策略（给理由、不直接说不）。',
  '配对检核（学生在学习单上做，老师按空白键逐一揭示答案）：这个周末→b 有三个考试；下个周末→c 搬出去打扫整理；下下个周末→a 去纽约旅行。',
  '仿写对话（半控制半自由，婉拒＋改约）：给骨架，挖空处代换（邀请做什么／理由）。两人一组当堂完成，5–6分钟后请1-2组上台。要用上：你有空儿吗、这个周末不行、我要…、没关系…怎么样、对不起。',
  '用法：好好儿＋V（好好儿玩儿玩儿／好好儿想想）；搬出去（V＋趋向补语，复习Gr.4）。各带两句，学生仿说。',
  '收尾 exit ticket：同学请你跳舞，你没空儿，用「对不起，我要…」婉转拒绝。作业：L16-2 Listening-B。（提醒：L16 作业明天上课前交。）',
];

export default [Cover, PreRead, CompFact, CompThink, Match, Mimic, Usage, Closing] satisfies Page[];
