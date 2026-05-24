<template>
  <section id="portfolio" class="py-24 px-4 relative">
    <div ref="el" :class="['max-w-6xl mx-auto transition-all duration-700', isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">{{ t.portfolio.num }}</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">{{ t.portfolio.heading }}</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="cat in categories" :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 font-mono text-xs tracking-wider border transition-all duration-300',
            activeCategory === cat
              ? 'border-accent-teal text-accent-teal bg-accent-teal/5'
              : 'border-space-border text-silver-muted hover:border-silver-muted'
          ]">
          {{ cat }}
        </button>
      </div>

      <!-- 项目卡片网格 -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(p, idx) in filteredProjects" :key="p.title"
          class="group p-6 border border-space-border bg-space-card cursor-pointer
                 hover:border-accent-teal/30 transition-all duration-500
                 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,191,165,0.05)]"
          @click="openProject(projectIds[idx])">
          <!-- 项目占位图 -->
          <div class="mb-5 h-36 bg-space-dark border border-space-border flex items-center justify-center
                      group-hover:border-accent-teal/20 transition-colors duration-500 overflow-hidden">
            <div class="flex flex-col items-center gap-2 text-space-border group-hover:text-accent-teal/10 transition-colors">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>

          <div class="font-mono text-xs text-accent-teal mb-2 tracking-wider">{{ p.category }}</div>
          <h3 class="text-silver-primary font-mono text-base mb-2 group-hover:text-accent-teal transition-colors">
            {{ p.title }}
          </h3>
          <p class="text-silver-muted text-xs leading-relaxed line-clamp-2 mb-4">
            {{ p.desc }}
          </p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="tag in p.tags" :key="tag"
                  class="px-2 py-0.5 text-[10px] font-mono bg-space-dark text-silver-muted border border-space-border">
              {{ tag }}
            </span>
          </div>

          <div class="inline-flex items-center gap-1.5 font-mono text-xs text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>{{ t.portfolio.viewDetail }}</span>
            <svg class="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0"
           class="text-center py-20 font-mono text-sm text-silver-muted">
        {{ t.portfolio.empty }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'
import { useProjectView } from '../composables/useProjectView.js'
import { projects } from '../data/projects.js'

const { t, locale } = useI18n()
const { el, isRevealed } = useScrollReveal()
const { openProject } = useProjectView()

const activeCategory = ref('')

// 用 data/projects.js 的 id 顺序对应 i18n 中的 item 顺序
const projectIds = projects.map(p => p.id)

// 初始化时设置默认分类
watch(() => t.value.portfolio.all, (val) => {
  if (!activeCategory.value) activeCategory.value = val
}, { immediate: true })

watch(locale, () => {
  activeCategory.value = t.value.portfolio.all
})

const categories = computed(() => {
  const cats = [t.value.portfolio.all, ...new Set(t.value.portfolio.items.map(p => p.category))]
  return cats
})

const filteredProjects = computed(() => {
  if (activeCategory.value === t.value.portfolio.all) return t.value.portfolio.items
  return t.value.portfolio.items.filter(p => p.category === activeCategory.value)
})
</script>
