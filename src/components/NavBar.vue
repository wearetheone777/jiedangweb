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
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
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
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', label: 'HOME', href: '#hero' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'services', label: 'SERVICES', href: '#services' },
  { id: 'portfolio', label: 'WORKS', href: '#portfolio' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 60

  // 检测当前所在区块
  const sections = navItems.map(i => document.getElementById(i.id)).filter(Boolean)
  const scrollPos = window.scrollY + window.innerHeight / 3

  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].offsetTop <= scrollPos) {
      activeSection.value = navItems[i].id
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
