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

## 项目架构

- **入口**: `src/main.js` → `src/App.vue`
- **组件**: `src/components/` 下各功能区块组件
- **数据**: 项目作品数据在 `src/data/projects.js`
- **国际化**: `src/i18n/` 下有 zh.js / en.js，支持中文/英文切换，语言偏好存储在 localStorage 的 `jiedangweb-locale` 键
- **Composable**: `src/composables/` 下包含 `useScrollReveal.js`（滚动动画）、`useProjectView.js`（项目详情视图状态）

## 样式配置

- TailwindCSS 配置在 `tailwind.config.js`
- 自定义主题色：`space-black`、`space-dark`、`silver-primary`、`accent-teal`、`accent-amber`
- 自定义动画：`scanline`（扫描线效果）、`fade-in`、`slide-up`
- 全局样式包含 hex 网格背景和扫描线叠加效果

## 部署

- 平台：Cloudflare Pages
- 构建命令：`pnpm run build`
- 输出目录：`dist`