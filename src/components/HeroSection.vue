<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center hex-grid">
    <div class="text-center z-10 px-4">
      <h1 class="font-mono text-4xl md:text-6xl font-bold text-silver-primary text-glow-teal mb-4">
        {{ site.title }}
      </h1>
      <p class="text-silver-muted text-lg md:text-xl mb-8 font-mono">
        {{ site.subtitle }}
      </p>
      <a href="#contact"
         class="inline-block px-8 py-3 border border-accent-teal text-accent-teal font-mono text-sm tracking-wider
                hover:bg-accent-teal hover:text-space-black transition-all duration-300">
        联系我
      </a>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
