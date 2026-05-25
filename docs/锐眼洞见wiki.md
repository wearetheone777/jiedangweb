# 锐眼洞见 (ruiyandongjian) - 系统功能与实现 Wiki

## 一、系统概述

锐眼洞见是北京锐安科技有限公司开发的移动端 AI 安全检测应用，基于 UniApp 跨平台框架，支持微信小程序、H5 和 App 多端运行。应用提供 AI 安全服务（文本检测、图片检测、音频检测、视频检测）和经典安全服务两大类，采用按次付费 + 免费试用的商业模式，后端服务域名为 `scaneye.cn`。

## 二、功能模块详解

### 2.1 首页 - AI 安全服务

**功能描述**：应用主页面，展示 AI 安全检测服务入口。

**页面路径**：`pages/index/index`

**核心功能**：
- 四种 AI 检测类型入口：文本检测、图片检测、音频检测、视频检测
- 经典安全服务入口
- 检测模式选择
- 免费次数提示

**TabBar 位置**：第一个 Tab（AI安全服务）

**实现方式**：
- 自定义导航栏（`navigationStyle: custom`）
- 使用 `uni-my-tabbar` 自定义底部导航
- 首页子组件按检测类型拆分：
  - `text-different.vue`：文本检测入口
  - `photo-different.vue`：图片检测入口
  - `audio-different.vue`：音频检测入口
  - `video-different.vue`：视频检测入口

### 2.2 经典安全服务

**功能描述**：传统安全服务列表页面。

**页面路径**：`pages/universal-safe/universal-safe`

### 2.3 登录模块

**功能描述**：用户身份认证，支持多种登录方式。

**分包**：`pages-login`

| 页面 | 路径 | 说明 |
|------|------|------|
| 账号密码登录 | `pages-login/login/login` | 手机号/账号 + 密码登录 |
| 手机号登录 | `pages-login/loginByPhone/loginByPhone` | 手机号 + 验证码登录 |

**登录方式**：
1. **账号密码登录**：输入账号和密码进行登录
2. **手机号验证码登录**：输入手机号 → 获取验证码 → 登录
3. **微信授权登录**：通过微信 OpenID 自动登录（小程序端）

**API 接口**：
| 接口 | 说明 |
|------|------|
| `/applet/send` | 发送验证码 |
| `/applet/login` | 手机号登录 |
| `/applet/getOpen` | 获取微信 OpenID |
| `/applet/getPhone` | 获取微信手机号 |

### 2.4 AI 检测服务

#### 2.4.1 文本检测

**功能描述**：检测文本内容中的敏感信息和违规内容。

**核心流程**：
```
输入文本 → 创建订单(createOrder) → 检查免费资格 →
支付订单(payOrder) → 查询支付状态(searchOrder) →
查看检测结果(searchOrderResult)
```

**API 接口**：
| 接口 | 说明 |
|------|------|
| `/applet/textCreate` | 创建文本检测订单 |
| `/applet/textTrade` | 支付文本检测订单 |
| `/applet/selAiOrdTradeStatus` | 查询支付状态 |
| `/applet/selectRes` | 查询检测结果 |

#### 2.4.2 图片检测

**功能描述**：AI 图片真伪鉴别和篡改检测。

**核心流程**：
```
上传图片 → 创建文件订单(uploadfileImg) → 支付 → 查询结果
```

**API 接口**：
| 接口 | 说明 |
|------|------|
| `/applet/fileOrdCreate` | 上传图片创建订单（文件上传） |

#### 2.4.3 音频检测

**功能描述**：AI 音频内容安全检测。

**核心流程**：
```
录制/上传音频 → 创建订单 → 支付 → 查询结果
```

**实现方式**：
- 使用 `imt-audio` 自定义音频组件
- 支持录音和文件上传两种方式

#### 2.4.4 视频检测

**功能描述**：AI 视频内容安全检测。

**核心流程**：
```
上传视频 → 创建订单 → 支付 → 查询结果
```

**实现方式**：
- 使用 `imt-video` 自定义视频组件
- 支持视频文件上传

### 2.5 检测结果展示

**分包**：`pages-result`

| 页面 | 路径 | 说明 |
|------|------|------|
| 文本检测结果 | `pages-result/textResult/textResult` | 展示文本检测结果详情 |
| 图片检测结果 | `pages-result/photoResult/photoResult` | 展示图片检测结果详情 |
| 音频检测结果 | `pages-result/audioResult/audioResult` | 展示音频检测结果详情 |
| 视频检测结果 | `pages-result/videoResult/videoResult` | 展示视频检测结果详情 |

**核心功能**：
- 检测结果可视化展示
- 风险等级标识（高/中/低）
- 检测详情展开查看
- 分享检测报告

### 2.6 个人中心

**分包**：`pages-my`

| 页面 | 路径 | 说明 |
|------|------|------|
| 个人中心 | `pages-my/my/my` | 用户信息和功能入口 |
| 我的订单 | `pages-my/myOrder/myOrder` | 订单列表 |
| 订单详情 | `pages-my/myOrderDetail/myOrderDetail` | 订单详细信息 |
| 关于 | `pages-my/about/about` | 应用信息 |

