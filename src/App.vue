<template>
  <div class="relative min-h-screen bg-space-black">
    <!-- 扫描线叠加层 -->
    <div class="scanline-overlay"></div>

    <NavBar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
