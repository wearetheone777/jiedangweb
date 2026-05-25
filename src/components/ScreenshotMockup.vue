<template>
  <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient :id="`bg-${pid}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" :stop-color="bg1"/>
        <stop offset="100%" :stop-color="bg2"/>
      </linearGradient>
      <linearGradient :id="`accent-${pid}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" :stop-color="accent1"/>
        <stop offset="100%" :stop-color="accent2"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" :fill="`url(#bg-${pid})`"/>

    <!-- ===== 仪表盘布局 ===== -->
    <template v-if="type === 'dashboard'">
      <!-- 侧边栏 -->
      <rect x="0" y="0" width="140" height="400" :fill="accent1" opacity="0.06"/>
      <rect x="20" y="20" width="40" height="10" rx="3" :fill="accent1" opacity="0.2"/>
      <rect x="20" y="50" width="100" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="20" y="66" width="80" height="6" rx="3" :fill="accent1" opacity="0.07"/>
      <rect x="20" y="82" width="90" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="20" y="98" width="70" height="6" rx="3" :fill="accent1" opacity="0.07"/>
      <rect x="20" y="350" width="100" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="20" y="366" width="80" height="6" rx="3" :fill="accent1" opacity="0.05"/>
      <!-- 顶部栏 -->
      <rect x="140" y="0" width="460" height="50" :fill="accent1" opacity="0.04"/>
      <rect x="160" y="16" width="80" height="8" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="500" y="14" width="30" height="8" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="540" y="14" width="30" height="8" rx="3" :fill="accent1" opacity="0.08"/>
      <circle cx="560" cy="39" r="6" :fill="accent1" opacity="0.12"/>
      <!-- 统计卡片 -->
      <rect x="170" y="70" width="120" height="70" rx="6" :fill="accent1" opacity="0.08" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.15"/>
      <rect x="185" y="82" width="40" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="185" y="95" width="60" height="12" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="305" y="70" width="120" height="70" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="320" y="82" width="40" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <rect x="320" y="95" width="60" height="12" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="440" y="70" width="120" height="70" rx="6" :fill="accent1" opacity="0.08" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.15"/>
      <rect x="455" y="82" width="40" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="455" y="95" width="60" height="12" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 图表区域 -->
      <rect x="170" y="160" width="250" height="150" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="190" y="240" width="22" height="50" rx="3" :fill="`url(#accent-${pid})`" opacity="0.3"/>
      <rect x="222" y="220" width="22" height="70" rx="3" :fill="`url(#accent-${pid})`" opacity="0.4"/>
      <rect x="254" y="250" width="22" height="40" rx="3" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="286" y="210" width="22" height="80" rx="3" :fill="`url(#accent-${pid})`" opacity="0.45"/>
      <rect x="318" y="235" width="22" height="55" rx="3" :fill="`url(#accent-${pid})`" opacity="0.3"/>
      <rect x="350" y="260" width="22" height="30" rx="3" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="382" y="225" width="22" height="65" rx="3" :fill="`url(#accent-${pid})`" opacity="0.35"/>
      <rect x="190" y="178" width="40" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <rect x="190" y="300" width="220" height="1" :fill="accent1" opacity="0.08"/>
      <!-- 右侧小面板 -->
      <rect x="440" y="160" width="130" height="70" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="455" y="172" width="30" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <rect x="455" y="185" width="100" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <rect x="455" y="195" width="80" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <rect x="440" y="245" width="130" height="65" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <!-- 底部表格 -->
      <rect x="170" y="330" width="400" height="1" :fill="accent1" opacity="0.08"/>
      <rect x="170" y="340" width="80" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="170" y="356" width="400" height="20" rx="3" :fill="accent1" opacity="0.03"/>
      <rect x="170" y="380" width="400" height="1" :fill="accent1" opacity="0.04"/>
    </template>

    <!-- ===== 表格列表布局 ===== -->
    <template v-else-if="type === 'table'">
      <!-- 顶部搜索栏 -->
      <rect x="20" y="20" width="560" height="40" rx="6" :fill="accent1" opacity="0.06"/>
      <rect x="36" y="30" width="120" height="8" rx="3" :fill="accent1" opacity="0.12"/>
      <rect x="170" y="30" width="100" height="8" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="420" y="28" width="60" height="24" rx="4" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <!-- 表头 -->
      <rect x="20" y="75" width="560" height="30" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="36" y="85" width="40" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="156" y="85" width="80" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="336" y="85" width="60" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="476" y="85" width="50" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <!-- 表格行1 -->
      <rect x="20" y="108" width="560" height="28" rx="2" :fill="accent1" opacity="0.03"/>
      <rect x="36" y="118" width="40" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="156" y="118" width="60" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="336" y="118" width="50" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="476" y="118" width="40" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="530" y="114" width="30" height="16" rx="3" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <!-- 分隔线 -->
      <line x1="20" y1="136" x2="580" y2="136" :stroke="accent1" stroke-width="0.5" opacity="0.06"/>
      <!-- 表格行2 -->
      <rect x="20" y="138" width="560" height="28" rx="2" :fill="accent1" opacity="0.02"/>
      <rect x="36" y="148" width="50" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="156" y="148" width="70" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="336" y="148" width="40" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="476" y="148" width="50" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="530" y="144" width="30" height="16" rx="3" :fill="`url(#accent-${pid})`" opacity="0.12"/>
      <line x1="20" y1="166" x2="580" y2="166" :stroke="accent1" stroke-width="0.5" opacity="0.06"/>
      <!-- 表格行3 -->
      <rect x="20" y="168" width="560" height="28" rx="2" :fill="accent1" opacity="0.03"/>
      <rect x="36" y="178" width="35" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="156" y="178" width="65" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="336" y="178" width="55" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="476" y="178" width="45" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="530" y="174" width="30" height="16" rx="3" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <line x1="20" y1="196" x2="580" y2="196" :stroke="accent1" stroke-width="0.5" opacity="0.06"/>
      <!-- 更多行... -->
      <rect x="20" y="198" width="560" height="28" rx="2" :fill="accent1" opacity="0.02"/>
      <rect x="20" y="228" width="560" height="28" rx="2" :fill="accent1" opacity="0.03"/>
      <rect x="20" y="258" width="560" height="28" rx="2" :fill="accent1" opacity="0.02"/>
      <rect x="20" y="288" width="560" height="28" rx="2" :fill="accent1" opacity="0.03"/>
      <!-- 分页 -->
      <rect x="240" y="340" width="120" height="24" rx="4" :fill="accent1" opacity="0.06"/>
      <rect x="260" y="350" width="20" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="290" y="350" width="8" height="6" rx="3" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="308" y="350" width="20" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="338" y="350" width="8" height="6" rx="3" :fill="accent1" opacity="0.08"/>
    </template>

    <!-- ===== 图表布局 ===== -->
    <template v-else-if="type === 'chart'">
      <!-- 统计概览 -->
      <rect x="20" y="20" width="170" height="80" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="36" y="32" width="30" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="36" y="45" width="60" height="14" rx="3" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="215" y="20" width="170" height="80" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="231" y="32" width="30" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="231" y="45" width="60" height="14" rx="3" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="410" y="20" width="170" height="80" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="426" y="32" width="30" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="426" y="45" width="60" height="14" rx="3" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <!-- 主图表 - 柱状图 -->
      <rect x="20" y="115" width="340" height="200" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="36" y="135" width="80" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <!-- 柱状图 -->
      <rect x="55" y="260" width="24" height="40" rx="2" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="95" y="230" width="24" height="70" rx="2" :fill="`url(#accent-${pid})`" opacity="0.35"/>
      <rect x="135" y="250" width="24" height="50" rx="2" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="175" y="200" width="24" height="100" rx="2" :fill="`url(#accent-${pid})`" opacity="0.45"/>
      <rect x="215" y="240" width="24" height="60" rx="2" :fill="`url(#accent-${pid})`" opacity="0.3"/>
      <rect x="255" y="215" width="24" height="85" rx="2" :fill="`url(#accent-${pid})`" opacity="0.4"/>
      <rect x="295" y="270" width="24" height="30" rx="2" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="300" y="295" width="40" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <!-- 饼图 -->
      <rect x="380" y="115" width="200" height="200" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="400" y="135" width="60" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <!-- 饼图弧 (简化) -->
      <circle cx="480" cy="225" r="55" :fill="accent1" opacity="0.05"/>
      <circle cx="480" cy="225" r="55" fill="none" :stroke="accent1" stroke-width="12" opacity="0.12" stroke-dasharray="120 225"/>
      <circle cx="480" cy="225" r="55" fill="none" :stroke="accent2" stroke-width="12" opacity="0.12" stroke-dasharray="80 265" stroke-dashoffset="-40"/>
      <circle cx="480" cy="225" r="55" fill="none" :stroke="accent1" stroke-width="12" opacity="0.08" stroke-dasharray="50 295" stroke-dashoffset="-140"/>
      <!-- 图例 -->
      <rect x="440" y="295" width="8" height="8" rx="2" :fill="accent1" opacity="0.25"/>
      <rect x="456" y="297" width="30" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <rect x="506" y="295" width="8" height="8" rx="2" :fill="accent2" opacity="0.25"/>
      <rect x="522" y="297" width="30" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <!-- 底部数据表 -->
      <rect x="20" y="330" width="560" height="1" :fill="accent1" opacity="0.06"/>
      <rect x="20" y="340" width="100" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="20" y="354" width="560" height="16" rx="3" :fill="accent1" opacity="0.03"/>
      <rect x="20" y="374" width="560" height="16" rx="3" :fill="accent1" opacity="0.02"/>
    </template>

    <!-- ===== 关系图谱布局 ===== -->
    <template v-else-if="type === 'graph'">
      <!-- 背景网格 -->
      <g :stroke="accent1" stroke-width="0.5" opacity="0.04">
        <line x1="100" y1="50" x2="500" y2="50"/><line x1="100" y1="100" x2="500" y2="100"/>
        <line x1="100" y1="150" x2="500" y2="150"/><line x1="100" y1="200" x2="500" y2="200"/>
        <line x1="100" y1="250" x2="500" y2="250"/><line x1="100" y1="300" x2="500" y2="300"/>
        <line x1="100" y1="350" x2="500" y2="350"/>
        <line x1="150" y1="20" x2="150" y2="380"/><line x1="250" y1="20" x2="250" y2="380"/>
        <line x1="350" y1="20" x2="350" y2="380"/><line x1="450" y1="20" x2="450" y2="380"/>
      </g>
      <!-- 中心节点 -->
      <circle cx="300" cy="200" r="30" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <circle cx="300" cy="200" r="20" :fill="accent1" opacity="0.1"/>
      <circle cx="300" cy="200" r="8" :fill="accent1" opacity="0.25"/>
      <!-- 周边节点及连线 -->
      <circle cx="180" cy="120" r="15" :fill="accent1" opacity="0.08"/>
      <circle cx="180" cy="120" r="6" :fill="accent1" opacity="0.2"/>
      <line x1="195" y1="128" x2="282" y2="192" :stroke="accent1" stroke-width="1" opacity="0.15"/>
      <circle cx="420" cy="100" r="12" :fill="accent1" opacity="0.08"/>
      <circle cx="420" cy="100" r="5" :fill="accent1" opacity="0.2"/>
      <line x1="408" y1="110" x2="316" y2="188" :stroke="accent1" stroke-width="1" opacity="0.15"/>
      <circle cx="160" cy="300" r="14" :fill="accent1" opacity="0.08"/>
      <circle cx="160" cy="300" r="5" :fill="accent1" opacity="0.2"/>
      <line x1="174" y1="290" x2="284" y2="215" :stroke="accent1" stroke-width="1" opacity="0.15"/>
      <circle cx="450" cy="280" r="16" :fill="accent1" opacity="0.08"/>
      <circle cx="450" cy="280" r="6" :fill="accent1" opacity="0.2"/>
      <line x1="434" y1="272" x2="314" y2="216" :stroke="accent1" stroke-width="1" opacity="0.15"/>
      <circle cx="420" cy="340" r="10" :fill="accent1" opacity="0.06"/>
      <line x1="410" y1="332" x2="314" y2="220" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <circle cx="200" cy="240" r="10" :fill="accent1" opacity="0.06"/>
      <line x1="210" y1="235" x2="290" y2="210" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <circle cx="380" cy="150" r="11" :fill="accent1" opacity="0.07"/>
      <line x1="369" y1="155" x2="310" y2="190" :stroke="accent1" stroke-width="1" opacity="0.12"/>
      <!-- 右上角图例 -->
      <rect x="480" y="20" width="100" height="60" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="492" y="30" width="8" height="8" rx="2" :fill="accent1" opacity="0.2"/>
      <rect x="506" y="32" width="40" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <rect x="492" y="46" width="8" height="8" rx="2" :fill="accent2" opacity="0.2"/>
      <rect x="506" y="48" width="40" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <rect x="492" y="62" width="8" height="8" rx="2" :fill="accent1" opacity="0.12"/>
      <rect x="506" y="64" width="40" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <!-- 说明文字 -->
      <rect x="200" y="360" width="200" height="20" rx="4" :fill="accent1" opacity="0.04"/>
      <text x="300" y="374" text-anchor="middle" :fill="accent1" font-size="10" font-family="monospace" opacity="0.3">人员关联关系图谱</text>
    </template>

    <!-- ===== 树形结构布局 ===== -->
    <template v-else-if="type === 'tree'">
      <!-- 顶层根节点 -->
      <rect x="230" y="30" width="140" height="36" rx="6" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <rect x="250" y="42" width="100" height="6" rx="3" :fill="accent1" opacity="0.2"/>
      <!-- 连线到子节点 -->
      <line x1="300" y1="66" x2="300" y2="86" :stroke="accent1" stroke-width="1" opacity="0.15"/>
      <line x1="180" y1="86" x2="420" y2="86" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <line x1="180" y1="86" x2="180" y2="106" :stroke="accent1" stroke-width="1" opacity="0.12"/>
      <line x1="300" y1="86" x2="300" y2="106" :stroke="accent1" stroke-width="1" opacity="0.12"/>
      <line x1="420" y1="86" x2="420" y2="106" :stroke="accent1" stroke-width="1" opacity="0.12"/>
      <!-- 子节点1 -->
      <rect x="110" y="106" width="140" height="36" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="130" y="118" width="100" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <line x1="180" y1="142" x2="180" y2="158" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <line x1="110" y1="158" x2="250" y2="158" :stroke="accent1" stroke-width="1" opacity="0.08"/>
      <line x1="110" y1="158" x2="110" y2="178" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <line x1="180" y1="158" x2="180" y2="178" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <line x1="250" y1="158" x2="250" y2="178" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <!-- 子子节点 -->
      <rect x="60" y="178" width="100" height="30" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="75" y="188" width="70" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <rect x="155" y="178" width="50" height="30" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="165" y="188" width="30" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <rect x="220" y="178" width="70" height="30" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="230" y="188" width="50" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <!-- 子节点2 -->
      <rect x="230" y="106" width="140" height="36" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="250" y="118" width="100" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <line x1="300" y1="142" x2="300" y2="178" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <!-- 子子节点 -->
      <rect x="250" y="178" width="100" height="30" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="265" y="188" width="70" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <!-- 子节点3 -->
      <rect x="350" y="106" width="140" height="36" rx="6" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="370" y="118" width="100" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <line x1="420" y1="142" x2="420" y2="178" :stroke="accent1" stroke-width="1" opacity="0.1"/>
      <rect x="370" y="178" width="100" height="30" rx="4" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="385" y="188" width="70" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <!-- 底部操作栏 -->
      <rect x="180" y="250" width="240" height="36" rx="6" :fill="accent1" opacity="0.05"/>
      <rect x="200" y="262" width="60" height="8" rx="3" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="275" y="262" width="100" height="8" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 说明 -->
      <rect x="200" y="340" width="200" height="20" rx="4" :fill="accent1" opacity="0.04"/>
      <text x="300" y="354" text-anchor="middle" :fill="accent1" font-size="10" font-family="monospace" opacity="0.3">树形层级分类管理</text>
    </template>

    <!-- ===== 流程表单布局 ===== -->
    <template v-else-if="type === 'form'">
      <!-- 步骤指示器 -->
      <rect x="100" y="20" width="30" height="30" rx="15" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <text x="115" y="40" text-anchor="middle" :fill="accent1" font-size="14" font-family="monospace" opacity="0.5">1</text>
      <line x1="145" y1="35" x2="195" y2="35" :stroke="accent1" stroke-width="1.5" opacity="0.12"/>
      <circle cx="215" cy="35" r="12" :fill="accent1" opacity="0.08"/>
      <text x="215" y="40" text-anchor="middle" :fill="accent1" font-size="12" font-family="monospace" opacity="0.35">2</text>
      <line x1="240" y1="35" x2="290" y2="35" :stroke="accent1" stroke-width="1.5" opacity="0.08"/>
      <circle cx="310" cy="35" r="12" :fill="accent1" opacity="0.05"/>
      <text x="310" y="40" text-anchor="middle" :fill="accent1" font-size="12" font-family="monospace" opacity="0.2">3</text>
      <!-- 表单面板 -->
      <rect x="50" y="75" width="500" height="260" rx="8" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <!-- 表单项1 -->
      <rect x="80" y="95" width="60" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="80" y="108" width="220" height="30" rx="4" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="90" y="118" width="100" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 表单项2 -->
      <rect x="80" y="155" width="60" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="80" y="168" width="440" height="30" rx="4" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="90" y="178" width="80" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 表单项3 -->
      <rect x="80" y="215" width="60" height="6" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="80" y="228" width="200" height="30" rx="4" :fill="accent1" opacity="0.06" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="90" y="238" width="120" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 金额显示 -->
      <rect x="310" y="228" width="210" height="30" rx="4" :fill="`url(#accent-${pid})`" opacity="0.08" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.12"/>
      <rect x="330" y="238" width="40" height="6" rx="3" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="380" y="238" width="80" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <!-- 提交按钮 -->
      <rect x="180" y="280" width="240" height="36" rx="6" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <rect x="270" y="293" width="60" height="6" rx="3" :fill="accent1" opacity="0.25"/>
      <!-- 底部状态 -->
      <rect x="50" y="350" width="500" height="1" :fill="accent1" opacity="0.06"/>
      <rect x="50" y="360" width="120" height="6" rx="3" :fill="accent1" opacity="0.08"/>
      <rect x="430" y="360" width="100" height="6" rx="3" :fill="accent1" opacity="0.08"/>
    </template>

    <!-- ===== 移动端首页布局 ===== -->
    <template v-else-if="type === 'mobile-home'">
      <!-- 顶部状态栏 -->
      <rect x="0" y="0" width="600" height="40" :fill="accent1" opacity="0.08"/>
      <rect x="30" y="14" width="40" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <circle cx="560" cy="17" r="6" :fill="accent1" opacity="0.1"/>
      <rect x="555" y="14" width="18" height="6" rx="2" :fill="accent1" opacity="0.08"/>
      <!-- 头部标题 -->
      <rect x="20" y="60" width="120" height="10" rx="3" :fill="`url(#accent-${pid})`" opacity="0.25"/>
      <rect x="480" y="62" width="80" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 搜索条 -->
      <rect x="20" y="90" width="560" height="36" rx="18" :fill="accent1" opacity="0.05" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="50" y="103" width="100" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 图标网格 -->
      <g>
        <rect x="40" y="150" width="110" height="80" rx="8" :fill="`url(#accent-${pid})`" opacity="0.08"/>
        <rect x="65" y="165" width="60" height="30" rx="6" :fill="`url(#accent-${pid})`" opacity="0.15"/>
        <rect x="55" y="205" width="80" height="5" rx="2" :fill="accent1" opacity="0.1"/>
        <rect x="180" y="150" width="110" height="80" rx="8" :fill="accent1" opacity="0.05"/>
        <rect x="205" y="165" width="60" height="30" rx="6" :fill="accent1" opacity="0.1"/>
        <rect x="195" y="205" width="80" height="5" rx="2" :fill="accent1" opacity="0.08"/>
        <rect x="320" y="150" width="110" height="80" rx="8" :fill="accent1" opacity="0.05"/>
        <rect x="345" y="165" width="60" height="30" rx="6" :fill="accent1" opacity="0.1"/>
        <rect x="335" y="205" width="80" height="5" rx="2" :fill="accent1" opacity="0.08"/>
        <rect x="460" y="150" width="110" height="80" rx="8" :fill="accent1" opacity="0.05"/>
        <rect x="485" y="165" width="60" height="30" rx="6" :fill="accent1" opacity="0.1"/>
        <rect x="475" y="205" width="80" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      </g>
      <!-- 底部导航 -->
      <rect x="0" y="340" width="600" height="60" :fill="accent1" opacity="0.06"/>
      <rect x="60" y="358" width="20" height="20" rx="4" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="210" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="290" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="370" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="520" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="55" y="384" width="30" height="4" rx="2" :fill="accent1" opacity="0.1"/>
      <rect x="205" y="384" width="30" height="4" rx="2" :fill="accent1" opacity="0.08"/>
      <rect x="285" y="384" width="30" height="4" rx="2" :fill="accent1" opacity="0.08"/>
      <rect x="365" y="384" width="30" height="4" rx="2" :fill="accent1" opacity="0.08"/>
      <rect x="515" y="384" width="30" height="4" rx="2" :fill="accent1" opacity="0.08"/>
    </template>

    <!-- ===== 移动端列表布局 ===== -->
    <template v-else-if="type === 'mobile-list'">
      <!-- 顶部标题栏 -->
      <rect x="0" y="0" width="600" height="50" :fill="accent1" opacity="0.08"/>
      <rect x="20" y="18" width="20" height="14" rx="4" :fill="accent1" opacity="0.15"/>
      <rect x="260" y="20" width="80" height="8" rx="3" :fill="accent1" opacity="0.15"/>
      <!-- 列表项 -->
      <g>
        <rect x="20" y="70" width="560" height="60" rx="6" :fill="accent1" opacity="0.04"/>
        <rect x="36" y="82" width="36" height="36" rx="6" :fill="`url(#accent-${pid})`" opacity="0.15"/>
        <rect x="84" y="82" width="120" height="6" rx="3" :fill="accent1" opacity="0.12"/>
        <rect x="84" y="94" width="200" height="5" rx="2" :fill="accent1" opacity="0.07"/>
        <rect x="520" y="86" width="40" height="20" rx="4" :fill="`url(#accent-${pid})`" opacity="0.12"/>
        <line x1="20" y1="130" x2="580" y2="130" :stroke="accent1" stroke-width="0.5" opacity="0.04"/>
      </g>
      <g>
        <rect x="20" y="132" width="560" height="60" rx="6" :fill="accent1" opacity="0.04"/>
        <rect x="36" y="144" width="36" height="36" rx="6" :fill="accent1" opacity="0.08"/>
        <rect x="84" y="144" width="100" height="6" rx="3" :fill="accent1" opacity="0.1"/>
        <rect x="84" y="156" width="180" height="5" rx="2" :fill="accent1" opacity="0.07"/>
        <rect x="520" y="148" width="40" height="20" rx="4" :fill="accent1" opacity="0.08"/>
        <line x1="20" y1="192" x2="580" y2="192" :stroke="accent1" stroke-width="0.5" opacity="0.04"/>
      </g>
      <g>
        <rect x="20" y="194" width="560" height="60" rx="6" :fill="accent1" opacity="0.04"/>
        <rect x="36" y="206" width="36" height="36" rx="6" :fill="accent1" opacity="0.08"/>
        <rect x="84" y="206" width="140" height="6" rx="3" :fill="accent1" opacity="0.1"/>
        <rect x="84" y="218" width="160" height="5" rx="2" :fill="accent1" opacity="0.07"/>
        <rect x="520" y="210" width="40" height="20" rx="4" :fill="accent1" opacity="0.08"/>
        <line x1="20" y1="254" x2="580" y2="254" :stroke="accent1" stroke-width="0.5" opacity="0.04"/>
      </g>
      <g>
        <rect x="20" y="256" width="560" height="60" rx="6" :fill="accent1" opacity="0.04"/>
        <rect x="36" y="268" width="36" height="36" rx="6" :fill="accent1" opacity="0.08"/>
        <rect x="84" y="268" width="130" height="6" rx="3" :fill="accent1" opacity="0.1"/>
        <rect x="84" y="280" width="140" height="5" rx="2" :fill="accent1" opacity="0.07"/>
        <rect x="520" y="272" width="40" height="20" rx="4" :fill="`url(#accent-${pid})`" opacity="0.12"/>
        <line x1="20" y1="316" x2="580" y2="316" :stroke="accent1" stroke-width="0.5" opacity="0.04"/>
      </g>
      <!-- 底部导航 -->
      <rect x="0" y="340" width="600" height="60" :fill="accent1" opacity="0.06"/>
      <rect x="60" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="210" y="358" width="20" height="20" rx="4" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <rect x="290" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="370" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
      <rect x="520" y="358" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
    </template>

    <!-- ===== 移动端详情布局 ===== -->
    <template v-else-if="type === 'mobile-detail'">
      <!-- 顶部图片占位 -->
      <rect x="0" y="0" width="600" height="180" :fill="`url(#accent-${pid})`" opacity="0.12"/>
      <!-- 返回按钮 -->
      <rect x="20" y="16" width="32" height="32" rx="16" :fill="accent1" opacity="0.15"/>
      <rect x="28" y="28" width="16" height="8" rx="2" :fill="accent1" opacity="0.2"/>
      <!-- 更多 -->
      <rect x="548" y="16" width="32" height="32" rx="16" :fill="accent1" opacity="0.1"/>
      <circle cx="564" cy="32" r="2" :fill="accent1" opacity="0.2"/>
      <!-- 标题区域 -->
      <rect x="20" y="200" width="400" height="10" rx="3" :fill="accent1" opacity="0.18"/>
      <rect x="20" y="218" width="280" height="8" rx="3" :fill="accent1" opacity="0.1"/>
      <!-- 标签 -->
      <rect x="20" y="240" width="50" height="20" rx="4" :fill="`url(#accent-${pid})`" opacity="0.12"/>
      <rect x="78" y="240" width="60" height="20" rx="4" :fill="accent1" opacity="0.06"/>
      <rect x="146" y="240" width="40" height="20" rx="4" :fill="accent1" opacity="0.06"/>
      <!-- 内容区块 -->
      <rect x="20" y="280" width="560" height="6" rx="3" :fill="accent1" opacity="0.12"/>
      <rect x="20" y="294" width="540" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <rect x="20" y="304" width="560" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <rect x="20" y="314" width="520" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <rect x="20" y="324" width="480" height="4" rx="2" :fill="accent1" opacity="0.06"/>
      <!-- 信息卡 -->
      <rect x="20" y="345" width="270" height="40" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="32" y="355" width="30" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="32" y="367" width="60" height="5" rx="2" :fill="`url(#accent-${pid})`" opacity="0.15"/>
      <rect x="310" y="345" width="270" height="40" rx="6" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
      <rect x="322" y="355" width="30" height="6" rx="3" :fill="accent1" opacity="0.1"/>
      <rect x="322" y="367" width="40" height="5" rx="2" :fill="accent1" opacity="0.1"/>
    </template>

    <!-- ===== 移动端个人中心布局 ===== -->
    <template v-else-if="type === 'mobile-profile'">
      <!-- 头部背景 -->
      <rect x="0" y="0" width="600" height="120" :fill="`url(#accent-${pid})`" opacity="0.1"/>
      <!-- 头像 -->
      <circle cx="300" cy="80" r="36" :fill="accent1" opacity="0.12"/>
      <circle cx="300" cy="80" r="28" :fill="accent1" opacity="0.08"/>
      <circle cx="300" cy="80" r="12" :fill="`url(#accent-${pid})`" opacity="0.2"/>
      <!-- 用户名 -->
      <rect x="250" y="130" width="100" height="7" rx="3" :fill="accent1" opacity="0.15"/>
      <rect x="265" y="143" width="70" height="5" rx="2" :fill="accent1" opacity="0.08"/>
      <!-- 统计行 -->
      <g>
        <rect x="80" y="165" width="440" height="60" rx="8" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.08"/>
        <text x="170" y="191" text-anchor="middle" :fill="accent1" font-size="14" font-family="monospace" opacity="0.25">0</text>
        <text x="170" y="204" text-anchor="middle" :fill="accent1" font-size="8" font-family="monospace" opacity="0.12">订单</text>
        <text x="300" y="191" text-anchor="middle" :fill="accent1" font-size="14" font-family="monospace" opacity="0.25">0</text>
        <text x="300" y="204" text-anchor="middle" :fill="accent1" font-size="8" font-family="monospace" opacity="0.12">检测</text>
        <text x="430" y="191" text-anchor="middle" :fill="accent1" font-size="14" font-family="monospace" opacity="0.25">0</text>
        <text x="430" y="204" text-anchor="middle" :fill="accent1" font-size="8" font-family="monospace" opacity="0.12">余额</text>
      </g>
      <!-- 菜单项 -->
      <g>
        <rect x="40" y="245" width="520" height="44" rx="6" :fill="accent1" opacity="0.03"/>
        <rect x="56" y="257" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
        <rect x="88" y="263" width="80" height="6" rx="3" :fill="accent1" opacity="0.12"/>
        <rect x="540" y="261" width="8" height="12" rx="1.5" :fill="accent1" opacity="0.08"/>
        <line x1="40" y1="289" x2="560" y2="289" :stroke="accent1" stroke-width="0.5" opacity="0.04"/>
      </g>
      <g>
        <rect x="40" y="291" width="520" height="44" rx="6" :fill="accent1" opacity="0.03"/>
        <rect x="56" y="303" width="20" height="20" rx="4" :fill="accent1" opacity="0.08"/>
        <rect x="88" y="309" width="60" height="6" rx="3" :fill="accent1" opacity="0.12"/>
        <rect x="540" y="307" width="8" height="12" rx="1.5" :fill="accent1" opacity="0.08"/>
      </g>
      <!-- 退出按钮 -->
      <rect x="180" y="360" width="240" height="36" rx="18" :fill="accent1" opacity="0.04" :stroke="accent1" stroke-width="0.5" stroke-opacity="0.1"/>
      <rect x="270" y="375" width="60" height="6" rx="3" :fill="accent1" opacity="0.1"/>
    </template>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  projectId: { type: String, required: true },
  type: { type: String, required: true },
})

const themeMap = {
  'ip-manage':   { bg1: '#0a1628', bg2: '#0c1929', accent1: '#14b8a6', accent2: '#0891b2' },
  'equip-price': { bg1: '#1a0f0a', bg2: '#1a0f0a', accent1: '#f59e0b', accent2: '#d97706' },
  'ruiyan':      { bg1: '#1a0a1a', bg2: '#1a0a1a', accent1: '#d946ef', accent2: '#a21caf' },
  'xmgl':        { bg1: '#0a1a14', bg2: '#0a1a14', accent1: '#10b981', accent2: '#059669' },
}

const pid = computed(() => props.projectId)
const colors = computed(() => themeMap[props.projectId] || themeMap['ip-manage'])
const bg1 = computed(() => colors.value.bg1)
const bg2 = computed(() => colors.value.bg2)
const accent1 = computed(() => colors.value.accent1)
const accent2 = computed(() => colors.value.accent2)
</script>
