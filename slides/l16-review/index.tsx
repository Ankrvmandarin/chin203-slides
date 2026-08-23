import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';

const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-review';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 总复习  8/26
   语法回顾 + 功能回顾 + 改错（逐步揭示）+ 综合口说（周末大约会）
   学生看得到的只有：简单英文指示 + 目标中文。教师用语进 notes。
   ═══════════════════════════════════════════════════════════════════════════ */

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#16273f', accent: '#1f4e9a' },
  fonts: { display: '"LXGW WenKai GB Screen", "LXGW WenKai", serif', body: '"Times New Roman", Times, "PingFang SC", serif' },
  typeScale: { hero: 128, body: 56 }, radius: 8,
};
const c = { bg: '#ffffff', ink: '#16273f', accent: '#1f4e9a', slate: '#41597c', muted: '#6a768a', faint: '#aab4c3', panel: '#eef2f8', line: '#d6deea', rose: '#b23a48', pos: '#1f6d43' };
const kai = 'var(--osd-font-display)';
const tnr = '"Times New Roman", Times, serif';
const PAD = 108;
const sheet = { width: '100%', height: '100%', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: kai, position: 'relative' as const, overflow: 'hidden' as const };
const Frame = ({ children, tag = '总复习' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十六课 约会</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const Task = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', marginBottom: 24 }}>{children}</div>;
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
const RCard = ({ en, zh }: { en: string; zh: React.ReactNode }) => (
  <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 14, padding: '20px 24px' }}>
    <div style={{ fontFamily: tnr, fontSize: 24, color: c.slate, fontStyle: 'italic', marginBottom: 10 }}>{en}</div>
    <div style={{ fontFamily: kai, fontSize: 40, lineHeight: 1.4 }}>{zh}</div>
  </div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 190, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 总复习</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 118, fontWeight: 700, lineHeight: 1.1, color: c.ink }}>总复习</div>
      <div style={{ fontFamily: tnr, fontSize: 42, fontWeight: 600, color: c.slate, marginTop: 18, fontStyle: 'italic' }}>Lesson 16 Review</div>
    </div>
  </Frame>
);

const GrammarRecap: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <Task>Grammar in one look.</Task>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <RCard en="how well (V 得 + complement)" zh={<>他玩儿<T>得</T>很高兴。</>} />
        <RCard en="can / can't (V 得/不 + result)" zh={<>今天看<T>得</T>完／看<T>不</T>完。</>} />
        <RCard en="only / just (就)" zh={<>别人都不去，<T>就</T>我们俩。</>} />
        <RCard en="hard·late 才 vs easy·early 就" zh={<>费了力气<T>才</T>买到／很容易<T>就</T>买到。</>} />
        <RCard en="direction (V + 出去/下来 …)" zh={<>我从宿舍<T>搬出去</T>。</>} />
        <RCard en="all out (好好儿 + V)" zh={<>考完试<T>好好儿</T>玩儿玩儿。</>} />
      </div>
    </div>
  </Frame>
);

