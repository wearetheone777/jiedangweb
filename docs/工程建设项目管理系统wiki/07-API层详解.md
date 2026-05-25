# API 层详解

## HTTP 客户端封装

位置：`utils/http.js`

基于 `luch-request` 库构建，提供全局配置和拦截器。

### 全局配置 (`http.setConfig`)

```javascript
config.baseURL = 'http://192.144.191.81/'
config.custom.auth = true      // 是否自动携带 token
config.custom.loading = true   // 是否展示 loading
```

### 请求拦截器

- 自动附加设备标识：`PC-IDENTIFICATION` header（APP 端）
- 自动注入 JWT Token：`Authorization: JWT <token>`
- 自动显示 Loading 动画（通过 `uni.showLoading()`）

### 响应拦截器

- 自动隐藏 Loading
- **401 处理**：清除本地 Token 和用户信息，跳转登录页
- **400 处理**：显示服务端错误提示

### 导出

```javascript
import { http } from '@/utils/http.js'
```

---

## 业务 API 模块

所有 API 模块位于 `api/` 目录，每个模块导出默认对象，包含该业务的所有接口方法。

### 通用接口模式

大多数业务模块遵循以下接口模式（以 constructionLog.js 为例）：

| 方法 | HTTP | 端点 | 说明 |
|------|------|------|------|
| `getTableList(params)` | GET | `/api/{resource}/` | 分页列表 |
| `detail(id, params)` | GET | `/api/{resource}/{id}/` | 详情 |
| `post(data)` | POST | `/api/{resource}/` | 新增 |
| `delet(id)` | DELETE | `/api/{resource}/{id}/` | 删除 |
| `update(id, data)` | PATCH | `/api/{resource}/{id}/` | 更新 |
| `approve(id, data)` | POST | `/api/{resource}/{id}/approve/` | 审批 |
| `approveLog(id)` | GET | `/api/{resource}/{id}/approve_records/` | 审批记录 |
| `batchExport(params)` | GET | `/api/{resource}/batch_export_images/` | 批量导出图片 |

### 特殊 API 模块

#### project.js — 项目管理

```javascript
// 核心 CRUD
getTableList(params)      // GET /api/projects/
detail(id, params)        // GET /api/projects/{id}/
post(data)                // POST /api/projects/
delet(id)                 // DELETE /api/projects/{id}/
update(id, data)          // PATCH /api/projects/{id}/
importData(data)          // POST /api/projects/import_data/

// 关联单位查询
orgList(params)           // GET /api/orgs/
constructionList(params)  // GET /api/project_construction_units/get_all/
supervisionList(params)   // GET /api/project_supervision_units/get_all/
designList(params)        // GET /api/project_design_units/get_all/

// 关联日志查询
constructionLog(params)   // GET /api/construction_logs/get_all/
supervisionLog(params)    // GET /api/supervision_logs/get_all/
supervisionMonthLog(params) // GET /api/supervision_monthly_logs/get_all/
sideLog(params)           // GET /api/side_stations/get_all/
hidLog(params)            // GET /api/hidden_projects/get_all/
materialLog(params)       // GET /api/material_check/get_all/
```

#### contractManagement.js — 合同管理

```javascript
// 标准 CRUD + 特殊操作
abandoned(id, data)       // POST /api/contracts/{id}/to_abandoned/  (废止)
change(id, data)          // POST /api/contracts/{id}/to_change/    (合同变更)
```

#### alterationAndVisa.js — 变更签证（最复杂）

```javascript
// 标准 CRUD + 审批
getAllTableList(params)          // GET /api/contract_change_records/get_all/
getAllPassedList(params)         // GET /api/contract_change_records/get_all_pass_data/
contractDetail(id, params)       // GET /api/contracts/{id}/

// 金额相关
getProjectChangeMoneyList(params) // GET .../get_project_contract_change_money/
getTotalMoney(params)             // GET .../get_project_change_money/
getLastFee(params)                // GET .../get_last_change_fee/

// 会签部门
getProvinceDept(params)          // GET /api/orgs/get_province_dept/
getCityDept(params)              // GET /api/orgs/get_city_dept/

// 单位查询
getSupervisionUnit(params)       // GET /api/project_supervision_units/get_all/
getDesignUnit(params)            // GET /api/project_design_units/get_all/
getConstructionUnit(params)      // GET /api/project_construction_units/get_all/

// 特殊操作
changeAvoid(id, data)            // POST .../change_avoid/  (废止申请)
getChangeType(data)              // POST .../get_change_type/ (变更类型判定)
```

#### common.js — 通用接口

```javascript
getBaseData(data_type)        // GET /api/const_data/    (基础数据字典)
getContractCategories()       // GET /api/contract_categories/  (合同分类)
getCompanies()                // GET /api/orgs/get_city_company/ (建设单位)
getCommonList(url, data)      // 通用 GET 列表
getCommonDetail(url, id)      // 通用 GET 详情
```

#### message.js — 消息中心

```javascript
notices(params)               // GET /api/notices/          (消息列表)
unreadCount(params)           // GET /api/notices/get_unread_count/ (未读数)
read(id)                      // POST /api/notices/{id}/change_read/ (标记已读)

// 待审核数量统计
startReport()                 // GET /api/org_start_reports/my_appvoving/
completionReportReview()      // GET /api/org_end_reports/my_appvoving/
campForRecordReview()         // GET /api/investment_records/my_appvoving/
```

## 获取所有待审核列表

消息模块还包含一些使用 `axios` （而非 `http`）的接口（施工单位开工/竣工报告），注意这可能是个遗留问题：

```javascript
constructionCompanyLog()      // 使用 axios（非 luch-request）
constructionCompleteReport()  // 使用 axios
```
