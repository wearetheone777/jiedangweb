<template>
  <!-- 知识产权资产管理系统 - 文档与图表 -->
  <svg v-if="type === 'ip-manage'" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ip-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a1628"/>
        <stop offset="50%" stop-color="#0d2137"/>
        <stop offset="100%" stop-color="#0c1929"/>
      </linearGradient>
      <linearGradient id="ip-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#14b8a6"/>
        <stop offset="100%" stop-color="#0891b2"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#ip-bg)"/>
    <!-- 装饰圆环 -->
    <circle cx="400" cy="225" r="180" fill="none" stroke="#14b8a6" stroke-width="0.5" opacity="0.06"/>
    <circle cx="400" cy="225" r="140" fill="none" stroke="#14b8a6" stroke-width="0.5" opacity="0.08"/>
    <!-- 背景网格点 -->
    <g fill="#14b8a6" opacity="0.04">
      <circle cx="100" cy="80" r="2"/><circle cx="200" cy="120" r="2"/>
      <circle cx="600" cy="100" r="2"/><circle cx="700" cy="160" r="2"/>
      <circle cx="150" cy="350" r="2"/><circle cx="650" cy="380" r="2"/>
      <circle cx="300" cy="60" r="2"/><circle cx="500" cy="400" r="2"/>
      <circle cx="80" cy="220" r="1.5"/><circle cx="720" cy="250" r="1.5"/>
    </g>
    <!-- 主文档图标 -->
    <rect x="290" y="100" width="180" height="240" rx="12" fill="none" stroke="url(#ip-accent)" stroke-width="2" opacity="0.4"/>
    <rect x="298" y="108" width="164" height="224" rx="8" fill="#14b8a6" opacity="0.06"/>
    <!-- 文档标题线 -->
    <rect x="320" y="130" width="60" height="6" rx="3" fill="url(#ip-accent)" opacity="0.6"/>
    <rect x="390" y="132" width="40" height="3" rx="1.5" fill="#14b8a6" opacity="0.25"/>
    <!-- 文档正文线 -->
    <line x1="320" y1="160" x2="440" y2="160" stroke="#14b8a6" stroke-width="1.5" opacity="0.15"/>
    <line x1="320" y1="175" x2="440" y2="175" stroke="#14b8a6" stroke-width="1.5" opacity="0.15"/>
    <line x1="320" y1="190" x2="420" y2="190" stroke="#14b8a6" stroke-width="1.5" opacity="0.15"/>
    <line x1="320" y1="205" x2="440" y2="205" stroke="#14b8a6" stroke-width="1.5" opacity="0.15"/>
    <line x1="320" y1="220" x2="400" y2="220" stroke="#14b8a6" stroke-width="1.5" opacity="0.15"/>
    <!-- 文档底部图表 -->
    <rect x="320" y="250" width="28" height="60" rx="3" fill="url(#ip-accent)" opacity="0.35"/>
    <rect x="356" y="230" width="28" height="80" rx="3" fill="url(#ip-accent)" opacity="0.5"/>
    <rect x="392" y="260" width="28" height="50" rx="3" fill="url(#ip-accent)" opacity="0.35"/>
    <rect x="428" y="240" width="28" height="70" rx="3" fill="url(#ip-accent)" opacity="0.45"/>
    <!-- 关系图谱节点 -->
    <circle cx="530" cy="180" r="6" fill="none" stroke="#14b8a6" stroke-width="1.5" opacity="0.5"/>
    <circle cx="580" cy="220" r="5" fill="none" stroke="#0891b2" stroke-width="1.5" opacity="0.4"/>
    <circle cx="540" cy="260" r="4" fill="none" stroke="#14b8a6" stroke-width="1.5" opacity="0.35"/>
    <circle cx="580" cy="300" r="5" fill="none" stroke="#0891b2" stroke-width="1.5" opacity="0.3"/>
    <!-- 图谱连线 -->
    <line x1="530" y1="180" x2="580" y2="220" stroke="#14b8a6" stroke-width="1" opacity="0.25"/>
    <line x1="580" y1="220" x2="540" y2="260" stroke="#14b8a6" stroke-width="1" opacity="0.2"/>
    <line x1="540" y1="260" x2="580" y2="300" stroke="#0891b2" stroke-width="1" opacity="0.2"/>
    <line x1="530" y1="180" x2="540" y2="260" stroke="#14b8a6" stroke-width="1" opacity="0.15"/>
    <!-- 标签 -->
    <rect x="320" y="310" width="120" height="22" rx="11" fill="none" stroke="#14b8a6" stroke-width="1" opacity="0.2"/>
    <text x="380" y="324" text-anchor="middle" fill="#14b8a6" font-size="10" font-family="monospace" opacity="0.5">IP · 专利 · 软著</text>
    <!-- 装饰角标 -->
    <rect x="250" y="80" width="8" height="8" rx="2" fill="#14b8a6" opacity="0.15"/>
    <rect x="542" y="80" width="8" height="8" rx="2" fill="#0891b2" opacity="0.15"/>
    <rect x="250" y="362" width="8" height="8" rx="2" fill="#0891b2" opacity="0.15"/>
    <rect x="542" y="362" width="8" height="8" rx="2" fill="#14b8a6" opacity="0.15"/>
  </svg>

  <!-- 装备价格数据管理系统 - 工业数据 -->
  <svg v-else-if="type === 'equip-price'" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ep-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a0f0a"/>
        <stop offset="50%" stop-color="#2d1a0a"/>
        <stop offset="100%" stop-color="#1a0f0a"/>
      </linearGradient>
      <linearGradient id="ep-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#ep-bg)"/>
    <!-- 装饰圆环 -->
    <circle cx="400" cy="225" r="180" fill="none" stroke="#f59e0b" stroke-width="0.5" opacity="0.06"/>
    <circle cx="400" cy="225" r="130" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.08"/>
    <!-- 背景网格 -->
    <g stroke="#f59e0b" stroke-width="0.5" opacity="0.04">
      <line x1="100" y1="100" x2="700" y2="100"/><line x1="100" y1="350" x2="700" y2="350"/>
      <line x1="200" y1="50" x2="200" y2="400"/><line x1="600" y1="50" x2="600" y2="400"/>
    </g>
    <!-- 齿轮图标 -->
    <g transform="translate(280, 225)" fill="none" stroke="url(#ep-accent)" stroke-width="2" opacity="0.35">
      <circle cx="0" cy="0" r="45"/>
      <circle cx="0" cy="0" r="35"/>
      <circle cx="0" cy="0" r="15" fill="#f59e0b" fill-opacity="0.1"/>
      <!-- 齿轮齿 -->
      <rect x="-6" y="-52" width="12" height="14" rx="2"/>
      <rect x="-6" y="38" width="12" height="14" rx="2"/>
      <rect x="-52" y="-6" width="14" height="12" rx="2"/>
      <rect x="38" y="-6" width="14" height="12" rx="2"/>
      <rect x="26" y="-44" width="12" height="14" rx="2" transform="rotate(45 32 -37)"/>
      <rect x="-38" y="-44" width="12" height="14" rx="2" transform="rotate(-45 -32 -37)"/>
      <rect x="26" y="30" width="12" height="14" rx="2" transform="rotate(-45 32 37)"/>
      <rect x="-38" y="30" width="12" height="14" rx="2" transform="rotate(45 -32 37)"/>
    </g>
    <!-- 数据面板 -->
    <g transform="translate(460, 140)">
      <rect x="0" y="0" width="140" height="60" rx="6" fill="#f59e0b" opacity="0.06" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.15"/>
      <rect x="12" y="12" width="40" height="36" rx="4" fill="#f59e0b" opacity="0.15"/>
      <text x="32" y="35" text-anchor="middle" fill="#f59e0b" font-size="14" font-family="monospace" opacity="0.6">¥</text>
      <rect x="60" y="14" width="30" height="4" rx="2" fill="#f59e0b" opacity="0.3"/>
      <rect x="60" y="24" width="50" height="4" rx="2" fill="#f59e0b" opacity="0.15"/>
      <rect x="60" y="34" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.2"/>
    </g>
    <g transform="translate(460, 215)">
      <rect x="0" y="0" width="140" height="60" rx="6" fill="#f59e0b" opacity="0.04" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.12"/>
      <rect x="12" y="12" width="40" height="36" rx="4" fill="#f59e0b" opacity="0.12"/>
      <text x="32" y="35" text-anchor="middle" fill="#f59e0b" font-size="14" font-family="monospace" opacity="0.6">∑</text>
      <rect x="60" y="14" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.3"/>
      <rect x="60" y="24" width="25" height="4" rx="2" fill="#f59e0b" opacity="0.15"/>
      <rect x="60" y="34" width="35" height="4" rx="2" fill="#f59e0b" opacity="0.2"/>
    </g>
    <g transform="translate(460, 290)">
      <rect x="0" y="0" width="140" height="60" rx="6" fill="#f59e0b" opacity="0.06" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.15"/>
      <rect x="12" y="12" width="40" height="36" rx="4" fill="#f59e0b" opacity="0.15"/>
      <text x="32" y="35" text-anchor="middle" fill="#f59e0b" font-size="12" font-family="monospace" opacity="0.6">01</text>
      <rect x="60" y="14" width="35" height="4" rx="2" fill="#f59e0b" opacity="0.3"/>
      <rect x="60" y="24" width="45" height="4" rx="2" fill="#f59e0b" opacity="0.15"/>
      <rect x="60" y="34" width="30" height="4" rx="2" fill="#f59e0b" opacity="0.2"/>
    </g>
    <!-- 价格柱状图 -->
    <rect x="190" y="340" width="16" height="30" rx="2" fill="url(#ep-accent)" opacity="0.2"/>
    <rect x="214" y="320" width="16" height="50" rx="2" fill="url(#ep-accent)" opacity="0.3"/>
    <rect x="238" y="330" width="16" height="40" rx="2" fill="url(#ep-accent)" opacity="0.25"/>
    <rect x="262" y="310" width="16" height="60" rx="2" fill="url(#ep-accent)" opacity="0.35"/>
    <text x="228" y="385" text-anchor="middle" fill="#f59e0b" font-size="9" font-family="monospace" opacity="0.3">价格走势</text>
  </svg>

  <!--- AI 安全检测 -->
  <svg v-else-if="type === 'ruiyan'" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ry-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1a0a1a"/>
        <stop offset="50%" stop-color="#2d0a2d"/>
        <stop offset="100%" stop-color="#1a0a1a"/>
      </linearGradient>
      <linearGradient id="ry-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#d946ef"/>
        <stop offset="100%" stop-color="#a21caf"/>
      </linearGradient>
      <linearGradient id="ry-scan" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d946ef" stop-opacity="0.3"/>
        <stop offset="50%" stop-color="#d946ef" stop-opacity="0.05"/>
        <stop offset="100%" stop-color="#d946ef" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#ry-bg)"/>
    <!-- 扫描线背景 -->
    <g stroke="#d946ef" stroke-width="0.5" opacity="0.03">
      <line x1="200" y1="80" x2="600" y2="80"/>
      <line x1="200" y1="120" x2="600" y2="120"/>
      <line x1="200" y1="160" x2="600" y2="160"/>
      <line x1="200" y1="200" x2="600" y2="200"/>
      <line x1="200" y1="240" x2="600" y2="240"/>
      <line x1="200" y1="280" x2="600" y2="280"/>
      <line x1="200" y1="320" x2="600" y2="320"/>
      <line x1="200" y1="360" x2="600" y2="360"/>
    </g>
    <!-- 装饰圆弧 -->
    <circle cx="400" cy="225" r="170" fill="none" stroke="#d946ef" stroke-width="0.5" opacity="0.06"/>
    <circle cx="400" cy="225" r="120" fill="none" stroke="#d946ef" stroke-width="1" opacity="0.08"/>
    <!-- 盾牌主体 -->
    <g transform="translate(400, 225)">
      <!-- 盾牌外形 -->
      <path d="M0 -60 L50 -40 L50 10 Q50 50 0 70 Q-50 50 -50 10 L-50 -40 Z"
            fill="none" stroke="url(#ry-accent)" stroke-width="2" opacity="0.35"/>
      <path d="M0 -40 L35 -25 L35 10 Q35 40 0 55 Q-35 40 -35 10 L-35 -25 Z"
            fill="#d946ef" opacity="0.06"/>
      <!-- 盾牌内锁孔 -->
      <circle cx="0" cy="-5" r="12" fill="none" stroke="#d946ef" stroke-width="1.5" opacity="0.4"/>
      <rect x="-4" y="-2" width="8" height="15" rx="2" fill="#d946ef" opacity="0.3"/>
      <!-- 盾牌上对勾 -->
      <polyline points="-15,5 -5,15 20,-10" fill="none" stroke="#d946ef" stroke-width="2.5" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <!-- AI 神经节点 -->
    <circle cx="530" cy="160" r="5" fill="none" stroke="#d946ef" stroke-width="1.5" opacity="0.5"/>
    <circle cx="570" cy="190" r="4" fill="none" stroke="#c026d3" stroke-width="1.5" opacity="0.4"/>
    <circle cx="550" cy="230" r="3.5" fill="none" stroke="#d946ef" stroke-width="1.5" opacity="0.35"/>
    <circle cx="575" cy="265" r="4.5" fill="none" stroke="#c026d3" stroke-width="1.5" opacity="0.3"/>
    <line x1="530" y1="160" x2="570" y2="190" stroke="#d946ef" stroke-width="1" opacity="0.25"/>
    <line x1="570" y1="190" x2="550" y2="230" stroke="#d946ef" stroke-width="1" opacity="0.2"/>
    <line x1="550" y1="230" x2="575" y2="265" stroke="#c026d3" stroke-width="1" opacity="0.2"/>
    <line x1="570" y1="190" x2="575" y2="265" stroke="#d946ef" stroke-width="1" opacity="0.15"/>
    <!-- 摄像头元素 -->
    <g transform="translate(250, 180)" fill="none" stroke="#d946ef" stroke-width="1.5" opacity="0.25">
      <circle cx="0" cy="0" r="25"/>
      <circle cx="0" cy="0" r="18"/>
      <circle cx="0" cy="0" r="8"/>
      <circle cx="6" cy="-6" r="2" fill="#d946ef" opacity="0.3"/>
    </g>
    <!-- 扫描条 (动态感) -->
    <g transform="translate(250, 250)" stroke="#d946ef" stroke-width="1" opacity="0.15">
      <rect x="0" y="0" width="200" height="2" rx="1" fill="#d946ef" opacity="0.2"/>
      <rect x="20" y="12" width="160" height="1" rx="0.5" fill="none"/>
      <rect x="40" y="24" width="120" height="2" rx="1" fill="#d946ef" opacity="0.15"/>
      <rect x="10" y="36" width="180" height="1" rx="0.5" fill="none"/>
      <rect x="50" y="48" width="100" height="2" rx="1" fill="#d946ef" opacity="0.1"/>
    </g>
    <!-- 检测标签 -->
    <rect x="320" y="370" width="160" height="22" rx="11" fill="none" stroke="#d946ef" stroke-width="1" opacity="0.2"/>
    <text x="400" y="384" text-anchor="middle" fill="#d946ef" font-size="10" font-family="monospace" opacity="0.5">AI · 文本 · 图像 · 音频</text>
  </svg>

  <!-- 工程建设项目管理系统 - 建筑与施工 -->
  <svg v-else-if="type === 'xmgl'" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="xm-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a1a14"/>
        <stop offset="50%" stop-color="#0d2d1f"/>
        <stop offset="100%" stop-color="#0a1a14"/>
      </linearGradient>
      <linearGradient id="xm-accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#xm-bg)"/>
    <!-- 蓝图网格 -->
    <g stroke="#10b981" stroke-width="0.5" opacity="0.05">
      <line x1="100" y1="80" x2="700" y2="80"/>
      <line x1="100" y1="130" x2="700" y2="130"/>
      <line x1="100" y1="180" x2="700" y2="180"/>
      <line x1="100" y1="230" x2="700" y2="230"/>
      <line x1="100" y1="280" x2="700" y2="280"/>
      <line x1="100" y1="330" x2="700" y2="330"/>
      <line x1="100" y1="380" x2="700" y2="380"/>
      <line x1="200" y1="50" x2="200" y2="400"/>
      <line x1="300" y1="50" x2="300" y2="400"/>
      <line x1="400" y1="50" x2="400" y2="400"/>
      <line x1="500" y1="50" x2="500" y2="400"/>
      <line x1="600" y1="50" x2="600" y2="400"/>
    </g>
    <!-- 装饰圆环 -->
    <circle cx="400" cy="225" r="160" fill="none" stroke="#10b981" stroke-width="0.5" opacity="0.06"/>
    <circle cx="400" cy="225" r="110" fill="none" stroke="#10b981" stroke-width="1" opacity="0.08"/>
    <!-- 建筑主体 -->
    <g transform="translate(300, 110)">
      <!-- 左侧建筑 (矮) -->
      <rect x="0" y="80" width="80" height="160" rx="2" fill="none" stroke="#10b981" stroke-width="2" opacity="0.25"/>
      <rect x="10" y="90" width="20" height="25" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="40" y="90" width="20" height="25" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="10" y="125" width="20" height="25" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="40" y="125" width="20" height="25" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="10" y="160" width="20" height="25" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="40" y="160" width="20" height="25" rx="1" fill="#10b981" opacity="0.08"/>
      <!-- 中间主楼 -->
      <rect x="90" y="20" width="100" height="220" rx="2" fill="none" stroke="url(#xm-accent)" stroke-width="2" opacity="0.35"/>
      <rect x="100" y="30" width="25" height="30" rx="1" fill="#10b981" opacity="0.12"/>
      <rect x="135" y="30" width="25" height="30" rx="1" fill="#10b981" opacity="0.12"/>
      <rect x="170" y="30" width="10" height="30" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="100" y="70" width="25" height="30" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="135" y="70" width="25" height="30" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="100" y="110" width="25" height="30" rx="1" fill="#10b981" opacity="0.12"/>
      <rect x="135" y="110" width="25" height="30" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="100" y="150" width="25" height="30" rx="1" fill="#10b981" opacity="0.1"/>
      <rect x="135" y="150" width="25" height="30" rx="1" fill="#10b981" opacity="0.12"/>
      <rect x="100" y="190" width="80" height="20" rx="1" fill="#10b981" opacity="0.08"/>
      <!-- 右侧建筑 -->
      <rect x="210" y="110" width="70" height="130" rx="2" fill="none" stroke="#10b981" stroke-width="2" opacity="0.2"/>
      <rect x="218" y="120" width="18" height="22" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="244" y="120" width="18" height="22" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="218" y="152" width="18" height="22" rx="1" fill="#10b981" opacity="0.08"/>
      <rect x="244" y="152" width="18" height="22" rx="1" fill="#10b981" opacity="0.08"/>
    </g>
    <!-- 塔吊 -->
    <g transform="translate(530, 80)" stroke="#10b981" stroke-width="2" opacity="0.3">
      <!-- 立柱 -->
      <line x1="0" y1="0" x2="0" y2="250" stroke-width="1.5"/>
      <!-- 吊臂 -->
      <line x1="-120" y1="10" x2="80" y2="10" stroke-width="2"/>
      <line x1="0" y1="0" x2="0" y2="10"/>
      <!-- 拉索 -->
      <line x1="-100" y1="10" x2="0" y2="0" stroke-width="0.8"/>
      <line x1="50" y1="10" x2="0" y2="0" stroke-width="0.8"/>
      <!-- 吊钩及绳索 -->
      <line x1="60" y1="10" x2="60" y2="50" stroke-width="1"/>
      <path d="M50,50 L70,50 L60,55 Z" fill="#10b981" opacity="0.2"/>
    </g>
    <!-- 标签 -->
    <rect x="300" y="370" width="200" height="22" rx="11" fill="none" stroke="#10b981" stroke-width="1" opacity="0.2"/>
    <text x="400" y="384" text-anchor="middle" fill="#10b981" font-size="10" font-family="monospace" opacity="0.5">进度 · 安全 · 质量 · 合同</text>
    <!-- 装饰角标 -->
    <rect x="230" y="60" width="8" height="8" rx="2" fill="#10b981" opacity="0.12"/>
    <rect x="562" y="60" width="8" height="8" rx="2" fill="#059669" opacity="0.12"/>
  </svg>
</template>

<script setup>
defineProps({ type: { type: String, required: true } })
</script>
