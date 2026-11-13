<script setup>
/**
 * AboutView — Halaman Tentang Gizera (/about).
 *
 * Day 10: Implementasi penuh berdasarkan referensi enforceAboutPageHero()
 * dan enforceAboutWhyUsSection() dari Gizera Web index.html.
 *
 * Konten:
 *   - PageHero: "Tentang Gizera®"
 *   - Section: Misi & Deskripsi
 *   - Section: Keunggulan Gizera (4 keunggulan)
 *   - CTA section
 */

import PageHero from '@/components/shared/PageHero.vue'

const breadcrumbs = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami' },
]

const advantages = [
  {
    title: 'Solusi Terpersonalisasi',
    body: 'Tidak ada bisnis yang identik. Setiap arsitektur sistem dirancang khusus mengikuti model operasional, target skala bisnis, dan keunikan industri Anda.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Dampak Bisnis Terukur',
    body: 'Setiap strategi teknologi yang kami rekomendasikan ditujukan langsung untuk meningkatkan efisiensi operasional, profitabilitas, dan kejelasan arah bisnis.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Eksekusi Praktis & Solid',
    body: 'Kami mengatasi kompleksitas sistem dengan struktur terencana dan langkah implementasi nyata yang dapat dijalankan tim Anda secara percaya diri.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
  {
    title: 'Kemitraan Jangka Panjang',
    body: 'Dukungan kami melampaui fase peluncuran produk; kami mendampingi adaptasi inovasi dan evolusi sistem digital Anda secara berkesinambungan.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#14f3c1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
]
</script>

<template>
  <!-- PageHero -->
  <PageHero
    tag="TENTANG KAMI"
    title="Tentang "
    title-highlight="Gizera®"
    description="Mitra terpercaya yang menghadirkan solusi teknologi terintegrasi dan strategi SDM untuk mengakselerasi pertumbuhan bisnis."
    :breadcrumbs="breadcrumbs"
  />

  <!-- Section: Misi -->
  <section class="about-mission" aria-labelledby="mission-heading">
    <div class="about-container">
      <div class="mission-grid">
        <div class="mission-left">
          <p class="mission-eyebrow">MISI KAMI</p>
          <h2 id="mission-heading" class="mission-heading">
            Kami memadukan visi strategis, keahlian arsitektur teknologi, dan eksekusi praktis untuk mengantarkan bisnis Anda mencapai pertumbuhan nyata.
          </h2>
        </div>
        <div class="mission-right">
          <p class="mission-body">
            Gizera adalah mitra transformasi digital dan konsultansi SDM yang berdedikasi membantu perusahaan menavigasi kompleksitas teknologi modern. Kami percaya bahwa teknologi yang tepat, diterapkan dengan strategi yang cermat, adalah katalis pertumbuhan bisnis yang sesungguhnya.
          </p>
          <p class="mission-body">
            Dengan pendekatan yang terintegrasi — mulai dari arsitektur sistem, pengembangan perangkat lunak, hingga penguatan kapabilitas sumber daya manusia — kami mendampingi organisasi dari berbagai sektor untuk bertransformasi secara nyata dan berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section: Keunggulan Gizera -->
  <section class="about-advantages" aria-labelledby="advantages-heading">
    <div class="about-container">
      <div class="advantages-header">
        <p class="advantages-eyebrow">KEUNGGULAN GIZERA</p>
        <h2 id="advantages-heading" class="advantages-heading">
          Keunggulan Berkolaborasi Bersama Gizera
        </h2>
        <p class="advantages-subheading">
          Kami memadukan visi strategis, keahlian arsitektur teknologi mutakhir, dan eksekusi praktis untuk mengantarkan bisnis Anda mencapai pertumbuhan nyata.
        </p>
      </div>

      <div class="advantages-grid" role="list">
        <article
          v-for="(adv, idx) in advantages"
          :key="idx"
          class="advantage-card"
          role="listitem"
        >
          <div class="advantage-icon" v-html="adv.icon" />
          <h3 class="advantage-title">{{ adv.title }}</h3>
          <p class="advantage-body">{{ adv.body }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Section: CTA -->
  <section class="about-cta" aria-label="Ajakan konsultasi">
    <div class="about-container">
      <div class="about-cta-inner">
        <div class="about-cta-content">
          <h2 class="about-cta-heading">Siap Bertransformasi Bersama Gizera?</h2>
          <p class="about-cta-desc">
            Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami dan temukan solusi yang tepat untuk akselerasi pertumbuhan organisasi Anda.
          </p>
        </div>
        <div class="about-cta-actions">
          <RouterLink to="/contact" class="cta-btn-primary">
            Mulai Konsultasi
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </RouterLink>
          <RouterLink to="/services" class="cta-btn-secondary">
            Lihat Layanan
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Container ── */
.about-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Mission Section ── */
.about-mission {
  background-color: #00030d;
  padding: 96px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.mission-eyebrow {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #14f3c1;
  text-transform: uppercase;
  margin: 0 0 24px;
}

.mission-heading {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.8vw, 32px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
}

.mission-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
}

.mission-body {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ── Advantages Section ── */
.about-advantages {
  background-color: #00030d;
  padding: 96px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.advantages-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.advantages-eyebrow {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #14f3c1;
  text-transform: uppercase;
  margin: 0;
}

.advantages-heading {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.advantages-subheading {
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.advantage-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.advantage-card:hover {
  border-color: rgba(20, 243, 193, 0.2);
  background: rgba(20, 243, 193, 0.03);
}

.advantage-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(20, 243, 193, 0.08);
  border: 1px solid rgba(20, 243, 193, 0.15);
  flex-shrink: 0;
}

.advantage-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: #ffffff;
  margin: 0;
}

.advantage-body {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ── CTA Section ── */
.about-cta {
  background: linear-gradient(135deg, rgba(7, 82, 255, 0.12) 0%, rgba(20, 243, 193, 0.06) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 96px 0;
}

.about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.about-cta-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.about-cta-heading {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0;
}

.about-cta-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 480px;
}

.about-cta-actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.cta-btn-primary {
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

.cta-btn-primary:hover {
  background-color: #0043d9;
  transform: translateY(-1px);
}

.cta-btn-secondary {
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

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .mission-grid {
    gap: 48px;
  }
  .about-cta-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
}

@media (max-width: 809px) {
  .about-container {
    padding: 0 20px;
  }

  .about-mission,
  .about-advantages {
    padding: 64px 0;
  }

  .about-cta {
    padding: 64px 0;
  }

  .mission-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .mission-right {
    padding-top: 0;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .about-cta-actions {
    width: 100%;
    flex-direction: column;
  }

  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
