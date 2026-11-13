<script setup>
/**
 * HomeHero — Full-screen hero section.
 *
 * Synchronized with Gizera Web reference (Exact 1:1 DOM & Layout Metrics):
 *   - Background: Dark surface (#0c0e12) with authentic "Liquid Gradient" WebGL2 shader
 *     using the exact Framer palette and fluid turbulence equation:
 *       1. rgb(0, 0, 26)  — Deep Midnight Navy
 *       2. rgb(0, 67, 250) — Cobalt Electric Blue
 *       3. rgb(0, 221, 255) — Glowing Cyan Highlight
 *       4. rgb(0, 94, 255)  — Brand Vivid Blue
 *     Masked via linear-gradient(180deg, #000 0%, #000 70%, transparent 100%).
 *   - H1: "Solusi Terpadu, Langkah Pasti" (two-tone: dimmed 65% + bright 100%, max-width: 750px)
 *   - Description: "Dari strategi hingga eksekusi, kami menghadirkan solusi IT, infrastruktur andal & akselerasi talenta untuk kemajuan bisnis Anda."
 *     with padding-bottom: 28px and subtle bottom border matching Gizera Web
 *   - CTA button: "Mulai Konsultasi" -> /contact (height: 48px, border-radius: 16px)
 *   - Right: Exactly 355px × 210px (desktop), 320px × 210px (tablet), hidden on mobile (< 810px)
 *     with authentic 18-second hero-video.mp4 (11.16 MB), teal-navy gradient overlay,
 *     and glass play/pause toggle button.
 */
import { ref, onMounted, onUnmounted } from 'vue'
import heroVideoUrl from '@/assets/hero-video.mp4'
import heroPosterUrl from '@/assets/hero-poster.webp'
import { initHeroLiquidShader } from './heroShader'

// ── WebGL2 Liquid Gradient Shader ──
const canvasRef = ref(null)
const heroSectionRef = ref(null)
let shaderInstance = null

// ── Responsive desktop check (do not render video on < 810px) ──
const isDesktop = ref(typeof window !== 'undefined' ? window.innerWidth >= 810 : true)
const updateViewport = () => {
  if (typeof window !== 'undefined') {
    isDesktop.value = window.innerWidth >= 810
  }
}

onMounted(() => {
  if (canvasRef.value) {
    shaderInstance = initHeroLiquidShader(canvasRef.value)
  }
  window.addEventListener('resize', updateViewport)
  updateViewport()
})

onUnmounted(() => {
  if (shaderInstance && typeof shaderInstance.destroy === 'function') {
    shaderInstance.destroy()
  }
  window.removeEventListener('resize', updateViewport)
})

const handleMouseMove = (e) => {
  if (!shaderInstance || !heroSectionRef.value) return
  const rect = heroSectionRef.value.getBoundingClientRect()
  const normX = (e.clientX - rect.left) / rect.width - 0.5
  const normY = (e.clientY - rect.top) / rect.height - 0.5
  shaderInstance.updateMouse(normX, normY)
}

// ── Video Playback State ──
const heroVideoRef = ref(null)
const isPlaying = ref(true)

