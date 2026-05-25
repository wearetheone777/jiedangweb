# Code Wiki — 知识产权资产管理系统

## 一、项目概览

知识产权资产管理系统是企业级 IP 资产管理前端应用，提供专利、软著的维护管理、代理机构管理、预警预告、单位名录、统计分析等功能模块。项目基于 Ant Design Pro v6 / UmiJS v4 框架构建。

| 属性 | 值 |
|------|-----|
| 项目名称 | 知识产权资产管理系统 |
| 技术栈 | UmiJS v4 (max) + React 18 + Ant Design 5 |
| 构建工具 | UmiJS Max (max CLI) |
| 版本 | 6.0.0 |
| 设计基准 | 1920x1080（px 自动转 vw） |
| 包管理器 | npm |

---

## 二、技术栈

### 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| UmiJS (max) | ^4.0.52 | 企业级前端框架（路由、构建、插件） |
| React | ^18.2.0 | UI 框架 |
| Ant Design | ^5.2.2 | 组件库 |
| @ant-design/pro-components | ^2.3.57 | 高级 Pro 组件（ProTable、ProForm 等） |

### 数据可视化

| 技术 | 用途 |
|------|------|
| @antv/g2 ^5.1.18 | 统计分析图表 |
| @antv/g6 ^4.8.23 | 关系图谱（人员溯源） |
| @antv/x6 ^2.18.1 | 流程图编辑 |
| echarts ^5.4.3 + echarts-for-react ^3.0.2 | 统计图表备选方案 |

### 工具库

| 技术 | 用途 |
|------|------|
| ahooks ^3.7.8 | React Hooks 工具集 |
| lodash ^4.17.21 | 工具函数 |
| moment ^2.29.4 | 日期处理 |
| crypto-js ^4.2.0 | MD5 密码加密 |
| classnames ^2.3.2 | 类名拼接 |
| rc-queue-anim ^2.0.0 | 页面过渡动画 |
| @dnd-kit/core ^6.1.0 | 拖拽支持 |

### 开发工具

| 技术 | 用途 |
|------|------|
| TypeScript ^4.9.5 | 类型检查 |
| ESLint | 代码规范 |
| Prettier | 代码格式化 |
| Jest + @testing-library/react | 单元测试 |
| husky + lint-staged | Git 提交钩子 |
| postcss-px-to-viewport | px 自动转 vw |
| Tailwind CSS 3 | 原子化 CSS |

---

## 三、目录结构

