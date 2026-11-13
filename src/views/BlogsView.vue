<script setup>
/**
 * BlogsView — Halaman daftar artikel Gizera (/blogs).
 *
 * Day 10: Implementasi penuh berdasarkan referensi enforceBlogsPageHero()
 * dan blogCardMappings dari Gizera Web index.html (lines 3585–3693).
 *
 * Konten:
 *   - PageHero: "Artikel & Wawasan"
 *   - Grid 5 artikel dengan kategori
 *   - CTA section
 */

import PageHero from '@/components/shared/PageHero.vue'
import { getAllBlogs } from '@/services/blogService.js'

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Artikel & Wawasan' },
]

const blogs = getAllBlogs()

// Warna kategori
const categoryColors = {
  'Kecerdasan Bisnis': '#0752ff',
  'Kepemimpinan Digital': '#14f3c1',
  'Pengembangan Organisasi & SDM': '#a855f7',
  'Operasional & Sistem': '#f59e0b',
}

function getCategoryColor(category) {
  return categoryColors[category] ?? '#14f3c1'
}
</script>

<template>
  <!-- PageHero -->
  <PageHero
    tag="ARTIKEL"
    title="Artikel & "
    title-highlight="Wawasan"
    description="Wawasan mendalam dan tren seputar transformasi digital, konsultasi IT, serta penguatan organisasi bisnis."
    :breadcrumbs="breadcrumbs"
  />

  <!-- Blog Listing -->
  <section class="blogs-section" aria-labelledby="blogs-heading">
    <div class="blogs-container">

      <h2 id="blogs-heading" class="sr-only">Daftar Artikel</h2>

      <!-- Featured Article (artikel pertama) -->
      <article class="blog-featured" aria-label="Artikel unggulan">
        <div class="blog-featured-content">
          <div class="blog-meta">
            <span
              class="blog-category"
              :style="{ backgroundColor: getCategoryColor(blogs[0].category) + '1a', color: getCategoryColor(blogs[0].category), borderColor: getCategoryColor(blogs[0].category) + '33' }"
            >
              {{ blogs[0].category }}
            </span>
            <span class="blog-read-time">{{ blogs[0].readTime }}</span>
          </div>
          <h3 class="blog-featured-title">{{ blogs[0].title }}</h3>
          <p class="blog-featured-overview">{{ blogs[0].overview }}</p>
          <RouterLink
            :to="`/blogs/${blogs[0].slug}`"
            class="blog-read-more"
            :aria-label="`Baca artikel: ${blogs[0].title}`"
          >
            Baca Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </div>
        <div class="blog-featured-visual" aria-hidden="true">
          <div class="blog-featured-pattern">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="120" stroke="rgba(7,82,255,0.15)" stroke-width="1"/>
              <circle cx="200" cy="150" r="80" stroke="rgba(20,243,193,0.1)" stroke-width="1"/>
              <circle cx="200" cy="150" r="40" fill="rgba(7,82,255,0.08)"/>
              <line x1="80" y1="150" x2="320" y2="150" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
              <line x1="200" y1="30" x2="200" y2="270" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            </svg>
          </div>
        </div>
      </article>

      <!-- Divider -->
      <div class="blogs-divider" aria-hidden="true" />

      <!-- Article Grid (artikel 2-5) -->
      <div class="blogs-grid" role="list">
        <article
          v-for="blog in blogs.slice(1)"
          :key="blog.slug"
          class="blog-card"
          role="listitem"
        >
          <div class="blog-card-meta">
            <span
              class="blog-category"
              :style="{ backgroundColor: getCategoryColor(blog.category) + '1a', color: getCategoryColor(blog.category), borderColor: getCategoryColor(blog.category) + '33' }"
            >
              {{ blog.category }}
            </span>
            <span class="blog-read-time">{{ blog.readTime }}</span>
          </div>
          <h3 class="blog-card-title">{{ blog.title }}</h3>
          <p class="blog-card-overview">{{ blog.overview }}</p>
          <RouterLink
            :to="`/blogs/${blog.slug}`"
            class="blog-read-more"
            :aria-label="`Baca artikel: ${blog.title}`"
          >
            Baca Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
        </article>
      </div>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="blogs-cta" aria-label="Ajakan konsultasi">
    <div class="blogs-container">
      <div class="blogs-cta-inner">
        <div class="blogs-cta-content">
          <h2 class="blogs-cta-heading">Siap Mendiskusikan Transformasi Bisnis Anda?</h2>
          <p class="blogs-cta-desc">Hubungi tim konsultan Gizera untuk solusi yang disesuaikan dengan kebutuhan unik organisasi Anda.</p>
        </div>
        <RouterLink to="/contact" class="blogs-cta-btn">
          Mulai Konsultasi
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Visually hidden (SR only) ── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ── Container ── */
.blogs-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Section ── */
.blogs-section {
  background-color: #00030d;
  padding: 96px 0;
}

/* ── Featured Article ── */
.blog-featured {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 64px;
  align-items: center;
  margin-bottom: 0;
}

.blog-featured-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-meta,
.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.blog-category {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  border: 1px solid;
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.blog-read-time {
  font-family: var(--font-ui);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
}

.blog-featured-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.blog-featured-overview {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 540px;
}

.blog-read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 13.5px;
  font-weight: 600;
  color: #14f3c1;
  text-decoration: none;
  transition: gap 0.2s ease, opacity 0.2s ease;
  width: fit-content;
}

.blog-read-more:hover {
  gap: 12px;
  opacity: 0.85;
}

.blog-featured-visual {
  position: relative;
  height: 280px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-featured-pattern {
  width: 100%;
  height: 100%;
}

/* ── Divider ── */
.blogs-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
  margin: 64px 0;
}

/* ── Article Grid ── */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.blog-card:hover {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
}

.blog-card-title {
  font-family: var(--font-display);
  font-size: clamp(17px, 1.8vw, 20px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.015em;
  color: #ffffff;
  margin: 0;
}

.blog-card-overview {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── CTA Section ── */
.blogs-cta {
  background: linear-gradient(135deg, rgba(7, 82, 255, 0.12) 0%, rgba(20, 243, 193, 0.06) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 80px 0;
}

.blogs-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.blogs-cta-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.blogs-cta-heading {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.8vw, 34px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.blogs-cta-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 480px;
}

.blogs-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 16px;
  background-color: #0752ff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(7, 82, 255, 0.35);
}

.blogs-cta-btn:hover {
  background-color: #0043d9;
  transform: translateY(-1px);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .blog-featured {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .blog-featured-visual {
    height: 220px;
  }
}

@media (max-width: 809px) {
  .blogs-container {
    padding: 0 20px;
  }

  .blogs-section {
    padding: 64px 0;
  }

  .blogs-grid {
    grid-template-columns: 1fr;
  }

  .blogs-divider {
    margin: 48px 0;
  }

  .blogs-cta {
    padding: 64px 0;
  }

  .blogs-cta-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .blogs-cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
