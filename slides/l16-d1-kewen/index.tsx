import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { Step, Steps } from '@open-slide/core';

// Kai webfont (LXGW WenKai GB Screen)
const FONT_HREF = 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css';
const FONT_LINK_ID = 'osd-webfont-l16-d1-kewen';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID; link.rel = 'stylesheet'; link.href = FONT_HREF;
  document.head.appendChild(link);
}

/* ═══════════════════════════════════════════════════════════════════════════
   CHIN 203 · 第十六课 约会 · 课文（一）Seeing a Movie  8/21
   学生看得到的只有：任务指示（简单英文）＋ 目标中文（程度内）。
   教师的教学阶段/术语/提示语一律进 notes，不上投影片。难词加拼音＋英文。
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
const Frame = ({ children, tag = '课文（一）' }: { children: React.ReactNode; tag?: string }) => (
  <div style={sheet}>
    <div style={{ position: 'absolute', top: 52, right: PAD, fontFamily: kai, fontSize: 24, letterSpacing: '0.1em', color: c.faint }}>{tag}</div>
    {children}
    <div style={{ position: 'absolute', left: PAD, bottom: 44, fontFamily: kai, fontSize: 24, color: c.faint, letterSpacing: '0.04em' }}>第十六课 约会</div>
  </div>
);
const T = ({ children }: { children: React.ReactNode }) => <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>{children}</span>;
const Blank = ({ children }: { children: React.ReactNode }) => <span style={{ color: c.slate }}>{children}</span>;
// small gloss for a hard word: pinyin + short English
const G = ({ children }: { children: React.ReactNode }) => <span style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', margin: '0 2px' }}>（{children}）</span>;
// plain student instruction (simple English)
const Task = ({ children }: { children: React.ReactNode }) => <div style={{ fontFamily: tnr, fontSize: 30, color: c.slate, fontStyle: 'italic', marginBottom: 26 }}>{children}</div>;
const DLine = ({ who, whoColor, size = 46, children }: { who: string; whoColor: string; size?: number; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 26, marginBottom: 20, alignItems: 'baseline' }}>
    <span style={{ fontFamily: kai, fontSize: 32, fontWeight: 700, color: whoColor, flex: '0 0 120px' }}>{who}</span>
    <span style={{ fontFamily: kai, fontSize: size, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const QNum = ({ n, children }: { n: number | string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'baseline', marginBottom: 28 }}>
    <span style={{ fontFamily: tnr, fontSize: 34, color: c.accent, fontWeight: 700, flex: '0 0 34px' }}>{n}</span>
    <span style={{ fontFamily: kai, fontSize: 46, lineHeight: 1.4 }}>{children}</span>
  </div>
);
const Chips = ({ words }: { words: string[] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
    {words.map((w, i) => (<span key={i} style={{ fontFamily: kai, fontSize: 38, padding: '7px 22px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>))}
  </div>
);
const UseStrip = ({ items }: { items: string[] }) => (
  <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
    <span style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic' }}>Use&nbsp;↓</span>
    {items.map((w, i) => <span key={i} style={{ fontFamily: kai, fontSize: 32, padding: '6px 18px', border: `1.5px solid ${c.faint}`, borderRadius: 44, color: c.slate }}>{w}</span>)}
  </div>
);
const TF = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 22, borderBottom: `1px solid ${c.line}`, paddingBottom: 14 }}>
    <span style={{ fontFamily: kai, fontSize: 42, lineHeight: 1.35 }}>{children}</span>
    <span style={{ fontFamily: kai, fontSize: 34, color: c.rose, flex: '0 0 auto' }}>对 / 错</span>
  </div>
);
// forms table cell
const Cell = ({ children, head = false, label = false }: { children: React.ReactNode; head?: boolean; label?: boolean }) => (
  <div style={{ padding: '14px 18px', borderTop: head ? 'none' : `1px solid ${c.line}`, background: head ? c.accent : (label ? c.panel : '#fff'), color: head ? '#fff' : c.ink, fontFamily: kai, fontSize: head ? 26 : 34, textAlign: head ? 'center' : 'left' }}>{children}</div>
);

/* ═══ PAGES ═════════════════════════════════════════════════════════════════ */

const Cover: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 170, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 30, letterSpacing: '0.16em', color: c.accent }}>第十六课　约会 · 课文（一）· Dialogue 1</div>
      <div style={{ height: 3, width: 130, background: c.accent, margin: '30px 0 34px' }} />
      <div style={{ fontFamily: kai, fontSize: 118, fontWeight: 700, lineHeight: 1.1, color: c.ink }}>看电影</div>
      <div style={{ fontFamily: tnr, fontSize: 42, fontWeight: 600, color: c.slate, marginTop: 18, fontStyle: 'italic' }}>Seeing a Movie</div>
    </div>
  </Frame>
);

const PreRead: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 130, left: PAD, right: PAD }}>
      <Task>Talk with a partner.</Task>
      <QNum n="1">你喜欢跟朋友一起做什么？</QNum>
      <QNum n="2">看电影以前<G>yǐqián, before</G>，你会先做什么？</QNum>
      <QNum n="3">你想，王朋和李友这个周末要一起做什么？票好买吗？</QNum>
    </div>
  </Frame>
);

