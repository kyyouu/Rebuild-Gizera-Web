<script setup>
/**
 * HomeServices — "Layanan Kami" section.
 *
 * Synchronized with Gizera Web reference:
 *   - Tag "LAYANAN KAMI"
 *   - H2: "Solusi Terpadu Menjawab Tantangan Bisnis"
 *   - 5 authentic services dari src/data/services.js
 *   - Bottom subtext & CTA /services
 *
 * Data layanan tidak di-hardcode di sini — diambil dari data layer terpusat.
 */
import BaseTag from '@/components/base/BaseTag.vue'
import { getAllServices } from '@/services/serviceService.js'

const services = getAllServices()
</script>

<template>
  <section class="services-section" aria-labelledby="services-heading">
    <div class="services-container">
      <!-- Header -->
      <div class="services-header">
        <BaseTag variant="dark">LAYANAN KAMI</BaseTag>
        <h2 id="services-heading" class="services-heading">
          Solusi Terpadu Menjawab Tantangan Bisnis
        </h2>
      </div>

      <!-- Cards grid -->
      <div class="services-grid">
        <RouterLink
          v-for="service in services"
          :key="service.id"
          :to="`/services/${service.slug}`"
          class="service-card"
          :aria-label="service.title"
        >
          <div class="service-card-top">
            <div class="service-card-icon" v-html="service.icon" aria-hidden="true"></div>
            <span class="service-arrow-btn" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <h3 class="service-card-title">{{ service.title }}</h3>
          <p class="service-card-desc">{{ service.tagline }}</p>
        </RouterLink>
      </div>

      <!-- Bottom Subtext & CTA -->
      <div class="services-footer">
        <p class="services-subtext">
          Membantu bisnis berkembang dengan arah yang jelas, andal, dan hasil yang terukur.
        </p>
        <RouterLink to="/services" class="services-cta" aria-label="Lihat semua layanan Gizera">
          <span>Lihat semua layanan</span>
          <span class="services-cta-arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.services-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.services-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.services-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
  max-width: 650px;
}

/* Cards */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.service-card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  color: #14f3c1;
}

.service-card-icon :deep(svg) {
  width: 36px;
  height: 36px;
}

.service-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.service-card:hover .service-arrow-btn {
  background: #005eff;
  color: #ffffff;
  transform: translate(2px, -2px);
}

.service-card-title {
  font-family: var(--font-display);
  font-size: clamp(19px, 2.2vw, 22px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
}

.service-card-desc {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

/* Footer & Subtext */
.services-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  gap: 24px;
  flex-wrap: wrap;
}

.services-subtext {
  font-family: var(--font-body);
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 600px;
}

.services-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 14px;
  padding: 12px 22px;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.services-cta:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateX(3px);
}

.services-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.services-cta:hover .services-cta-arrow {
  transform: translateX(3px);
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .services-section {
    padding: 72px 0;
  }

  .services-container {
    padding: 0 16px;
    gap: 36px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .services-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
