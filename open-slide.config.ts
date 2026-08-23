import type { OpenSlideConfig } from '@open-slide/core';

const openSlideConfig: OpenSlideConfig = {
  // GitHub Pages 專案網站的網址是 /<repo 名稱>/，這裡要跟 repo 名稱一致。
  // 若你把 repo 取別的名字，這一行也要跟著改。
  base: '/chin203-slides/',

  // 以下只影響「發佈出去的網站」。
  // open-slide dev 會強制把三個選項打開，所以你自己上課用的
  // 簡報介面、Presenter 模式、備課筆記、匯出功能都不受影響。
  build: {
    showSlideBrowser: true,    // 學生看得到簡報列表，可自己選一份
    showSlideUi: false,        // 唯讀播放器：方向鍵翻頁與 Steps 逐步揭示照常，但沒有 Presenter 與匯出
    allowHtmlDownload: false,  // 網站上不提供下載
  },
};

export default openSlideConfig;
