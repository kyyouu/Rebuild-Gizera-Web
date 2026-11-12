<script setup>
/**
 * HomeIndustries — "Sektor Industri Klien" section.
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "SEKTOR INDUSTRI KLIEN"
 *   - H2: Sektor Industri yang Kami Dukung
 *   - 6 authentic industry categories with interactive tabs & descriptions:
 *     1. Keuangan & Perbankan
 *     2. Kesehatan & Farmasi
 *     3. Properti & Konstruksi
 *     4. Teknologi & Startup
 *     5. Layanan Profesional
 *     6. Ritel & Konsumen
 *   - Visual image asset: MDhZ9e6QV3i37FZE4zgwBgZLclo.webp
 */
import { ref } from 'vue'
import BaseTag from '@/components/base/BaseTag.vue'
import industryVisualImg from '@/assets/images/MDhZ9e6QV3i37FZE4zgwBgZLclo.webp'

const industries = [
  {
    id: 1,
    tag: 'Keuangan',
    name: 'Keuangan & Perbankan',
    desc: 'Mendukung institusi finansial dan perbankan melalui transformasi sistem informasi, kepatuhan keamanan data, dan infrastruktur IT berkinerja tinggi.',
  },
  {
    id: 2,
    tag: 'Kesehatan',
    name: 'Kesehatan & Farmasi',
    desc: 'Mendukung organisasi kesehatan dan farmasi meningkatkan efisiensi operasional, integrasi rekam medis digital, dan keandalan sistem layanan pasien.',
  },
  {
    id: 3,
    tag: 'Properti',
    name: 'Properti & Konstruksi',
    desc: 'Membantu perusahaan properti dan konstruksi mengoptimalkan pengelolaan aset, digitalisasi manajemen proyek, dan efisiensi operasional terpadu.',
  },
  {
    id: 4,
    tag: 'Teknologi',
    name: 'Teknologi & Startup',
    desc: 'Membantu perusahaan teknologi dan startup mematangkan arsitektur sistem, skalabilitas cloud, dan percepatan rekayasa perangkat lunak.',
  },
  {
    id: 5,
    tag: 'Layanan Bisnis',
    name: 'Layanan Profesional',
    desc: 'Mendampingi kantor layanan profesional memperkuat otomatisasi alur kerja, integrasi manajemen klien, dan tata kelola talenta unggul.',
  },
  {
    id: 6,
    tag: 'Ritel',
    name: 'Ritel & Konsumen',
    desc: 'Mendorong bisnis ritel dan konsumer memahami dinamika pasar, integrasi omnichannel, dan keandalan platform perdagangan digital.',
  },
]

const activeIndex = ref(0)
</script>

<template>
  <section class="industry-section" aria-labelledby="industry-heading">
    <div class="industry-container">
      <!-- Header -->
      <div class="industry-header">
        <BaseTag variant="dark">SEKTOR INDUSTRI KLIEN</BaseTag>
        <h2 id="industry-heading" class="industry-heading">
          Solusi Terarah Menjawab Kebutuhan Berbagai Sektor Industri
        </h2>
        <p class="industry-subtext">
          Tidak ada bisnis yang identik. Setiap strategi dan sistem diselaraskan mengikuti dinamika, regulasi, dan target pertumbuhan industri Anda.
        </p>
      </div>

      <!-- Main Layout: Left interactive list + Right active card with visual -->
      <div class="industry-body">
        <!-- Left: List of Industries -->
        <div class="industry-list" role="tablist" aria-label="Daftar Sektor Industri">
          <button
            v-for="(item, idx) in industries"
            :key="item.id"
            :id="`tab-industry-${item.id}`"
            role="tab"
            :aria-selected="activeIndex === idx"
            :aria-controls="`panel-industry-${item.id}`"
            :class="['industry-item-btn', activeIndex === idx && 'industry-item-btn--active']"
            @click="activeIndex = idx"
          >
            <span class="industry-item-tag">{{ item.tag }}</span>
            <span class="industry-item-title">{{ item.name }}</span>
            <span class="industry-item-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>
        </div>

        <!-- Right: Active Showcase Panel -->
        <div
          :id="`panel-industry-${industries[activeIndex].id}`"
          role="tabpanel"
          :aria-labelledby="`tab-industry-${industries[activeIndex].id}`"
          class="industry-panel"
        >
          <div class="industry-image-box">
            <img :src="industryVisualImg" :alt="industries[activeIndex].name" class="industry-img" loading="lazy" />
            <div class="industry-img-overlay"></div>
            <div class="industry-badge-pill">
              <span>{{ industries[activeIndex].tag }}</span>
            </div>
          </div>
          <div class="industry-panel-content">
            <h3 class="industry-panel-title">{{ industries[activeIndex].name }}</h3>
            <p class="industry-panel-desc">{{ industries[activeIndex].desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.industry-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.industry-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.industry-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  max-width: 720px;
}

.industry-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

.industry-subtext {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

/* Body */
.industry-body {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* Left list */
.industry-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.industry-item-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 18px 24px;
  cursor: pointer;
  text-align: left;
  transition: all 0.25s ease;
  width: 100%;
}

.industry-item-btn:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateX(4px);
}

.industry-item-btn--active {
  background: rgba(0, 94, 255, 0.12);
  border-color: rgba(0, 94, 255, 0.5);
  box-shadow: 0 4px 20px rgba(0, 94, 255, 0.2);
}

.industry-item-tag {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #14f3c1;
  background: rgba(20, 243, 193, 0.1);
  padding: 4px 10px;
  border-radius: 6px;
  flex-shrink: 0;
}

.industry-item-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  flex: 1;
}

.industry-item-arrow {
  color: rgba(255, 255, 255, 0.4);
  display: inline-flex;
  transition: transform 0.2s ease, color 0.2s ease;
}

.industry-item-btn--active .industry-item-arrow,
.industry-item-btn:hover .industry-item-arrow {
  color: #ffffff;
  transform: translateX(3px);
}

/* Right panel */
.industry-panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 100px;
}

.industry-image-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.industry-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.industry-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0, 3, 13, 0.8) 100%);
}

.industry-badge-pill {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(0, 3, 13, 0.75);
  backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #14f3c1;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
}

.industry-panel-content {
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.industry-panel-title {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
}

.industry-panel-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .industry-body {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .industry-panel {
    position: static;
  }
}

@media (max-width: 809px) {
  .industry-section {
    padding: 72px 0;
  }

  .industry-container {
    padding: 0 16px;
    gap: 36px;
  }

  .industry-body {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .industry-panel {
    position: static;
  }

  .industry-item-btn {
    padding: 14px 18px;
  }

  .industry-item-title {
    font-size: 16px;
  }
}
</style>