const togglePlay = () => {
  if (!heroVideoRef.value) return
  if (heroVideoRef.value.paused) {
    heroVideoRef.value.play()
    isPlaying.value = true
  } else {
    heroVideoRef.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <section
    ref="heroSectionRef"
    class="hero-section"
    aria-label="Hero"
    @mousemove="handleMouseMove"
  >
    <!-- Shader canvas — framer-lh02uz-container -->
    <div class="hero-shader-container" aria-hidden="true">
      <canvas ref="canvasRef" class="hero-shader-canvas"></canvas>
      <div class="hero-shader-fallback">
        <div class="fallback-blob blob-cobalt"></div>
        <div class="fallback-blob blob-cyan"></div>
        <div class="fallback-blob blob-royal"></div>
      </div>
    </div>

    <!-- Content — framer-1x01s5p (max-width:1300px; padding:125px 0 40px) -->
    <div class="hero-container">

      <!-- Top row — framer-1ipf8bw: headline -->
      <div class="hero-top">
        <!-- Title — framer-u5gmvc -->
        <div class="hero-title-wrapper">
          <h1 class="hero-title">
            <span class="hero-title-dim hero-title-line">Solusi Terpadu,</span>
            <span class="hero-title-bright hero-title-line">Langkah Pasti</span>
          </h1>
        </div>
      </div>

      <!-- Bottom area — framer-19y0bap: flex-col; gap:50px -->
      <div class="hero-bottom">
        <!-- Row — framer-1hcgniv: flex-row; align-end; space-between -->
        <div class="hero-row">
          <!-- Left — framer-1ngdnik: flex:1 0 0; max-width:600px; gap:36px -->
          <div class="hero-left">
            <!-- Description box — framer-r8gyvu: padding:0 0 28px; border-bottom -->
            <div class="hero-desc-wrapper">
              <p class="hero-desc">Dari strategi hingga eksekusi, kami menghadirkan solusi IT, infrastruktur andal &amp; akselerasi talenta untuk kemajuan bisnis Anda.</p>
            </div>

            <!-- CTA button -->
            <RouterLink to="/contact" class="hero-cta" aria-label="Mulai Konsultasi dengan Gizera">
              <span class="hero-cta-text">Mulai Konsultasi</span>
              <span class="hero-cta-arrow" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </RouterLink>
          </div>

          <!-- Right video — framer-1ur3sde-container: width:355px; height:210px (desktop), hidden on mobile (< 810px) -->
          <div v-if="isDesktop" class="hero-right" aria-hidden="true">
            <div class="hero-video-card" @click="togglePlay">
              <video
                ref="heroVideoRef"
                class="hero-video"
                :src="heroVideoUrl"
                :poster="heroPosterUrl"
                autoplay
                loop
                muted
                playsinline
                preload="metadata"
                @play="isPlaying = true"
                @pause="isPlaying = false"
              ></video>
              <!-- Gradient overlay — framer-v4f04 -->
              <div class="hero-video-cover"></div>
              <!-- Play/Pause button — framer-XbeQh -->
              <button
                type="button"
                class="hero-video-btn"
                :aria-label="isPlaying ? 'Jeda Video' : 'Putar Video'"
                @click.stop="togglePlay"
              >
                <svg v-if="isPlaying" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1.5" />
                  <rect x="14" y="4" width="4" height="16" rx="1.5" />
                </svg>
                <svg v-else viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <polygon points="7,4 20,12 7,20" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Hero wrapper ── */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  overflow: hidden;
  background-color: #0c0e12;
}

/* ── Shader background — exact match framer-lh02uz-container ── */
.hero-shader-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  /* exact mask from Gizera Web: linear-gradient(#000 0%, #0000 100%) */
  -webkit-mask: linear-gradient(#000 0%, #0000 100%);
  mask: linear-gradient(#000 0%, #0000 100%);
  background-color: #0c0e12;
}

.hero-shader-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* Fallback fluid blobs (shown if WebGL unavailable) */
.hero-shader-fallback {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}

.fallback-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  will-change: transform;
  mix-blend-mode: screen;
}

.blob-cobalt {
  width: 750px; height: 520px; top: 5%; left: 32%;
  background: radial-gradient(circle, rgba(0, 67, 250, 0.55) 0%, rgba(0, 94, 255, 0.22) 50%, transparent 75%);
  animation: blobMotion1 16s ease-in-out infinite alternate;
}

.blob-cyan {
  width: 580px; height: 420px; top: 8%; left: 52%;
  background: radial-gradient(circle, rgba(0, 221, 255, 0.45) 0%, rgba(0, 180, 255, 0.18) 45%, transparent 70%);
  animation: blobMotion2 13s ease-in-out infinite alternate;
}

.blob-royal {
  width: 680px; height: 480px; top: 18%; left: 15%;
  background: radial-gradient(circle, rgba(0, 94, 255, 0.42) 0%, rgba(0, 0, 26, 0.2) 55%, transparent 75%);
  animation: blobMotion3 18s ease-in-out infinite alternate;
}

@keyframes blobMotion1 {
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(50px, -30px) scale(1.1) rotate(15deg); }
  100% { transform: translate(-30px, 20px) scale(0.95) rotate(-10deg); }
}
@keyframes blobMotion2 {
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  50%  { transform: translate(-40px, 35px) scale(1.12) rotate(-15deg); }
  100% { transform: translate(30px, -25px) scale(0.9) rotate(10deg); }
}
@keyframes blobMotion3 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(45px, -35px) scale(1.15); }
  100% { transform: translate(-25px, 25px) scale(0.92); }
}

/* ── Content container: balanced spacing without oversized empty gap ── */
.hero-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 110px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 52px;
  box-sizing: border-box;
}

