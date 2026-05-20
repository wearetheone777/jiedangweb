<template>
  <section id="services" class="py-24 px-4 bg-space-dark relative">
    <div class="max-w-6xl mx-auto">
      <!-- 区块标题 -->
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">02.</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">SERVICES</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <!-- 服务卡片 -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="s in site.services" :key="s.id"
             class="group relative p-6 border border-space-border bg-space-card
                    hover:border-accent-teal/30 transition-all duration-500
                    hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,191,165,0.05)]">
          <!-- 卡片编号 -->
          <div class="absolute top-3 right-4 font-mono text-5xl font-bold text-space-border
                      group-hover:text-accent-teal/5 transition-colors duration-500 select-none">
            0{{ s.id }}
          </div>

          <!-- 图标 -->
          <div class="relative z-10 mb-6">
            <div class="w-10 h-10 flex items-center justify-center border border-space-border
                        group-hover:border-accent-teal/40 transition-colors duration-300">
              <!-- 图标 SVG -->
              <svg v-if="s.icon === 'globe'" class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
              <svg v-else-if="s.icon === 'book'" class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
              </svg>
              <svg v-else-if="s.icon === 'smartphone'" class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <svg v-else class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
          </div>

          <!-- 标题和描述 -->
          <h3 class="relative z-10 font-mono text-base text-silver-primary mb-3
                     group-hover:text-accent-teal transition-colors duration-300">
            {{ s.title }}
          </h3>
          <p class="relative z-10 text-silver-muted text-sm leading-relaxed">
            {{ s.description }}
          </p>

          <!-- 底部装饰线 -->
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
