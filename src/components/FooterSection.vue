<template>
  <footer class="py-8 px-4 border-t border-space-border">
    <div class="max-w-6xl mx-auto text-center">
      <p class="font-mono text-xs text-silver-muted">{{ site.footer.copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
