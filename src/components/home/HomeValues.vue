<script setup>
/**
 * HomeValues — "Nilai Kami" (Our Values) section.
 *
 * Synchronized with Gizera Web reference:
 *   - Tag "NILAI KAMI"
 *   - H2: "Prinsip Utama Landasan Kerja Kami"
 *   - Subtitle: "Pendekatan kami berlandaskan transparansi, akuntabilitas, dan solusi praktis—membantu bisnis Anda bertumbuh dengan keputusan yang tepat."
 *   - 4 authentic principles:
 *     1. Prioritas Mitra Bisnis
 *     2. Keberlanjutan Nilai
 *     3. Pemberdayaan Bersama
 *     4. Keputusan Berbasis Data
 */
import BaseTag from '@/components/base/BaseTag.vue'

const values = [
  {
    id: 1,
    number: '01',
    title: 'Prioritas Mitra Bisnis',
    desc: 'Kami menempatkan visi bisnis Anda sebagai pusat inovasi, menghadirkan sistem dan strategi kerja yang adaptif bagi industri.',
  },
  {
    id: 2,
    number: '02',
    title: 'Keberlanjutan Nilai',
    desc: 'Membangun fondasi digital dan efisiensi operasional yang andal, menciptakan dampak positif yang bertahan lama bagi perusahaan.',
  },
  {
    id: 3,
    number: '03',
    title: 'Pemberdayaan Bersama',
    desc: 'Bekerja berdampingan untuk mengakselerasi potensi SDM Anda, menjawab setiap kendala organisasi dengan langkah praktis dan solutif.',
  },
  {
    id: 4,
    number: '04',
    title: 'Keputusan Berbasis Data',
    desc: 'Menghadirkan analisis mendalam, audit sistem yang akurat, serta kerangka kerja objektif untuk mendukung langkah strategis Anda.',
  },
]
</script>

<template>
  <section class="values-section" aria-labelledby="values-heading">
    <div class="values-container">
      <!-- Header -->
      <div class="values-header">
        <BaseTag variant="dark">NILAI KAMI</BaseTag>
        <h2 id="values-heading" class="values-heading">
          Prinsip Utama Landasan Kerja Kami
        </h2>
        <p class="values-subtitle">
          Pendekatan kami berlandaskan transparansi, akuntabilitas, dan solusi praktis—membantu bisnis Anda bertumbuh dengan keputusan yang tepat.
        </p>
      </div>

      <!-- Values grid -->
      <div class="values-grid">
        <article
          v-for="value in values"
          :key="value.id"
          class="value-card"
        >
          <div class="value-card-top">
            <span class="value-number">{{ value.number }}</span>
            <span class="value-badge-dot"></span>
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-desc">{{ value.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.values-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.values-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  max-width: 720px;
}

.values-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

.values-subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

/* Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.value-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.25s ease;
}

.value-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.value-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.value-number {
  font-family: var(--font-ui);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #14f3c1;
}

.value-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.value-title {
  font-family: var(--font-display);
  font-size: clamp(19px, 2.2vw, 22px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 0;
}

.value-desc {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 809px) {
  .values-section {
    padding: 72px 0;
  }

  .values-container {
    padding: 0 16px;
    gap: 40px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
