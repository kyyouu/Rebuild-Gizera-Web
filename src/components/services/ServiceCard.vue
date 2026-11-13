<script setup>
/**
 * ServiceCard.vue — Reusable service card component.
 *
 * Menerima data layanan via props dan merender kartu yang bisa diklik
 * dengan navigasi ke /services/:slug.
 *
 * Desain mengacu pada HomeServices.vue dan service cards di Gizera Web referensi.
 *
 * Props:
 *   - service {Object} - Service data object dari services.js
 *     { id, slug, title, tagline, icon, ... }
 *   - variant {String} - 'default' | 'light' — konteks latar belakang
 */

import { RouterLink } from 'vue-router'

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  variant: {
    type: String,
    default: 'default', // 'default' (dark bg) | 'light' (white bg)
    validator: (v) => ['default', 'light'].includes(v),
  },
})
</script>

<template>
  <RouterLink
    :to="`/services/${service.slug}`"
    class="service-card"
    :class="`service-card--${variant}`"
    :aria-label="`Lihat detail layanan ${service.title}`"
  >
    <!-- Top row: icon + arrow -->
    <div class="service-card-top">
      <!-- Service icon -->
      <div
        class="service-card-icon"
        v-html="service.icon"
        aria-hidden="true"
      />
      <!-- Arrow indicator -->
      <span class="service-card-arrow" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="14"
          height="14"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>

    <!-- Title -->
    <h3 class="service-card-title">{{ service.title }}</h3>

    <!-- Description / tagline -->
    <p class="service-card-desc">{{ service.tagline }}</p>
  </RouterLink>
</template>

<style scoped>
/* ── Base Card ── */
.service-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 28px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

/* ── Dark variant (default) ── */
.service-card--default {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.service-card--default:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

/* ── Light variant ── */
.service-card--light {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0.6px 0.6px -1.25px rgba(0, 94, 255, 0.04),
    0px 2.3px 2.3px -2.5px rgba(0, 94, 255, 0.03),
    0px 10px 10px -3.75px rgba(0, 94, 255, 0.01);
}

.service-card--light:hover {
  transform: translateY(-3px);
  box-shadow: 0px 4px 20px -2px rgba(0, 94, 255, 0.12),
    0px 12px 32px -4px rgba(0, 94, 255, 0.08);
  border-color: rgba(13, 64, 155, 0.14);
}

/* ── Top Row ── */
.service-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

/* ── Icon ── */
.service-card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.service-card--default .service-card-icon {
  color: #14f3c1;
}

.service-card--light .service-card-icon {
  color: #0d409b;
}

.service-card-icon :deep(svg) {
  width: 36px;
  height: 36px;
}

/* ── Arrow ── */
.service-card-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.service-card--default .service-card-arrow {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
}

.service-card--light .service-card-arrow {
  background: rgba(13, 64, 155, 0.08);
  color: rgba(13, 64, 155, 0.7);
}

.service-card--default:hover .service-card-arrow {
  background: #005eff;
  color: #ffffff;
  transform: translate(2px, -2px);
}

.service-card--light:hover .service-card-arrow {
  background: #0d409b;
  color: #ffffff;
  transform: translate(2px, -2px);
}

/* ── Title ── */
.service-card-title {
  font-family: var(--font-display);
  font-size: clamp(19px, 2.2vw, 22px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.service-card--default .service-card-title {
  color: #ffffff;
}

.service-card--light .service-card-title {
  color: #0e285d;
}

/* ── Description ── */
.service-card-desc {
  font-family: var(--font-body);
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0;
}

.service-card--default .service-card-desc {
  color: rgba(255, 255, 255, 0.65);
}

.service-card--light .service-card-desc {
  color: #636363;
}
</style>

