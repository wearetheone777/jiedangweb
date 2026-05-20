<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- 六边形网格背景 -->
    <div class="absolute inset-0 hex-grid"></div>

    <!-- 几何装饰元素 -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- 左上角线条框 -->
      <div class="absolute top-20 left-10 md:top-32 md:left-20 w-24 h-24 md:w-32 md:h-32 border-l border-t border-accent-teal/20"></div>
      <!-- 右下角线条框 -->
      <div class="absolute bottom-20 right-10 md:bottom-32 md:right-20 w-24 h-24 md:w-32 md:h-32 border-r border-b border-accent-teal/20"></div>
      <!-- 左上角小方块 -->
      <div class="absolute top-24 left-14 md:top-36 md:left-24 w-2 h-2 bg-accent-teal/40"></div>
      <!-- 右下角小点 -->
      <div class="absolute bottom-24 right-14 md:bottom-36 md:right-24 w-1.5 h-1.5 bg-accent-teal/30 rounded-full"></div>
      <!-- 中间偏左的短横线 -->
      <div class="absolute top-1/3 left-[15%] w-12 h-px bg-accent-teal/15 hidden md:block"></div>
      <!-- 中间偏右的短竖线 -->
      <div class="absolute bottom-1/3 right-[12%] w-px h-12 bg-accent-teal/15 hidden md:block"></div>
    </div>

    <!-- 点阵装饰 -->
    <div class="absolute inset-0 pointer-events-none opacity-20"
         style="background-image: radial-gradient(circle, rgba(0,191,165,0.1) 1px, transparent 1px); background-size: 50px 50px;">
    </div>

    <!-- 主内容 -->
    <div class="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <!-- 顶部标签 -->
      <div class="font-mono text-xs tracking-[0.3em] text-accent-teal mb-6 opacity-80">
        FREELANCE DEVELOPER
      </div>

      <!-- 主标题 -->
      <h1 class="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-silver-primary mb-6 tracking-tight">
        <span class="block text-glow-teal">接单开发</span>
        <span class="block text-xl md:text-2xl font-normal text-silver-muted mt-3 tracking-wider">
          专业编程服务
        </span>
      </h1>

      <!-- 描述 -->
      <p class="text-silver-muted text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
        高质量网站开发 · 毕业设计辅导 · 小程序定制 · 程序代写
      </p>

      <!-- CTA 按钮组 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact"
           class="group inline-flex items-center justify-center px-8 py-3 border border-accent-teal text-accent-teal font-mono text-sm tracking-wider
                  hover:bg-accent-teal hover:text-space-black transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(0,191,165,0.3)]">
          <span class="mr-2">&gt;</span>
          联系我
        </a>
        <a href="#portfolio"
           class="inline-flex items-center justify-center px-8 py-3 border border-space-border text-silver-muted font-mono text-sm tracking-wider
                  hover:border-silver-primary hover:text-silver-primary transition-all duration-300">
          查看作品
        </a>
      </div>
    </div>

    <!-- 底部滚动提示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div class="flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span class="font-mono text-[10px] tracking-widest text-silver-muted">SCROLL</span>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" class="text-silver-muted">
          <rect x="0.5" y="0.5" width="11" height="17" rx="5.5" stroke="currentColor"/>
          <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from '../data/siteData.js'

// siteConfig 已全局可用，需要的话可以在 script 中使用
const _site = siteConfig
</script>
