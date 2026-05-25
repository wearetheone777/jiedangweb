<template>
  <transition name="page-fade" mode="out-in">
    <section v-if="project" class="py-16 px-4 relative min-h-screen">
      <div ref="el" class="max-w-5xl mx-auto">
        <!-- 返回按钮 -->
        <button @click="closeProject" class="group inline-flex items-center gap-2 mb-10 font-mono text-xs tracking-wider
               text-silver-muted hover:text-accent-teal transition-colors duration-300">
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path d="M19 12H5m7-7-7 7 7 7"/>
          </svg>
          {{ t.portfolio.backToList }}
        </button>

        <!-- 项目标题区 -->
        <div class="mb-12">
          <div class="flex items-center gap-3 mb-4">
            <span class="font-mono text-xs text-accent-teal tracking-widest">{{ project.categoryTxt }}</span>
            <span class="w-px h-3 bg-space-border"></span>
            <span v-for="tag in project.tech" :key="tag"
                  class="px-2 py-0.5 text-[10px] font-mono bg-space-dark text-silver-muted border border-space-border">
              {{ tag }}
            </span>
          </div>
          <h1 class="font-mono text-3xl md:text-4xl text-silver-primary tracking-tight mb-4">
            {{ project.titleTxt }}
          </h1>
          <p class="text-silver-muted text-sm leading-relaxed max-w-3xl">
            {{ project.descriptionTxt }}
          </p>
        </div>

        <!-- 功能模块 -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-2 h-2 bg-accent-teal/60"></div>
            <h2 class="font-mono text-sm text-silver-primary tracking-wider">{{ t.portfolio.features }}</h2>
            <div class="flex-1 h-px bg-space-border"></div>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="ft in project.features" :key="ft.label"
                 class="p-5 border border-space-border bg-space-card hover:border-accent-teal/30 transition-all duration-300">
              <h3 class="font-mono text-sm text-accent-teal mb-2">{{ ft.labelTxt }}</h3>
              <p class="text-silver-muted text-xs leading-relaxed">{{ ft.descTxt }}</p>
            </div>
          </div>
        </div>

        <!-- 架构信息 -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-2 h-2 bg-accent-teal/60"></div>
            <h2 class="font-mono text-sm text-silver-primary tracking-wider">{{ t.portfolio.architecture }}</h2>
            <div class="flex-1 h-px bg-space-border"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            <div v-for="arc in project.architecture" :key="arc.label"
                 class="flex items-center justify-between p-4 border border-space-border bg-space-card/50">
              <span class="font-mono text-xs text-silver-muted">{{ arc.labelTxt }}</span>
              <span class="font-mono text-xs text-silver-primary ml-4 text-right">{{ arc.value }}</span>
            </div>
          </div>
        </div>

        <!-- 页面预览 -->
        <div class="mb-16">
          <div class="flex items-center gap-3 mb-8">
            <div class="w-2 h-2 bg-accent-teal/60"></div>
            <h2 class="font-mono text-sm text-silver-primary tracking-wider">{{ t.portfolio.screenshots }}</h2>
            <div class="flex-1 h-px bg-space-border"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div v-for="ss in project.screenshots" :key="ss.label"
                 class="border border-space-border bg-space-dark overflow-hidden group cursor-default">
              <div class="h-32 flex items-center justify-center overflow-hidden">
                <ScreenshotMockup :project-id="selectedProjectId" :type="ss.mockupType" class="w-full h-full" />
              </div>
              <div class="p-3">
                <div class="font-mono text-xs text-accent-teal mb-1">{{ ss.labelTxt }}</div>
                <div class="text-[11px] text-silver-muted">{{ ss.descTxt }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部操作 -->
        <div class="flex justify-center pt-8 border-t border-space-border">
          <button @click="closeProject"
                  class="group inline-flex items-center gap-2 px-6 py-3 border border-space-border font-mono text-xs tracking-wider
                         text-silver-muted hover:border-accent-teal hover:text-accent-teal transition-all duration-300">
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path d="M19 12H5m7-7-7 7 7 7"/>
            </svg>
            {{ t.portfolio.backToList }}
          </button>
        </div>
      </div>
    </section>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useProjectView } from '../composables/useProjectView.js'
import { getProjectById } from '../data/projects.js'
import ScreenshotMockup from './ScreenshotMockup.vue'

const { t, locale } = useI18n()
const { selectedProjectId, closeProject } = useProjectView()

const isZh = computed(() => locale.value === 'zh')

const project = computed(() => {
  const raw = getProjectById(selectedProjectId.value)
  if (!raw) return null
  return {
    categoryTxt: isZh.value ? raw.category : raw.categoryEn,
    titleTxt: isZh.value ? raw.title : raw.titleEn,
    descriptionTxt: isZh.value ? raw.description : raw.descriptionEn,
    tech: raw.tech,
    features: raw.features.map(f => ({
      labelTxt: isZh.value ? f.label : f.labelEn,
      descTxt: isZh.value ? f.desc : f.descEn,
    })),
    architecture: raw.architecture.map(a => ({
      labelTxt: isZh.value ? a.label : a.labelEn,
      value: a.value,
    })),
    screenshots: raw.screenshots.map(s => ({
      labelTxt: isZh.value ? s.label : s.labelEn,
      descTxt: isZh.value ? s.desc : s.descEn,
      mockupType: s.mockupType || 'dashboard',
    })),
  }
})
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
