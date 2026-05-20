<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-500',
      scrolled
        ? 'bg-space-black/90 backdrop-blur-md border-b border-space-border'
        : 'bg-transparent'
    ]">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="font-mono text-lg tracking-widest transition-colors duration-300"
         :class="scrolled ? 'text-accent-teal' : 'text-silver-primary'">
        JD<span class="text-accent-teal">.</span>DEV
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a v-for="item in navItems" :key="item.id" :href="item.href"
           class="relative font-mono text-xs tracking-widest transition-colors duration-300 py-1"
           :class="activeSection === item.id ? 'text-accent-teal' : 'text-silver-muted hover:text-silver-primary'">
          {{ item.label }}
          <span
            v-if="activeSection === item.id"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-px bg-accent-teal">
          </span>
        </a>

        <!-- 语言切换 -->
        <button
          @click="toggleLocale"
          class="font-mono text-xs tracking-widest px-2 py-1 border border-space-border
                 text-silver-muted hover:text-accent-teal hover:border-accent-teal/50
                 transition-all duration-300"
          :title="locale === 'zh' ? 'Switch to English' : '切换到中文'">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          @click="toggleLocale"
          class="font-mono text-xs tracking-widest px-2 py-1 border border-space-border
                 text-silver-muted hover:text-accent-teal transition-all duration-300">
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
        <button
          @click="mobileOpen = !mobileOpen"
          class="relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="菜单">
          <span
            :class="[
              'block w-5 h-px transition-all duration-300',
              mobileOpen ? 'bg-accent-teal rotate-45 translate-y-1' : 'bg-silver-muted'
            ]">
          </span>
          <span
            :class="[
              'block w-5 h-px transition-all duration-300',
              mobileOpen ? 'bg-accent-teal -rotate-45 -translate-y-1' : 'bg-silver-muted'
            ]">
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen"
           class="md:hidden fixed inset-0 bg-space-black/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8">
        <a v-for="item in navItems" :key="item.id" :href="item.href"
           @click="mobileOpen = false"
           class="font-mono text-2xl tracking-widest transition-colors duration-300"
           :class="activeSection === item.id ? 'text-accent-teal' : 'text-silver-muted hover:text-silver-primary'">
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t, locale, toggleLocale } = useI18n()
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('hero')

const navItems = computed(() => [
  { id: 'hero', label: t.value.nav.home, href: '#hero' },
  { id: 'about', label: t.value.nav.about, href: '#about' },
  { id: 'services', label: t.value.nav.services, href: '#services' },
  { id: 'portfolio', label: t.value.nav.works, href: '#portfolio' },
  { id: 'contact', label: t.value.nav.contact, href: '#contact' },
])

function onScroll() {
  scrolled.value = window.scrollY > 60

  const sections = navItems.value.map(i => document.getElementById(i.id)).filter(Boolean)
  const scrollPos = window.scrollY + window.innerHeight / 3

  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].offsetTop <= scrollPos) {
      activeSection.value = navItems.value[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
