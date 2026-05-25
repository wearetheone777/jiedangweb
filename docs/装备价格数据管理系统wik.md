# 装备价格数据管理系统 - 系统功能与实现 Wiki

## 一、系统概述

装备价格数据管理系统是北京信通泰克科技有限公司开发的专业化价格管理平台，用于管理军队/国防装备的价格数据，涵盖装备分类管理、装备数据参数维护、项目报价/审价/评审价全流程管理，以及项目检索与数据分析功能。系统服务于装备价格数据的全生命周期管理，从数据采集、审核到统计分析形成完整闭环。

## 二、功能模块详解

### 2.1 项目检索

**功能描述**：提供项目信息的查询、列表展示和图表分析功能。

**页面路径**：`/EquipmentPrice/projectSearch`

**子页面**：
| 页面 | 路径 | 说明 |
|------|------|------|
| 项目检索列表 | `/EquipmentPrice/projectSearch/projectSearchList` | 项目列表展示，支持多条件筛选 |
| 图表分析 | `/EquipmentPrice/projectSearch/ChartAnalysis` | ECharts 可视化分析项目价格数据 |

**核心功能**：
- 多维度项目检索（按项目名称、时间范围、价格区间等）
- 列表/图表两种展示模式切换
- 图表分析支持柱状图、折线图、饼图等多种图表类型
- 数据导出功能

**实现方式**：
- 使用 `echarts-for-react` 组件实现图表渲染
- 使用 ProTable 实现列表展示
- 图表配置封装为可复用的 ECharts option 生成函数

### 2.2 装备分类

**功能描述**：管理装备的层级分类体系，为装备管理提供分类基础。

**页面路径**：`/EquipmentPrice/EquipmentType`

**核心功能**：
- 树形结构展示装备分类层级
- 新增/编辑/删除分类节点
- 分类排序和层级调整
- 分类关联的装备数量统计

**实现方式**：
- 使用 Ant Design 的 Tree 组件实现树形展示
- 使用 Ant Design Pro 的 ProTable 配合树形数据结构
- 分类数据通过递归接口获取

### 2.3 装备管理

**功能描述**：管理具体装备的基本信息和数据参数。

**页面路径**：`/EquipmentPrice/EquipmentClassification`

**子页面**：
| 页面 | 路径 | 说明 |
|------|------|------|
| 装备管理列表 | `/EquipmentPrice/EquipmentClassification` | 装备列表展示 |
| 数据参数 | `/EquipmentPrice/EquipmentClassification/DataParameters` | 装备的详细参数配置 |

**核心功能**：
- 装备信息 CRUD（增删改查）
- 装备与分类的关联管理
- 数据参数配置：定义装备的技术参数、价格参数等
- 参数模板管理：支持按装备类型定义参数模板

**实现方式**：
- 主列表使用 ProTable
- 数据参数使用动态表单，根据参数模板生成表单字段
- 使用 `@dnd-kit/core` 实现参数排序拖拽

### 2.4 项目报审价

**功能描述**：管理项目从报价到审价再到评审价的完整流程，是系统核心业务模块。

**页面路径**：`/EquipmentPrice/ProjectReviewPrice`

**子页面**：
| 页面 | 路径 | 说明 |
|------|------|------|
| 项目报审价列表 | `/EquipmentPrice/ProjectReviewPrice` | 报审价项目列表 |
| 项目报审价详情 | `/EquipmentPrice/ProjectReviewPrice/Detail` | 查看报审价详细信息 |
| 项目报价 | `/EquipmentPrice/ProjectReviewPrice/ProjectQuotation` | 填写项目报价 |
| 项目审价 | `/EquipmentPrice/ProjectReviewPrice/projectReview` | 审价环节 |
| 项目评审价 | `/EquipmentPrice/ProjectReviewPrice/projectQuotationReview` | 评审价环节 |

**核心业务流程**：
```
项目创建 → 填写报价 → 提交审价 → 审价审核 → 评审价 → 最终定价
```

**实现方式**：
- 列表页使用 ProTable，支持按状态筛选
- 报价/审价/评审价使用多步骤表单（Steps 组件）
- 使用 `crypto-js` 对敏感价格数据进行加密传输
- 审价流程通过后端状态机控制，前端根据状态展示不同操作按钮