**TabBar 位置**：第二个 Tab（个人中心）

**API 接口**：
| 接口 | 说明 |
|------|------|
| `/applet/myOrd` | 我的订单列表 |
| `/applet/myOrdPage` | 我的订单分页列表 |
| `/applet/getOrdDetail` | 订单详情 |
| `/applet/getInvoice` | 申请发票 |
| `/applet/cancelOrd` | 取消订单 |
| `/applet/loginOut` | 退出登录 |

### 2.7 协议页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 用户协议 | `pages/userAgreement/userAgreement` | 用户服务协议 |
| 产品服务协议 | `pages/productServiceAgreement/productServiceAgreement` | 产品使用协议 |
| 隐私政策 | `pages/privacyPolicy/privacyPolicy` | 隐私保护政策 |

## 三、架构实现

### 3.1 分包策略

```
主包 (pages/)
├── 首页 (AI 安全服务入口)
├── 经典安全服务
├── 个人中心（TabBar 页面）
└── 协议页面

分包 pages-login/
├── 账号密码登录
└── 手机号登录

分包 pages-my/
├── 个人中心详情
├── 我的订单
├── 订单详情
└── 关于页面

分包 pages-result/
├── 文本检测结果
├── 图片检测结果
├── 音频检测结果
└── 视频检测结果
```

**预加载规则**：
- 进入登录页时预加载 `pages-login` 分包
- 进入个人中心时预加载 `pages-my` 分包
- 进入检测结果页时预加载主包

### 3.2 请求封装

**实现文件**：`config/request.js`

**请求拦截**：
- 基于 uView 的 `uni.$u.http` 封装
- 当 `config.custom.auth = true` 时，自动添加 `Authorization-LetToken` 请求头
- Token 从 Vuex 中获取（`vm.vuex_token`）

**响应拦截**：
- 统一处理响应码：`code === 200` 为成功
- 非 200 状态码自动 toast 提示错误信息
- 支持 `custom.catch` 配置是否将错误抛出到 catch
- 成功时返回 `data.data`，无数据时返回空对象

**API 基础配置**：
```javascript
config.baseURL = 'https://scaneye.cn:18043'  // 测试环境
// config.baseURL = 'https://scaneye.cn:18037'  // 生产环境
```

### 3.3 状态管理

**实现文件**：`store/index.js`

- 使用 Vuex 管理全局状态
- 存储 `vuex_token`（用户认证令牌）
- 通过 `$u.mixin.js` 全局混入，在所有组件中可直接访问

### 3.4 自定义组件

| 组件 | 路径 | 说明 |
|------|------|------|
| imt-audio | `components/imt-audio/` | 音频录制和播放组件 |
| imt-video | `components/imt-video/` | 视频录制和播放组件 |
| qiqb-share | `components/qiqb-share/` | 分享海报生成组件（基于 lime-painter） |
| uni-icon-photo | `components/uni-icon-photo/` | 图标照片选择组件 |
| uni-my-popup | `components/uni-my-popup/` | 自定义弹窗组件 |
| uni-my-tabbar | `components/uni-my-tabbar/` | 自定义底部导航栏 |
| uni-pie-chat | `components/uni-pie-chat/` | 饼图组件（基于 qiun-data-charts） |

### 3.5 UI 框架

- **uView-UI 2.x**：核心 UI 组件库
  - 通过 `easycom` 自动引入：`"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"`
  - 全局混入 `$u.mixin.js`
- **uni-ui**：UniApp 官方组件库补充
- **qiun-data-charts**：数据可视化图表
- **lime-painter**：海报绘制（用于分享功能）

## 四、检测业务流程

### 4.1 通用检测流程

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  选择检测  │───→│  输入数据  │───→│  创建订单  │───→│  检查免费  │
│  类型     │    │ (文本/文件) │    │          │    │  资格     │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
                                                    │
                                    ┌───────────────┼───────────────┐
                                    ↓                               ↓
                              ┌──────────┐                   ┌──────────┐
                              │  免费检测  │                   │  付费检测  │
                              └─────┬────┘                   └─────┬────┘
                                    │                               │
                                    ↓                               ↓
                              ┌──────────┐                   ┌──────────┐
                              │  等待结果  │                   │  支付订单  │
                              └─────┬────┘                   └─────┬────┘
                                    │                               │
                                    └───────────┬───────────────────┘
                                                ↓
                                          ┌──────────┐
                                          │  查看结果  │
                                          └──────────┘
```

### 4.2 产品价格查询

```
查询产品列表(IQueryTheListOfOnlineServiceProducts) →
查询检测模式(getDetectionMode) →
查询免费次数(CheckTheNumberOfFreeTimesImpl) →
查询产品详情(searchprodectDetailByType)
```

## 五、多端适配

| 平台 | 适配方式 | 特殊处理 |
|------|---------|---------|
| 微信小程序 | 原生支持 | 微信登录、微信支付 |
| H5 | 原生支持 | 扫码支付 |
| App | 原生支持 | 原生录音/录像 |

**微信小程序配置**：`project.config.json`
**应用配置**：`manifest.json`
