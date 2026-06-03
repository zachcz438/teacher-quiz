#!/usr/bin/env bash
# ============================================================
# 教师风格测评 — 一键部署到阿里云脚本
# ============================================================
# 用法：
#   1. 改下面三个变量（SERVER / SSH_USER / REMOTE_DIR）
#   2. 确保你能免密 SSH 登录服务器（配过 SSH key），或运行时输密码
#   3. 在项目根目录执行：  bash deploy/deploy-aliyun.sh
#
# 这个脚本做三件事：
#   ① 用 aliyun 目标重新 build（子路径 /teacher-quiz/）
#   ② 把 dist/ 同步到服务器
#   ③ 完成提示
# ============================================================

set -euo pipefail

# ---------- 改这里 ----------
SERVER="1.2.3.4"                       # ← 你的服务器公网 IP
SSH_USER="root"                        # ← SSH 登录用户名
REMOTE_DIR="/var/www/teacher-quiz"     # ← 服务器上的存放目录
SSH_PORT="22"                          # ← SSH 端口（默认 22）
# ----------------------------

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/../packages/frontend"

echo "==> ① 本地 build（aliyun 目标）..."
cd "$FRONTEND_DIR"
rm -rf dist
DEPLOY_TARGET=aliyun npm run build

echo "==> ② 确保服务器目录存在..."
ssh -p "$SSH_PORT" "$SSH_USER@$SERVER" "mkdir -p $REMOTE_DIR"

echo "==> ③ 同步 dist/ 到服务器（rsync，删除服务器上多余文件）..."
rsync -avz --delete -e "ssh -p $SSH_PORT" \
  "$FRONTEND_DIR/dist/" \
  "$SSH_USER@$SERVER:$REMOTE_DIR/"

echo ""
echo "✅ 部署完成！"
echo "   访问： https://你的域名/teacher-quiz/"
echo ""
echo "   如果是第一次部署，记得："
echo "   - 服务器上配好 Nginx（见 deploy/nginx-teacher-quiz.conf）"
echo "   - sudo nginx -t && sudo systemctl reload nginx"
