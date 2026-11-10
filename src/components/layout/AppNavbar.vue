<script setup>
/**
 * AppNavbar — Fixed top navigation bar.
 *
 * Desktop (≥810px): Logo left, horizontal links, CTA button right.
 * Mobile (<810px):  Logo left, hamburger right → slide-down menu.
 *
 * Refined for Day 7 code review:
 *   - Cleaned empty <nav> and removed !important declarations
 *   - Dynamic ARIA accessibility labels
 *   - Keyboard Escape handling with focus restoration
 *   - Viewport resize auto-close (at ≥810px)
 *   - Safe body scroll lock with onUnmounted cleanup
 *   - Tailwind design token utilities (bg-brand-blue, text-text-heading, etc.)
 */
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route        = useRoute()
const isOpen       = ref(false)
const hamburgerBtn = ref(null)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu(restoreFocus = false) {
  if (isOpen.value) {
    isOpen.value = false
    if (restoreFocus) {
      nextTick(() => {
        hamburgerBtn.value?.focus()
      })
    }
  }
}

// Track original overflow to safely restore previous style
let previousOverflow = ''

// Watch isOpen to toggle body overflow cleanly
watch(isOpen, (val) => {
  if (typeof document !== 'undefined') {
    if (val) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = previousOverflow
    }
  }
})

// Auto-close on route change
watch(route, () => {
  closeMenu(false)
})

// Escape key handler: close mobile menu and restore keyboard focus
function handleKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu(true)
  }
}

// Window resize handler: auto-close mobile menu when transitioning to desktop (≥810px)
function handleResize() {
  if (typeof window !== 'undefined' && window.innerWidth >= 810 && isOpen.value) {
    closeMenu(false)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  if (typeof document !== 'undefined' && isOpen.value) {
    document.body.style.overflow = previousOverflow
  }
})

const navLinks = [
  { label: 'Layanan',      to: '/services' },
  { label: 'Studi Kasus',  to: '/case-studies' },
  { label: 'Tentang Kami', to: '/about' },
  { label: 'Artikel',      to: '/blogs' },
]
</script>

<template>
  <!-- Navbar wrapper — fixed, full-width, glassmorphic surface, z-50 -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
    <!-- Inner row — max 1300px container with responsive horizontal padding -->
    <div class="w-full max-w-[1300px] h-[63px] mx-auto flex items-center justify-between px-4 sm:px-8">
      <!-- ── Logo ── -->
      <RouterLink
        to="/"
        class="shrink-0 flex items-center"
        aria-label="Gizera — Beranda"
        @click="closeMenu(false)"
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
      <div class="hidden sm:flex items-center gap-4 md:gap-6">
        <!-- Nav links -->
        <nav class="flex items-center gap-1" aria-label="Navigasi utama">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link px-3 py-2 rounded-md font-ui text-[15px] font-medium text-text-muted transition-colors duration-150"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- CTA button -->
        <RouterLink
          to="/contact"
          class="inline-flex items-center rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white font-ui text-sm font-semibold px-5 py-2.5 shadow-button transition-all duration-200"
        >
          Hubungi Kami
        </RouterLink>
      </div>

      <!-- ── Hamburger button (mobile <810px) ── -->
      <button
        ref="hamburgerBtn"
        class="flex sm:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-md text-text-heading transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        :aria-expanded="isOpen.toString()"
        :aria-label="isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
        aria-controls="mobile-menu"
        type="button"
        @click="toggleMenu"
      >
        <span class="sr-only">{{ isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi' }}</span>
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
        class="sm:hidden border-t border-border bg-white px-6 pt-4 pb-6"
        aria-label="Navigasi mobile"
      >
        <!-- Mobile links -->
        <ul class="flex flex-col gap-1" role="list">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="mobile-nav-link flex items-center w-full px-3 py-3 rounded-lg font-ui text-base font-medium text-text-primary transition-colors duration-150"
              @click="closeMenu(false)"
              @keydown.enter="closeMenu(false)"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile CTA -->
        <div class="mt-4 pt-4 border-t border-border">
          <RouterLink
            to="/contact"
            class="flex items-center justify-center w-full rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white font-ui text-[15px] font-semibold py-3 px-5 shadow-button transition-all duration-200"
            @click="closeMenu(false)"
          >
            Hubungi Kami
          </RouterLink>
        </div>
      </nav>
    </Transition>
  </header>

  <!-- Navbar spacer — prevents content from hiding behind fixed navbar -->
  <div class="h-[63px]" aria-hidden="true" />
</template>

<style scoped>
/* ── Desktop nav link states ── */
.nav-link {
  position: relative;
}
.nav-link:hover {
  color: var(--color-brand-blue);
  background-color: var(--color-brand-blue-pale);
}
.nav-link.router-link-active {
  color: var(--color-brand-blue);
  font-weight: 600;
}

/* ── Mobile link states ── */
.mobile-nav-link:hover {
  background-color: var(--color-bg-pale-teal);
  color: var(--color-brand-blue);
}
.mobile-nav-link.router-link-active {
  color: var(--color-brand-blue);
  background-color: var(--color-brand-blue-pale);
  font-weight: 600;
}
</style>