const CompFact: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <QNum n="1">王朋和李友认识多久<G>duō jiǔ, how long</G>了？</QNum>
      <QNum n="2">这个周末学校演什么？</QNum>
      <QNum n="3">电影票是谁买的？好买吗？</QNum>
      <QNum n="4">他们几点看电影？看电影以前<G>yǐqián, before</G>做什么？</QNum>
    </div>
  </Frame>
);

const CompThink: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <QNum n="5">李友为什么说她「<T>早就</T>想看中国电影了」？</QNum>
      <QNum n="6">「<T>一言为定</T>」是什么意思？他们约好了没有？</QNum>
      <QNum n="7">换你说：你会不会「<T>费很大的力气</T>」买一张票？为什么？</QNum>
    </div>
  </Frame>
);

const TrueFalse: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 118, left: PAD, right: PAD }}>
      <Task>Circle 对 or 错. Then fix the wrong ones.</Task>
      <TF>王朋和李友认识两年了。</TF>
      <TF>电影票很好买。</TF>
      <TF>李友早就想看中国电影。</TF>
      <TF>很多人跟他们一起去看电影。</TF>
      <TF>看电影以前，李友请王朋吃晚饭。</TF>
    </div>
  </Frame>
);

const Mimic: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 96, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 56, fontWeight: 700, marginBottom: 6 }}>约朋友一起去</div>
      <Task>Work with a partner. Fill the blanks, swap the underlined parts, then act it out.</Task>
      <div style={{ display: 'flex', gap: 50 }}>
        <div style={{ flex: '1 1 62%', borderLeft: `5px solid ${c.line}`, paddingLeft: 40 }}>
          <DLine who="A" whoColor={c.accent} size={40}>这个周末学校<Blank>＿＿＿</Blank>，我们一起去<Blank>＿＿</Blank>，好吗？</DLine>
          <DLine who="B" whoColor={c.slate} size={40}>好啊！不过，听说人很多，<T>买得到</T>票吗？</DLine>
          <DLine who="A" whoColor={c.accent} size={40}>票我已经买好了，我<T>费了很大的力气才</T>买到。</DLine>
          <DLine who="B" whoColor={c.slate} size={40}>好极了！我<T>早就</T>想<Blank>＿＿＿</Blank>了。</DLine>
          <DLine who="A" whoColor={c.accent} size={40}>就我们俩。<Blank>＿＿</Blank>晚上<Blank>＿</Blank>点，怎么样？</DLine>
          <DLine who="B" whoColor={c.slate} size={40}>太好了，<T>一言为定</T>！</DLine>
        </div>
        <div style={{ flex: '1 1 38%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '18px 22px' }}>
            <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 10 }}>event</div>
            <Chips words={['演电影', '有球赛', '有舞会', '有演唱会']} />
          </div>
          <div style={{ background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '18px 22px' }}>
            <div style={{ fontFamily: tnr, fontSize: 24, color: c.muted, fontStyle: 'italic', marginBottom: 10 }}>do what</div>
            <Chips words={['看电影', '看球赛', '跳舞', '听音乐']} />
          </div>
        </div>
      </div>
      <UseStrip items={['买得到…吗', '费了很大力气才…', '早就想…了', '就我们俩', '一言为定']} />
    </div>
  </Frame>
);

const Phone: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 100, left: PAD, right: PAD }}>
      <Task>On the phone.</Task>
      <Chips words={['喂', '请问…在吗？', '我就是', '请问你是哪一位？', '我姓…', '你还记得…吗？', '我的手机没电了', '再见']} />
      <div style={{ marginTop: 30, display: 'flex', gap: 40 }}>
        <div style={{ flex: '1 1 54%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', border: `1px solid ${c.line}`, borderRadius: 12, overflow: 'hidden' }}>
            <Cell head>&nbsp;</Cell><Cell head>＋</Cell><Cell head>－</Cell>
            <Cell label><span style={{ color: c.accent, fontWeight: 700 }}>记得</span><span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic', marginLeft: 8 }}>remember</span></Cell>
            <Cell>记得</Cell><Cell>不记得</Cell>
            <Cell label><span style={{ color: c.accent, fontWeight: 700 }}>想起来</span><span style={{ fontFamily: tnr, fontSize: 22, color: c.muted, fontStyle: 'italic', marginLeft: 8 }}>recall</span></Cell>
            <Cell>想<T>得</T>起来</Cell><Cell>想<T>不</T>起来</Cell>
          </div>
          <div style={{ marginTop: 18, fontFamily: kai, fontSize: 32 }}>例：我<T>记得</T>他，可是一下子<T>想不起来</T>他叫什么名字。</div>
        </div>
        <div style={{ flex: '1 1 46%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '22px 26px' }}>
          <div style={{ fontFamily: tnr, fontSize: 27, color: c.accent, fontStyle: 'italic', marginBottom: 12 }}>Pair work · call a friend</div>
          <div style={{ fontFamily: tnr, fontSize: 24, color: c.ink, lineHeight: 1.75 }}>
            1. A: call and say hello.<br />
            2. A: say who you are, then invite B to a movie this weekend.<br />
            3. B: answer, then say yes or no.<br />
            4. Use the phrases above, then switch roles.
          </div>
        </div>
      </div>
    </div>
  </Frame>
);

const ORDER_EVENTS = [
  '李友说她早就想看中国电影。',
  '王朋请李友这个周末一起去看电影。',
  '他们说「一言为定」。',
  '王朋说票是他费了很大的力气才买到的。',
  '李友说看电影以前，她请王朋吃晚饭。',
  '他们说好后天晚上八点见。',
];
const ORDER_ANS = [3, 1, 6, 2, 5, 4];
const Order: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 108, left: PAD, right: PAD }}>
      <Task>Put the events in order. Number them 1 to 6. (Teacher reveals the answers.)</Task>
      <Steps>
        {ORDER_EVENTS.map((e, i) => (
          <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 18 }}>
            <div style={{ width: 60, height: 54, borderRadius: 12, border: `2px solid ${c.line}`, background: c.panel, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
              <Step><span style={{ fontFamily: tnr, fontSize: 32, fontWeight: 700, color: c.accent }}>{ORDER_ANS[i]}</span></Step>
            </div>
            <span style={{ fontFamily: kai, fontSize: 40 }}>{e}</span>
          </div>
        ))}
      </Steps>
    </div>
  </Frame>
);

