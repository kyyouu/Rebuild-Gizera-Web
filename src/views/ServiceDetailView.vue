<script setup>
/**
 * ServiceDetailView — Halaman detail layanan Gizera (/services/:slug).
 *
 * Implementasi Day 9: Service detail page dengan dynamic routing.
 * Data diambil dari service layer berdasarkan slug dari route.
 *
 * - Redirect ke NotFoundView jika slug tidak ditemukan
 * - Navigasi prev/next antar layanan
 * - Tombol kembali ke /services
 */
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getAllServices, getServiceBySlug } from '@/services/serviceService.js'
import PageHero from '@/components/shared/PageHero.vue'

const route  = useRoute()
const router = useRouter()

// Ambil data layanan berdasarkan slug
const service = computed(() => getServiceBySlug(route.params.slug))

// Semua layanan untuk daftar sidebar — digunakan untuk highlight current
const allServices = getAllServices()

// Breadcrumbs
const breadcrumbs = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/services' },
  { label: service.value?.title ?? '' },
])

// Redirect ke 404 jika slug tidak ada
if (!service.value) {
  router.replace({ name: 'not-found' })
}
</script>

<template>
  <!-- Guard: hanya render jika service ditemukan -->
  <template v-if="service">

    <!-- 1. Page Hero -->
    <PageHero
      tag="LAYANAN KAMI"
      :title="service.title"
      :description="service.tagline"
      :breadcrumbs="breadcrumbs"
    />

    <!-- 2. Main Content -->
    <article class="detail-wrap" :aria-label="`Detail layanan ${service.title}`">
      <div class="detail-container">

        <!-- Back link -->
        <div class="detail-back-wrap">
          <RouterLink to="/services" class="detail-back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Kembali ke Semua Layanan
          </RouterLink>
        </div>

        <!-- Two-column layout: Sidebar + Main -->
        <div class="detail-layout">

          <!-- Sidebar: Daftar semua layanan (sticky) dengan current di-highlight -->
          <aside class="detail-sidebar" aria-label="Navigasi semua layanan">
            <p class="sidebar-label">Semua Layanan</p>
            <nav aria-label="Daftar layanan">
              <RouterLink
                v-for="svc in allServices"
                :key="svc.slug"
                :to="`/services/${svc.slug}`"
                class="sidebar-nav-link"
                :class="{ 'sidebar-nav-link--active': svc.slug === route.params.slug }"
                :aria-label="`Lihat layanan ${svc.title}`"
                :aria-current="svc.slug === route.params.slug ? 'page' : undefined"
              >
                <span class="sidebar-nav-icon" v-html="svc.icon" aria-hidden="true" />
                <span>{{ svc.title }}</span>
              </RouterLink>
            </nav>

            <!-- Sidebar CTA -->
            <div class="sidebar-cta-wrap">
              <p class="sidebar-cta-label">Siap memulai?</p>
              <RouterLink to="/contact" class="sidebar-cta-btn">
                Konsultasi Gratis
              </RouterLink>
            </div>
          </aside>

          <!-- Main content -->
          <div class="detail-main">

            <!-- Gambaran Umum -->
            <section class="detail-section" aria-labelledby="overview-heading">
              <h2 id="overview-heading" class="detail-section-heading">Gambaran Umum</h2>
              <div class="detail-prose">
                <p
                  v-for="(para, idx) in service.overview"
                  :key="`overview-${idx}`"
                  class="detail-paragraph"
                >
                  {{ para }}
                </p>
              </div>
            </section>

            <!-- Service Image (opsional, tampil jika tersedia) -->
            <div v-if="service.image" class="detail-service-image-wrap">
              <img
                :src="service.image"
                :alt="`Ilustrasi layanan ${service.title}`"
                class="detail-service-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="detail-divider" />

            <!-- Layanan Kami (scope) -->
            <section class="detail-section" aria-labelledby="scope-heading">
              <h2 id="scope-heading" class="detail-section-heading">Layanan Kami</h2>
              <div class="detail-prose">
                <p class="detail-paragraph">{{ service.scope.intro }}</p>
                <ul class="detail-list" role="list">
                  <li
                    v-for="(item, idx) in service.scope.items"
                    :key="`scope-${idx}`"
                    class="detail-list-item"
                  >
                    <span class="detail-list-bullet" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
                <p class="detail-paragraph detail-paragraph--muted">{{ service.scope.footer }}</p>
              </div>
            </section>

            <div class="detail-divider" />

            <!-- Pendekatan Kami -->
            <section class="detail-section" aria-labelledby="approach-heading">
              <h2 id="approach-heading" class="detail-section-heading">Pendekatan Kami</h2>
              <div class="detail-prose">
                <p
                  v-for="(para, idx) in service.approach"
                  :key="`approach-${idx}`"
                  class="detail-paragraph"
                >
                  {{ para }}
                </p>
              </div>
            </section>

            <div class="detail-divider" />

            <!-- Mengapa Ini Penting -->
            <section class="detail-section" aria-labelledby="why-heading">
              <h2 id="why-heading" class="detail-section-heading">Mengapa Ini Penting</h2>
              <div class="detail-prose">
                <p
                  v-for="(para, idx) in service.whyImportant"
                  :key="`why-${idx}`"
                  class="detail-paragraph"
                >
                  {{ para }}
                </p>
              </div>
            </section>

            <div class="detail-divider" />

            <!-- Hasil yang Dapat Anda Harapkan -->
            <section class="detail-section" aria-labelledby="results-heading">
              <h2 id="results-heading" class="detail-section-heading">Hasil yang Dapat Anda Harapkan</h2>
              <div class="detail-prose">
                <p class="detail-paragraph">{{ service.results.intro }}</p>
                <ul class="detail-list" role="list">
                  <li
                    v-for="(item, idx) in service.results.items"
                    :key="`result-${idx}`"
                    class="detail-list-item"
                  >
                    <span class="detail-list-bullet" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </section>

          </div>
          <!-- end detail-main -->

        </div>
        <!-- end detail-layout -->
      </div>
      <!-- end detail-container -->

      <!-- Bottom CTA Banner -->
      <div class="detail-cta-banner">
        <div class="detail-cta-inner">
          <div class="detail-cta-content">
            <h2 class="detail-cta-heading">
              Siap Bermitra dengan Gizera?
            </h2>
            <p class="detail-cta-desc">
              Diskusikan kebutuhan {{ service.title }} bisnis Anda bersama tim konsultan kami.
            </p>
          </div>
          <div class="detail-cta-actions">
            <RouterLink to="/contact" class="detail-cta-btn-primary">
              Hubungi Kami
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
            <RouterLink to="/services" class="detail-cta-btn-secondary">
              Lihat Semua Layanan
            </RouterLink>
          </div>
        </div>
      </div>

    </article>

  </template>
  <!-- Guard: null-state (redirect sedang berjalan) -->
  <template v-else>
    <div class="detail-loading" aria-live="polite" aria-label="Memuat...">
      <span>Memuat...</span>
    </div>
  </template>
