<template>
  <section id="contact" class="py-20 px-4 bg-space-dark">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="font-mono text-2xl text-accent-teal mb-12 tracking-wider">// CONTACT</h2>
      <div class="space-y-6 font-mono text-sm">
        <div v-if="site.contact.wechat" class="flex items-center justify-center gap-3 text-silver-muted">
          <span class="text-accent-teal">WECHAT:</span>
          <span>{{ site.contact.wechat }}</span>
        </div>
        <div v-if="site.contact.email" class="flex items-center justify-center gap-3 text-silver-muted">
          <span class="text-accent-teal">EMAIL:</span>
          <a :href="'mailto:' + site.contact.email" class="hover:text-accent-teal transition-colors">
            {{ site.contact.email }}
          </a>
        </div>
        <div v-if="site.contact.qq" class="flex items-center justify-center gap-3 text-silver-muted">
          <span class="text-accent-teal">QQ:</span>
          <span>{{ site.contact.qq }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
