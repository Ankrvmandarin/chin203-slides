#!/bin/bash
# 發佈簡報到學生網站。用法： ./publish.sh "更新趋向补语"
set -e
cd "$(dirname "$0")"
MSG="${1:-更新簡報}"

echo ""
echo "以下簡報將出現在學生網站："
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
  echo "以下是草稿，只留在你的電腦，不會上線："
  for d in $drafts; do echo "   · $(basename "$d")"; done
fi

echo ""
read -r -p "確定發佈？（按 Enter 繼續，按 Ctrl+C 取消）" _

git add -A
git commit -m "$MSG" || echo "（沒有新的變更）"
git push
echo ""
echo "已推送。GitHub 正在雲端建置，約 1 到 2 分鐘後網站更新。"
echo "進度：repo 頁面上方的 Actions 分頁"
