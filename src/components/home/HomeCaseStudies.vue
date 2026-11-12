<script setup>
/**
 * HomeCaseStudies — "Studi Kasus" section.
 *
 * Synchronized with Gizera Web reference:
 *   - Tag "STUDI KASUS"
 *   - H2: "Solusi Nyata Mendorong Pertumbuhan Bisnis"
 *   - CTA: "Lihat Semua Studi Kasus" -> /case-studies
 *   - 3 authentic case studies:
 *     1. Meningkatkan Efisiensi dan Profitabilitas Bisnis Melalui Strategi IT (+28% Pertumbuhan Omzet)
 *     2. Modernisasi Infrastruktur dan Akselerasi Skalabilitas Operasional (+42% Efisiensi Operasional)
 *     3. Transformasi Digital dan Integrasi Sistem Menuju Efektivitas Nyata (+36% Retensi Pelanggan)
 */
import BaseTag from '@/components/base/BaseTag.vue'

import imgCase1 from '@/assets/images/JmCwTnYY96cuhc9xpR4t9RnGuss.webp'
import imgCase2 from '@/assets/images/PB8m9iFknLrCjZeJprCGzECcxms.webp'
import imgCase3 from '@/assets/images/I4Oky3hKxsfrsOZF5OAe6nj5M.webp'

const cases = [
  {
    id: 1,
    tags: ['Keuangan', 'Teknologi'],
    metric: '+28% Pertumbuhan Omzet',
    title: 'Meningkatkan Efisiensi dan Profitabilitas Bisnis Melalui Strategi IT',
    image: imgCase1,
    link: '/case-studies',
  },
  {
    id: 2,
    tags: ['Manufaktur', 'Teknologi'],
    metric: '+42% Efisiensi Operasional',
    title: 'Modernisasi Infrastruktur dan Akselerasi Skalabilitas Operasional',
    image: imgCase2,
    link: '/case-studies',
  },
  {
    id: 3,
    tags: ['Ritel', 'Strategi Digital'],
    metric: '+36% Retensi Pelanggan',
    title: 'Transformasi Digital dan Integrasi Sistem Menuju Efektivitas Nyata',
    image: imgCase3,
    link: '/case-studies',
  },
]
</script>

<template>
  <section class="cases-section" aria-labelledby="cases-heading">
    <div class="cases-container">
      <!-- Header -->
      <div class="cases-header">
        <div class="cases-header-left">
          <BaseTag variant="default">STUDI KASUS</BaseTag>
          <h2 id="cases-heading" class="cases-heading">
            Solusi Nyata Mendorong Pertumbuhan Bisnis
          </h2>
        </div>
        <div class="cases-header-right">
          <RouterLink to="/case-studies" class="cases-all-link" aria-label="Lihat Semua Studi Kasus">
            <span>Lihat Semua Studi Kasus</span>
            <span class="cases-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Cases Grid -->
      <div class="cases-grid">
        <RouterLink
          v-for="item in cases"
          :key="item.id"
          :to="item.link"
          class="case-card"
          :aria-label="item.title"
        >
          <!-- Image with metric badge -->
          <div class="case-image-wrapper">
            <img :src="item.image" :alt="item.title" class="case-img" loading="lazy" />
            <div class="case-metric-badge">
              <span>{{ item.metric }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="case-content">
            <!-- Tags -->
            <div class="case-tags">
              <span v-for="tag in item.tags" :key="tag" class="case-tag">{{ tag }}</span>
            </div>

            <!-- Title -->
            <h3 class="case-title">{{ item.title }}</h3>

            <!-- Bottom arrow link -->
            <div class="case-footer">
              <span class="case-read-more">Pelajari Studi Kasus</span>
              <span class="case-action-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases-section {
  background-color: var(--color-bg, #f5f7f7);
  padding: 100px 0;
}

.cases-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.cases-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.cases-header-left {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 680px;
}

.cases-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.cases-all-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--color-brand-blue, #0752ff);
  text-decoration: none;
  padding: 10px 18px;
  background: rgba(7, 82, 255, 0.08);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.cases-all-link:hover {
  background: rgba(7, 82, 255, 0.15);
  transform: translateX(3px);
}

.cases-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.cases-all-link:hover .cases-arrow {
  transform: translateX(3px);
}

/* Grid */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.case-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(12, 17, 28, 0.08);
  box-shadow: 0 4px 20px rgba(12, 17, 28, 0.04);
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.case-card:hover {
  box-shadow: 0 16px 36px rgba(12, 17, 28, 0.1);
  transform: translateY(-4px);
  border-color: rgba(7, 82, 255, 0.3);
}

/* Image wrapper */
.case-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: #00121c;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.case-card:hover .case-img {
  transform: scale(1.04);
}

.case-metric-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(14, 40, 93, 0.88);
  backdrop-filter: blur(8px);
  color: #14f3c1;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Content */
.case-content {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
}

.case-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.case-tag {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-teal, #056671);
  background-color: var(--color-teal-light, #ebf4f5);
  padding: 4px 10px;
  border-radius: 6px;
}

.case-title {
  font-family: var(--font-display);
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
  flex: 1;
}

.case-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(12, 17, 28, 0.07);
  margin-top: auto;
}

.case-read-more {
  font-family: var(--font-ui);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-brand-blue, #0752ff);
}

.case-action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(7, 82, 255, 0.08);
  color: var(--color-brand-blue, #0752ff);
  transition: all 0.2s ease;
}

.case-card:hover .case-action-icon {
  background: var(--color-brand-blue, #0752ff);
  color: #ffffff;
  transform: translate(2px, -2px);
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .cases-section {
    padding: 72px 0;
  }

  .cases-container {
    padding: 0 16px;
    gap: 36px;
  }

  .cases-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .cases-all-link {
    width: 100%;
    justify-content: center;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
