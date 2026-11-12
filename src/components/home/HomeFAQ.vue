<script setup>
/**
 * HomeFAQ — "Pertanyaan yang Sering Diajukan" (FAQ Section)
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "PERTANYAAN UMUM"
 *   - H2: "Pertanyaan yang Sering Diajukan"
 *   - Left Consultation CTA Card ("Butuh Bantuan? Konsultasikan bersama kami")
 *   - 6 authentic FAQ items with accessible Accordion (WAI-ARIA, Keyboard nav)
 */
import { ref } from 'vue'
import BaseTag from '@/components/base/BaseTag.vue'

const faqs = [
  {
    id: 1,
    q: 'Layanan apa saja yang disediakan oleh Gizera?',
    a: 'Gizera menyediakan layanan komprehensif mulai dari Konsultan IT, Transformasi Digital, Spesialis Perangkat Lunak, Infrastruktur & Jaringan IT, hingga Konsultan Organisasi & Tenaga Alih Daya (Outsourcing).',
  },
  {
    id: 2,
    q: 'Bagaimana pendekatan Gizera dalam setiap proyek atau konsultasi?',
    a: 'Kami memulai dengan mendalami alur dan tantangan bisnis Anda (Pahami), menyusun rancangan solusi teknologi yang realistis (Rancang), lalu mendampingi eksekusi sistem hingga tuntas bersama tim Anda (Akselerasi).',
  },
  {
    id: 3,
    q: 'Berapa lama durasi implementasi sistem atau proyek berlangsung?',
    a: 'Durasi kerja sama disesuaikan dengan skala kebutuhan bisnis Anda, mulai dari konsultasi terfokus beberapa minggu hingga pendampingan transformasi sistem terpadu yang berlangsung beberapa bulan secara bertahap.',
  },
  {
    id: 4,
    q: 'Bagaimana cara memulai kerja sama dan konsultasi dengan Gizera?',
    a: 'Anda dapat memulai dengan menjadwalkan sesi konsultasi awal bersama tim ahli kami guna mendiskusikan prioritas kebutuhan teknologi, alur operasional, serta potensi peningkatan bisnis Anda.',
  },
  {
    id: 5,
    q: 'Siapa saja profil klien yang biasanya bekerja sama dengan Gizera?',
    a: 'Kami bermitra dengan korporasi, institusi keuangan, layanan kesehatan, manufaktur, ritel, hingga startup berkembang yang ingin memperkuat infrastruktur IT, skalabilitas sistem, dan kapabilitas SDM.',
  },
  {
    id: 6,
    q: 'Apakah Gizera dapat berkolaborasi langsung dengan tim internal klien?',
    a: 'Ya, kami berkolaborasi erat dengan jajaran pimpinan dan tim internal klien. Kami memadukan keahlian teknis kami dengan wawasan industri perusahaan Anda agar transfer keahlian berjalan optimal.',
  },
]

// Open the first item by default
const openIndex = ref(0)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section class="faq-section" aria-labelledby="faq-heading">
    <div class="faq-container">
      <!-- Left Column: Header + Consultation Box -->
      <div class="faq-sidebar">
        <div class="faq-header-content">
          <BaseTag variant="dark">PERTANYAAN UMUM</BaseTag>
          <h2 id="faq-heading" class="faq-heading">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <!-- Consultation Card -->
        <div class="faq-cta-card">
          <div class="faq-cta-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" stroke-width="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 class="faq-cta-title">Butuh Bantuan? Konsultasikan bersama kami</h3>
          <p class="faq-cta-desc">
            Diskusikan kebutuhan spesifik dan tantangan teknologi bisnis Anda bersama tim konsultan kami.
          </p>
          <RouterLink to="/contact" class="faq-cta-btn" aria-label="Hubungi tim Gizera">
            <span>Hubungi Kami</span>
            <span class="faq-cta-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="14" height="14">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Right Column: Accordion List -->
      <div class="faq-accordion" role="region" aria-label="Daftar FAQ">
        <div
          v-for="(item, idx) in faqs"
          :key="item.id"
          :class="['faq-item', openIndex === idx && 'faq-item--open']"
        >
          <button
            :id="`faq-header-${item.id}`"
            type="button"
            class="faq-trigger"
            :aria-expanded="openIndex === idx"
            :aria-controls="`faq-panel-${item.id}`"
            @click="toggleFaq(idx)"
          >
            <span class="faq-question">{{ item.q }}</span>
            <span class="faq-toggle-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                width="18"
                height="18"
                class="chevron-svg"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </button>

          <div
            :id="`faq-panel-${item.id}`"
            role="region"
            :aria-labelledby="`faq-header-${item.id}`"
            class="faq-panel"
            :hidden="openIndex !== idx"
          >
            <div class="faq-panel-inner">
              <p class="faq-answer">{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.faq-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

/* Sidebar */
.faq-sidebar {
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: sticky;
  top: 100px;
}

.faq-header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

.faq-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

/* Consultation Box */
.faq-cta-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

.faq-cta-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 94, 255, 0.15);
  color: #005eff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faq-cta-title {
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.faq-cta-desc {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

.faq-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #005eff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 14.5px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  padding: 12px 20px;
  margin-top: 8px;
  align-self: flex-start;
  transition: all 0.2s ease;
}

.faq-cta-btn:hover {
  background-color: #0d409b;
  transform: translateY(-2px);
}

.faq-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.faq-cta-btn:hover .faq-cta-arrow {
  transform: translateX(3px);
}

/* Accordion */
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.faq-item:hover,
.faq-item--open {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.16);
}

.faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  outline: none;
}

.faq-trigger:focus-visible {
  outline: 2px solid #005eff;
  outline-offset: -2px;
}

.faq-question {
  font-family: var(--font-display);
  font-size: clamp(17px, 1.8vw, 19px);
  font-weight: 500;
  color: #ffffff;
  line-height: 1.35;
}

.faq-toggle-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s ease, background-color 0.2s ease, color 0.2s ease;
}

.chevron-svg {
  transition: transform 0.25s ease;
}

.faq-item--open .chevron-svg {
  transform: rotate(180deg);
}

.faq-item--open .faq-toggle-icon {
  background: rgba(0, 94, 255, 0.2);
  color: #14f3c1;
}

/* Panel */
.faq-panel {
  overflow: hidden;
}

.faq-panel-inner {
  padding: 0 28px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 4px;
  padding-top: 16px;
}

.faq-answer {
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 1199px) and (min-width: 810px) {
  .faq-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .faq-sidebar {
    position: static;
  }
}

@media (max-width: 809px) {
  .faq-section {
    padding: 72px 0;
  }

  .faq-container {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 0 16px;
  }

  .faq-sidebar {
    position: static;
  }

  .faq-trigger {
    padding: 20px 18px;
  }

  .faq-panel-inner {
    padding: 0 18px 20px;
  }

  .faq-cta-card {
    padding: 24px 20px;
  }
}
</style>

