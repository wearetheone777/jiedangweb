/**
 * 网站可配置数据
 * 在这里修改个人信息、服务项目、作品案例等
 */
export const siteConfig = {
  // 网站标题
  title: '接单开发',
  subtitle: '专业编程服务',

  // 个人信息
  about: {
    name: '开发者',
    title: '全栈开发工程师',
    description: '多年软件开发经验，擅长Web全栈开发、小程序开发、桌面应用开发。提供高质量的编程服务，包括网站建设、毕业设计辅导、程序定制等。',
    skills: ['Vue.js', 'React', 'Node.js', 'Python', 'Java', 'Spring Boot', 'MySQL', '小程序开发'],
  },

  // 服务项目
  services: [
    {
      id: 1,
      title: '网站开发',
      icon: 'globe',
      description: '企业官网、个人博客、管理后台等 Web 应用开发，响应式设计，兼容多端。',
    },
    {
      id: 2,
      title: '毕业设计辅导',
      icon: 'book',
      description: '计算机相关专业毕设辅导，含项目开发、论文指导、答辩准备，全程协助。',
    },
    {
      id: 3,
      title: '小程序开发',
      icon: 'smartphone',
      description: '微信小程序、支付宝小程序定制开发，从设计到上线一站式服务。',
    },
    {
      id: 4,
      title: '程序定制',
      icon: 'code',
      description: '爬虫脚本、自动化工具、数据处理、API 接口开发等各类程序定制。',
    },
  ],

  // 作品案例
  projects: [
    {
      id: 1,
      title: '示例项目一',
      category: '网站开发',
      description: '这是一个展示项目，请替换为你的实际项目。',
      tags: ['Vue 3', 'Node.js', 'MySQL'],
      image: null,
    },
    {
      id: 2,
      title: '示例项目二',
      category: '小程序',
      description: '这是一个展示项目，请替换为你的实际项目。',
      tags: ['微信小程序', '云开发'],
      image: null,
    },
    {
      id: 3,
      title: '示例项目三',
      category: '毕设辅导',
      description: '这是一个展示项目，请替换为你的实际项目。',
      tags: ['Spring Boot', 'Vue', 'MySQL'],
      image: null,
    },
    {
      id: 4,
      title: '示例项目四',
      category: '程序定制',
      description: '这是一个展示项目，请替换为你的实际项目。',
      tags: ['Python', '自动化'],
      image: null,
    },
  ],

  // 联系方式
  contact: {
    wechat: 'your_wechat_id',
    email: 'your_email@example.com',
    qq: 'your_qq_number',
    github: 'https://github.com/your_username',
  },

  // 页脚
  footer: {
    copyright: '© 2026 接单开发. All rights reserved.',
  },
}
