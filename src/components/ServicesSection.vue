<template>
  <section id="services" class="py-20 px-4 bg-space-dark">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-mono text-2xl text-accent-teal mb-12 tracking-wider">// SERVICES</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="s in site.services" :key="s.id"
             class="p-6 border border-space-border bg-space-card card-glow transition-all duration-300 group">
          <div class="text-accent-teal font-mono text-xs mb-4 tracking-wider">0{{ s.id }}</div>
          <h3 class="text-silver-primary font-mono text-lg mb-3 group-hover:text-accent-teal transition-colors">
            {{ s.title }}
          </h3>
          <p class="text-silver-muted text-sm leading-relaxed">{{ s.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
