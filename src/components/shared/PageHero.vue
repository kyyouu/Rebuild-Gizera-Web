<script setup>
/**
 * PageHero.vue — Reusable page hero component untuk subpage Gizera.
 *
 * Desain mengacu pada Gizera Web referensi (framer-m1yhf6-container /
 * framer-10a67jp / framer-OcY1Q) — dark background dengan gradient overlay,
 * dengan konten judul, deskripsi, dan breadcrumb opsional.
 *
 * Props:
 *   - tag        {String}  - Uppercase label badge di atas judul (opsional)
 *   - title      {String}  - Judul utama halaman (required)
 *   - titleHighlight {String} - Bagian judul yang di-highlight dengan warna putih penuh (opsional)
 *   - description {String} - Paragraf deskripsi di bawah judul (opsional)
 *   - breadcrumbs {Array}  - Array breadcrumb items [{label, to}] (opsional)
 *                            Item terakhir dianggap aktif (tanpa link)
 */

import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  tag: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  titleHighlight: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  breadcrumbs: {
    type: Array,
    default: () => [],
    // Each item: { label: String, to: String (optional) }
  },
})

// Render judul sebagai dua bagian: prefix + highlight
// Jika titleHighlight tidak ada, seluruh title ditampilkan biasa
const titleParts = computed(() => {
  if (!props.titleHighlight) return null
  const idx = props.title.lastIndexOf(props.titleHighlight)
  if (idx === -1) return null
  return {
    prefix: props.title.slice(0, idx),
    highlight: props.titleHighlight,
  }
})
</script>

<template>
  <section class="page-hero" aria-label="Page hero">
    <!-- Background gradient overlay (matches Gizera Web dark hero pattern) -->
    <div class="page-hero-bg" aria-hidden="true">
      <div class="page-hero-gradient" />
    </div>

    <div class="page-hero-container">
      <!-- Breadcrumb (opsional) -->
      <nav
        v-if="breadcrumbs.length"
        class="page-hero-breadcrumb"
        aria-label="Breadcrumb"
      >
        <ol class="breadcrumb-list">
          <li
            v-for="(crumb, idx) in breadcrumbs"
            :key="idx"
            class="breadcrumb-item"
          >
            <!-- Separator sebelum item (kecuali item pertama) -->
            <span v-if="idx > 0" class="breadcrumb-sep" aria-hidden="true">/</span>

            <!-- Link jika bukan item terakhir dan ada 'to' -->
            <RouterLink
              v-if="crumb.to && idx < breadcrumbs.length - 1"
              :to="crumb.to"
              class="breadcrumb-link"
            >
              {{ crumb.label }}
            </RouterLink>
            <!-- Item aktif (terakhir) -->
            <span
              v-else
              class="breadcrumb-current"
              :aria-current="idx === breadcrumbs.length - 1 ? 'page' : undefined"
            >
              {{ crumb.label }}
            </span>
          </li>
        </ol>
      </nav>

      <!-- Content -->
      <div class="page-hero-content">
        <!-- Tag badge (opsional) -->
        <div v-if="tag" class="page-hero-tag" aria-hidden="true">
          {{ tag }}
        </div>

        <!-- Judul dengan highlight opsional -->
        <h1 class="page-hero-title">
          <template v-if="titleParts">
            <span class="title-dim">{{ titleParts.prefix }}</span>
            <span class="title-bright">{{ titleParts.highlight }}</span>
          </template>
          <template v-else>
            {{ title }}
          </template>
        </h1>

        <!-- Deskripsi (opsional) -->
        <p v-if="description" class="page-hero-description">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section & Background ── */
.page-hero {
  position: relative;
  width: 100%;
  /* Padding-top besar agar konten tidak tertutup fixed navbar (tinggi navbar 64px + ruang visual) */
  padding-top: 160px;
  padding-bottom: 80px;
  background-color: #00030d;
  overflow: hidden;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.page-hero-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(7, 82, 255, 0.18) 0%, transparent 70%),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(20, 243, 193, 0.06) 0%, transparent 60%),
    linear-gradient(180deg, rgba(0, 3, 13, 0) 60%, #00030d 100%);
}

/* ── Container ── */
.page-hero-container {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* ── Breadcrumb ── */
.breadcrumb-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.breadcrumb-sep {
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  line-height: 1;
}

.breadcrumb-link {
  font-family: var(--font-ui);
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color 0.15s ease;
  letter-spacing: 0.01em;
}

.breadcrumb-link:hover {
  color: rgba(255, 255, 255, 0.75);
}

.breadcrumb-current {
  font-family: var(--font-ui);
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.01em;
}

/* ── Content ── */
.page-hero-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 760px;
}

/* Tag badge */
.page-hero-tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 14px;
  border-radius: 9999px;
  border: 1px solid rgba(20, 243, 193, 0.25);
  background-color: rgba(20, 243, 193, 0.08);
  font-family: var(--font-ui);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #14f3c1;
  text-transform: uppercase;
  width: fit-content;
}

/* Judul */
.page-hero-title {
  font-family: var(--font-display);
  font-size: clamp(38px, 5.5vw, 64px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.032em;
  margin: 0;
}

/* Bagian judul redup (prefix) */
.title-dim {
  color: rgba(255, 255, 255, 0.65);
}

/* Bagian judul terang (highlight) */
.title-bright {
  color: #ffffff;
}

/* Ketika tidak ada titleHighlight — seluruh judul berwarna terang */
.page-hero-title:not(:has(.title-dim)) {
  color: #ffffff;
}

/* Deskripsi */
.page-hero-description {
  font-family: var(--font-body);
  font-size: clamp(15px, 1.8vw, 17px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 620px;
}

/* ── Responsive ── */
@media (max-width: 809px) {
  .page-hero {
    padding-top: 120px;
    padding-bottom: 56px;
  }

  .page-hero-container {
    padding: 0 20px;
    gap: 20px;
  }

  .page-hero-title {
    font-size: clamp(32px, 8vw, 44px);
  }
}
</style>

