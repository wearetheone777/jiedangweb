<template>
  <section id="about" class="py-24 px-4 relative">
    <div ref="el" :class="['max-w-4xl mx-auto transition-all duration-700', isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">{{ t.about.num }}</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">{{ t.about.heading }}</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <div class="grid md:grid-cols-5 gap-12">
        <div class="md:col-span-3 space-y-6">
          <h3 class="font-mono text-lg text-silver-primary">
            {{ t.about.name }}
            <span class="text-accent-teal text-sm ml-2">— {{ t.about.title }}</span>
          </h3>
          <p class="text-silver-muted leading-relaxed text-sm">
            {{ t.about.desc }}
          </p>

          <div class="grid grid-cols-3 gap-6 pt-4">
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">5+</div>
              <div class="text-xs text-silver-muted mt-1">{{ t.about.statsYears }}</div>
            </div>
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">50+</div>
              <div class="text-xs text-silver-muted mt-1">{{ t.about.statsProjects }}</div>
            </div>
            <div class="text-center">
              <div class="font-mono text-2xl text-accent-teal">30+</div>
              <div class="text-xs text-silver-muted mt-1">{{ t.about.statsClients }}</div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-3 h-3 border border-accent-teal/40"></div>
            <h3 class="font-mono text-xs text-silver-muted tracking-widest">{{ t.about.skills }}</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in t.about.skillsList" :key="skill"
                  class="px-3 py-1.5 text-xs font-mono border border-space-border text-silver-muted bg-space-card
                         hover:border-accent-teal/50 hover:text-accent-teal transition-all duration-300 cursor-default">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t } = useI18n()
const { el, isRevealed } = useScrollReveal()
</script>
