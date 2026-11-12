<script setup>
/**
 * HomeView — Gizera Homepage.
 *
 * Full Homepage aligned with Gizera Web reference:
 *   1. HomeHero          — Dark full-screen hero section
 *   2. HomeClientLogos   — Marquee client logos strip with reduced-motion support
 *   3. HomeAbout         — About Gizera with 3 feature cards + running ticker
 *   4. HomeServices      — 5 services (dark background)
 *   5. HomeValues        — 4 core values (dark background)
 *   6. HomeCaseStudies   — 3 real case studies (light background)
 *   7. HomeIndustries    — Sektor Industri Klien with interactive showcase (dark)
 *   8. HomeTestimonials  — Testimoni Klien: Dipercaya Pemimpin Bisnis Masa Depan (dark)
 *   9. HomeApproach      — Langkah Terpadu Menjawab Tantangan Bisnis (light)
 *   10. HomeWhyUs        — Perbandingan: Vendor Konvensional vs Bersama Gizera + Stats (dark)
 *   11. HomeInsights     — Wawasan Terkini & Tren Teknologi (light)
 *   12. HomeFAQ          — Pertanyaan yang Sering Diajukan with accordion (dark)
 *   13. HomeCTA          — Let's Build Better Business final CTA
 */
import HomeHero         from '@/components/home/HomeHero.vue'
import HomeClientLogos  from '@/components/home/HomeClientLogos.vue'
import HomeAbout        from '@/components/home/HomeAbout.vue'
import HomeServices     from '@/components/home/HomeServices.vue'
import HomeValues       from '@/components/home/HomeValues.vue'
import HomeCaseStudies  from '@/components/home/HomeCaseStudies.vue'
import HomeIndustries   from '@/components/home/HomeIndustries.vue'
import HomeTestimonials from '@/components/home/HomeTestimonials.vue'
import HomeApproach     from '@/components/home/HomeApproach.vue'
import HomeWhyUs        from '@/components/home/HomeWhyUs.vue'
import HomeInsights     from '@/components/home/HomeInsights.vue'
import HomeFAQ          from '@/components/home/HomeFAQ.vue'
import HomeCTA          from '@/components/home/HomeCTA.vue'
</script>

<template>
  <div class="home-page">
    <!-- 1. Hero -->
    <HomeHero />

    <!-- 2. Client Logos Marquee -->
    <HomeClientLogos />

    <!-- 3. About Gizera -->
    <HomeAbout />

    <!-- 4. Services (dark) -->
    <HomeServices />

    <!-- 5. Our Values (dark) -->
    <HomeValues />

    <!-- 6. Case Studies (light) -->
    <HomeCaseStudies />

    <!-- 7. Sektor Industri Klien (dark) -->
    <HomeIndustries />

    <!-- 8. Testimoni Klien (dark) -->
    <HomeTestimonials />

    <!-- 9. Langkah Terpadu / Our Approach (light) -->
    <HomeApproach />

    <!-- 10. Mengapa Bisnis Memilih Gizera - Comparison (dark) -->
    <HomeWhyUs />

    <!-- 11. Wawasan Terkini & Tren Teknologi - Blog (light) -->
    <HomeInsights />

    <!-- 12. Pertanyaan yang Sering Diajukan - FAQ (dark) -->
    <HomeFAQ />

    <!-- 13. Final CTA -->
    <HomeCTA />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}
</style>
