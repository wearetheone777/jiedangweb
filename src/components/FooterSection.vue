<template>
  <footer class="py-10 px-4 border-t border-space-border relative">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" class="font-mono text-sm tracking-widest text-silver-muted hover:text-accent-teal transition-colors">
          JD<span class="text-accent-teal">.</span>DEV
        </a>

        <div class="flex gap-6">
          <a v-for="item in quickLinks" :key="item.id" :href="item.href"
             class="font-mono text-xs text-silver-muted hover:text-accent-teal transition-colors tracking-wider">
            {{ item.label }}
          </a>
        </div>

        <p class="font-mono text-xs text-silver-muted">
          {{ t.footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n/index.js'

const { t } = useI18n()

const quickLinks = computed(() => [
  { id: 'about', label: t.value.nav.about, href: '#about' },
  { id: 'services', label: t.value.nav.services, href: '#services' },
  { id: 'portfolio', label: t.value.nav.works, href: '#portfolio' },
  { id: 'contact', label: t.value.nav.contact, href: '#contact' },
])
</script>
