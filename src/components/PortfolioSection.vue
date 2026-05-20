<template>
  <section id="portfolio" class="py-24 px-4 relative">
    <div class="max-w-6xl mx-auto">
      <!-- 区块标题 -->
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">03.</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">WORKS</h2>
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
          v-for="p in filteredProjects" :key="p.id"
          @click="selectedProject = p"
          class="group p-6 border border-space-border bg-space-card cursor-pointer
                 hover:border-accent-teal/30 transition-all duration-500
                 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,191,165,0.05)]">
          <!-- 项目缩略图占位 -->
          <div class="mb-5 h-40 bg-space-dark border border-space-border flex items-center justify-center
                      group-hover:border-accent-teal/20 transition-colors duration-500 overflow-hidden">
            <div v-if="p.image" class="w-full h-full">
              <img :src="p.image" :alt="p.title" class="w-full h-full object-cover" />
            </div>
            <div v-else class="flex flex-col items-center gap-2 text-space-border group-hover:text-accent-teal/10 transition-colors">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span class="font-mono text-[10px] tracking-wider">PROJECT PREVIEW</span>
            </div>
          </div>

          <!-- 项目信息 -->
          <div class="font-mono text-xs text-accent-teal mb-2 tracking-wider">{{ p.category }}</div>
          <h3 class="text-silver-primary font-mono text-lg mb-2 group-hover:text-accent-teal transition-colors">
            {{ p.title }}
          </h3>
          <p class="text-silver-muted text-sm mb-4 leading-relaxed line-clamp-2">
            {{ p.description }}
          </p>

          <!-- 标签 -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in p.tags" :key="tag"
                  class="px-2 py-0.5 text-xs font-mono bg-space-dark text-silver-muted border border-space-border
                         group-hover:border-accent-teal/20 transition-colors">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredProjects.length === 0"
           class="text-center py-20 font-mono text-sm text-silver-muted">
        暂无该项目分类的作品
      </div>
    </div>

    <!-- 项目详情弹窗 -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject"
             class="fixed inset-0 z-[60] flex items-center justify-center p-4"
             @click.self="selectedProject = null">
          <!-- 遮罩 -->
          <div class="absolute inset-0 bg-space-black/90 backdrop-blur-sm"></div>

          <!-- 弹窗内容 -->
          <div class="relative max-w-2xl w-full bg-space-card border border-space-border p-8">
            <!-- 关闭按钮 -->
            <button @click="selectedProject = null"
                    class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                           text-silver-muted hover:text-accent-teal transition-colors font-mono text-lg">
              &times;
            </button>

            <div class="font-mono text-xs text-accent-teal mb-3 tracking-wider">
              {{ selectedProject.category }}
            </div>
            <h3 class="font-mono text-2xl text-silver-primary mb-4">{{ selectedProject.title }}</h3>

            <!-- 占位图 -->
            <div class="mb-6 h-48 bg-space-dark border border-space-border flex items-center justify-center">
              <span class="font-mono text-xs text-space-border">PROJECT SCREENSHOT</span>
            </div>

            <p class="text-silver-muted leading-relaxed mb-6">{{ selectedProject.description }}</p>

            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in selectedProject.tags" :key="tag"
                    class="px-3 py-1 text-xs font-mono bg-space-dark text-accent-teal border border-accent-teal/20">
                {{ tag }}
              </span>
            </div>

            <!-- 底部提示 -->
            <p class="font-mono text-xs text-silver-muted text-center">
              如需查看更多详情，请联系我获取完整案例
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { siteConfig as site } from '../data/siteData.js'

const activeCategory = ref('全部')
const selectedProject = ref(null)

const categories = computed(() => {
  const cats = ['全部', ...new Set(site.projects.map(p => p.category))]
  return cats
})

const filteredProjects = computed(() => {
  if (activeCategory.value === '全部') return site.projects
  return site.projects.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active > div:last-child {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from > div:last-child {
  transform: scale(0.95);
  opacity: 0;
}
</style>
