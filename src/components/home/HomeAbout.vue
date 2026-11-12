<script setup>
/**
 * HomeAbout — "Tentang Gizera" section.
 *
 * Synchronized with Gizera Web reference:
 *   - Tag "TENTANG GIZERA"
 *   - H2 headline: "Kami menyelaraskan teknologi mutakhir dan keunggulan SDM untuk mendorong pertumbuhan bisnis yang tangguh." (two-tone)
 *   - CTA button: "Pelajari Selengkapnya" -> /about
 *   - 3 authentic feature cards:
 *     1. Solusi IT & Rekayasa Software
 *     2. Infrastruktur & Jaringan Andal
 *     3. Human Capital & Organisasi
 *   - Running ticker items: Teknologi • Talenta • Infrastruktur • Inovasi
 */
import BaseTag from '@/components/base/BaseTag.vue'

const features = [
  {
    id: 1,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    title: 'Solusi IT & Rekayasa Software',
    desc: 'Menyediakan layanan IT Consultant, rekayasa sistem custom oleh Software Specialist, serta digitalisasi proses bisnis yang terukur dan adaptif.',
  },
  {
    id: 2,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    title: 'Infrastruktur & Jaringan Andal',
    desc: 'Membangun arsitektur IT Infrastruktur yang kokoh, server berkinerja tinggi, dan Computer Network aman dengan jaminan stabilitas operasional 24/7.',
    dark: true,
  },
  {
    id: 3,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Human Capital & Organisasi',
    desc: 'Konsultasi Organization Development (OD), optimalisasi fungsi HR, serta penyediaan tenaga alih daya (Outsourcing) profesional siap kerja.',
  },
]

const tickerWords = ['Teknologi', 'Talenta', 'Infrastruktur', 'Inovasi']
</script>

<template>
  <section class="about-section" aria-labelledby="about-heading">
    <div class="about-container">
      <!-- Left column: Heading + CTA -->
      <div class="about-left">
        <div class="about-top">
          <!-- Tag -->
          <BaseTag variant="default">TENTANG GIZERA</BaseTag>
        </div>

        <!-- Heading -->
        <h2 id="about-heading" class="about-heading">
          Kami menyelaraskan teknologi mutakhir dan keunggulan SDM
          <span class="about-heading-dim"> untuk mendorong pertumbuhan bisnis yang tangguh.</span>
        </h2>

        <!-- CTA -->
        <RouterLink to="/about" class="about-cta" aria-label="Pelajari Selengkapnya tentang Gizera">
          <span>Pelajari Selengkapnya</span>
          <span class="about-cta-arrow" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </RouterLink>
      </div>

      <!-- Right column: Feature cards -->
      <div class="about-cards">
        <div
          v-for="feature in features"
          :key="feature.id"
          :class="['about-card', feature.dark && 'about-card--dark']"
        >
          <div class="about-card-icon" v-html="feature.icon" aria-hidden="true"></div>
          <h3 class="about-card-title">{{ feature.title }}</h3>
          <p class="about-card-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Running Ticker Strip (Teknologi • Talenta • Infrastruktur • Inovasi) -->
    <div class="about-ticker" aria-hidden="true">
      <div class="ticker-track">
        <template v-for="loop in 4" :key="'loop-' + loop">
          <div v-for="word in tickerWords" :key="loop + '-' + word" class="ticker-item">
            <span class="ticker-text">{{ word }}</span>
            <span class="ticker-dot">•</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--color-bg, #f5f7f7);
  padding: 100px 0 60px;
  overflow: hidden;
}

.about-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Left column */
.about-left {
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: sticky;
  top: 100px;
}

.about-top {
  display: flex;
  align-items: center;
}

.about-heading {
  font-family: var(--font-display);
  font-size: clamp(30px, 3.8vw, 48px);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.032em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.about-heading-dim {
  color: rgba(14, 40, 93, 0.38);
}

.about-cta {
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
  align-self: flex-start;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border, #d4d5d9);
}

.about-cta:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
  color: var(--color-text-heading, #0e285d);
}

.about-cta-arrow {
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

/* Right column: cards */
.about-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(12, 17, 28, 0.05);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  border: 1px solid rgba(12, 17, 28, 0.08);
}

.about-card:hover {
  box-shadow: 0 10px 30px rgba(12, 17, 28, 0.1);
  transform: translateY(-3px);
}

/* Dark variant for center card */
.about-card--dark {
  background-color: var(--color-text-heading, #0e285d);
  border-color: transparent;
}

.about-card--dark .about-card-icon {
  color: #14f3c1;
}

.about-card--dark .about-card-title {
  color: #ffffff;
}

.about-card--dark .about-card-desc {
  color: rgba(255, 255, 255, 0.75);
}

.about-card-icon {
  width: 44px;
  height: 44px;
  color: var(--color-brand-blue, #0752ff);
  display: flex;
  align-items: center;
}

.about-card-icon :deep(svg) {
  width: 34px;
  height: 34px;
}

.about-card-title {
  font-family: var(--font-display);
  font-size: clamp(19px, 2.2vw, 22px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--color-text-heading, #0e285d);
  margin: 0;
}

.about-card-desc {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--color-text-secondary, #51555e);
  margin: 0;
}

/* ── Running Ticker Strip ── */
.about-ticker {
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(12, 17, 28, 0.08);
  border-bottom: 1px solid rgba(12, 17, 28, 0.08);
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}

.ticker-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: tickerSlide 24s linear infinite;
  gap: 32px;
}

@keyframes tickerSlide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .ticker-track {
    animation: none;
    transform: none;
  }
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  gap: 32px;
}

.ticker-text {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 26px);
  font-weight: 500;
  color: var(--color-text-heading, #0e285d);
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.ticker-dot {
  font-size: 18px;
  color: var(--color-brand-blue, #0752ff);
  opacity: 0.6;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .about-container {
    gap: 48px;
  }
}

@media (max-width: 809px) {
  .about-section {
    padding: 72px 0 40px;
  }

  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 16px 40px;
  }

  .about-left {
    position: static;
    gap: 24px;
  }

  .about-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