```
ip-manage-ui/
├── config/                    # UmiJS 配置
│   ├── config.ts              #   主配置（路由、代理、插件等）
│   ├── routes.ts              #   路由配置
│   ├── proxy.ts               #   开发代理配置
│   └── defaultSettings.ts     #   Layout 主题设置
├── src/
│   ├── app.tsx                #   运行时配置（初始化、布局、退出登录）
│   ├── app.less               #   应用级样式（侧边栏、头像等）
│   ├── access.js              #   权限定义（基于 permissionStrList）
│   ├── requestConfig.js       #   请求/响应拦截器（satoken 鉴权）
│   ├── global.css             #   全局样式（滚动条、表格、面包屑等）
│   ├── typings.d.ts           #   类型声明（文件模块、环境变量等）
│   ├── models/                #   全局数据流模型
│   │   └── userModel.js       #     用户相关状态（字典数据：变更类型、预警类型等）
│   ├── pages/                 #   页面组件（按功能模块组织）
│   │   ├── User/Login/        #     登录页
│   │   ├── Workbench/         #     工作台首页
│   │   ├── PatentMaintenance/ #     专利维护（列表/编辑/详情/溯源）
│   │   ├── SoftMaintenance/   #     软著维护（列表/编辑/详情）
│   │   ├── agency/            #     代理机构（列表/详情）
│   │   ├── AlertForecast/     #     预告预警
│   │   ├── UnitDirectory/     #     单位名录
│   │   ├── StatisticalAnalysis/ #   统计分析（多种图表组件）
│   │   └── SystemManagement/  #     系统管理（用户/角色/权限管理）
│   ├── apis/                  #   API 请求层
│   │   ├── UserLoginApi.js    #     登录 API
│   │   ├── patentMaintenance/ #     专利维护 API
│   │   ├── softMaintenance/   #     软著维护 API
│   │   ├── agency/            #     代理机构 API
│   │   ├── AlertForecast.js   #     预告预警 API
│   │   ├── UnitDirectory.js   #     单位名录 API
│   │   ├── StatisticalAnalysis/ #   统计分析 API
│   │   ├── Workbench/         #     工作台 API
│   │   ├── UtilsApi.js        #     通用字典 API
│   │   └── SystemManagementApi/ #  系统管理 API（用户/角色/权限）
│   ├── components/            #   共享组件
│   │   ├── Footer/            #     页脚
│   │   ├── HeaderDropdown/    #     头部下拉菜单容器
│   │   ├── RightContent/      #     头像、退出登录
│   │   └── ViewDetailsModal/  #     通用详情弹窗
│   ├── utils/                 #   工具函数
│   │   ├── utils.js           #     公共方法（时间格式化、金额、防抖节流、文件操作等）
│   │   └── Prompt.jsx         #     全局 Prompt（挂载 $m 对象）
│   ├── services/              #   OpenAPI 自动生成代码
│   │   ├── ant-design-pro/    #     Ant Design Pro 标准 API
│   │   └── swagger/           #     Swagger 生成的 API
│   └── assets/                #   静态资源
│       ├── iconfont/          #     图标字体
│       ├── logo/              #     Logo
│       ├── home-icon/         #     工作台图标
│       └── edit-icon/         #     编辑页图标
├── types/                     #   TypeScript 缓存
├── mock/                      #   Mock 数据
├── tests/                     #   测试配置
└── public/                    #   公共资源（favicon、loading script）
```

---

## 四、核心架构

### 4.1 应用入口与运行时配置

**文件：** `src/app.tsx`

应用启动时执行以下关键流程：

1. **`getInitialState()`** — 全局初始化状态获取
   - 从 localStorage 读取系统标题 `sysTitle`
   - 调用 `getUserInfo()` 获取用户信息和权限列表
   - Token 失效时重定向到登录页
   - 清除 localStorage 中的 `satoken`、`nickName` 等缓存

2. **`layout()`** — 运行时布局配置
   - 配置侧边栏折叠状态（统计分析页自动折叠）
   - 配置面包屑导航（统一添加"首页"）
   - 配置头像区域（展示用户名 + 退出按钮）
   - 配置 403 无权限页面
   - 配置 `ConfigProvider` 主题覆盖（表格 hover 色、面包屑色、输入框阴影）
   - 微前端集成：通过 `window.__POWERED_BY_WUJIE__` 判断是否嵌入父应用

3. **`request`** — 全局请求配置（详见 4.3）

4. **微前端通信**：
   ```javascript
   window.$wujie?.bus?.$emit('subsystemReady', 'meta-packet')  // 通知父应用就绪
   window.$m = { ...window.$m, ...utils }                        // 挂载工具函数到全局
   ```

### 4.2 路由系统

**文件：** `config/routes.ts`

配置式路由，所有业务路径以 `/IpManage/` 为前缀：

