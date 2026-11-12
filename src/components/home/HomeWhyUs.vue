<script setup>
/**
 * HomeWhyUs — "Mengapa Bisnis Memilih Gizera" (Comparison Section).
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "PERBEDAAN KAMI"
 *   - H2: "Mengapa Bisnis Memilih Gizera"
 *   - Direct 2-column comparison structure:
 *     1. Vendor Konvensional (5 points)
 *     2. Bersama Gizera (5 points, highlighted)
 *   - 4 authentic key metrics:
 *     - 150+ Klien & Proyek Selesai
 *     - 10+ Tahun Pengalaman
 *     - 99% Kepuasan Klien
 *     - 50+ Tenaga Ahli Profesional
 */
import BaseTag from '@/components/base/BaseTag.vue'

const conventionalPoints = [
  'Solusi umum tanpa kustomisasi kebutuhan riil bisnis',
  'Laporan panjang tanpa panduan eksekusi yang praktis',
  'Dukungan terhenti begitu implementasi awal selesai',
  'Keberhasilan dinilai dari serah terima dokumen semata',
  'Penanganan reaktif yang hanya menyelesaikan gejala luar',
]

const gizeraPoints = [
  'Solusi sistem dan talenta dirancang khusus sesuai bisnis Anda',
  'Panduan dan implementasi teknis yang siap diaplikasikan langsung',
  'Pendampingan dan dukungan teknis berkelanjutan purna-proyek',
  'Kinerja diukur dari stabilitas sistem dan hasil bisnis nyata',
  'Kemitraan jangka panjang berfokus pada pertumbuhan berkelanjutan',
]

const stats = [
  { value: '150+', label: 'Klien & Proyek Selesai' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '99%', label: 'Kepuasan Klien' },
  { value: '50+', label: 'Tenaga Ahli Profesional' },
]
</script>

<template>
  <section class="why-section" aria-labelledby="why-heading">
    <div class="why-container">
      <!-- Header -->
      <div class="why-header">
        <BaseTag variant="dark">PERBEDAAN KAMI</BaseTag>
        <h2 id="why-heading" class="why-heading">
          Mengapa Bisnis Memilih Gizera
        </h2>
      </div>

      <!-- Comparison Cards -->
      <div class="comparison-grid">
        <!-- Column 1: Vendor Konvensional -->
        <div class="comparison-card comparison-card--conventional">
          <div class="card-badge card-badge--neutral">
            <span>Metode Lama</span>
          </div>
          <h3 class="card-title">Vendor Konvensional</h3>
          <p class="card-intro">
            Banyak layanan sebatas memberikan dokumen rekomendasi, namun minim pendampingan teknis saat eksekusi dan pemeliharaan.
          </p>
          <ul class="points-list" role="list">
            <li v-for="(point, idx) in conventionalPoints" :key="'c-' + idx" class="point-item">
              <span class="point-icon point-icon--cross" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="point-text">{{ point }}</span>
            </li>
          </ul>
        </div>

        <!-- Column 2: Bersama Gizera (Highlighted) -->
        <div class="comparison-card comparison-card--gizera">
          <div class="card-badge card-badge--highlight">
            <span class="badge-dot"></span>
            <span>Standar Gizera</span>
          </div>
          <h3 class="card-title card-title--bright">Bersama Gizera</h3>
          <p class="card-intro card-intro--bright">
            Kami memadukan konsultasi strategis dengan eksekusi teknis langsung untuk menciptakan pertumbuhan bisnis yang terukur dan berkesinambungan.
          </p>
          <ul class="points-list" role="list">
            <li v-for="(point, idx) in gizeraPoints" :key="'g-' + idx" class="point-item">
              <span class="point-icon point-icon--check" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="point-text point-text--bright">{{ point }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Key Metrics Row -->
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.why-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* Header */
.why-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  max-width: 680px;
}

.why-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

/* Comparison Cards Grid */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.comparison-card {
  border-radius: 24px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  transition: transform 0.25s ease;
}

.comparison-card:hover {
  transform: translateY(-3px);
}

/* Conventional Card */
.comparison-card--conventional {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Gizera Card */
.comparison-card--gizera {
  background: linear-gradient(180deg, rgba(7, 82, 255, 0.12) 0%, rgba(14, 40, 93, 0.25) 100%);
  border: 1px solid rgba(7, 82, 255, 0.4);
  box-shadow: 0 16px 40px rgba(0, 94, 255, 0.15);
}

/* Badges */
.card-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 100px;
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}

.card-badge--neutral {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-badge--highlight {
  background: rgba(20, 243, 193, 0.12);
  color: #14f3c1;
  border: 1px solid rgba(20, 243, 193, 0.3);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #14f3c1;
  box-shadow: 0 0 6px #14f3c1;
}

/* Titles */
.card-title {
  font-family: var(--font-display);
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 500;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.card-title--bright {
  color: #ffffff;
}

/* Intros */
.card-intro {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

.card-intro--bright {
  color: rgba(255, 255, 255, 0.8);
}

/* Points list */
.points-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.point-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.point-icon--cross {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.4);
}

.point-icon--check {
  background: rgba(20, 243, 193, 0.18);
  color: #14f3c1;
}

.point-text {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.6);
}

.point-text--bright {
  color: #ffffff;
  font-weight: 450;
}

/* Stats Row */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.stat-value {
  font-family: var(--font-display);
  font-size: clamp(32px, 3.5vw, 44px);
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.03em;
}

.stat-label {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.55);
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .why-section {
    padding: 72px 0;
  }

  .why-container {
    padding: 0 16px;
    gap: 40px;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .comparison-card {
    padding: 28px 20px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-card {
    padding: 18px 12px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-label {
    font-size: 12px;
  }
}
</style>
