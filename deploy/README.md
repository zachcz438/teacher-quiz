# 部署到阿里云（子路径 /teacher-quiz/）操作手册

> 适用：阿里云大陆 ECS + 自有域名 + 子路径访问
> 前提：域名已 ICP 备案（含**阿里云接入备案**）

---

## 路线总览

```
① ICP 接入备案    ← 阿里云控制台办，1-5 工作日（等待中可做后面准备）
② 改 base + build  ← ✅ 已完成（astro.config.mjs 支持 DEPLOY_TARGET=aliyun）
③ 服务器装 Nginx
④ 上传 dist
⑤ Nginx 配置
⑥ HTTPS 证书
```

---

## ① ICP 接入备案

你的**主体备案**已在百度做过（ICP 号有效）。换阿里云服务器需做**新增接入**：

- 阿里云控制台 → 备案 → **备案管理** → **新增接入**
- 用现有 ICP 号，填阿里云这台 ECS 的信息
- 1-5 工作日通过（比初次备案快，因为主体已核验）

> ⚠️ 没过这步，大陆 ECS 上域名走 80/443 会被阿里云拦截。

---

## ③ 服务器装 Nginx

SSH 登录服务器后（以 Ubuntu/Debian 为例）：

```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

CentOS/Alibaba Cloud Linux：

```bash
sudo yum install -y nginx
sudo systemctl enable --now nginx
```

验证：浏览器访问 `http://服务器IP`，看到 Nginx 欢迎页 = 成功。

---

## ④ 上传 dist

**方式 1：一键脚本（推荐）**

在本地项目根目录，先改 `deploy/deploy-aliyun.sh` 顶部的 `SERVER` / `SSH_USER` / `REMOTE_DIR`，然后：

```bash
bash deploy/deploy-aliyun.sh
```

**方式 2：手动**

```bash
# 本地 build
cd packages/frontend
DEPLOY_TARGET=aliyun npm run build

# 上传（把 IP 换成你的）
ssh root@服务器IP "mkdir -p /var/www/teacher-quiz"
rsync -avz --delete dist/ root@服务器IP:/var/www/teacher-quiz/
```

> 没有 rsync 也可用 scp： `scp -r dist/* root@服务器IP:/var/www/teacher-quiz/`

---

## ⑤ Nginx 配置

把 `deploy/nginx-teacher-quiz.conf` 的内容用上：

```bash
# 上传配置（或直接 vim 粘贴）
sudo cp nginx-teacher-quiz.conf /etc/nginx/conf.d/teacher-quiz.conf

# 改里面的 server_name 为你的域名
sudo vim /etc/nginx/conf.d/teacher-quiz.conf

# 测试配置语法 + 重载
sudo nginx -t
sudo systemctl reload nginx
```

- 服务器上**没有别的站** → 用配置里的【方案 A】
- 服务器上**已有别的站** → 只把【方案 B】的 location 块复制进你现有 server{}

此时访问 `http://你的域名/teacher-quiz/` 应该能打开（HTTP）。

---

## ⑥ HTTPS 证书

「复制文案」按钮的剪贴板 API **只在 HTTPS 下生效**，所以建议配。

**方式 1：阿里云免费证书**
- 控制台 → 数字证书管理 → 申请免费证书 → 下载 Nginx 格式
- 上传证书文件，在 Nginx 加 `listen 443 ssl;` + 证书路径

**方式 2：Let's Encrypt 自动续期（推荐）**

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d 你的域名
# 按提示选「自动跳转 HTTPS」
```

certbot 会自动改 Nginx 配置 + 配置自动续期。

---

## 日常更新

改完内容后，本地一条命令：

```bash
bash deploy/deploy-aliyun.sh
```

（GitHub Pages 版仍用 `npm run build` + 推 git，互不影响）
