<template>
  <footer class="py-10 px-4 border-t border-space-border relative">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo -->
        <a href="#hero" class="font-mono text-sm tracking-widest text-silver-muted hover:text-accent-teal transition-colors">
          JD<span class="text-accent-teal">.</span>DEV
        </a>

        <!-- 快速导航 -->
        <div class="flex gap-6">
          <a v-for="item in quickLinks" :key="item.id" :href="item.href"
             class="font-mono text-xs text-silver-muted hover:text-accent-teal transition-colors tracking-wider">
            {{ item.label }}
          </a>
        </div>

        <!-- 版权 -->
        <p class="font-mono text-xs text-silver-muted">
          {{ site.footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'

const quickLinks = [
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'services', label: 'SERVICES', href: '#services' },
  { id: 'portfolio', label: 'WORKS', href: '#portfolio' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
]
</script>