/* ── Headline wrapper ── */
.hero-top {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: min-content;
}

/* ── Title text container ── */
.hero-title-wrapper {
  flex: none;
  width: 100%;
  max-width: 880px;
  height: auto;
  position: relative;
}

/* ── H1 — 2 distinct lines with proportional sizing ── */
.hero-title {
  font-family: "Mona Sans Variable", "Mona Sans", sans-serif;
  font-size: clamp(48px, 6.2vw, 92px);
  line-height: 1.04;
  letter-spacing: -0.04em;
  font-weight: 400;
  font-variation-settings: "wdth" 95, "wght" 450;
  margin: 0;
}

.hero-title-line {
  display: block;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .hero-title-line {
    white-space: normal;
  }
}

.hero-title-dim {
  color: rgba(255, 255, 255, 0.65);
}

.hero-title-bright {
  color: #ffffff;
}

/* ── Bottom section — framer-19y0bap: flex-flow:column; gap:50px ── */
.hero-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
  width: 100%;
  height: min-content;
}

/* ── Row inside bottom — framer-1hcgniv ── */
.hero-row {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: min-content;
  overflow: clip;
}

/* ── Left column — framer-1ngdnik: flex:1 0 0; max-width:600px; gap:36px ── */
.hero-left {
  flex: 1 0 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 36px;
  height: min-content;
  overflow: clip;
}

/* ── Description box — framer-r8gyvu: padding:0 0 28px; border-bottom ── */
.hero-desc-wrapper {
  width: 100%;
  padding: 0 0 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.0706); /* #ffffff12 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
}

/* ── Description text — framer-a69r67: max-width:480px ── */
.hero-desc {
  font-family: "Golos Text", "Golos Text Variable", sans-serif;
  font-size: 16px;
  line-height: 1.45;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  max-width: 480px;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  word-wrap: break-word;
}

/* ── CTA button — framer-pmsnwe (height:48px; border-radius:16px) ── */
.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 48px;
  width: fit-content;
  background-color: rgb(0, 94, 255);
  color: #ffffff;
  font-family: "Mona Sans Variable", "Mona Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 16px;
  padding: 8px 12px 8px 22px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.hero-cta:hover {
  background-color: #004ecc;
  transform: translateY(-2px);
}

.hero-cta-text {
  color: #ffffff;
}

.hero-cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #ffffff;
  border-radius: 12px;
  color: #000d0e;
  flex-shrink: 0;
}

/* ── Right video — framer-1ur3sde-container: flex:none; width:355px; height:210px ── */
.hero-right {
  flex: none;
  width: 355px;
  height: 210px;
  position: relative;
}

.hero-video-card {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background-color: transparent;
  cursor: pointer;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  display: block;
}

/* ── Video gradient cover — framer-v4f04 ── */
.hero-video-cover {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(30, 138, 138, 0) 16%, rgba(14, 40, 92, 0.6) 100%);
  pointer-events: none;
}

/* ── Video play/pause button — framer-XbeQh ── */
.hero-video-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 5px;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.hero-video-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

/* ── Tablet (810px – 1199px) ── */
@media (min-width: 810px) and (max-width: 1199.98px) {
  /* u5gmvc: width:95% */
  .hero-title-wrapper {
    width: 95%;
  }
  /* 1ur3sde-container: width:320px */
  .hero-right {
    width: 320px;
  }
  /* 1hcgniv: place-content:flex-start; align-items:flex-start; gap:80px */
  .hero-row {
    align-items: flex-start;
    justify-content: flex-start;
    gap: 80px;
  }
  /* font-size 84px */
  .hero-title {
    font-size: 84px;
  }
}

/* ── Mobile (< 810px) ── */
@media (max-width: 809.98px) {
  /* 1npfag2: padding:0 16px */
  .hero-section {
    padding: 0 16px;
    height: auto;
    min-height: 100svh;
    max-height: none;
  }
  /* u5gmvc: width:100% */
  .hero-title-wrapper {
    width: 100%;
    max-width: 100%;
  }
  /* 1hcgniv: flex-direction:column; align-items:center */
  .hero-row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* 1ngdnik: flex:none; width:100% */
  .hero-left {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
  /* video hidden on mobile */
  .hero-right {
    display: none;
  }
  /* font-size 56px */
  .hero-title {
    font-size: 56px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fallback-blob { animation: none; }
}
</style>
