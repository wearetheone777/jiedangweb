<template>
  <section id="contact" class="py-24 px-4 bg-space-dark relative overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span class="font-mono text-[12vw] font-bold text-space-border/20">CONTACT</span>
    </div>

    <div ref="el" :class="['max-w-2xl mx-auto relative z-10 transition-all duration-700', isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']">
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">{{ t.contact.num }}</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">{{ t.contact.heading }}</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <!-- 微信 -->
        <div class="group p-6 border border-space-border bg-space-card text-center
                    hover:border-accent-teal/30 transition-all duration-300">
          <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-space-border
                      group-hover:border-accent-teal/40 transition-colors">
            <svg class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
          </div>
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">{{ t.contact.wechat }}</div>
          <div class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors">
            {{ t.contact.wechatId }}
          </div>
        </div>

        <!-- 邮箱 -->
        <div class="group p-6 border border-space-border bg-space-card text-center
                    hover:border-accent-teal/30 transition-all duration-300">
          <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-space-border
                      group-hover:border-accent-teal/40 transition-colors">
            <svg class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4l-10 8L2 4"/>
            </svg>
          </div>
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">{{ t.contact.email }}</div>
          <a :href="'mailto:' + t.contact.emailAddr"
             class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors break-all">
            {{ t.contact.emailAddr }}
          </a>
        </div>

        <!-- QQ -->
        <div class="group p-6 border border-space-border bg-space-card text-center
                    hover:border-accent-teal/30 transition-all duration-300">
          <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center border border-space-border
                      group-hover:border-accent-teal/40 transition-colors">
            <svg class="w-5 h-5 text-silver-muted group-hover:text-accent-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">{{ t.contact.qq }}</div>
          <div class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors">
            {{ t.contact.qqId }}
          </div>
        </div>
      </div>

      <p class="text-center font-mono text-xs text-silver-muted">
        {{ t.contact.hint }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t } = useI18n()
const { el, isRevealed } = useScrollReveal()
</script>