const CanDo: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <Task>By now you can…</Task>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {[
          ['invite a friend', <>这个周末一起去看电影，好吗？</>],
          ['say no politely', <>对不起，这个周末<T>不行</T>，我要……</>],
          ['make a phone call', <><T>喂</T>，请问李友在吗？我姓……</>],
          ['say how well / whether you can', <>我做<T>得完</T>／做<T>不完</T>。</>],
        ].map(([en, zh], i) => (
          <div key={i} style={{ display: 'flex', gap: 26, alignItems: 'baseline' }}>
            <span style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', flex: '0 0 380px' }}>{en}</span>
            <span style={{ fontFamily: kai, fontSize: 44 }}>{zh}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

const ERRORS: [React.ReactNode, React.ReactNode][] = [
  [<>我写字<T>得</T>很快。</>, <>我写字<T>写得</T>很快。</>],
  [<>我费了很大力气<T>就</T>买到票。</>, <>我费了很大力气<T>才</T>买到票。</>],
  [<>这本书今天我看<T>得不完</T>。</>, <>这本书今天我看<T>不完</T>。</>],
  [<>他六点<T>才</T>来了，很早。</>, <>他六点<T>就</T>来了。</>],
];
const ErrorFix: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <Task>Find the mistake and fix it. (Teacher reveals the answers.)</Task>
      <Steps>
        {ERRORS.map(([bad, good], i) => (
          <div key={i} style={{ display: 'flex', gap: 26, alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontFamily: tnr, fontSize: 34, color: c.rose, flex: '0 0 30px' }}>✗</span>
            <span style={{ fontFamily: kai, fontSize: 40, flex: '0 0 640px', color: c.slate }}>{bad}</span>
            <span style={{ fontFamily: tnr, fontSize: 34, color: c.faint }}>→</span>
            <Step><span style={{ fontFamily: kai, fontSize: 40, color: c.pos }}>{good}</span></Step>
          </div>
        ))}
      </Steps>
    </div>
  </Frame>
);

const BigTask: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 56, fontWeight: 700, marginBottom: 6 }}>周末大约会</div>
      <Task>Mingle. Find someone free this weekend.</Task>
      <div style={{ display: 'flex', gap: 40 }}>
        <div style={{ flex: '1 1 58%' }}>
          <div style={{ fontFamily: tnr, fontSize: 28, color: c.ink, lineHeight: 1.85 }}>
            1. Walk around. Invite 3 classmates to do something this weekend.<br />
            2. If you are busy, say no politely and give a reason.<br />
            3. Find ONE person who says yes, then say 一言为定!<br />
            4. Use the phrases below.
          </div>
        </div>
        <div style={{ flex: '1 1 42%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '20px 24px' }}>
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 10 }}>ideas</div>
          <Chips words={['看电影', '看球赛', '跳舞', '吃饭', '去旅行']} />
        </div>
      </div>
      <UseStrip items={['一起去…好吗', '买得到票吗', '这个周末不行，我要…', '没关系，…怎么样', '就我们俩', '一言为定']} />
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 80, fontWeight: 700, marginBottom: 40 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 58%' }}>
          <div style={{ fontFamily: kai, fontSize: 52, lineHeight: 1.55 }}>说一件你这个周末想跟朋友<br />一起做的事，用上「<T>一言为定</T>」。</div>
        </div>
        <div style={{ flex: '1 1 42%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '28px 34px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 14 }}>Today &amp; Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 30, color: c.ink, lineHeight: 1.7 }}>Hand in the L16 workbook.<br />Prepare the L17-D1 vocab quiz.</div>
        </div>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '第十六课 总复习 Lesson 16 Review', createdAt: '2026-08-20T17:00:00.000Z', theme: 'chin203-grammar' };

export const notes: (string | undefined)[] = [
  '课堂节奏（Caldwell 0103，8/26）：暖身3′ · 作业检讨15′ · L16重点收束＋口说25′ · 收尾7′。今天总结 L16、收全课作业。',
  '语法一览：一页看完 L16 六个结构，各一句例句、关键词 highlight。老师快速点名一句、请学生再造一句。',
  '功能一览（By now you can）：约人、婉拒、打电话、说做得怎么样／做得到做不到。每条一句样板，学生仿说。',
  '改错（学生先做，老师按空白键逐一揭示正确句）：1 有宾语动词说两次（写字写得很快）；2 费力用才（才买到）；3 可能补语否定 V不C（看不完）；4 早用就（六点就来了）。',
  '综合口说「周末大约会」（25′，走动式）：学生走动邀请三位同学，忙就婉拒给理由，找到一个说 yes 的就一言为定。用上邀请/婉拒/一言为定等句式。老师先示范一轮，再放手，最后请两三组分享。',
  '收尾 exit ticket：说一件周末想跟朋友做的事，用「一言为定」。今天收 L16 全课作业；提醒回家准备 L17-D1 生词小考。',
];

export default [Cover, GrammarRecap, CanDo, ErrorFix, BigTask, Closing] satisfies Page[];
