# 部署说明

## 部署平台

Cloudflare Pages（免费）

## 部署地址

`https://jiedangweb.pages.dev`

## 构建配置

| 配置项 | 值 |
|--------|-----|
| 代码仓库 | `github.com/weareone777/jiedangweb` |
| 生产分支 | `master` |
| 构建命令 | `pnpm run build` |
| 输出目录 | `dist` |
| 包管理器 | pnpm（自动检测 lock 文件） |

## 自动部署

每次推送代码到 `master` 分支，Cloudflare Pages 自动构建部署，无需手动操作。

## 首次设置步骤

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧菜单 → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 授权 GitHub 并选择 `weareone777/jiedangweb` 仓库
4. 填入上述构建配置，点击 **Save and Deploy**
5. 部署完成后即可通过 `jiedangweb.pages.dev` 访问

## 绑定自定义域名（可选）

1. Cloudflare Pages 项目 → **Custom domains**
2. 添加你的域名，按指引配置 DNS
3. 自动签发 SSL 证书

## 本地开发

```bash
pnpm install
pnpm run dev
```
