<script setup>
/**
 * AppNavbar — Fixed top navigation bar.
 *
 * Synchronized 1:1 with Gizera Web reference (framer-AsZ1t / framer-1am4r9l):
 *   - Desktop (>=810px):
 *       * Transparent glassmorphic bar (backdrop-blur-md, border-bottom rgba(255,255,255,0.08))
 *       * Brand logo left (Gizera icon + text)
 *       * Pill nav links center (backdrop-blur-md, border rgba(255,255,255,0.08), bg rgba(255,255,255,0.04), radius 13px)
 *       * Glass pill "Hubungi Kami" button right (radius 16px, border rgba(255,255,255,0.14), bg rgba(255,255,255,0.05))
 *   - Mobile (<810px):
 *       * Logo left, hamburger button right
 *       * Slide-down menu with dark glassmorphic surface
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

// Window resize handler: auto-close mobile menu when transitioning to desktop (>=810px)
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
  { label: 'Layanan',           to: '/services' },
  { label: 'Studi Kasus',       to: '/case-studies' },
  { label: 'Tentang Kami',      to: '/about' },
  { label: 'Artikel & Wawasan', to: '/blogs' },
]
</script>

<template>
  <!-- Navbar wrapper — fixed, full-width, transparent glassmorphic surface matching Gizera Web framer-AsZ1t -->
  <header class="app-navbar-header">
    <div class="app-navbar-container">
      <!-- ── Logo ── -->
      <RouterLink
        to="/"
        class="app-navbar-logo"
        aria-label="Gizera — Beranda"
        @click="closeMenu(false)"
      >
        <img
          src="@/assets/gizera-logo.png"
          alt="Gizera Logo"
          class="h-8 w-auto object-contain"
          width="120"
          height="32"
        />
      </RouterLink>

      <!-- ── Desktop Nav (>=810px) matching Gizera Web framer-1b1fkzk & framer-OtDDP ── -->
      <div class="app-navbar-desktop">
        <!-- Nav links pills -->
        <nav class="app-nav-pills" aria-label="Navigasi utama">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="app-nav-pill"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <!-- CTA button matching Gizera Web framer-rkuqdx glass pill -->
        <RouterLink
          to="/contact"
          class="app-navbar-cta"
        >
          Hubungi Kami
        </RouterLink>
      </div>

      <!-- ── Hamburger button (mobile <810px) ── -->
      <button
        ref="hamburgerBtn"
        class="app-navbar-hamburger"
        :aria-expanded="isOpen.toString()"
        :aria-label="isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
        aria-controls="mobile-menu"
        type="button"
        @click="toggleMenu"
      >
        <span class="sr-only">{{ isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi' }}</span>
        <span
          class="hamburger-line"
          :class="isOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="hamburger-line"
          :class="isOpen ? 'opacity-0 scale-x-0' : ''"
        />
        <span
          class="hamburger-line"
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
        class="app-navbar-mobile"
        aria-label="Navigasi mobile"
      >
        <ul class="flex flex-col gap-2" role="list">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="mobile-nav-link"
              @click="closeMenu(false)"
              @keydown.enter="closeMenu(false)"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <div class="mt-4 pt-4 border-t border-white/[0.08]">
          <RouterLink
            to="/contact"
            class="mobile-cta-btn"
            @click="closeMenu(false)"
          >
            Hubungi Kami
          </RouterLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
/* ── Fixed Navbar Header ── */
.app-navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.app-navbar-container {
  width: 100%;
  max-width: 1300px;
  height: 64px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

@media (max-width: 809.98px) {
  .app-navbar-container {
    padding: 0 20px;
  }
}

.app-navbar-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  opacity: 0.95;
  transition: opacity 0.2s ease;
  text-decoration: none;
}
.app-navbar-logo:hover {
  opacity: 1;
}

/* ── Desktop Nav (>= 810px) ── */
.app-navbar-desktop {
  display: none;
  align-items: center;
  gap: 16px;
}

@media (min-width: 810px) {
  .app-navbar-desktop {
    display: flex;
  }
}

.app-nav-pills {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-nav-pill {
  display: inline-flex;
  align-items: center;
  padding: 7px 18px;
  border-radius: 13px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: inherit;
  font-size: 14.5px;
  color: #fafafa;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.2s ease;
}

.app-nav-pill:hover {
  background-color: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.app-nav-pill.router-link-active {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.24);
  color: #ffffff;
}

/* ── CTA Glass Pill Button ── */
.app-navbar-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.app-navbar-cta:hover {
  background-color: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.28);
}

/* ── Mobile Hamburger (< 810px) ── */
.app-navbar-hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ffffff;
}

@media (min-width: 810px) {
  .app-navbar-hamburger {
    display: none;
  }
}

.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: currentColor;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

/* ── Mobile Menu Dropdown ── */
.app-navbar-mobile {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background-color: rgba(12, 14, 18, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 16px 24px 24px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: rgba(255, 255, 255, 0.04);
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.mobile-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 16px;
  background-color: #0752ff;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 20px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}
.mobile-cta-btn:hover {
  background-color: #0043d9;
}
</style>