<template>
  <section id="about" class="py-24 px-4 relative">
    <div class="max-w-4xl mx-auto">
      <!-- 区块标题 -->
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">01.</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">ABOUT</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <div class="grid md:grid-cols-5 gap-12">
        <!-- 左侧：个人信息 -->
        <div class="md:col-span-3 space-y-6">
          <h3 class="font-mono text-lg text-silver-primary">
            {{ site.about.name }}
            <span class="text-accent-teal text-sm ml-2">— {{ site.about.title }}</span>
          </h3>
          <p class="text-silver-muted leading-relaxed text-sm">
            {{ site.about.description }}
          </p>

          <!-- 统计数字 -->
          <div class="grid grid-cols-3 gap-6 pt-4">
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">5+</div>
              <div class="text-xs text-silver-muted mt-1">年开发经验</div>
            </div>
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">50+</div>
              <div class="text-xs text-silver-muted mt-1">完成项目</div>
            </div>
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">30+</div>
              <div class="text-xs text-silver-muted mt-1">满意客户</div>
            </div>
          </div>
        </div>

        <!-- 右侧：技能 -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-3 h-3 border border-accent-teal/40"></div>
            <h3 class="font-mono text-xs text-silver-muted tracking-widest">SKILLS</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in site.about.skills" :key="skill"
                  class="px-3 py-1.5 text-xs font-mono border border-space-border text-silver-muted bg-space-card
                         hover:border-accent-teal/50 hover:text-accent-teal transition-all duration-300 cursor-default">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
