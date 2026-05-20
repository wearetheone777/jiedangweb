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

所有可配置内容集中在 `src/data/siteData.js`，修改该文件即可更新整站内容：

- **about**: 个人姓名、职位、描述、技能标签
- **services**: 服务项目（标题、图标、描述）
- **projects**: 作品案例（分类、标签、描述）
- **contact**: 微信、邮箱、QQ 等联系方式
- **footer**: 页脚版权信息

## 项目结构

```
src/
├── main.js                      # 应用入口
├── App.vue                      # 主布局
├── style.css                    # 全局样式 + Tailwind
├── data/
│   └── siteData.js              # 可配置内容
├── composables/
│   └── useScrollReveal.js       # 滚动动画
└── components/
    ├── NavBar.vue               # 导航栏
    ├── HeroSection.vue          # 首屏
    ├── AboutSection.vue         # 关于我
    ├── ServicesSection.vue      # 服务项目
    ├── PortfolioSection.vue     # 作品集
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
