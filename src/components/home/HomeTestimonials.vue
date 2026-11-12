<script setup>
/**
 * HomeTestimonials — "Dipercaya Pemimpin Bisnis Masa Depan" (Testimoni Klien)
 *
 * Synchronized with Gizera Web reference:
 *   - Tag: "TESTIMONI KLIEN"
 *   - H2: "Dipercaya Pemimpin Bisnis Masa Depan"
 *   - Subtitle: "Perusahaan mempercayai Gizera untuk menghadirkan keunggulan teknologi, sistem andal, dan optimalisasi sumber daya manusia."
 *   - CTA: "Mulai Konsultasi" -> /contact
 *   - Authentic client review cards
 */
import BaseTag from '@/components/base/BaseTag.vue'

const testimonials = [
  {
    id: 1,
    quote: '“Gizera menghadirkan struktur terencana pada tantangan sistem yang kompleks dan menyelaraskan talenta kami menuju eksekusi yang solid.”',
    name: 'Amelia Rhodes',
    role: 'Chief Operating Officer, Quinland Group',
    rating: 5,
  },
  {
    id: 2,
    quote: '“Solusi teknologi dari Gizera sangat praktis, tepat sasaran, dan solutif. Implementasi sistem menghadirkan arah yang jelas dan efisiensi terukur.”',
    name: 'David Santoso',
    role: 'VP of Technology & Operations',
    rating: 5,
  },
]
</script>

<template>
  <section class="testi-section" aria-labelledby="testi-heading">
    <div class="testi-container">
      <!-- Header -->
      <div class="testi-header">
        <div class="testi-header-left">
          <BaseTag variant="dark">TESTIMONI KLIEN</BaseTag>
          <h2 id="testi-heading" class="testi-heading">
            Dipercaya Pemimpin Bisnis Masa Depan
          </h2>
          <p class="testi-subtitle">
            Perusahaan mempercayai Gizera untuk menghadirkan keunggulan teknologi, sistem andal, dan optimalisasi sumber daya manusia.
          </p>
        </div>
        <div class="testi-header-right">
          <RouterLink to="/contact" class="testi-cta" aria-label="Mulai Konsultasi">
            <span>Mulai Konsultasi</span>
            <span class="testi-cta-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- Testimonial Cards Grid -->
      <div class="testi-grid">
        <article
          v-for="item in testimonials"
          :key="item.id"
          class="testi-card"
        >
          <!-- Stars -->
          <div class="testi-stars" aria-label="Rating 5 dari 5 bintang">
            <svg
              v-for="star in 5"
              :key="star"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
              class="star-icon"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="testi-quote">
            {{ item.quote }}
          </blockquote>

          <!-- Author -->
          <div class="testi-author">
            <div class="testi-avatar" aria-hidden="true">
              <span>{{ item.name.charAt(0) }}</span>
            </div>
            <div class="testi-author-info">
              <div class="testi-name">{{ item.name }}</div>
              <div class="testi-role">{{ item.role }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testi-section {
  background-color: var(--color-dark, #00030d);
  padding: 100px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.testi-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}

/* Header */
.testi-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.testi-header-left {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 680px;
}

.testi-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 4.2vw, 48px);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.032em;
  color: #ffffff;
  margin: 0;
}

.testi-subtitle {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

.testi-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #005eff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 16px;
  padding: 14px 22px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 94, 255, 0.3);
  flex-shrink: 0;
}

.testi-cta:hover {
  background-color: #0d409b;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 94, 255, 0.45);
}

.testi-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #00030d;
  flex-shrink: 0;
}

/* Grid */
.testi-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.testi-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.25s ease;
}

.testi-card:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
}

.testi-stars {
  display: flex;
  gap: 4px;
  color: #f5a623;
}

.testi-quote {
  font-family: var(--font-display);
  font-size: clamp(17px, 1.8vw, 20px);
  font-weight: 400;
  line-height: 1.55;
  color: #ffffff;
  margin: 0;
  flex: 1;
  font-style: normal;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.testi-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0752ff, #14f3c1);
  color: #00030d;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testi-name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.testi-role {
  font-family: var(--font-body);
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.6);
}

/* ── Responsive ── */
@media (max-width: 809px) {
  .testi-section {
    padding: 72px 0;
  }

  .testi-container {
    padding: 0 16px;
    gap: 36px;
  }

  .testi-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .testi-cta {
    width: 100%;
    justify-content: center;
  }

  .testi-grid {
    grid-template-columns: 1fr;
  }

  .testi-card {
    padding: 28px 20px;
  }
}
</style>

