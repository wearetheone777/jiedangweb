<template>
  <section id="contact" class="py-24 px-4 bg-space-dark relative overflow-hidden">
    <!-- 背景装饰：大号透明文字 -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span class="font-mono text-[12vw] font-bold text-space-border/20">CONTACT</span>
    </div>

    <div class="max-w-2xl mx-auto relative z-10">
      <!-- 区块标题 -->
      <div class="flex items-center gap-4 mb-16">
        <span class="font-mono text-xs text-accent-teal tracking-widest">04.</span>
        <h2 class="font-mono text-2xl text-silver-primary tracking-wider">CONTACT</h2>
        <div class="flex-1 h-px bg-space-border"></div>
      </div>

      <!-- 联系方式卡片 -->
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
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">微信</div>
          <div class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors">
            {{ site.contact.wechat }}
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
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">邮箱</div>
          <a :href="'mailto:' + site.contact.email"
             class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors break-all">
            {{ site.contact.email }}
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
          <div class="font-mono text-xs text-silver-muted mb-1 tracking-wider">QQ</div>
          <div class="font-mono text-sm text-silver-primary group-hover:text-accent-teal transition-colors">
            {{ site.contact.qq }}
          </div>
        </div>
      </div>

      <!-- 底部提示 -->
      <p class="text-center font-mono text-xs text-silver-muted">
        工作日 24 小时内回复，欢迎咨询项目详情和报价
      </p>
    </div>
  </section>
</template>

<script setup>
import { siteConfig as site } from '../data/siteData.js'
</script>
