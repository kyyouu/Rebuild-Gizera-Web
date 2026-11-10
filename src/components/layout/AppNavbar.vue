<script setup>
/**
 * AppNavbar — Fixed top navigation bar.
 *
 * Desktop (≥810px): Logo left, horizontal links, CTA button right.
 * Mobile (<810px):  Logo left, hamburger right → slide-down menu.
 *
 * Uses design tokens from style.css.
 * Breakpoint: --breakpoint-sm = 810px
 */
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route    = useRoute()
const isOpen   = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

// Auto-close mobile menu on route change
watch(route, closeMenu)

// Prevent body scroll when mobile menu is open
watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const navLinks = [
  { label: 'Layanan',      to: '/services' },
  { label: 'Studi Kasus',  to: '/case-studies' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'Artikel',      to: '/blogs' },
]
</script>

<template>
  <!-- Navbar wrapper — fixed, full-width, z-index 50 -->
  <header
    class="fixed top-0 left-0 right-0 z-50"
    style="background-color: rgba(255,255,255,0.95); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid var(--color-border);"
  >
    <!-- Inner row — max-width container -->
    <div
      class="w-full mx-auto flex items-center justify-between px-4"
      style="max-width: var(--container-site, 1300px); height: 63px; padding-left: 32px; padding-right: 32px;"
    >
      <!-- ── Logo ── -->
      <RouterLink
        to="/"
        class="flex-shrink-0 flex items-center"
        aria-label="Gizera — Beranda"
        @click="closeMenu"
      >
        <img
          src="@/assets/gizera-logo.png"
          alt="Gizera"
          class="h-8 w-auto object-contain"
          width="120"
          height="40"
        />
      </RouterLink>

      <!-- ── Desktop Nav (≥810px) ── -->
      <nav
        class="hidden items-center gap-1"
        style="display: none;"
        aria-label="Navigasi utama"
      >
        <!-- Desktop nav links — shown via CSS at ≥810px -->
      </nav>

      <!-- Desktop layout: links + CTA in one row (shown at ≥810px) -->
      <div class="nav-desktop hidden items-center gap-6" aria-label="Navigasi utama">
        <!-- Nav links -->
        <nav class="flex items-center gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link px-3 py-2 rounded-md transition-colors duration-150"
            :style="{
              fontFamily:  'var(--font-ui)',
              fontSize:    '15px',
              fontWeight:  '500',
              color:       'var(--color-text-muted)',
            }"
            active-class="nav-link--active"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- CTA button -->
        <RouterLink
          to="/contact"
          class="inline-flex items-center rounded-lg font-semibold transition-all duration-200"
          style="
            background-color: var(--color-brand-blue);
            color: #fff;
            font-family: var(--font-ui);
            font-size: 14px;
            padding: 10px 20px;
            box-shadow: var(--shadow-button);
          "
        >
          Hubungi Kami
        </RouterLink>
      </div>

      <!-- ── Hamburger button (mobile <810px) ── -->
      <button
        class="nav-hamburger flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-md transition-colors duration-150"
        :aria-expanded="isOpen.toString()"
        aria-label="Buka menu navigasi"
        :aria-controls="'mobile-menu'"
        type="button"
        style="color: var(--color-text-heading);"
        @click="toggleMenu"
      >
        <span class="sr-only">{{ isOpen ? 'Tutup menu' : 'Buka menu' }}</span>
        <!-- Animated hamburger icon -->
        <span
          class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300"
          :class="isOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300"
          :class="isOpen ? 'opacity-0 scale-x-0' : ''"
        />
        <span
          class="block w-5 h-0.5 bg-current rounded-full transition-all duration-300"
          :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </div>

    <!-- ── Mobile Menu Dropdown (<810px) ── -->
    <Transition
      enter-active-class="transition-all duration-250 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-show="isOpen"
        id="mobile-menu"
        class="nav-mobile-menu border-t"
        style="
          border-color: var(--color-border);
          background-color: #ffffff;
          padding: 16px 24px 24px;
        "
        aria-label="Navigasi mobile"
      >
        <!-- Mobile links -->
        <ul class="flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="mobile-nav-link flex items-center w-full px-3 py-3 rounded-lg transition-colors duration-150"
              :style="{
                fontFamily: 'var(--font-ui)',
                fontSize:   '16px',
                fontWeight: '500',
                color:      'var(--color-text-primary)',
              }"
              active-class="mobile-nav-link--active"
              @click="closeMenu"
              @keydown.enter="closeMenu"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile CTA -->
        <div class="mt-4 pt-4" style="border-top: 1px solid var(--color-border);">
          <RouterLink
            to="/contact"
            class="flex items-center justify-center w-full rounded-lg font-semibold transition-all duration-200"
            style="
              background-color: var(--color-brand-blue);
              color: #fff;
              font-family: var(--font-ui);
              font-size: 15px;
              padding: 13px 20px;
              box-shadow: var(--shadow-button);
            "
            @click="closeMenu"
          >
            Hubungi Kami
          </RouterLink>
        </div>
      </nav>
    </Transition>
  </header>

  <!-- Navbar spacer — prevents content from hiding behind fixed navbar -->
  <div class="navbar-spacer" style="height: 63px;" aria-hidden="true" />
</template>

<style scoped>
/* ── Desktop nav: show at ≥810px ── */
@media (min-width: 810px) {
  .nav-desktop   { display: flex !important; }
  .nav-hamburger { display: none  !important; }
  .nav-mobile-menu { display: none !important; }
}

/* ── Mobile: show hamburger ── */
@media (max-width: 809.98px) {
  .nav-desktop   { display: none  !important; }
  .nav-hamburger { display: flex  !important; }

  /* Header height on mobile */
  header { }
  .navbar-spacer { height: 63px; }
}

/* ── Nav link active state ── */
.nav-link {
  position: relative;
}
.nav-link:hover {
  color: var(--color-brand-blue) !important;
  background-color: var(--color-brand-blue-pale);
}
.nav-link.nav-link--active,
.nav-link.router-link-active {
  color: var(--color-brand-blue) !important;
  font-weight: 600;
}

/* ── Mobile link active state ── */
.mobile-nav-link:hover {
  background-color: var(--color-bg-pale-teal);
  color: var(--color-brand-blue) !important;
}
.mobile-nav-link.mobile-nav-link--active,
.mobile-nav-link.router-link-active {
  color: var(--color-brand-blue) !important;
  background-color: var(--color-brand-blue-pale);
  font-weight: 600;
}

/* ── Tablet (810–1199px): condensed spacing ── */
@media (min-width: 810px) and (max-width: 1199.98px) {
  .nav-desktop {
    gap: 16px;
  }
  .nav-link {
    padding-left:  10px;
    padding-right: 10px;
  }
}
</style>
