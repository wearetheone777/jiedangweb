<template>
  <section id="portfolio" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-mono text-2xl text-accent-teal mb-12 tracking-wider">// WORKS</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="p in site.projects" :key="p.id"
             class="p-6 border border-space-border bg-space-card card-glow transition-all duration-300 group cursor-pointer">
          <div class="font-mono text-xs text-accent-teal mb-3">{{ p.category }}</div>
          <h3 class="text-silver-primary font-mono text-lg mb-3 group-hover:text-accent-teal transition-colors">
            {{ p.title }}
          </h3>
          <p class="text-silver-muted text-sm mb-4 leading-relaxed">{{ p.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in p.tags" :key="tag"
                  class="px-2 py-0.5 text-xs font-mono bg-space-dark text-silver-muted border border-space-border">
              {{ tag }}
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