### 2.5 系统管理

**功能描述**：管理系统用户、角色和权限。

**页面路径**：`/system-management`

**子页面**：
| 页面 | 路径 | 说明 |
|------|------|------|
| 权限管理 | `/system-management/authority-management` | 功能权限配置 |
| 角色管理 | `/system-management/role-management` | 角色定义和权限分配 |
| 用户管理 | `/system-management/users-management` | 用户账号管理 |

**核心功能**：
- RBAC 权限模型（基于角色的访问控制）
- 用户-角色-权限三级关联
- 权限粒度控制到菜单和按钮级别

**实现方式**：
- 使用 `src/access.ts` 定义权限规则
- 路由配置中通过 `access` 字段控制菜单可见性
- 页面内通过 `useAccess()` 控制按钮显示

## 三、架构实现

### 3.1 认证机制

- 使用 `satoken` 进行会话管理
- 登录成功后 token 存储在 localStorage
- 请求拦截器自动携带 token
- Token 过期自动跳转登录页

### 3.2 数据加密

- 使用 `crypto-js` 对敏感价格数据进行 AES 加密
- 加密在请求发送前执行，解密在响应接收后执行
- 密钥通过安全通道获取

### 3.3 图表可视化

- 使用 `echarts-for-react` 封装 ECharts 图表
- 图表类型：柱状图、折线图、饼图、雷达图等
- 图表配置封装为通用组件，支持动态数据绑定
- 使用 `@antv/g6` 实现装备关系图可视化

### 3.4 响应式适配

- 使用 `postcss-px-to-viewport` 实现 px 到 vw 的自动转换
- 配置在 `postcss.config.js` 中
- 适配不同分辨率的显示设备

### 3.5 工具函数库

**实现文件**：`src/utils/utils.js`

核心工具函数：
- `priceFormat`：价格格式化（千分位、小数位）
- `formatDate`：日期格式化
- `debounce` / `throttle`：防抖节流
- `deepClone`：深拷贝
- `downloadFile`：文件下载
- `validateForm`：表单校验
- `encrypt` / `decrypt`：数据加解密

## 四、数据模型关系

```
装备分类 (EquipmentType)
  ├── 分类名称
  ├── 分类编码
  ├── 上级分类 ID
  └── 排序号

装备 (Equipment)
  ├── 装备名称
  ├── 装备编码
  ├── 所属分类 ID
  ├── 数据参数 [] (JSON)
  └── 状态

项目 (Project)
  ├── 项目名称
  ├── 项目编号
  ├── 关联装备 []
  ├── 报价金额
  ├── 审价金额
  ├── 评审价金额
  ├── 当前状态 (报价中/审价中/评审中/已定价)
  └── 操作记录 []

用户 (User)
  ├── 用户名
  ├── 角色 []
  └── 权限 []

角色 (Role)
  ├── 角色名称
  └── 权限 []
```

## 五、关键业务流程

### 5.1 项目报审价全流程

```
1. 创建项目 → 选择关联装备 → 填写项目基本信息
2. 项目报价 → 逐项填写装备报价 → 汇总报价金额 → 提交报价
3. 项目审价 → 审价人员审核报价 → 填写审价意见 → 确定审价金额
4. 项目评审价 → 评审委员会评审 → 综合意见 → 确定最终评审价
5. 项目归档 → 生成报审价报告 → 归档存储
```

### 5.2 装备数据管理流程

```
1. 建立装备分类体系 → 创建分类树
2. 在分类下新增装备 → 填写基本信息
3. 配置装备数据参数 → 定义参数模板 → 填写参数值
4. 装备数据审核 → 确认数据准确性
5. 装备数据用于项目报价
```

## 六、与主数据管理项目的差异

| 维度 | 主数据管理系统 | 装备价格数据管理系统 |
|------|--------------|-------------------|
| 业务领域 | 通用企业数据治理 | 装备价格专业管理 |
| 核心功能 | 数据建模 + 数据管理 | 报价/审价/评审价流程 |
| 图表功能 | ReactFlow 流程图 | ECharts 数据分析 + G6 关系图 |
| 数据加密 | 无 | crypto-js AES 加密 |
| CSS 方案 | 标准 Less | TailwindCSS + px-to-viewport |
| 流程管理 | 无 | 完整的报审价状态机 |
