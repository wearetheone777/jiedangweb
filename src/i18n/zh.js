export default {
  nav: {
    home: '首页',
    about: '关于',
    services: '服务',
    works: '作品',
    contact: '联系',
  },

  hero: {
    tagline: '自由开发者',
    title: '接单开发',
    subtitle: '专业编程服务',
    description: '高质量网站开发 · 毕业设计辅导 · 小程序定制 · 程序代写',
    ctaContact: '联系我',
    ctaWorks: '查看作品',
    scroll: '下滑浏览',
  },

  about: {
    num: '01.',
    heading: '关于',
    skills: '技能',
    statsYears: '年开发经验',
    statsProjects: '完成项目',
    statsClients: '满意客户',
    name: '开发者',
    title: '全栈开发工程师',
    desc: '多年软件开发经验，擅长 Web 全栈开发、跨平台移动端开发、企业级管理系统开发。独立完成多个商业项目，包括知识产权资产管理系统、装备价格数据管理系统、工程建设管理系统等。技术栈覆盖 Vue/React 前端生态、Node.js/Python 后端、UniApp 跨平台开发等领域，提供从需求分析到部署上线的全流程服务。',
    skillsList: ['Vue 2/3', 'React 18', 'UniApp', 'UmiJS', 'Ant Design 5', 'Element Plus', 'TypeScript', 'Pinia/Vuex', 'AntV G2/G6', 'ECharts', 'Axios', 'Tailwind CSS'],
  },

  services: {
    num: '02.',
    heading: '服务',
    items: [
      {
        title: '网站开发',
        desc: '企业官网、管理后台、大数据可视化平台等 Web 应用开发，响应式设计，兼容多端。',
      },
      {
        title: '毕业设计辅导',
        desc: '计算机相关专业毕设辅导，含项目开发、论文指导、答辩准备，全程协助。',
      },
      {
        title: '小程序 & App 开发',
        desc: '微信小程序、跨平台 App（UniApp）定制开发，从设计到上线一站式服务。',
      },
      {
        title: '程序定制',
        desc: '爬虫脚本、自动化工具、数据处理、API 接口开发等各类程序定制。',
      },
    ],
  },

  portfolio: {
    num: '03.',
    heading: '作品',
    all: '全部',
    viewDetail: '查看详情',
    backToList: '返回作品列表',
    techStack: '技术栈',
    features: '功能模块',
    architecture: '架构信息',
    screenshots: '页面预览',
    // 首页卡片使用精简描述，点击跳转详情页
    items: [
      {
        category: '网站开发',
        title: '知识产权资产管理系统',
        desc: '企业级 IP 资产管理前端应用，覆盖专利/软著维护、代理机构管理、预警预告、统计分析等模块。',
        tags: ['UmiJS', 'React 18', 'Ant Design 5', 'TypeScript', 'AntV G2/G6'],
      },
      {
        category: '网站开发',
        title: '装备价格数据管理系统',
        desc: '专业化装备价格管理平台，涵盖装备分类管理、数据参数维护、项目报价/审价/评审价全流程管理，以及项目检索与数据分析功能。',
        tags: ['React 18', 'UmiJS', 'Ant Design 5', 'TypeScript', 'ECharts'],
      },
      {
        category: '小程序/App',
        title: '锐眼洞见',
        desc: '移动端 AI 安全检测应用，支持文本/图片/音频/视频四种检测，基于 UniApp 跨平台框架多端运行。',
        tags: ['UniApp', 'Vue 2', 'uView-UI', 'Vuex', 'ECharts'],
      },
      {
        category: '小程序/App',
        title: '工程建设项目管理系统',
        desc: '工程建设移动端全生命周期管理工具，覆盖进度/安全/质量/合同等七大业务领域，支持多角色协同。',
        tags: ['UniApp', 'Vue 2', 'uni-ui', 'JWT', 'ECharts', 'WebSocket'],
      },
    ],
  },

  contact: {
    num: '04.',
    heading: '联系',
    wechat: '微信',
    email: '邮箱',
    qq: 'QQ',
    hint: '工作日 24 小时内回复，欢迎咨询项目详情和报价',
    wechatId: 'your_wechat_id',
    emailAddr: 'your_email@example.com',
    qqId: 'your_qq_number',
  },

  footer: {
    copyright: '© 2026 接单开发. All rights reserved.',
  },
}
