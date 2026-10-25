# 接单开发 - 个人作品集网站

极简银灰科幻风格的单页面展示网站，用于展示编程服务、作品案例和联系方式。

## 技术栈

- **Vue 3** + Composition API
- **Vite** 构建工具
- **TailwindCSS** 样式框架
- **pnpm** 包管理器

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览构建结果
pnpm run preview
```

## 自定义内容

站点文案与项目数据分两处存放：

**`src/i18n/zh.js` 与 `src/i18n/en.js`** —— 全站展示文案（两种语言需同步修改）：

- **hero**: 首屏标题与副标题
- **about**: 个人姓名、职位、描述、技能标签
- **services**: 服务项目
- **portfolio.items**: 首页作品卡片（`id`、`category`、`title`、`desc`、`tags`）
- **contact**: 微信、邮箱、QQ 等联系方式
- **footer**: 页脚版权信息

**`src/data/projects.js`** —— 每个项目的详情页完整数据（`description`、`features`、`architecture`、`screenshots`），中英双语以 `xxx` / `xxxEn` 字段共存。

首页卡片与详情页通过 `id` 关联，新增项目需同时修改 `projects.js`、`zh.js`、`en.js` 三处并保持 `id` 一致，另需在 `src/components/ProjectThumbnail.vue` 中补一条对应 `id` 的封面 SVG 分支（该组件没有默认兜底）。

## 项目结构

```
src/
├── main.js                      # 应用入口
├── App.vue                      # 主布局 / 视图切换
├── style.css                    # 全局样式 + Tailwind
├── data/
│   └── projects.js              # 项目详情数据
├── i18n/
│   ├── index.js                 # 语言切换逻辑
│   ├── zh.js                    # 中文文案
│   └── en.js                    # 英文文案
├── composables/
│   ├── useScrollReveal.js       # 滚动动画
│   └── useProjectView.js        # 项目详情视图状态（模块级单例）
└── components/
    ├── NavBar.vue               # 导航栏
    ├── HeroSection.vue          # 首屏
    ├── AboutSection.vue         # 关于我
    ├── ServicesSection.vue      # 服务项目
    ├── PortfolioSection.vue     # 作品集
    ├── ProjectDetail.vue        # 项目详情视图
    ├── ProjectThumbnail.vue     # 项目封面 SVG
    ├── ScreenshotMockup.vue     # 详情页截图占位原型
    ├── ContactSection.vue       # 联系方式
    └── FooterSection.vue        # 页脚
```

## 部署

### Cloudflare Pages（推荐，免费）

1. 将项目推送到 GitHub 仓库
2. 在 Cloudflare Pages 中导入仓库
3. 构建配置：
   - 构建命令：`pnpm run build`
   - 输出目录：`dist`
4. 部署完成后可在 Cloudflare 绑定自定义域名

### 其他平台

构建后的静态文件在 `dist/` 目录，可部署到任何静态托管平台。
