#!/bin/bash
# 發佈簡報到學生網站。用法： ./publish.sh "這次改了什麼"
set -e
cd "$(dirname "$0")"
MSG="${1:-更新簡報}"

echo ""
echo "════════════════════════════════════════"
echo " 這些簡報會出現在學生網站："
for d in slides/*/; do
  name=$(basename "$d")
  case "$name" in
    *-draft) ;;
    *) echo "   ✓ $name" ;;
  esac
done

drafts=$(ls -d slides/*-draft/ 2>/dev/null || true)
if [ -n "$drafts" ]; then
  echo ""
  echo " 這些是草稿，只留在你的電腦："
  for d in $drafts; do echo "   · $(basename "$d")"; done
fi
echo "════════════════════════════════════════"
echo ""
read -r -p "確定要發佈嗎？（按 Enter 繼續，按 Ctrl+C 取消）" _

git add -A
git commit -m "$MSG" || echo "（沒有新的變更）"

echo ""
echo "正在嘗試推送……"
if GIT_TERMINAL_PROMPT=0 git push 2>/dev/null; then
  echo ""
  echo "✅ 推送成功！GitHub 正在雲端建置，約 1 到 2 分鐘後網站更新。"
  echo "   進度：repo 頁面上方的 Actions 分頁"
else
  echo ""
  echo "ℹ️  終端機沒有登入資訊，已幫你存檔但還沒上傳。"
  echo "   請打開 GitHub Desktop，確認左上角選的是 my-slide，"
  echo "   然後按右上角的 Push origin 就完成了。"
fi