const Closing: Page = () => (
  <Frame>
    <div style={{ position: 'absolute', top: 150, left: PAD, right: PAD }}>
      <div style={{ fontFamily: kai, fontSize: 80, fontWeight: 700, marginBottom: 40 }}>下课以前</div>
      <div style={{ display: 'flex', gap: 56 }}>
        <div style={{ flex: '1 1 58%' }}>
          <div style={{ fontFamily: kai, fontSize: 60, lineHeight: 1.5 }}>用「<T>一言为定</T>」跟同学约一件<br />这个周末要一起做的事。</div>
        </div>
        <div style={{ flex: '1 1 42%', background: c.panel, border: `1px solid ${c.line}`, borderRadius: 12, padding: '30px 36px' }}>
          <div style={{ fontFamily: tnr, fontSize: 26, color: c.accent, fontStyle: 'italic', marginBottom: 16 }}>Homework</div>
          <div style={{ fontFamily: tnr, fontSize: 32, color: c.ink, lineHeight: 1.7 }}>L16-1 · Listening A<br />L16-2 · Grammar &amp; Writing C</div>
        </div>
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = { title: '课文（一）看电影 Seeing a Movie', createdAt: '2026-08-20T16:00:00.000Z', theme: 'chin203-grammar' };

export const notes: (string | undefined)[] = [
  '课堂节奏（Caldwell 0103，8/21）：生词小考10′ · D1课文朗读理解25′ · 电话用语口说操练10′ · 收尾5′。今天完成 D1《看电影》。',
  '读前暖身（教师用语，不上投影片）：先带学生两两说三题，第3题让他们预测王朋李友周末做什么、票好不好买；带着问题去读。读的动作在课本，老师带读一次。',
  '理解·事实（读后回答，先两两再抽点）：答案：1 认识快半年了；2 演一个中国电影；3 王朋买的，不好买（费了很大力气才买到）；4 后天晚上八点，看电影以前李友请王朋吃晚饭。',
  '理解·推论+个人：5 李友对中文/中国文化有兴趣、一直想看（推论，开放）；6「一言为定」＝说定了、不改变，他们约好了；7 个人经验，开放。鼓励用早就…了、费了很大力气才…。',
  '创意检核（对/错）：圈对错并改正错的。答案：1 错（快半年）；2 错（费了很大力气才买到）；3 对；4 错（就他们俩）；5 对。快节奏、全班一起。',
  '排序（学生在学习单上做，老师用投影片按空白键逐一揭示答案）：数字＝该事件在对话中的先后。正确顺序：王朋请她看电影 → 王朋费力买到票 → 李友早就想看 → 后天八点见 → 李友请吃晚饭 → 一言为定。（页面各格答案：3、1、6、2、5、4。）',
  '仿写对话（半控制半自由）：给对话骨架，挖空处自由代换（事件/做什么/时间）。两人一组当堂完成，5–6分钟后请1-2组上台。要用上：买得到…吗、费了很大力气才…、早就想…了、就我们俩、一言为定。',
  '电话用语（10′操练，为 D2 预备）：带念常用电话用语；记得 vs 想起来用表格讲清楚：记得/不记得（状态）、想得起来/想不起来（一下子回忆）。Mini task：两人打电话约人。',
  '收尾 exit ticket：用一言为定跟同学约周末一件事。作业：L16-1 Listening-A、L16-2 Grammar&Writing-C。（周末愉快，下周一复习语法、学趋向补语。）',
];

export default [Cover, PreRead, CompFact, CompThink, TrueFalse, Order, Mimic, Phone, Closing] satisfies Page[];
