<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-4 py-3">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <span class="font-mono text-lg tracking-wider text-accent-teal">JD.DEV</span>
      <div class="hidden md:flex gap-8 text-sm font-mono text-silver-muted">
        <a v-for="item in navItems" :key="item.id" :href="item.href"
           class="hover:text-accent-teal transition-colors duration-300">
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { id: 'hero', label: 'HOME', href: '#hero' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'services', label: 'SERVICES', href: '#services' },
  { id: 'portfolio', label: 'WORKS', href: '#portfolio' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
]
</script>
