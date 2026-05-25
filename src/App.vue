<template>
  <div class="relative min-h-screen bg-space-black">
    <!-- 扫描线叠加层 -->
    <div class="scanline-overlay"></div>

    <template v-if="isDetailView">
      <NavBar />
      <ProjectDetail />
      <FooterSection />
    </template>
    <template v-else>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </template>
  </div>
</template>

<script setup>
import { useProjectView } from './composables/useProjectView.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ProjectDetail from './components/ProjectDetail.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

const { isDetailView } = useProjectView()
</script>