| 路径 | 模块 | 组件 |
|------|------|------|
| `/User/Login` | 登录页 | `./User/Login` |
| `/IpManage/Workbench` | 工作台 | `./Workbench` |
| `/IpManage/patentMaintenance` | 专利维护列表 | `./PatentMaintenance` |
| `/IpManage/patentMaintenance/edit` | 专利编辑 | `./PatentMaintenance/edit` |
| `/IpManage/patentMaintenance/detail` | 专利详情 | `./PatentMaintenance/detail` |
| `/IpManage/patentMaintenance/traceability` | 人员溯源 | `./PatentMaintenance/Traceability` |
| `/IpManage/softMaintenance` | 软著维护列表 | `./SoftMaintenance` |
| `/IpManage/softMaintenance/edit` | 软著编辑 | `./SoftMaintenance/Edit` |
| `/IpManage/softMaintenance/detail` | 软著详情 | `./SoftMaintenance/Detail` |
| `/IpManage/agency` | 代理机构列表 | `./agency` |
| `/IpManage/agency/detail` | 代理机构详情 | `./agency/detail` |
| `/IpManage/AlertForecast` | 预告预警 | `./AlertForecast` |
| `/IpManage/UnitDirectory` | 单位名录 | `./UnitDirectory` |
| `/IpManage/StatisticalAnalysis` | 统计分析 | `./StatisticalAnalysis` |
| `/` | 根路由 | 重定向到 `/IpManage/Workbench` |

- 登录页设置了 `layout: false`，不使用主布局
- 编辑/详情/溯源页设置了 `hideInMenu: true`，不在侧边栏显示

### 4.3 请求与响应拦截

**文件：** `src/requestConfig.js`

**请求拦截器：**
- 从 `localStorage.getItem('satoken')` 获取 Token
- 自动注入到请求头 `config.headers['satoken']`

**响应拦截器：**
- 识别 `response.data.code === 1000` 标记为成功
- 识别 `ArrayBuffer` 类型标记为文件下载成功
- 处理流文件响应，提取 `content-disposition` 中的文件名
- 非成功响应返回 `Promise.reject()`

**错误处理**（`errorConfig.errorConfig`）：
- `ErrorShowType.SILENT` — 静默处理
- `ErrorShowType.WARN_MESSAGE` — `message.warning()`
- `ErrorShowType.ERROR_MESSAGE` — `message.error()`
- `ErrorShowType.NOTIFICATION` — `notification.open()`
- `ErrorShowType.REDIRECT` — 页面重定向
- Axios 网络错误（无响应/状态码异常/请求失败）分别处理

### 4.4 权限控制

**文件：** `src/access.js`

基于 UmiJS `@umijs/max` 的 access 插件实现：

1. **权限数据来源**：`initialState.data.permissionStrList`（登录时从 `getUserInfo()` 获取）
2. **核心方法**：`hasPermissions(str)` — 检查 `permissionStrList` 是否包含指定的权限字符串
3. **权限标识体系**（示例）：

| 权限对象 | 权限标识 |
|----------|----------|
| 数据字典 | `dataDict:list`、`dataDict:add`、`dataDict:edit`、`dataDict:delete` |
| 数据对象 | `dataObject:list`、`dataObject:add`、`dataObject:update` |
| 数据管理 | `data:list`、`data:add`、`data:edit`、`data:delete`、`data:view`、`data:select` |
| 系统管理 | `system-management` |
| 权限管理 | `authority-management`、`permission:add`、`permission:edit` |
| 角色管理 | `role-management`、`role:add`、`role:edit` |
| 用户管理 | `users-management`、`user:add`、`user:edit`、`user:reset` |
| 其他 | `ProjectReviewPrice`、`EquipmentType`、`projectSearch` |

4. **使用方式**：页面组件通过 `useAccess()` + `<Access>` 控制渲染

### 4.5 全局数据流

**文件：** `src/models/userModel.js`

使用 UmiJS 的 `model` 插件（数据流）管理全局状态：

- `changeTypeOption` — 变更类型下拉选项（字典：`modifyType`）
- `WorkbenchWarning` — 工作台预警类型选项（字典：`waringType`）
- `publishStatus` — 发表状态选项（字典：`publicationStatus`）

所有数据均通过 `getChildrenList({ pCode })` 从后端字典接口获取。

### 4.6 全局工具函数

**文件：** `src/utils/utils.js`

通过 `window.$m` 暴露全局可用方法：

