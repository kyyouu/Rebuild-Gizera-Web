<script setup>
/**
 * HomeClientLogos — Infinite marquee scroll of client logos.
 *
 * Synchronized 1:1 with Gizera Web reference (gizera-client-section):
 *   - Continuous running marquee of 7 authentic client logos (looping seamlessly)
 *   - Dark surface background matching Hero bottom border
 *   - Hover pauses marquee
 *   - Sleek glass tooltip sitting directly ABOVE each logo with downward arrow
 *   - Mobile responsive adjustments (gap 36px, height 32px)
 */

import logoCVBerkahAlam   from '@/assets/clients/CV Berkah Alam.png'
import logoPTAsyraf       from '@/assets/clients/PT Asyraf Nusantara Daya.png'
import logoPTCipta        from '@/assets/clients/PT Cipta Lingkungan Lestari.png'
import logoPTDinamika     from '@/assets/clients/PT Dinamika.png'
import logoPTMoba         from '@/assets/clients/PT Moba Inspirasi Nusantara.png'
import logoQuinland       from '@/assets/clients/Quinland Group.png'
import logoRTQ            from '@/assets/clients/RTQ ALFATH.png'

const clients = [
  { name: 'CV Berkah Alam',              img: logoCVBerkahAlam },
  { name: 'PT Asyraf Nusantara Daya',    img: logoPTAsyraf },
  { name: 'PT Cipta Lingkungan Lestari', img: logoPTCipta },
  { name: 'PT Dinamika',                 img: logoPTDinamika },
  { name: 'PT Moba Inspirasi Nusantara', img: logoPTMoba },
  { name: 'Quinland Group',              img: logoQuinland },
  { name: 'RTQ Al-Fath',                img: logoRTQ },
]
</script>

<template>
  <div class="gizera-client-section" aria-label="Klien Gizera">
    <div class="gizera-marquee-wrapper" id="gizera-marquee-container">
      <div class="gizera-marquee-track">
        <!-- Set 1 -->
        <div
          v-for="client in clients"
          :key="'set1-' + client.name"
          class="gizera-client-item"
          :data-client-name="client.name"
          tabindex="0"
        >
          <img
            :src="client.img"
            :alt="client.name"
            class="gizera-client-img"
            loading="lazy"
          />
          <span class="gizera-client-tooltip">{{ client.name }}</span>
        </div>

        <!-- Set 2 (for seamless -50% loop) -->
        <div
          v-for="client in clients"
          :key="'set2-' + client.name"
          class="gizera-client-item"
          :data-client-name="client.name"
          aria-hidden="true"
        >
          <img
            :src="client.img"
            :alt="client.name"
            class="gizera-client-img"
            loading="lazy"
          />
          <span class="gizera-client-tooltip">{{ client.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Client section container (from Gizera Web) ── */
.gizera-client-section {
  position: relative;
  width: 100%;
  padding: 24px 0 16px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark, #00030d);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* ── Marquee wrapper with gradient edge masks ── */
.gizera-marquee-wrapper {
  position: relative;
  width: 100%;
  overflow: visible; /* Never clip tooltips */
  padding: 42px 0 14px; /* Space for tooltip above */
  -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 0) 100%);
  mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, rgba(0, 0, 0, 0) 100%);
}

/* ── Marquee track ── */
.gizera-marquee-track {
  display: flex;
  align-items: center;
  width: max-content;
  gap: 60px;
  animation: gizeraMarqueeScroll 28s linear infinite;
  will-change: transform;
}

.gizera-marquee-track:hover,
.gizera-marquee-track:focus-within {
  animation-play-state: paused;
}

@keyframes gizeraMarqueeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ── Client item ── */
.gizera-client-item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.gizera-client-item:hover {
  transform: translateY(-2px) scale(1.05);
}

/* ── Client image ── */
.gizera-client-img {
  height: 40px;
  width: auto;
  max-width: 155px;
  object-fit: contain;
  display: block;
  opacity: 0.82;
  filter: brightness(0.95) contrast(1.05);
  transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
}

.gizera-client-item:hover .gizera-client-img {
  opacity: 1;
  filter: brightness(1.15) contrast(1.1) drop-shadow(0 4px 14px rgba(0, 94, 255, 0.35));
}

/* ── Minimal glass tooltip directly above logo ── */
.gizera-client-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  top: auto;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: rgba(12, 16, 26, 0.94);
  color: #ffffff;
  font-family: var(--font-body, "Golos Text", "Inter", sans-serif);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s;
  z-index: 99999;
}

/* Downward arrow pointing directly to logo */
.gizera-client-tooltip::after {
  content: '';
  position: absolute;
  bottom: -5px;
  top: auto;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: rgba(12, 16, 26, 0.94);
  border-right: 1px solid rgba(255, 255, 255, 0.16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.gizera-client-item:hover .gizera-client-tooltip,
.gizera-client-item:focus-visible .gizera-client-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* ── Mobile responsive (< 810px) ── */
@media (max-width: 809.98px) {
  .gizera-marquee-wrapper {
    padding: 36px 0 10px;
  }
  .gizera-marquee-track {
    gap: 36px;
    animation-duration: 20s;
  }
  .gizera-client-item {
    height: 42px;
  }
  .gizera-client-img {
    height: 32px;
    max-width: 125px;
  }
}

/* ── Accessibility / reduced motion: slow down gently instead of breaking into duplicate wrapped static rows ── */
@media (prefers-reduced-motion: reduce) {
  .gizera-marquee-track {
    animation-duration: 60s;
  }
}
</style>
