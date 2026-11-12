<script setup>
/**
 * HomeApproach — "Langkah Terpadu Menjawab Tantangan Bisnis" (Our Approach)
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "PENDEKATAN KAMI"
 *   - H2: "Langkah Terpadu Menjawab Tantangan Bisnis"
 *   - Subtitle: "Kami menyelaraskan keahlian teknis, pemahaman operasional, dan kolaborasi erat guna menghadirkan nilai bisnis yang berkesinambungan."
 *   - CTA: "Pelajari Selengkapnya" -> /about
 *   - 3 structured steps:
 *     01 Pahami -> 1. Pahami & Analisis
 *     02 Rancang -> 2. Rancang Solusi
 *     03 Akselerasi -> 3. Eksekusi & Akselerasi
 */
import { ref } from 'vue'
import BaseTag from '@/components/base/BaseTag.vue'

const steps = [
  {
    id: 1,
    num: '01',
    tab: 'Pahami',
    title: '1. Pahami & Analisis',
    desc: 'Kami mendalami alur bisnis Anda secara utuh, mengidentifikasi akar permasalahan, serta merumuskan konteks strategis di balik kebutuhan teknologi dan organisasi perusahaan Anda.',
    highlight: 'Audit Mendalam & Asesmen Kebutuhan Riil',
  },
  {
    id: 2,
    num: '02',
    tab: 'Rancang',
    title: '2. Rancang Solusi',
    desc: 'Kami mentransformasikan analisis menjadi blueprint teknologi terarah, prioritas yang jelas, serta solusi sistem yang realistis sesuai kapasitas dan target pertumbuhan bisnis Anda.',
    highlight: 'Arsitektur Sistem & Peta Jalan Terstruktur',
  },
  {
    id: 3,
    num: '03',
    tab: 'Akselerasi',
    title: '3. Eksekusi & Akselerasi',
    desc: 'Kami mendampingi implementasi di lapangan secara bertahap, memastikan adopsi sistem berjalan mulus, infrastruktur stabil, serta kapabilitas tim internal meningkat secara berkelanjutan.',
    highlight: 'Pendampingan Berkelanjutan & Alih Keahlian',
  },
]

const activeStep = ref(0)
</script>

<template>
  <section class="approach-section" aria-labelledby="approach-heading">
    <div class="approach-container">
      <!-- Top: Heading + CTA -->
      <div class="approach-top">
        <div class="approach-top-left">
          <BaseTag variant="default">PENDEKATAN KAMI</BaseTag>
          <h2 id="approach-heading" class="approach-heading">
            Langkah Terpadu Menjawab Tantangan Bisnis
          </h2>
          <p class="approach-subtitle">
            Kami menyelaraskan keahlian teknis, pemahaman operasional, dan kolaborasi erat guna menghadirkan nilai bisnis yang berkesinambungan.
          </p>
        </div>
        <div class="approach-top-right">
          <RouterLink to="/about" class="approach-cta" aria-label="Pelajari Selengkapnya tentang pendekatan Gizera">
            <span>Pelajari Selengkapnya</span>
            <span class="approach-cta-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Bottom: Steps Layout (Left Tab Indicators + Right Detail Cards) -->
      <div class="approach-body">
        <!-- Step Navigation Tabs -->
        <div class="approach-tabs" role="tablist" aria-label="Alur Langkah Terpadu">
          <button
            v-for="(step, idx) in steps"
            :key="step.id"
            :id="`tab-step-${step.id}`"
            role="tab"
            :aria-selected="activeStep === idx"
            :aria-controls="`panel-step-${step.id}`"
            :class="['step-tab-btn', activeStep === idx && 'step-tab-btn--active']"
            @click="activeStep = idx"
          >
            <span class="step-tab-num">{{ step.num }}</span>
            <span class="step-tab-label">{{ step.tab }}</span>
          </button>
        </div>

        <!-- Step Cards Display -->
        <div class="approach-cards-grid">
          <div
            v-for="(step, idx) in steps"
            :key="step.id"
            :id="`panel-step-${step.id}`"
            role="tabpanel"
            :aria-labelledby="`tab-step-${step.id}`"
            :class="['step-card', activeStep === idx && 'step-card--active']"
            @click="activeStep = idx"
          >
            <div class="step-card-header">
              <span class="step-card-num">{{ step.num }}</span>
              <span class="step-card-pill">{{ step.highlight }}</span>
            </div>
            <h3 class="step-card-title">{{ step.title }}</h3>
            <p class="step-card-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.approach-section {
  background-color: var(--color-bg, #f5f7f7);
  padding: 100px 0;
}

.approach-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Top */
.approach-top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.approach-top-left {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 680px;
}

.approach-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.approach-subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary, #51555e);
  margin: 0;
}

.approach-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  color: var(--color-text-heading, #0e285d);
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 16px;
  padding: 14px 22px;
  border: 1px solid var(--color-border, #d4d5d9);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.approach-cta:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.approach-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: var(--color-text-heading, #0e285d);
  border-radius: 10px;
  color: #ffffff;
  flex-shrink: 0;
}

/* Body */
.approach-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Tab bar */
.approach-tabs {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(12, 17, 28, 0.04);
  padding: 6px;
  border-radius: 14px;
  width: fit-content;
}

.step-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary, #51555e);
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.step-tab-btn:hover {
  color: var(--color-text-heading, #0e285d);
  background: rgba(255, 255, 255, 0.5);
}

.step-tab-btn--active {
  background: #ffffff;
  color: var(--color-brand-blue, #0752ff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.step-tab-num {
  font-size: 11px;
  font-weight: 700;
  opacity: 0.6;
}

/* Grid of Cards */
.approach-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.step-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid rgba(12, 17, 28, 0.08);
  box-shadow: 0 4px 20px rgba(12, 17, 28, 0.04);
  transition: all 0.25s ease;
  cursor: pointer;
}

.step-card:hover,
.step-card--active {
  border-color: rgba(7, 82, 255, 0.4);
  box-shadow: 0 12px 32px rgba(7, 82, 255, 0.1);
  transform: translateY(-3px);
}

.step-card--active {
  border-width: 2px;
}

.step-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.step-card-num {
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--color-brand-blue, #0752ff);
  background: rgba(7, 82, 255, 0.08);
  padding: 4px 10px;
  border-radius: 6px;
}

.step-card-pill {
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  color: var(--color-teal, #056671);
  background: var(--color-teal-light, #ebf4f5);
  padding: 4px 10px;
  border-radius: 100px;
}

.step-card-title {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.2vw, 24px);
  font-weight: 500;
  line-height: 1.25;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.step-card-desc {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-text-secondary, #51555e);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .approach-cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 809px) {
  .approach-section {
    padding: 72px 0;
  }

  .approach-container {
    padding: 0 16px;
    gap: 36px;
  }

  .approach-top {
    flex-direction: column;
    align-items: flex-start;
  }

  .approach-cta {
    width: 100%;
    justify-content: center;
  }

  .approach-tabs {
    width: 100%;
    justify-content: space-between;
  }

  .step-tab-btn {
    flex: 1;
    justify-content: center;
    padding: 8px 12px;
  }

  .approach-cards-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    padding: 28px 20px;
  }
}
</style>