| 方法 | 功能 |
|------|------|
| `$m.message` | Ant Design 全局消息 |
| `$m.modal` | Ant Design 全局弹窗 |
| `$m.notification` | Ant Design 全局通知 |
| `utils.textSave()` | 导出文本为 JSON/TXT/MD 文件 |
| `utils.fileAsText()` | 读取 File 对象为文本 |
| `utils.format()` | 时间戳 → `yyyy-mm-dd hh:mm:ss` |
| `utils.priceFormat()` | 金额千分位格式化 |
| `utils.throttle()` | 函数节流 |
| `utils.debounce()` | 函数防抖 |
| `utils.uuid()` | 生成 UUID |
| `utils.download()` | 文件下载 |
| `utils.exportWord()` | 导出 Word 文档（基于 docxtemplater） |
| `utils.flatten()` | 数组扁平化 |

**文件：** `src/utils/Prompt.jsx`

在 React 组件中提前获取 `App.useApp()` 的 `message`、`modal`、`notification` 实例，挂载到 `window.$m`，使非 React 组件（如拦截器）也能调用 Ant Design 的反馈方法。

---

## 五、模块详情

### 5.1 登录模块

**页面：** `src/pages/User/Login/index.jsx`
**API：** `src/apis/UserLoginApi.js`、`src/apis/SystemManagementApi/UsersManagementApi.js`

**流程：**
1. 首次加载检查 localStorage 中是否存在 `satoken`，有则直接跳转首页
2. 用户提交登录：密码经 `CryptoJS.MD5()` 加密后截取 8-24 位
3. 调用 `userLogin()` → 后端返回 satoken（通过 Cookie 下发）
4. 从 Cookie 读取 token 存入 `localStorage.setItem('satoken', token)`
5. 调用 `getUserInfo()` 获取用户信息和权限列表
6. 成功后刷新全局状态（`refresh()`）并跳转首页

### 5.2 工作台

**页面：** `src/pages/Workbench/index.jsx`
**API：** `src/apis/Workbench/Workbench.js`

- **数据总览**：申请总数、今年申请数、有效数量、申请中数量
- **预警提醒**（6 种类型，点击跳转到预告预警页带参数 `?key=`）：
  - 同地址不同申请人 → `waringType[0]`
  - 权利流失提醒 → `waringType[1]`
  - 代理机构异常提醒 → `waringType[2]`
  - 缴费提醒 → `waringType[3]`
  - 临期提醒 → `waringType[4]`
  - 申请人退役 → `waringType[5]`

### 5.3 专利维护

**API：** `src/apis/patentMaintenance/patentMaintenance.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `searchList()` | `/api/ownership/pageList` | 分页检索列表 |
| `patentEditor()` | `/api/ownership/update` | 编辑专利 |
| `patentDetail()` | `/api/ownership/load` | 查看详情 |
| `ParsingProgress()` | `/api/other/execute_msg` | 上传文件解析进度轮询 |
| `findSourceByName()` | `/api/ownership/findSourceByName` | 查找人员关系 |
| `getChangeRecords()` | `/api/ownership/changeRecord` | 变更记录 |
| `findPatentByName()` | `/api/ownership/findPatentByName` | 溯源专利 |
| `getDownloadAcquisitionTool()` | `/api/unit/downloadDataAcquisition` | 下载采集工具 |

**页面组件：**

| 组件 | 路径 | 功能 |
|------|------|------|
| `index.jsx` | 列表页 | ProTable 展示，支持搜索、分页、数据导入（Excel 上传） |
| `edit/index.jsx` | 编辑页 | 编辑专利信息 |
| `detail/index.jsx` | 详情页 | 展示专利详细数据 |
| `Traceability/` | 溯源页 | 人员关系溯源（含关系图谱 FamilyTreeGraph + 表格 TableList） |
| `Components/costom-tabs-detail/` | 自定义标签详情 | Tab 切换展示不同数据 |
| `Components/CostomChangeRecord/` | 变更记录 | 展示变更历史 |
| `Components/Custom-tabs/` | 自定义标签 | 页内 Tab 切换组件 |

**列表页关键特性：**
- 列配置包含：申请号、名称、类型、状态、申请人、发明人、申请年度、使用类型（民用/国防）
- 发明人支持点击跳转人员溯源
- 操作列包含"编辑"和"详情"按钮
- 数据导入弹窗支持 Excel 文件上传（`/api/patents/patentsExcel`）并轮询解析进度
- 搜索引擎：类型（从字典 ipType 获取）、状态（从字典 patentStatus 获取）、使用类型

### 5.4 软著维护

**API：** `src/apis/softMaintenance/softMaintenance.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `searchList()` | `/api/ownership/softPageList` | 分页检索列表 |
| `softEditor()` | `/api/ownership/softUpdate` | 编辑软著 |
| `softDetail()` | `/api/ownership/softLoad` | 查看详情 |
| `getChangeRecords()` | `/api/ownership/changeSoftRecord` | 变更记录 |
| `getDownloadAcquisitionTool()` | `/api/unit/downloadDataAcquisition` | 下载采集工具 |

