<script setup>
/**
 * HomeCTA — Final Call-to-Action section before footer.
 *
 * Synchronized with Gizera Web reference:
 *   - H2: "Let’s Build Better Business"
 *   - Description: "Dapatkan perspektif profesional untuk prioritas Anda dan temukan solusi praktis mengubah tantangan menjadi kemajuan nyata."
 *   - Button: "Mulai Konsultasi" -> /contact with white arrow icon container
 *   - Background visual image asset: bSorq8bY0mxOEBCUceu6z6sLCE.webp
 */
import ctaBgImg from '@/assets/images/bSorq8bY0mxOEBCUceu6z6sLCE.webp'
</script>

<template>
  <section class="cta-section" aria-labelledby="cta-heading">
    <!-- Background image & overlay -->
    <div class="cta-bg-wrapper" aria-hidden="true">
      <img :src="ctaBgImg" alt="" class="cta-bg-img" loading="lazy" />
      <div class="cta-overlay"></div>
    </div>

    <!-- Content -->
    <div class="cta-container">
      <div class="cta-content">
        <h2 id="cta-heading" class="cta-heading">
          Let’s Build Better Business
        </h2>
        <p class="cta-desc">
          Dapatkan perspektif profesional untuk prioritas Anda dan temukan solusi praktis mengubah tantangan menjadi kemajuan nyata.
        </p>
        <div class="cta-action">
          <RouterLink to="/contact" class="cta-btn" aria-label="Mulai Konsultasi dengan Gizera">
            <span>Mulai Konsultasi</span>
            <span class="cta-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  background-color: var(--color-dark, #00030d);
  padding: 120px 0;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cta-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.cta-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  filter: brightness(0.65) contrast(1.1);
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(14, 40, 93, 0.75) 0%, rgba(0, 3, 13, 0.92) 80%);
}

.cta-container {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.cta-content {
  max-width: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.cta-heading {
  font-family: var(--font-display);
  font-size: clamp(38px, 5.5vw, 68px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin: 0;
}

.cta-desc {
  font-family: var(--font-body);
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  max-width: 620px;
}

.cta-action {
  margin-top: 12px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #005eff;
  color: #ffffff;
  font-family: var(--font-ui);
  font-size: 15.5px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 16px;
  padding: 15px 24px;
  transition: all 0.25s ease;
  box-shadow: 0 6px 20px rgba(0, 94, 255, 0.35);
}

.cta-btn:hover {
  background-color: #0d409b;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 94, 255, 0.5);
}

.cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #00030d;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.cta-btn:hover .cta-arrow {
  transform: translateX(3px);
}

/* ── Responsive ── */
@media (max-width: 809px) {
  .cta-section {
    padding: 80px 0;
  }

  .cta-container {
    padding: 0 16px;
  }

  .cta-content {
    gap: 20px;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
