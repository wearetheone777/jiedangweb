# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个个人作品集网站，采用 Vue 3 + Composition API + Vite + TailwindCSS 构建，主题为"极简银灰科幻风格"。

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (http://localhost:3000)
pnpm run dev

# 构建生产版本
pnpm run build

# 预览构建结果
pnpm run preview
```

> 构建脚本白名单配置在 `pnpm-workspace.yaml` 的 `allowBuilds`（本机 pnpm 12；更早的 pnpm 用 `onlyBuiltDependencies`）。pnpm 12 起不再读取 `package.json` 的同名字段，删掉该文件会导致 `pnpm install` 报 `ERR_PNPM_IGNORED_BUILDS`。

## 项目架构

- **入口**: `src/main.js` → `src/App.vue`
- **组件**: `src/components/` 下各功能区块组件。其中 `ProjectThumbnail.vue` 的项目封面是按 `id` 硬编码的 SVG 分支（`v-if` / `v-else-if`，**没有 `v-else` 兜底**）——新增项目时必须在其中补一条对应 `id` 的 SVG 分支，否则卡片封面区域为空白
- **数据**: 项目内容分两层，靠 `id` 关联：
  - `src/data/projects.js`：详情页完整数据（`description`、`features`、`architecture`、`screenshots` 等），每条记录的中英双语以 `xxx` / `xxxEn` 字段共存
  - `src/i18n/{zh,en}.js` 的 `portfolio.items`：首页卡片实际渲染的 `title`、`category`、`desc`、`tags`
  - 每个 i18n item 与 `projects.js` 记录共享同一个 `id`。新增项目必须同时改三处：`projects.js` 加记录、`zh.js` 加 item、`en.js` 加 item（三处 `id` 必须一致），再按上述规则补 `ProjectThumbnail.vue` 的 SVG 分支
- **国际化**: `src/i18n/` 下有 zh.js / en.js，支持中文/英文切换，语言偏好存储在 localStorage 的 `jiedangweb-locale` 键
- **Composable**: `src/composables/` 下包含 `useScrollReveal.js`（滚动动画）、`useProjectView.js`（项目详情视图状态）。注意 `useProjectView` 的两个 `ref`（`selectedProjectId`、`isDetailView`）定义在**模块顶层**，是跨组件共享的单例，被 `PortfolioSection`、`ProjectDetail`、`App.vue` 共用；项目未使用 vue-router，视图切换完全依赖这份共享状态。把它改成组件内 state 会导致点击卡片后详情页无法显示

## 样式配置

- TailwindCSS 配置在 `tailwind.config.js`
- 自定义主题色：`space-black`、`space-dark`、`space-card`、`space-border`、`silver-primary`、`silver-muted`、`accent-teal`、`accent-amber`（实际高频使用的是 `space-card`、`space-border`、`silver-muted`）
- 自定义动画：`scanline`（扫描线效果）、`fade-in`、`slide-up`
- 全局样式包含 hex 网格背景和扫描线叠加效果

## 部署

- 平台：Cloudflare Pages
- 构建命令：`pnpm run build`
- 输出目录：`dist`