**页面结构与专利维护类似，包含列表、编辑（Edit）、详情（Detail）以及可复用组件。**

### 5.5 代理机构

**API：** `src/apis/agency/agency.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `getAgencyList()` | `/api/agent/pageList` | 分页列表 |
| `addAgencyList()` | `/api/agent/insert` | 新增 |
| `deleteAgencyList()` | `/api/agent/delete` | 删除 |
| `getDetailAgencyList()` | `/api/agent/select` | 详情 |
| `VerificationAgency()` | `/api/agent/agentCheck` | 校验代理机构 |
| `getChildrenList()` | `/api/baseDict/childByName` | 字典查询 |

### 5.6 预告预警

**API：** `src/apis/AlertForecast.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `getWaringLists()` | `/api/warn/pageList` | 预警列表 |
| `exportAlertForecastExcel()` | `/api/warn/warningExport` | 导出 Excel |
| `getIgnore()` | `/api/warn/ignore` | 忽略预警 |
| `getWarningUpdate()` | `/api/warn/warningUpdate` | 保存预警更改 |
| `getUnitList()` | `/api/warn/getUnitList` | 获取单位名录 |
| `getAgentList()` | `/api/warn/getAgentList` | 获取代理机构 |
| `getInventRetired()` | `/api/warn/inventRetired` | 确认退役 |
| `templatesDownload()` | `/api/warn/templatesDownload` | 下载退役模板 |

### 5.7 单位名录

