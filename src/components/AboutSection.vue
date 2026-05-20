<template>
  <section id="about" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-mono text-2xl text-accent-teal mb-8 tracking-wider">// ABOUT</h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <p class="text-silver-muted leading-relaxed mb-6">{{ site.about.description }}</p>
        </div>
        <div>
          <h3 class="font-mono text-sm text-silver-muted mb-4 tracking-wider">SKILLS</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in site.about.skills" :key="skill"
                  class="px-3 py-1 text-xs font-mono border border-space-border text-silver-muted
                         hover:border-accent-teal hover:text-accent-teal transition-colors duration-300">
              {{ skill }}
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
