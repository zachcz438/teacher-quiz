#!/usr/bin/env bash
# ============================================================
# 教师风格测评 — 一键部署到阿里云脚本
# ============================================================
# 用法：
#   普通（会提示输入密码）：
#       bash deploy/deploy-aliyun.sh
#   免输密码（需先装 sshpass: brew install hudochenkov/sshpass/sshpass）：
#       SSHPASS='你的密码' bash deploy/deploy-aliyun.sh
#   最安全（推荐，配过 SSH key 后免密）：
#       直接 bash deploy/deploy-aliyun.sh
#
# 这个脚本做四件事：
#   ① 用 aliyun 目标重新 build（子路径 /teacher-quiz/）
#   ② 同步 dist/ 到服务器
#   ③ 修复文件权限（防止头像 403）
#   ④ 重载 Nginx
# ============================================================

set -euo pipefail

# ---------- 服务器信息 ----------
SERVER="101.201.225.234"
SSH_USER="root"
REMOTE_DIR="/var/www/teacher-quiz"
SSH_PORT="22"
# --------------------------------

# 如果设置了 SSHPASS 环境变量且装了 sshpass，则免密
SSH="ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new"
RSYNC_SSH="ssh -p $SSH_PORT"
if [ -n "${SSHPASS:-}" ] && command -v sshpass >/dev/null 2>&1; then
  SSH="sshpass -e ssh -p $SSH_PORT -o StrictHostKeyChecking=accept-new"
  RSYNC_SSH="sshpass -e ssh -p $SSH_PORT"
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/../packages/frontend"

echo "==> ① 本地 build（aliyun 目标）..."
cd "$FRONTEND_DIR"
rm -rf dist
DEPLOY_TARGET=aliyun npm run build

echo "==> ② 同步 dist/ 到服务器..."
$SSH "$SSH_USER@$SERVER" "mkdir -p $REMOTE_DIR"
rsync -avz --delete -e "$RSYNC_SSH" "$FRONTEND_DIR/dist/" "$SSH_USER@$SERVER:$REMOTE_DIR/"

echo "==> ③ 修复文件权限..."
$SSH "$SSH_USER@$SERVER" "chmod -R u=rwX,go=rX $REMOTE_DIR"

echo "==> ④ 重载 Nginx..."
$SSH "$SSH_USER@$SERVER" "nginx -t && systemctl reload nginx"

echo ""
echo "✅ 部署完成！"
echo "   IP 测试： http://$SERVER/teacher-quiz/"
echo "   备案 + 域名后： https://你的域名/teacher-quiz/"