**API：** `src/apis/UnitDirectory.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `getUnitTrees()` | `/api/unit/unitTree` | 获取单位树（POST，qs 序列化） |
| `getUnitLists()` | `/api/unit/getAll` | 获取全部单位列表 |
| `addUnits()` | `/api/unit/insert` | 新增单位 |
| `getUnitsEdit()` | `/api/unit/select` | 获取单位详情 |
| `getUnitsDel()` | `/api/unit/delete` | 删除单位 |

### 5.8 统计分析

**API：** `src/apis/StatisticalAnalysis/StatisticalAnalysis.js`

| API 函数 | 接口路径 | 用途 |
|----------|----------|------|
| `getYearIntellectualPropertyLists()` | `/api/work/ownerShipNum` | 历年知识产权分类数量 |
| `getLastYearIntellectualPropertyLists()` | `/api/work/yearNum` | 近一年知识产权数量 |
| `getNumberIntellectual()` | `/api/work/unitNum` | 各单位知识产权数量 |
| `getTypeIntellectualProperty()` | `/api/work/typeNum` | 各类型知识产权数量 |
| `getHistoryIntellectualProperty()` | `/api/work/yearOwnerShipNum` | 历年知识产权数量 |
| `getAllNumberIntellectualProperty()` | `/api/work/totalNum` | 大屏总数量 |

**图表组件：**

| 组件 | 用途 |
|------|------|
| `Custom-center-Charts` | 居中图表 |
| `Custom-Distribution-Charts` | 分布图表 |
| `Custom-Last-Year-Apply-Charts` | 近一年申请图表 |
| `Custom-Property-Apply-Charts` | 属性申请图表 |
| `Custom-Year-Apply-Charts` | 历年申请图表 |

### 5.9 系统管理

| 子模块 | 页面路径 | API 文件 |
|--------|----------|----------|
| 用户管理 | `pages/SystemManagement/UsersManagement/` | `SystemManagementApi/UsersManagementApi.js` |
| 角色管理 | `pages/SystemManagement/RoleManagement/` | `SystemManagementApi/RoleManagementApi.js` |
| 权限管理 | `pages/SystemManagement/AuthorityManagement/` | `SystemManagementApi/AuthorityManagementApi.js` |

**系统管理 RESTful API 模式：**

| 操作 | 方法 | 路径模式 |
|------|------|----------|
| 分页查询 | GET | `/api/sys{Resource}/page` |
| 新增 | POST | `/api/sys{Resource}/save` |
| 修改 | POST | `/api/sys{Resource}/update` |
| 删除 | DELETE | `/api/sys{Resource}/delete/{id}` |
| 详情 | GET | `/api/sys{Resource}/{id}` |
| 状态变更 | POST/GET | `/api/sys{Resource}/changeStatus` |
| 下拉列表 | GET | `/api/sys{Resource}/all` |
| 树形菜单 | GET | `/api/sysMenu/tree` |

---

## 六、API 层设计规范

### 请求封装模式

所有 API 文件遵循统一模式：

```javascript
import { request } from 'umi'
const defaultRequestConfig = {
    headers: {},
    timeout: 5000,
    skipErrorHandler: false,
    getResponse: false,
    requestInterceptors: [],
    responseInterceptors: [],
}
export function apiFunction(data/params, options) {
    const apiURL = '/api/xxx'
    return request(apiURL, {
        data/params,
        method: 'post'/'get'/'delete',
        ...defaultRequestConfig,
        ...options,
    })
}
```

- 统一使用 UmiJS 的 `request` 函数
- 请求方式约定：列表用 POST 传递 data，部分查询用 GET 传递 params
- 文件下载使用 `responseType: 'blob'`，超时 60s
- 支持 `options` 参数覆盖默认配置

### API 模块分布

```
src/apis/
├── UserLoginApi.js                    # 登录认证（/api/login）
├── UtilsApi.js                        # 字典查询（/api/baseDict/childByName）
├── patentMaintenance/patentMaintenance.js   # 专利维护（/api/ownership/*）
├── softMaintenance/softMaintenance.js       # 软著维护（/api/ownership/soft*）
├── agency/agency.js                   # 代理机构（/api/agent/*）
├── AlertForecast.js                   # 预告预警（/api/warn/*）
├── UnitDirectory.js                   # 单位名录（/api/unit/*）
├── StatisticalAnalysis/StatisticalAnalysis.js  # 统计分析（/api/work/*）
├── Workbench/Workbench.js             # 工作台（/api/work/*）
├── equipmentClassification.js         # 装备分类
├── equipmentParams.js                 # 装备参数
├── EquipmentType.js                   # 装备类型
├── projectReviewPriceApi.js           # 项目报审价
├── projectSearch.js                   # 项目检索
└── SystemManagementApi/               # 系统管理
    ├── UsersManagementApi.js          #   用户管理（/api/sysUser/*）
    ├── RoleManagementApi.js           #   角色管理（/api/sysRole/*）
    ├── AuthorityManagementApi.js      #   权限管理（/api/sysMenu/*）
    ├── DataAnalysisApi.js             #   数据分析（/api/dataView/*）
    └── SystemConfigApi.js             #   系统配置（/api/sysManager/*）
