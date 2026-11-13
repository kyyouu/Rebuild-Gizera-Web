<script setup>
/**
 * ServicesView — Halaman daftar layanan Gizera (/services).
 *
 * Implementasi Day 9: Services listing page.
 * Menggunakan data dari service layer terpusat.
 *
 * Sections:
 *   1. PageHero    — Header gelap dengan judul & deskripsi
 *   2. Services Grid — Daftar kartu layanan dengan ServiceCard
 *   3. CTA Section — Ajakan konsultasi
 */
import { getAllServices } from '@/services/serviceService.js'
import PageHero from '@/components/shared/PageHero.vue'
import ServiceCard from '@/components/services/ServiceCard.vue'

const services = getAllServices()

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan' },
]
</script>

<template>
  <!-- CATATAN: Tidak ada <main> di sini karena DefaultLayout.vue sudah menyediakan <main> -->

  <!-- 1. Page Hero -->
  <PageHero
    tag="LAYANAN KAMI"
    title="Solusi Terpadu,"
    title-highlight="Layanan Bisnis"
    description="Layanan strategis terpadu yang dirancang untuk menjawab tantangan bisnis, meningkatkan kinerja operasional, dan mengakselerasi pertumbuhan berkelanjutan perusahaan Anda."
    :breadcrumbs="breadcrumbs"
  />

  <!-- 2. Services Grid -->
  <section class="services-list-section" aria-labelledby="services-list-heading">
    <div class="services-list-container">

      <!-- Section Header -->
      <div class="services-list-header">
        <h2 id="services-list-heading" class="services-list-heading">
          5 Pilar Layanan Komprehensif Gizera
        </h2>
        <p class="services-list-subheading">
          Dari strategi hingga eksekusi, kami menghadirkan solusi IT, infrastruktur andal &amp; akselerasi talenta untuk kemajuan bisnis Anda.
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="services-cards-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.slug"
          :service="service"
          variant="default"
        />
      </div>

    </div>
  </section>

  <!-- 3. CTA Section -->
  <section class="services-cta-section" aria-labelledby="services-cta-heading">
    <div class="services-cta-container">
      <div class="services-cta-inner">
        <!-- Left content -->
        <div class="services-cta-content">
          <p class="services-cta-tag">MULAI SEKARANG</p>
          <h2 id="services-cta-heading" class="services-cta-heading">
            Siap Mengakselerasi Bisnis Anda?
          </h2>
          <p class="services-cta-desc">
            Jadwalkan sesi konsultasi awal bersama tim ahli kami untuk mendiskusikan kebutuhan teknologi, operasional, dan strategi pertumbuhan bisnis Anda.
          </p>
        </div>

        <!-- Right CTA buttons -->
        <div class="services-cta-actions">
          <RouterLink to="/contact" class="cta-btn-primary">
            Konsultasi Gratis
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
          <RouterLink to="/case-studies" class="cta-btn-secondary">
            Lihat Studi Kasus
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ============================================================
   SERVICES LIST SECTION
   ============================================================ */
.services-list-section {
  background-color: #00030d;
  padding: 100px 0 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.services-list-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* Header */
.services-list-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 700px;
}

.services-list-heading {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.6vw, 42px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

.services-list-subheading {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

/* Cards Grid — 3 kolom di desktop, 2 tablet, 1 mobile */
.services-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ============================================================
   CTA SECTION
   ============================================================ */
.services-cta-section {
  background-color: #00030d;
  padding: 0 0 120px;
}

.services-cta-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

.services-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding: 56px 64px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(7, 82, 255, 0.12) 0%, rgba(20, 243, 193, 0.06) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
}

/* Left Content */
.services-cta-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.services-cta-tag {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #14f3c1;
  text-transform: uppercase;
  margin: 0;
}

.services-cta-heading {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.services-cta-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 480px;
}

/* Right Actions */
.services-cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.cta-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 16px;
  background-color: #0752ff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(7, 82, 255, 0.35);
}

.cta-btn-primary:hover {
  background-color: #0043d9;
  transform: translateY(-1px);
}

.cta-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 1199px) and (min-width: 810px) {
  .services-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-cta-inner {
    padding: 48px;
    gap: 36px;
  }
}

@media (max-width: 809px) {
  /* List section */
  .services-list-section {
    padding: 72px 0 80px;
  }

  .services-list-container {
    padding: 0 20px;
    gap: 40px;
  }

  .services-cards-grid {
    grid-template-columns: 1fr;
  }

  /* CTA section */
  .services-cta-section {
    padding: 0 0 72px;
  }

  .services-cta-container {
    padding: 0 20px;
  }

  .services-cta-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 28px;
    gap: 32px;
    border-radius: 20px;
  }

  .services-cta-actions {
    width: 100%;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