</template>

<style scoped>
/* ── Wrapper ── */
.detail-wrap {
  background-color: #00030d;
  padding-bottom: 0;
}

/* ── Container ── */
.detail-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 32px 100px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* ── Back link ── */
.detail-back-wrap {
  display: flex;
  align-items: center;
}

.detail-back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.15s ease;
  padding: 6px 0;
}

.detail-back-link:hover {
  color: rgba(255, 255, 255, 0.85);
}

/* ── Two-column layout ── */
.detail-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 60px;
  align-items: start;
}

/* ── Sidebar ── */
.detail-sidebar {
  position: sticky;
  top: 88px; /* navbar 64px + 24px breathing room */
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-label {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  margin: 0;
}

.sidebar-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  font-family: var(--font-ui);
  font-size: 13.5px;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-bottom: 8px;
}

.sidebar-nav-link:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

/* Active state: layanan yang sedang dibuka */
.sidebar-nav-link--active {
  background: rgba(20, 243, 193, 0.08);
  border-color: rgba(20, 243, 193, 0.25);
  color: #ffffff;
  pointer-events: none;
}

.sidebar-nav-link--active .sidebar-nav-icon {
  color: #14f3c1;
}

.sidebar-nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #14f3c1;
}

.sidebar-nav-icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.sidebar-cta-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(7, 82, 255, 0.1);
  border: 1px solid rgba(7, 82, 255, 0.2);
}

.sidebar-cta-label {
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.sidebar-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  border-radius: 12px;
  background-color: #0752ff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.sidebar-cta-btn:hover {
  background-color: #0043d9;
}

/* ── Main Content ── */
.detail-main {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Service image */
.detail-service-image-wrap {
  margin: 0 0 0;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.detail-service-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.detail-section {
  padding: 40px 0;
}

.detail-section-heading {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0 0 20px;
}

.detail-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.07);
}

.detail-prose {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.detail-paragraph {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
}

.detail-paragraph--muted {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  font-size: 14.5px;
}

/* List */
.detail-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
}

.detail-list-bullet {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-top: 3px;
  color: #14f3c1;
}

/* ── Bottom CTA Banner ── */
.detail-cta-banner {
  background: linear-gradient(135deg, rgba(7, 82, 255, 0.15) 0%, rgba(20, 243, 193, 0.08) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 72px 32px;
}

.detail-cta-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.detail-cta-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.detail-cta-heading {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.detail-cta-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 480px;
}

.detail-cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.detail-cta-btn-primary {
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
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(7, 82, 255, 0.35);
}

.detail-cta-btn-primary:hover {
  background-color: #0043d9;
  transform: translateY(-1px);
}

.detail-cta-btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 12px 26px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-ui);
  font-size: 14.5px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.detail-cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

/* ── Loading State ── */
.detail-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-family: var(--font-ui);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  background-color: #00030d;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .detail-layout {
    grid-template-columns: 220px 1fr;
    gap: 40px;
  }
}

@media (max-width: 809px) {
  .detail-container {
    padding: 40px 20px 72px;
    gap: 32px;
  }

  .detail-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  /* Sidebar di mobile: tampilkan di atas konten, tanpa sticky */
  .detail-sidebar {
    position: static;
    top: auto;
    order: 2; /* Pindahkan sidebar ke bawah konten di mobile */
    padding-top: 48px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    margin-top: 32px;
  }

  .detail-main {
    order: 1;
  }

  .detail-cta-banner {
    padding: 56px 20px;
  }

  .detail-cta-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .detail-cta-actions {
    width: 100%;
    flex-direction: column;
  }

  .detail-cta-btn-primary,
  .detail-cta-btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>