```

---

## 七、配置详解

### 7.1 主配置 (`config/config.ts`)

- **环境变量**：`REACT_APP_ENV` 区分 dev/test/uat/prod
- **Hash 模式**：开启，构建产物带 hash 后缀
- **主题**：Ant Design `root-entry-name: variable`，支持 ConfigProvider 动态调色
- **插件启用**：model、initialState、layout、access、request、antd、moment2dayjs
- **postcss-px-to-viewport**：1920 视口宽度，px 自动转 vw
- **OpenAPI**：从规范生成 service 和 mock 代码
- **微前端**：`presets: ['umi-presets-pro']` + wujie 集成
- 侧边栏初始宽度：300px

### 7.2 代理配置 (`config/proxy.ts`)

```javascript
'/api/' → target: 'http://210.79.226.155:2303/'   // dev 环境
```

### 7.3 Layout 设置 (`config/defaultSettings.ts`)

| 设置项 | 值 |
|--------|-----|
| 主题色 | `#163E82` (深蓝) |
| 布局模式 | 侧边栏 (side) |
| Logo | `/logo.svg` |
| 标题 | "知识产权资产管理系统" |
| 底部 | 不显示 (footerRender: false) |
| 侧边栏宽度 | 300px |
| 菜单文字色 | `#C4CDE2` |
| 菜单选中色 | `#FFFFFF` |
| 菜单选中背景 | `#005EFF` |

---

## 八、全局样式体系

### 样式文件层级

| 文件 | 作用域 | 内容 |
|------|--------|------|
| `src/app.less` | 应用级 | 侧边栏折叠、滚动条、项目标题、按钮 |
| `src/global.css` | 全局 | 基础 reset、表格样式、弹窗样式、滚动条 |
| `src/pages/*/index.less` | 页面级 | 各页面特有样式 |
| `tailwindcss` | 原子化 | 工具类 |

### 设计风格要点

- 主色调：`#163E82`（深蓝）/ `#005EFF`（亮蓝）
- 字体：`Microsoft YaHei UI`
- 表格头部：灰色 `#999999`，白色背景
- 表格行悬浮背景：`rgba(221, 231, 247, 1)`
- 面包屑当前项蓝色：`rgba(19, 87, 255, 1)`
- 按钮样式统一：圆角 65px，蓝底白字

---

## 九、项目启动与构建

### 环境准备

```bash
node >= 12.0.0
npm install          # 安装依赖（postinstall 自动执行 max setup）
```

### 开发

```bash
npm run start:dev    # 连接 dev 后端（禁用 mock）
npm run start        # 启用 mock 数据
npm run start:test   # 连接 test 环境
npm run start:prod   # 连接 prod 环境
```

### 构建

```bash
npm run build:dev    # dev 环境
npm run build:test   # test 环境
npm run build:uat    # uat 环境
npm run build:prod   # prod 环境
```

### 代码质量

```bash
npm run lint          # ESLint + Prettier + TypeScript
npm run lint:fix      # 自动修复 ESLint
npm run tsc           # TypeScript 类型检查
npm run prettier      # Prettier 格式化
```

### 测试

```bash
npm test              # Jest 测试
npm run test:coverage # 带覆盖率
npm run test:update   # 更新快照
```

### 其他

```bash
npm run analyze       # 构建产物分析
npm run openapi       # 从 OpenAPI 规范生成服务代码
```

---

## 十、微前端集成

项目支持通过 wujie 框架嵌入父应用：

- 检测 `window.__POWERED_BY_WUJIE__` 判断是否在微前端环境中
- 嵌入父应用时，侧边栏顶部显示"主应用菜单"按钮（`AppstoreOutlined` 图标）
- 通过 `window.$wujie.bus.$emit('subsystemReady', 'meta-packet')` 通知父应用就绪
- 全局 `window.$m` 对父应用暴露工具方法

---

## 十一、后端接口约定

| 约定项 | 规范 |
|--------|------|
| 基础路径 | `/api/` |
| 成功响应码 | `code === 1000` |
| 认证方式 | Header `satoken`（从 localStorage 读取） |
| 分页参数 | `pageNo`、`pageSize` |
| 字典查询 | `/api/baseDict/childByName?pCode=xxx` |
| 文件上传 | POST multipart/form-data |
| 文件下载 | GET, `responseType: 'blob'`，文件名在 `content-disposition` 头 |
