import { defineConfig } from 'astro/config';

/**
 * 部署目标切换：
 *   npm run build                     → GitHub Pages 版（默认，子路径 /teacher-style-quiz/）
 *   DEPLOY_TARGET=aliyun npm run build → 阿里云版（子路径 /teacher-quiz/）
 *
 * 只有 base 影响资源路径（头像/CSS/JS 能不能加载）；
 * site 只影响绝对 URL（canonical / og 标签），本应用不依赖它，
 * 阿里云域名定下来后把下面的 aliyun.site 改成你的域名即可。
 */
const TARGETS = {
  github: {
    site: 'https://zachcz438.github.io',
    base: '/teacher-style-quiz/',
  },
  aliyun: {
    site: 'https://your-domain.example',   // ← 域名定了改这里（非必须）
    base: '/teacher-quiz/',                 // ← 想换子路径名就改这里
  },
};

const target = process.env.DEPLOY_TARGET === 'aliyun' ? 'aliyun' : 'github';
const { site, base } = TARGETS[target];

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  vite: {
    server: {
      fs: {
        allow: ['../..'],
      },
    },
  },
});
