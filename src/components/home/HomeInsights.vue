<script setup>
/**
 * HomeInsights — "Wawasan Terkini & Tren Teknologi" (Blog Section)
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "ARTIKEL"
 *   - H2: "Wawasan Terkini & Tren Teknologi"
 *   - CTA: "Lihat Semua Artikel" -> /blogs
 *   - 3 authentic articles from reference:
 *     1. Strategi Mengoptimalkan Keamanan Jaringan dan Data Perusahaan (Sep 7, 2026 | Kecerdasan Bisnis)
 *     2. Langkah Praktis Migrasi Cloud & Modernisasi Sistem Enterprise (May 4, 2026 | Talenta)
 *     3. Pentingnya Menyelaraskan IT & Budaya Kerja untuk Efisiensi Bisnis (Jun 6, 2026 | Talenta)
 */
import BaseTag from '@/components/base/BaseTag.vue'

import imgBlog1 from '@/assets/images/wkOJOAB6EZbnGOAbR8sXODA7Aqg.webp'
import imgBlog2 from '@/assets/images/yxmyu5Z2EHxPHuNsxkR7JgEIq8.webp'
import imgBlog3 from '@/assets/images/4xk7QexR6j586LAcaalsJREoaM.webp'

const articles = [
  {
    id: 1,
    date: 'Sep 7, 2026',
    category: 'Kecerdasan Bisnis',
    title: 'Strategi Mengoptimalkan Keamanan Jaringan dan Data Perusahaan',
    image: imgBlog1,
    link: '/blogs',
  },
  {
    id: 2,
    date: 'May 4, 2026',
    category: 'Talenta',
    title: 'Langkah Praktis Migrasi Cloud & Modernisasi Sistem Enterprise',
    image: imgBlog2,
    link: '/blogs',
  },
  {
    id: 3,
    date: 'Jun 6, 2026',
    category: 'Talenta',
    title: 'Pentingnya Menyelaraskan IT & Budaya Kerja untuk Efisiensi Bisnis',
    image: imgBlog3,
    link: '/blogs',
  },
]
</script>

<template>
  <section class="insights-section" aria-labelledby="insights-heading">
    <div class="insights-container">
      <!-- Header -->
      <div class="insights-header">
        <div class="insights-header-left">
          <BaseTag variant="default">ARTIKEL</BaseTag>
          <h2 id="insights-heading" class="insights-heading">
            Wawasan Terkini &amp; Tren Teknologi
          </h2>
        </div>
        <div class="insights-header-right">
          <RouterLink to="/blogs" class="insights-all-link" aria-label="Lihat Semua Artikel Gizera">
            <span>Lihat Semua Artikel</span>
            <span class="insights-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="insights-grid">
        <RouterLink
          v-for="article in articles"
          :key="article.id"
          :to="article.link"
          class="insight-card"
          :aria-label="article.title"
        >
          <!-- Image -->
          <div class="insight-image-box">
            <img :src="article.image" :alt="article.title" class="insight-img" loading="lazy" />
          </div>

          <!-- Content -->
          <div class="insight-content">
            <div class="insight-meta">
              <span class="insight-date">{{ article.date }}</span>
              <span class="insight-meta-dot">•</span>
              <span class="insight-category">{{ article.category }}</span>
            </div>
            <h3 class="insight-title">{{ article.title }}</h3>
            <div class="insight-footer">
              <span class="insight-read">Baca Artikel</span>
              <span class="insight-icon" aria-hidden="true">
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
.insights-section {
  background-color: var(--color-bg, #f5f7f7);
  padding: 100px 0;
}

.insights-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.insights-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.insights-header-left {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 680px;
}

.insights-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.insights-all-link {
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

.insights-all-link:hover {
  background: rgba(7, 82, 255, 0.15);
  transform: translateX(3px);
}

.insights-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.insights-all-link:hover .insights-arrow {
  transform: translateX(3px);
}

/* Grid */
.insights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.insight-card {
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

.insight-card:hover {
  box-shadow: 0 16px 36px rgba(12, 17, 28, 0.1);
  transform: translateY(-4px);
  border-color: rgba(7, 82, 255, 0.3);
}

.insight-image-box {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #00121c;
}

.insight-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.insight-card:hover .insight-img {
  transform: scale(1.04);
}

.insight-content {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 14px;
}

.insight-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--color-text-secondary, #51555e);
}

.insight-category {
  font-weight: 600;
  color: var(--color-teal, #056671);
}

.insight-title {
  font-family: var(--font-display);
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
  flex: 1;
}

.insight-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(12, 17, 28, 0.07);
  margin-top: auto;
}

.insight-read {
  font-family: var(--font-ui);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-brand-blue, #0752ff);
}

.insight-icon {
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

.insight-card:hover .insight-icon {
  background: var(--color-brand-blue, #0752ff);
  color: #ffffff;
  transform: translate(2px, -2px);
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .insights-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .insights-section {
    padding: 72px 0;
  }

  .insights-container {
    padding: 0 16px;
    gap: 36px;
  }

  .insights-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .insights-all-link {
    width: 100%;
    justify-content: center;
  }

  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style>

